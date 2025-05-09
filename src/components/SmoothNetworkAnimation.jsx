import React, { useEffect, useRef } from 'react';
import '../style/NetworkAnimation.css';

const NODE_COUNT = 60;
const SPEED = 0.3; // Lower is slower

const createNodes = () => {
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            dx: (Math.random() - 0.5) * SPEED,
            dy: (Math.random() - 0.5) * SPEED,
        });
    }
    return nodes;
};

const SmoothNetworkAnimation = () => {
    const nodesRef = useRef(createNodes());
    const svgRef = useRef(null);

    useEffect(() => {
        const animate = () => {
            const width = svgRef.current.clientWidth;
            const height = svgRef.current.clientHeight;
            const svg = svgRef.current;

            // Clear existing lines/nodes
            while (svg.firstChild) {
                svg.removeChild(svg.firstChild);
            }

            const nodes = nodesRef.current;

            // Update positions
            nodes.forEach((node) => {
                node.x += node.dx;
                node.y += node.dy;

                // Bounce off edges
                if (node.x < 0 || node.x > 100) node.dx *= -1;
                if (node.y < 0 || node.y > 100) node.dy *= -1;
            });

            // Draw lines
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 15) {
                        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        line.setAttribute('x1', `${(a.x / 100) * width}`);
                        line.setAttribute('y1', `${(a.y / 100) * height}`);
                        line.setAttribute('x2', `${(b.x / 100) * width}`);
                        line.setAttribute('y2', `${(b.y / 100) * height}`);
                        line.setAttribute('class', 'line');
                        svg.appendChild(line);
                    }
                }
            }

            // Draw nodes
            nodes.forEach((node) => {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', `${(node.x / 100) * width}`);
                circle.setAttribute('cy', `${(node.y / 100) * height}`);
                circle.setAttribute('r', 3);
                circle.setAttribute('class', 'node');
                svg.appendChild(circle);
            });

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div className="network-animation">
            <svg ref={svgRef} width="100%" height="100%" />
        </div>
    );
};

export default SmoothNetworkAnimation;

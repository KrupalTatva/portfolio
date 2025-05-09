import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../style/NetworkAnimation.css';

const NODE_COUNT = 50;
const MOVE_RANGE = 5; // Max movement range in percent

const generateNodes = () => {
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
            id: i,
            baseX: Math.random() * 100,
            baseY: Math.random() * 100,
            offsetX: 0,
            offsetY: 0,
            connections: [],
        });
    }

    // Randomly connect nodes
    nodes.forEach((node) => {
        const connectionsCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < connectionsCount; i++) {
            const target = nodes[Math.floor(Math.random() * NODE_COUNT)];
            if (target.id !== node.id && !node.connections.includes(target.id)) {
                node.connections.push(target.id);
            }
        }
    });

    return nodes;
};

const getRandomOffset = () => (Math.random() - 0.5) * MOVE_RANGE * 2;

const NetworkAnimation = () => {
    const [nodes, setNodes] = useState(generateNodes());

    useEffect(() => {
        const interval = setInterval(() => {
            setNodes((prevNodes) =>
                prevNodes.map((node) => ({
                    ...node,
                    offsetX: getRandomOffset(),
                    offsetY: getRandomOffset(),
                }))
            );
        }, 1000); // Re-randomize every 1 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="network-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <svg width="100%" height="100%">
                {/* Draw lines */}
                {nodes.map((node) =>
                    node.connections.map((connectionId) => {
                        const target = nodes.find((n) => n.id === connectionId);
                        const x1 = node.baseX + node.offsetX;
                        const y1 = node.baseY + node.offsetY;
                        const x2 = target.baseX + target.offsetX;
                        const y2 = target.baseY + target.offsetY;
                        return (
                            <line
                                key={`${node.id}-${connectionId}`}
                                x1={`${x1}%`}
                                y1={`${y1}%`}
                                x2={`${x2}%`}
                                y2={`${y2}%`}
                                className="line"
                            />
                        );
                    })
                )}

                {/* Draw nodes */}
                {nodes.map((node) => {
                    const cx = node.baseX + node.offsetX;
                    const cy = node.baseY + node.offsetY;

                    return (
                        <motion.circle
                            key={node.id}
                            cx={`${cx}%`}
                            cy={`${cy}%`}
                            r="3"
                            className="node"
                            animate={{
                                cx: [`${cx}%`],
                                cy: [`${cy}%`],
                            }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                            }}
                        />
                    );
                })}
            </svg>
        </motion.div>
    );
};

export default NetworkAnimation;

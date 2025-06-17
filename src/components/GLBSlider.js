import React, { useState, useEffect, useCallback } from 'react';
import GLBModelWithControls from './GLBModelWithControls'; // Make sure path is correct
import { AnimatePresence, motion } from 'framer-motion'; // install this if not already

const glbFiles = [
    'animation/360_sphere_robot_done.glb',
    'animation/360_sphere_robot.glb',
    'animation/csa_robot.glb',
    'animation/drone_scifi.glb',
    'animation/earth_hologram.glb',
    'animation/futuristic_flying_animated_robot_-_low_poly.glb',
    'animation/keyboardist_robot.glb',
    'animation/kuma_heavy_robot_r-9000s.glb',
    'animation/nerinho_-_mascote_da_neomind.glb',
    'animation/robert_the_robot.glb',
    'animation/ROBOT_ANIM_C.glb',
    'animation/robot_estrategia_digital.glb',
    'animation/robot_playground.glb',
    'animation/robot_rocket.glb',
    'animation/robot.glb',
    'animation/rodot_5000_-_flying_robot.glb',
    'animation/sci-fi_panels.glb',
    'animation/sci_fi_meeting_table.glb',
    'animation/scific_drone_for_free.glb',
    'animation/simulation_laser_cutting_robot_systems.glb',
    'animation/small_robot.glb',
    'animation/world_sphere_s7ntech.glb',
];

export default function GLBViewer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % glbFiles.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? glbFiles.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [handleNext, handlePrev]);

    return (
        <div style={{ textAlign: 'center', padding: 20, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 600 }}>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={glbFiles[currentIndex]}
                        custom={direction}
                        initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -500 : 500, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <GLBModelWithControls modelUrl={glbFiles[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', gap: 20 }}>
                <button onClick={handlePrev} style={btnStyle}>◀️ Prev</button>
                <button onClick={handleNext} style={btnStyle}>Next ▶️</button>
            </div>

            <p style={{ marginTop: 10, fontSize: 14, color: '#555' }}>
                {glbFiles[currentIndex]}
            </p>
        </div>
    );
}

const btnStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#fff',
};


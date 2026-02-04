import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeartRain from '@/components/intro/HeartRain';
import Logo3D from '@/components/intro/Logo3D';
import IntroText from '@/components/intro/IntroText';
import ClickToEnter from '@/components/intro/ClickToEnter';
import './IntroPage.css';

const IntroPage = () => {
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();

    const handleEnter = () => {
        setIsExiting(true);
        // Wait for fade-out animation before navigating
        setTimeout(() => {
            navigate('/home');
        }, 1500);
    };

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="intro-page"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                    {/* Vignette overlay */}
                    <div className="vignette" />

                    {/* Heart rain background */}
                    <HeartRain />

                    <div className="intro-center-stack">
                        <Logo3D />
                        <IntroText />
                    </div>


                    {/* Click to enter button */}
                    <ClickToEnter onClick={handleEnter} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroPage;

import { motion } from 'framer-motion';

const IntroText = () => {
    return (
        <motion.div
            className="intro-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.5,
                delay: 2.5,
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            <h1 className="intro-text">
                When Love meets Faith
            </h1>
        </motion.div>
    );
};

export default IntroText;

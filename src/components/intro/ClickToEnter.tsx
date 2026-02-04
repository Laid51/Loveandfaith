import { motion } from 'framer-motion';

interface ClickToEnterProps {
    onClick: () => void;
}

const ClickToEnter = ({ onClick }: ClickToEnterProps) => {
    return (
        <motion.div
            className="click-to-enter-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1,
                delay: 4,
                ease: 'easeInOut'
            }}
        >
            <motion.button
                className="click-to-enter-button"
                onClick={onClick}
                whileHover={{
                    scale: 1.05,
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                }}
                whileTap={{ scale: 0.95 }}
            >
                Click here
            </motion.button>
        </motion.div>
    );
};

export default ClickToEnter;

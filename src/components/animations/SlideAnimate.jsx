import { motion } from 'framer-motion'

export const SlideInTop = ({ children, delay, once }) => {
    const variant = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay } }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once }}
            onViewportLeave={delay}
            variants={variant}
        >
            {children}
        </motion.div>
    )
}

export const SlideInRight = ({ children, delay }) => {
    const variant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeOut", duration: 0.6, delay: delay }}
            variants={variant}
        >
            {children}
        </motion.div>
    )
}

export const SlideInBottom = ({ children, once }) => {
    const variant = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once }}
            transition={{ ease: 'easeOut', duration: 0.6 }}
            variants={variant}
        >
            {children}
        </motion.div>
    )
}

export const SlideInLeft = ({ children, delay }) => {
    const variant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeOut", duration: 0.6, delay: delay }}
            variants={variant}
        >
            {children}
        </motion.div>
    )
}

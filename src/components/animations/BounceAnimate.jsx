import { motion } from "framer-motion"

export const BounceInTop = ({ children, delayVal }) => {
    const bounceEffect = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: delayVal
            }}
            variants={bounceEffect}
            className="mx-auto"
        >
            {children}
        </motion.div>
    )
}

export const BounceInRight = ({ children, delayVal }) => {
    const bounceEffect = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: delayVal
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={bounceEffect}
        >
            {children}
        </motion.div>
    )
}
export const BounceInBottom = ({ children, delayVal }) => {
    const bounceEffect = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: delayVal
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={bounceEffect}
        >
            {children}
        </motion.div>
    )
}
export const BounceInLeft = ({ children, delayVal }) => {
    const bounceEffect = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: delayVal
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={bounceEffect}
        >
            {children}
        </motion.div>
    )
}
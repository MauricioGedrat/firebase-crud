import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { InView, useInView } from 'react-intersection-observer'

const AnimateVisible: React.FC = ({ children }) => {
    const controls = useAnimation()
    const THRESHOLD = [0.25, 0.5, 0.75]
    const [ref, inView] = useInView({ threshold: THRESHOLD })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 2 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                }}
            >
                {children}
            </motion.div>
        </>
    )
}
export default AnimateVisible

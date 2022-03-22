import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

const LeftToRight = ({ children }: { children: ReactNode }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
        // threshold = Number between 0 and 1 indicating the percentage that should be visible before triggering
    })

    return (
        <div
            ref={ref}
            className={`${
                inView ? '' : ' opacity-0 -translate-x-96'
            } transform transition-fadein duration-[2s]`}
        >
            {children}
        </div>
    )
}

export default LeftToRight

import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const MoonSvg = (props: svgProps): JSX.Element => {
    const { size = 24, color = 'currentColor' } = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={size}
                height={size}
                fill={color}
                viewBox="0 0 20 20"
            >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>{' '}
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="-260"
                    to="-360"
                    dur="0.2s"
                    repeatCount="1"
                />
            </svg>
        </>
    )
}

export default MoonSvg

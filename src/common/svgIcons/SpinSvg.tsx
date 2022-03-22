import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const SpinSvg = (props: svgProps): JSX.Element => {
    const { size = 24, color = 'currentColor' } = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={size}
                height={size}
                stroke={color}
                fill="none"
                viewBox="0 0 66 66"
            >
                <circle
                    cx="33"
                    cy="33"
                    fill="none"
                    r="24"
                    stroke={color}
                    strokeDasharray="40, 134"
                    strokeDashoffset="325"
                    strokeLinecap="round"
                    strokeWidth={8}
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 33 33"
                        to="360 33 33"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </>
    )
}

export default SpinSvg

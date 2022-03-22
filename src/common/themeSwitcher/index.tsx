import { useTheme } from 'next-themes'
import { MoonSvg, SunSvg } from 'common/svgIcons'
import { useEffect, useState } from 'react'

interface Props {
    size?: number
}

const ThemeSwitcher = (props: Props) => {
    const { size = 28 } = props
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null
    return (
        <header className=" rounded-full p-2 top-2 right-2">
            <div className="cursor-pointer">
                {theme === 'light' ? (
                    <MoonSvg onClick={() => setTheme('dark')} size={size} />
                ) : (
                    <SunSvg onClick={() => setTheme('light')} size={size} />
                )}
            </div>
        </header>
    )
}

export default ThemeSwitcher

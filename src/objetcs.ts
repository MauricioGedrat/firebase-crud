export const navLinks: NavLink[] = [
    {
        name: 'Inicio',
        href: '/',
        className: '',
    },
    {
        name: 'Sobre',
        href: '#',
        className: '',
    },

    {
        name: 'Contato',
        href: '/contact',
        className: '',
    },
]

export interface NavLink {
    name: string
    href: string
    className: string
}

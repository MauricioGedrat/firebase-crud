import Car1 from 'assets/images/Moto.png'
import Car2 from 'assets/images/jeep.png'
import Car3 from 'assets/images/bmw.png'

export const pricingCards: PricingCard[] = [
    {
        image: Car1,
        title: 'Bronze',
        description: 'Lorem ispum in dolor backtro',
        price: '199',
        className: 'text-bronze',
    },
    {
        image: Car2,
        title: 'Prata',
        description: 'Lorem ispum in dolor backtro en dolor lorem ispun',
        price: '299',
        className: 'text-prata',
    },
    {
        image: Car3,
        title: 'Ouro',
        description:
            'Lorem ispum in dolor backtro en dolor lorem ispun e welo do noberet lorem',
        price: '399',
        className: 'text-ouro',
    },
]
export interface PricingCard {
    image: StaticImageData
    title: string
    description: string
    price: string
    className: string
}

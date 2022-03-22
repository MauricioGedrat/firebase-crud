import Work1 from 'assets/images/work1.png'
import Work2 from 'assets/images/work-2.png'
import Work3 from 'assets/images/work-3.png'
import Work4 from 'assets/images/work-4.png'
import Work5 from 'assets/images/work-5.png'
import Work6 from 'assets/images/work-6.png'
import Work7 from 'assets/images/work-7.jpg'
import Work8 from 'assets/images/work-8.jpg'
import Work9 from 'assets/images/work-9.jpg'

export const galleryImages: GalleryImage[] = [
    { image: Work1, title: 'Work 1', description: 'work1 description' },
    { image: Work2, title: 'Work 2', description: 'work2 description' },
    { image: Work3, title: 'Work 3', description: 'work3 description' },
    { image: Work4, title: 'Work 4', description: 'work4 description' },
    { image: Work5, title: 'Work 5', description: 'work5 description' },
    { image: Work6, title: 'Work 6', description: 'work6 description' },
    { image: Work7, title: 'Work 7', description: 'work7 description' },
    { image: Work8, title: 'Work 8', description: 'work8 description' },
    { image: Work9, title: 'Work 9', description: 'work9 description' },
]

export interface GalleryImage {
    image: StaticImageData
    title: string
    description: string
}

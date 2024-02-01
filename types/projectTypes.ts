import { User } from '@prisma/client'

export interface ProjectTypes {
    id: string
    imag: string
    title: string
    desc: string
    featured: boolean
    topPost: boolean
    category: string[]
    authorImage: string
    authorName: string
    publishDate: string
    createdAt: string
    user: User
}
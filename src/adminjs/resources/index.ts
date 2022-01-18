import { ResourceWithOptions } from 'adminjs'
import { Author, Book, Category, User } from '../../models'
import { authorResourceOptions } from './author'
import { bookResourceOptions } from './book'
import { categoryResourceOptions } from './category'
import { userResourceFeatures, userResourceOptions } from './user'

const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Author,
        options: authorResourceOptions
    },
    {
        resource: Book,
        options: bookResourceOptions
    },
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: User,
        options: userResourceOptions,
        features: userResourceFeatures
    }
]

export { adminJsResources }
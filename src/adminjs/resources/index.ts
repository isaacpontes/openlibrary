import { ResourceWithOptions } from 'adminjs'
import { Author, Book, Category, Loan, User } from '../../models'
import { authorResourceOptions } from './author'
import { bookResourceOptions } from './book'
import { categoryResourceOptions } from './category'
import { loanResourceOptions } from './loan'
import { userResourceFeatures, userResourceOptions } from './user'

const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Loan,
        options: loanResourceOptions
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
        resource: Author,
        options: authorResourceOptions
    },
    {
        resource: User,
        options: userResourceOptions,
        features: userResourceFeatures
    }
]

export { adminJsResources }
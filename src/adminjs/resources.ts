import { ResourceWithOptions } from 'adminjs'
import { Author, Book, Category, Loan, User } from '../models'
import { authorResourceOptions } from './resources/author'
import { bookResourceOptions } from './resources/book'
import { categoryResourceOptions } from './resources/category'
import { loanResourceOptions } from './resources/loan'
import { userResourceFeatures, userResourceOptions } from './resources/user'

const resources: ResourceWithOptions[] = [
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

export { resources }
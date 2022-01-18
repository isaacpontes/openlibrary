import Author from './author'
import Book from './book'
import Category from './category'
import User from './user'

Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' })
Book.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' })

Author.hasMany(Book, {
    foreignKey: 'authorId',
    as: 'books'
})

Category.hasMany(Book, {
    foreignKey: 'categoryId',
    as: 'books'
})

export {
    Author,
    Book,
    Category,
    User
}
import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

enum BookSituationEnum {
    BORROWED,
    AVAILABLE,
    UNAVAILABLE
}

interface BookAttributes {
    id: number
    title: string
    summary?: string
    isbn?: string
    publishDate?: Date
    situation: BookSituationEnum
    authorId: number
    categoryId: number
}

interface BookCreationAttributes
    extends Optional<BookAttributes, 'id' | 'summary' | 'isbn' | 'publishDate'> { }

interface BookInstance
    extends Model<BookAttributes, BookCreationAttributes>, BookAttributes { }

const Book = database.define<BookInstance>(
    "books",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        summary: {
            type: DataTypes.STRING
        },
        isbn: {
            type: DataTypes.STRING
        },
        publishDate: {
            type: DataTypes.DATE
        },
        situation: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        authorId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }
)

export { Book }
import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

interface LoanAttributes {
    id: number
    userId: number
    bookId: number
    returnDate: Date
}

interface LoanCreationAttributes extends Optional<LoanAttributes, 'id'> {}

interface LoanInstance extends Model<LoanAttributes, LoanCreationAttributes>, LoanAttributes { }

const Loan = database.define<LoanInstance>(
    "loans",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        bookId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        returnDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
    }
)

export { Loan }
import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

interface AuthorAttributes {
  id: number
  name: string
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, 'id'> { }

interface AuthorInstance extends Model<AuthorAttributes, AuthorCreationAttributes>, AuthorAttributes { }

const Author = database.define<AuthorInstance>(
  "authors",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)

export { Author }
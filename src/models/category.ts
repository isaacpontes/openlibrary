import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'

interface CategoryAttributes {
  id: number
  name: string
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> { }

interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes>, CategoryAttributes { }

const Category = database.define<CategoryInstance>(
  "categories",
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

export { Category }
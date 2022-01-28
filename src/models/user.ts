import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../database'
import bcrypt from 'bcrypt'

interface UserAttributes {
  id: number
  firstName: string
  lastName: string
  phone: string
  birth: Date
  email: string
  password: string
  role: "admin" | "user"
  avatar?: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes { }

const User = database.define<UserInstance>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: async (user) => {
        if (user.isNewRecord || user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 10)
        }
      }
    }
  }
)

export { User }
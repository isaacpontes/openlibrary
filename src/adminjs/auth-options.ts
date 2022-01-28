import bcrypt from 'bcrypt'
import { AuthenticationOptions } from '@adminjs/express'
import { User } from '../models'

const authOptions: AuthenticationOptions = {
    authenticate: async (username, password) => {
        const user = await User.findOne({ where: { username } })

        if (user) {
            const matched = await bcrypt.compare(password, user.password)
            if (matched) {
                return user
            }
        }

        return false
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie'
}

export { authOptions }
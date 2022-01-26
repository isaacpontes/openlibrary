import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import bcrypt from 'bcrypt'
import { database } from '../database'
import { adminJsResources } from '../adminjs/resources'
import { User } from '../models'
import { locale } from '../adminjs/locale'

AdminJs.registerAdapter(AdminJsSequelize)

// primary100: Botões principais e outline, itens ativos, outros detalhes
// primary80: Quase nada
// primary60: DatePicker
// prmary40: Quase nada
// prmary20: Quase nada

// grey100: Títulos principais, textos de tabelos, rótulos de forms
// grey80: Links da sidebar, textos de inputs, textos das ações de tabelas
// grey60: Header de tabelas, hover do botão de ações e de inputs, rótulos da página show
// grey40: Breadcrumb, borda das caixas de seleção e dos botões de ação das tabelas,
// sombra da área de filtrar, setas de esconder da sidebar
// grey20: Bg dos parents abertos da sidebar, do header, hover e separador de linhas das tabelas

// white: Bg da sidebar, bg do header, bg de vários componentes menores, algumas fontes
// accent: Sombras
// border: Quase nada
// inputBorder: Borda dos inputs sem hover/active, exceto filter
// filterInputBorder: Borda dos inputs sem hover/active apenas do filter

const adminJs = new AdminJs({
    databases: [database],
    resources: adminJsResources,
    rootPath: '/admin',
    branding: {
        companyName: 'OpenLibrary',
        theme: {
            colors: { }
        }
    },
    locale: locale
})

const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
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
})

export { adminJs, adminJsRouter }
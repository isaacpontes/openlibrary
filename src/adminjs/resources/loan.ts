import { ResourceOptions } from 'adminjs'

const loanResourceOptions: ResourceOptions = {
    navigation: 'Biblioteca',
    properties: {
        returnDate: {
            type: 'date'
        }
    },
    editProperties: ['userId', 'bookId', 'returnDate'],
    filterProperties: ['userId', 'bookId', 'returnDate', 'createdAt', 'updatedAt'],
    listProperties: ['userId', 'bookId', 'returnDate'],
    showProperties: ['userId', 'bookId', 'returnDate', 'createdAt', 'updatedAt']
}

export { loanResourceOptions }
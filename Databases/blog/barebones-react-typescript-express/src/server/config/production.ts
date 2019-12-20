export default {
    mysql: {
        connectionLimit: process.env.SQL_CON_LIM,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASS,
        host: process.env.SQL_HOST,
        database: process.env.SCHEMA
    },
    auth: {
        secret: process.env.SECRET
    },
    stripe: {
        secretKey: process.env.STRIPE_PK
    }
}
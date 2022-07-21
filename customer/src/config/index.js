const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== 'stage' || process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: process.env.Customer_PORT,
    DB_URL: process.env.MONGODB_URL,
    APP_SECRET: process.env.APP_SECRET
}
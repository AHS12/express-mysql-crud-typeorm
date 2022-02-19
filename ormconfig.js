module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "synchronize": true,
    "logging": false,
    "entities": ["src/entity/**/*.ts"],
    "migrations": ["src/database/migration/**/*.ts"],
    "subscribers": ["src/subscriber/**/*.ts"],
    "seeds": ["src/database/seeder/seeds/**/*{.ts,.js}"],
    "factories": ["src/database/seeder/factories/**/*{.ts,.js}"],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};
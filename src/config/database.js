import dotenv from "dotenv"
dotenv.config()

export default {
  dialect: process.env.DIALECT,
  host: "localhost" | process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

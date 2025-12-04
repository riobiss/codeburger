import dotenv from "dotenv"
dotenv.config()

export default {
  dialect: process.env.DIALECT,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

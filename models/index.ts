import { Sequelize } from "sequelize-typescript";
import config from "../config/config.json";

// export const sequelize = new Sequelize({
//   dialect: "mysql",
//   username: "root",
//   password: "",
//   models: [__dirname + "/models"],
// });

const sequelize = new Sequelize(
  config.local.database,
  config.local.username,
  config.local.password,
  {
    host: config.local.host,
    dialect: "mysql",
  }
);

sequelize.addModels([__dirname + "/**/*.model.ts"]);

export { sequelize };

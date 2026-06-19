import express from "express";
import { Sequelize, DataTypes } from "sequelize";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

const Potion = sequelize.define("Potion", {
  nome: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  preco: DataTypes.FLOAT,
  imagem: DataTypes.STRING,
});

// Inicialização do Banco
sequelize.sync().then(async () => {
  try {
    const sqlPath = path.resolve("potions.sql");
    const sqlScript = fs.readFileSync(sqlPath, "utf8");

    const sqlStatements = sqlScript
      .split(";")
      .map((statement) => statement.trim())
      .filter((statement) => statement.length > 0);

    for (const statement of sqlStatements) {
      await sequelize.query(statement);
    }

    console.log("Banco de dados inicializado!");
  } catch (error) {
    console.error("Erro ao rodar o script de inicialização SQL:", error);
  }
});

// Rotas CRUD
app.get("/potions", async (req, res) => {
  const potions = await Potion.findAll();
  res.json(potions);
});

app.post("/potions", async (req, res) => {
  const potion = await Potion.create(req.body);
  res.json(potion);
});

app.delete("/potions/:id", async (req, res) => {
  await Potion.destroy({ where: { id: req.params.id } });
  res.status(204).send();
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));

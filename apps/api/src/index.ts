import express, { Request, Response } from "express";
import { prismaClient } from "db/client";

const app = express();

app.use(express.json());

app.post("/users", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const data = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    id: data.id,
    username: data.username,
    password: data.password,
  });
});

app.listen(9000, () => {
  console.log("Server Running on 9000");
});

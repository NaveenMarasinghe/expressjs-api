import express, { Request, Response } from "express";
import categoriesRouter from "./routes/categories.router";
import productsRouter from "./routes/products.router";
import tenantsRouter from "./routes/tenants.router";
import usersRouter from "./routes/users.router";

const app = express();

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/categories", categoriesRouter);
app.use("/api/products", productsRouter);
app.use("/api/tenants", tenantsRouter);
app.use("/api/users", usersRouter);

export default app;

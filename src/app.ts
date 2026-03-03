import Elysia from "elysia";
import openapi from "@elysiajs/openapi";

const api = new Elysia({ prefix: "/api" });

const app = new Elysia().use(openapi()).use(api);

export default app;

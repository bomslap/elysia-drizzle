import Elysia from "elysia";
import itemsApi from "./features/items/items.api";

const api = new Elysia({ prefix: "/api" }).use(itemsApi);

const app = new Elysia().use(api);

export default app;

import { Elysia } from "elysia";
import { ItemsService } from "./items.service";
import { CreateItemDto, UpdateItemDto, ItemParamsIdDto } from "./items.dto";

const service = new ItemsService();

const itemsApi = new Elysia({ prefix: "/items" })
  .post("/", ({ body }) => service.create(body), {
    body: CreateItemDto,
  })
  .get("/", () => service.findAll())
  .get("/:id", ({ params }) => service.findOne(params.id), {
    params: ItemParamsIdDto,
  })
  .patch("/:id", ({ params, body }) => service.update(params.id, body), {
    params: ItemParamsIdDto,
    body: UpdateItemDto,
  })
  .delete("/:id", ({ params }) => service.remove(params.id), {
    params: ItemParamsIdDto,
  });

export default itemsApi;

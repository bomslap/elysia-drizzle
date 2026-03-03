import db from "../../libs/drizzle/db";
import { CreateItem, UpdateItem } from "./items.dto";
import itemsTable from "./items.entity";
import { eq } from "drizzle-orm";

export class ItemsService {
  async create(data: CreateItem) {
    const result = db.insert(itemsTable).values(data).returning().get();
    return result;
  }

  async findAll() {
    return db.select().from(itemsTable).all();
  }

  async findOne(id: number) {
    return db.select().from(itemsTable).where(eq(itemsTable.id, id)).get();
  }

  async update(id: number, data: UpdateItem) {
    return db
      .update(itemsTable)
      .set(data)
      .where(eq(itemsTable.id, id))
      .returning()
      .get();
  }

  async remove(id: number) {
    return db.delete(itemsTable).where(eq(itemsTable.id, id)).run();
  }
}

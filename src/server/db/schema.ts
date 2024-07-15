// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `bio-tag_${name}`);

export const etiquetasTable = createTable(
  "etiqueta",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    npm: int("npm"),
    name: text("name"),
    date: int("created_at", { mode: "timestamp" }),
    location: text("location"),
    txd: text("txd"),

    c_asa: text("c_asa"),
    c_tarso: text("c_tarso"),
    c_total: text("c_total"),
    muda: text("muda"),
    massa: text("massa"),
    sexo: text("sexo"),
    coletor: text("coletor"),

    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => ({
    nameIndex: index("name_idx").on(table.name),
  }),
);

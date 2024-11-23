import { index, int, sqliteTableCreator, text } from 'drizzle-orm/sqlite-core'

export const createTable = sqliteTableCreator(name => `bio-tag_${name}`)
export const etiquetasTable = createTable(
  'etiqueta',
  {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    npm: int('npm'),
    especie: text('especie'),
    data: int('data', { mode: 'timestamp' }),
    localizacao: text('localizacao'),
    txd: text('txd'),
    c_asa: text('c_asa'),
    c_tarso: text('c_tarso'),
    c_total: text('c_total'),
    muda: text('muda'),
    massa: text('massa'),
    sexo: text('sexo'),
    coletor: text('coletor'),
  },
  table => ({
    especieIndex: index('especie_idx').on(table.especie),
  }),
)

export type Etiqueta = typeof etiquetasTable.$inferSelect
export type NewEtiqueta = typeof etiquetasTable.$inferInsert

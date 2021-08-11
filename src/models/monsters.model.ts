import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'monsters'}}
})
export class Monsters extends Entity {
  @property({
    type: 'number',
    required: true,
    generated: true,
    id: true,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'user_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  userId: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'rarity', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  rarity: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'level', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  level: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'exp', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  exp?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'powerup', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  powerup?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'boost', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  boost?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'powerup_boost', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  powerupBoost?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'total_boost', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  totalBoost?: number;

  @property({
    type: 'number',
    precision: 4,
    scale: 4,
    postgresql: {columnName: 'gas', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 4, nullable: 'YES'},
  })
  gas?: number;

  @property({
    type: 'number',
    precision: 5,
    scale: 2,
    postgresql: {columnName: 'rewards', dataType: 'numeric', dataLength: null, dataPrecision: 5, dataScale: 2, nullable: 'YES'},
  })
  rewards?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'wins', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  wins?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'losses', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  losses?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Monsters>) {
    super(data);
  }
}

export interface MonstersRelations {
  // describe navigational properties here
}

export type MonstersWithRelations = Monsters & MonstersRelations;

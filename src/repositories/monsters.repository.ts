import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BcRoiCalcDbDataSource} from '../datasources';
import {Monsters, MonstersRelations} from '../models';

export class MonstersRepository extends DefaultCrudRepository<
  Monsters,
  typeof Monsters.prototype.id,
  MonstersRelations
> {
  constructor(
    @inject('datasources.bc_roi_calc_db') dataSource: BcRoiCalcDbDataSource,
  ) {
    super(Monsters, dataSource);
  }
}

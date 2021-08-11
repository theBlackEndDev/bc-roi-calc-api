import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BcRoiCalcDbDataSource} from '../datasources';
import {Users, UsersRelations} from '../models';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {
  constructor(
    @inject('datasources.bc_roi_calc_db') dataSource: BcRoiCalcDbDataSource,
  ) {
    super(Users, dataSource);
  }
}

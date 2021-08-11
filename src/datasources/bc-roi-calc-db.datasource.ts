import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'bc_roi_calc_db',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'jscott',
  password: '12341234',
  database: 'bc_roi_calc_db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BcRoiCalcDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'bc_roi_calc_db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.bc_roi_calc_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }


}

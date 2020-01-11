import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from '@Auth/user.entity';

// import { User } from '@Auth/user.entity';
// import { Task } from '@Tasks/task.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'store',
  entities: [User],
  synchronize: true,
};

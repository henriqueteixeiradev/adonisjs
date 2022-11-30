import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'henrique',
        email: 'henriqueteixeira.dev@gmail.com',
        password: 'secret',
        role: 'admin',
      },
      { name: 'normal', email: 'normal@gmail.com', password: 'normal', role: 'normal' },
    ])
  }
}

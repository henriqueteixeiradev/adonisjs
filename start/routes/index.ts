import Route from '@ioc:Adonis/Core/Route'

import './auth'
import './post'

Route.get('/', async () => {
  return { hello: 'world' }
})

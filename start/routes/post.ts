import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostsController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
// resource = criar todas as rotas de uma vez
// apiOnly = criar apenas as rotas de api escolhidando as rotas de view

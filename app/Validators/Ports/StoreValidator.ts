import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(255),
      rules.unique({ table: 'posts', column: 'title' }),
    ]),
    content: schema.string({ trim: true }, [rules.unique({ table: 'posts', column: 'title' })]),
    slug: schema.string({ trim: true }, [rules.unique({ table: 'posts', column: 'title' })]),
  })

  public messages: CustomMessages = {}
}

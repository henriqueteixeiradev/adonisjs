import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.minLength(3), rules.maxLength(255)]),
    content: schema.string({ trim: true }),
    slug: schema.string({ trim: true }),
  })

  public messages: CustomMessages = {}
}

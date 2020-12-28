import { Model } from '@nozbe/watermelondb'
import { date, field } from '@nozbe/watermelondb/decorators'

export default class Category extends Model {
  static table = 'Notes'

  @field('title') title
  @field('body') body
  @field('category') category
  @field('is_pinned') isPinned

  @date('created_at') createdAt
}
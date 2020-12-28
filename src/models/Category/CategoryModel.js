import { Model } from '@nozbe/watermelondb'
import { relation, field } from '@nozbe/watermelondb/decorators'

export default class Categories extends Model {
  static table = 'Categories'
  static associations = {
    notes: { type: 'has_many', foreignKey: 'note_id' },
  }

  @field('title') title

  @relation('notes', 'note_id') note
}
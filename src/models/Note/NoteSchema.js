import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default NoteSchema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'Notes',
            columns: [
                { name: 'title', type: 'string' },
                { name: 'body', type: 'string' },
                { name: 'category', type: 'string' },
                { name: 'is_pinned', type: 'boolean' },
                { name: 'created_at', type: 'number' },
            ]
        }),
        tableSchema({
            name: 'Categories',
            columns: [
                { name: 'title', type: 'string' },
            ]
        }),
    ]
})
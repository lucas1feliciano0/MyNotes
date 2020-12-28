import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"

import NoteSchema from '../models/Note/NoteSchema'
import NoteModel from '../models/Note/NoteModel'
import CategoryModel from '../models/Category/CategoryModel'

const adapter = new SQLiteAdapter({
    dbName: "Notes",
    schema: NoteSchema
});

export default database = new Database({
    adapter,
    modelClasses: [NoteModel, CategoryModel],
    actionsEnabled: true
});

export function saveNote(note) {
    const noteCollection = database.collections.get('Notes')

    database.action(async () => {
        try {
            const newNote = await noteCollection.create(createdNote => {
                createdNote.title = note.title
                createdNote.body = note.body
                createdNote.category = note.category
                createdNote.created_at = note.date
            })

        } catch (error) {
            console.log('Deu erro: ' + error)
        }
    })

}

export async function getNotes() {
    const noteCollection = database.collections.get('Notes')

    const notes = await noteCollection.query().fetch()

    return notes
}

export async function getOneNote(noteId) {
    const noteCollection = database.collections.get('Notes')

    const note = await noteCollection.find(noteId)

    return note
}

export async function updateNote(noteId, note) {
    const noteCollection = database.collections.get('Notes')

    const noteDb = await noteCollection.find(noteId)

    await database.action(async () => {
        try {
            await noteDb.update(updatedNote => {
                updatedNote.title = note.title
                updatedNote.body = note.body
                updatedNote.category = note.category
                updatedNote.created_at = note.date
            })
        } catch (error) {
            console.log('deu erro: ' + error)
        }
    })
}

export async function deleteOneNote(noteId) {
    const noteCollection = database.collections.get('Notes')

    const note = await noteCollection.find(noteId)

    await database.action(async () => {
        try {
            await note.destroyPermanently() 
        } catch (error) {
            console.log('deu erro: ' + error)
        }
    })
}

export function saveCategory(category) {
    const noteCollection = database.collections.get('Categories')

    database.action(async () => {
        try {
            const newCategory = await noteCollection.create(createdCategory => {
                createdCategory.title = category.title
            })
            
        } catch (error) {
            console.log('Deu erro: ' + error)
        }
    })

}
const INITIAL_STATE = {
    editMode: false,
    title: null,
    body: null,
    category: ''
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "INIT_NOTE":
            return {
                ...state,
                note: action.payload.note,
                editMode: true,
                title: action.payload.note.title,
                body: action.payload.note.body,
                category: action.payload.note.category
            }
        case "CHANGE_TITLE":
            return {
                ...state,
                title: action.payload.title
            }
        case "CHANGE_BODY":
            return {
                ...state,
                body: action.payload.body
            }
        case "CHANGE_CATEGORY":
            return {
                ...state,
                category: action.payload.category
            }
        case "RESET":
            return INITIAL_STATE

        default:
            return state
    }
}

export default reducer
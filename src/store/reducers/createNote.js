const INITIAL_STATE = {
    editMode: false,
    title: null,
    body: null,
    category: '',
    isPinned: false,
    image: null
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
                isPinned: action.payload.note['_raw'].is_pinned,
                category: action.payload.note.category,
                image: action.payload.note.image
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
        case "CHANGE_IMAGE":
            return {
                ...state,
                image: action.payload.image
            }

        case "CHANGE_IS_PINNED":
            return {
                ...state,
                isPinned: action.payload.isPinned
            }
        case "RESET":
            return INITIAL_STATE

        default:
            return state
    }
}

export default reducer
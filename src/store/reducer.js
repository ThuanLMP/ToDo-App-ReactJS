import { SET_TASK_NAME, SET_TASK_DESCRIPTION, ADD_TASK, UPDATE_LIST_TASK, UPDATE_SHOW_LIST, UPDATE_EDIT_FORM, SET_TASK, SET_TASK_EDIT_DESCRIPTION, SET_TASK_EDIT_NAME, SET_TASK_DEADLINE, SET_TASK_EDIT_DEADLINE } from "./constants"


const initState = {
    listTask: JSON.parse(localStorage.getItem('listTask')),
    task: {
        name: '',
        description: '',
        deadline: Date("02/05/2022 10:30 AM"),
        state: false
    },
    showList: false,
    editForm: false,
    taskEdit: {
        name: '',
        description: '',
        deadline: Date("02/05/2022 10:30 AM"),
        state: false
    }
}

function reducer(state, action) {
    switch (action.type) {

        case SET_TASK_NAME:
            return {
                ...state,
                task: {
                    ...state.task,
                    name: action.payload
                }
            }
        case SET_TASK_DESCRIPTION:
            return {
                ...state,
                task: {
                    ...state.task,
                    description: action.payload
                }
            }
        case SET_TASK_DEADLINE:
            return {
                ...state,
                task: {
                    ...state.task,
                    deadline: action.payload
                }
            }
        case ADD_TASK:
            return {
                ...state,
                listTask: [...state.listTask, action.payload]
            }
        case UPDATE_LIST_TASK:
            return {
                ...state,
                listTask: action.payload
            }
        case UPDATE_SHOW_LIST:
            return {
                ...state,
                showList: action.payload
            }
        case UPDATE_EDIT_FORM:
            return {
                ...state,
                editForm: action.payload
            }
        case SET_TASK:
            return {
                ...state,
                taskEdit: action.payload
            }
        case SET_TASK_EDIT_NAME:
            return {
                ...state,
                taskEdit: {
                    ...state.taskEdit,
                    name: action.payload
                }
            }
        case SET_TASK_EDIT_DESCRIPTION:
            return {
                ...state,
                taskEdit: {
                    ...state.taskEdit,
                    description: action.payload
                }
            }
        case SET_TASK_EDIT_DEADLINE:
            return {
                ...state,
                taskEdit: {
                    ...state.taskEdit,
                    deadline: action.payload
                }
            }
        default:
            throw new Error('Invalid action.')

    }
}

export { initState }
export default reducer
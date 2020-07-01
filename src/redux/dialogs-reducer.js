const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    messages: [
        {id: 1, message: 'Alpha test v0.1'},
        {id: 2, message: 'Im ready, pick me up'},
        {id: 3, message: 'Wanna write some code?'},
        {id: 4, message: 'Please call me'},
        {id: 5, message: 'Ho-ho'},
        {id: 6, message: 'How are you?'}
    ],
    dialogs: [
        {id: 1, name: 'Developer'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Luna'},
        {id: 4, name: 'Alena'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Irina'}
    ]
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hey, wassup? You know what? It\'s my first post! Damn, it\'s so cool!',
                    likesCount: 24
                },
                {
                    id: 2,
                    message: 'My second post! I love puppies!',
                    likesCount: 73
                }
            ],
            newPostText: ''
        },

        dialogsPage: {
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
            ],
            newMessageBody: ""
        },

        sidebar: {}

    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)

    }
};






export default store;

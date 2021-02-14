
let store = {

    _state : {
        profilePage : {
            posts : [
                {id: 1, post: 'Hi, my friend!', likes: 2}, {id: 2, post: 'Good evening', likes: 1},
                {id: 3, post: 'Good morning to you!', likes: 4}, {id: 4, post: 'Good day and you!', likes: 3},
                {id: 5, post: 'opanki', likes: 2}, {id: 6, post: 'peace...', likes: 5}
            ],
            newPostText: ''
        },
        dialogsPage : {
            messages : [
                {id: 1, message: 'Hello, World!'}, {id: 2, message: 'Hello'},
                {id: 3, message: 'Опа опа раз два три'}, {id: 4, message: 'Опачё'},
                {id: 5, message: 'How are you?'}, {id: 6, message: 'I\'m fine, thanks'}
            ],
    
            newMessage : '',
    
            dialogs : [
                {id: 1, name: 'Dmitriy'}, {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'}, {id: 4, name: 'Valera'},
                {id: 5, name: 'Victor'}, {id: 6, name: 'Artem'}
            ]
        },
        sitebar: {
    
        }
    }, 

    _callSubscriber() {
        console.log('Функция _callSubscriber не переопределена');
    }, 

    getState() {
        return this._state;
    },

    addPost() {

        let newPost = {
            id: 7,
            post: this._state.profilePage.newPostText,
            likes: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    addMessage() {

        let newMess = {
            id: 7,
            message: this._state.dialogsPage.newMessage
        };
    
        this._state.dialogsPage.messages.push(newMess);
        this._state.dialogsPage.newMessage = '';
        this._callSubscriber(this._state);
    },

    uppdatePostText(newText) {
    
        this._state.profilePage.newPostText = newText;
    
        this._callSubscriber(this._state);
    },

    uppdateMessages(newText) {
    
        this._state.dialogsPage.newMessage = newText;
    
        this._callSubscriber(this._state);
    },

    subscribe(observer) {

        this._callSubscriber = observer; // Паттерн "Наблюдатель"
    },

    time() {

        let date = new Date();
        return date;
    }
    
};

export default store;
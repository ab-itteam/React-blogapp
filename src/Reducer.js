import PostActions from './PostActions';

export function reducer(state, action) {
    switch (action.type) {
        case PostActions.newPostCreated:
            return Object.assign({}, state, {
                posts: [
                    ...state.posts,
                    {title: action.title, text: action.text}
                ]
            });
        case PostActions.newPostTextChanged:
            return Object.assign({}, state, {
                newPost: { text: action.text }
            });

            case PostActions.newPostTitleChanged:
            return Object.assign({}, state, {
                newPost: { title: action.title }
            });
        default :  return state;

    }
}
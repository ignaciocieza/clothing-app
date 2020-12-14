import typeActions from '../actions/typeActions';

const INITIAL_STATE = {
    user: '',
    buttonLogin: {},
    isFetching: false,
    isFetched: false,
    error: ''
}

export default function indexReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case typeActions.LOGIN_USER:
            return ({
                ...state,
                user: action.payload,
                isFetching: false,
                isFetched: true
            });
        case typeActions.BUTTON_LOGIN:
            return ({
                ...state,
                buttonLogin: action.payload,
            });
        case typeActions.SET_IS_FETCHING:
            return ({
                ...state,
                isFetching: action.payload,
            });
        case typeActions.SET_IS_FETCHED:
            return ({
                ...state,
                isFetched: action.payload,
                user: false
            });
        case typeActions.ERROR_LOGIN_USER:
            return ({
                ...state,
                error: action.payload,
                isFetching: false,
            });
        case typeActions.RESET_INITIAL_STATE:
            return ({
                ...state,
                ...INITIAL_STATE
            });
        default:
            return state;
    }
}


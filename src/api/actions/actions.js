import typeActions from './typeActions';
import { authSignIn } from '../firebase/firebase';

export const loginUser = (data) => async (dispatch) => {
    try {
        const res = await authSignIn(data)
        return dispatch({
            type: typeActions.LOGIN_USER,
            payload: res
        });
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }
        console.error(error);
        return dispatch({
            type: typeActions.ERROR_LOGIN_USER,
            payload: 'Error en el login de usuario'
        });
    }
};

export const setButtonLogin=(data)=>({
    type: typeActions.BUTTON_LOGIN,
    payload: data
});

export const setIsFetching=(value)=>({
    type: typeActions.SET_IS_FETCHING,
    payload: value
});

export const setIsFetched=(value)=>({
    type: typeActions.SET_IS_FETCHED,
    payload: value
});

export const resetInitialState=()=>({
    type: typeActions.RESET_INITIAL_STATE,
});





import { addFriendApi, loginApi, loginWithcookieApi, removeFriendApi } from "../Login/apiutils"

const initialState = {
    friendList: [],
    name: '',
    username: '',
    message: '',
    success: false,
    loading:false
}

const ACTIONS = {
    SIGNUP: 'SIGNUP',
    lOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    ERROR: 'ERROR',
    RESET_MSG:"RESET_MSG",
    LOADING:"LOADING"
}

const asyncActionCreator = (apiHelperFn, apiPayload, action) => {
    return async (dispatch) => {
        try {
            dispatch(loaderActionCreator(true))
            dispatch(resetMsgActionCreator());
            const { data } = await apiHelperFn(apiPayload);
            console.log(data);
            dispatch({ ...action, payload: data });
        } catch (error) {
            const {message} = error.response.data;
            console.log(error);
            dispatch({
                type: ACTIONS.ERROR,
                payload: { success: false, message},
            });
        } finally{
            dispatch({type:ACTIONS.LOADING ,payload:false })
        }
    };
};

export const loaderActionCreator= (loading)=>(({type:ACTIONS.LOADING , payload:loading}))

export const resetMsgActionCreator=()=>({type:ACTIONS.RESET_MSG})


export const loginActionCreator = (apiPayload) => {
    const action = { type: ACTIONS.lOGIN };
    const helper = asyncActionCreator(loginApi, apiPayload, action);
    return helper;

};

export const loginWithcookieActionCreator = () => {
    const action = { type: ACTIONS.lOGIN };
    return asyncActionCreator(loginWithcookieApi, null, action);
};

export const addFriendActionCreator = (apiPayload) => {
    const action = { type: ACTIONS.ADD_FRIEND };
    return asyncActionCreator(addFriendApi, apiPayload, action);
};

export const removeFriendActionCreator = (apiPayload) => {
    const action = { type: ACTIONS.REMOVE_FRIEND };
    return asyncActionCreator(removeFriendApi, apiPayload, action);
};


export const userReducer = (state = initialState, action) => {
    const { success, message, data } = action.payload || {};

    switch (action.type) {
        case ACTIONS.lOGIN:
            if (data) {
                const { name, username, friendList } = data;
                return { ...state, name, username, friendList, success, message };
            }
            // Handle the case when data is not present
            return { ...state, success, message };

        case ACTIONS.ADD_FRIEND:
            return { ...state, success, message, friendList: data };

        case ACTIONS.REMOVE_FRIEND:
            return { ...state, success, message, friendList: data };

        case ACTIONS.ERROR:
            return { ...state, success, message };

        case ACTIONS.RESET_MSG:
            return { ...state,message:''};
        case ACTIONS.LOADING:
            return {...state, loading:action.payload}

        default:
            return state;
    }
};

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import * as types from "./actionTypes";

// action thêm hàng vào giỏ
export const addTobasket = (item)=>({
    type: types.ADD_TO_BASKET,
    payload: item,
})
// action loại bỏ hàng ra khỏi giỏ
export const removeFromBasket = (id)=>({
    type: types.REMOVE_FROM_BASKET,
    payload: id,
})

const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSuccess = (user)=>({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

const registerError = (error)=>({
    type: types.REGISTER_FAIL,
    payload: error,
});

const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user)=>({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginError = (error)=>({
    type: types.LOGIN_FAIL,
    payload: error,
});

const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = (user)=>({
    type: types.LOGOUT_SUCCESS,
    payload: user,
});

const logoutError = (error)=>({
    type: types.LOGOUT_FAIL,
    payload: error,
});

export const setuser = (user)=>({
    type: types.SET_USER,
    payload: user,
})
/*
    phần xử lí firebase
*/
// Xử lí action đăng kí email và password với firebase auth
export const registerInitiate = (email, password)=>{
    return function (dispatch){
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth, email, password).then(({user})=>{
            dispatch(registerSuccess(user));
        }).catch(error => dispatch(registerError(error.message)))
    }
}
// Xử lí action đăng nhập email và password với firebase auth
export const loginInitiate = (email, password)=>{
    return function (dispatch){
        dispatch(loginStart());
        signInWithEmailAndPassword(auth, email, password).then(({user})=>{
            dispatch(loginSuccess(user));
        }).catch(error => dispatch(loginError(error.message)))
    }
}
// Xử lí action đăng xuất email và password với firebase auth
export const logOutInitiate = ()=>{
    return function(dispatch){
        dispatch(logoutStart());
        signOut(auth)
        .then((res)=>{
            dispatch(logoutSuccess());
        })
        .catch((error)=> dispatch(logoutError(error.message)));
    }
}
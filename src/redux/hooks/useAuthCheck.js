import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../api/authSlice';

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authCheck,setAuthCheck]=useState(false)
    useEffect(()=>{
        const localAuth = localStorage?.getItem('auth');
        if(localAuth){
            const auth = JSON.parse(localAuth);
            if(auth?.token && auth?.user){
                dispatch(userLoggedIn({
                    token:auth.token,
                    user:auth.user
                }))
            }
        }
        setAuthCheck(true)
    },[]);
    return authCheck;
}

import { userLoggedIn } from "./authSlice";
import { rootapi } from "./rootapi";

const userapi = rootapi.injectEndpoints({
    endpoints:(builder)=>({
        signUp:builder.mutation({
            query:(data)=>({
                method:'POST',
                url:'/api/registration',
                body:data
            })
        }),
        signIn:builder.mutation({
            query:(data)=>({
                method:'POST',
                url:'/api/login',
                body:data
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('auth',JSON.stringify({
                        token:result.data.token,
                        user:result.data.user
                    }),
                    dispatch(userLoggedIn({
                        token:result.data.token,
                        user:result.data.user
                    }))
                    )
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})

export const{useSignUpMutation,useSignInMutation}=userapi;
import {authReducer , authThunk} from '../reducers/AutReducer.ts'
descride('authReducer', ()=>{
const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
it('login aut', ()=>{
 const data = {
 email:sergeianp20@gmail.com,
   password: 'S25anipch.',
   rememberMe:false
   

   
 }

  const userId = 2
  const action = authThunk.login({userId}, 'requsetdId', data)
  const state= 

  
})
  
})

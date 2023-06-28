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
  const state= authReducer(initialState,action )

  expect(state.userId).toEqual(userId)
}),
  it('AuthMe', ()=>{
 const data = {
 email:sergeianp20@gmail.com,
   password: 'S25anipch.',
   rememberMe:false
   

   
 }

  const profile ={
  
userId: 27504,
    email: sergeianip20@gmail.com,
    login: SergeiAnipchenko,
      
  }
  const action = authThunk.login({profile}, 'requsetdId', data)
  const state= authReducer(initialState,action )

  expect(state.userId).toBe(27504)
      expect(state.login).toBe('sergeianip20@gmail.com')
})
})

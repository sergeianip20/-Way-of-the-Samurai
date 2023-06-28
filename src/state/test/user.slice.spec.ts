import {userThunk , Userreducer  } from '../state/UserReducer'
descride('authReducer', ()=>{
export type InitialStateUserType = {
    users: Array<usersTypeData>
    pagesSize: number
    totalUsersCount: number,
    currentPage: number
    preloader: boolean,
    toggleisFollowed: Array<number>
}
export type usersTypeData = {
    id: number,
    followed: boolean
    name: string
    status: string | null
    photos: {
        large: string | null
        small: string | null
    }
    uniqueUrlName: string | null
}
let initialState: InitialStateUserType = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    preloader: true,
    toggleisFollowed: []
}
it('fetchUser', ()=>{
  const data ={
currentPage:1,
      pageSize: 5
      
  }
   const item = [ {
 id: 2,
    followed: true,
    name: '',
    status: ' ',
    photos: {
        large: ' ',
        small: ' ',
    },
       
    },
                 {
 id: 2,
    followed: true,
    name: '',
    status: ' ',
    photos: {
        large: ' ',
        small: ' ',
    },
       
    },
                 {
 id: 2,
    followed: true,
    name: '',
    status: ' ',
    photos: {
        large: ' ',
        small: ' ',
    },
       
    },
                 {
 id: 2,
    followed: true,
    name: '',
    status: ' ',
    photos: {
        large: ' ',
        small: ' ',
    },
       
    },
                ]


const action = userThunk.usersFetch(item, 'requireId' , data)
    const state= Userreducer(initialState,action )

    expect(state.users).toQuel(item)
})
    
})

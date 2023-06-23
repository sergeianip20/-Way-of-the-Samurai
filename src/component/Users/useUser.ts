import React , {useCallback} from 'react'
import {useAppDispatch} from "component/hook/hook";


export const useUser =()=>{
  const dispatch = useAppDispatch()
const onChangeHandler = useCallback((e:any)=> {
        dispatch(userThunk.usersFetch({currentPage:e, pageSize:5}))
    },[dispatch])
  const onClickFolowed =useCallback((userId:string)=> {
     dispatch(userThunk.followedThunk(userId) )
   },[dispatch])
const onClickUnFollowed=(userId:string)=>{
    dispatch(userThunk.unFollowed(userId))
  }

  return {
onChangeHandler,
    onClickFolowed,
    
onClickUnFollowed
    
  }
}

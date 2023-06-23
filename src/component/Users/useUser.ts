import React , {useCallback} from 'react'



export const useUser =()=>{
  const dispatch = useAppDispatch()
const onChangeHandler = useCallback((e:any)=> {
        dispatch(userThunk.usersFetch({currentPage:e, pageSize:5}))
    },[])


  return {}
}

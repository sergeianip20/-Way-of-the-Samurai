import React, {useEffect, useCallback} from 'react'
import {Col, Pagination, Row} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "component/hook/hook";
import {userThunk} from "../../state/reducers/UserReducer";
import {

  LoginForm,

  ProConfigProvider,

  ProFormCaptcha,

  ProFormCheckbox,

  ProFormText,

} from '@ant-design/pro-components';
import {Menus} from "component/Menu/Menu";

export const Users = () => {
    let currentpage = useAppSelector(state => state.Userreducer.currentPage)
    let totalCount = useAppSelector(state => state.Userreducer.totalUsersCount)
    let user = useAppSelector(state=> state.Userreducer.users)
   let {onChangeHandler, onClickFolowed, onClickUnFollowed } = useUser()

  
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userThunk.usersFetch({currentPage: 1, pageSize: 5}))

    }, [])
    const onChangeHandler = useCallback((e:any)=> {       dispatch(userThunk.usersFetch({currentPage:e, pageSize:5}))
    }

   const onClickFolowed =(userId:string)=> {
     dispatch(userThunk.followedThunk(userId) )
   }
  const onClickunFollowed=(userId:string)=>{
    dispatch(userThunk.unFollowed(userId))
  }
    return <div>

        <Row>
            <Col span={3}>
                <Menus />
            </Col>
            <Col span={21}>
              <Row>
              <Card>
              <Col span={4}>
              name
              </Col>
                <Col span={4}>
                  {user.followed ? <Button> unFollowed </Button>:
                 <Button>followed</Button>
                  }
                </Col>
              </Card>
                </Row>
        <Pagination onChange={(e)=> {onChangeHandler(e)}} defaultCurrent={currentpage} total={totalCount}/>

            </Col>
        </Row>
    </div>
}

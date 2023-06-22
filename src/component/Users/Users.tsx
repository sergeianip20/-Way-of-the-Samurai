import React, {useEffect} from 'react'
import {Col, Pagination, Row} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../state/store";
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
    let currentpage = useSelector<AppRootStateType, number>(state => state.Userreducer.currentPage)
    let totalCount = useSelector<AppRootStateType, number>(state => state.Userreducer.totalUsersCount)
    let user = useSelector<AppRootStateType, any>(state=> state.Userreducer.users)
    const useAppDispatch = () => useDispatch<AppDispatch>()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userThunk.usersFetch({currentPage: 1, pageSize: 5}))

    }, [])
    const onChangeHandler = (e:any)=> {
        dispatch(userThunk.usersFetch({currentPage:e, pageSize:5}))
    }
    return <div>

        <Row>
            <Col span={3}>
                <Menus />
            </Col>
            <Col span={21}>
        <Pagination onChange={(e)=> {onChangeHandler(e)}} defaultCurrent={currentpage} total={totalCount}/>

            </Col>
        </Row>
    </div>
}

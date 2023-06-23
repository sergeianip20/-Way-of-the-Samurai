import React, {useEffect, useCallback} from 'react'
import {Col, Pagination, Row, Avatar} from 'antd';
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
    let users = useAppSelector(state=> state.Userreducer.users)
   let {onChangeHandler, onClickFolowed, onClickUnFollowed } = useUser()

  
    const dispatch = useAppDispatch()
    useEffect(() => {
         onChangeHandler(1)
           }, [])
    const onClickHandler = useCallback((e:any)=> {   onChangeHandler(e)   },[onChangeHandler])
   const onClickFoloweds =useCallback((userId:string)=> {   onClickFolowed(userId) },[onClickFolowed])
  const onClickunFolloweds=useCallback((userId:string)=>{  onClickUnFollowed(userId)},[onClickUnFollowed])
  
    return <div>

        <Row>
            <Col span={3}>
                <Menus />
            </Col>
            <Col span={21}>
           
                { users.map((e)=> {

                return {
                  <Row key={e.id}>
                  <Card>
                  <Col> 
                   <Avatar src={e.photos.small} />
                  
                  </Col>
                   <Col span={7}>
                  {e.name}
                  </Col>
                   <Col span={7}>
                     { {e.followed} ?  <Button onClick={()=>{onClickunFolloweds({e.id})}}> unFollowed </Button> :   <Button onClick={()=>{onClickFoloweds({e.id})}} >followed</Button>
                       
                     }
                   
                   </Col>

                  
                  </Card>
                  </Row>
                }
                })
                  
                }
              <Card>
                              <Col span={4}>
              name
              </Col>
                <Col span={4}>
                  {user.followed ? :
                
                  }
                </Col>
              
                </Row>
        <Pagination onChange={(e)=> {onChangeHandler(e)}} defaultCurrent={currentpage} total={totalCount}/>

            </Col>
        </Row>
    </div>
}

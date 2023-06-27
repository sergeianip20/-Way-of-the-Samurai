import {SubmitHandler, useForm} from "react-hook-form";
import {useAppSelector} from 

export const ProfileForm = () => {
    const {register, watch, handleSubmit} = useForm();
    const userId = useAppSelector((state)=> state.authReducer.userId)
    const onSubmit:SubmitHandler =data => {
       let apiModel ={
      contacts: {
            facebook: data.facebook,
            github: data.github,
            instagram: data.instagram,
            mainLink: data.mainLink,
            twitter: data.twitter,
            vk: data.vk,
            website: data.website,
            youtube: data.youtube,
               }
     userId
         fullName: data.fullName,  
       }
    }
    return (<>
        <Row>
            <Card title='Изменения профиля' bordered={false} style={{width: 1200}}>
                <Form handleSubmit={onSubmit}>
                <Row>
                    <Col span={4}>Имя</Col>
                    <Col span={20}>
                        <Input prefix={<UserOutlined/>}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}> gitHub </Col>
                    <Col span={20}><Input prefix={<GithubOutlined/>}/> </Col>
                </Row>
                <UpdateInfo  register={register} label={'vk'} />
                    <UpdateInfo  register={register} label={'instagram'} />
                    <UpdateInfo  register={register} label={'twitter'} />
                    <UpdateInfo  register={register} label={'website'} />
                    <UpdateInfo  register={register} label={'youtube'} />


                </Form>
<UpdatePhoto />
            </Card>
        </Row>
    </>)
}

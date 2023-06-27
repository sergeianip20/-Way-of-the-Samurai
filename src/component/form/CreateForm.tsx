import {SubmitHandler, useForm} from "react-hook-form";
import {useAppSelector, useAppDispatch} from "component/hook/hook";

export const ProfileForm = () => {
    const {register, watch, handleSubmit} = useForm();
    const userId = useAppSelector((state)=> state.authReducer.userId)
    const dispatch = useAppDispatch()
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
              lookingForAJob: data.lookingForAJob,
    lookingForAJobDescription: data.lookingForAJobDescription

        
       }
    dispatch(ProfileThunk.updateProfile(apiModel))
}
    
    
    return (<>
        <Row>
            <Card title='Изменения профиля' bordered={false} style={{width: 1200}}>
                <Form handleSubmit={onSubmit}>
                <UpdateInfo  register={register} label={'lookingForAJobDescription'} />
                <UpdateInfo  register={register} label={'vk'} />
                    <UpdateInfo  register={register} label={'instagram'} />
                    <UpdateInfo  register={register} label={'twitter'} />
                    <UpdateInfo  register={register} label={'website'} />
                    <UpdateInfo  register={register} label={'youtube'} />
                     <UpdateInfo  register={register} label={'mainLink'} />
                     <UpdateInfo  register={register} label={'fullName'} />
            <Checkbox {...register('lookingForAJob')} />
     
                </Form>
<UpdatePhoto />
            </Card>
        </Row>
    </>)
}

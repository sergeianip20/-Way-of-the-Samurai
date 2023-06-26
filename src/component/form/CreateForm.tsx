export const ProfileForm = () => {
    const {register, watch, handleSubmit} = useForm();

    return (<>
        <Row>
            <Card title='Изменения профиля' bordered={false} style={{width: 1200}}>
                <Form>
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

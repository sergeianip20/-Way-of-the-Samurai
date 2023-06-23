import { useAppSelector} from "component/hook/hook";
 export const isLoadingSelector = useAppSelector((state) => state.appReducer.isLoading)
   export  const contacsSelector = useAppSelector((state) => state.ProfileReducers.UserProfile.contacts)
  export   const fullNameSelector = useAppSelector((state) => state.ProfileReducers.UserProfile.fullName)
 export    const imageSelector = useAppSelector((state)=> state.ProfileReducers.UserProfile.photos.large)

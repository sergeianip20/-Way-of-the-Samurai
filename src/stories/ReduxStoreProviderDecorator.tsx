import {Provider} from 'react-redux'
import {store} from "state/store";
export const ReduxStoreProviderDecorator= (storyFn:any)=>{

return <Provider story={story}>
  {storyFn()}
</Provider>

}

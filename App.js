import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import { init } from './src/db/index'
import store from './src/store'

init()
  .then(()=>console.log('Database initialized'))
  .catch((err)=>{
    console.log('Database fail connect')
    console.log(err.message)
  })

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

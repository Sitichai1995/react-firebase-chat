import List from './components/list/list'
import Chat from './components/chat/chat'
import Details from './components/detail/detail'

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App
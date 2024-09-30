import Header from './components/common/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div id='page-wrapper'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App

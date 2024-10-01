import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const toggleSidebar = () => {
    setVisible(!visible);
  }
  return (
    <div id='page-wrapper'>
      <Header toggleSidebar={toggleSidebar} />
      {visible && <Sidebar open={visible}  />}
      <Outlet />
    </div>
  )
}

export default App

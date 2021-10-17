
import Top from './components/top/top.jsx';

// import SideBar from './components/sideBar/sideBar';
import Home from './page/home/home.jsx';

import './app.css';
import { GlobalStyle } from './GlobalStyle';

function App() {

  return (
    <>
      <Top />
        {/* <SideBar /> */}
        <Home />
      <GlobalStyle/>
    </>
  );
}

export default App;


import * as Component from './home-style';
import SideBar from '../../components/sideBar/sideBar';
import Main from '../main/main';

const Home = () => {
    return (
        <Component.Container>
            <SideBar />
            <Main />
        </Component.Container>
    )
}

export default Home;

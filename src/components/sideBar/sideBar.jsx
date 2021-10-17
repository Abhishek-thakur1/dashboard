import {list} from '../../data';
import * as Component from './sideBar-style';

const SideBar = () => {
    return (
        <Component.Container>
            <Component.List>
                {list.map( (item, index) => <Component.Items key={index}>{ item }</Component.Items>)}
            </Component.List>
        </Component.Container>
    )
}

export default SideBar;

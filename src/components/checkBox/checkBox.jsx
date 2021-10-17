import * as Component from './checkBox-style';

const CheckBox = ({txt, isToggled, onToggled}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Component.Text>
                <p>{ txt }</p>
            </Component.Text>
            <Component.CheckBoxWrapper>
                <Component.CheckBox id="checkbox" type="checkbox" checked={isToggled} onChange={onToggled}/>
                <Component.CheckBoxLabel htmlFor="checkbox" />
            </Component.CheckBoxWrapper>
        </div>
    )
}

export default CheckBox;

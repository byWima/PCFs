import * as React from 'react';
//import { useStyles } from '../styles/Styles';
import {
    MenuItem,
} from "@fluentui/react-components";
import {iMenuItemInfo,IReactMenuButtonProps,iOutputObject} from '../types/interfaces';

const onButtonClick = (id:string,name:string,props:IReactMenuButtonProps) => {
    const item:iOutputObject = {
        id:id,
        name:name
    }
    props.onChange(JSON.stringify(item));
}
//const onButtonClick = (test:string) => {};

const FluentUIMenuItem = ({id,name,props}:iMenuItemInfo, key:string): React.JSX.Element => {

    //const styles = useStyles();
    return(
        <MenuItem id={id} onClick={() =>onButtonClick(id,name,props)}>{name}</MenuItem>
    )
}

export default FluentUIMenuItem
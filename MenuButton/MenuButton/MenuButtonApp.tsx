import * as React from 'react';
//import { useStyles } from '../styles/Styles';
import {
  makeStyles,
  Menu,
  MenuButton,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";
import FluentUIMenuItem from './components/MenuItem';
import {IReactMenuButtonProps,iMenuItemInfo} from './types/interfaces';

//icon={this.props.Text}

export class ReactMenuButton extends React.Component<IReactMenuButtonProps> {
  public render(): React.ReactNode {
    const style = {'minWidth': this.props.width};
    return (
      <Menu>
        <MenuTrigger disableButtonEnhancement>
            <MenuButton 
              //disabled={this.props.disabled ?? undefined}
              appearance={this.props.appearance}
              shape={this.props.shape}
              size={this.props.size}
              style={style}>
                {this.props.text}
            </MenuButton>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            {this.menuItemInfos(this.props)?.map((t,i) =>{
                return <FluentUIMenuItem id={t.id} name={t.name} props={this.props} key={'menuItem-'+i}></FluentUIMenuItem>
              }
            )}
          </MenuList>
        </MenuPopover>
      </Menu>
    )
  }

  menuItemInfos(props:IReactMenuButtonProps):iMenuItemInfo[] {
    return this.props.items?.sortedRecordIds.map((recordId) => {
      const currentRecord = this.props.items?.records[recordId]  
      return {
        id: recordId ?? '',
        name: currentRecord?.getFormattedValue('itemName') ?? '',
        props: props
      }
    }) ?? []
  }
}


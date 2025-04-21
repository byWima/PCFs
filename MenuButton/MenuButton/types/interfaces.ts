export interface IReactMenuButtonProps {
    text?: string;
    disabled:boolean;
    items: ComponentFramework.PropertyTypes.DataSet;
    appearance: "primary" | "secondary" | "outline" | "subtle" | "transparent";
    shape: "circular"|"square"|"rounded";
    size:"small"|"medium"|"large";
    width: number;
    height:number;
    onChange: (selected: string) => void;
  }

export interface iMenuItemInfo{
    id: string;
    name: string;
    props:IReactMenuButtonProps,
}

export interface iOutputObject{
    id: string;
    name: string;
}
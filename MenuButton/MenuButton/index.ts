import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { ReactMenuButton } from "./MenuButtonApp";
import { IReactMenuButtonProps } from './types/interfaces';
import * as React from "react";

export class MenuButton implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private _isDesignMode: boolean;
    private _isDisabled: boolean;
    private _selected:string;
    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        //Tracks the size of the control in canvas app
        context.mode.trackContainerResize(true);
        this.notifyOutputChanged = notifyOutputChanged;
        //Check if we are in the designer
        if (location.ancestorOrigins?.[0] === "https://make.powerapps.com") {
            this._isDesignMode = true;
        }
        this._isDisabled = false;

    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props: IReactMenuButtonProps = { 
            text: context.parameters.text.raw ?? "Button",
            disabled:context.mode.isControlDisabled,
            items:context.parameters.Items,
            appearance: context.parameters.buttonAppearance.raw ?? "primary",
            shape: context.parameters.shape.raw ?? "rounded",
            size: context.parameters.buttonSize.raw ?? "medium",
            width: context.mode.allocatedWidth ?? 25,
            height: context.mode.allocatedWidth ?? 32,
            onChange: (selected: string) => {
                this._selected = selected;
                this.notifyOutputChanged();
            }
        };
        return React.createElement(
            ReactMenuButton, props
        );
        //if the control running in "maker" portal return a dummy rendering
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            menuButtonSelected:this._selected
         };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}

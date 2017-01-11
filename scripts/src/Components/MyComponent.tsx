import * as React from "react";
import { ISettings } from "../Models/ISettings";

interface IMyComponentProps {};

interface IMyComponentState {
    Settings: ISettings;
};

export class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
    refs: {
    }
    constructor(props: IMyComponentProps) {
        super(props);
        this.state = {
            Settings: {
                MySetting: ""
            }
        }
    }

    public render(): JSX.Element {
        return (<span>Hello from React</span>);
    }
}

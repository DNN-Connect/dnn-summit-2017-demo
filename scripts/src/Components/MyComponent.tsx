import * as React from "react";

interface IMyComponentProps {};

interface IMyComponentState {};

export class MyComponent extends React.Component<IMyComponentProps, IMyComponentState> {
    refs: {
    }
    constructor(props: IMyComponentProps) {
        super(props);
        this.state = {
        }
    }

    public render(): JSX.Element {
        return (<span>Hello from React</span>);
    }
}

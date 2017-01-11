import * as React from "react";
import { ISettings } from "../Models/ISettings";
import { linkState } from "../LinkState";
import { DataService } from "../Service";

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
        DataService.getSetting((data: string) => {
            this.setState({
                Settings: {
                    MySetting: data
                }
            });
        });
    }

    public render(): JSX.Element {
        return (
            <div className="container-fluid">
                <div className="form-group">
                    <label>My Setting</label>
                    <input type="text" className="form-control" value={this.state.Settings.MySetting}
                        onChange={linkState(this, 'Settings', 'MySetting')} />
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Update</button>
                </div>
            </div>            
        );
    }
}

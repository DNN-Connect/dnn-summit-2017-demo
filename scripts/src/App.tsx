import * as React from "react";
import * as ReactDOM from "react-dom";
import { MyComponent } from "./Components/MyComponent";

if ((window as any).connect == undefined) {
    (window as any).connect = {};
}
(window as any).connect.demo = {};

(window as any).connect.demo.init = (util: any, params: any) => {
    console.log('init');
    (window as any).connect.demo.util = util;
    (window as any).connect.demo.params = params;
    $('.myComp').each((i, el) => {
        ReactDOM.render(<MyComponent />, el);
    });
}

(window as any).connect.demo.load = (params: any) => {
    console.log('load');
    (window as any).connect.demo.params = params;
}

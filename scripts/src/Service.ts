export class DataService {
    constructor() {
    };
    static getServiceFramework(controller: string): any {
        let sf = (window as any).connect.demo.util.sf;
        sf.moduleRoot = "PersonaBar";
        sf.controller = controller;
        return sf;
    }
    public static getSetting(success: Function): any {
        const sf = this.getServiceFramework("Widget");
        sf.get("GetSetting", {}, success);
    }
}

// idea of the class is to encapsulate set of renderers (classes which are able to render specific part of json)
// and recursively loop through input json and try to apply each of renderers to certain item of json
// if can - apply
// if cannot - loop through item (it should be either object or array)
// if cannot - render it with some warning message

import Header from "./renderers/header";
import Illness from "./renderers/illness";

class App extends Component {
    static renderers = [Header, Illness];

    constructor(data) {
        super();
        this.state = data;
    }

    // 1st - try to apply each renderer
    // 2nd - iterate trough object
    // 3rd - iterate through array
    // 4th - render item as-is
    render(){
        for (let renderer of App.renderers) {
            if (renderer.is_applicable(this.state)){
                return new renderer(this.state)
            }

            if (typeof this.state === "object" || Array.isArray(this.state)  ){
                for (let item in this.state) {
                    if (this.state.hasOwnProperty(item)) {
                        return new App(item);
                    }
                }
            }
            else {
                //if we here this means that we cannot render item with available renderers => so, just print it as-is
                return <pre>{JSON.stringify(this.state, null, 4)}</pre>
            }
        }
    }
}
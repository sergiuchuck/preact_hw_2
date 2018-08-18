// idea is to take piece of json which represents illness (one with property 'dis_tag') and render it

import window from 'preact';
const { h, Component, render, createElement} = window;

import {render_recursively_with_renderers} from "../app";
import Leaf from "./unfamiliar_cases/leaf";
import Recomendations from "./recomendations";
import TestedMutations from "./tested_mutations";
import Analyzed from "./analyzed";

class Illness extends Component {
    constructor(data) {
        super();
        this.state = data;
    }
    render(){
        return <pre>Illness: {JSON.stringify(this.state, null, 4)}</pre>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        //todo is this check required?
        // only 'object' is expected
        if (typeof content  !== "object") {return false;}

        // "dis_tag" property must be present
        return "dis_tag" in content;
    }

    static process(data) {
        console.log('Illness.process is called with data:');
        console.log(data);
        // render(createElement(Illness, data), document.body);
        render_recursively_with_renderers(data, [Recomendations, TestedMutations, Analyzed, Leaf]);
    }
}

export default Illness;
// idea is to take piece of json which represents illness (one with property 'dis_tag') and render it

import window from 'preact';
const { h, Component, render, createElement} = window;

import {render_recursively_with_renderers} from "../app";
import Leaf from "./unfamiliar_cases/leaf";
import Recomendations from "./recomendations";
import TestedMutations from "./tested_mutations";
import Analyzed from "./analyzed";

const IllnessProperties = ({dis_tag, dis_type, icd10, status, name, source, nosology, analyzed_genes, diag_color}) => (
    <div>
        <li>Маркер болезни: {dis_tag}</li>
        <li>Тип болезни: {dis_type}</li>
        <li>icd10: {icd10}</li>
        <li>Статус: {status}</li>
        <li>Название болезни: {name}</li>
        <li>Источник: {source}</li>
        <li>Носология: {nosology}</li>
        <li>Проанализированные гены: {analyzed_genes}</li>
    </div>
);

class Illness extends Component {
    constructor(data) {
        super();
        this.state = data;
    }
    render(){
        // return <pre>Illness: {JSON.stringify(this.state, null, 4)}</pre>
        return <div class="illness">
            <h4>Болезнь:</h4>
            <IllnessProperties {...this.state }/>
            <hr/>
        </div>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        //todo is this check required?
        // only 'object' is expected
        if (typeof content  !== "object") {return false;}

        // "dis_tag" property must be present
        return "dis_tag" in content && "dis_type" in content;
    }

    static process(data) {
        console.log('Illness.process is called with data:');
        console.log(data);
        render(createElement(Illness, data), document.body);
        //remove processed elements from data
        delete data["dis_tag"];
        delete data["dis_type"];
        delete data["icd10"];
        delete data["status"];
        delete data["name"];
        delete data["source"];
        delete data["nosology"];
        delete data["analyzed_genes"];
        delete data["diag_color"];
        render_recursively_with_renderers(data, [Recomendations, TestedMutations, Analyzed, Leaf]);
    }
}

export default Illness;
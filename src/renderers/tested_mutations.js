// class is responsible for displaying recommendations in disease section
import window from 'preact';
import {rename_dangerous_keys} from "../utils";
const { h, Component, render, createElement} = window;

function translate_key(key) {
    switch (key) {
        case 'gene': return 'ген';
        case 'freq': return 'частота';
        case 'genotype': return 'генотип';
        case 'result': return 'результат';
        default: return key;
    }
}

const TestedMutation = (testedMutation) => (
    <div>
        {console.log('testedMutation item:')}
        {console.log(testedMutation)}
        {console.log(typeof testedMutation)}
        {console.log(Object.entries(testedMutation))}
        {console.log(typeof Object.entries(testedMutation))}
        {/*{JSON.stringify(testedMutation, null, 4)}*/}
        {/*slice in order to remove last 'children' element*/}
        {Object.entries(testedMutation).slice(0,-1).map(([key, value]) => {
            console.log('testedMutation key:');
            console.log(key);
            {JSON.stringify(key, null, 4)}
            return <li>{translate_key(key)} --- {value}</li>;
        })}
        <hr/>
    </div>
);

class TestedMutations extends Component {
    constructor(data) {
        super();
        if ("tested_mutations" in data) {
            this.state = data.tested_mutations
        }
        if ("denovo_mutations" in data) {
            this.state = data.denovo_mutations
        }
        //need to rename "ref" keys because preact crashes when encounters it
        this.state.map((tested_mutation) => rename_dangerous_keys(tested_mutation));
    }
    render() {
        console.log('TestedMutations render:');
        console.log(this.state);
        //assuming that this.state contains array, which is checked by Self.is_applicable
        const TestedMutations_ = this.state.map((item_) => <TestedMutation {...item_ }/>);
        return <div class="tested_mutations">
            <h4>Tested Mutations:</h4>
            {/*{JSON.stringify(this.state, null, 4)}*/}
            <ul>{TestedMutations_}</ul><hr/>
        </div>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        var keys = Object.keys(content);
        //single item "header" should be present
        // and "patient_info" and "healthcare_professional" properties must be present in "header"
        return keys.length === 1 && (
            ("tested_mutations" in content && content["tested_mutations"] instanceof Array)
                ||
            ("denovo_mutations" in content && content["denovo_mutations"] instanceof Array)
        ) ;
    }

    static process(data) {
        render(createElement(TestedMutations, data), document.body);
    }
}

export default TestedMutations;
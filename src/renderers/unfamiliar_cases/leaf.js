// idea is to cover case with final(no childs) and unfamiliar piece of json

import window from 'preact';

const {h, Component, render, createElement} = window;

//it happens that preact fails in case if key has name 'ref'
//so, need to rename it if it is the case
function rename_dangerous_keys(data) {
    if ("ref" in data) {
        return rename_key_in_object(data, "ref", "ref_renamed_because_preact_cannot_process_initial_key");
    }
    else {
        return data;
    }
}


//https://stackoverflow.com/a/14592469/10222982
function rename_key_in_object(o, old_key, new_key) {
    if (old_key !== new_key) {
        Object.defineProperty(o, new_key,
            Object.getOwnPropertyDescriptor(o, old_key));
        delete o[old_key];
    }
    return o;
}

class Leaf extends Component {
    constructor(data) {
        super();
        this.state = data;
        console.log('constructor Leaf is called with param');
        console.log(data);
        this.state = rename_dangerous_keys(data);
        console.log('this.state after processing:');
        console.log(this.state);
    }

    render() {
        return <pre>final(no childs) and unfamiliar piece of json: {JSON.stringify(this.state, null, 4)}</pre>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        // console.log('Leaf is_applicable called with content:');
        // console.log(content);
        if (Object.keys(content).length !== 1) {
            return false;
        }
        var item = content[Object.keys(content)[0]];

        // console.log('item');
        // console.log(item);

        return (!(item instanceof Array || typeof item === 'object'));
    }

    static process(data) {
        console.log('Leaf.process is called with data:');
        console.log(data);
        render(createElement(Leaf, data), document.body);
    }
}

export default Leaf;
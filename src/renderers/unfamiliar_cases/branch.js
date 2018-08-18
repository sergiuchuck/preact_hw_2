import window from 'preact';
import render_recursively from "../../app";
const { h, Component, render, createElement} = window;

//class represents item with single, non-simple child
class Branch extends Component {
    constructor(key) {
        super();
        // for somehow in this constructor string is converted to object.
        // e.g. "ok" is transformed as {0: "o", 1: "k", children: Array(0)}
        // So, need to convert it back.
        var string_from_key = "";
        var i = 0;
        while (key[i])
        {
            string_from_key += key[i];
            i++;
        }
        this.state = string_from_key;
        // console.log('constructor Branch is called with param:');
        // console.log(key);
        // console.log('this.state:');
        // console.log(this.state);
    }
    render() {
        console.log('printing key');
        console.log(this.state);
        return <pre>dive deep in unfamiliar piece of json with key: {this.state}</pre>
        // return <div><span class="key-name">key:</span> {this.state}</div>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        // console.log('Branch is_applicable called with content:');
        // console.log(content);
        if (Object.keys(content).length !== 1) {
            return false;
        }
        var item = content[Object.keys(content)[0]];

        // console.log('item');
        // console.log(item);

        return ( item instanceof Array || typeof item === 'object');
    }

    static process(data) {
        render(createElement(Branch, Object.keys(data)[0]), document.body);
        var item = data[Object.keys(data)[0]];
        render_recursively(item);
    }
}

export default Branch;
//idea of class is just display key of
import window from 'preact';
const { h, Component, render, createElement} = window;

class Key extends Component {
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
        console.log('constructor Key is called');
    }
    render() {
        console.log('printing key');
        console.log(this.state);
        return <pre>dive deep in unfamiliar piece of json with key: {this.state}</pre>
        // return <div><span class="key-name">key:</span> {this.state}</div>
    }

    static process(data) {
        render(createElement(Key, data), document.body);
    }
}

export default Key;
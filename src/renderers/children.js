// idea is to skip empty array 'children[]' which for somehow appears in json parts

import window from 'preact';
const { h, Component, render, createElement} = window;

class Children extends Component {
    constructor(data) {
        super();
        this.state = data;
    }
    render(){
        console.log("Children.is_applicable(this.state)");
        console.log(Children.is_applicable(this.state));
        console.log(this.state);
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        return Object.keys(content).length === 1 && Object.keys(content)[0] === "children";
    }

    static process(data) {
        render(createElement(Children, data), document.body);
    }
}

export default Children;
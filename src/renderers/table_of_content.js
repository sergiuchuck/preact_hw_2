// idea is to take piece of json which represents illness (one with property 'dis_tag') and render it

import window from 'preact';
const { h, Component, render, createElement} = window;

class TableOfContents extends Component {
    constructor(data) {
        super();
        this.state = data;
    }
    render(){
        //do nothing
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        console.log('TableOfContents is_applicable called with content:');
        console.log(content);

        //todo is this check required?
        // only 'object' is expected
        if (typeof content  !== "object") {return false;}

        var keys = Object.keys(content);
        // "table_of_contents" property must be present
        return keys.length === 1 && "table_of_contents" in content;
    }

    static process(data) {
        render(createElement(TableOfContents, data), document.body);
    }
}

export default TableOfContents;
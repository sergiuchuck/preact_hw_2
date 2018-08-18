import window from 'preact';
import Header from './renderers/header';
import Illness from './renderers/illness';
import render_recursively from './app';
import data from './inputData';
import TableOfContents from "./renderers/table_of_content";
import Branch from "./renderers/unfamiliar_cases/branch";
import Leaf from "./renderers/unfamiliar_cases/leaf";

const { h, Component, render, createElement } = window;
// const React = {createElement};

// console.log('typeof data');
console.log('typeof data.ok');
console.log(typeof data.ok);
console.log('typeof data.ok.children');
console.log(typeof data.ok.children);
// print_childs(data.ok);
// console.log(typeof data);
// has_childs(data.ok);
// print_childs(data.ok);
// has_childs(data.oks);
// print_childs(data.oks);
// console.log('typeof data.header');
// console.log(typeof data.header);
// has_childs(data.header);
// print_childs(data.header);



class App2 extends Component {
    constructor({ message }) {
        super();
        this.state = data;
    }
    render({}, { header, results: { content, table_of_contents } }) {
        console.log('content:');
        console.log(content);
        const ReferenceToHeader = renderers[0];
        return (
            <div>
            <ReferenceToHeader {...header }/>
        {
            content.map(item => (
                <Illness {...item }/>
        ))
        }
    </div>
    )
    }
}



render_recursively(data);
// render(createElement(App, data), document.body);
// render(createElement(App2, { message: "hhh" }), document.body);
console.log('finish');
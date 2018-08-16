
import window from 'preact';

const { h, Component, render, createElement } = window;
// const React = {createElement};

import Header from './renderers/header';
import Illness from './renderers/illness';
import data from './inputData';

console.log('typeof data');
console.log(typeof data);
console.log('typeof data.ok');
console.log(typeof data.ok);
console.log('typeof data.header');
console.log(typeof data.header);

class App extends Component {
    constructor({ message }) {
        super();
        this.state = data;
    }
    render({}, { header, results: { content, table_of_contents } }) {
        console.log('content:');
        console.log(content);
        return (
            <div>
            <Header {...header }/>
        {
            content.map(item => (
                <Illness {...item }/>
        ))
        }
    </div>
    )
    }
}
// render(createElement(App, { message: "hhh" }), window.root);
render(createElement(App, { message: "hhh" }), document.body);
console.log('finish');
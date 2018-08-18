import window from 'preact';
import {render_recursively} from './app';
import data from './inputData';

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



render_recursively(data);
// render(createElement(App, data), document.body);
// render(createElement(App2, { message: "hhh" }), document.body);
console.log('finish');
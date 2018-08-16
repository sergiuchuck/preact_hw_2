

console.log("Hello from JavaScript!");

// check that babel works
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

import window from 'preact';

const { h, Component, render, createElement } = window;

console.log(h);
console.log(Component);
console.log(render);
console.log(createElement);

console.log(window);
console.log(window.h);
console.log(window.Component);
console.log(window.render);
console.log(window.createElement);
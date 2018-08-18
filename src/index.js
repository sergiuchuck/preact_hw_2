import window from 'preact';
import {render_recursively} from './app';
const json = require('../input.json');

const { h, Component, render, createElement } = window;

render_recursively(json);
console.log('finish');
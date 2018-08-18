import window from 'preact';
import {render_recursively} from './app';
import data from './inputData';

const { h, Component, render, createElement } = window;

render_recursively(data);
console.log('finish');
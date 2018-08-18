import window from 'preact';
import {render_recursively} from './app';
import data from './inputData';

const { h, Component, render, createElement } = window;
// const React = {createElement};


render_recursively(data);
console.log('finish');
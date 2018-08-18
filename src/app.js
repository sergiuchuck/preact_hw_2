// idea of the function is to encapsulate set of renderers (classes which are able to render specific part of json)
// and recursively loop through input json and try to apply each of renderers to certain item of json
// if can - apply
// if cannot - loop through item (it should be either object with >=2 keys or array or object with children with >=1 key)
// if cannot (object with single simple children) - render it with some warning message (class Leaf is responsible)

import window from 'preact';
const { h, Component, render, createElement } = window;

import Header from "./renderers/header";
import Illness from "./renderers/illness";
import Branch from "./renderers/unfamiliar_cases/branch";
import Leaf from "./renderers/unfamiliar_cases/leaf";
import TableOfContents from "./renderers/table_of_content";

//Order matters.
// E.g. Branch should be last. at least, following(after) Leaf.
var renderers = [Header, Illness, TableOfContents, Leaf, Branch];

function print_childs(item) {
    console.log('printing childs for ');
    console.log(item);

    Object.keys(item).forEach(function(key){
        console.log('child');
        console.log(item[key]);
    });
}


function render_recursively(item) {
    console.log('in renderer with item:');
    console.log(item);
    console.log(typeof item);

    for (let renderer of renderers) {
        // console.log('renderer');
        // console.log(renderer);
        // console.log('renderer is applicable:');
        // console.log(renderer.is_applicable(item));
        if (renderer.is_applicable(item)) {
            console.log('renderer is applicable:');
            console.log(renderer);
            // console.log(Renderer);
            // return (
            //     <div>
            //         renderer is applicable
            //         <Renderer {...item}/>
            //     </div>
            // )
            // render(createElement(renderer, item), document.body);
            renderer.process(item);
            return
        }
    }
    console.log('no renderer is applicable:');

    // var keys = Object.keys(item);
    // if (keys.length > 1){//means some children are present
        Object.keys(item).forEach(function(key){
            console.log('key');
            console.log(key);
            console.log(item.hasOwnProperty(key));
            //write key in order not to lost info about it
            // render(createElement(Key, key), document.body);
            var item2 = {};
            item2[key] = item[key];
            console.log('recursive call for item:');
            console.log(item2);
            // render(createElement(App, item2), document.body);
            render_recursively(item2);
            // return (
            //     <div>
            //         <App {...item }/>
            //     </div>
            // )
        });
    // }
    // else {//means single children is present
    //     //only here info about key may be lost
    //     //print key
    //     render(createElement(Key, keys[0]), document.body);
    //     //and render child
    //     render_recursively(item[keys[0]]);
    // }
}

function has_childs(item) {
    var keys = Object.keys(item)
    console.log('has_childs:');
    console.log(item);
    console.log(keys);
    console.log(item[keys[0]]);
    console.log(Object.keys(item[keys[0]]));
    return Object.keys(item).length > 1 || Object.keys(item[keys[0]]).length > 0;
}


export default render_recursively;
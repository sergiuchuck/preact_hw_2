// idea of the function is to encapsulate set of renderers (classes which are able to render specific part of json)
// and recursively loop through input json and try to apply each of renderers to certain item of json
// if can - apply
// if cannot - loop through item (it should be either object with >=2 keys or array or object with children with >=1 key)
// if cannot (object with single simple children) - render it with some warning message (class Leaf is responsible)

import window from 'preact';
const { h, Component, render, createElement } = window;

import Header from "./renderers/header";
import Illness from "./renderers/illness";
import Key from "./renderers/unfamiliar_cases/key";
import Leaf from "./renderers/unfamiliar_cases/leaf";
import TableOfContents from "./renderers/table_of_content";

// Order matters.
// E.g. Leaf should be last.
var renderers = [Header, Illness, TableOfContents, Leaf];

function print_childs(item) {
    console.log('printing childs for ');
    console.log(item);

    Object.keys(item).forEach(function(key){
        console.log('child');
        console.log(item[key]);
    });
}


export function render_recursively(item) {
    render_recursively_with_renderers(item, renderers);
}

export function render_recursively_with_renderers(item, renderers) {
    console.log('in renderer with item:');
    console.log(item);
    console.log(typeof item);
    console.log(renderers);

    for (let renderer of renderers) {
        // console.log(renderers);
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

    var keys = Object.keys(item);
    //finally, need to keep this check. can not move this logic to separate renderer because cyclic dependencies occur;
    // and that separate renderer needs to know context(list of renderers) of this function; because this context may vary
    // e.g. if function is called from some renderer (Illness in my case)
    if (keys.length > 1){//means some children are present
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
            render_recursively_with_renderers(item2, renderers);
            // return (
            //     <div>
            //         <App {...item }/>
            //     </div>
            // )
        });
    }
    else {
        //means single children is present
        //only here info about key may be lost
        //print key
        render(createElement(Key, keys[0]), document.body);
        //and render child
        render_recursively_with_renderers(item[keys[0]], renderers);
    }
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
# Json previewer

### Idea of the project

idea of the project is to process json recursively.
Project contains several renderers: classes which can process some piece of json.
And recursive function which loops through json and tries to apply renderers to each piece of json data.

If some piece of json can be processed - do it. 

If cannot - subdivide it or dive into it.

If cannot - print it out with warning.


### Requirements

Installed [npm] 

### Preview of processed json

[preview of processed json on github pages]

[preview of processed json on htmlpreview.github.io]


### How to install dependencies

```bash
~: npm install
```

### How to run the project

```bash
~: npm run server
```
and navigate to [http://localhost:8080] 


### Input data

```
./input.json
```

[preview of processed json on htmlpreview.github.io]: http://htmlpreview.github.io/?https://github.com/sergiuchuck/preact_hw_2/blob/master/docs/index.html
[preview of processed json on github pages]: https://sergiuchuck.github.io/preact_hw_2
[http://localhost:8080]: http://localhost:8080 
[npm]: https://www.npmjs.com/get-npm

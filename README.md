# Json previewer

### Idea of the project

idea of the project is to process json recursively.
Project contains several renderers: classes which can process some piece of json.
and recursive function which loops through json and tries to apply renderers to each piece of json data.
If some piece of json can be processed - do it. 
if cannot - dive into it.
If cannot - print it out with warning.


### Preview of processed json

[preview of processed json]


### How to run the project

```bash
~: npm run server
```
and navigate to [http://localhost:8080] 


### Input data

```
src/inputData.js
```

[preview of processed json]: http://htmlpreview.github.io/?https://github.com/sergiuchuck/preact_hw_2/blob/master/docs/index.html
[http://localhost:8080]: http://localhost:8080 
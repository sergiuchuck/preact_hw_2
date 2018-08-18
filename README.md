# preact_hw_2
js project from https://habr.com/company/mailru/blog/340922/


idea of the project is to process json recursively.
Project contains several renderers: classes which can process some piece of json.
and recursive function which loops through json and tries to apply renderers to each piece of json data.
If some piece of json can be processed - do it, 
if cannot - dive into it.
If cannot - print it out with warning.

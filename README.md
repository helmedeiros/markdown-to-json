# markdown-to-json 

## About

The idea for this library came from the desire to [create post-its based on github markdown](http://rbsdev.github.io/kanban-task-gen/) used on our online projects.

## Examples

### Example usage

```js
var converter = new TableConverter();  

converter.htmlToJSON($('my-table-id'));


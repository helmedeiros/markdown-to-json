# markdown-to-json 

## About

The idea for this library came from the desire to [create post-its from github issues](http://rbsdev.github.io/kanban-task-gen/) used on our online projects.

Github use set of [transformations to proccess and show their markups](https://github.com/github/markup), in specif for tables, that were currently rendered as [HTML tables](http://www.w3schools.com/html/html_tables.asp).  

This library will transform markups also tables to json files.

## Examples

### Example usage
```html
  <table>
    <thead>
      <tr>
        <th>n°</th>
        <th>Histórias   tarefas</th>
        <th align="center">Back</th>
        <th align="right">Front</th>
        <th align="right">SEO</th>
        <th align="right">QA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>35</td>
        <td><a href="https://github.com/rbsdev/flip/issues/125">Publicação flip AN e SOL</a></td>
        <td align="center"></td>
        <td align="right"></td>
        <td align="right"></td>
        <td align="right"></td>
      </tr>
    </tbody>
  </table>
```

```js
var converter = new TableConverter();  

converter.htmlToJSON($('my-table-id'));
```

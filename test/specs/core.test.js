/* Should get the row's headings */
test('should return headings whithout thead', function(){

  var table = $(
      '<table id="test-table">' +
        '<tr>' +
          '<th>numero</th>' +
          '<th>Historias tarefas</th>' +
          '<th>Back</th>' +
          '<th>Front</th>' +
          '<th>SEO</th>' +
          '<th>QA</th>' +
        '</tr>' +
        '<tr>' +
            '<td>35</td>' +
            '<td>Publicação flip AN e SOL</td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td>7</td>' +
          '</tr>' +
      '</table>'
    );

  var converter = new TableConverter();
  var headings = converter.getHeadings(table);
  debugger;
  var expected = ["numero","Historias tarefas","Back","Front","SEO","QA"];
  deepEqual(headings, expected);

});

/* Should get the row's headings */
test('should return headings whith thead', function(){

  var table = $(
      '<table id="test-table">' +
        '<thead>' +
          '<tr>' +
            '<th>numero</th>' +
            '<th>Historias tarefas</th>' +
            '<th>Back</th>' +
            '<th>Front</th>' +
            '<th>SEO</th>' +
            '<th>QA</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>' +
          '<tr>' +
            '<td>35</td>' +
            '<td>Publicação flip AN e SOL</td>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td>7</td>' +
          '</tr>' +
        '</tbody>' + 
      '</table>'
    );

  var converter = new TableConverter();
  var headings = converter.getHeadings(table);
  debugger;
  var expected = ["numero","Historias tarefas","Back","Front","SEO","QA"];
  deepEqual(headings, expected);

});

var converter = new TableConverter();

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

  
  var expected = ["numero","Historias tarefas","Back","Front","SEO","QA"];
  assertHeadings(table, expected);
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

  var expected = ["numero","Historias tarefas","Back","Front","SEO","QA"];
  assertHeadings(table, expected);
});

/* Should get the row's headings */
test('should return headings with td as columns instead of th', function(){
  var table = $(
      '<table id="test-table">' +
        '<tr>' +
          '<td>numero</td>' +
          '<td>Historias tarefas</td>' +
          '<td>Back</td>' +
          '<td>Front</td>' +
          '<td>SEO</td>' +
          '<td>QA</td>' +
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

  
  assertHeadings(table, expected);

});

var assertHeadings = function(table, expected){
  var headings = converter.getHeadings(table);
  deepEqual(headings, expected);  
};


function TableConverter() {};


TableConverter.prototype = {

    getHeadings: function(table) {
        var firstRow = table.find('tr:first').first();
        return this.rowValues(firstRow);
    },

    rowValues: function(row) {
        var result = [];
        $(row).children('td,th').each(function(cellIndex, cell) {
            result[result.length] = $.trim($(cell).text());
        });
        return result;
    }, 

    createJSON: function(table, headings) {
        var result = [];

        var createTableArray = function(rowIndex, row){
            if (rowIndex) {
                result[result.length] = this.arraysToHash(headings, this.rowValues(row));                
            }
        };

        table.children('tbody,*').children('tr').each($.proxy(createTableArray,this));
        return result;
    }, 

    arraysToHash: function(keys, values) {
        var result = {};
        $.each(values, function(index, value) {
            if (index < keys.length) {
                result[keys[index]] = value;
            }
        });
        return result;
    },

    htmlToJSON: function(table){
      // Run
      var headings = this.getHeadings(table);
      return this.createJSON(table, headings);
    }   

};

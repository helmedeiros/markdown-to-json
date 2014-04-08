(function (global, $) {

    'use strict';

    var TableConverter = function(table) {
        this.elements = {};
        this.elements.table = table;
    };

    TableConverter.prototype = {
        getHeadings: function() {
            var firstRow = this.elements.table.find('tr:first').first();
            return this.rowValues(firstRow);
        },

        rowValues: function(row) {
            var result = [];
            $(row).children('td,th').each(function(cellIndex, cell) {
                result[result.length] = $.trim($(cell).text());
            });
            return result;
        }, 

        createJSON: function(headings) {
            var result = [];

            var createTableArray = function(rowIndex, row){
                if (rowIndex) {
                    result[result.length] = this.arraysToHash(headings, this.rowValues(row));                
                }
            };

            this.elements.table.children('tbody,*').children('tr').each($.proxy(createTableArray,this));
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

        htmlToJSON: function(){
          // Run
          var headings = this.getHeadings(this.elements.table);
          return this.createJSON(headings, headings);
        }
    };

    global.TableConverter = TableConverter;

}(window, jQuery));


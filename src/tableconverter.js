(function (global) {

    'use strict';

    var TableConverter = function(table) {
        this.elements = {};
        this.elements.table = table;
    };

    TableConverter.prototype = {
        getHeadings: function() {
            var firstRow = this.elements.table.firstChild.firstChild;
            return this.rowValues(firstRow);
        },

        rowValues: function(row) {
            var result = [];
            var cells = row.children;

            for(var i=0, size=cells.length; size > i; i++) {
                var text = cells[i].textContent.trim();
                result.push(text);
            }
            
            return result;
        }, 

        createJSON: function(headings) {
            var result = [];

            var elements = this.elements.table.firstChild.children;
            
            for(var i=1, size=elements.length; size > i; i++) {
                var row = elements[i];
                var hash = this.arraysToHash(headings, this.rowValues(row));
                result.push(hash);
            }

            return result;
        }, 

        arraysToHash: function(keys, values) {
            var result = {};

            values.forEach(function(value, index) {
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

}(window));


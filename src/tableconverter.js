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
    }  

};

var EXPORTED_SYMBOLS = ['outputHelper']

/**
 * Helper object which contains functions for Output modes
 */
var outputHelper = {
    /**
     * Counts the number of items in the list
     * 
     * @param {DOM node} list
     * @returns {Integer} number of items in the list
     */
    countListNodes: function(list) {
        return list.childNodes.length
    },    
    
    /**
     * Counts number of rows in a table
     *
     * @param {DOM Node} table
     * @returns {Integes} nubmer of rows in a table
     */
    getNumRowsInTable: function(table) {
        return table.rows.length
    },
    
    /**
     * Counts number of columns in a table
     *
     * @param {DOM Node} table
     * @returns {Integer} number of columns in a table     *
     */
    getNumColumnsInTable: function(table) {
        return table.rows[0].cells.length
    },

    /**
     * Obtains table heading for current cell
     * Table can have few structures
     *
     * @param {DOM Node} table cell
     * @returns {string} heading for current cell
     */
    getCellHeading: function(node) {
        // table -> tr -> td
        if (node.parentNode.rowIndex != 0 && node.parentNode.parentNode.tagName == 'TABLE') {
            return node.parentNode.parentNode.getElementsByTagName('th')[node.cellIndex].textContent
        }
        // table -> tbody|tfoot -> td
        else if (node.parentNode.rowIndex != 0 && node.parentNode.parentNode.parentNode.tagName == 'TABLE') {
            return node.parentNode.parentNode.parentNode.getElementsByTagName('th')[node.cellIndex].textContent
        } else return ''
    }
}
/**
 * Split a string by a delimiter
 * @param {string} string - String to split
 * @param {string} delimiter - Delimiter to split by
 * @returns {array} - Array of split string parts
 */
module.exports = {
  split: function(string, delimiter) {
    if (typeof string !== 'string') {
      return [];
    }
    return string.split(delimiter);
  },
  
  /**
   * Get filename from a path
   * @param {string} path - Path to get filename from
   * @returns {string} - Filename
   */
  filename: function(path) {
    if (typeof path !== 'string') {
      return '';
    }
    return path.split('/').pop();
  }
};
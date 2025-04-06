const Image = require('@11ty/eleventy-img');

/**
 * Get image dimensions using the eleventy-img library
 * @param {string} src - Image source path
 * @param {string} dimension - 'width' or 'height'
 * @returns {number} - The requested image dimension
 */
module.exports = function(src, dimension) {
  try {
    if (!src) {
      console.warn('No source provided to imageDimension filter');
      return dimension === 'width' ? 1200 : 800; // Default fallback
    }

    // Use eleventy-img's built-in statsSync function
    // This gives us image dimensions without processing the image
    const stats = Image.statsSync(src, {
      // These options don't matter for statsSync but are required
      widths: [null],
      formats: ['jpeg'],
      dryRun: true
    });

    // statsSync returns an object with format keys that contain arrays of stats
    const formats = Object.keys(stats);
    if (formats.length > 0) {
      const firstFormat = formats[0];
      if (stats[firstFormat].length > 0) {
        // Get the original dimensions (first item in the array)
        const originalSize = stats[firstFormat][0];
        return originalSize[dimension] || (dimension === 'width' ? 1200 : 800);
      }
    }

    // Fallback if we couldn't get dimensions
    console.warn(`Could not get ${dimension} for ${src}`);
    return dimension === 'width' ? 1200 : 800;
  } catch (error) {
    console.error(`Error getting image dimensions for ${src}:`, error);
    return dimension === 'width' ? 1200 : 800; // Default fallback
  }
};

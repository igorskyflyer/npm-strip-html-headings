/**
 * Strips HTML headings completely.
 * @param {string} value The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHeadings(value: string): string {
  return value.length === 0 ? '' : value.replace(/<h[1-6].*>.*<\/h[1-6]>/gm, '').trim()
}

/**
 * Strips only the HTML code while keeping the heading text.
 * @param {string} value The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHeadingsCode(value: string): string {
  return value.length === 0 ? '' : value.replace(/<h[1-6].*>(.*)<\/h[1-6]>/gm, '$1').trim()
}

// Author: Igor Dimitrijević (@igorskyflyer)

import { stripHtmlCode } from '@igorskyflyer/strip-html'

const rxHeadingsCode: RegExp = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gms
const rxHeadings: RegExp = /<h[1-6][^>]*>.*?<\/h[1-6]>/gms

/**
 * Strips HTML headings completely.
 * @param {string} value The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHeadings(value: string): string {
  if (typeof value !== 'string' || value.length === 0) {
    return ''
  }

  return value.replace(rxHeadings, '').trim()
}

/**
 * Strips only the HTML code while keeping the heading text.
 * @param {string} value The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHeadingsCode(value: string): string {
  if (typeof value !== 'string' || value.length === 0) {
    return ''
  }

  return value
    .replace(rxHeadingsCode, (_, inner) => stripHtmlCode(inner))
    .trim()
}

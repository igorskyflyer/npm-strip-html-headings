// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, it } from 'vitest'
import { stripHeadings, stripHeadingsCode } from './../src/index.js'

describe('🧪 strip-html-headings examples tests 🧪', () => {
  // 🧹 strip all headings completely
  it('🧹 should strip all headings completely', () => {
    assert.equal(stripHeadings('<h1>Hello</h1><p>World</p>'), '<p>World</p>')
  })

  // ✂️ keep heading text, remove only tags
  it('✂️ should keep heading text and remove only tags', () => {
    assert.equal(stripHeadingsCode('<h2 class="title">Hello</h2>'), 'Hello')
  })

  // 📚 multiple headings handled
  it('📚 should handle multiple headings', () => {
    assert.equal(stripHeadingsCode('<h1>A</h1><h2>B</h2><h3>C</h3>'), 'ABC')
  })

  // 🪞 nested tags inside headings cleaned
  it('🪞 should clean nested tags inside headings', () => {
    assert.equal(
      stripHeadingsCode('<h1><em>Bold</em> Title</h1>'),
      'Bold Title'
    )
  })

  // 🧼 whitespace trimmed
  it('🧼 should trim whitespace', () => {
    assert.equal(stripHeadingsCode('   <h3> Trimmed </h3>   '), 'Trimmed')
  })

  // 🚫 safe on bad input
  it('🚫 should be safe on bad input', () => {
    // @ts-expect-error
    assert.isEmpty(stripHeadings())
    // @ts-expect-error
    assert.isEmpty(stripHeadingsCode(null))
  })
})

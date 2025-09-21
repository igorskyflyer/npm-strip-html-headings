// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, it } from 'vitest'
import { stripHeadings, stripHeadingsCode } from './../src/index.js'

describe('🧪 strip-html-headings tests 🧪', () => {
  it('#1 should return true', () => {
    assert.isEmpty(stripHeadings(''))
  })

  it('#2 should return true', () => {
    assert.isEmpty(stripHeadingsCode(''))
  })

  it('#3 should return empty', () => {
    assert.isEmpty(stripHeadings('<h4>Hello</h4>'))
  })

  it('#4 should return Hello', () => {
    assert.equal(stripHeadingsCode('<h3>Hello</h3>'), 'Hello')
  })

  it('#5 should return World', () => {
    assert.equal(stripHeadingsCode('<h3 class="banner">World</h3>'), 'World')
  })

  it('#6 should strip multiple headings', () => {
    assert.isEmpty(stripHeadings('<h1>A</h1><h2>B</h2><h3>C</h3>'))
  })

  it('#7 should keep multiple heading texts', () => {
    assert.equal(stripHeadingsCode('<h1>A</h1><h2>B</h2><h3>C</h3>'), 'ABC')
  })

  it('#8 should strip only headings and leave other tags', () => {
    assert.equal(
      stripHeadings('<p>Keep me</p><h2>Remove me</h2>'),
      '<p>Keep me</p>'
    )
  })

  it('#9 should keep heading text and other text', () => {
    assert.equal(
      stripHeadingsCode('<p>Keep</p><h2>Head</h2>'),
      '<p>Keep</p>Head'
    )
  })

  it('#10 should strip nested tags inside heading', () => {
    assert.equal(
      stripHeadingsCode('<h1><em>Bold</em> Title</h1>'),
      'Bold Title'
    )
  })

  it('#11 should strip h6 as well', () => {
    assert.isEmpty(stripHeadings('<h6>Deep</h6>'))
  })

  it('#12 should trim whitespace after stripping', () => {
    assert.equal(stripHeadingsCode('   <h2> Trimmed </h2>   '), 'Trimmed')
  })

  it('#13 should ignore non‑heading tags', () => {
    assert.equal(
      stripHeadingsCode('<div>Not a heading</div>'),
      '<div>Not a heading</div>'
    )
  })
  it('#14 should leave angle‑brackets that aren’t tags', () => {
    assert.equal(stripHeadingsCode('<<notatag>>'), '<<notatag>>')
  })
})

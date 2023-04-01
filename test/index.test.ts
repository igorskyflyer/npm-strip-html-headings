import { assert as chai } from 'chai'
import { stripHeadings, stripHeadingsCode } from './../src/index'

describe('🧪 strip-html-headings tests 🧪', () => {
  it('#1 should return true', () => {
    chai.isEmpty(stripHeadings(''))
  })

  it('#2 should return true', () => {
    chai.isEmpty(stripHeadingsCode(''))
  })

  it('#3 should return empty', () => {
    chai.isEmpty(stripHeadings('<h4>Hello</h4>'))
  })

  it('#4 should return Hello', () => {
    chai.equal(stripHeadingsCode('<h3>Hello</h3>'), 'Hello')
  })

  it('#5 should return World', () => {
    chai.equal(stripHeadingsCode('<h3 class="banner">World</h3>'), 'World')
  })
})

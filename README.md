<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-strip-html-headings/main/media/strip-html-headings.png" alt="Strip HTML Headings logo - sanitize HTML by stripping heading tags and preserving content" width="256" height="256">
  <h1>Strip HTML Headings</h1>
</div>

<blockquote align="center">
strip HTML headings • keep heading text clean • safe input handling, always returns string • perfect for text extraction
</blockquote>

<h4 align="center">
  🍛 Lightweight utility to strip HTML heading tags (<code>h1</code>-<code>h6</code>). Remove headings completely or extract their text content while cleaning up markup. Perfect for transforming HTML, parsing content, or preparing plain text output. 🍤
</h4>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- 🧹 Strips all HTML headings h1-h6 completely  
- ✂️ Removes only heading tags while keeping text  
- 🧪 Safe on undefined null non-string inputs  
- 📏 Handles multiple headings in one string  
- 🪞 Preserves non-heading tags and content  
- 🧼 Trims and normalizes whitespace  
- 🎭 Cleans nested tags inside headings  
- 📚 Supports multi-line formatted headings  
- 🚫 Never throws always returns a string  

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/strip-html-headings
```

```bash
yarn add @igorskyflyer/strip-html-headings
```

```bash
npm i @igorskyflyer/strip-html-headings
```

<br>
<br>

## 🤹🏼 API

```ts
function stripHeadings(value: string): string
```

_Strips HTML headings completely._

`value: string` - the HTML string to process.

Returns the processed string.

<br>

```ts
function stripHeadingsCode(value: string): string
```

_Strips only the HTML code while keeping the heading text._

`value: string` - the HTML string to process.

Returns the processed string.

<br>
<br>

## 🗒️ Examples

```ts
import { stripHeadings, stripHeadingsCode } from '@igorskyflyer/strip-html-headings'

// 🧹 strip all headings completely
console.log(stripHeadings('<h1>Hello</h1><p>World</p>'))
// '<p>World</p>'

// ✂️ keep heading text, remove only tags
console.log(stripHeadingsCode('<h2 class="title">Hello</h2>'))
// 'Hello'

// 📚 multiple headings handled
console.log(stripHeadingsCode('<h1>A</h1><h2>B</h2><h3>C</h3>'))
// 'ABC'

// 🪞 nested tags inside headings cleaned
console.log(stripHeadingsCode('<h1><em>Bold</em> Title</h1>'))
// 'Bold Title'

// 🧼 whitespace trimmed
console.log(stripHeadingsCode('   <h3> Trimmed </h3>   '))
// 'Trimmed'

// 🚫 safe on bad input
// @ts-expect-error
console.log(stripHeadings()) // ''
console.log(stripHeadingsCode(null as any)) // ''
```

<br>
<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-strip-html-headings/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-strip-html-headings/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[**@igorskyflyer/common-types**](https://www.npmjs.com/package/@igorskyflyer/common-types)

> _🔦 Provides frequently used types for your TypeScript projects. 🦄_

<br>

[**@igorskyflyer/rawelement**](https://www.npmjs.com/package/@igorskyflyer/rawelement)

> _🐯 A utility that lets you manipulate HTML elements, their attributes and innerHTML as strings, on the go and then render the modified HTML. Very useful in SSG projects. 💤_

<br>

[**@igorskyflyer/common-color**](https://www.npmjs.com/package/@igorskyflyer/common-color)

> _🎨 Provides common Color-related TypeScript types. 🌈_

<br>

[**@igorskyflyer/duoscribi**](https://www.npmjs.com/package/@igorskyflyer/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>

[**@igorskyflyer/encode-entities**](https://www.npmjs.com/package/@igorskyflyer/encode-entities)

> _🏃‍♂️ Fast and simple Map and RegExp based HTML entities encoder. 🍁_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.

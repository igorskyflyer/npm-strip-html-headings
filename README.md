# StripHTMLHeadings

🍛 Strips HTML headings! 🍤

<br>

### ✨ Install

<br>

Install it by running:

```shell
npm i "@igor.dvlpr/strip-html-headings"
```

<br>
<br>

### 🕵🏼‍♂️ Usage

<br>

```ts
function stripHeadings(value: string): string
```

_Strips HTML headings completely._

`value: string` - the HTML string to process.

`returns` - the processed string.

<br>

```ts
function stripHeadingsCode(value: string): string
```

_Strips only the HTML code while keeping the heading text._

`value: string` - the HTML string to process.

`returns` - the processed string.

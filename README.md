# qs

Access the browser's query string as a JavaScript object. No dependencies.

## Installation

Include the following line in your HTML file:

```html
<script src="qs.min.js"></script>
```

## Usage

Get the query string as a JavaScript object:

```javascript
qs.get();
```

## Examples

URL: `https://example.com/?post=1234&action=edit`

`qs.get()` will return:

```javascript
{
  post: "1234",
  action: "edit"
}
```

URL: `https://example.com/?post=1234&post=4321`

`qs.get()` will return:

```javascript
{
  post: ["1234", "4321"]
}
```

## To Do

I've added some tasks that should probably be completed and some features that would be nice to have. I welcome pull requests!

## License

The MIT License (MIT) Copyright © 2016 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

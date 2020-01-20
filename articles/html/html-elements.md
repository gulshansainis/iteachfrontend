---
date: "2020-01-20"
title: "HTML Elements Explained"
keywords: "html elements, what is html element, popular html elements"
published: true
category: "html"
---

HTML web pages are made up of various elements. Each element has its own purpose, it might contain an image, some text content, a heading, a hyperlink or some other information to be used by the browser. **Let's understand this by an example**

```markup
<!DOCTYPE html>
<html lang="en">
</html>
```

In above example we can see HTML element starting with `<html lang="en">` tag next to [Doctype declaration](/what-is-html-5-doctype) and, ending with closing `</html>` tag. In most cases, an element is made up of two tags, a start tag, and an end tag.

- **Start tag** - It begins with less than sign (<) and ends with greater than sign (>)
- **End tag** - It begins with less than sign (<), followed by a forward slash (/) and ends with greater than sign (>)

Below is another example of the **paragraph** element

```markup
<p>Some beautiful text inside paragraph</p>
```

`<p>` is start tag and `</p>` is end tag in above example. Between start and end tags we have text content.

You might have noticed `lang="en"` in the very first example; these are called attributes. Attributes provide additional information to the browser, related to the enclosing element. The example defines the content language as English by adding the lang attribute with the value "en". Attributes can be defined only inside the start tag. Attributes are mostly in the form of key-value pair however in some cases, values are not required. Again, going back to our example: the key is `lang` and value is `en`.

Below, is list of mostly commonly used HTML elements with their description

| Element        | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| `<html>`       | Represents the root of HTML document                                                                  |
| `<head>`       | Contains information(metadata) about document, like its title, scripts and stylesheet                 |
| `<link>`       | Link external resources like **stylesheets**, **favicon**                                             |
| `<meta>`       | Represents metadata                                                                                   |
| `<style>`      | Style information for document                                                                        |
| `<title>`      | Title for document that is also visible on browser tab                                                |
| `<body>`       | Content of document                                                                                   |
| `<header>`     | Introductry content, typically logo, navigation links, search input                                   |
| `<nav>`        | Navigation links with in document or to other documents                                               |
| `<main>`       | Represents dominant content of the `<body>` of a document                                             |
| `<h1>-<h6>`    | Represents section headings. `<h1>` is the highest section level and `<h6>` is the lowest.            |
| `<blockquote>` | Extended quotation                                                                                    |
| `<div>`        | Generic container for content flow                                                                    |
| `<div>`        | Generic inline container                                                                              |
| `<hr>`         | Horizontal line to give break between paragraph level elements                                        |
| `<p>`          | Represent a paragraph                                                                                 |
| `<ul>`         | Unordered list                                                                                        |
| `<ol>`         | Ordered list                                                                                          |
| `<li>`         | List item                                                                                             |
| `<a>`          | To create hyperlinks to webpafes, files, email addresses                                              |
| `<b>`          | Makes inner content <b>bold</b> to draw attention of user                                             |
| `<i>`          | Makes text _italic_                                                                                   |
| `<br>`         | Represent a line break                                                                                |
| `<img>`        | Embeds image in document                                                                              |
| `<video>`      | Embeds a media player to playback videos within document.                                             |
| `<audio>`      | Embed a media player to play audio within document                                                    |
| `<canvas>`     | To draw graphics and animations programatically                                                       |
| `<script>`     | Embed executable code, typically JavaScript                                                           |
| `<table>`      | Represent data in tabular form                                                                        |
| `<tbody>`      | Encapsulates table rows                                                                               |
| `<td>`         | Represent a table cell                                                                                |
| `<tr>`         | Represent a table row                                                                                 |
| `<tfoot>`      | Represent a table footer                                                                              |
| `<th>`         | Represent a table cell as header                                                                      |
| `<button>`     | A clickable element to perform form submit or link within out outside document                        |
| `<form>`       | Contain elements to capture user information using form fields like, `<input>`, `<radio>`, `<option>` |
| `<input>`      | To capture user information                                                                           |
| `<label>`      | To caption an item in a user interface                                                                |
| `<select>`     | Provide multiple `<option>` which user can select                                                     |
| `<option>`     | Used to define items container in a `<select>` element                                                |
| `<textarea>`   | Multi-line plain-text editing control                                                                 |

For, complete list please read [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

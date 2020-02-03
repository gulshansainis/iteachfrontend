---
slug: creating-first-html-document
date: 2020-02-03
title: "Creating First HTML Document"
description: "HTML is the language used to create web pages. An HTML document is composed of multiple elements that help browsers in understanding the document structure and layout content on the user screen."
categories: ["html"]
keywords:
  [
    "how to create html document",
    "how should i created html document",
    "html document explained",
  ]
published: true
banner: "./banner.jpg"
---

import Codepen from 'components/Codepen'

HTML is the language used to create web pages. An HTML document is composed of multiple elements that help browsers in understanding the document structure and layout content on the user screen.

In general, the structure of an HTML document is like a tree. As the tree has multiple branches and new branches could extend from the current branch similarily elements in an HTML document could be next to each other or nested inside another element.

## Element tags

Before, we deep dive into the HTML document structure, we should understand the fundamental building block in every HTML document is the element tag, which marks an element in the document. A starting tag indicates the beginning of that element, while an ending tag indicates the ending. The general syntax of a **two-sided element** tag is `<element>content</element>` where element is the name of the element, content is the element’s content, `<element>` is the starting tag, and `</element>` is the ending tag. For example, the following code marks a paragraph element:

```markup
<p>This is a pragraph</p>
```

`<p>` in above example is starting tag and `</p>` is ending tag.

In additon to two-sided element tag we also have **one-sided element** tag also known as empty elements. These elements are either used for non textual content such as images or contain directives to the browser about how the page should be treated. For example, the following code marks a image element

```markup
<img src="/path/to/image.jpg" alt="my image" />
```

Another, example for **one-sided element** is `<br/>` element that is used to put line break between content

<Codepen id="yLymEvP"/>

### Keys points to remember about element tags

- Not every element tag enclose document content
- Some elements do not have the ending tag
- An element tag can have other element tags also known as a nested element. Nested elements should close first before closing its immediate parent element tag

## Lets understand the structure of HTML document

Now, we have a basic understanding of what element tag lets explore how these elements tags help us in creating a complete HTML document

```markup
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My First HTML page</title>
  </head>
  <body>
    <h1>Big Heading</h1>
    <p>I am text inside a paragraph.</p>
  </body>
</html>
```

- `<!DOCTYPE html>`: The very first line of HTML document should start with the doctype declaration. The [doctype](/what-is-html-5-doctype) appears just above `<html>` tag, at the very start of each HTML document, which is a processing instruction indicating the markup language used in the document. The declaration is used in HTML5 to distinguish between a standards-compliant parsing mode and so-called quirks parsing mode.
- `<html>`: The root element of HTML document. `head` and `body` are the only valid children of the `html` element. `lang="en-US"` is attribute of `html` element and is used to set the primary language of the document.
- `<head>`: The `head` section of HTML document is not displayed in the web browser however, it contains important meta-information about the document such as the page title, links to CSS and JavaScript files, keywords and description that help search engine to display relevant content, on user search. The `<meta>`, `<title>`, `<link>`, `<script>` and `<style>` are valid elements that could be nested inside the `<head>` element. In the above example, we have two child elements - first is `<meta charset="utf-8">` and second is `<title>My First HTML page</title>`
- `<body>`: The visible content on the page is defined inside `<body>` tag. Headings, paragraph, images, links, videos, audio content etc. are all defined inside the body element. Within the `<body>` element of this file, we have a high-level heading `<h1>` and a paragaph `<p>`.

## Helpful links

- https://validator.w3.org - To check the HTML markup of Web documents is valid

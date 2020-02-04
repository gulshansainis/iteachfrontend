---
slug: what-is-inside-html-head-element
date: 2020-02-04
title: "What Is Inside HTML Head Element"
description: "HTML `<head>` element represents a collection of metadata for the current document. This information helps browser in understanding the document and display it properly on user device."
categories: ["html"]
keywords:
  [
    "html head element",
    "what is html head element",
    "html head element tag explained",
  ]
published: true
banner: "./banner.jpg"
---

HTML `<head>` element represents a collection of metadata for the current document. This information helps browser in understanding the document and display it properly on user device.

Lets, take below example and understand each and every element that is child of `<head>` element

```markup
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <base href="https://iteachfrontend.com/">
  <title>I Teach Frontend</title>
  <link rel="shortcut icon" href="/favicon.ico" />

  <!-- external style sheets -->
  <link rel="stylesheet" href="style.css" />

  <!-- inline style sheets -->
  <style>body{margin:0}</style>

  <!-- scripts -->
  <script>function example(){}</script>
</head>
...
</html>
```

1. `meta` provides a generic list of metadata values such as search keywords, viewport
   properties, and the file’s character encoding
2. The first line you declare inside the head i.e. `<meta charset="utf-8">` is the charset declaration. The charset attribute specifies the [character encoding](/how-to-set-character-encoding-of-html-document) used by the document. A character encoding declaration is a mechanism by which the character encoding used to store or transmit a document is specified. Read more about [character encoding](/how-to-set-character-encoding-of-html-document)
3. `base` specifies the document base URL for use with resolving relative hypertext links. A `base` element must have an `href` attribute, a `target` attribute, or both where `href` attribute is valid URL and `target` attribute is a valid browsing content. A valid browsing context is one of: `_blank`, `_self`, `_parent`, or `_top`. In the above example, we have set the base URL to https://iteachfrontend.com/
4. `title` element represents the document title or name. In this case, the title is **I Teach Frontend**. This information is displayed sometimes on the browser tab. So if you have multiple tabs open, and you want to switch to some particular tab you can do so by first reading the title in the browser tab. Page `title` is also helpful when the user bookmarks page or search previously visited page in browser history. The title is unique to a page so there must be not more than one `title` element per document.
5. `link` element refers to an external resource that the document is connected to. A link could be external stylesheets, site icons, scripts, fonts and other documents of the website. Each link specifies the relationship using the attribute `rel` - the value denotes how the item being linked to is related to the current document. In above example, line: `<link rel="stylesheet" href="style.css" />` - the `style.css` is having relationship of stylesheet.
6. `script` element refers to an inline script or link to external scripts. If the `script` tag is having `href` attribute the body content is ignored by the browser. The code defined inside the script tag could be executed on the current document
7. `style` element refers to an inline style or link to external stylesheets. The ongoing trend is to have a combined minified style embedded within `head` tag to avoid loading one extra external resource - this also helps in increasing the overall performance of the webpage.

There are a lot of ways how `link` and `meta` tags can be combined with other attributes to handle underlying element differently by browsers, however, that has been purposefully omitted to keep the content of post simple

## Refrences

- https://html.spec.whatwg.org/multipage/semantics.html
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head

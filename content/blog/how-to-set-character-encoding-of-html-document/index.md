---
slug: how-to-set-character-encoding-of-html-document
date: 2020-02-02
title: "How To Set Character Encoding Of HTML Document?"
description: "The `charset` attribute specifies the character encoding used by the document. A character encoding declaration is a mechanism by which the character encoding used to store or transmit a document is specified."
categories: ["html"]
keywords:
  [
    "character encoding of an HTML document",
    "what is meta charset",
    "is meta charset necessary",
    "what is meta charset utf8",
    "meta charset utf8 explained",
  ]
published: true
banner: "./banner.jpg"
---

The first line you need inside the head i.e. `<meta charset="utf-8">` is the charset declaration. The `charset` attribute specifies the character encoding used by the document. A character encoding declaration is a mechanism by which the character encoding used to store or transmit a document is specified. It is **extremely important** to declare character encoding just after starting `<head>` tag before any element that contains text, such as `<title>` element and, with in the first 1024 bytes of the document, failing to do so will cause browsers to guess the encoding.

```markup
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">

      <!--  rest of document -->
      ...
</html>
```

## Is it mandatory to specify character encoding?

Although it is not mandatory however it is a good practice to specify this information explicitly.

If you do not specify `<meta charset="utf-8">` in the HEAD of the HTML document, the browser will look for the `Content-Type` response HTTP header sent from the server.

## What is `UTF-8`?

**UTF-8** (_case insensitive_) is a character encoding capable of encoding all possible characters (called code points) in Unicode. The encoding is variable-length and uses 8-bit code units.

> Unicode provides a unique number for every character

As of HTML5 the recommended charset is `UTF-8`.

## Summary

Choosing the right character encoding is important. Use `UTF-8` if at all possible, especially for multilingual sites.

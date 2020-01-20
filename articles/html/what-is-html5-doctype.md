---
date: "2020-01-18"
title: "What Is HTML 5 Doctype?"
keywords: "html doctype, what is html doctype, is doctype mandatory"
published: true
category: "html"
---

The doctype appears just above `<html>` tag, at the very start of each HTML document, which is
a processing instruction indicating the markup language used in the document.

```html
<!DOCTYPE html>
<html lang="en-GB">
  // rest of content omitted for brevity
</html>
```

It allows browsers to correctly interpret which rules have been used to create underlying webpage, and subsequently render them correctly. It also tell spec validators(for example the [W3C HTML validator](http://validator.w3.org/)) what type of HTML should be expected and how it should be validated.

## HTML5 Valid doctypes

We will be just talking about HTML5 doctypes here as, it is latest and backward-compatible with previous versions of the specification. Doctype declaration is case insensitive, so any of following forms are valid HTML5 doctype declarations `<!DOCTYPE html>`, `<!doctype html>`, `<!doctype HTML>` or even `<!doctype Html>`.

## Is doctype mandatory

Doctype declaration is optional, but it would be useful for preventing browser "quirks mode". Doctype tells browser to render the page in "standards mode". The difference between quirks mode and standards mode can mean the difference between a nicely laid-out page and a confusing mess, so, as a result, you should always put your HTML5 file in standards mode by including the doctype.

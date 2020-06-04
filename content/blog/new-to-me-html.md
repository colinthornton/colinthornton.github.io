---
title: "New-to-me HTML"
date: "2020-06-03"
description: "New tags and attributes I learned from Jen Simmons' course: HTML Essential Training"
---

Just as last week, I again start my post by saying "I was listening to ShopTalk podcast..."

I was listening to [ShopTalk podcast](https://shoptalkshow.com/) this week, and their guest Jen Simmons mentioned her new course on LinkedIn Learning called [HTML Essential Training](https://www.linkedin.com/learning/html-essential-training-4). She advertised it as an overview of all the HTML you need to know in 2020. It's been some time since I first studied HTML, and I've heard more and more about cool new features like the `<picture>` tag and specifying multiple sources for your images recently, so I thought why not give it a go.

Following are the elements and attributes that I had either learned about for the first time from the course, or those that I had heard of before but had never used myself.

## `<pre>`

When you'd like to have the white space in your markdown reflected on the page, wrap your markup with this block-level element. The tag is short for "preformatted". In the following example, the line break after "Hello", and the five spaces before "World!" would also be shown by the browser.

```html
<pre>
Hello
     World!
</pre>
```

## `<time>`

Use the inline `<time>` element to mark that your content represents a human-readable time. The element takes one attribute, `datetime`, where you should specify a machine-readable version of the time.

```html
<time datetime="1993-04-04">the date of my birth</time>
```

---

```html

  <pre></pre>

<time></time>

  <dl>
    <dt>Definition list</dt>
    <dd></dd>
  </dl>
  <small></small>
  <img srcset="" sizes="" />
  <picture><source media="" srcset="" /></picture>
  <figure>
    <img />
    <figcaption></figcaption>
  </figure>
  <audio><source /></audio>
  <video>
    <source />
    <track
      src="example.vtt"
      kind="captions"
      label="English"
      srclang="en"
      default
    />
  </video>
  <fieldset><legend>Label for this set of form fields</legend></fieldset></time
>
```

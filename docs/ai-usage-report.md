# AI Usage Report

## Tools Used & Use Cases

### GitHub Copilot

* Generated the **project card styling** and helped make the cards interactive.
* Generated the **form section styling**.

### ChatGPT

* Provided **design suggestions** (color theme rules, font types, and sizes).
* Explained **JavaScript concepts**, especially how HTML elements can be accessed and used inside a JavaScript file.
* Explained **Markdown (.md) file syntax** and how to write documentation files.

---

## Benefits & Challenges

Using AI helped me improve my web development skills through the explanations and suggestions it provided.

I initially had difficulty styling my website, and the sections looked very plain. GitHub Copilot helped me add visual effects and styling to my components. However, some CSS suggestions conflicted with my existing styles, so I needed to review and modify the code.

The JavaScript part was also confusing because I did not know how to use HTML elements inside JavaScript. ChatGPT explained how this works using:

`document.getElementById()`

On the other hand, ChatGPT was not very effective at choosing colors for my website. Instead, I asked for **rules for selecting colors**, and then I selected the theme myself based on those rules.

---

## Learning Outcomes

### Concepts Learned

#### The 60–30–10 Rule

* **60%** — background color
* **30%** — main color
* **10%** — accent color (buttons, links, highlights)

Additional design rules:

* Dark text on a light background
* Light text on a dark background

I used these rules to select my website color theme.

---

### Technical Skills

#### Markdown (.md) Syntax

* `# Title`
* `**bold**`
* `- Item`
* `1. Item`

---

#### CSS

**box-shadow**
Adds a shadow around an element.

Example:

```
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

Format:

```
box-shadow: X-offset Y-offset blur color;
```

**transform**
Changes position, size, or rotation of an element.

Example:

```
transform: translateY(-5px);
```

Moves the element up by 5px.

**transition**
Adds animation when a property changes.

Example:

```
transition: transform 0.3s, box-shadow 0.3s;
```

If `transform` or `box-shadow` changes, the change is animated smoothly over 0.3 seconds.

I used these CSS properties to style my project cards and form section.

---

#### JavaScript

**Smooth Scrolling Navigation**

* `document.querySelectorAll('nav a')` → selects all `<a>` links inside `<nav>`
* `anchor.addEventListener('click', function(e))` → runs code when a link is clicked
* `e.preventDefault()` → prevents the default jump behavior
* `document.querySelector(this.getAttribute('href'))` → finds the target section
* `target.scrollIntoView({ behavior: 'smooth' })` → smoothly scrolls to the section

I used these functions to create smooth scrolling in the navigation bar.

---

**Form Interaction**

* `document.getElementById()` → selects an element from HTML
* `if (!form.checkValidity()) { return; }` → checks if the form is valid
* `messageBox.textContent = "Message sent successfully! ✔"` → displays a success message
* `messageBox.style.color = "green"` → changes message color
* `form.reset()` → clears all input fields

I used these functions to display a success message after the user clicks the send button.

---

## Responsible Use & Modifications

* I used AI guidelines to choose my own color theme instead of directly copying a design.
* After receiving AI-generated code, I read and tested it to understand how it works.
* Some CSS did not match my website structure, so I modified padding, margins, and sizes to fit my layout.
* I removed parts of the code and tested their effects to decide whether they were necessary.
* For JavaScript, I studied the functions used to understand them instead of copying them without learning.

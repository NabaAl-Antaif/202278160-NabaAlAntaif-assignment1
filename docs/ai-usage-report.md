# AI Usage Report

## Tools Used & Use Cases

### GitHub Copilot

* Generated the **project card styling** and helped make them interactive.
* Generated the **form section styling**.

### ChatGPT

* Provided **design suggestions** (color theme rules, font types, and sizes).
* Explained **JavaScript concepts**, how I can use HTML element in the JavaScript file.
* Explained **Markdown (.md) file syntax** how I can write .md files.

---

## Benefits & Challenges

* Using AI helps me to improve my web development skills through the suggestions and explanations it gives. I was facing difficulties in styling my website and the section looked very boring, so using GitHub Copilot helps me to add some effects to my components, but some CSS suggestions conflicted with my existing styles, so I needed to review them. Moreover, the JavaScript part was confusing me because I did not know how to use the HTML elements inside it, so ChatGPT explained to me how I can do that by using document.getElementById( ). On the other hand, ChatGPT was not the best to give color suggestion for the website, so I asked it to give me rules to follow while choosing the color and I select the theme by myself.


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

* For choosing the color theme I used the AI rule to choose my own color theme.
* When I have the AI output, I first read it to understand what he did and then test it in my code. Some of the CSS parts do not match my website structure so I change the sizes, padding, and margin to fit with my website. Also, I try to delete some parts of the code to see its effects to decide whether I need it or not.
* For JavaScript code I read it and understand the functions used, i made some modification on the code to make it more readable and organized.
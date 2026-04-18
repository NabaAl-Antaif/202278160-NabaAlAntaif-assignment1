# Technical Documentation

## 1. Project Overview

This project is a personal portfolio website developed using HTML, CSS, and JavaScript.
The website show an overview of me (about section), projects section with description for each project, and lastly a contact form so users can send messages.

---

## 2. Technologies Used

* HTML → page structure and content
* CSS→ styling, layout, and responsive design
* JavaScript → interactivity and dynamic behavior

## 3. Project Structure

The project follows this folder structure:

```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore

```
## 4. Files Explanation

### `index.html`

This is the main file of the website and represents the structure of the application.
It contains all page content including the navigation bar, sections (About, Projects, Contact), text, and buttons.
The browser loads this file first, and it links the CSS and JavaScript files.

### `style.css`

This file controls the visual appearance of the website.
It defines colors, fonts, spacing, layout, and responsiveness.
CSS is responsible only for styling existing HTML elements and does not add functionality.

### `script.js`

This file provides interactivity and dynamic behavior.
It handles user actions such as clicking navigation links, smooth scrolling between sections, and displaying a confirmation message after submitting the contact form.
JavaScript improves user experience by making the website responsive to user input.


## 5. Features Implemented

### Smooth Scrolling

Smoothly scroll to sections in the navigation bar using JavaScript.

### Form Interaction

When the user submits the contact form, a confirmation message appears.

### Project Filtering

Show the projects based on the user filter choice (Java projects, Python projects, Prototypes, All projects)

### Responsive Design

The layout adapts to different screen sizes using flexible layout techniques.

---

## 6. How to Run the Project

1. Download or clone the project folder.
2. Open the folder.
3. Double-click `index.html`.

No installation or server setup is required.
---

## 7. Browser Compatibility

The website is tested and works correctly on:

* Google Chrome
* Microsoft Edge

## 8. User Guidance / UX

This website is designed to provide a smooth and user-friendly experience for visitors.
Key user experience features include:

1. Navigating the Website
- The top navigation bar provides quick access to all main sections: About, Projects, GitHub, and Contact.
- Clicking any menu item automatically scrolls the page to the selected section, allowing users to move around the site easily.

2. Browsing Projects
- The Projects section displays project cards that include titles, descriptions, technologies, and preview images.
- A filter bar at the top allows users to view projects by category: All, Java, Python, and Prototype.
- Selecting a filter instantly updates the displayed projects, helping users quickly find relevant work.

3. Viewing GitHub Repositories
- The GitHub section automatically loads the latest repositories from the user’s GitHub profile.
- Each repository card includes:
- Repository name
- Short description
- A button linking directly to the GitHub page
- This allows users to explore additional work with one click.

4. Using the Contact Form
- The Contact section includes fields for Name, Email, and Message.
- When the user submits the form:
- Each field is validated, and error messages appear under invalid inputs.
- A success message appears when the form is submitted correctly.
- A countdown timer hides the success message automatically.
- The form resets for convenience.

5. Switching Between Light and Dark Mode
- A toggle button at the top of the page allows users to switch between light mode and dark mode.
- The icon changes (🌙 / ☀️) to reflect the current theme.
- The website remembers the user’s preference using local storage, so the chosen theme is applied automatically on future visits.

6. Responsive and Accessible Design
- The layout adjusts smoothly across devices, ensuring a consistent experience on desktops, tablets, and mobile phones.
- Text, buttons, and sections are designed with clear contrast and spacing to support readability and accessibility.

7. Quick Access to Information
- Each section is clearly labeled and structured, allowing users to find information quickly without unnecessary scrolling.
- Visual feedback (hover effects, active states, animations) helps users understand what elements are interactive.


8. Readable Content
- Text is legible with clear headings, appropriate font sizes, and contrasting colors for easy reading.

9. Consistent Layout 
- All sections, buttons, and navigation elements follow the same style and layout throughout the website.

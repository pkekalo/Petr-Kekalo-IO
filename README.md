
# Petr-Kekalo-IO

Petr Kekalo

[CAT_API](https://github.com/pkekalo/CAT_API)


# Portfolio Site

## General
- Project is published on a public GitHub repository
- Code executes without errors in the browser

## Project Structure
- **README.md**: This file is typically used to explain how someone can run your code, but it does not need to contain this content for your final project to be acceptable.
- **index.html**
- **css folder**
  - `index.css`
- **js folder**
  - `index.js`
- **(Optional) images folder**

## index.html
- Includes proper boilerplate code
- **(Optional)**: Uses a font-family or Google Fonts
- `index.css` and `index.js` files are properly linked to this file
- Contains a Level 1 heading with the student's name
- Navigation with working internal links to the following sections:
  - About
  - Experience
  - Skills
  - Projects
  - Leave a Message
  - **(Optional)**: Connect or Contact Me section to contain email and social media links
- **(Optional)**: Sticky/fixed navigation that stays in place when the user scrolls down the page
- **(Optional)**: Dark mode toggle switch to change coloring of background and text between default and dark mode
- **(Optional)**: Navigation converted to a hamburger menu on smaller devices via media queries

## About Section
- Level 2 heading
- One or more paragraphs of text
- **(Optional)**: Your photo with an alt attribute for accessibility

## Experience Section
- Level 2 heading
- List of previous work or experience, or one or more paragraphs of related experiences if the student has no previous work experience
- If listing experience, it should be styled in grid or flexbox layout

## Skills Section
- Level 2 heading
- List of skills, inserted using JavaScript from the `index.js` file
- List should be styled in a grid or flexbox layout

## Projects Section
- Level 2 heading
- List of GitHub repositories, fetched using the GitHub API and inserted using JavaScript from the `index.js` file
- **(Optional)**: Each GitHub repository name is a clickable link that takes the user to that repository
- **(Optional)**: Display additional information about each of the repositories (examples: created date, description, etc.)
- **(Optional)**: Customize the styling of your projects list (cards or use of flexbox or grid for examples)

## Leave a Message Section (Form and Messages List)
- Level 2 heading for form
- Form fields:
  - Name
  - Email Address
  - Message
- Submit button
- Event listener that adds the form field inputs to the messages section
- Level 2 heading for messages
- List of messages (once the form has been given inputs and the submit button clicked), styled in a grid or flexbox layout
- Each message item should have the following:
  - Name of the message author as a clickable link to email the author at the email address they provided in the form
  - Message text
  - Remove button to delete the message from the list of messages
  - **(Optional)**: Edit button for users to change one (or more) of the form inputs (name, email, message)
  - **(Optional)**: Conditionally render (meaning hide/display) the Level 2 heading and section content depending on whether or not there are messages

## (Optional) Connect or Contact Me
- If you do not have a Connect or Contact Me section, your links should be in the footer of your page as icons/images.
- Includes:
  - Clickable link to email the student
  - At least two social media links to the student's profile pages (examples: GitHub, LinkedIn, Twitter, Instagram, etc.)
  - **(Optional)**: Use icons or images in place of text string links for your email and 2+ social media links

## Footer
- Copyright logo, current year, and student's name inserted using JavaScript from the `index.js` file
- Email and 2+ social media icon/image links (if the page does NOT have a Connect or Contact Me section)

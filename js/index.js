const footer = document.createElement('footer');
// Creates a new footer element
// footer.innerHTML = '© 2024 Petr Kekalo';
// Commented out, would add static copyright text
document.body.appendChild(footer); 
// Adds the footer to the page

const today = new Date();
// Gets the current date
const thisYear = today.getFullYear();
// Gets the current year from the date
const copyright = document.createElement('p');
// Creates a paragraph element for the copyright

copyright.innerHTML = `© ${thisYear} Petr Kekalo`;
// Sets the copyright text with the current year and Petr Kekalo's name

footer.appendChild(copyright);
// Adds the copyright text to the footer

const skills = [
    'Html',
    'CSS',
    'Javascript',
    'React.js',
    'Node.js',
    'MySQL',
    'GitHub',
    'Git',
    'RESTful APIs',
    'Visual Studio Code',
    'Jest',
    'Mocha'
];
// List of skills

const skillsSection = document.getElementById('skills');
// Gets the element with id 'skills'

const skillsList = skillsSection.querySelector('ul');
// Gets the ul inside the skills section

for (let i = 0; i < skills.length; i++) {
     const skill = document.createElement('li');
     // Creates a new list item for each skill

     skill.textContent = skills[i];
     // Sets the text content of the list item to the skill name

     skillsList.appendChild(skill);
     // Adds the skill to the skills list
}

const messageForm = document.forms["leave_message"];
// Gets the form with the name 'leave_message'

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Prevents the form from submitting and refreshing the page

    console.log("Form submitted!");
    // Logs the form submission

    const userName = messageForm.usersName.value;
    // Gets the user's name from the form
    const userEmail = messageForm.usersEmail.value;
    // Gets the user's email from the form
    const userMessage = messageForm.usersMessage.value;
    // Gets the user's message from the form

    console.log("Name:", userName);
    console.log("Email", userEmail);
    console.log("Message:", userMessage);
    // Logs the user's information to the console

    const messageSection = document.getElementById('messages');
    // Gets the section for messages

    const messageList = messageSection.querySelector('ul');
    // Gets the ul inside the messages section

    const newMessage = document.createElement('li');
    // Creates a new list item for the message

    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>: ${userMessage}</span>
    `;
    // Adds the user's name as a mailto link and their message to the list item

    const removeButton = document.createElement('button');
    // Creates a remove button

    removeButton.innerText = "remove";
    // Sets the button text to 'remove'

    removeButton.setAttribute('type', 'button');
    // Sets the button type to 'button'

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        // Gets the parent list item of the remove button

        entry.remove();
        // Removes the list item
    });

    newMessage.appendChild(removeButton);
    // Adds the remove button to the message

    messageList.appendChild(newMessage);
    // Adds the new message to the message list

    messageForm.reset();
    // Resets the form fields after submission
});

const githubUsername = 'pkekalo';
// Sets the GitHub username to fetch repositories for

const url = `https://api.github.com/users/${githubUsername}/repos`;
// Constructs the URL to fetch the GitHub repositories

const projectSection = document.getElementById('projects');
// Gets the element with id 'projects'

const projectList = projectSection.querySelector('ul');
// Gets the ul inside the projects section

fetch(url)
  .then(response => response.json())
  // Fetches the repositories from the GitHub API and parses the JSON response
  .then(repositories => {
    console.log(repositories);
    // Logs the fetched repositories

    if (repositories.length === 0) {
      console.log('No repositories found.');
      projectSection.innerHTML = '<p>No repositories available.</p>';
      // If no repositories are found, displays a message
      return;
    }

    repositories.forEach(repo => {
      const project = document.createElement('li');
      // Creates a new list item for each repository
      
      const projectLink = document.createElement('a');
      projectLink.href = repo.html_url; 
      projectLink.target = '_blank';  
      projectLink.innerText = repo.name;
      // Creates a link to the repository and sets the repository name as the link text

      project.appendChild(projectLink);
      // Adds the link to the list item

      projectList.appendChild(project);
      // Adds the list item to the project list
    });
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
    projectSection.innerHTML = '<p>There was an error fetching repositories.</p>';
    // If an error occurs during fetching, displays an error message
  });

document.getElementById("hamburger").addEventListener("click", function() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
    // Toggles the 'active' class on the navigation menu when the hamburger icon is clicked
});
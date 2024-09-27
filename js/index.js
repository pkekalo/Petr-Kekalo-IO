const footer = document.createElement('footer');
// footer.innerHTML = '© 2024 Petr Kekalo';
document.body.appendChild(footer); 

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');

copyright.innerHTML = `© ${thisYear} Petr Kekalo`;

footer.appendChild(copyright);

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

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
     const skill = document.createElement('li');

     skill.textContent = skills[i];

     skillsList.appendChild(skill);
}

const messageForm = document.forms["leave_message"];

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("Form submitted!");

    const userName = messageForm.usersName.value;
    const userEmail = messageForm.usersEmail.value;
    const userMessage = messageForm.usersMessage.value;

    console.log("Name:", userName);
    console.log("Email", userEmail);
    console.log("Message:", userMessage);

    const messageSection = document.getElementById('messages');

    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');

    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>: ${userMessage}</span>
    `;

    const removeButton = document.createElement('button');

    removeButton.innerText = "remove";

    removeButton.setAttribute('type', 'button');

    removeButton.addEventListener('click', function() {

        const entry = removeButton.parentNode;

        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);



    messageForm.reset();
});

const githubUsername = 'pkekalo';
const url = `https://api.github.com/users/${githubUsername}/repos`;

const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

fetch(url)
  .then(response => response.json())
  .then(repositories => {
    console.log(repositories);

    if (repositories.length === 0) {
      console.log('No repositories found.');
      projectSection.innerHTML = '<p>No repositories available.</p>';
      return;
    }

    repositories.forEach(repo => {
      const project = document.createElement('li');
      
      project.innerText = repo.name;

      projectList.appendChild(project);
    });
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
    projectSection.innerHTML = '<p>There was an error fetching repositories.</p>';
  });

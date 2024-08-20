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
const PARENT = 'Peace%20Justice%20and%20Strong%20Institutions';

let path = window.location.href;

let num_sup_folders = 0;

path = path.split('/');
let folder;

while ((folder = path.pop()) != PARENT) { num_sup_folders++; }

path = '';

for (let i = 0; i < num_sup_folders-1; i++) {
    path += '../';
}

// got the path, now design

const body = document.getElementsByTagName('body')[0];

const navbar_div = document.createElement('div');
navbar_div.className = 'navbar';

const hrefs = [
    {
        href : 'main.html',
        l_name : 'Home',
    },
    {
        href : 'webpages/quiz.html',
        l_name : 'Play a Quiz',
    },
];

hrefs.forEach(
    (property) => {
        const link = document.createElement('a');
        link.className = 'dd_link';
        link.href = path + property.href;
        link.innerHTML = property.l_name;

        navbar_div.appendChild(link);
    }
)

const un = document.createElement('a');
un.className = 'dd_link';
un.href = "https://www.un.org/sustainabledevelopment/peace-justice/";
un.innerHTML = 'Learn More';
un.target = '_blank';

navbar_div.appendChild(un);

const mail = document.createElement('a');
mail.className = 'dd_link';
mail.href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=davpvghaziabad@yahoo.com";
mail.innerHTML = 'Contact Us';
mail.target = '_blank';

navbar_div.appendChild(mail);

body.insertBefore(navbar_div, body.children[0]);
for (let i = 0; i < 2; i++) {
    body.insertBefore(document.createElement('br'), body.children[1]);
}

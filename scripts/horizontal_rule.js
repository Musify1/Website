const tags = document.getElementsByClassName("h_lvl_1");

const horizontal = document.createElement('hr');

for (const tag of tags) {
    tag.appendChild(horizontal)
}

const components = [
    {id: "navbar", file: "components/navbar.html"},
    {id: "hero", file: "components/hero.html"},
    {id: "about", file: "components/about.html"},
    {id: "skills", file: "components/skills.html"},
    {id: "softskills", file: "components/softskills.html"},
    {id: "projects", file: "components/projects.html"},
    {id: "contact", file: "components/contact.html"},
];

components.forEach(component => {
    fetch(component.file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(component.id).innerHTML = data;
        })
        .catch(err => console.error(`Error loading ${component.file}:`, err));
});

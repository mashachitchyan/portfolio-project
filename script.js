document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const homeButton = document.getElementById('homeButton');
    const projectsButton = document.getElementById('projectsButton');
    const resumeButton = document.getElementById('resumeButton');
    const contactsButton = document.getElementById('contactsButton');

    homeButton.addEventListener('click', () => {
        content.classList.remove('four-columns');
        content.classList.remove('two-columns');
        content.classList.add('three-columns');
    });

    projectsButton.addEventListener('click', () => {
        content.classList.remove('four-columns');
        content.classList.remove('three-columns');
        content.classList.add('two-columns');
    });

    resumeButton.addEventListener('click', () => {
        content.classList.remove('two-columns');
        content.classList.remove('three-columns');
        content.classList.add('four-columns');
    });

    contactsButton.addEventListener ('click', () => {
        content.classList.remove('three-columns');
        content.classList.remove('four-columns');
        content.classList.add('two-columns');
    })
});


document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".navItem");

    const pageOrder = ['index.html', 'projects.html', 'resume.html', 'contacts.html'];
    const visitedPages = JSON.parse(localStorage.getItem("visitedPages")) || [];
    const currentPage = window.location.pathname.split("/").pop();

    console.log("Current Page:", currentPage); 

    if (!visitedPages.includes(currentPage)) {
        visitedPages.push(currentPage);
        localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
    }

    console.log("Visited Pages:", visitedPages);

    navItems.forEach((item) => {
        const pagePath = item.getAttribute("href").split("/").pop();

        console.log("Nav Item Path:", pagePath); 

        const currentPageIndex = pageOrder.indexOf(currentPage);
        const pageIndex = pageOrder.indexOf(pagePath);

        if (pageIndex === currentPageIndex) {
            console.log(`Setting "${pagePath}" as selected`);
            item.classList.add("selected");
        } else if (pageIndex < currentPageIndex) {
            console.log(`Setting "${pagePath}" as past`);
            item.classList.add("past");
        } else {
            console.log(`Setting "${pagePath}" as future`);
            item.classList.add("navItem");
        }
    });
});

    

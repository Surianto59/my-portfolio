const navButton = document.getElementById("nav-icon");
const mainHeader = document.getElementById("header-main");
const header = document.querySelector("header");
const main = document.querySelector("main");


function displayNav() {
    /*** Set up things for displaying popup menu ***/

    // Remove header's current elements
    mainHeader.style.display = "none";
    header.className = "nav-open";
    
    // Create one part of the X symbol
    const crossLineLeft = document.createElement("div");
    crossLineLeft.className = "cross-line cross-line-left";
    
    // Create the other part of the X symbol
    const crossLineRight = document.createElement("div");
    crossLineRight.className = "cross-line cross-line-right";

    // Create exit button as the parent element of the X symbol
    const exitButton = document.createElement("div");
    exitButton.id = "button-exit";
    exitButton.appendChild(crossLineLeft);
    exitButton.appendChild(crossLineRight);

    const navContainer = document.createElement("nav");
    navContainer.innerHTML = '<ul>'+
    '<li class="popup-item"><a href="index.html">About Me</a></li>'+
    '<li class="popup-item"><a href="projects.html">Projects</a></li>'+
    '<li class="popup-item"><a href>Résumé</a></li>'+
    '<li class="popup-item"><a href="contact.html">Contact</a></li>'+
'</ul>'
    
    // Add popup menu items to header
    header.appendChild(exitButton);
    header.appendChild(navContainer);

    // Remove things to exit popup menu

    function closeNav() {
        //console.log(header.childNodes);
        mainHeader.removeAttribute("style");
        header.removeAttribute("class");  
        
        if (header.childNodes.length > 3) {
            header.removeChild(navContainer);
            header.removeChild(exitButton);
        }
        //console.log(header.childNodes);
    }
    
    exitButton.onclick = closeNav;
    main.onclick= closeNav;
    window.onresize = closeNav;
}

navButton.onclick = displayNav;
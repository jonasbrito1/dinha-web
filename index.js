function showMenu() {

    const toggleMenuNav = document.getElementById("toggleMenuNav");
    const itemsMenuNav = document.getElementById("itemsMenuNav");
    const itemMenu = itemsMenuNav.querySelectorAll(".itemMenu");

    toggleMenuNav.addEventListener("click", () => {
        const isMenuVisible = itemsMenuNav.style.display === "block";

        if (!isMenuVisible) {
            itemMenu.forEach(item => {
                item.addEventListener("click", () => {
                    itemsMenuNav.style.display = "none";
                });
            });
            itemsMenuNav.style.display = "block";
        } else {
            itemsMenuNav.style.display = "none";
        }
    });
}

function showItineraries() {

    const roadItinerariesContainer = document.getElementById("roadItinerariesContainer");
    const airItinerariesContainer = document.getElementById("airItinerariesContainer");
    const roadItinerariesOption = document.getElementById("roadItinerariesOption");
    const airItinerariesOption = document.getElementById("airItinerariesOption");

    airItinerariesOption.addEventListener("click", () => {
        switchItinerariesOptionStyle(airItinerariesOption, roadItinerariesOption);
        switchItinerariesContainerDisplay(airItinerariesContainer, roadItinerariesContainer);
    });

    roadItinerariesOption.addEventListener("click", () => {
        switchItinerariesOptionStyle(roadItinerariesOption, airItinerariesOption);
        switchItinerariesContainerDisplay(roadItinerariesContainer, airItinerariesContainer);
    });
}

function switchItinerariesOptionStyle(active, inactive) {
    active.style.color = "#F48120";
    active.style.borderBottom = "2px solid #F48120";

    inactive.style.color = "#002D43";
    inactive.style.borderBottom = "none";
}

function switchItinerariesContainerDisplay(active, inactive) {
    active.style.display = "flex";
    inactive.style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
    showMenu();
    showItineraries();
});
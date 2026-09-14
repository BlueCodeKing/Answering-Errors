// NAVIGATION

function openMenu() {
    document.getElementById("nav").style.right = "0";
}

function closeMenu() {
    document.getElementById("nav").style.right = "-100vw";
}

// WINDOW SIZE CHECKER

const mediaQuery = window.matchMedia("(max-width: 800px)");

// PASSAGES (SMALL)

if (mediaQuery.matches) {

    // Passage 1
    function passage1() {
        document.getElementById("passage1").style.left = "2vw";
    }

    function passage1close() {
        document.getElementById("passage1").style.left = "105vw";
    }

    // Passage 2
    function passage2() {
        document.getElementById("passage2").style.left = "2vw";
    }

    function passage2close() {
        document.getElementById("passage2").style.left = "105vw";
    }

} else {

    // PASSAGES (LARGE)

    function passage1() {
        document.getElementById("passage1").style.left = "15vw";
    }

    function passage1close() {
        document.getElementById("passage1").style.left = "105vw";
    }

}
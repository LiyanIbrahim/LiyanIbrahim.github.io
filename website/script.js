document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // -------------------- HOVER EFFECTS --------------------
    const hoverPairs = document.querySelectorAll("a");

    hoverPairs.forEach((link) => {
        const images = link.getElementsByTagName("img");

        if (images.length === 2) {
            link.addEventListener("mouseenter", () => {
                images[0].style.display = "none";
                images[1].style.display = "inline";
            });

            link.addEventListener("mouseleave", () => {
                images[0].style.display = "inline";
                images[1].style.display = "none";
            });
        }
    });

    // -------------------- IMAGE ROTATOR FUNCTION --------------------
    function createImageRotator(elementId, imageList, intervalTime) {
        let element = document.getElementById(elementId);
        if (!element) {
            console.warn(`⚠️ Element with ID "${elementId}" not found.`);
            return;
        }

        let index = 0;

        function changeImage() {
            element.src = imageList[index];
            index = (index + 1) % imageList.length; // Loop back to first image when reaching the end
        }

        setInterval(changeImage, intervalTime);
    }

    // -------------------- ACTIVATE IMAGE ROTATORS --------------------
    createImageRotator("opengulf1", ["opengulf1.png", "opengulf2.png", "opengulf3.png"], 1500);
    createImageRotator("home1", ["home1.png", "home2.png", "home3.png"], 1500);
    createImageRotator("capstone", ["capstone1.png", "capstone2.png", "capstone3.png"], 1500);
    createImageRotator("uim1", ["uim1.png", "uim2.png", "uim3.png"], 2500);
    createImageRotator("final1", ["final1.png", "final2.png", "final3.png"], 2000);

    // -------------------- TYPING EFFECT --------------------
    var _CONTENT = [
        "Interactive Websites",
        "Physical Computing",
        "Visual Language",
        "Game Design",
        "Interactive Installations"
    ];

    var _PART = 0;
    var _PART_INDEX = 0;
    var _INTERVAL_VAL;
    var _ELEMENT = document.querySelector("#typetext");
    var _CURSOR = document.querySelector("#cursor");

    function Type() {
        if (_ELEMENT) {
            var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;

            if (text === _CONTENT[_PART]) {
                _CURSOR.style.display = "inline-block";
                clearInterval(_INTERVAL_VAL);
                setTimeout(function () {
                    _INTERVAL_VAL = setInterval(Delete, 50);
                }, 1000);
            }
        }
    }

    function Delete() {
        if (_ELEMENT) {
            var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;

            if (text === "") {
                clearInterval(_INTERVAL_VAL);
                _PART = _PART == (_CONTENT.length - 1) ? 0 : _PART + 1;
                _PART_INDEX = 0;
                setTimeout(function () {
                    _CURSOR.style.display = "inline-block";
                    _INTERVAL_VAL = setInterval(Type, 100);
                }, 200);
            }
        }
    }

    _INTERVAL_VAL = setInterval(Type, 100);

    // -------------------- DEBUGGING & TESTING --------------------
    console.log("All scripts initialized successfully!");
});

window.addEventListener("DOMContentLoaded",
    () => {
        console.log("reached here")
        const checkBox = document.querySelector("#checkbox");
        checkbox.addEventListener("click", () => {
            if (checkBox.checked == true) {
                document.querySelector("main").style.backgroundColor = "#1c1c1c";
                document.querySelector(".before").style.backgroundColor = "#262626";
                document.querySelector("body").style.color = "#fcfcfc";
                document.querySelectorAll(".card").forEach(card => {
                    card.style.backgroundColor = "#616161";
                    card.style.color = "rgb(239, 240, 245)";
                })
            }
            else {
                document.querySelector("main").style.backgroundColor = "#fcfcfc";
                document.querySelector(".before").style.backgroundColor = "#eeeeee";
                document.querySelector("body").style.color = "#1c1c1c";
                document.querySelectorAll(".card").forEach(card => {
                    card.style.backgroundColor = "rgb(239, 240, 245)";
                    card.style.color = "#262626";
                })
            }
        })
    });

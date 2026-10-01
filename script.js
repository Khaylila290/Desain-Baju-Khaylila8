function toggleMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "80px";

        nav.style.right = "5%";

        nav.style.background = "#fff8fc";

        nav.style.padding = "25px";

        nav.style.borderRadius = "15px";

        nav.style.boxShadow =
            "0 15px 40px rgba(70,40,80,.15)";
    }
}
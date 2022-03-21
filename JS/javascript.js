function backToTop() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backTo.style.display = "block";
    } else {
        backTo.style.display = "none";
    }
}
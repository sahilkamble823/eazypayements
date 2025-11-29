function includeHTML() {
    const elements = document.querySelectorAll("[include-html]");
    let total = elements.length;
    let loaded = 0;

    if (total === 0) {
        document.dispatchEvent(new Event("html-included"));
        return;
    }

    elements.forEach(el => {
        const file = el.getAttribute("include-html");

        fetch(file)
            .then(response => response.ok ? response.text() : "")
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute("include-html");
                loaded++;

                // When ALL files loaded → fire event only ONCE
                if (loaded === total) {
                    document.dispatchEvent(new Event("html-included"));
                }
            })
            .catch(err => {
                console.error("Include error:", err);
                loaded++;
                if (loaded === total) {
                    document.dispatchEvent(new Event("html-included"));
                }
            });
    });
}

document.addEventListener("DOMContentLoaded", includeHTML);

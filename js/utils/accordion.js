
export function initAccordion(content) {
    const items = content.querySelectorAll(".accordion-item");
    items.forEach( item => {
        const question = item.querySelector(".accordion-header");
        const answer = item.querySelector(".accordion-content");

        question.addEventListener("click", () => {
            items.forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");
                    other.querySelector(".accordion-content").style.maxHeight = "0px";
                }
            });

            if (item.classList.contains("active")) {
                item.classList.remove("active");
                answer.style.maxHeight = "0px";
            } else {
                item.classList.add("active");
                answer.style.maxHeight = `${answer.scrollHeight}px`;

                requestAnimationFrame(() => {
                    item.scrollIntoView({
                        block: "nearest",
                        behavior: "smooth"
                    });
                });
            }
        });

    });
}

import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Notes(parent = document.body) {
    const window = new WindowWrapper("notes");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.innerHTML = `
        <div>
            <i class="ri-arrow-up-long-line"></i>
            <i class="ri-search-line"></i>
        </div>

        <p>FAQ</p>
    `;
    const controls = WindowControls("notes");
    header.append(controls);

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `

        <div class="accordion-item">
            <button class="accordion-header">
                Tell me about yourself.
                <i class="ri-arrow-down-s-line"></i>
            </button>

            <div class="accordion-content">
                <p>
                    I'm a frontend developer with a passion for building responsive and interactive web applications.
                </p>
            </div>
        </div>
        <div class="accordion-item">
            <button class="accordion-header">
                What technologies do you use?
                <i class="ri-arrow-down-s-line"></i>
            </button>

            <div class="accordion-content">
                <p>
                    HTML, CSS, JavaScript, React, Git...
                </p>
            </div>
        </div>
        <div class="accordion-item">
            <button class="accordion-header">
                What are you currently learning?
                <i class="ri-arrow-down-s-line"></i>
            </button>

            <div class="accordion-content">
                <p>
                    I'm expanding my backend knowledge while continuing to improve my frontend skills.
                </p>
            </div>
        </div>
        <div class="accordion-item">
            <button class="accordion-header">
                Are you available for work?
                <i class="ri-arrow-down-s-line"></i>
            </button>

            <div class="accordion-content">
                <p>
                    Yes! I'm currently looking for frontend developer opportunities.
                </p>
            </div>
        </div>

    `;
    windowElement.append(
        header,
        content
    );

    window.enableDrag();

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
            }
        });

        // question.addEventListener("click", () => {
        //     if(item.classList.contains("active")) {
        //         answer.style.maxHeight = "180px";;

        //         requestAnimationFrame(() => {
        //             answer.style.maxHeight = "0px";
        //         });
        //         item.classList.remove("active");
        //     } else {
        //         item.classList.add("active");
        //         answer.style.maxHeight = answer.scrollHeight + "px";
        //     }
        // })
    })

    return window;
}
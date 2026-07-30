
export function renderFAQ(data) {
    return data.map(item => `
        <div class="accordion-item">
            <button class="accordion-header">
                ${item.question}
                <i class="ri-arrow-down-s-line"></i>
            </button>
            <div class="accordion-content">
                <p>${item.answer}</p>
            </div>
        </div> 
    `).join("");
}
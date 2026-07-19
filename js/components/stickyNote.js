

export function draggableNote() {
    const note = document.getElementById("note");
    if(!note) return;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    note.addEventListener("mousedown", (e) => {
        if (e.target.tagName === "TEXTAREA") return;

        isDragging = true;

        offsetX = e.clientX - note.offsetLeft;
        offsetY = e.clientY - note.offsetTop;
    });

    document.addEventListener("mousemove", dragStickyNote);
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    function dragStickyNote(e) {
        if (!isDragging) return;

        note.style.left = `${e.clientX - offsetX}px`;
        note.style.top = `${e.clientY - offsetY}px`;
    }
}
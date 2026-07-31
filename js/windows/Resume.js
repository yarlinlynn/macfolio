import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Resume(parent = document.body) {
    const window = new WindowWrapper("resume");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.innerHTML = `
        <h3>Resume.pdf</h3>

        <a
            class="resume-download"
            href="/assets/files/Resume-2026.pdf"
            download
            title="Download Resume"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download icon" aria-hidden="true" style="touch-action: none;"><path d="M12 15V3" style="touch-action: none;"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" style="touch-action: none;"></path><path d="m7 10 5 5 5-5" style="touch-action: none;"></path></svg>
        </a>
    `;

    header.prepend(WindowControls("resume"));

    // CONTENT
    const content = document.createElement("div");
    content.className="text-content";
    window.renderContent = function(item) {
        content.innerHTML = `<canvas></canvas>`;
        const canvas = content.querySelector("canvas");
        renderPdf(item.pdfUrl, canvas);
    };

    windowElement.append(
        header,
        content
    );

    window.enableDrag();
    return window;
}

// mobile resume preview
export function ResumePreview(item) {
    return `
        <div class="resume-preview">
            <canvas id="resume-preview-canvas"></canvas>
        </div>
    `;
}

// render pdf inside resume component
export async function renderPdf(url, canvas) {

    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;

    const page = await pdf.getPage(1);

    const viewport = page.getViewport({
        scale: 1.4
    });

    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
        canvasContext: context,
        viewport
    }).promise;
}

import WindowWrapper from "../state/WindowWrapper.js";
import { WindowControls } from "../components/windowControls.js";

export function Gmail(parent = document.body) {
    const window = new WindowWrapper("gmail");
    const windowElement = window.mount(parent);

    // HEADER
    const header = document.createElement("div");
    header.className = "window-header";
    header.innerHTML = `
        <p>New Message</p>

        <button class="sendEmail mobile-send" disabled>
            <i class="ri-send-plane-fill"></i>
        </button>
    `;
    const controls = WindowControls("gmail");
    header.append(controls);
    

    // CONTENT
    const content = document.createElement("div");
    content.className = "window-content";
    content.innerHTML = `

        <div class="grid-row">
            <label>To</label>
            <input type="email" id="to-input" value="yarlinlynn@gmail.com" readonly/>
        </div>
        <div class="grid-row">
            <label>From</label>
            <input type="email" id="from-input"/>
        </div>
        <div class="grid-row">
            <label>Subject</label>
            <input type="text" id="subject-input" />
        </div>

        <div class="message-container">
            <textarea id="message" placeholder="Compose email"></textarea>
        </div>

        <div class="emailWindowFooter">
            <button class="sendEmail desktop-send" disabled>
                Send
                <i class="ri-arrow-down-s-fill"></i>
            </button>
            <div class="email-icons">

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="m131-252 165-440h79l165 440h-76l-39-112H247l-40 112h-76Zm139-176h131l-64-182h-4l-63 182Zm395 186q-51 0-81-27.5T554-342q0-44 34.5-72.5T677-443q23 0 45 4t38 11v-12q0-29-20.5-47T685-505q-23 0-42 9.5T610-468l-47-35q24-29 54.5-43t68.5-14q69 0 103 32.5t34 97.5v178h-63v-37h-4q-14 23-38 35t-53 12Zm12-54q35 0 59.5-24t24.5-56q-14-8-33.5-12.5T689-393q-32 0-50 14t-18 37q0 20 16 33t40 13Z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm263.5 221.5Q659-337 684-400H276q25 63 80.5 101.5T480-260q68 0 123.5-38.5ZM324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-480Zm227 227q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Z"/></svg>
                <i class="ri-drive-line"></i>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="m490-527 37 37 217-217-37-37-217 217ZM200-200h37l233-233-37-37-233 233v37Zm355-205L405-555l167-167-29-29-219 219-56-56 218-219q24-24 56.5-24t56.5 24l29 29 50-50q12-12 28.5-12t28.5 12l93 93q12 12 12 28.5T828-678L555-405ZM270-120H120v-150l285-285 150 150-285 285Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>
        </div>
        

    `;
    windowElement.append(
        header,
        content
    );

    window.enableDrag();

    // elements
    const fromInput = content.querySelector("#from-input");
    const subjectInput = content.querySelector("#subject-input");
    const messageInput = content.querySelector("#message");

    const sendButtons = windowElement.querySelectorAll(".sendEmail");

    // enable and disable send buttons
    function updateSendBtn() {
        const enabledBtn = fromInput.value.trim() !== "" && messageInput.value.trim() !== "";

        sendButtons.forEach(button => {
            button.disabled = !enabled;
        });

        fromInput.addEventListener("input", updateSendButtonState);
        messageInput.addEventListener("input", updateSendButtonState);
    }
    updateSendBtn();

    // enable emailJS to send emails to private gamil
    async function sendEmail() {
        if ( !fromInput.value.trim() || !messageInput.value.trim() ) {
            return;
        }

        const inputFields = {
            from_email: fromInput.value,
            subject: subjectInput.value,
            message: messageInput.value,
        };

        try {
            await emailjs.send(
                "service_cizvuzm",
                "template_dki8x8b",
                inputFields
            );
            alert("Email sent!");

            // clear input fields for new email
            fromInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";

            updateSendBtn();
        } catch(error) {
            console.error(error);
            alert("Failed to send email.");
        }
    }

    // click event for send button
    sendButtons.forEach(button => {
        button.addEventListener("click", sendEmail);
    });
    // async function sendEmail() {
    //     const inputFields = {
    //         from_email: document.getElementById("from-input").value,
    //         subject: document.getElementById("subject-input").value,
    //         message: document.getElementById("message").value,
    //     };

    //     try {
    //         await emailjs.send(
    //             "service_cizvuzm",
    //             "template_dki8x8b",
    //             inputFields
    //         );
    //         alert("Email sent!");

    //         document.getElementById("from-input").value = "";
    //         document.getElementById("subject-input").value = "";
    //         document.getElementById("message").value = "";
    //     } catch (error) {
    //         console.error(error);
    //         alert("Failed to send email.");
    //     }
    // }

    // click event for send button
    // content.querySelectorAll(".sendEmail").forEach(button => {
    //     button.addEventListener("click", sendEmail);
    // });

    return window;
}
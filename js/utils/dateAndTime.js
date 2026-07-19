
export function dateAndTime() {

    const dayElement = document.querySelector(".day");
    const timeElement = document.querySelector(".time");

    if (!timeElement) return;


    function updateTime() {

        const now = new Date();

        if (dayElement) {
            dayElement.textContent = dateFnsFormat(
                now,
                "EEE MMM d"
            );
        }

        timeElement.textContent = dateFnsFormat(
            now,
            "HH:mm"
        );

    }


    updateTime();

    setInterval(updateTime, 1000);
}

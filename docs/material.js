document.addEventListener("DOMContentLoaded", () => {
    const createRipple = (event) => {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple");

        const existingRipple = button.getElementsByClassName("ripple")[0];
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(circle);
    };

    const buttons = document.querySelectorAll(".btn, .SideNav-item, .LabelName, .circle");
    buttons.forEach((btn) => {
        btn.addEventListener("click", createRipple);
        // Ensure relative position for ripple positioning
        const style = window.getComputedStyle(btn);
        if (style.position === 'static') {
            btn.style.position = "relative";
        }
        if (style.overflow !== 'hidden') {
            btn.style.overflow = "hidden";
        }
    });
});

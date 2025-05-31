// TODO: Refactor this and dont use javascript instead use react

export function autoHoverRepeat(selector = '', hoverClass = 'hovered', interval = 2000, duration = 1000) {
    const elements = document.querySelectorAll(selector);
    let index = 0;

    const intervalTimer = setInterval(() => {
        elements.forEach((el) => el.classList.remove(hoverClass)); // Clear all
        const current = elements[index];
        current.classList.add(hoverClass);

        // Remove the hoverClass after `duration`
        const t1 = setTimeout(() => {
            current.classList.remove(hoverClass);
            clearTimeout(t1);
        }, duration);

        // Move to next element in the stack
        index = (index + 1) % elements.length;
    }, interval);

    return intervalTimer
}

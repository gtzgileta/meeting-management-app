export const preventSpacing = (e) => {
    const k = e ? e.which : window.event.keyCode;
    if (k === 32) {
        e.preventDefault();
        return false;
    }
};
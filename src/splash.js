function displaySplash() {
    const splash = document.querySelector('.splash');

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            splash.classList.add('display-none');
        }, 6000)
    })
}

export default displaySplash;
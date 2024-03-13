function displaySplash() {
    const splash = document.querySelector('.splash');

    if (splash) {

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                splash.classList.add('display-none');
            }, 6000)
        })
    } else {
        console.log('Splash nao foi encontrado nesta pagina');
    }
}

export default displaySplash;
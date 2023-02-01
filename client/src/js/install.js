const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    window.deferredPrompt = event; // Store event

    butInstall.classList.toggle('hidden', false); //remove hidden from button 
});


butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();  

    window.deferredPrompt = null; // reset the deferred prompt 

    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;

    console.log(event)
});

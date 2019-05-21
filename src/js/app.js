window.addEventListener("load", () => {
  // After the existing code
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`sw.js`)
      .then(registration => {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      })
      .catch(err => {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      });
  }
});

let deferredPrompt;

window.addEventListener("beforeinstallprompt", event => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();

  console.log("beforeinstallprompt fired");

  // Stash the event so it can be triggered later.
  deferredPrompt = event;

  return false;
});

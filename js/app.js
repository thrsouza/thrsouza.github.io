// Navigation Menu - Scroll Smooth
(() => {
  const headerElement = document.querySelector("main > header");
  const navItemElements = document.querySelectorAll("nav > ul > li > a");

  navItemElements.forEach((navItemElement) => {
    navItemElement.addEventListener("click", (event) => {
      event.preventDefault();
      const [, sectionId] = event.target.href.split("#");
      const sectionElement = document.getElementById(sectionId);

      var topElement = sectionElement.offsetTop - headerElement.offsetHeight;
      window.scroll({ top: topElement, behavior: "smooth" });
    });
  });
})();

// Form - formspree - https://formspree.io/
(() => {
  const formElement = document.querySelector("#contact-form");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const statusElement = document.querySelector("#contact-form-status");

    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: formElement.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        statusElement.removeAttribute("error");
        statusElement.removeAttribute("success");

        if (response.ok) {
          statusElement.setAttribute("success", "");

          statusElement.innerHTML = "Thanks for your submission!";
          formElement.reset();
        } else {
          statusElement.setAttribute("error", "");
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              statusElement.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              statusElement.innerHTML =
                "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        statusElement.setAttribute("error", "");
        statusElement.innerHTML =
          "Oops! There was a problem submitting your form";
      });
  };

  formElement.addEventListener("submit", handleSubmit);
})();

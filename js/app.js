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

// Form - thiagosouza.com
(() => {
  class MessageStatusController {
    constructor() {
      this.element = document.querySelector("#contact-form-status");
      this.element.removeAttribute("success");
      this.element.removeAttribute("error");
      this.element.innerHTML = "";
    }

    showSuccessMsg() {
      this.element.setAttribute("success", "");
      this.element.innerHTML = "Thanks for your submission!";
    }

    showErrorMsg() {
      this.element.setAttribute("error", "");
      this.element.innerHTML = "Thanks for your submission!";
    }

    showLoadingMsg() {
      this.element.innerHTML = "Sending message...";
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const msgStatusController = new MessageStatusController();

    const data = {};
    const formData = new FormData(event.target);

    formData.forEach((value, key) => {
      data[key] = value;
    });

    event.target.setAttribute("loading", "");
    msgStatusController.showLoadingMsg();

    try {
      const response = await fetch(event.target.action, {
        headers: { "Content-Type": "application/json" },
        method: event.target.method,
        body: JSON.stringify(data),
      });

      const reponseJson = await response.json();

      if (reponseJson.ok) {
        msgStatusController.showSuccessMsg();
        formElement.reset();
      } else {
        msgStatusController.showErrorMsg();
      }
    } catch (error) {
      console.log(error);
      msgStatusController.showErrorMsg();
    }

    event.target.removeAttribute("loading");
  };

  const formElement = document.querySelector("#contact-form");
  formElement.addEventListener("submit", handleSubmit);
})();

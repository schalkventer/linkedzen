const handler = () => {
  Array.from(document.querySelectorAll(".fie-impression-container")).forEach(
    (x) => {
      const tag = x.querySelector(".update-components-header__text-view");
      const isSuggested =
        tag instanceof HTMLElement && tag.innerText === "Suggested";

      if (isSuggested && x instanceof HTMLElement) {
        x.style.opacity = "0";
      }
    }
  );
};

const init = () => {
  setInterval(handler, 3000);
};

init();

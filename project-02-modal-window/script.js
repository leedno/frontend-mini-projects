
const mContainer = document.querySelector(".m-container");
const mContent = document.querySelector(".m-content");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const openModal = () => {
  mContainer.classList.remove("hidden");
}

const closeModal = () => {
  mContainer.classList.add("hidden");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mContainer.classList.contains("hidden")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && mContainer.classList.contains("hidden")) {
    openModal();
  }
});



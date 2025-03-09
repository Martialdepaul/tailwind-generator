const form = document.querySelector("#generate-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const prompt = formData.get("prompt");
  alert(prompt);
});

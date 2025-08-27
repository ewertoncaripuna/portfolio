document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const tabs = document.querySelectorAll(".tab");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-tab");

      // Troca aba ativa no menu
      links.forEach(a => a.classList.remove("active"));
      link.classList.add("active");

      // Troca conteúdo ativo
      tabs.forEach(tab => tab.classList.remove("active"));
      document.getElementById(target).classList.add("active");
    });
  });
});

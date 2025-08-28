// escuta a class .tab através do data-tab e define ativo ou inativo, mudando o conteúdo sem necessidade de load.

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

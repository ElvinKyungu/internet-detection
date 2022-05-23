const offlineConnection = document.querySelector(".offline");
const onlineConnection = document.querySelector(".online");
const refreshBtn = document.querySelector(".refreshBtn");
const connections = document.querySelector(".connection");

const online = function () {
  offlineConnection.classList.remove("active");
  onlineConnection.classList.add("active");
  setTimeout(() => {
    onlineConnection.classList.remove("active");
  }, 4000);
};

const offline = function () {
  offlineConnection.classList.toggle("active");
  onlineConnection.classList.remove("active");
};

window.addEventListener("online", online);
window.addEventListener("offline", offline);

connections.addEventListener("click", (e) => {
  const target = e.target;
  const parentNode = target.closest(".connection");
  if (!target.classList.contains("close")) return;
  parentNode.classList.remove("active");
  if (parentNode.classList.contains("offline")) {
    setTimeout(() => {
      parentNode.classList.add("active");
    }, 500);
  }
});

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});

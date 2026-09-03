const listProject = document.getElementById("listProject");

// check F12
let devtoolsOpen = false;

const checkDevTools = () => {
  const threshold = 160;

  const widthDiff = window.outerWidth - window.innerWidth;
  const heightDiff = window.outerHeight - window.innerHeight;

  if (widthDiff > threshold || heightDiff > threshold) {
    window.location = "https://www.youtube.com/"
  }

  document.addEventListener("keydown", function (event) {

    // Chặn F12
    if (event.key === "F12") {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }

    // Windows / Linux
    if (
      event.ctrlKey &&
      event.shiftKey &&
      ["I", "J", "C"].includes(event.key.toUpperCase())
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }

    // Mac
    if (
      event.metaKey &&
      event.altKey &&
      ["I", "J", "C"].includes(event.key.toUpperCase())
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  // Chặn chuột phải
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
};
setInterval(checkDevTools, 500);

document.addEventListener('DOMContentLoaded', () => {
    // openWebsite();
});


function openOrder() {
    window.open("https://www.facebook.com/yud.vn", "_blank")
}

function openWebsite(link) {
    window.open(link, "_blank")
}


// ========================================
// TẢI DANH SÁCH PROJECT
// ========================================
function getListProject() {
    const data = listURL;
    data?.forEach((item, index) => {
        const elementDiv = document.createElement("div");

        elementDiv.className = "album-item";
        elementDiv.id = item?.id
        const imgDiv = document.createElement("img");
        imgDiv.src = item?.image || '/images/noImage.png';
        const hoverText = document.createElement("div");
        hoverText.className = "hover-text";
        hoverText.innerHTML = "Xem Demo";
        const albumDiv = document.createElement("div");
        albumDiv.className = "album-placeholder";
        const albumNote = document.createElement("div");
        albumNote.className = "album-note";
        albumNote.innerHTML = "Mẫu " + (index + 1);

        elementDiv.appendChild(imgDiv);
        albumDiv.appendChild(albumNote);
        elementDiv.appendChild(albumDiv);
        elementDiv.appendChild(hoverText);

        // Them chuc nang click vao button
        elementDiv.addEventListener("click", (event) => {
            openWebsite(item?.link);
        });

        listProject.appendChild(elementDiv);

    });
}
getListProject();
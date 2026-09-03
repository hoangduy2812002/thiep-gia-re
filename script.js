const listProject = document.getElementById("listProject");


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
    console.log(data)
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
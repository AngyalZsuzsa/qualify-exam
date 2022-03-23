function dataView(data, index) {
    return `
        <div class="data-card">
            <h2>${data.sub}</h2>
            <h4>${data.title}</h4>
            <h5>${data.text}</h5>
            <button><span class="details">Save</span><span class="material-icons md-36">arrow_forward</span></button>
        </div>`
}


function loadEvent() {
    const rootElement = document.getElementById("root");

    for (let i = 0; i < datas.length; i++) {
        const data = datas[i];
        rootElement.insertAdjacentHTML("beforeend", dataView(data, i))
    }
}




window.addEventListener("load", loadEvent);
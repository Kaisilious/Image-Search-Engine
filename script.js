const accessKey = "gLtRlMfz42CUc-twcEybOmtUBo3vD8fsDjETo64SwhA";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    // https://api.unsplash.com/search/photos?page=1&query=office&client_id=gLtRlMfz42CUc-twcEybOmtUBo3vD8fsDjETo64SwhA


    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = ""
    }
    
    results.map((results) =>{
        const image = document.createElement("img");
        image.src = results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}


searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    // When a user interacts with a web page (e.g., clicking a link or submitting a form), the browser triggers events associated with those interactions. For example, when clicking a link, the default behavior is to navigate to the URL specified in the link's href attribute.

    // If you call e.preventDefault(); within an event handler (where e is the event object passed to the handler), it prevents the default behavior associated with that event. This allows you to take control of what happens when the event occurs and potentially perform custom actions.
    page = 1;
    searchImages();
});


showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})
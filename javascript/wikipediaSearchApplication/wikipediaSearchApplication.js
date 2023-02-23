let searchInputEl=document.getElementById("searchInput");
let searchResultsContainer=document.getElementById("searchResults");
let spinnerElement=document.getElementById("spinner");


function createAndAppendSearchResult(result){
    let {description,title,link}=result;
    console.log(result);
    console.log(description);
    console.log(title);
    console.log(link);

    // creating the resultItemContainer
    let resultItemContainer=document.createElement("div");
    resultItemContainer.classList.add("result-item")  ;
    searchResultsContainer.appendChild(resultItemContainer);

    // creating title element

    let titleElement=document.createElement("a");
    titleElement.href=link;
    titleElement.target="_blank";
    titleElement.textContent=title;
    titleElement.classList.add('result-title')
    resultItemContainer.appendChild(titleElement);
    

    // creating break element
    let breakEl1=document.createElement("br");
    resultItemContainer.appendChild(breakEl1);

    // creating url element
    let urlElement=document.createElement("a");
    urlElement.href=link;
    urlElement.target="_blank";
    urlElement.textContent=link;
    urlElement.classList.add('result-url')
    resultItemContainer.appendChild(urlElement);

    // creating break element
    let breakEl2=document.createElement("br");
    resultItemContainer.appendChild(breakEl2);

    // creating description element
    let descriptionElement=document.createElement("p");
    descriptionElement.textContent=description;
    descriptionElement.classList.add('link-description')
    resultItemContainer.appendChild(descriptionElement);
}

function displaySearchResults(search_results){
    spinnerElement.classList.toggle("d-none");
    
    // console.log(totalCountOfData);

    for (let result of search_results){
        createAndAppendSearchResult(result)
    }
    
    

}


function searchWikipedia(event){
    if (event.key=="Enter"){
        spinnerElement.classList.toggle("d-none");
        searchResultsContainer.textContent="";
        let searchInputValue=searchInputEl.value;
        // searchInputEl.value="";
        console.log(searchInputValue);
        let url="https://apis.ccbp.in/wiki-search?search="+searchInputValue;
        let options={
            method:"GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            // console.log(typeof(jsonData));
            // object destructuring
            let { search_results }=jsonData;
            // console.log(search_results);
            
            // displaying search results
            displaySearchResults(search_results);
        })
    }
}
searchInputEl.addEventListener("keydown",searchWikipedia);
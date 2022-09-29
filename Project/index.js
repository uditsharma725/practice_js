console.log("PROJECT: using ajax");

let source = 'bbc-news';
let apiKey = '6dec5c7561174439b72213d9d09f1cac';

let button = document.querySelector("#button");
let modal = document.querySelector("#modal");
let modalBtn = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="newsBtn"></button>`;
let modalBody = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel" id="newsTitle"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" id="newsContent"></div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`;

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.onload = function() {
    if(this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        for(news in articles) {
            let url = articles[news].url;
            let title = articles[news].title;
            let content = articles[news].content;
            
            let display = document.querySelector("#accordionExample");
            display.innerHTML += 
            `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${news}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${title}
                    </button>
                </h2>
                <div id="collapse${news}" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                    <div class="accordion-body">${content} <a href="${url}" target="_blank">Read More</a></div>
                </div>
            </div>`
        }
    }
    else console.log("some error occured");
}
xhr.send();
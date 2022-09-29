console.log("PROJECT: using ajax");

let source = 'bbc-news';
let apiKey = '6dec5c7561174439b72213d9d09f1cac';

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
                    <b>${title}</b>
                    </button>
                </h2>
                <div id="collapse${news}" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                    <div class="accordion-body">${content}
                     <a href="${url}" target="_blank"
                     style="text-decoration: none;">Read More</a></div>
                </div>
            </div>`
        }
    }
    else console.log("some error occured");
}
xhr.send();
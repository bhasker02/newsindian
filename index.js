console.log("This is my index js file");
//https://newsapi.org/v2/top-headlines?country=in&apiKey=a1aabaafad7d4cf9b2032116a2b9c045
// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'a1aabaafad7d4cf9b2032116a2b9c045'

// Grab the news container
// Create an ajax get request
const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=top%20india%20news&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");
document.getElementById("Technology").onclick = function (event){
    event.preventDefault()
    document.body.style.backgroundImage = "url('technologyfinal.jpg')";
    document.getElementById("heading").innerHTML = "Top Tech news";
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=india%20technology&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
                let news =`
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                <h5 class="card-title">${element["title"]} <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                ${element["twitter_account"]}
                <span class="visually-hidden">unread messages</span>
              </span></h5>
                <p class="card-text" style="overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;">${element["summary"]}</p>
                <p class="card-text" >${element["author"]} on ${element["published_date"]}</p>
                  <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                </div>
              </div>
            </div>
           
            `;
                newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
}
document.getElementById("science").onclick = function (event){
    event.preventDefault()
    document.body.style.backgroundImage = "url('sciencefinal.jpg')";
    document.getElementById("heading").innerHTML = "Top Science news";
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=india%20science&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
                let news =`
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                <h5 class="card-title">${element["title"]} <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                ${element["twitter_account"]}
                <span class="visually-hidden">unread messages</span>
              </span></h5>
                <p class="card-text" style="overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;">${element["summary"]}</p>
                <p class="card-text" >${element["author"]} on ${element["published_date"]}</p>
                  <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                </div>
              </div>
            </div>
           
            `;
                newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
}
document.getElementById("business").onclick = function (event){
    event.preventDefault()
    document.body.style.backgroundImage = "url('BUISNESS.jpg')";
    document.getElementById("heading").innerHTML = "Top Business news";
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=business%20india&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
                let news =`
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                <h5 class="card-title">${element["title"]} <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                ${element["twitter_account"]}
                <span class="visually-hidden">unread messages</span>
              </span></h5>
                <p class="card-text" style="overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;">${element["summary"]}</p>
                <p class="card-text" >${element["author"]} on ${element["published_date"]}</p>
                  <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                </div>
              </div>
            </div>
           
            `;
                newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
}
document.getElementById("Sports").onclick = function (event){
    event.preventDefault()
    document.body.style.backgroundImage = "url('SPORTS.jfif')";
    document.getElementById("heading").innerHTML = "Top Sports news";
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=india%20sports&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
                let news =`
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                <h5 class="card-title">${element["title"]} <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                ${element["twitter_account"]}
                <span class="visually-hidden">unread messages</span>
              </span></h5>
                <p class="card-text" style="overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;">${element["summary"]}</p>
                <p class="card-text" >${element["author"]} on ${element["published_date"]}</p>
                  <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                </div>
              </div>
            </div>
           
            `;
                newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
}
document.getElementById("entertainment").onclick = function (event){
    event.preventDefault()
    document.body.style.backgroundImage = "url('ENTERTAINMENTfinal.jpg')";
    document.getElementById("heading").innerHTML = "Top Entertainment news";
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=india%20cinema&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
                let news =`
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                <h5 class="card-title">${element["title"]} <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                ${element["twitter_account"]}
                <span class="visually-hidden">unread messages</span>
              </span></h5>
                <p class="card-text" style="overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;">${element["summary"]}</p>
                <p class="card-text" >${element["author"]} on ${element["published_date"]}</p>
                  <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                </div>
              </div>
            </div>
           
            `;
                newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
}
document.getElementById("health").onclick = function (event){
    event.preventDefault()
    document.body.style.backgroundImage = "url('healthfinal.webp')";
    document.getElementById("heading").innerHTML = "Top health news";
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=india%20health&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
                let news =`
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                <h5 class="card-title">${element["title"]} <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                ${element["twitter_account"]}
                <span class="visually-hidden">unread messages</span>
              </span></h5>
                <p class="card-text" style="overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;">${element["summary"]}</p>
                <p class="card-text" >${element["author"]} on ${element["published_date"]}</p>
                  <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                </div>
              </div>
            </div>
           
            `;
                newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
}
// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
        // console.log(element, index)
            let news = `
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                <h5 class="card-title">${element["title"]}
                <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                ${element["twitter_account"]}
                <span class="visually-hidden">unread messages</span>
              </span> </h5>
                <p class="card-text" style="overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;">${element["summary"]}
                </p>
                <p class="card-text" >${element["author"]} on ${element["published_date"]}
                </p>
                  <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                </div>
              </div>
            </div>
           
            `;
            newsHtml += news;
      });
        newsaccordion.innerHTML = newsHtml;

          }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


//grabbing the search
document.getElementById("mybutton").onclick = function (event){
    event.preventDefault()
    var search=document.getElementById("userInput").value;
    document.getElementById("heading").innerHTML = "Search results";
    count= 1;
    console.log(search) 
        // Create an ajax get request
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=${search}&lang=en`);
        xhr.setRequestHeader("X-RapidAPI-Key", "184f13f6c3msh81ae48e298919a3p16bc7ejsna4a53e091038");
        xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");
            
        // What to do when response is ready
        xhr.onload = function () {
            if (this.status === 200) {
                let json = JSON.parse(this.responseText);
                let articles = json.articles;
                console.log(articles);
                let newsHtml = "";
                articles.forEach(function(element, index) {
                // console.log(element, index)
                    let news = `
                    <div class="col-sm-4">
                      <div class="card">
                        <div class="card-body">
                        <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
                        <h5 class="card-title">${element["title"]} <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                        ${element["twitter_account"]}
                        <span class="visually-hidden">unread messages</span>
                      </span></h5>
                        <p class="card-text" style="overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;">${element["summary"]}</p>
                        <p class="card-text" >${element["author"]} on ${element["published_date"]}</p>
                          <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
                        </div>
                      </div>
                    </div>
                   
                    `;
                    newsHtml += news;
              });
                newsaccordion.innerHTML = newsHtml;
        
                  }
            else {
                console.log("Some error occured")
            }
        }
        
        xhr.send()
        
    }    

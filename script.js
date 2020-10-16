$("#search").on("click", function() {
    var searchTerm = $("#terms").val();
    var APIKey = "WVyr2H0f6D0WqGIMdqcA8isSaq31QGqn";
    var queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm +
      "&api-key=" +
      APIKey;
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(r) {
      console.log(r);
      console.log(queryURL);
      let results = r.response.docs;
  
      for (let i = 0; i < results.length; i++) {
        let result = results[i];
        let element = document.createElement("DIV");
        element.classList.add("box");
        element.innerHTML = `<article class="media">
                    <div class="media-left">
                      <figure class="image is-64x64">
                        <img src="https://www.nytimes.com/${result.multimedia[0].url}" alt="Image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>${result.abstract}</strong> <small>${result.byline.original}</small> <small>${result.pub_date}/small>
                          <br>
                          Summary Text
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a href="${result.web_url}" class="level-item" aria-label="reply">
                            <span class="icon is-small">
                              <i class="fas fa-link"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="retweet">
                            <span class="icon is-small">
                              <i class="fas fa-retweet" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="like">
                            <span class="icon is-small">
                              <i class="fas fa-heart" aria-hidden="true"></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>`;
        document.querySelector("#results").appendChild(element);
      }
    });
  });
  
/* document.getElementById('button').addEventListener('click', loadNEWS); */
document.addEventListener('DOMContentLoaded', loadNEWS);

function loadNEWS() {
    fetch('https://gnewsapi.net/api/search?q=win.gg&language=en&country=us&api_token=T7J8MakX4UZYR2XzQBJaAH33EoLrvhlzmOItjLgKq8c3SQSYJExJVrVKUUBI')
    .then(function(response) {
        return response.json();
    })
    .then(function(news) {
        console.log(news);
        let html = '';
        news.articles.forEach(function(news2) {
            html += `
                <li><a href="${news2.article_url}">${news2.title}</a></li>
                ${news2.source_name}
            `;
        });
        document.getElementById('result').innerHTML = html;
    })
}

loadNEWS();
document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

    currentStories.push({
        Title: 'Marist Story 1',
        Body: '[Sample Text for Story 1]',
        linkUrl: 'https://example.com/story1',
        imageUrl: 'images/campus.png'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: '[Sample Text for Story 2]',
        linkUrl: 'https://example.com/story2',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Marist Story 3',
        Body: '[Sample Text for Story 3]',
        linkUrl: 'https://example.com/story3',
        imageUrl: 'images/hancock.jpeg'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');
        
        let itemHTML = `
            <div class="feed-item">
                <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p>${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 20%;">
                </a>
                <hr>
            </div>
        `;
        
        newsfeedElement.innerHTML += itemHTML;
    }

    currentStories.forEach(function(item) {
        displayItem(item);
    });
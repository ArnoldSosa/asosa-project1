const express = require('express')
const app = express();
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

var feeds = require('./controller/feedController');

app.route('/api/feeds')
	.get(feeds.getFeeds)
	.post(feeds.saveFeed)

app.route('/api/feedItem/:feedItemId')
	.get(feeds.getFeed)
	.delete(feeds.deleteFeed)
	.patch(feeds.updateFeed)

app.listen(1337, () => console.log('Listening on port 1337.'))
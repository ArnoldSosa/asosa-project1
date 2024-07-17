var feed = require('../model/feedItem')

var feeds = [];

var feed1 = feed.createFeed("Marist Campus", "Would you like to see more info on the campus? Click above!", "https://www.marist.edu/about/map", "images/campus.png");
var feed2 = feed.createFeed("NewsFeed", "Do you want to know what happens on and off campus? Press the link above!", "https://www.marist.edu/news", "images/news_pic.jpg");
var feed3 = feed.createFeed("The Hancock Center", "Find more information about the Hancock Center above!", "https://www.marist.edu/management/investment-center", "images/hancock.jpeg");
feeds.push(feed1);
feeds.push(feed2);
feeds.push(feed3);

exports.getFeeds = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(feeds);
}

exports.saveFeed = function(req, res) {
	let newFeed = feed.createFeed(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	feed.push(newFeed);
	res.setHeader('Content-Type', 'application/json');
	res.send(feeds);
}

exports.getFeed = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feeds[req.params.feedId]);
}

exports.deleteFeed = function(req, res) {
	feeds.splice(req.params.feedId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feeds);
}

exports.updateFeed = function(req, res) {
	// we can get the already existing 'feed' from the array created by the code
	var updatedFeed = feeds[req.params.feedId];

	// we check the console log in the browser in order to see what has been passed through and update the local copy based off of the log
	console.log(req.body.title);
	if(req.body.title)
		updatedFeed.title = req.body.title;
	if(req.body.body)
		updatedFeed.body = req.body.body;
	if(req.body.linkUrl)
		updatedFeed.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFeed.imageUrl = req.body.imageUrl;

	// save the local copy of the 'feed' function back into the array that has been created by the code
	feeds[req.params.feedId] = updatedFeed;

	res.setHeader('Content-Type', 'application/json');
	res.send(feeds[req.params.feedId]);
}
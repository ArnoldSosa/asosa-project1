function feed(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

exports.createFeed = function(title, body, linkUrl, imageUrl) {
    return new feed(title, body, linkUrl, imageUrl);
};
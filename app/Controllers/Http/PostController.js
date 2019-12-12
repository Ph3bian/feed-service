"use strict";
var Feed = require("rss-in-json");

class PostController {
  constructor() {
    this.mediumUrl = "https://medium.com/feed";
  }

  async posts({ request, response }) {
    const { uri } = request.all();

    if (!uri) {
      return response.badRequest({
        success: false,
        message: "Invalid uri parameter"
      });
    }

    try {
      const data = await Feed.convert(`${this.mediumUrl}/${uri}`);
      return response.json({
        data,
        status: 200,
        success: true
      });
    } catch (error) {
      return response.badRequest({
        success: false,
        message: `Error fetching posts`,
        data: error.message
      });
    }
  }
}

module.exports = PostController;

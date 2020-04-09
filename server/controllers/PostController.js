"use strict";
/* eslint-disable eqeqeq */

import * as Feed from "rss-in-json";

const mediumUrl = "https://medium.com/feed";

export default class PostController {
  /**
   * fetch posts
   * @param {req} req express req object
   * @param {res} res express res object
   */
  static async posts(req, res) {
    const { uri } = req.query;

    if (!uri) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Invalid uri parameter",
      });
    }
    try {
      const data = await Feed.convert(`${mediumUrl}/${uri}`);
      return res.status(200).json({
        data,
        status: 200,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        success: false,
        error: error.message,
      });
    }
  }
}

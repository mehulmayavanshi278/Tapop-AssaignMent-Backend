const { BasicService } = require("./BasicService");
const Users = require("../models/User.model");

class userServices extends BasicService {
  constructor() {
    super(Users);
  }
}

module.exports.userServices = new userServices();

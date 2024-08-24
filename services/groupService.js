const Group = require('../models/group');

class GroupService {
  async createGroup(groupData) {
    const newGroup = new Group(groupData);
    return await newGroup.save();
  }

  async getGroupById(groupId) {
    return await Group.findById(groupId);
  }

  async getAllGroups() {
    return await Group.find();
  }
}

module.exports = new GroupService();

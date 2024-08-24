const groupService = require('../services/groupService');

const createGroup = async (req, res, next) => {
  try {
    const newGroup = await groupService.createGroup(req.body);
    res.status(201).json(newGroup);
  } catch (err) {
    next(err);
  }
};

const getGroupById = async (req, res, next) => {
  try {
    const group = await groupService.getGroupById(req.params.group_id);
    if (!group) return res.status(404).json({ message: 'Group not found' });
    res.json(group);
  } catch (err) {
    next(err);
  }
};

const getAllGroups = async (req, res, next) => {
  try {
    const groups = await groupService.getAllGroups();
    res.json(groups);
  } catch (err) {
    next(err);
  }
};

module.exports = { createGroup, getGroupById, getAllGroups };

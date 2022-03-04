import asyncHandler from "express-async-handler";

// Models
import Project from "../models/Project.js";
import User from "../models/User.js";

// @route - /api/projects/
// @desc - POST request to create a new project
// @access - private
export const createNewProject = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    completionDate,
    priority,
    status,
    projectImageUrl,
    githubUrl,
  } = req.body;

  const currentUser = await User.findById(req.user._id);

  if (!currentUser) {
    res.status(401);
    throw new Error("You cannot create a new project.");
  }

  const newProject = {
    name,
    user: req.user._id,
    description,
    completionDate,
    priority,
    status,
    projectImageUrl,
    githubUrl,
  };

  projectImageUrl === "" && delete newProject.ImageUrl;
  githubUrl === "" && delete newProject.githubUrl;

  const project = await Project.create(newProject);

  res.status(201).json(project);
});

// @route - /api/projects/
// @desc - POST request to create a new project
// @access - private
export const getAllProjectsByUser = asyncHandler(async (req, res) => {
  const currentUser = await User.findById(req.user._id);

  if (!currentUser) {
    res.status(401);
    throw new Error("You don't have access to projects.");
  }

  const projects = await Project.find({ user: currentUser });
  res.status(200).json(projects);
});

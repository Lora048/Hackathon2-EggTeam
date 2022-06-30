const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (project) => {
  try {
    return await prisma.project.create({
      data: { ...project },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async () => {
  try {
    return await prisma.project.findMany({
      include: {
        fk_project_userId: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllProjectsForOneUser = async (userId) => {
  try {
    return await prisma.project.findMany({
      where: { userId: parseInt(userId, 10) },
      include: {
        fk_project_userId: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOne = async (id) => {
  try {
    return await prisma.project.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        fk_project_userId: {
          select: {
            firstname: true,
            lastname: true,
            picture: true,
          },
        },
        votes: true,
        participation_user_project: {
          include: { fk_participation_user_project_userId: true },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const editOne = async (id, data) => {
  try {
    return await prisma.project.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (id) => {
  try {
    return await prisma.project.delete({ where: { id: parseInt(id, 10) } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
  editOne,
  deleteOne,
  getAllProjectsForOneUser,
};

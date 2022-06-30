const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (participation) => {
  try {
    return await prisma.participation_user_project.create({
      data: { ...participation },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async () => {
  try {
    return await prisma.participation_user_project.findMany({
      include: {
        fk_participation_user_project_userId: {
          select: {
            firstname: true,
            lastname: true,
            picture: true,
            jobPost: true,
            agency: true,
          },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOnebyUserAndProject = async (userId, projectId) => {
  try {
    return await prisma.participation_user_project.findMany({
      where: { userId, projectId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (id) => {
  try {
    return await prisma.participation_user_project.delete({
      where: { id: parseInt(id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const createOneParticipator = async (participation) => {
  try {
    return await prisma.participation_user_project.create({
      data: { ...participation },
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOne,
  getAll,
  deleteOne,
  getOnebyUserAndProject,
  createOneParticipator,
};

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (vote) => {
  try {
    return await prisma.vote.create({
      data: { ...vote },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async () => {
  try {
    return await prisma.vote.findMany({
      include: {
        fk_userId: true,
        fk_projectId: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOnebyUserAndProject = async (userId, projectId) => {
  try {
    return await prisma.vote.findMany({
      where: {
        userId: parseInt(userId, 10),
        projectId: parseInt(projectId, 10),
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const editOne = async (id, data) => {
  try {
    return await prisma.vote.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (id) => {
  try {
    return await prisma.vote.delete({ where: { id: parseInt(id, 10) } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOne,
  getAll,
  getOnebyUserAndProject,
  editOne,
  deleteOne,
};

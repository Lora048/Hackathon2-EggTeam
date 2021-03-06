const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (content) => {
  try {
    return await prisma.comments.create({
      data: content,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async (projectId, userId) => {
  try {
    return await prisma.comments.findMany({
      where: {
        projectId: parseInt(projectId, 10),
        userId: parseInt(userId, 10),
      },
      include: {
        fk_comments_userId: true,
        fk_comments_projectId: true,
        comments_reply: {
          include: { fk_comments_reply_userId: true },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOne = async (id) => {
  try {
    return await prisma.comments.findUnique({
      where: { id: parseInt(id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const editOne = async (id, data) => {
  try {
    return await prisma.comments.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (id) => {
  try {
    return await prisma.comments.delete({ where: { id: parseInt(id, 10) } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOne,
  getAll,
  editOne,
  getOne,
  deleteOne,
};

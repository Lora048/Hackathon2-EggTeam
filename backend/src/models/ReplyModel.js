const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (content) => {
  try {
    return await prisma.comments_reply.create({
      data: content,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async () => {
  try {
    return await prisma.comments_reply.findMany({
      include: {
        fk_comments_reply_userId: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOne = async (id) => {
  try {
    return await prisma.comments_reply.findUnique({
      where: { id: parseInt(id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const editOne = async (id, data) => {
  try {
    return await prisma.comments_reply.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (id) => {
  try {
    return await prisma.comments_reply.delete({
      where: { id: parseInt(id, 10) },
    });
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

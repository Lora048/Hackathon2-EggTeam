const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (comment) => {
  try {
    return await prisma.comments.create({
      data: { ...comment },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async () => {
  try {
    return await prisma.comments.findMany();
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

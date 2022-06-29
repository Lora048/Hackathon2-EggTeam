const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async () => {
  try {
    return await prisma.document.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getOne = async (id) => {
  try {
    return await prisma.document.findUnique({
      where: { id: parseInt(id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};
const createOne = async (img) => {
  try {
    return await prisma.document.create({
      data: img,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (id) => {
  try {
    return await prisma.document.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
  deleteOne,
};

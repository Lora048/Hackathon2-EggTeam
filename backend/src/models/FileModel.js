const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async () => {
  try {
    return await prisma.document.findMany({
      include: {
        fk_document_userId: true, // Return all fields
      },
    });
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
const createOne = async (file) => {
  try {
    return await prisma.document.create({
      data: file,
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

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

module.exports = { createOne };

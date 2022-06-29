const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOne = async (tasks) => {
  try {
    return await prisma.task.create({
      data: { ...tasks },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAll = async () => {
  try {
    return await prisma.task.findMany({
      include: {
        fk_task_userId: true,
        fk_task_projectId: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOne = async (id) => {
  try {
    return await prisma.task.findUnique({
      where: { id: parseInt(id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const editOne = async (id, data) => {
  try {
    return await prisma.task.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOne = async (id) => {
  try {
    return await prisma.task.delete({ where: { id: parseInt(id, 10) } });
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

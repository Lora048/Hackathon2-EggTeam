const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const project = require("../src/models/ProjectModel");

const { getRandomUserId } = require("../src/helpers/utils");

const createProject = async (myProject) => {
  const result = await getRandomUserId();

  try {
    await project.createOne({ ...myProject, userId: result.id });
  } finally {
    await prisma.$disconnect();
  }
};

createProject({
  title: "Commerce Circuit-court",
  description:
    "Mise en place d'une plateforme pour connecter les commerçants dans un périmètre restreint.",
  status: "Idée germée",
  cover:
    "https://cdn.pixabay.com/photo/2018/03/09/17/39/paprika-3212137__480.jpg",
});

createProject({
  title: "SURGE2SURGERY",
  description:
    "Prédire les complications postopératoires afin d’optimiser la prise en charge des patients devant subir une intervention chirurgicale.",
  status: "En cours de développement",
  cover:
    "https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_1280.jpg",
});

createProject({
  title: "AQUATECH INNOVATION",
  description:
    "Solutions pour protéger, assainir, recycler et régénérer notre ressource en eau",
  status: "Projet prêt",
  cover:
    "https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897__480.jpg",
});

createProject({
  title: "STATION LIVE",
  description: "Premier réseau des salle de spectacle pilotées par une IA",
  status: "En cours de développement",
  cover:
    "https://cdn.pixabay.com/photo/2016/11/22/19/15/audience-1850119__340.jpg",
});

createProject({
  title: "DATAROCKSTARS",
  description:
    "Notre mission est de fluidifier le recrutement et l'accès à la formation dans le domaine de la Data par 2 leviers : Des formations et des bootcamps certifiants éligibles au CPF & la 1ère plateforme de jobs 100% Data.",
  status: "Projet prêt",
  cover: "https://cdn.pixabay.com/photo/2019/04/16/11/15/job-4131482__480.jpg",
});

createProject({
  title: "POPGAME",
  description:
    "Location de jeux de société, livrés à domicile avec l'apéro et le goûter",
  status: "Idée germée",
  cover:
    "https://cdn.pixabay.com/photo/2014/11/13/16/56/board-game-529586__480.jpg",
});

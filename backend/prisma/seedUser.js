const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const { hashPassword } = require("../src/helpers/argonHelper");
const user = require("../src/models/UserModel");

const createOne = async (oneUser) => {
  const hashedPassword = await hashPassword(oneUser.password);
  const newUser = oneUser;
  delete newUser.password;

  const data = { ...newUser, hashedPassword };

  try {
    await user.createOne(data);
  } finally {
    await prisma.$disconnect();
  }
};

createOne({
  firstname: "Marcel",
  lastname: "Durand",
  jobPost: "DevOps",
  hardSkills: ["Typescript", "Docker", "Github"],
  agency: "Paris",
  email: "marcel@mail.com",
  password: "passwordmarcel",
});

createOne({
  firstname: "Rebecca",
  lastname: "Durand",
  jobPost: "Dev Web",
  hardSkills: ["Typescript", "Angular", "Github"],
  agency: "Paris",
  email: "rebecca@mail.com",
  password: "passwordrebecca",
});

createOne({
  firstname: "Charlotte",
  lastname: "Lafon",
  jobPost: "Dev Web",
  hardSkills: ["Javascript", "React", "VueJS"],
  agency: "Tours",
  email: "charlotte@mail.com",
  password: "passwordcharlotte",
});

createOne({
  firstname: "Rémi",
  lastname: "Le Pontois",
  jobPost: "UX Designer",
  hardSkills: ["Figma", "Suite Adobe", "React"],
  agency: "Tours",
  email: "remi@mail.com",
  password: "passwordremi",
});

createOne({
  firstname: "Marie",
  lastname: "Richard",
  jobPost: "Dev Web",
  hardSkills: ["Javascript", "NodeJS", "Express"],
  agency: "Lyon",
  email: "marie@mail.com",
  password: "passwordmarie",
});

createOne({
  firstname: "Pierre",
  lastname: "Lavaux",
  jobPost: "Project Owner",
  hardSkills: ["Docker", "Github", "Java"],
  agency: "Lyon",
  email: "pierre@mail.com",
  password: "passwordpierre",
});

createOne({
  firstname: "Julien",
  lastname: "Durand",
  jobPost: "Dev Web",
  hardSkills: ["Java", "C++", "PHP"],
  agency: "Bordeaux",
  email: "julien@mail.com",
  password: "passwordjulien",
});

createOne({
  firstname: "Émilie",
  lastname: "DeLimoges",
  jobPost: "Dev Web",
  hardSkills: ["React Native", "flutter", "Dart"],
  agency: "Bordeaux",
  email: "emilie@mail.com",
  password: "passwordemilie",
});

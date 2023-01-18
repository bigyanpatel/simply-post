import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "Adarsh",
    lastname: "Balika",
    email: "adarshbalika@gmail.com",
    username: "adarshbalika",
    password: "adarshBalika123",
    website: "https://google.com/",
    bio: "Frontend Developer",
    profileImg:
      "https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [
      {
        _id: uuid(),
        firstname: "Soumya",
        lastname: "Deshmukh",
        email: "soumyadeshmukh@gmail.com",
        username: "S_D_123",
        password: "Soumya@123",
        website: "https://soumyadeshmukh.netlify.app/",
        bio: "true lier",
        profileImg:
          "https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    firstname: "Soumya",
    lastname: "Deshmukh",
    email: "soumyadeshmukh@gmail.com",
    username: "S_D_123",
    password: "Soumya@123",
    website: "https://soumyadeshmukh.netlify.app/",
    bio: "true lier",
    profileImg:
      "https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstname: "Adarsh",
        lastname: "Balika",
        email: "adarshbalika@gmail.com",
        username: "adarshbalika",
        password: "adarshBalika123",
        website: "https://google.com/",
        bio: "Frontend Developer",
        profileImg:
          "https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        followers: [],
        following: [],
      },
    ],
  },
  {
    _id: uuid(),
    firstname: "Ritika",
    lastname: "Shah",
    email: "ritikashah@gmail.com",
    username: "ritika_892",
    password: "ritika@123",
    website: "https://www.ritikashah.tech/",
    bio: "React developer",
    profileImg:
      "https://st2.depositphotos.com/2703645/11099/v/950/depositphotos_110991592-stock-illustration-female-cartoon-avatar-icon.jpg",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Anand",
    lastname: "Belide",
    email: "anandbelide@gmail.com",
    username: "anand_23_nb",
    password: "anand@456",
    website: "https://www.anand-belide.netlify.app/",
    bio: "mera adhar meri pehchan",
    profileImg:
      "https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
import { IAuthor } from "../src/shared/interfaces";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const AUTHORS_LIST: { [key: string]: IAuthor } = {
  JOHN: {
    name: "Dr. John Smith",
    designation: "Oncologist",
    bio: "Dr. John Smith is a renowned oncologist with expertise in breast cancer research. He has dedicated his career to advancing the field of oncology and improving cancer treatment outcomes.",
    profilePic: "",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/drjohnsmith/",
      },
      {
        icon: <AiFillGithub />,
        link: "https://github.com/drjohnsmith",
      },
    ],
  },
  JANE: {
    name: "Dr. Jane Doe",
    designation: "Cancer Researcher",
    bio: "Dr. Jane Doe is a leading cancer researcher specializing in lung cancer. Her groundbreaking research has contributed significantly to our understanding of lung cancer biology and potential therapeutic interventions.",
    profilePic: "",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/drjanedoe/",
      },
    ],
  },
  MICHAEL: {
    name: "Dr. Michael Johnson",
    designation: "Pathologist",
    bio: "Dr. Michael Johnson is a pathologist with a focus on gastrointestinal cancers. His expertise in histopathology has been instrumental in diagnosing and understanding various types of gastrointestinal malignancies.",
    profilePic: "",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/drmichaeljohnson/",
      },
      {
        icon: <AiFillGithub />,
        link: "https://github.com/drmichaeljohnson",
      },
    ],
  },
  SARAH: {
    name: "Dr. Sarah Williams",
    designation: "Oncologist",
    bio: "Dr. Sarah Williams is a dedicated oncologist specializing in hematologic malignancies. Her commitment to patient care and research has contributed to advancements in the treatment of blood cancers.",
    profilePic: "",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/drsarahwilliams/",
      },
    ],
  },
  ALEX: {
    name: "Dr. Alex Morgan",
    designation: "Researcher",
    bio: "Dr. Alex Morgan is a cancer researcher with a focus on genetic factors influencing cancer susceptibility. Her work has shed light on the intricate relationship between genetics and cancer development.",
    profilePic: "",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/dralexmorgan/",
      },
    ],
  },
  EMMA: {
    name: "Dr. Emma Davis",
    designation: "Pathologist",
    bio: "Dr. Emma Davis is a pathologist specializing in breast cancer pathology. Her expertise in diagnosing and characterizing breast cancer tissues has played a crucial role in patient care and treatment planning.",
    profilePic: "",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/dremmadavis/",
      },
    ],
  },
  WILLIAM: {
    name: "Dr. William Thompson",
    designation: "Oncologist",
    bio: "Dr. William Thompson is an oncologist with a focus on gastrointestinal malignancies. His clinical expertise and research contributions have enhanced our understanding and treatment options for digestive system cancers.",
    profilePic: "",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/drwilliamthompson/",
      },
      {
        icon: <AiFillGithub />,
        link: "https://github.com/drwilliamthompson",
      },
    ],
  },
};

import { IAuthor } from "../src/shared/interfaces";
import { AiFillLinkedin } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const AUTHORS: { [key: string]: IAuthor } = {
  SMITH: {
    name: "Dr. Alice Smith",
    designation: "Oncologist",
    bio: "Dr. Alice Smith is a dedicated oncologist with a passion for providing personalized cancer care. Her research focuses on innovative treatment approaches and improving patient outcomes.",
    profilePic: "path/to/alice_smith_pic.jpg",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/dr-alice-smith/",
      },
    ],
  },
  JOHNSON: {
    name: "Dr. Bob Johnson",
    designation: "Cancer Researcher",
    bio: "Dr. Bob Johnson is a leading cancer researcher specializing in molecular biology and genetics. His work aims to unravel the complexities of cancer at the genetic level to develop targeted therapies.",
    profilePic: "path/to/bob_johnson_pic.jpg",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/dr-bob-johnson/",
      },
    ],
  },
  DAVIS: {
    name: "Dr. Emma Davis",
    designation: "Cancer Biologist",
    bio: "Dr. Emma Davis is a dedicated cancer biologist specializing in understanding the tumor microenvironment. Her research contributes to the development of immunotherapies and targeted interventions.",
    profilePic: "path/to/emma_davis_pic.jpg",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/dr-emma-davis/",
      },
    ],
  },
  WILSON: {
    name: "Dr. John Wilson",
    designation: "Clinical Oncologist",
    bio: "Dr. John Wilson is a clinical oncologist dedicated to providing compassionate care to cancer patients. His research interests include clinical trials and improving the quality of life for cancer survivors.",
    profilePic: "path/to/john_wilson_pic.jpg",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/dr-john-wilson/",
      },
    ],
  },
  HARRIS: {
    name: "Dr. Sarah Harris",
    designation: "Cancer Immunologist",
    bio: "Dr. Sarah Harris is a cancer immunologist dedicated to understanding the immune response to cancer. Her research focuses on developing immunotherapies to enhance the body's ability to fight cancer.",
    profilePic: "path/to/sarah_harris_pic.jpg",
    social: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/dr-sarah-harris/",
      },
    ],
  },
};

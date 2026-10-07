// companyPage is optional
export class Project {
  constructor(
    title,
    image,
    languages,
    description,
    github,
    projectLink,
    companyPage = null,
  ) {
    this.title = title;
    this.image = image;
    this.languages = languages;
    this.description = description;
    this.github = github;
    this.projectLink = projectLink;
    this.companyPage = companyPage;
  }
}

const skinstric = new Project(
  "Skinstric AI",
  "skinstric.JPG",
  "Next.js, TypeScript, Tailwind CSS, Redux, Axios",
  `<a href=https://skinstric.ai target="_blank" style="color: white">Skinstric.ai</a > is an AI-driven skincare recommendation platform that recommends skincare products based off its AI detection model.<br/><br/>Internship experience: At Skinstric.ai, I developed a functional frontend interface and backend features for the AI detection model including all pages, animations, webcam module, and account demogrpahics interface.<br/><br/>Utilized Redux for account-wide user demographics tracking.`,
  "https://github.com/seb-giraldo/skinstric-internship",
  "https://skinstricskincare.vercel.app/",
  "https://skinstric.ai/",
);

const summarist = new Project(
  "Summarist",
  "summarist.JPG",
  "React, TypeScript, CSS, Axios, Firebase/Firestore, Stripe",
  "A paid app for users to search and listen to audiobooks within a database, and save their favorites.<br/><br/>Implemented all animations and functionality, developed all user account pages, implemented firebase as a user database and stripe for payments. ",
  "https://github.com/seb-giraldo/summarist",
  "https://summaristbooks.vercel.app/",
  null,
);

const sebFlix = new Project(
  "SebFlix",
  "sebflix.JPG",
  "React, JavaScript, CSS, Axios",
  `An app where users can search movie information, similar to IMDb. <br /><br /> Dynamically pulls data from the free <a href="https://www.omdbapi.com/" target="_blank" style="color: white">OMDb API Database</a> to gather movie information.`,
  "https://github.com/seb-giraldo/sebflix",
  "https://sebflix.vercel.app/",
  null,
);

const youtubeClone = new Project(
  "YouTube Clone",
  "youtube-clone.JPG",
  "React, JavaScript, CSS",
  `A YouTube clone that allows users to search any video or view from their selected category. <br /><br /> Dynamically pulls data from <a href="https://developers.google.com/youtube/v3" target="_blank" style="color: white">YouTube's API</a>.`,
  "https://github.com/seb-giraldo/youtube-clone",
  "https://youtube-clone-seb-giraldo.vercel.app/",
  null,
);

const projectArray = [skinstric, summarist, sebFlix, youtubeClone];

export default projectArray;

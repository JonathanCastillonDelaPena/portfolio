const technologies = {
  html: { name: "HTML 5", image: "/assets/technologies/html.png" },
  bootstrap: { name: "Bootstrap 5", image: "/assets/technologies/bootstrap.png" },
  css: { name: "CSS", image: "/assets/technologies/css.png" },
  js: { name: "Javascript", image: "/assets/technologies/js.png" },
  mysql: { name: "MySQL", image: "/assets/technologies/mysql.png" },
  react: { name: "React JS", image: "/assets/technologies/react.png" },
  node: { name: "Node JS", image: "/assets/technologies/nodejs.png" },
  express: { name: "Express", image: "/assets/technologies/express.png" },
  namecheap: { name: "Namecheap", image: "/assets/technologies/namecheap.png" },
  cloudinary: { name: "Cloudinary", image: "/assets/technologies/cloudinary.png" },
  sendinblue: { name: "Sendinblue", image: "/assets/technologies/sendinblue.png" },
};

const members = {
  jonathan: {
    name: "Jonathan C. Dela Peña",
    image: "/assets/avatar/jonathan.jpg",
    link: "https://jonathandelapena.vercel.app/",
  },
  tristan: {
    name: "Tristan Keith Anthony A. Viernes",
    image: "/assets/avatar/tristan.png",
    link: "https://www.tristanviernes.com/",
  },
  jestoni: {
    name: "Jestoni Ceroma",
    image: "",
    link: "",
  },
  mark: {
    name: "Mark Joseph Infiesto",
    image: "",
    link: "",
  },
};

const projects = [
  {
    title: "KodeGo Bootcamp",
    subtitle: "Mini Project 1",
    image: "/assets/projects/miniProject1Mockup.png",
    link: "https://jonathancastillondelapena.github.io/mini1/",
    description:
      "A website showcasing the pastries of my friend Mark.",
    techStack: [
      technologies.html,
      technologies.bootstrap,
      technologies.css,
      technologies.js,
    ],
    team: [members.jonathan],
  },
  {
    title: "KodeGo Bootcamp",
    subtitle: "Capstone",
    image: "/assets/projects/capstoneMockup.png",
    link: "https://kodebook.tristanviernes.com/",
    description:
      "A social media website where you can connect with like minded people.",
    techStack: [
      technologies.html,
      technologies.bootstrap,
      technologies.css,
      technologies.js,
      technologies.mysql,
      technologies.react,
      technologies.node,
      technologies.express,
      technologies.namecheap,
      technologies.cloudinary,
      technologies.sendinblue,
    ],
    team: [members.jonathan, members.tristan, members.jestoni, members.mark],
  },
];

export default projects;

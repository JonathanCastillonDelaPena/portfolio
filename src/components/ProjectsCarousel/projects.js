const technologies = {
  html: { name: "HTML 5", image: "/html.png" },
  bootstrap: { name: "Bootstrap 5", image: "/bootstrap.png" },
  css: { name: "CSS", image: "/css.png" },
  js: { name: "Javascript", image: "/js.png" },
  mysql: { name: "MySQL", image: "/mysql.png" },
};

const members = {
  jonathan: {
    name: "Jonathan C. Dela Peña",
    image: "/jonathan.jpg",
    link: "https://jonathandelapena.vercel.app/",
  },
  tristan: {
    name: "Tristan Keith Anthony A. Viernes",
    image: "/tristan.png",
    link: "https://www.tristanviernes.com/",
  },
};

const projects = [
  {
    title: "KodeGo Bootcamp",
    subtitle: "Mini Project 1",
    image: "/miniProject1Mockup.png",
    link: "https://jonathancastillondelapena.github.io/mini1/",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolorem porro officia ipsum nisi totam tempora harum voluptates cupiditate, repellat aut enim labore aperiam? Reiciendis, perspiciatis quis. Veritatis, consectetur debitis.",
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
    image: "/capstoneMockup.png",
    link: "https://kodebook.tristanviernes.com/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet iure ex optio tempora blanditiis deleniti eligendi doloremque fugit? Nulla repudiandae officiis asperiores veniam quidem dignissimos praesentium ad, adipisci vero.",
    techStack: [
      technologies.html,
      technologies.bootstrap,
      technologies.css,
      technologies.js,
      technologies.mysql,
    ],
    team: [members.jonathan, members.tristan],
  },
];

export default projects;

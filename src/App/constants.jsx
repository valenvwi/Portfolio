import starry from "../assets/images/starry.png";
import chatgpt from "../assets/images/chatgpt.jpg";
import multiverseChat from "../assets/images/multiverseChat.png";
import quickDrop from "../assets/images/QuickDrop.png";
import instaExplore from "../assets/images/InstaExplore.png";
import restaurantApp from "../assets/images/restaurant-app.png";

const firstnThirdIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  "https://cdn.worldvectorlogo.com/logos/django.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
];

const secondIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
];

const fourthIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
];

const fifthIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
];

const sixthIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
];
const buttons = [
  {
    href: "https://github.com/valenvwi/MultiverseChat",
    title: "View code",
  },
  {
    href: "https://instaexplore-9b589f2c49e0.herokuapp.com/users/sign_in",
    title: "Explore now",
  },
  {
    href: "https://github.com/valenvwi/Chatgpt-py",
    title: "View code",
  },
  {
    href: "https://github.com/valenvwi/QuickDrop-Amy",
    title: "View code",
  },
  {
    href: "https://github.com/valenvwi/Starry-Accessory-React",
    title: "View code",
  },
  {
    href: "https://github.com/valenvwi/restaurant-ordering-app",
    title: "View code",
  },
];

export const projects = [
  {
    title: "Multiverse Chat",
    description:
      "MultiverseChat opens a world of language learning possibilities. Find language exchange partners and study buddies with ease. The real-time chat connects you with native speakers and fellow learners, making learning efficient and fun. Explore new cultures, connect with people worldwide, and master languages like a pro.",
    image: multiverseChat,
    icons: firstnThirdIcons,
    button: buttons[0],
    completedOn: "November 2023",
    framework: "Django & React",
  },
  {
    title: "InstaExplore",
    description:
      "InstaExplore is a mobile application designed to help newcomers discover their local area and connect with people in their vicinity. Inspired by popular social media platforms like Instagram, InstaExplore combines the power of geolocation and user-generated content to create an engaging and interactive experience.",
    image: instaExplore,
    icons: secondIcons,
    button: buttons[1],
    completedOn: "July 2023",
    framework: "Ruby on Rails",
  },
  {
    title: "ChatGPT Clone",
    description:
      "This platform offers secure communication with enforced user authentication. Users can engage in conversations with an AI assistant in the chatroom, while also having the ability to access and review their chat histories. It is a safe and feature-rich environment for interactive discussions and seamless AI-powered interactions.",
    image: chatgpt,
    icons: firstnThirdIcons,
    button: buttons[2],
    completedOn: "October 2023",
    framework: "Django & React",
  },
  {
    title: "QuickDrop",
    description:
      "Sending or receiving packages can be a hassle in today's fast-paced world. With just a few taps on your smartphone, you can send or receive packages on time and with complete transparency. Originally, this was a two-week student project made by Wai Ian Vong, Micaela Frigola, Mayavi Steiner and Corinna Grundmeier. I have added additional pages to complete the driver's journey, edited validations for orders, and add-ons to improve the user's journey.",
    image: quickDrop,
    icons: fourthIcons,
    button: buttons[3],
    completedOn: "June 2023",
    framework: "Ruby on Rails",
  },
  {
    title: "Starry Accessory",
    description:
      "Starry Accessory is an online earrings shop that offers a straightforward shopping experience. Visitors can freely browse a variety of products. Upon logging in, users gain the ability to add items to their cart, proceed with the checkout process, and conveniently track their order history.",
    image: starry,
    icons: fifthIcons,
    button: buttons[4],
    completedOn: "August 2023",
    framework: "Spring Boot & React",
  },
  {
    title: "Food Ordering App",
    description:
      "This is a tiny React app that was made in two days. This simple food ordering app allows customers to view food and drinks from a restaurant. Users can also add items to their shopping cart.",
    image: restaurantApp,
    icons: sixthIcons,
    button: buttons[5],
    completedOn: "November 2023",
    framework: "React",
  },
];

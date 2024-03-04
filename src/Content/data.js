// videos
import ChatApp from "../assets/Videos/ChatApp.webm";
import WeatherApp from "../assets/Videos/WeatherApp.webm";
import TurfBooking from "../assets/Videos/TurfBooking.webm";
// icons
import TailwindIco from "../assets/Icons/tailwind.svg";
import HTMLIco from "../assets/Icons/html.svg";
import CSSIco from "../assets/Icons/css.svg";
import JSIco from "../assets/Icons/js.svg";
import NODEIco from "../assets/Icons/node.svg";
import MONGODBIco from "../assets/Icons/mongodb.svg";
import REACTIco from "../assets/Icons/react.svg";
import EXPRESSIco from "../assets/Icons/express.svg";
import SASSIco from "../assets/Icons/sass.svg";
import BOOTSTRAPIco from "../assets/Icons/bootstrap.svg";
import MUIIco from "../assets/Icons/mui.svg";
import POSTMANIco from "../assets/Icons/postman.svg";
import FIGMAIco from "../assets/Icons/figma.svg";
import GITHUBIco from "../assets/Icons/github-icon.svg";
import GITIco from "../assets/Icons/git-icon.svg";
import REDUXIco from "../assets/Icons/redux.svg";
import TYPESCRIPTIco from "../assets/Icons/typescript.svg";
// points icon
import fastIco from "../assets/Icons/PointsIcon/fast.svg";
import dynamicIco from "../assets/Icons/PointsIcon/dynamic.svg";
import maintainableIco from "../assets/Icons/PointsIcon/maintainble.svg";
import responsiveIco from "../assets/Icons/PointsIcon/responsive.svg";

// nav list
export const navList = [
  {
    text: "Home",
    to: "#",
  },
  {
    text: "About",
    to: "#about",
  },
  {
    text: "Portfolio",
    to: "#portfolio",
  },
  {
    text: "Contact",
    to: "#contact",
  },
];

// about details
export const about = `
I'm a Full-Stack Developer in Kochi, Kerala, India. I have a serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.  This translates into building beautiful and engaging frontends, but I also love crafting solid, scalable backend systems to ensure those experiences run smoothly and securely.`;

// education
export const education = [
  // {
  //   title: "ME(A)RN Stack",
  //   description: "Completed from Luminar Technolab in January 2024"
  // },
  {
    title: "BSc Computer Science",
    description:
      "Graduated from Al Ameen College ,Edathala Ernakulam under MG University in April 2023",
  },
  {
    title: "Plus Two",
    description:
      "Graduated from Paliyam GHSS,N.Paravoor Ernakulam  in March 2020",
  },
  {
    title: "SSLC",
    description: "Graduated from St Johns,Aluva Ernakulam  in March 2018",
  },
];

export const projects = [
  {
    id: 1,
    title: "Turf Booking Application",
    video: TurfBooking,
    image:
      "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?cs=srgb&dl=pexels-pixabay-274506.jpg&fm=jpg",
    desc: "Book your turf, split the cost, and get ready to play ball – all with the Turf Booking Application!",
    longDesc: `Introducing Turf Booking: Simplifying Your Game.

    Built on the powerful MERN stack, Turf Booking seamlessly connects players and turf owners for their next game.
    
    For Players: Easily find nearby turfs and manage bookings.
    
    For Turf Owners: Effortlessly add and manage turfs, customize pricing, and receive online payments.
    
    Features include effortless booking, flexible payment options, time slot management, comprehensive turf management, and a review and rating system.
    
    Turf Booking Application: Making your next game just a tap away!`,
    technologies: [REACTIco, MONGODBIco, EXPRESSIco, NODEIco],
    code:'https://github.com/MuhammedFayazTS/Turf-Booking-System.git'
  },
  {
    id: 2,
    title: "Chat Application",
    video: ChatApp,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20210115/pngtree-handheld-mobile-phone-chat-design-concept-image_524282.jpg",
    desc: "This chat application offers real-time messaging, group management, and personalized profiles for a seamless communication experience.",
    longDesc: `Introducing a secure platform built with the MERN stack (MongoDB, Express.js, React, Node.js), enabling real-time communication through instant messaging, group management, and personalized profiles. Connect instantly for seamless conversations, organize effortlessly for effective group management, and express yourself freely with personalized profiles.`,
    technologies: [REACTIco, MONGODBIco, EXPRESSIco, NODEIco],
    live:'https://connectify-a1zv.onrender.com/',
    code:'https://github.com/MuhammedFayazTS/Chat-Web-App.git'
  },
  {
    id: 3,
    title: "Weather Application",
    video: WeatherApp,
    image:
      "https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg",
    desc: "This app provides real-time weather updates and forecasts, helping you stay informed and prepared for your day.",
    longDesc: `This user-friendly application, crafted with React JS, offers real-time weather updates and comprehensive forecasts at your fingertips. Plan your day with confidence, staying one step ahead of the elements, regardless of the forecast. With WeatherMate, never be caught off guard by changing weather conditions again.`,
    technologies: [REACTIco],
    live:'https://weather-app-by-fayaz.netlify.app/',
    code:'https://github.com/MuhammedFayazTS/weather-app-codes.git'
  },
];

// contact info
export const contactInfo = {
  email: "muhammedfayazts01@gmail.com",
  phone: 7994536503,
};

export const skills = [
  HTMLIco,
  CSSIco,
  JSIco,
  TYPESCRIPTIco,
  REACTIco,
  MUIIco,
  TailwindIco,
  BOOTSTRAPIco,
  NODEIco,
  EXPRESSIco,
  MONGODBIco,
  GITIco,
  GITHUBIco,
  REDUXIco,
  SASSIco,
  FIGMAIco,
  POSTMANIco,
];

export const socialLinks = {
  gitHub: "https://github.com/MuhammedFayazTS",
  linkedin: "https://www.linkedin.com/in/muhammed-fayaz-t-s-64a934285",
  whatsapp: "https://wa.link/uo2gj3",
};

export const points = [
  {
    title: "Fast",
    desc: "Fast load times and lag free interaction, my highest priority.",
    icon: fastIco,
  },
  {
    title: "Responsive",
    desc: "My layouts will work on any device, big or small.",
    icon: responsiveIco,
  },
  {
    title: "Dynamic",
    desc: "Websites don't have to be static, I love making pages come to life.",
    icon: dynamicIco,
  },
  {
    title: "Maintainabile",
    desc: "Well-structured code base, good documentation .",
    icon: maintainableIco,
  },
];

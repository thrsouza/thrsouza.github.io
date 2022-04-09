import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Header } from "./containers/Header";
import { Home } from "./containers/Section/Home";
import { About } from "./containers/Section/About";
import { Experience } from "./containers/Section/Experience";
import { Portfolio } from "./containers/Section/Portfolio";
import { Contact } from "./containers/Section/Contact";
import { Footer } from "./containers/Footer";

const pageSections = [
  { id: "home", title: "Home", Container: Home },
  { id: "about", title: "About Me", Container: About },
  { id: "experience", title: "Experience", Container: Experience },
  { id: "projects", title: "Portfolio", Container: Portfolio },
  { id: "contact", title: "Contact Me", Container: Contact },
];

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <>
      <Header
        navigation={pageSections.map((section) => ({
          id: section.id,
          title: section.title,
        }))}
      />
      {pageSections.map((section, index) => (
        <section.Container key={index} id={section.id} title={section.title} />
      ))}
      <Footer />
    </>
  </StrictMode>
);

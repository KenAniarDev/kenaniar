import type { NextPage } from "next";
import Navbar from "components/layouts/Navbar";
import Footer from "components/layouts/Footer";
import Card from "components/Card";
import { workProjectData, personalProjectData } from "data/projectsData";

const Projects: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main className="py-16 max-w-[1280px] px-5 mx-auto ">
        <h1 className="text-center font-bold text-5xl uppercase text-cyan-900">
          My Projects
        </h1>

        <section className="py-16">
          <h2 className="font-medium text-2xl text-teal-900">Work Projects</h2>
          <div className="grid mt-3 gap-8">
            {workProjectData.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                slug={item.slug}
                thumbnail={item.thumbnail}
                role={item.role}
                tech={item.tech}
              />
            ))}
          </div>
        </section>
        <section className="pb-16">
          <h2 className="font-medium text-2xl text-teal-900">
            Personal Projects
          </h2>
          <div className="grid mt-3 gap-8">
            {personalProjectData.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                slug={item.slug}
                thumbnail={item.thumbnail}
                role={item.role}
                tech={item.tech}
              />
            ))}
          </div>
        </section>

        <h2 className="uppercase text-4xl text-teal-900 text-center font-semibold">
          more personal projects to be uploaded!
        </h2>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

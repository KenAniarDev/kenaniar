import React, { useState } from "react";
import { GetStaticProps } from "next";
import {
  workProjectData,
  personalProjectData,
  ProjectData,
} from "data/projectsData";
import Navbar from "components/layouts/Navbar";
import Footer from "components/layouts/Footer";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineLink } from "react-icons/ai";

export async function getStaticPaths() {
  const paths = [...workProjectData, ...personalProjectData].map((item) => ({
    params: { slug: item.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const slug = context?.params?.slug;
    if (!slug) {
      return { notFound: true };
    }
    const project = [...workProjectData, ...personalProjectData].find(
      (item) => item.slug === slug
    );

    if (!project) {
      return { notFound: true };
    }

    return {
      // Passed to the page component as props
      props: project,
    };
  } catch (e) {
    return { notFound: true };
  }
};

const Project = ({
  title,
  thumbnail,
  link,
  role,
  tech,
  images,
  videos,
  description,
}: ProjectData) => {
  return (
    <div>
      <Navbar />
      <main className="max-w-[1280px] mt-10 mb-10 mx-auto shadow">
        <Image
          src={thumbnail ? thumbnail : "/assets/images/project.jpg"}
          width={1280}
          height={500}
          alt={title ? title : "Placeholder Title" + " Thumbnail"}
          className="border-b border-gray-200"
        />
        <div className="px-5">
          <div className="mt-4 mb-4 flex justify-between ">
            <h1 className="font-semibold text-4xl ">
              {title ? title : "Placeholder Title"}
            </h1>
            {link && (
              <div className="min-w-[120px]">
                <a
                  href={link}
                  className="flex items-center gap-1 bg-cyan-800 text-white px-3 py-2 rounded-full "
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                  <span className="text-sm font-medium"> Live Demo</span>
                </a>
              </div>
            )}
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            porttitor mattis lacinia. Vestibulum venenatis commodo libero nec
            dapibus. Quisque eget eleifend nisl. Cras congue elit vitae
            fringilla aliquet. Pellentesque a felis magna. In vehicula tellus
            quis condimentum maximus. Quisque nisi magna, iaculis maximus dui
            quis, egestas porttitor sapien. Morbi at pharetra erat, et pharetra
            nulla. Fusce pretium sed ipsum ullamcorper sollicitudin. Nullam
            iaculis neque quis erat fermentum, ac malesuada nisl tincidunt. Duis
            pellentesque, enim a volutpat dictum, neque magna varius augue, sit
            amet viverra nisl urna gravida dolor.
          </p>
          {role && (
            <div className="flex flex-wrap gap-2 text-lg mb-4 ">
              <span className="font-semibold uppercase">Role:</span>
              {role.map((item, i) => (
                <div
                  key={i}
                  className="text-sm font-normal bg-cyan-800 text-white flex flex-wrap items-center px-3 py-1 rounded-full"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          {tech && (
            <div className="flex flex-wrap gap-2 text-lg pb-10">
              <span className="font-semibold uppercase">Tech Stack:</span>
              {tech.map((item, i) => (
                <div
                  key={i}
                  className="text-sm font-normal bg-teal-800 text-white flex flex-wrap items-center px-3 py-1 rounded-full"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {images && (
            <div>
              <h2 className="font-medium text-2xl mb-3 text-cyan-900">
                Screenshots
              </h2>
              <Carousel>
                {images.map((item, i) => (
                  <div key={i} className="h-[600px]">
                    <img src={item} />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          {videos && (
            <div>
              <h2 className="font-medium text-2xl mb-3 text-cyan-900">
                Video Demo
              </h2>
              <Carousel>
                {videos.map((item, i) => (
                  <div key={i} className="h-[600px]">
                    <img src={item} />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;

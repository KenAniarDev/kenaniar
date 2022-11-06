import Image from "next/image";
import React from "react";
import { ProjectData } from "data/projectsData";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  thumbnail: string;
  role: Array<string>;
  tech: Array<string>;
};

const Card = ({ title, slug, thumbnail, role, tech }: Props) => {
  return (
    <Link href={"/projects/" + slug}>
      <div className="shadow-lg rounded overflow-hidden grid grid-cols-2 hover:shadow-xl transition border border-grey-200 hover:border-cyan-800 hover:border-2">
        <Image
          src={thumbnail}
          width={620}
          height={270}
          alt={title + " Thumbnail"}
          objectFit="cover"
          objectPosition="center"
        />
        <div className="p-4  flex flex-col justify-center">
          <h4 className="font-semibold text-3xl mb-4">{title}</h4>

          <div className="flex flex-wrap gap-2 text-xl mb-2">
            <span className="font-semibold uppercase"> Role:</span>
            {role.map((item, i) => (
              <div
                key={i}
                className="text-xs font-normal bg-cyan-800 text-white flex flex-wrap items-center px-4 py-2 rounded-full"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-xl">
            <span className="font-semibold uppercase"> Tech Stack:</span>
            {tech.map((item, i) => (
              <div
                key={i}
                className="text-xs font-normal bg-teal-800 text-white flex flex-wrap items-center px-4 py-2 rounded-full"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

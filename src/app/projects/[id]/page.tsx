"use client";

import { ProjectsAll, Frontend_skill, Backend_skill } from "@/constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const project = ProjectsAll[Number(id)];

  // Fungsi untuk mendapatkan gambar teknologi
  const getTechImage = (techName: string) => {
    const allSkills = [...Frontend_skill, ...Backend_skill];
    const skill = allSkills.find(
      (s) => s.skill_name.toLowerCase() === techName.toLowerCase()
    );
    return skill?.Image || "null";
  };

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-[#2A0E61] hover:bg-[#7042f88b] text-white rounded-full transition-all duration-300"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-[#0300145e] p-8 rounded-lg border border-[#2A0E61]">
        <Image
          src={project.src}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full rounded-lg mb-8"
        />
        
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-gray-300 text-lg mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Teknologi yang Digunakan:</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-center bg-[#2A0E61] px-4 py-2 rounded-full">
                {getTechImage(tech) && (
                  <Image
                    src={getTechImage(tech)}
                    alt={tech}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                )}
                <span className="text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#2A0E61] hover:bg-[#7042f88b] text-white rounded-full transition-all duration-300"
          >
            Source Code
          </a>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-[#2A0E61] hover:bg-[#7042f88b] text-white rounded-full transition-all duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
import Image from "next/image";
import projects from "@/data/projectsDB";


const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const currentId = projects.find((project) => project.id === params.projectId);

  if (!currentId) return <p>Project not found</p>;

  const { title, img, category, live, code, technologies, description } =
    currentId;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Image
        src={img}
        alt={title}
        width={500}
        height={500}
        className="w-full rounded-lg border-2 shadow border-[#5cc48a] mb-5"
      />

      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-[#5cc48a]">{title}</h1>

        {/* Category */}
        <div className="flex items-center gap-2">
          <Image src="/assets/icons/category.png" alt={title} width={32} height={32} />
          <p className="text-lg text-slate-200 ">
            <strong>Category :</strong>{" "}
          </p>
          <span className="text-slate-300 uppercase bg-sky-500 bg-opacity-20 px-4 py-1 rounded-full shadow ml-2">
            {category}
          </span>
        </div>

        {/* Description */}
        <div className="items-center gap-2">
          <div className="flex gap-2 mb-2">
            <Image src="/assets/icons/description.png" alt={title} width={32} height={32} />
            <span className="text-lg text-slate-200 ">
              <strong>Description</strong>{" "}
            </span>
          </div>
          <div>
            {description.map((des, index) => (
              <li
                key={index}
                className="list-none flex items-center space-x-2 space-y-1"
              >
                <Image src="/assets/icons/check.png" alt={title} width={22} height={22} />
                <span className="text-slate-400">{des}</span>
              </li>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <div className="flex flex-col">
            <div className="flex items-center mb-4 gap-2">
              <Image src="/assets/icons/technology.png" alt={title} width={32} height={32} />
              <span className="text-lg text-white font-semibold">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-800 rounded-full px-3 py-1 ring-1 ring-slate-500 text-slate-400 hover:text-slate-200 bg-opacity-50 text-sm hover:bg-slate-700 hover:ring-slate-400 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Live & Code Links */}
        <div className="flex space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={live}
            className="flex items-center bg-slate-500 bg-opacity-20 ring-1 shadow px-3 py-1 rounded-full space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <Image src="/assets/icons/eye.png" alt={`${title} live`} width={30} height={30} />
            <span className="text-slate-300 font-semibold">Live</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={code}
            className="flex items-center bg-slate-500 bg-opacity-20 ring-1 shadow px-3 py-1 rounded-full space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <Image src="/assets/icons/code.png" alt={`${title} code`} width={30} height={30} />
            <span className="text-slate-300 font-semibold">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
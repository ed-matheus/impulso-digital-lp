import Image from "next/image";

const ProjectCard = ({ imageUrl, title, text, link, altText }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3 shadow-lg rounded-xl bg-white text-dark border-1 border-cyan-h overflow-hidden">
      <Image src={imageUrl} alt={altText} width={800} height={800} />

      <div className="flex flex-col items-center justify-center text-center gap-4 p-6">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className="text-md">{text}</span>

        <button
          type="button"
          className="bg-cyan-h px-4 py-2 rounded-full w-50 hover:bg-cyan cursor-pointer"
        >
          <a href={link} target="_blank" className="font-bold">
            Visitar
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

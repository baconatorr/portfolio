import ProjectCard from "./ProjectCard";


export default function ProjectGrid() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none z-0" />

      <div className="w-full py-16  bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden flex flex-col items-center justify-center">
        <div className="text-4xl md:text-6xl font-pppangaia text-center  py-10">
          View my <span className="text-emerald-400">projects!</span>
        </div>

        <ProjectCard />
      </div>
    </>
  );
}

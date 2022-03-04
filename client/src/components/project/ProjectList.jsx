import { FaPlus } from "react-icons/fa";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="flex h-44 w-full cursor-pointer flex-col items-center justify-center space-y-1 rounded-lg border-4 border-dashed border-gray-300 transition hover:bg-theme-card">
        <FaPlus className="text-2xl text-gray-300" />
        <p className="text-sm font-bold uppercase tracking-wide text-gray-300">
          New project
        </p>
      </div>
    </div>
  );
};

export default ProjectList;

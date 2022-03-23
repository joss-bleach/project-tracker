import { format } from "date-fns";

const ProjectItem = ({ project }) => {
  return (
    <div className="w-full cursor-pointer flex-col rounded border border-gray-300 transition hover:shadow">
      <div
        className="h-60 w-full overflow-hidden bg-gray-300 lg:h-44"
        style={{
          background: `url(${project.projectImage}) center no-repeat`,
          backgroundSize: "cover",
        }}
      />
      <div className="flex-col py-4 px-4">
        {project.priority === "high" && (
          <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
            High Priority
          </p>
        )}
        {project.priority === "medium" && (
          <p className="text-xs font-semibold uppercase tracking-wide text-yellow-600">
            Medium Priority
          </p>
        )}
        {project.priority === "low" && (
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Low Priority
          </p>
        )}
        <p className="text-sm font-semibold">{project.name}</p>
        <p className="text-xs text-gray-400">
          Created on: {format(Date.parse(project.createdAt), "do MMMM yyyy")}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;

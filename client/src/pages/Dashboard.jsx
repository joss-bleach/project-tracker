import { useEffect, useState } from "react";
import { FaPlus, FaFile } from "react-icons/fa";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUerProjects } from "../app/actions/projectActions";

// Components
import ProjectItem from "../components/project/ProjectItem";

// Helpers
import { formatMessage } from "../utils/sharedFunctions";
import { projectData } from "../utils/projectData";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.userAuthentication);
  const [testProjects, setTestProjects] = useState([]);

  const { loading, projects, error } = useSelector(
    (state) => state.projectUserProjects
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUerProjects());
    setTestProjects(projectData);
  }, [dispatch]);

  if (!currentUser) {
    <p>Loading</p>;
  } else if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <div>
        <div className="border-b border-gray-300 py-4">
          <p className="text-sm font-semibold">
            Dashboard{" "}
            <span className="pl-2 font-normal text-gray-400">
              {formatMessage() + " " + currentUser.name}
            </span>
          </p>
        </div>
        <div className="py-4">
          <div className="mt-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full cursor-pointer rounded border border-gray-300 px-12 py-6 transition hover:shadow">
              <div className="flex flex-row items-center justify-between text-sm">
                <FaFile className="text-xl text-theme-tertiary" />
                <div className="flex flex-col">
                  <p className="font-semibold">New Project</p>
                  <p className="text-xs text-gray-400">Get started</p>
                </div>
                <FaPlus />
              </div>
            </div>
          </div>
          <div className="py-6">
            <p className="text-sm text-gray-400">
              Filter by:{" "}
              <select className="pl-2 text-sm text-black focus:outline-none ">
                <option>No filter</option>
                <option>High priority</option>
                <option>Medium priority</option>
                <option>Low priority</option>
              </select>
            </p>
          </div>
          {testProjects.length === 0 ? (
            <div className="w-full py-6 text-center">
              <p className="font-semibold">
                You don't have any projects. Get started now.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {testProjects.map((project) => (
                <ProjectItem project={project} key={project.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Dashboard;

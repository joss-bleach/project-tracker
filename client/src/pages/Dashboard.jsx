import { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Components
import ProjectList from "../components/project/ProjectList";

// Helpers
import { formatMessage } from "../utils/sharedFunctions";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.userAuthentication);

  if (!currentUser) {
    <p>Loading...</p>;
  } else {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-theme-black">
          {formatMessage()} {currentUser.name}!
        </h1>
        <h3 className="text-2xl font-bold text-theme-black">Your projects</h3>
        <ProjectList />
      </div>
    );
  }
};

export default Dashboard;

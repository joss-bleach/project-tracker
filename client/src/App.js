import { BrowserRouter as Router } from "react-router-dom";

// Routes
import Routes from "./routing/Routes";

const App = () => {
  return (
    <Router>
      <main className="container mx-auto py-16 px-6">
        <Routes />
      </main>
    </Router>
  );
};

export default App;

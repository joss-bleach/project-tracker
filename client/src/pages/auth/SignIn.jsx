import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../app/actions/userActions";

// Components
import Alert from "../../components/alert/Alert";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { email, password } = formData;

  const dispatch = useDispatch();
  const userAuthentication = useSelector((state) => state.userAuthentication);
  const { loading, error, currentUser } = userAuthentication;

  const handleOnChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticateUser(email, password));
  };

  useEffect(() => {
    // if (currentUser) {
    //   navigate("/");
    // }
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-3 pb-4 text-center">
        <h1 className="text-5xl font-medium">Sign in</h1>
        <p className="font-light">
          Not got an account?{" "}
          <Link className="text-theme-tertiary underline" to="/signup">
            Click here
          </Link>{" "}
          to sign up.
        </p>
      </div>
      {error && <Alert type="error">Invalid email/password combination.</Alert>}
      <form onSubmit={handleOnSubmit} className="flex flex-col space-y-4 pt-4">
        <fieldset className="form-fieldset">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={handleOnChange}
            placeholder="hi@projectmanagement.co.uk"
            className="form-input"
            type="email"
          />
        </fieldset>
        <fieldset className="form-fieldset pb-4">
          <label className="form-label" htmlFor="email">
            Password
          </label>
          <input
            name="password"
            id="password"
            value={password}
            onChange={handleOnChange}
            placeholder="mypassword"
            className="form-input"
            type="password"
          />
        </fieldset>
        <button type="submit" className="form-submit">
          {loading ? <FaSpinner className="animate-spin" /> : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;

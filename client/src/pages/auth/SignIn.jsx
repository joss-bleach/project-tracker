import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../app/actions/userActions";

// Components
import Alert from "../../components/alert/Alert";

// Validation
import { userAuthenticationValidationRules } from "./validationSchemas";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userAuthenticationValidationRules),
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, authenticationSuccess, currentUser } = useSelector(
    (state) => state.userAuthentication
  );

  const handleOnSubmit = ({ email, password }) => {
    dispatch(authenticateUser(email, password));
  };

  useEffect(() => {
    if (authenticationSuccess || currentUser) {
      navigate("/");
    }
  }, [authenticationSuccess, currentUser, navigate]);

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
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col space-y-4 pt-4"
        noValidate={true}
      >
        <fieldset className="form-fieldset">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            name="email"
            id="email"
            {...register("email")}
            placeholder="hi@projectmanagement.co.uk"
            className="form-input"
            type="email"
          />
          <p className="form-helper">{errors.email?.message}</p>
        </fieldset>
        <fieldset className="form-fieldset pb-4">
          <label className="form-label" htmlFor="email">
            Password
          </label>
          <input
            name="password"
            id="password"
            {...register("password")}
            placeholder="mypassword"
            className="form-input"
            type="password"
          />
          <p className="form-helper">{errors.password?.message}</p>
        </fieldset>
        <button
          type="submit"
          disabled={loading ? true : false}
          className="form-submit"
        >
          {loading ? <FaSpinner className="animate-spin" /> : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;

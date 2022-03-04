import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaSpinner } from "react-icons/fa";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../../app/actions/userActions";

// Components
import Alert from "../../components/alert/Alert";

// Validation
import { userRegistrationValidationRules } from "./validationSchemas";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationValidationRules),
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, registrationSuccess } = useSelector(
    (state) => state.userRegistration
  );
  const { currentUser } = useSelector((state) => state.userAuthentication);

  const handleOnSubmit = ({ name, email, password }) => {
    dispatch(registerNewUser(name, email, password));
  };

  useEffect(() => {
    if (registrationSuccess || currentUser) {
      navigate("/dashboard");
    }
  }, [registrationSuccess, currentUser, navigate]);

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-3 pb-4 text-center">
        <h1 className="text-5xl font-medium">Sign up</h1>
        <p className="font-light">
          Already got an account?{" "}
          <Link className="text-theme-tertiary underline" to="/signin">
            Click here
          </Link>{" "}
          to sign in.
        </p>
      </div>
      {error && (
        <Alert type="error">Unable to create a new account at this time.</Alert>
      )}
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col space-y-4 pt-4"
        noValidate={true}
      >
        <fieldset className="form-fieldset">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            id="name"
            {...register("name")}
            placeholder="Your name"
            className="form-input"
            type="text"
          />
          <p className="form-helper">{errors.name?.message}</p>
        </fieldset>
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
        <fieldset className="form-fieldset pb-4">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword")}
            placeholder="mypassword"
            className="form-input"
            type="password"
          />
          <p className="form-helper">{errors.confirmPassword?.message}</p>
        </fieldset>
        <button
          type="submit"
          disabled={loading ? true : false}
          className="form-submit"
        >
          {loading ? <FaSpinner className="animate-spin" /> : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;

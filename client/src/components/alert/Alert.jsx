const Alert = ({ type, children }) => {
  if (type === "error") {
    return <div className="form-alert form-alert_error">{children}</div>;
  } else {
    return <div className="form-alert">{children}</div>;
  }
};

export default Alert;

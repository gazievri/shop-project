import { useEffect } from "react";

const Alert = ({ name = "", closeAlert = Function.prototype }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    //eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} is added to cart</div>
    </div>
  );
};

export default Alert;

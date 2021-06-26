import axios from "axios";
import store from "../../../store";

const submitForm = (values, { setSubmitting, resetForm }) => {
  const { password, email } = values;
  axios
    .post("http://challenge-react.alkemy.org/", {
      email: email,
      password: password,
    })
    .then((res) => {
      const token = res.data.token;
      setSubmitting(false);
      resetForm();
      store.dispatch({ type: "LOGGED_IN" });
      localStorage.setItem("token", token);
    })
    .catch((error) => {
      console.log(error.response);
      localStorage.setItem("token", "");
      if (error.response) {
        store.dispatch({
          type: "AUTH_ERROR",
          payload: error.response.data.error,
        });
      } else
        store.dispatch({
          type: "AUTH_ERROR",
          payload: `An error occurred (${error.message}). Please try again later`,
        });
      setSubmitting(false);
      resetForm();
    });
};

export default submitForm;

import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

function LoginWithReduxHookForm() {
  const { register, handleSubmit, errors } = useForm();

  const getCovidData = async () => {
    const options = {
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}",
      params: {
        format: "json",
        code: "it",
      },
    };

    try {
      const response = await axios.request(options);
      if (response.status === 200) {
        console.log("COVID-19 data for Italy:", response.data);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-700 w-max m-auto p-5 grid gap-7"
    >
      <h2 className="text-white font-extrabold text-3xl">Login</h2>
      <div className="grid gap-4">
        <div className="flex flex-col">
          <label htmlFor="Email" className="text-white text-start">
            Email
          </label>
          <input
            type="text"
            className="w-96"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Password" className="text-white text-start">
            Password
          </label>
          <input
            type="password"
            className="w-96"
            placeholder="Password"
            {...register("Password", {
              required: true,
              minLength: 8,
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
              },
            })}
          />
        </div>
        <input
          className="text-white bg-red-600 w-max px-2 py-1 m-auto"
          type="submit"
        />
      </div>
    </form>
  );
}

export default LoginWithReduxHookForm;

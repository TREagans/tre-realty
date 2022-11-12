import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuthButton from "../components/OAuthButton";

const SignIn = () => {
  // defining sign in formData as a state hook object
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // destructure the formData state hook
  const { email, password } = formData;

  // this function handles form data change
  const handleFormChange = (evt) => {
    // used prevState to retain previous entered data
    setFormData((prevState) => {
      return {
        ...prevState, // keep the previous data

        // target changing input by ID, and get it's value
        // each input must have an ID property to use this method
        [evt.target.id]: evt.target.value,
      };
    });
  };

  const handleSignIn = () => {

  }

  
  return (
    <section>
      <h1 className="text-center mt-6 text-3xl font-bold">Sign In</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        {/* for the image, based on screensize, we adjust img width */}
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          {/* copied img URL from unsplash */}
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIwaG9tZSUyMG93bmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="House and Key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            {/* with forms, the ID allow us to target specific input */}
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              type="email"
              value={email}
              id="email"
              placeholder="Email Address"
              onChange={handleFormChange}
            />

            <div className="relative flex items-center mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type={showPassword ? "text" : "password"}
                value={password}
                id="password"
                placeholder="Password"
                onChange={handleFormChange}
              />

              {showPassword ? (
                <FaEyeSlash
                  className="text-xl text-gray-700 absolute right-4 cursor-pointer z-10"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <FaEye
                  className="text-xl text-gray-700 absolute right-4 cursor-pointer z-10"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            {/* nowrap prevents from going to next line */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account? <span className="text-red-600 hover:text-red-700 transition duration-2 ease-in-out"><Link to="/sign-up">Sign Up!</Link></span>
              </p>

              <p className="text-blue-700 hover:text-blue-800 transition duration-2 ease-in-out">
                <Link to="/forgot-password">Forgot Password</Link>
              </p>
            </div>

            <div>
                <button submit={handleSignIn} className="bg-blue-600 w-full py-2 rounded text-white mb-4 text-sm font-medium uppercase shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
                  Sign In
                </button>
            </div>

            <div className="before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 mb-4">
              <p className="text-center font-semibold px-4">OR</p>
            </div>

            <div>
              <OAuthButton />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

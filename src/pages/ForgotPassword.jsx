import { useState } from "react";
import { Link } from "react-router-dom";
import OAuthButton from "../components/OAuthButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");


  // this function handles form data change
  const handleFormChange = (evt) => {
    setEmail(evt.target.value)
  };

  const handleResetPassword = () => {

  }

  return (
    <section>
      <h1 className="text-center mt-6 text-3xl font-bold">Forgot Password</h1>

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
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              type="email"
              value={email}
              id="email"
              placeholder="Email Address"
              onChange={handleFormChange}
            />

            {/* nowrap prevents from going to next line */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-8">
              <p>
                Don't have an account? <span className="text-red-600 hover:text-red-700 transition duration-2 ease-in-out"><Link to="/sign-up">Sign Up!</Link></span>
              </p>

              <p className="text-red-600 hover:text-red-700 transition duration-2 ease-in-out">
                <Link to="/sign-in">Sign In!</Link>
              </p>
            </div>

            <div>
                <button submit={handleResetPassword} className="bg-blue-600 w-full py-2 rounded text-white mb-4 text-sm font-medium uppercase shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
                  Send Reset Password
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

export default ForgotPassword;

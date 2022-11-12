import { FcGoogle } from "react-icons/fc";

const OAuthButton = () => {
  return (
    // <div className="relative flex justify-center items-center">
        <button className="flex items-center justify-center bg-red-600 w-full py-2 rounded text-white mb-6 text-sm font-medium uppercase shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800">
            <FcGoogle className="bg-white rounded-full text-[1rem] mr-2" />
            Continue with Google
        </button>
    // </div>
  )
}

export default OAuthButton;
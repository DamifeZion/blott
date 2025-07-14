import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
   const navigate = useNavigate();

   const goBack = () => {
      navigate(-1);
   };

   return (
      <div className="container py-16 flex items-center justify-center">
         <h1 className="text-3xl text-center lg:max-w-lg">
            Ooops! Seems you've lost your way. Click {" "}
            <button
               onClick={goBack}
               className="text-blue-700 cursor-pointer underline underline-offset-4 hover:no-underline"
            >
               here
            </button> {" "} to go home
         </h1>
      </div>
   )
}

export default NotFound
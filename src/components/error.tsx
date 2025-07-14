import type { ErrorT } from "../types"

export const Error: React.FC<ErrorT> = ({
   message = "Something went wrong. Please try again later."
}) => {
   return (
      <div className="mt-6 font-medium text-center">
         <h4>
            {message}
         </h4>
      </div>
   )
}
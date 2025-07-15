import moment from "moment"
import type { NewsCardT } from "../types"

export const NewsCard: React.FC<NewsCardT> = ({
   image,
   datetime,
   headline,
   source,
   url
}) => {
   return (
      <a
         href={url}
         target="_blank"
         className="p-4 flex gap-4 lg:flex-col lg:gap-2"
      >
         <img
            src={image}
            alt={headline}
            className="w-full max-[500px]:object-cover min-w-24 aspect-[10/11] sm:aspect-video max-lg:flex-1"
         />

         <div className="flex-[3]">
            <div className="flex items-center justify-between gap-2 *:text-muted-foreground text-xs">
               <p>{source}</p>
               <p>{moment(datetime).format("DD MMM YYYY")}</p>
            </div>

            <h3 className="mt-2 font-medium max-[400px]:text-sm lg:text-xl">
               {headline}
            </h3>
         </div>
      </a>
   )
}
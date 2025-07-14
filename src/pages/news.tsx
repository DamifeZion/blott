import { Error } from "../components/error";
import { Loader } from "../components/loader";
import { NewsCard } from "../components/news-card";
import { useNews } from "../hooks/use-news";

const News = () => {
   const { state } = useNews()

   if (state.isLoading) {
      return <Loader />
   }

   return (
      <section className="container pt-4  pb-10">
         <h1 className="font-bold text-2xl lg:text-5xl">
            News
         </h1>

         {state.isError && <Error />}

         {!state.isError && (
            <div className="mt-6 grid gap-x-6 lg:gap-y-8 lg:grid-cols-4">
               {state.data.map((item) => (
                  <NewsCard
                     key={item.id}
                     {...item}
                  />
               ))}
            </div>
         )}
      </section>
   )
}

export default News;
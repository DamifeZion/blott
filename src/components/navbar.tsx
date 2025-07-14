export const Navbar = () => {
   return (
      <nav className="max-lg:border sticky top-0 bg-background">
         <header className="container h-20 flex justify-center items-center lg:items-end lg:pb-2">
            <button className="cursor-pointer">
               <img
                  src="/logo.svg"
                  alt="Blott"
                  className="w-32 sm:w-40 lg:w-48"
               />
            </button>
         </header>
      </nav>
   )
}
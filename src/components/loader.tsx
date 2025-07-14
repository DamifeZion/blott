import { Icon } from "@iconify/react"

export const Loader = () => {
   return (
      <div className="h-[calc(100vh-5rem)] py-16 flex items-center justify-center">
         <Icon icon="mingcute:loading-fill" className="animate-spin size-10 sm:size-14 lg:size-16" />
      </div>
   )
}
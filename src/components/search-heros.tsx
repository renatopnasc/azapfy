import { SearchIcon } from 'lucide-react'

import { Button } from './ui/button'

export function SearchHeros() {
  return (
    <form
      action=""
      className="relative mx-auto flex w-full max-w-[60%] items-center rounded-lg bg-muted p-3 px-4 outline-none focus-within:outline-1 focus-within:outline-green-500"
    >
      <input
        type="text"
        name=""
        id=""
        className="flex-1 bg-transparent outline-none"
        placeholder="Search for metahumans"
      />
      <Button
        variant="ghost"
        className="absolute right-4 h-fit bg-transparent p-0"
      >
        <SearchIcon className="text-muted-foreground" />
        <span className="sr-only">Buscar metahumans</span>
      </Button>
    </form>
  )
}

import { SearchHeros } from './search-heros'

export function Header() {
  return (
    <header className="fixed flex h-20 w-full items-center">
      <SearchHeros />
    </header>
  )
}

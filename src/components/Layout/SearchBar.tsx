import React, { ChangeEvent, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>("")

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <React.Fragment>
      <fieldset
        className="md:w-[540px] sm:w-[420px] w-full border border-zinc-300 rounded text-zinc-500 my-4 flex items-center bg-blue-500"
      >
        <input
          className="w-full font-medium px-2 py-2 border-b-2 border-zinc-300 hover:border-zinc-400 focus:outline-none focus:border-b-blue-500"
          placeholder="Para onde devo te guiar?" 
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          />
          <button type="submit" className="flex place-items-center py-3 px-4 hover:scale-[1.125] hover:font-bold transition-all ease-in hover:bg-white/10">
            <MagnifyingGlass size={18} color="#fff" weight="bold" />
          </button>
      </fieldset>
    </React.Fragment>
  );
};

export default SearchBar;

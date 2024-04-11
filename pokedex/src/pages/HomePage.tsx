import React, { useState, useEffect, useRef } from "react";
import PokemonList from "../components/PokemonList";
import { Container, SearchButton, SearchInput } from "../styles/HomePageStyles";
import { SearchItem,DeleteButton, SearchPopup, RecentSearchHeader, HeaderContainer, ClearText, SearchArea } from "../styles/SearchStyles.ts";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredSearchTerm, setFilteredSearchTerm] = useState<string>("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecentSearches, setShowRecentSearches] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setFilteredSearchTerm(searchTerm);
    if (!recentSearches.includes(searchTerm) && searchTerm !== "") {
      setRecentSearches((prevSearches) => [searchTerm, ...prevSearches.slice(0, 3)]);
    }
    setShowRecentSearches(false);
  };

  const handleDeleteRecentSearch = (searchToDelete: string) => {
    setRecentSearches(recentSearches.filter((search) => search !== searchToDelete));
  };

  const handleSelectRecentSearch = (search: string) => {
    setSearchTerm(search);
    setFilteredSearchTerm(search);
    setShowRecentSearches(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowRecentSearches(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <Container>
      <SearchArea ref={searchRef}>
        <SearchInput
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowRecentSearches(true)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        {showRecentSearches && (
          <SearchPopup>
            <HeaderContainer>
              <RecentSearchHeader>RECENT SEARCHES</RecentSearchHeader>
              <ClearText onClick={handleClearRecentSearches}>CLEAR</ClearText>
            </HeaderContainer>
            {recentSearches.map((search, index) => (
              <SearchItem key={index}>
                <span onClick={() => handleSelectRecentSearch(search)}>{search}</span>
                <DeleteButton onClick={() => handleDeleteRecentSearch(search)}>X</DeleteButton>
              </SearchItem>
            ))}
          </SearchPopup>
        )}
      </SearchArea>
      <PokemonList searchTerm={filteredSearchTerm} />
    </Container>
  );
}

export default HomePage;
import { useState } from "react";
import PokemonList from "./components/PokemonList";
import RecentSearches from "./components/Search";
import {
  TopLine,
  HomeBox,
  FavoriteBox,
  BoxText,
  SearchButton,
  SearchInput,
  Logo,
  NonClickableBox
} from "./styles/HomePageStyles";
import LogoImage from "./LogoImage.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearchTerm, setFilteredSearchTerm] = useState(""); // This will be used for filtering
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false); // To control the display of recent searches

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShowRecentSearches(false); 
  };

  const handleSearch = () => {
    setFilteredSearchTerm(searchTerm); 
    setShowRecentSearches(false); 

    if (searchTerm && !recentSearches.includes(searchTerm)) {
      const updatedSearches = [searchTerm, ...recentSearches].slice(0, 4);
      setRecentSearches(updatedSearches);
    }
  };

  const handleDeleteRecentSearch = (search: string) => {
    setRecentSearches(recentSearches.filter((s) => s !== search));
  };

  const handleSelectRecentSearch = (search: string) => {
    setSearchTerm(search);
    setFilteredSearchTerm(search); 
    setShowRecentSearches(false); 
  };

  const handleSearchFocus = () => {
    if (recentSearches.length > 0) {
      setShowRecentSearches(true);
    }
  };

  return (
    <div>
      <TopLine>
        <Logo src={LogoImage} alt="Pokédex Logo" />
        <HomeBox><BoxText>Home</BoxText></HomeBox>
        <FavoriteBox><BoxText>Favorite</BoxText></FavoriteBox>
        <NonClickableBox />
      </TopLine>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      {showRecentSearches && (
        <RecentSearches
          searches={recentSearches}
          onDelete={handleDeleteRecentSearch}
          onSelect={handleSelectRecentSearch}
        />
      )}
      <PokemonList searchTerm={filteredSearchTerm} />
    </div>
  );
}

export default App;

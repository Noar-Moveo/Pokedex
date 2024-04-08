import { useState } from "react";
import PokemonList from "./components/PokemonList";
import {
  TopLine,
  HomeBox,
  FavoriteBox,
  BoxText,
  SearchButton,
  SearchInput,
  Logo,
  NonClickableBox,
} from "./styles/HomePageStyles";
import LogoImage from "./LogoImage.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchEnable = () => {
    setIsSearchEnabled(true);
  };

  return (
    <div>
      <TopLine>
        <Logo src={LogoImage} alt="Pokédex Logo" />
        <HomeBox>
          <BoxText>Home</BoxText>
        </HomeBox>
        <FavoriteBox>
          <BoxText>Favorite</BoxText>
        </FavoriteBox>
        <NonClickableBox />
      </TopLine>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        disabled={!isSearchEnabled}
      />
      <SearchButton onClick={handleSearchEnable}>Search</SearchButton>
      <PokemonList searchTerm={searchTerm} />
    </div>
  );
}

export default App;

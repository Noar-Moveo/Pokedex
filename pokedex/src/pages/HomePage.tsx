import { useState } from "react";
import PokemonList from "../components/PokemonList";
import {
  TopLine,
  HomeBox,
  FavoriteBox,
  BoxText,
  SearchButton,
  SearchInput,
  Logo,
  NonClickableBox
} from "../styles/HomePageStyles";
import LogoImage from "../LogoImage.png";


function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearchTerm, setFilteredSearchTerm] = useState(""); 
  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setFilteredSearchTerm(searchTerm); 
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
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      <PokemonList searchTerm={filteredSearchTerm} />
    </div>
  );
}

export default HomePage;



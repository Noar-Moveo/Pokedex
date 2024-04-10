import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import {
    TopLine,
    HomeBox,
    FavoriteBox,
    BoxText,
    Logo,
    NonClickableBox
} from "./styles/HomePageStyles";
import LogoImage from "./LogoImage.png";
import { LayoutProps } from "./data/types";


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TopLine>
        <Logo src={LogoImage} alt="Pokédex Logo" />
        <HomeBox><BoxText>Home</BoxText></HomeBox>
        <FavoriteBox><BoxText>Favorite</BoxText></FavoriteBox>
        <NonClickableBox />
      </TopLine>
      <main style={{ backgroundColor: 'white' }}>{children}</main> 
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

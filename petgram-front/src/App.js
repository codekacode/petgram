import './App.css';
import ListOfCategories from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards';
import PhotoCard from './components/PhotoCard';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}

export default App;

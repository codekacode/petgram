import './App.css';
import { CategorySkeleton } from './components/Category';
import ListOfCategories from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}

export default App;

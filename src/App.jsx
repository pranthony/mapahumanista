import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailCharacterView from './pages/detailCharacterView';
import Header from './components/Header';
import { Presentation } from './pages/presentation';
import { Footer } from './components/Footer';
import RequestForm from './pages/requestForm';
import { NotFound } from './components/NotFound';
import { Search } from './pages/search';

function App() {

  return (
    <>
      <Header/>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Presentation />}/>
          <Route path='/character/detail' element={<DetailCharacterView />}>
          <Route path=':idCharacter' element={<DetailCharacterView />}/>
          </Route>

          <Route path='/search' element={<Search />}>
          <Route path=':keyword' element={<Search />}/>
          </Route>

          <Route path='/solicita' element={<RequestForm />}/>
          <Route
            path="*"
            element={
              <NotFound />
            }
          />
  
          
        </Routes>
      </BrowserRouter>
      
      </div>
      <Footer/>   
    </>
  )
}

export default App

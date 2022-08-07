import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mapa from './components/MapaPeru'
import DetailCharacterView from './pages/detailCharacterView';
import Header from './components/Header';
import { Presentation } from './pages/presentation';
import { Footer } from './components/Footer';
import RequestForm from './pages/requestForm';

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
          <Route path='/solicita' element={<RequestForm />}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
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

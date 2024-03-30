
import './App.css'
import { Content } from './Components/Content/Content'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Item } from './Components/Item/Item';


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

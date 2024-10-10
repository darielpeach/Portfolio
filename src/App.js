import React from 'react'; 
import MenuBar  from './compnents/Menu'
import Banner from './compnents/Banner'
import Presentation from './compnents/Presentation'
import Competences from './compnents/Competences'
import Projets from './compnents/Projets'
import { ContactUs } from './compnents/Form'




function App() {
    return (
        <React.StrictMode>
            <MenuBar />
            <Banner />
            <Presentation />
            <Competences />
            <Projets />
            <ContactUs />
        </React.StrictMode>
    );
}

export default App;
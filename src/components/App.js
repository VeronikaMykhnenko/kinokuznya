import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Advertising from './Advertising';

import Theme from './ui/Theme';
import Header from "./ui/Header";
import Footer from './ui/Footer';
import Information from './Information';
import News from './News';
import Article from './Article';
import Registration from './ui/Registration';
import Login from './Login';
import Registration2 from './ui/Registration';
import RegistrationNom from './ui/RegistrationNom';
import Reset from './Reset';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);


  
  return (
    <ThemeProvider theme={Theme}> 
    <BrowserRouter>  
    <Header 
    value={value} 
    setValue={setValue} 
    selectedIndex={selectedIndex} 
    setSelectedIndex={setSelectedIndex}/>
    <Switch>
      <Route exact  path="/" component={() => <div style={{height: "2000px"}}>Головна</div>} />
      <Route exact  path="/люди" component={() => <div>Люди</div>} />
      <Route exact  path="/проекти" component={() => <div>Проекти</div>} />
      <Route exact  path="/кастинги" component={() => <div>Кастинги</div>} />
      <Route exact  path="/новини" component={() => <News />} />
      <Route exact  path="/rental&sale" component={() => <div>Rental&Sale</div>} />
      <Route exact  path="/вхід" component={() => <Login />} />
      <Route exact  path="/реєстрація" component={() => <Registration /> } />

      <Route exact  path="/Публічна оферта" component={() => <div>Публічна оферта</div>} />
      <Route exact path="/Зворотній зв'язок" component={() => <div>Зворотній зв'язок</div>} />
      <Route exact path="/Інформація" component={() => <Information />} />
      <Route exact path="/реклама" component={() => <Advertising />}/>
      <Route exact path="/новина" component={() => <Article />}/>
      <Route  exact path="/reset" component={() => <Reset />}/>
    </Switch>
    <Footer />
    </BrowserRouter>
    
   </ThemeProvider>
  );
}

export default App;

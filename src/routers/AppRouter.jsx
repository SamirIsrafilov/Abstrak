import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModeBtn from '../components/ModeBtn';
import Nav from '../components/Nav';
import DigitalAgency from '../pages/DigitalAgency';

const AppRouter = () => {
  const [mode, setMode] = useState('light');




  useEffect(() => {
    document.body.className = mode;

  })
  return (
    <BrowserRouter>
    <Nav/>
    <ModeBtn color={mode} setColor={setMode}  />
    <Switch>
      <Route path="/" component={DigitalAgency}></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
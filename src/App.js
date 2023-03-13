import React, {useState} from 'react';

import './App.css';

import Alert from './components/Alert';
import Navabar from './components/Navabar';
import TextFrom from './components/TextFrom';
function App() {

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
   const showAlert = (message,type)=>{
    setAlert({ 
    msg:message,
    type:type

    })
    setTimeout( ()=>{
      setAlert(null);
    } ,3000)

  }
  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.background ='#042743';
      showAlert("dark mode has been enable", "success");
    }
    else{
      setMode('light');
      document.body.style.background ='white';
      showAlert("light mode has been enable", "success");
    }
  }
return (
  <>
  {/*<Router>*/}
<Navabar title="TextUtiles" aboutText="about" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3" >
{/*<Routes>
    <Route exact path="/about" element={<About />}>
      
</Route>*/}
   {/* <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}  /> }>*/}
    <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
   {/* </Route>                        
</Routes>*/}

</div>
{/*</Router>*/}
  </>
);
}
export default App;
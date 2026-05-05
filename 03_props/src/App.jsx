import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="body">
    <Card name='Sujit Auti' age= {25} img ={'https://images.unsplash.com/photo-1654938900760-1419ee86bc1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww'}/>
    <Card name='SA' age= {25} img ={'https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fDNkJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww'}/>
    </div>
  );
};

export default App;
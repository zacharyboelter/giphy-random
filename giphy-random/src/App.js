import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import GifDisplay from './components/GifDisplay';
import React from 'react';
import Initial from './components/Initial';


function App() {

  //state to hold gif
  const [gif, setGif] = React.useState({});

  //get gifs
  const getGif = async () => {
    const apiKey = 'lDy1NwAiGBVU29wMjKS5Bbaj6jdfrCpc';
    const gif = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    const response = await fetch(gif);

    //parse JSON to js
    const data = await response.json();
    // set state to the gif IMAGE URL (data is the name of the json object)
    setGif(data.data);
  };


  return (
    <div className='App'>
      <Button randomgif={getGif} />

      {/* <GifDisplay gif={gif} /> */}
      {/* when i add the initial. js here instead of <p> it breaks... */}
      {gif.url ? <GifDisplay gif={gif} /> : <p>Want a random gif?</p>}
    </div>
  );
}

export default App;

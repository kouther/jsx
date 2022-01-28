import logo from './logo.svg';
import imageInSrc from './imageInSrc.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<div><br/></div>

<img src="/imageInPublic.jpg" alt="imageInPublic" />

<div><br/></div>

<img src={imageInSrc} alt="imageInSrc" />

</div>

<video width="320" height="240" controls>

<source src="/myVideo.mp4" type="video/mp4" />

</video>
      </header>
    </div>
  );
}

export default App;

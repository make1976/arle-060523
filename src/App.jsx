/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <blockquote cite="MONTESQUIEU">
    +      Hay que estudiar mucho para saber poco.
    </blockquote>
  );
}


export default App;*/
import './App.css'
import ProjectsPage from './projects/ProjectsPage';
import ProjectsPage2 from './projects/ProjectsPage2';

function App() {
  return (
    <div
      className='container'>
      <ProjectsPage />
      <ProjectsPage2 />
    </div>
  )
}

export default App;


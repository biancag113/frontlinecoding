import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import img from './accelerate.jpg'
// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>Frontline <span id="coding">Coding</span></h1>
    <h5>Helping front line workers build technology and innovate at work</h5>
    
    <h3>Step 1: Getting Started</h3>
    <iframe width="400" height="275" src="https://www.youtube.com/embed/fEt1TgfUly4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h7>Install VSCode, Node.js, and make an account on AWS</h7>
    
    <h3>Step 2: Setting up your project folder and React application</h3>
    <iframe width="400" height="275" src="https://www.youtube.com/embed/Spw0IGbmBt8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    <h7>npx create-react-app nameofapp, cd nameofapp, npm i create-react-app</h7>

    <h3>Step 3: AWS Command Line Interface (CLI) and Configuration</h3>
    <iframe width="400" height="275" src="https://www.youtube.com/embed/kgfyLNnziOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    <h7>npm install -g @aws-amplify/cli, amplify configure</h7>

    <h3>Step 4: Initializing Amplify and Adding User Authentication</h3>
    <h6>video coming soon...</h6>
    <h7>amplify init, amplify add auth</h7>


    <h3>Step 5: Install Amplify Node Package Manager</h3>
    <h6>video coming soon...</h6>
    <h7>npm install --save aws-amplify @aws-amplify/ui-react</h7>

    <h3>Step 6: Write code in App.js file</h3>
    <h6>video coming soon...</h6>
    <h7>import Amplify from 'aws-amplify', import aws config from './awsexports'</h7>


    <h3>Step 7: Deploy code</h3>
    <h6>video coming soon...</h6>
    <h7>amplify push</h7>

    <h3>Step 8: Create a website name and publish your site</h3>
    <h6>video coming soon...</h6>
    <h7>amplify hosting add, amplify publish</h7>

    </header>

    <body>

      <div class="cognito">
        <iframe src="https://www.cognitoforms.com/f/DLb7YeyReUeXT8Myg38RIQ?id=3"  frameborder="0" scrolling="yes" seamless="seamless" height="478" width="100%"></iframe>
      </div>
      <h3>Featured in</h3>
      <a href="https://www.himss.org/event-accelerate-health"><img src={img}></img></a>
    </body>

    <footer id="copyright">
      
      <p><h11> © Frontline Coding, 2020 </h11></p>
     <p><h11>San Francisco, CA</h11></p>
    </footer>
   
    </div>
  );
}


export default App;
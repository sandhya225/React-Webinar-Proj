import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClientForm from './ClientForm'
<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
  /*
  Needs to handle  here based on
  Role Admin or Client Pages needs
  to retrieved as template  
  */ 
  function App() {
  return (
    <div className="App">
     <ClientForm />
    </div>
  );
}

export default App;

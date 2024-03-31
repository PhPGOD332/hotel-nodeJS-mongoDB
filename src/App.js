import './css/App.css';
import './css/General.css';
import StartScreen from "./components/StartScreen";
import Header from "./components/Header";
import ViewsScreen from "./components/ViewsScreen";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <StartScreen>

        </StartScreen>
        <ViewsScreen>

        </ViewsScreen>
        <Rooms style={{paddingTop: '20px'}}>

        </Rooms>
        <Footer/>
    </div>
  );
}


export default App;
import './App.css';
// import WithPropsApp from './withprops/WithPropsApp';
// import MyApp from './MyApp';
import WithContextApp from './withcontext/WithContextApp';

function App() {
  return (
    <div className="App">
     <h2>useContext Class</h2>
     {/* <WithPropsApp/> */}
     <WithContextApp/>
     {/* <MyApp value="test2">
       <div>TEST</div>
     </MyApp> */}
    </div>
  );
}

export default App;

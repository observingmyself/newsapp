import React , {Component} from 'react'
import LoadingBar from 'react-top-loading-bar'
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NewsScreen from "./components/NewsScreen";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import UniversalComponent from './components/UniversalComponent';


 class App extends Component{
  
  state = {progress:0}
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>
          <Route path='/'  element = {<NewsScreen category = 'general' setProgress={this.setProgress}/>}/>
          <Route path='/sports'   element = {<NewsScreen category = 'sports' setProgress={this.setProgress}/>}/>
          <Route path='/entertainment'   element = {<NewsScreen category = 'entertainment' setProgress={this.setProgress}/>}/>
          <Route path='/science'   element = {<NewsScreen category = 'science' setProgress={this.setProgress}/>}/>
          <Route path='/technology'   element = {<NewsScreen category = 'technology' setProgress={this.setProgress}/>}/>
          
        </Routes>
        <UniversalComponent/>
        <Footer/>
      </Router>
    </div>
    
  );
}
}

export default App;

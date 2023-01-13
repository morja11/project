import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Rate from './rate'
function App() {

  const email="morja@gmail.com";

  var arr =["c","c++","html"];

  var data = [
    {vidio:require("./image/v1.mp4"),Rating:<Rate/>,name:"devlopment courses",button:"know more...!"},
    {vidio:require("./image/v2.mp4"),name:"design coursrs",Rating:<Rate/>,button:"know more...!"},
    {vidio:require("./image/v3.mp4"),name:"programing it",Rating:<Rate/>,button:"know more...!"},

  ]

  return (
    <>
      <div>
          <Home name="cdmi" email={email} />
          
        <ul>
          {
            arr.map((item,i) => {
              return(
                <li>{i} = {item} </li>
              )
            })
          }
        </ul>
        
          <div className="row">
            {
              data.map((item) => {
                return(
                  <Contact vidio={item.vidio} name={item.name} Rating={item.Rating} email={item.button}  />
                )
              })
            }

          </div>

      </div>
          
    </>
  );
}

export default App;

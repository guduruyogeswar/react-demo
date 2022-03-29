import './App.css';
import profile from"./images/a.png";
import mail from"./images/mail.jpg";
import pass from"./images/pass.png";

    function App() {
      return(
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={mail} alt="mail" className="mail"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="mail"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
         </div>
       </div>
       
     </div>
    </div>
      );
      }

export default App;
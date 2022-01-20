import React from "react";
import { useState } from "react";
import profile from "../assets/user/a.png";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./User.css";

function User() {
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <Navbar visible={visible} setVisible={setVisible} />
      <div className="user">
        <div className="user-form">
          <div>
            <div className="user-imgs">
              <div className="user-image">
                <img src={profile} alt="profile" className="user-profile" />
              </div>
            </div>
            <div>
              <h1>Connexion</h1>
              <div>
                <input
                  type="text"
                  placeholder="email"
                  className="user-name user-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="mot de passe"
                  className="user-name user-input"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className="login-button">
                <button className="user-button">Login</button>
              </div>
              <p className="link">
                <a className="user-link" href="#">
                  Mot de passe oublié ?
                </a>
                <a className="user-link" href="#">
                  Enregistrement
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default User;

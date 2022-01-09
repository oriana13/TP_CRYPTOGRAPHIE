import { Layout } from '../components/layout';
const CryptoJS = require('crypto-js');

export default function Home() {

  async function Cryptage() {
    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let message = document.getElementById("msg")
    let sk = document.getElementById("sk");
    document.getElementById("resName").innerHTML = "name: " + CryptoJS.AES.encrypt(name.value.toString(), sk.value.toString());
    document.getElementById("resMail").innerHTML = "e-mail: " + CryptoJS.AES.encrypt(mail.value.toString(), sk.value.toString());
    document.getElementById("resMessage").innerHTML = "message: " + CryptoJS.AES.encrypt(message.value.toString(), sk.value.toString());
  }

  async function Decrypt(){
    let name = document.getElementById("resName");
    let mail = document.getElementById("resMail");
    let message = document.getElementById("resMessage");

    document.getElementById("Ndecrypt").innerHTML = "name: " + CryptoJS.AES.decrypt(name, sk.value.toString());
    document.getElementById("Mdecrypt").innerHTML = "mail: " + CryptoJS.AES.decrypt(mail, sk.value.toString());
    document.getElementById("Msgdecrypt").innerHTML = "message: " + CryptoJS.AES.decrypt(message, sk.value.toString());
  }
  //console.log(SHA256("hello"))
  return (
    <Layout>
      <div>
        <h1>Cryptage en AES !</h1>
        <div>
          <div>
            <label for="name">Nom :</label>
            <input id="name"></input>
          </div>
          <div>
            <label for="mail">e-mail :</label>
            <input id="mail"></input>
          </div>
          <div>
            <label for="msg">Message :</label>
            <textarea id="msg"></textarea>
          </div>
          <div>
            <label for="msg">Your secret Key :</label>
            <textarea id="sk"></textarea>
          </div>

          <button onClick={Cryptage}>Send</button>

        </div>

        <div>
          <span id="resName"></span>
          <br />
          <span id="resMail"></span>
          <br />
          <span id="resMessage"></span>

        </div>
        <div>
          <button onClick={Decrypt}>Decrypt data</button>
        </div>

        <span id="Ndecrypt"></span>
        <br />
        <span id="Mdecrypt"></span>
        <br />
        <span id="Msgdecrypt"></span>

      </div>
    </Layout>

  )
}

import { Layout } from "../components/layout";
const CryptoJS = require("crypto-js");


export default function CryptMD5() {

    async function Cryptage() {
        let name = document.getElementById("name");
        let mail = document.getElementById("mail");
        let message = document.getElementById("msg")
        document.getElementById("resName").innerHTML = "name: " + CryptoJS.MD5(name.value.toString());
        document.getElementById("resMail").innerHTML = "e-mail: " + CryptoJS.MD5(mail.value.toString());
        document.getElementById("resMessage").innerHTML = "message: " + CryptoJS.MD5(message.value.toString());
        console.log(mail.toString())
    }
    //console.log(SHA256("hello"))
    return (
        <Layout>
            <div>
                <h1>Cryptage en MD5 !</h1>
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
                    <button onClick={Cryptage}>Send</button>

                </div>

                <div>
                    <span id="resName"></span>
                    <br />
                    <span id="resMail"></span>
                    <br />
                    <span id="resMessage"></span>

                </div>

            </div>
        </Layout>

    )
}

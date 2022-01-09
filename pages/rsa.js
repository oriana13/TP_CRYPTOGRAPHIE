import { Layout } from "../components/layout";
 
//const NodeRSA = require('node-rsa'); //UnComment
//const key = new NodeRSA({ b: 512 }); //UnComment


export default function Home() {

    async function Cryptage() {
        let name = document.getElementById("name");
        let mail = document.getElementById("mail");
        let message = document.getElementById("msg")

        document.getElementById("resName").innerHTML = "name: " + key.encrypt(name.value.toString(), 'base64');
        document.getElementById("resMail").innerHTML = "e-mail: " + key.encrypt(mail.value.toString(), 'base64');
        document.getElementById("resMessage").innerHTML = "message: " + key.encrypt(message.value.toString(), 'base64');
    }

    return (
        <Layout>
            <div>
                <h1>Cryptage en RSA !</h1>
                <span>J'ai suivi la doc mais une partie du module est obsolète, ça ne marche pas :(</span>
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

            </div>
        </Layout>

    )
}

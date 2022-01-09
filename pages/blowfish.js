import { Layout } from '../components/layout';
const Blowfish = require('javascript-blowfish').Blowfish

export default function Home() {

    async function Cryptage() {
        let name = document.getElementById("name");
        let mail = document.getElementById("mail");
        let message = document.getElementById("msg")
        let sk = document.getElementById("sk");
        const bf = new Blowfish(sk.value.toString());
        document.getElementById("resName").innerHTML = "name: " + bf.encrypt(name.value.toString());
        document.getElementById("resMail").innerHTML = "e-mail: " + bf.encrypt(mail.value.toString());
        document.getElementById("resMessage").innerHTML = "message: " + bf.encrypt(message.value.toString());
    }

    return (
        <Layout>
            <div>
                <h1>Cryptage en BLOWFISH !</h1>
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

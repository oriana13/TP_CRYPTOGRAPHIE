import { Layout } from '../components/layout';
const KECCAK512 = require('js-sha3')


export default function Home() {

    async function Cryptage() {
        let name = document.getElementById("name");
        let mail = document.getElementById("mail");
        let message = document.getElementById("msg")
        document.getElementById("resName").innerHTML = "name: " + KECCAK512.keccak512(name.value.toString());
        document.getElementById("resMail").innerHTML = "e-mail: " + KECCAK512.keccak512(mail.value.toString());
        document.getElementById("resMessage").innerHTML = "message: " + KECCAK512.keccak512(message.value.toString());
        console.log(mail.toString())
    }
    //console.log(SHA256("hello"))
    return (
        <Layout>
            <div>
                <h1>Cryptage en KECCAK512 !</h1>
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

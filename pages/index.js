const CryptoJS = require("crypto-js");
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import sha1 from 'crypto-js/sha1'
import sha3 from 'crypto-js/sha3'
import { Blowfish } from 'javascript-blowfish'
import { useState } from 'react'
import cryptoJs from 'crypto-js';


export default function Home() {

function Cryptage() {
  let name = document.getElementById(name);
  let res = document.getElementById(result);
  res.innerHTML = cryptoJs.SHA256(name);
}

  return (
    <form action="#" method="post">
    <div>
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name"></input>
    </div>
    <div>
        <label for="mail">e-mail :</label>
        <input type="email" id="mail" name="email"></input>
    </div>
    <div>
        <label for="msg">Message :</label>
        <textarea id="msg" name="message"></textarea>
    </div>
    <button onClick={Cryptage}>Send</button>

    <textarea id="result"></textarea>
</form>

  )
}

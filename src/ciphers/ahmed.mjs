import { Cipher } from "caeser-cipher-js"
import morse from "morse"
import { ahmed_otp } from "./vernam.mjs";
import { tap } from "./tap.mjs";




function ahmed_enc(text, key) {
    var matrix = [], func_loop = 0
    text = text.split("")
    // console.log(text)
    for (var i = 0; i < text.length; i++) {
        switch (func_loop) {
            case 0:
                var x = Cipher.encrypt(text[i], "5")
                matrix.push(x.msg)
                break
            case 1:
                var y = morse.encode(text[i])
                matrix.push(y)
                break
            case 2:
                var z = ahmed_otp.enc(text[i], key)
                matrix.push(z)
                break
            case 3:
                var w = tap.tap_enc_for_ahmedjs(text[i])
                matrix.push(w)
                break
        }
        matrix.push("   ")
        func_loop = (func_loop + 1) % 4
    }
    return matrix.join("")
}

function ahmed_dec(cipher, key) {
    var matrix = [], func_loop = 0
    cipher = cipher.split("   ")
    // console.log(cipher)
    for (var i = 0; i < cipher.length; i++) {
        switch (func_loop) {
            case 0:
                var x = Cipher.decrypt(cipher[i], "-5","")
                matrix.push(x.msg)
                break
            case 1:
                var y = morse.decode(cipher[i])
                matrix.push(y)
                break
            case 2:
                var z = ahmed_otp.dec(cipher[i], key)
                matrix.push(z)
                break
            case 3:
                var w = tap.tap_dec(cipher[i])
                matrix.push(w)
                break
        }
        func_loop = (func_loop + 1) % 4
    }
    return matrix.join("")
}
// console.log(Cipher.encrypt("a",5).msg + "  " + Cipher.decrypt("F",-5,"").msg)

// console.log(ahmed_enc("ahmed gsdvsd sdvs sd", "h"))
// console.log(ahmed_dec("F   ....   t   . .....   I   .......   n   .... ...   I   ...-   z   . ....       ...   k   ..... .   X   .......   z   . ....   ", "h"))


export const ahmed = {
    ahmed_enc : ahmed_enc,
    ahmed_dec : ahmed_dec
}


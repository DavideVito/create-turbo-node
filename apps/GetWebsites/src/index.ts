import { getFacebook, getGoogle } from "ceia-utils"
import { getDisponibilita, getApple } from "controllo-disponibilita"

const main = async () => {

    console.log("Inizio");

    const google = await getGoogle();
    const microsoft = await getDisponibilita()
    const facebook = await getFacebook()
    const apple = await getApple()


    console.log({ l1: google.length, l2: microsoft.length, l3: facebook.length, l4: apple.length })



    console.log("Fine");



}

main()
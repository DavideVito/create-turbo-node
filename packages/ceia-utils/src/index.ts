import axios from "axios";

export const inviaEmail = () => { console.log("Email inviata"); return true }

export const getGoogle = async () => {

    const richiesta = await axios("https://www.google.com/");


    return richiesta.data;

}

export const getFacebook = async () => {
    const richiesta = await axios("https://www.google.com/");


    return richiesta.data;
}


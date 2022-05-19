import axios from "axios";

export const getDisponibilita = async () => {


    const html = await axios.get("https://www.microsoft.com/");
    return html.data;

}

export const getApple = async () => {


    const html = await axios.get("https://www.apple.com/");
    return html.data;

}


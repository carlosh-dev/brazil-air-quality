import axios from "axios";

export const api = axios.create({
    baseURL: 'http://270c-189-120-77-5.ngrok.io'
    // Utilizar o IP da máquina, pois o localhost apontará para o dispositivo.
    // Comanda para pegar IP: 
})
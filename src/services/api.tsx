import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.15.1:3333'
    // Utilizar o IP da máquina, pois o localhost apontará para o dispositivo.
    // Comanda para pegar IP: 
})
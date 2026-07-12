import axios from "axios";

const deezer=axios.create({
    baseURL:"https://deezerdevs-deezer.p.rapidapi.com",
    headers:{
        "X-RapidAPI-Key":"a47188806cmshdbbb46d28d52768p1cdf44jsn8ae1173b60df",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
});
export default deezer;
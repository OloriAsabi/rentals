import axios from 'axios'

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    try{
    const { data } = await axios.get((url), {
         headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': process.env.TOKEN
                }
    });
    return data}catch(error){
        return {data: error}
    }
}
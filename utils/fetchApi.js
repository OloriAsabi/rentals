import axios from 'axios'

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    try{
    const { data } = await axios.get((url), {
         headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ddce69948fmshff6aae4085c827bp182a48jsn624b4ccb011c'
                }
    });
    return data}catch(error){
        return {data: error}
    }
}
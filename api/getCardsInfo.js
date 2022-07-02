import axios from 'axios';

export const getAllCards = async () =>{
    try{
        let data = await axios.get('https://hack-withnative.herokuapp.com/company/all');
        return data;
    }catch(err){
        console.log(err)
        return {
            status:"error",
            message:err.message
        }
    }

}
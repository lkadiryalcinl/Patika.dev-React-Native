import {useEffect,useState} from 'react'
import axios from 'axios';

export default function(url){
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);

    useEffect(() => {
        fetchData();
    },[url]);
    
    const fetchData = async () => {
        try{
        const {data:productData} = await axios.get(url);
        setData(productData);
        setLoading(false);
        } catch(error){
        setLoading(false);
        setError(error.message);
        }
    };

    return {data,loading,error}
}
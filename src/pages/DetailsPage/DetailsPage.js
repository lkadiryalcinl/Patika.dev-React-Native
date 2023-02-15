import React from 'react'
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import AnimatedLottieView from 'lottie-react-native';
import DetailCard from '../../components/DetailCard';

export default function({route}){
    const {id} = route.params;
    let clickedProduct = Config.API_URL.concat("/"+id);
    const {data,loading,error} = useFetch(clickedProduct);

    if(loading){
        return <AnimatedLottieView source={require('../../Assets/loading.json')} autoPlay/>
    }
    if(error){
        return <AnimatedLottieView source={require('../../Assets/error.json')} autoPlay/>
    }

    return <DetailCard data={data}/>
};


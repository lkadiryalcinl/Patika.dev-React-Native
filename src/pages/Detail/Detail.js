import React from 'react'
import { Linking,FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard';

export default function({route}) {

    const {idMeal} = route.params;
    const {data,loading,error} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeal);

    if(loading) return <Loading/>
    if(error) return <Error/>
    
    const renderData = ({item}) => <DetailCard detail={item} 
    onSelect = {() => {Linking.openURL(item.strYoutube)}}/>;

    return (
        <FlatList
        data={data.meals}
        renderItem={renderData}
        />
    );
};
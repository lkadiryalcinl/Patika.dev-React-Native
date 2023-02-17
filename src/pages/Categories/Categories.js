import React from 'react'
import { FlatList,View } from 'react-native'
import styles from './Categories.Style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoriesCard from '../../components/CategoriesCard';

export default function({navigation}) {
    const{data,loading,error} = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    
    const handleSelect = strCategory => {
        navigation.navigate("Meals", { strCategory });
    };
    
    const renderData = ({item}) => <CategoriesCard categories={item} onSelect = {() => handleSelect(item.strCategory)}/>;
    
    if(loading) return <Loading/>
    if(error) return <Error/>
    return (
        <View style = {styles.outer_container}>
            <FlatList 
            data={data.categories} 
            renderItem = {renderData}/>
        </View>
    );
};
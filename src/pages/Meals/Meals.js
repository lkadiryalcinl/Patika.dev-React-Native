import React from 'react'
import { View,FlatList} from 'react-native'
import styles from './Meals.Style'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';
import MealsCard from '../../components/MealsCard';

export default function({navigation,route}) {

    const {strCategory} = route.params;
    const{data,loading,error} = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+strCategory);

    const handleSelect = idMeal => {
        navigation.navigate("Detail", { idMeal });
    };
    
    const renderData = ({item}) => <MealsCard meals={item} onSelect={() => handleSelect(item.idMeal)}/>

    if(loading) return <Loading/>
    if(error) return <Error/>
    
    return (
        <View style = {styles.outer_container}>
            <FlatList 
            data={data.meals} 
            renderItem = {renderData}/>
        </View>
    );

};
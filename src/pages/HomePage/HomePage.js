import React, { useState,useEffect} from 'react'
import {View,FlatList,Text,TouchableOpacity} from 'react-native'
import ProductCard from '../../components/ProductCard';
import Config from 'react-native-config'
import AnimatedLottieView from 'lottie-react-native';
import useFetch from '../../hooks/useFetch';
import styles from './HomePage.Style'

export default function({navigation}){
    const [_data,setData] = useState([])
    const [_loading,setLoading] = useState(false);
    const [_error,setError] = useState(null)
    const [url,setUrl] = useState(Config.API_URL);
    const [filter,setFilter] = useState(false);
    const {data,loading,error} = useFetch(url); 

    useEffect(
        () => {
            setData(data);
            setLoading(loading);
            setError(error);
        }, []
    )

    const filterData = (category) => {
        setUrl(Config.API_URL_CAT+category)
        setFilter(!filter)
    }

    const onClick = id => {
        navigation.navigate('Details',{id});
    }

    const Products = ({item}) => <ProductCard product={item} onClickItem = {() => onClick(item.id)}/>;

    if(loading){
        return <AnimatedLottieView source={require('../../Assets/loading.json')} autoPlay/>
    }
    if(error){
        return <AnimatedLottieView source={require('../../Assets/error.json')} autoPlay/>
    }
    if(filter){
        return(
            <View style={styles.container1}>
                <View style={styles.extended_container1}>
                    <View style={styles.ex_inner_container1}>
                        
                        <View style={{flex:0.38,flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flex:3,justifyContent:'center'}}>
                                <Text style={styles.filter_text_right}>Filter items</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btn_2} onPress={() => {setFilter(!filter)}}>
                                    <Text style={styles.filter_text}> X </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.checkbox}>
                            <TouchableOpacity style = {styles.btn} onPress={() => filterData("electronics")}>
                                <Text style={styles.filter_text}>Electronics</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.checkbox}>
                            <TouchableOpacity style = {styles.btn} onPress={() => {filterData("jewelery")}}>
                                <Text style={styles.filter_text}>Jewelery</Text>
                            </TouchableOpacity>                                
                        </View>
                            
                        <View style={styles.checkbox}>
                            <TouchableOpacity style = {styles.btn} onPress={() => {filterData("men's%20clothing")}}>
                                <Text style={styles.filter_text}>Men's clothing</Text>
                            </TouchableOpacity>
                        </View>
                            
                        <View style={styles.checkbox}>
                            <TouchableOpacity style = {styles.btn} onPress={() => {filterData("women's%20clothing")}}>
                                <Text style={styles.filter_text}>Women's clothing</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.checkbox}>
                            <TouchableOpacity style = {styles.btn} onPress={() => {setFilter(!filter);setUrl(Config.API_URL)}}>
                                <Text style={styles.filter_text}>All items</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={styles.list_container1}>
                    <FlatList data={data} renderItem={Products}/>
                </View>
            </View>
        );
    }
    else{
        return(
            <View style={styles.container2}>
                <View style={styles.extended_container2}>
                    <View style={styles.ex_inner_container2}>
                        <Text style={styles.filter_text}>Filter items</Text>   
                    </View>
                    <View style={styles.ex_inner_container2}>
                        <TouchableOpacity style = {styles.btn} onPress={() => {setFilter(!filter)}}>
                            <Text style={styles.filter_text}>Extend filter card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.list_container2}>
                    <FlatList data={data} renderItem={Products}/>
                </View>
            </View>
        );
    }
};
    
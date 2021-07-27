import React, {useState , useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { APP_ID, BASE_URL } from '../services/Api';
import ListCard from '../components/ListCard';


const Home = () => {

    const [posts , setPosts] = useState([]);
    const [search , setSearch] = useState("");
    const [filteredPosts , setFilteredPosts] = useState([]);

    useEffect(() => {
        getPostsFromApi();
    });
    
    const getPostsFromApi = async() => {

        const res = await axios.get(
            BASE_URL ,
            {
                headers: {
                    'app-id': APP_ID
                }
            });

            setPosts(res.data.data);
            setFilteredPosts(res.data.data);
    }

    const onChangeText = (searchText) => {
        setSearch(searchText);
        setFilteredPosts(posts.filter(element => element.text.includes(searchText)))
    }

    return (
        <View style={styles.container}>

            <SearchBar 
                placeholder="Search"
                containerStyle={styles.searchContainerStyle}
                inputContainerStyle={styles.serchInputcontainerStyle}
                value={search}
                onChangeText={onChangeText}
            />

            {
                posts && 
                <FlatList
                    data={filteredPosts}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <ListCard 
                            post={item}
                        />
                    )}
                />
            }

        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'  
    },
    searchContainerStyle:{
        backgroundColor: 'black', 
        borderBottomWidth: 0, 
        borderTopWidth: 0
    },
    serchInputcontainerStyle:{
        backgroundColor: '#fff'
    }
});

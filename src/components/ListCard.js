import moment from 'moment';
import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Card,Avatar,Image,Chip,Icon } from 'react-native-elements';

const ListCard = ({post}) => {

    const { firstName , 
            lastName , 
            picture , 
            email} = post.owner;
    const {image,tags,text,link,likes,publishDate} = post;

    return (
        <Card >
            <View style={styles.hader}>

                <View style={styles.avatarContainer}>
                    <Avatar
                        rounded
                        size="medium"
                        source={{
                            uri: picture
                        }}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{firstName} {lastName}</Text>
                    <Text style={styles.subtitle}>{email}</Text>
                </View>

            </View>
            
            <Card.Divider style={{marginVertical: 10}} />

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={{ height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>
        
            <View style={styles.bodyContainer} >

                <View style={styles.chipContainer}>
                    {
                        tags.map((item , index) => (
                            <View key={index} style={styles.chipStyle}>
                                <Chip title={item} />
                            </View>
                        ) )
                    }
                </View>

                <Text style={styles.textStyle}>{text}</Text>

                <Text numberOfLines={1} style={styles.urlStyle}>{link}</Text>

            </View>

            <Card.Divider style={{marginTop: 10}} />

                <View style={styles.likesContainer}>

                    <View style={styles.likes} >
                        <Icon
                            size={24}
                            name='heart'
                            type='font-awesome'
                            color='blue'/>

                        <Text style={styles.likesStyle}>{likes} Likes</Text>
                    </View>

                    
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateStyle}>
                            {publishDate}
                        </Text>
                    </View>

                </View>

            <Card.Divider style={{marginVertical: 10}} />

                <View style={styles.footer}>
                    <Text style={styles.underline}>Get Post Comments</Text>
                    <Text style={styles.underline}>Get Owner Profile</Text>
                </View>
        
        </Card>
    )
}

export default ListCard

const styles = StyleSheet.create({
    hader:{
        flexDirection: 'row',
    },
    avatarContainer:{
        marginRight: 15
    },
    infoContainer:{
        justifyContent: 'center'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    subtitle:{
        fontSize: 16,
        color: '#a0a0a0'
    },
    bodyContainer:{

    },
    chipContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 15
    },
    chipStyle:{
        marginRight: 5
    },
    textStyle:{
        fontSize: 18,
        fontWeight: '700'

    },
    urlStyle:{
        fontSize: 17,
        marginVertical: 10,
        color: 'purple'
    },
    likesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    likes:{
        flexDirection: 'row'
    },
    likesStyle:{
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 5
    },
    dateContainer:{
        alignItems: 'baseline'
    },
    dateStyle:{
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#a0a0a0'
    },
    footer:{

    },
    underline: {
        textDecorationLine: 'underline',
        color: 'purple',
        fontSize: 16,
        marginBottom: 7
    }
})

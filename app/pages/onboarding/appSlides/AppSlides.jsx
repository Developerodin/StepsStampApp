import React,{useRef, useState} from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions,Animated } from 'react-native';


const slides = [
  {
    id: 1,
    title: 'Slide 1',
    description: 'This is the description for slide 1.',
    image: 'https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png',
  },
  {
    id: 2,
    title: 'Slide 2',
    description: 'This is the description for slide 2.',
    image: 'https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png',
  },
  {
    id: 3,
    title: 'Slide 3',
    description: 'This is the description for slide 3.',
    image: 'https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png',
  },
  {
    id: 4,
    title: 'Slide 4',
    description: 'This is the description for slide 4.',
    image: 'https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png',
  },
];

const { width } = Dimensions.get('window');

export const AppSlides = () => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null)
  const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current;

   const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  const renderItem = ({ item }) => (
    <View style={[styles.slide,{width}]}>
      <Image source={{ uri: item.image }} style={[styles.image,{width,resizeMode:'contain'}]} />

      <View style={{flex:0.3}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      </View>
     
    </View>
  );

  const Paginator = ({data, scrollX} )=>{
    return (
      <View style={{flexDirection:'row',height:64}}>
         {
          data && data.map((_,i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];


            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange:[0.3, 1, 0.3],
              extrapolate: 'clamp',
            })
            return <Animated.View style = {[styles.dot,{width:dotWidth,opacity}]} key={i.toString()}/>
          })
         }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{flex:3}}>
      <FlatList
      data={slides}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={slidesRef}
    />
      </View>
      <Paginator data={slides} scrollX={scrollX}/>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    flex:0.7,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom:10,
    color:"#493d8a",
    textAlign:'center'
  },
  description: {
    fontWeight:'300',
    fontSize: 16,
    textAlign: 'center',

    paddingHorizontal:64
  },
  dot:{
    height:10,
    borderRadius:5,
    backgroundColor:"#493d8a",
    marginHorizontal:8,
    
  }
});

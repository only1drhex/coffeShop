
import { View, Text, TextInput, Dimensions, TouchableOpacity, FlatList, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme, NativeWindStyleSheet } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, beanBg } from '../assets';
import { Image } from 'react-native';
import {BellIcon, MagnifyingGlassIcon, MapPinIcon} from "react-native-heroicons/solid"
import { categories, coffeeItems } from '../constants';
import { useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/CoffeeCard';

export const {width, height} = Dimensions.get('window');
export const ios =  Platform.OS == 'ios';
const heightMargin: number = 40


export const { page_width, page_height} = {width, height}
export default function HomeScreen()  {
 const [activeCategory, setActiveCategory] = useState(1)

  return (
    <View className="flex-1 relative bg-white">
        <Image source={beanBg} className="w-full opacity-10 absolute -top-5" 
        style={{
            height: 220
        }}
        />

        <SafeAreaView className="">
            {/* Bells and Avatar */}
            <View className="mx-4 flex-row justify-between items-center">
            <Image className="h-9 w-9 rounded-full" source={Avatar} />

            <View className="px-4 flex-row space-x-2 justify-between items-center">
              <MapPinIcon size={25} color="#D4A576" />
              <Text className="text-base font-semibold">New York, NYC</Text>
            </View>
            <BellIcon size="26" color="black"   />
            </View>
            {/* searc bar */}

            <View  className={`mt-[${heightMargin}] mx-5`}>
                <View className={`flex-row items-center rounded-full  bg-[#e6e6e6]`}>
                    <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700"  />
                    <TouchableOpacity className="rounded-full m-1 p-4 bg-[#D4A574]">
                        <MagnifyingGlassIcon size='25' strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* categories */}

            <View className="mt-6 px-2">
                <FlatList
                 horizontal
                 showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            decelerationRate='fast'
            renderItem={({item}) => {

                const isActive = item.id == activeCategory;
                return (
                    <TouchableOpacity 
                    onPress={() => setActiveCategory(item.id)}
                    // style={{backgroundColor: "#D4A574" }} 
                    className={`p-4 px-4 mr-5 rounded-full shadow ${isActive ? 'bg-[#D4A574]' : 'bg-[#EBEBEB]' } `}>
                      <Text className={`font-semibold ${isActive ? 'text-white' : 'text-black'} ` }>{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
                />

            </View>
                {/* coffee cards */}
                <View className="mt-5">
                <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={coffeeItems}
            renderItem={({item})=> <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width*0.63}
            slideStyle={{display: 'flex', alignItems: 'center'}}
          /> 
                </View>

        </SafeAreaView>

    </View>
   
  )
}


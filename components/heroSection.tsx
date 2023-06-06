import { Box, Flex, HStack, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {SearchIcon} from "@chakra-ui/icons"
import { Image } from '@chakra-ui/next-js'

function HeroImage({image, text}: {image: string, text: string}){
    return(

        <Flex width={[100,150,150,170]} height={150} direction="column" justifyContent="center" alignItems="center" gap={5}>
            <Image src={image}alt="image" width={150} height={150}/>  
            <Text>{text}</Text>
    </Flex>
    )
}

function HeroSection() {
  return (
    <Flex px={10} gap={20} wrap="wrap" justifyContent={["center","center","center","space-between"]}>
        <Flex direction="column" justifyContent="space-between" w={[500, 400 , 500]}>
            <Box>
                <Text fontSize="5xl" as='b'>Giving Your <Text as="span" color="red">Hunger</Text> A New Option</Text>
                <Text>Taste The Best Foods Available In The Town At FoodBourg and Enjoy The Tech Infused Environment</Text>
            </Box>
            <Flex w="350px" alignItems="center">
                <Input placeholder='Search Your Favourites Food And Cusines' variant='filled'/>
                <SearchIcon color="grey"/>
            </Flex>
        </Flex>
        <Flex direction={['column', 'column', 'row', 'row']} gap={[10,10,5,2]}>
            <HeroImage image='/ridersvg.png' text="Delivery"/>
            <HeroImage image='/takeawaysvg.png' text="Takwaway"/>
            <HeroImage image='/dinnersvg.png' text="Dining"/>

        </Flex>
    </Flex>
  )
}

export default HeroSection
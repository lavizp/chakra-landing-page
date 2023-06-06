import React from 'react'
import {Text, Flex, Box} from "@chakra-ui/react"

function ReasonComponent({title, description, gap, index}:{title: string, description: string, gap: boolean, index: number}){
    return (

        <Flex direction="column" gap={2} w={250} mt={gap? "20": "0px"}>
        <Box bg="red" color="white" rounded="100%" w={10} h={10} display="flex" justifyContent="center" alignItems="center"> 
            <Text>{index}</Text>
        </Box>
        <Text fontSize="lg" fontWeight="bold">{title}</Text>
        <Text color="grey">{description}</Text>
    </Flex>
        )
}

function WhySection() {
  return (
    <>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mt={20}>Why People Choose FoodBourg?</Text>
        <Text align="center" color="grey">{"Client's Most Popular Choice"}</Text>
        <Flex justifyContent="center" mt="10" gap="20" flexWrap="wrap">
            <ReasonComponent title="5,000+ Restaurants Menus" description="We are collaborating with numerous restaurants in your city to gather food in one location." index={1} gap={false}/>
            <ReasonComponent title="5,000+ Restaurants Menus" description="We are collaborating with numerous restaurants in your city to gather food in one location." index={2} gap={true}/>
            <ReasonComponent title="5,000+ Restaurants Menus" description="We are collaborating with numerous restaurants in your city to gather food in one location." index={3} gap={false}/>
            <ReasonComponent title="5,000+ Restaurants Menus" description="We are collaborating with numerous restaurants in your city to gather food in one location." index={4} gap={true}/>
            <ReasonComponent title="5,000+ Restaurants Menus" description="We are collaborating with numerous restaurants in your city to gather food in one location." index={5} gap={false}/>
            <ReasonComponent title="5,000+ Restaurants Menus" description="We are collaborating with numerous restaurants in your city to gather food in one location." index={6} gap={false}/>



        </Flex>
    </>
  )
}

export default WhySection
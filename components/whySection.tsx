import React from 'react'
import {Text, Flex, Box} from "@chakra-ui/react"

function ReasonComponent(){
    return (

        <Flex direction="column" gap={2} w={250}>
        <Box bg="red" color="white" rounded="100%" w={10} h={10} display="flex" justifyContent="center" alignItems="center"> 
            <Text>1</Text>
        </Box>
        <Text fontSize="lg" fontWeight="bold">5,000+ Restaurants Menus</Text>
        <Text color="grey">We are collaborating with numerous restaurants in your city to gather food in one location.</Text>
    </Flex>
        )
}

function WhySection() {
  return (
    <>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mt={20}>Why People Choose FoodBourg?</Text>
        <Text align="center" color="grey">{"Client's Most Popular Choice"}</Text>
        <Flex justifyContent="center" mt="10" gap="20" flexWrap="wrap">
            <ReasonComponent/>
            <ReasonComponent/>
            <ReasonComponent/>
            <ReasonComponent/>
            <ReasonComponent/>
            <ReasonComponent/>



        </Flex>
    </>
  )
}

export default WhySection
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <Flex justifyContent="space-between" px={10} mt={100} mb={10} flexWrap="wrap" gap={10}>
        <Flex direction="column" w={40} gap={5}>
            <Flex justifyContent="center" alignItems="center" gap={2}>

            <Image src="/logo.png" alt="logo" width={50} height={50}/>
            <Text color="red" fontSize="2xl">FoodBourg</Text>
            </Flex>
            <Text color="grey">
                FoodBourg is an Online Food Delivery Company rooted in the year 2022 A.D at Luxembourg.
            </Text>

        </Flex>
        <Flex direction="column">
            <Text fontWeight="bold" fontSize="lg">FOODBOURG</Text>
            <Text color="grey">About Us</Text>
            <Text color="grey">Available Areas</Text>
            <Text color="grey">Delivery Charges</Text>
            <Text color="grey">Blogs</Text>
            <Text color="grey">Terms and Conditions Us</Text>
            <Text color="grey">Privacy Policy</Text>

        </Flex>
        <Flex direction="column">
            <Text fontWeight="bold" fontSize="lg">GET HELP</Text>
            <Text color="grey">How to ORder?</Text>
            <Text color="grey">FAQs</Text>
            <Text color="grey">Contact Us</Text>
        </Flex>
        <Flex direction="column">
            <Text fontWeight="bold" fontSize="lg">QUICK LINKS</Text>
            <Text color="grey">Facebook</Text>
            <Text color="grey">Twitter</Text>
            <Text color="grey">Instagram</Text>
            <Text color="grey">Restaurants</Text>
        </Flex>
        <Flex direction="column" gap={2}>
            <Text fontWeight="bold" fontSize="lg">ADDRESS</Text>
            <Text color="grey">Kathmandu Mangalbazar</Text>
            <Image src="/appstore.png" alt="button" width={100} height={20}/>
            <Image src="/googleplay.png" alt="button" width={100} height={20}/>
        </Flex>
    </Flex>
  )
}

export default Footer
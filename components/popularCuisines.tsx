import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {TriangleDownIcon,StarIcon,SettingsIcon} from "@chakra-ui/icons"
function PopularCuisines() {
  return (
    <Flex direction="column" gap={2}>
    <Image src="/cuisine.png" height={200} width={200} alt="food"/>
    <Flex justifyContent="space-between">
        <Text fontWeight="bold">Mexican Food</Text>
        <Text color="red">$250</Text>
    </Flex>
    <Flex justifyContent="space-between">
        <Text fontSize="sm"><TriangleDownIcon color="red"/>Maitidevi Temple</Text>
    </Flex>
    <Button bg="red" color="white">Order Now</Button>
</Flex>
  )
}

export default PopularCuisines
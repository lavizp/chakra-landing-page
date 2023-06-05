import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {TriangleDownIcon,StarIcon,SettingsIcon} from "@chakra-ui/icons"

function NearbyRestaurants() {
  return (
    <Flex direction="column">
    <Image src="/restaurant.png" height={200} width={300} alt="food"/>
        <Text fontWeight="bold">Olive Cafe</Text>
    <Flex justifyContent="space-between">
        <Text fontSize="sm"><TriangleDownIcon color="orange"/>4.5(250)</Text>
        <Text fontSize="sm"><StarIcon color="red"/>500m Away</Text>

    </Flex>
</Flex>
  )
}

export default NearbyRestaurants
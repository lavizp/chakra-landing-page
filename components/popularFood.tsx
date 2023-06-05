import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {TriangleDownIcon,StarIcon,SettingsIcon} from "@chakra-ui/icons"

function PopularFood() {
  return (
    <Flex direction="column">
        <Image src="/foodplate.png" height={200} width={300} alt="food"/>
        <Flex justifyContent="space-between">
            <Text fontWeight="bold">Lotteria - 135 Sandiago</Text>
            <Text color="red">$399</Text>
        </Flex>
        <Flex justifyContent="space-between">
            <Text fontSize="sm"><TriangleDownIcon color="red"/>1.5km</Text>
            <Text fontSize="sm"><StarIcon color="orange"/>1.5km</Text>
            <Text fontSize="sm"><SettingsIcon color="red"/>1.5km</Text>

        </Flex>
    </Flex>
  )
}

export default PopularFood
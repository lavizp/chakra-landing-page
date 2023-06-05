import React from 'react'
import { Box, Text, Button, HStack } from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons"

function SideNavDelivery() {
  return (
    <Box width={550} px={10}>
      <Box>
        <Text>Open Now</Text>
        <Text>Free Delivery</Text>
      </Box>
      <Box pt={3}>
        <Text fontSize="2xl">Sort By</Text>
        <Button border="1px solid black" rounded="md" width={60} mt={5}>Newly Added</Button>
        <Button bg="red" color="white" rounded="md" width={60} mt={5}>Distance</Button>

      </Box>
      <Text fontSize="2xl">Restaurant Ratings</Text>
      <HStack gap={4}>
        <StarIcon color="orange"/>
        <StarIcon color="orange"/>
        <StarIcon color="orange"/>
        <StarIcon color="orange"/>
        <StarIcon color="orange"/>

      </HStack>
      

    </Box>
  )
}

export default SideNavDelivery
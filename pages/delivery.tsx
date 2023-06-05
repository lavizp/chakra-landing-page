import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Flex } from '@chakra-ui/react'
import SideNavDelivery from '@/components/sideNavDelivery'
import NearbyRestaurants from '@/components/nearbyRestaurants'

function Delivery() {
  return (
    <>
        <Navbar/>
        <Flex>
            <SideNavDelivery/>
            <Flex wrap="wrap" px={10} gap={5} justifyContent="space-between" mb={5}>
                <NearbyRestaurants/>
                <NearbyRestaurants/>
                <NearbyRestaurants/>
                <NearbyRestaurants/>
                <NearbyRestaurants/>
                <NearbyRestaurants/>
                <NearbyRestaurants/>
                <NearbyRestaurants/>
                <NearbyRestaurants/>

        </Flex>
        </Flex>
        <Footer/>
    </>
  )
}

export default Delivery
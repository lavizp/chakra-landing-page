
import { Box, Text, HStack, Flex, Image } from '@chakra-ui/react'
import React from 'react'

function OrderImage({image, text, gap, index}: {image: string, text: string, gap: boolean, index: number}){
    return(

        <Flex width={250} height={250} direction="column" justifyContent="center" alignItems="center" gap={5} mt={gap ? "100px" : "0px"}>
            <Image src={image}alt="image" width={200} height={200}/>  
            <Box border="2px dotted orange" rounded="100%" w={10} h={20} display="flex" justifyContent="center" alignItems="center">
                {index}
            </Box>
            <Text>{text}</Text>
    </Flex>
    )
}

function HowToOrderSection() {
  return (
    <Box my={10}>
        <Text align="center" fontSize="3xl" fontWeight="bold">How To Order?</Text>
        <Text align="center" color="grey">Follow These Steps</Text>
        <HStack mx={10} justifyContent="center" gap={10}>
            <OrderImage image="/map.png" text="Choose Your Location" gap={false} index={1}/>
            <OrderImage image="/restro.png" text="Choose Your Location" gap={true} index={2}/>
            <OrderImage image="/order.png" text="Choose Your Location" gap={false} index={3}/>
            <OrderImage image="/delivery.png" text="Choose Your Location" gap={true} index={4}/>

        </HStack>
        
    </Box>
  )
}

export default HowToOrderSection
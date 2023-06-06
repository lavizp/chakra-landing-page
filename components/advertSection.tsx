import { Flex, Text, Button, Box , Image} from '@chakra-ui/react'
import React from 'react'

function AdvertSection() {
  return (
    <Flex bg="black" rounded="md" mx={10} p={10} mt={20} justifyContent="space-between" alignItems="center" direction={['column', 'column', 'row', 'row']}>
        <Flex direction="column" gap={4}>
            <Text color="white" fontSize="4xl" as="b">
                Get Upto <Text as="span" color="red">50%</Text> Offer On Festival Season !
            </Text>
            <Text color="white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi eveniet voluptas ab delectus vel nostrum 
            </Text>
            <Button bg="red" w={200} color="white" rounded="2xl">
                Order Now
            </Button>

        </Flex>

            <Box position="relative" width="220px" height="220px" mt={[10,10,0,0]}>
                <Image src="/burger1.png" alt="Background" width="100%" height="100%" />
                <Box position="absolute" bottom={0} left={-10}>
                  <Image src="/burger2.png" alt="Overlay" width="150px" height="150px" />
                </Box>
                <Box position="absolute" top={0} right={0} bg="red" rounded="50%" p={2} w={20} h={20} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Text color="white" fontSize="xl">
                        50%
                    </Text>
                    <Text color="white" fontSize="xl">
                        Off
                    </Text>
                </Box>
            </Box>
    </Flex>
  )
}

export default AdvertSection
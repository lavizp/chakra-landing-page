import React, { ReactNode } from 'react'
import { Flex, Box, IconButton, Text, Menu, MenuButton, MenuList, MenuItem, Container, HStack, ButtonGroup, Button, useBreakpointValue, MenuDivider, Stack, useDisclosure, useColorModeValue, Link, Avatar } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
const Links = ['Delivery', 'Takeaway', 'Dining', "Log In"];
const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={href}>
      {children}
    </Link>
  );

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
    <>
    <Box px={10} mb={10}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src="/logo.png"
              />
            </MenuButton>
            <Text color="red" mx={2} fontSize='xl'>FoodBourg</Text>

          </Menu>
        </Flex>
        <Text color="grey">Select Location</Text>
        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link} href={link}>{link}</NavLink>
            ))}
                <Button bg="red" color="white">
                Start Odering
                </Button>
          </HStack>
        </HStack>
        
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} href={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>

  </>
  )
}

export default Navbar
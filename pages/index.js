import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	Flex,
	Heading,
	Text,
	Link,
	SimpleGrid,
	Spacer,
	Stack,
	Divider,
	Box,
} from '@chakra-ui/layout';
import { Collapse, Slide } from '@chakra-ui/transition';
import Head from 'next/head';
import { Card } from '../components/card';

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onToggle } = useDisclosure();
	const { isOpen2, onToggle2 } = useDisclosure();

	return (
		<>
			<Head>
				<title>Headphones E-Commerce Site</title>
			</Head>

			<div style={{ marginBottom: '4rem' }}>
				<Flex align="center" py="5" px="10" backgroundColor="teal.600">
					<Heading
						color={colorMode === 'light' ? '#fff' : '#000'}
						size="md"
					>
						Shop Headphones
					</Heading>
					<IconButton
						ml="4"
						onClick={onToggle}
						colorScheme="teal"
						backgroundColor="teal.600"
						icon={<HamburgerIcon />}
					/>
					<Spacer />
					<IconButton
						colorScheme="teal"
						backgroundColor="teal.500"
						onClick={toggleColorMode}
						icon={
							colorMode === 'light' ? <MoonIcon /> : <SunIcon />
						}
					/>
					<Button
						colorScheme="teal"
						backgroundColor="teal.500"
						ml="4"
					>
						View Cart
					</Button>
				</Flex>
				<Collapse in={isOpen} animateOpacity>
					<Stack
						spacing={['5', '5', '12', '20']}
						py="5"
						px="10"
						direction={['column', 'column', 'row']}
						borderBottom="1px"
						borderColor="#bdbdbd77"
					>
						{[
							'Recommended',
							'Latest',
							'Wired',
							'Wireless',
							'Gaming',
						].map((text) => (
							<Text
								fontWeight="bold"
								transition="0.2s ease"
								_hover={{
									transform: 'scale(1.2)',
									// fontWeight: 'bold',
									cursor: 'pointer',
								}}
							>
								{text}
							</Text>
						))}
						<Spacer />
						<Text
							fontWeight="bold"
							transition="0.2s ease"
							_hover={{
								transform: 'scale(1.2)',
								// fontWeight: 'bold',
								cursor: 'pointer',
							}}
						>
							Sort
						</Text>
					</Stack>
				</Collapse>
				<Flex
					direction="column"
					w="container.lg"
					px="12"
					mt="12"
					mx="auto"
				>
					<Heading size="lg" mb="6">
						Browse products:
					</Heading>
					<SimpleGrid columns={[1, 1, 1, 2, 2]} spacing={8}>
						<Card />
						<Card />
						<Card />
					</SimpleGrid>
					<Divider my="10" />
					<Heading size="lg" mb="6">
						More products:
					</Heading>
					<SimpleGrid columns={[1, 1, 1, 2, 2]} spacing={8}>
						<Card />
						<Card />
						<Card />
					</SimpleGrid>
					<Link color="blue.300" mt="6">
						See more
					</Link>
					<Button mt="12" onClick={onToggle2}>
						Terms and Conditions
					</Button>
					<Slide
						direction="bottom"
						in={isOpen2}
						style={{ zIndex: 10 }}
					>
						<Box
							p="40px"
							color="white"
							mt="4"
							bg="teal.500"
							rounded="md"
							shadow="md"
						>
							some text
						</Box>
					</Slide>
				</Flex>
			</div>
		</>
	);
}

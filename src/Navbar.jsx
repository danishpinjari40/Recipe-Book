import { useEffect, useState } from 'react';
import {
	useColorMode,
	Flex,
	Button,
	IconButton,
	Input,
	Box,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
//* navbar edit from App.jsx
import axios from 'axios';

import Recipe from './Recipe';
import RecipeCard from './Recipe';
import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import GoToTop from './GoToTop';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	const [displayMenu, setDisplayMenu] = useState(false);

	const toggleMenu = () => {
		setDisplayMenu(!displayMenu);
	};

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			py={2}
			px={4}
			bg={isDark ? 'gray.900' : '#E9D8FD'}
			color={isDark ? 'white' : '#6B46C1'}
			position="fixed"
			top={0}
			left={0}
			right={0}
			zIndex={100}
		>
			{/* Logo */}
			<Flex align="center">
				<Button
					as="a"
					href="/"
					variant="ghost"
					fontSize="2xl"
					fontWeight="bold"
					color={isDark ? '#4CAF50' : '#6B46C1'}
				>
					RecipeRadar
				</Button>
			</Flex>

			{/* Desktop Menu */}
			<Flex align="center" display={['none', 'none', 'flex', 'flex']}>
				<Button as="a" href="/" variant="ghost" mx={2}>
					Home
				</Button>
				<Button as="a" href="/blog" variant="ghost" mx={2}>
					Blog
				</Button>
			</Flex>

			{/* Search Input and Hamburger Menu */}
			<Flex align="center">
				<Flex display={['flex', 'flex', 'none', 'none']}>
					<IconButton
						aria-label="Toggle Menu"
						size="md"
						icon={displayMenu ? <CloseIcon /> : <HamburgerIcon />}
						onClick={toggleMenu}
						borderRadius="full"
						bg={isDark ? 'gray.900' : '#E9D8FD'}
						color={isDark ? 'white' : '#6B46C1'}
						_hover={{
							bg: isDark ? 'gray.700' : '#D1BCF9',
						}}
						_active={{
							bg: isDark ? 'gray.800' : '#A893E9',
						}}
					/>
				</Flex>
				<IconButton
					aria-label="Toggle Color Mode"
					size="md"
					icon={isDark ? <SunIcon /> : <MoonIcon />}
					onClick={toggleColorMode}
					ml={2}
				/>
			</Flex>

			{/* Mobile Menu */}
			<Flex
				align="center"
				display={displayMenu ? 'flex' : ['none', 'none']}
				flexDir="column"
				position="fixed"
				top={16}
				right={0}
				left={0}
				zIndex={99}
				bg={isDark ? 'gray.900' : '#E9D8FD'}
				color={isDark ? 'white' : '#6B46C1'}
			>
				<Button as="a" href="/" variant="ghost" my={2}>
					Home
				</Button>
				<Button as="a" href="/blog" variant="ghost" my={2}>
					Blog
				</Button>
			</Flex>
		</Flex>
	);
};

export default Navbar;

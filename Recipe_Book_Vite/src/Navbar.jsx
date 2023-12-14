// import React from 'react';
// import {
// 	Box,
// 	Flex,
// 	IconButton,
// 	Input,
// 	Link,
// 	Spacer,
// 	Switch,
// 	useColorMode,
// 	useMediaQuery,
// 	VStack,
// 	Collapse,
// 	StackDivider,
// 	Text,
// } from '@chakra-ui/react';
// import {
// 	HamburgerIcon,
// 	SearchIcon,
// 	SunIcon,
// 	MoonIcon,
// 	ChevronDownIcon,
// } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)');
// 	const [isMenuOpen, setMenuOpen] = React.useState(false);

// 	const handleToggleMenu = () => {
// 		setMenuOpen(!isMenuOpen);
// 	};

// 	const closeMenu = () => {
// 		setMenuOpen(false);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			padding={4}
// 			bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
// 			color={colorMode === 'light' ? 'black' : 'white'}
// 		>
// 			{/* Logo */}
// 			<Link href="/" fontWeight="bold">
// 				Logo
// 			</Link>

// 			{/* Hamburger Menu (Mobile) */}
// 			{!isLargerThanMobile && (
// 				<IconButton
// 					icon={<HamburgerIcon />}
// 					variant="ghost"
// 					size="md"
// 					aria-label="Menu"
// 					onClick={handleToggleMenu}
// 				/>
// 			)}

// 			{/* Search Section */}
// 			{isLargerThanMobile && (
// 				<Input
// 					type="text"
// 					placeholder="Search..."
// 					size="md"
// 					variant="filled"
// 					ml={4}
// 				/>
// 			)}

// 			{/* Navigation Sections */}
// 			<Flex align="center">
// 				{/* Home */}
// 				{isLargerThanMobile && (
// 					<Link href="/" mr={4} onClick={closeMenu}>
// 						Home
// 					</Link>
// 				)}

// 				{/* Wishlist */}
// 				{isLargerThanMobile && (
// 					<Link href="/wishlist" mr={4} onClick={closeMenu}>
// 						Wishlist
// 					</Link>
// 				)}

// 				{/* Profile */}
// 				{isLargerThanMobile && (
// 					<Link href="/profile" mr={4} onClick={closeMenu}>
// 						Profile
// 					</Link>
// 				)}

// 				{/* Login and Signup Sections */}
// 				{isLargerThanMobile ? (
// 					<>
// 						<Link href="/login" mr={2} onClick={closeMenu}>
// 							Login
// 						</Link>
// 						<Link href="/signup" mr={4} onClick={closeMenu}>
// 							Signup
// 						</Link>
// 					</>
// 				) : (
// 					<IconButton
// 						icon={<ChevronDownIcon />}
// 						variant="ghost"
// 						size="md"
// 						aria-label="Login/Signup"
// 						onClick={handleToggleMenu}
// 						ml={2}
// 					/>
// 				)}

// 				{/* Dark Mode Support */}
// 				<Flex align="center">
// 					{colorMode === 'light' ? (
// 						<MoonIcon boxSize={4} mr={2} />
// 					) : (
// 						<SunIcon boxSize={4} mr={2} />
// 					)}
// 					<Switch
// 						colorScheme="teal"
// 						size="md"
// 						isChecked={colorMode === 'dark'}
// 						onChange={toggleColorMode}
// 					/>
// 				</Flex>
// 			</Flex>

// 			{/* Mobile Menu */}
// 			{!isLargerThanMobile && (
// 				<Collapse in={isMenuOpen} animateOpacity>
// 					<VStack
// 						spacing={2}
// 						divider={<StackDivider borderColor="gray.300" />}
// 						mt={2}
// 						align="stretch"
// 					>
// 						<Link href="/" onClick={closeMenu}>
// 							Home
// 						</Link>
// 						<Link href="/wishlist" onClick={closeMenu}>
// 							Wishlist
// 						</Link>
// 						<Link href="/profile" onClick={closeMenu}>
// 							Profile
// 						</Link>
// 						<Link href="/login" onClick={closeMenu}>
// 							Login
// 						</Link>
// 						<Link href="/signup" onClick={closeMenu}>
// 							Signup
// 						</Link>
// 					</VStack>
// 				</Collapse>
// 			)}
// 		</Flex>
// 	);
// };

// export default Navbar;

// import React from 'react';
// import {
// 	Box,
// 	Flex,
// 	IconButton,
// 	Input,
// 	Link,
// 	Spacer,
// 	Switch,
// 	useColorMode,
// 	useMediaQuery,
// 	VStack,
// 	Collapse,
// 	StackDivider,
// 	Text,
// } from '@chakra-ui/react';
// import {
// 	HamburgerIcon,
// 	SearchIcon,
// 	SunIcon,
// 	MoonIcon,
// 	ChevronDownIcon,
// } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)');
// 	const [isMenuOpen, setMenuOpen] = React.useState(false);

// 	const handleToggleMenu = () => {
// 		setMenuOpen(!isMenuOpen);
// 	};

// 	const closeMenu = () => {
// 		setMenuOpen(false);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			padding={4}
// 			bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
// 			color={colorMode === 'light' ? 'black' : 'white'}
// 		>
// 			{/* Logo */}
// 			<Link href="/" fontWeight="bold">
// 				Logo
// 			</Link>

// 			{/* Navigation Sections */}
// 			<Flex align="center">
// 				{/* Search Section */}
// 				{isLargerThanMobile && (
// 					<Input
// 						type="text"
// 						placeholder="Search..."
// 						size="md"
// 						variant="filled"
// 						ml={4}
// 					/>
// 				)}

// 				{/* Home */}
// 				{isLargerThanMobile && (
// 					<Link href="/" mr={4} onClick={closeMenu}>
// 						Home
// 					</Link>
// 				)}

// 				{/* Wishlist */}
// 				{isLargerThanMobile && (
// 					<Link href="/wishlist" mr={4} onClick={closeMenu}>
// 						Wishlist
// 					</Link>
// 				)}

// 				{/* Profile */}
// 				{isLargerThanMobile && (
// 					<Link href="/profile" mr={4} onClick={closeMenu}>
// 						Profile
// 					</Link>
// 				)}

// 				{/* Dark Mode Support */}
// 				<Flex align="center">
// 					{colorMode === 'light' ? (
// 						<MoonIcon boxSize={4} mr={2} />
// 					) : (
// 						<SunIcon boxSize={4} mr={2} />
// 					)}
// 					<Switch
// 						colorScheme="teal"
// 						size="md"
// 						isChecked={colorMode === 'dark'}
// 						onChange={toggleColorMode}
// 					/>
// 				</Flex>

// 				{/* Hamburger Menu (Mobile) */}
// 				{!isLargerThanMobile && (
// 					<IconButton
// 						icon={<HamburgerIcon />}
// 						variant="ghost"
// 						size="md"
// 						aria-label="Menu"
// 						onClick={handleToggleMenu}
// 						ml={4}
// 					/>
// 				)}
// 			</Flex>

// 			{/* Mobile Menu */}
// 			{!isLargerThanMobile && (
// 				<Collapse

//                 in={isMenuOpen} animateOpacity>
// 					<VStack
//                     border="1px solid red"
// 						spacing={2}
// 						divider={<StackDivider borderColor="gray.300" />}
// 						mt={2}
// 						align="stretch"

// 					>
// 						<Link href="/" onClick={closeMenu}>
// 							Home
// 						</Link>
// 						<Link href="/wishlist" onClick={closeMenu}>
// 							Wishlist
// 						</Link>
// 						<Link href="/profile" onClick={closeMenu}>
// 							Profile
// 						</Link>
// 						<Link href="/login" onClick={closeMenu}>
// 							Login
// 						</Link>
// 						<Link href="/signup" onClick={closeMenu}>
// 							Signup
// 						</Link>
// 					</VStack>
// 				</Collapse>
// 			)}
// 		</Flex>
// 	);
// };

// export default Navbar;

// import React from 'react';
// import {
// 	Box,
// 	Flex,
// 	IconButton,
// 	Input,
// 	Link,
// 	Spacer,
// 	Switch,
// 	useColorMode,
// 	useMediaQuery,
// 	VStack,
// 	Collapse,
// 	StackDivider,
// 	Text,
// } from '@chakra-ui/react';
// import {
// 	HamburgerIcon,
// 	SearchIcon,
// 	SunIcon,
// 	MoonIcon,
// 	ChevronDownIcon,
// } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)');
// 	const [isMenuOpen, setMenuOpen] = React.useState(false);

// 	const handleToggleMenu = () => {
// 		setMenuOpen(!isMenuOpen);
// 	};

// 	const closeMenu = () => {
// 		setMenuOpen(false);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			padding={4}
// 			bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
// 			color={colorMode === 'light' ? 'black' : 'white'}
// 		>
// 			{/* Logo */}
// 			<Link href="/" fontWeight="bold">
// 				Logo
// 			</Link>

// 			{/* Navigation Sections */}
// 			<Flex align="center">
// 				{/* Search Section */}
// 				{(isLargerThanMobile || isMenuOpen) && (
// 					<Input
// 						type="text"
// 						placeholder="Search..."
// 						size="md"
// 						variant="filled"
// 						ml={4}
// 					/>
// 				)}

// 				{/* Home */}
// 				{isLargerThanMobile && (
// 					<Link href="/" mr={4} onClick={closeMenu}>
// 						Home
// 					</Link>
// 				)}

// 				{/* Wishlist */}
// 				{isLargerThanMobile && (
// 					<Link href="/wishlist" mr={4} onClick={closeMenu}>
// 						Wishlist
// 					</Link>
// 				)}

// 				{/* Profile */}
// 				{isLargerThanMobile && (
// 					<Link href="/profile" mr={4} onClick={closeMenu}>
// 						Profile
// 					</Link>
// 				)}

// 				{/* Dark Mode Support */}
// 				<Flex align="center">
// 					{colorMode === 'light' ? (
// 						<MoonIcon boxSize={4} mr={2} />
// 					) : (
// 						<SunIcon boxSize={4} mr={2} />
// 					)}
// 					<Switch
// 						colorScheme="teal"
// 						size="md"
// 						isChecked={colorMode === 'dark'}
// 						onChange={toggleColorMode}
// 					/>
// 				</Flex>

// 				{/* Hamburger Menu (Mobile) */}
// 				{!isLargerThanMobile && (
// 					<IconButton
// 						icon={<HamburgerIcon />}
// 						variant="ghost"
// 						size="md"
// 						aria-label="Menu"
// 						onClick={handleToggleMenu}
// 						ml={4}
// 					/>
// 				)}
// 			</Flex>

// 			{/* Mobile Menu */}
// 			{!isLargerThanMobile && (
// 				<Collapse in={isMenuOpen} animateOpacity>
// 					<VStack
// 						spacing={2}
// 						divider={<StackDivider borderColor="gray.300" />}
// 						mt={2}
// 						align="stretch"
// 					>
// 						{/* Search Section in Mobile Menu */}
// 						<Input
// 							type="text"
// 							placeholder="Search..."
// 							size="md"
// 							variant="filled"
// 						/>

// 						{/* Home */}
// 						<Link href="/" onClick={closeMenu}>
// 							Home
// 						</Link>

// 						{/* Wishlist */}
// 						<Link href="/wishlist" onClick={closeMenu}>
// 							Wishlist
// 						</Link>

// 						{/* Profile */}
// 						<Link href="/profile" onClick={closeMenu}>
// 							Profile
// 						</Link>

// 						{/* Login */}
// 						<Link href="/login" onClick={closeMenu}>
// 							Login
// 						</Link>

// 						{/* Signup */}
// 						<Link href="/signup" onClick={closeMenu}>
// 							Signup
// 						</Link>
// 					</VStack>
// 				</Collapse>
// 			)}
// 		</Flex>
// 	);
// };

// export default Navbar;

// import React from 'react';
// import {
// 	Box,
// 	Flex,
// 	IconButton,
// 	Input,
// 	Link,
// 	Spacer,
// 	Switch,
// 	useColorMode,
// 	useMediaQuery,
// 	VStack,
// 	Collapse,
// 	StackDivider,
// 	Text,
// } from '@chakra-ui/react';
// import {
// 	HamburgerIcon,
// 	SearchIcon,
// 	SunIcon,
// 	MoonIcon,
// 	ChevronDownIcon,
// } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)');
// 	const [isMenuOpen, setMenuOpen] = React.useState(false);

// 	const handleToggleMenu = () => {
// 		setMenuOpen(!isMenuOpen);
// 	};

// 	const closeMenu = () => {
// 		setMenuOpen(false);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			padding={4}
// 			bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
// 			color={colorMode === 'light' ? 'black' : 'white'}
// 		>
// 			{/* Logo */}
// 			<Link href="/" fontWeight="bold">
// 				Logo
// 			</Link>

// 			{/* Navigation Sections */}
// 			<Flex align="center">
// 				{/* Search Section */}
// 				{(isLargerThanMobile) && (
// 					<Input
//                     border='1px solid red'
// 						type="text"
// 						placeholder="Search..."
// 						size="md"
// 						variant="filled"
// 						// ml={10}

//                         display='flex'
//                         mr={30}
// 					/>
// 				)}

// 				{/* Home */}
// 				{isLargerThanMobile && (
// 					<Link href="/" mr={10} onClick={closeMenu}>
// 						Home
// 					</Link>
// 				)}

// 				{/* Wishlist */}
// 				{isLargerThanMobile && (
// 					<Link href="/wishlist" mr={10} onClick={closeMenu}>
// 						Wishlist
// 					</Link>
// 				)}

// 				{/* Profile */}
// 				{isLargerThanMobile && (
// 					<Link href="/profile" mr={10} onClick={closeMenu}>
// 						Profile
// 					</Link>
// 				)}

// 				{/* Dark Mode Support */}
// 				<Flex align="center">
// 					{colorMode === 'light' ? (
// 						<MoonIcon boxSize={4} mr={2} />
// 					) : (
// 						<SunIcon boxSize={4} mr={2} />
// 					)}
// 					<Switch
// 						colorScheme="teal"
// 						size="md"
// 						isChecked={colorMode === 'dark'}
// 						onChange={toggleColorMode}
// 					/>
// 				</Flex>

// 				{/* Hamburger Menu (Mobile) */}
// 				{!isLargerThanMobile && (
// 					<IconButton

// 						icon={<HamburgerIcon />}
// 						variant="ghost"
// 						size="md"
// 						aria-label="Menu"
// 						onClick={handleToggleMenu}
// 						ml={4}
// 					/>
// 				)}

// 				{/* Mobile Menu */}
// 				{!isLargerThanMobile && isMenuOpen && (
// 					<Box
//                     border="1px solid red"
//                     position='relative'
//                     top={80}
//                     >
// 						<VStack
// 							spacing={2}
// 							divider={<StackDivider borderColor="gray.300" />}
// 							align="stretch"
// 						>
// 							{/* Search Section in Mobile Menu */}
// 							<Input
// 								type="text"
// 								placeholder="Search..."
// 								size="md"
// 								variant="filled"
// 							/>

// 							{/* Home */}
// 							<Link href="/" onClick={closeMenu}>
// 								Home
// 							</Link>

// 							{/* Wishlist */}
// 							<Link href="/wishlist" onClick={closeMenu}>
// 								Wishlist
// 							</Link>

// 							{/* Profile */}
// 							<Link href="/profile" onClick={closeMenu}>
// 								Profile
// 							</Link>

// 							{/* Login */}
// 							<Link href="/login" onClick={closeMenu}>
// 								Login
// 							</Link>

// 							{/* Signup */}
// 							<Link href="/signup" onClick={closeMenu}>
// 								Signup
// 							</Link>
// 						</VStack>
// 					</Box>
// 				)}
// 			</Flex>
// 		</Flex>
// 	);
// };

// export default Navbar;

// import { useState } from 'react';
// import {
// 	useColorMode,
// 	Switch,
// 	Flex,
// 	Button,
// 	IconButton,
//     Text
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const isDark = colorMode === 'dark';
// 	const [display, changeDisplay] = useState('none');
// 	return (
// 		<Flex>
// 			<Flex position="fixed" top="1rem" right="1rem" align="center">
// 				{/* Desktop */}
// 				<Flex display={['none', 'none', 'flex', 'flex']}>
// 					<Text href="/" passHref>
// 						<Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
// 							Home
// 						</Button>
// 					</Text>

// 					<Text href="/about" passHref>
// 						<Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
// 							About
// 						</Button>
// 					</Text>

// 					<Text href="/contact" passHref>
// 						<Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
// 							Contact
// 						</Button>
// 					</Text>
// 				</Flex>

// 				{/* Mobile */}
// 				<IconButton
// 					aria-label="Open Menu"
// 					size="lg"
// 					mr={2}
// 					icon={<HamburgerIcon />}
// 					onClick={() => changeDisplay('flex')}
// 					display={['flex', 'flex', 'none', 'none']}
// 				/>
// 				<Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
// 			</Flex>

// 			{/* Mobile Content */}
// 			<Flex
// 				w="100vw"
// 				display={display}
// 				bgColor="gray.50"
// 				zIndex={20}
// 				h="100vh"
// 				pos="fixed"
// 				top="0"
// 				left="0"
// 				overflowY="auto"
// 				flexDir="column"
// 			>
// 				<Flex justify="flex-end">
// 					<IconButton
// 						mt={2}
// 						mr={2}
// 						aria-label="Open Menu"
// 						size="lg"
// 						icon={<CloseIcon />}
// 						onClick={() => changeDisplay('none')}
// 					/>
// 				</Flex>

// 				<Flex flexDir="column" align="center">
// 					<Text href="/" passHref>
// 						<Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
// 							Home
// 						</Button>
// 					</Text>

// 					<Text href="/about" passHref>
// 						<Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
// 							About
// 						</Button>
// 					</Text>

// 					<Text href="/contact" passHref>
// 						<Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
// 							Contact
// 						</Button>
// 					</Text>
// 				</Flex>
// 			</Flex>
// 		</Flex>
// 	);
// };
// export default Navbar;

// import React, { useState } from 'react';
// import {
// 	Box,
// 	Flex,
// 	HStack,
// 	IconButton,
// 	useDisclosure,
// 	Drawer,
// 	DrawerOverlay,
// 	DrawerContent,
// 	DrawerCloseButton,
// 	DrawerBody,
// 	Text,
// 	Link,
// 	Input,
// 	Switch,
// } from '@chakra-ui/react';
// import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { isOpen, onOpen, onClose } = useDisclosure();
// 	const [isDarkMode, setIsDarkMode] = useState(false);

// 	const handleDarkModeToggle = () => {
// 		setIsDarkMode(!isDarkMode);
// 	};

// 	return (
// 		<Box bg={isDarkMode ? 'gray.800' : 'gray.100'} py="2" px="4">
// 			<Flex justify="space-between" align="center">
// 				<Text
// 					fontWeight="bold"
// 					fontSize="lg"
// 					color={isDarkMode ? 'white' : 'black'}
// 				>
// 					Aravind
// 				</Text>
// 				<HStack spacing="4">
// 					<Input
// 						type="text"
// 						placeholder="Search"
// 						borderRadius="2rem"
// 						padding="0.5rem"
// 						fontSize="sm"
// 					/>
// 					<IconButton
// 						aria-label="Toggle dark mode"
// 						icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
// 						onClick={handleDarkModeToggle}
// 					/>
// 					<IconButton
// 						aria-label="Toggle navigation"
// 						icon={<HamburgerIcon />}
// 						display={{ base: 'block', md: 'none' }}
// 						onClick={onOpen}
// 					/>
// 				</HStack>
// 				<HStack display={{ base: 'none', md: 'flex' }} spacing="4">
// 					<Text
// 						as={Link}
// 						to="/"
// 						exact
// 						activeClassName="active"
// 						color={isDarkMode ? 'gray.200' : 'gray.700'}
// 						_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 					>
// 						Home
// 					</Text>
// 					<Text
// 						as={Link}
// 						to="/blog"
// 						activeClassName="active"
// 						color={isDarkMode ? 'gray.200' : 'gray.700'}
// 						_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 					>
// 						Blog
// 					</Text>
// 					<Text
// 						as={Link}
// 						to="/journey"
// 						activeClassName="active"
// 						color={isDarkMode ? 'gray.200' : 'gray.700'}
// 						_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 					>
// 						Journey
// 					</Text>
// 					<Text
// 						as={Link}
// 						to="/tools"
// 						activeClassName="active"
// 						color={isDarkMode ? 'gray.200' : 'gray.700'}
// 						_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 					>
// 						Tools
// 					</Text>
// 					<Text
// 						as={Link}
// 						to="/contact"
// 						activeClassName="active"
// 						color={isDarkMode ? 'gray.200' : 'gray.700'}
// 						_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 					>
// 						Contact
// 					</Text>
// 				</HStack>
// 			</Flex>
// 			<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
// 				<DrawerOverlay />
// 				<DrawerContent>
// 					<DrawerCloseButton />
// 					<DrawerBody>
// 						<Flex direction="column" alignItems="flex-start">
// 							{/* Drawer links */}
// 							<Text
// 								as={Link}
// 								to="/"
// 								exact
// 								activeClassName="active"
// 								color={isDarkMode ? 'gray.200' : 'gray.700'}
// 								_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 								mb="2"
// 							>
// 								Home
// 							</Text>
// 							<Text
// 								as={Link}
// 								to="/blog"
// 								activeClassName="active"
// 								color={isDarkMode ? 'gray.200' : 'gray.700'}
// 								_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 								mb="2"
// 							>
// 								Blog
// 							</Text>
// 							<Text
// 								as={Link}
// 								to="/journey"
// 								activeClassName="active"
// 								color={isDarkMode ? 'gray.200' : 'gray.700'}
// 								_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 								mb="2"
// 							>
// 								Journey
// 							</Text>
// 							<Text
// 								as={Link}
// 								to="/tools"
// 								activeClassName="active"
// 								color={isDarkMode ? 'gray.200' : 'gray.700'}
// 								_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 								mb="2"
// 							>
// 								Tools
// 							</Text>
// 							<Text
// 								as={Link}
// 								to="/contact"
// 								activeClassName="active"
// 								color={isDarkMode ? 'gray.200' : 'gray.700'}
// 								_hover={{ color: isDarkMode ? 'gray.300' : 'gray.800' }}
// 								mb="2"
// 							>
// 								Contact
// 							</Text>
// 						</Flex>
// 					</DrawerBody>
// 				</DrawerContent>
// 			</Drawer>
// 		</Box>
// 	);
// };

// export default Navbar;

// import { useState } from 'react';
// import {
// 	useColorMode,
// 	Switch,
// 	Flex,
// 	Button,
// 	IconButton,
// 	Text,
// 	Input,
// 	Box,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const isDark = colorMode === 'dark';
// 	const [display, changeDisplay] = useState(false);

// 	const toggleMobileMenu = () => {
// 		changeDisplay(!display);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			wrap="wrap"
// 			py={2}
// 			px={4}
// 			bg={isDark ? 'gray.900' : 'gray.100'}
// 			color={isDark ? 'white' : 'black'}
// 			position="fixed"
// 			w="100%"
// 			zIndex={100}
// 		>
// 			<Flex align="center">
// 				<Text as="a" href="/" fontSize="2xl" fontWeight="bold">
// 					Aravind
// 				</Text>
// 			</Flex>

// 			<Box display={['block', 'block', 'none', 'none']}>
// 				<IconButton
// 					aria-label="Open Menu"
// 					size="md"
// 					icon={<HamburgerIcon />}
// 					onClick={toggleMobileMenu}
// 				/>
// 			</Box>

// 			<Flex
// 				align={['flex-start', 'flex-start', 'center', 'center']}
// 				direction={['column', 'column', 'row', 'row']}
// 				display={display ? 'flex' : ['none', 'none', 'flex', 'flex']}
// 				width={['full', 'full', 'auto', 'auto']}
// 				flexGrow={1}
// 			>
// 				<Text href="/" passHref>
// 					<Button as="a" variant="ghost" aria-label="Home" my={2} mx={2}>
// 						Home
// 					</Button>
// 				</Text>

// 				<Text href="/blog" passHref>
// 					<Button as="a" variant="ghost" aria-label="Blog" my={2} mx={2}>
// 						Blog
// 					</Button>
// 				</Text>

// 				<Text href="/journey" passHref>
// 					<Button as="a" variant="ghost" aria-label="Journey" my={2} mx={2}>
// 						Journey
// 					</Button>
// 				</Text>

// 				<Text href="/tools" passHref>
// 					<Button as="a" variant="ghost" aria-label="Tools" my={2} mx={2}>
// 						Tools
// 					</Button>
// 				</Text>

// 				<Text href="/contact" passHref>
// 					<Button as="a" variant="ghost" aria-label="Contact" my={2} mx={2}>
// 						Contact
// 					</Button>
// 				</Text>
// 			</Flex>

// 			<Flex align="center">
// 				<Input
// 					type="text"
// 					placeholder="Search"
// 					size="sm"
// 					borderRadius="md"
// 					mr={2}
// 				/>
// 				<Switch
// 					colorScheme="green"
// 					isChecked={isDark}
// 					onChange={toggleColorMode}
// 				/>
// 			</Flex>
// 		</Flex>
// 	);
// };

// export default Navbar;

// import { useState } from 'react';
// import {
// 	useColorMode,
// 	Flex,
// 	Button,
// 	IconButton,
// 	Input,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const isDark = colorMode === 'dark';
// 	const [displayMenu, setDisplayMenu] = useState(false);

// 	const toggleMenu = () => {
// 		setDisplayMenu(!displayMenu);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			py={2}
// 			px={4}
// 			bg={isDark ? 'gray.900' : 'gray.100'}
// 			color={isDark ? 'white' : 'black'}
// 			position="fixed"
// 			top={0}
// 			left={0}
// 			right={0}
// 			zIndex={100}
// 		>
// 			<Flex align="center">
// 				<Button
// 					as="a"
// 					href="/"
// 					variant="ghost"
// 					fontSize="2xl"
// 					fontWeight="bold"
// 				>
// 					Aravind
// 				</Button>
// 			</Flex>

// 			<Flex align="center">
// 				<Input
// 					type="text"
// 					placeholder="Search"
// 					size="sm"
// 					borderRadius="md"
// 					mr={2}
// 				/>
// 				<IconButton
// 					aria-label="Toggle Menu"
// 					size="md"
// 					icon={displayMenu ? <CloseIcon /> : <HamburgerIcon />}
// 					onClick={toggleMenu}
// 				/>
// 				<IconButton
// 					aria-label="Toggle Color Mode"
// 					size="md"
// 					icon={isDark ? <SunIcon /> : <MoonIcon />}
// 					onClick={toggleColorMode}
// 				/>
// 			</Flex>

// 			<Flex
// 				align="center"
// 				display={displayMenu ? 'flex' : ['none', 'none', 'flex', 'flex']}
// 			>
// 				<Button as="a" href="/" variant="ghost" mx={2}>
// 					Home
// 				</Button>
// 				<Button as="a" href="/blog" variant="ghost" mx={2}>
// 					Blog
// 				</Button>
// 				<Button as="a" href="/journey" variant="ghost" mx={2}>
// 					Journey
// 				</Button>
// 				<Button as="a" href="/tools" variant="ghost" mx={2}>
// 					Tools
// 				</Button>
// 				<Button as="a" href="/contact" variant="ghost" mx={2}>
// 					Contact
// 				</Button>
// 			</Flex>
// 		</Flex>
// 	);
// };

// export default Navbar;

// import { useState } from 'react';
// import {
// 	useColorMode,
// 	Flex,
// 	Button,
// 	IconButton,
// 	Input,
// 	Box,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const isDark = colorMode === 'dark';
// 	const [displayMenu, setDisplayMenu] = useState(false);

// 	const toggleMenu = () => {
// 		setDisplayMenu(!displayMenu);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			py={2}
// 			px={4}
// 			bg={isDark ? 'gray.900' : '#B2F5EA'}
// 			color={isDark ? 'white' : '#E9D8FD'}
// 			position="fixed"
// 			top={0}
// 			left={0}
// 			right={0}
// 			zIndex={100}
// 		>
// 			<Flex align="center">
// 				<Button
// 					as="a"
// 					href="/"
// 					variant="ghost"
// 					fontSize="2xl"
// 					fontWeight="bold"
// 				>
// 					Aravind
// 				</Button>
// 			</Flex>

// 			<Flex align="center">
// 				<Input
// 					type="text"
// 					placeholder="Search"
// 					size="sm"
// 					borderRadius="md"
// 					mr={2}
// 				/>
// 				<Flex display={['flex', 'flex', 'none', 'none']}>
// 					<IconButton
// 						aria-label="Toggle Menu"
// 						size="md"
// 						icon={displayMenu ? <CloseIcon /> : <HamburgerIcon />}
// 						onClick={toggleMenu}
// 						borderRadius="full"
// 						bg={isDark ? 'gray.900' : '#B2F5EA'}
// 						color={isDark ? 'white' : '#E9D8FD'}
// 						_hover={{
// 							bg: isDark ? 'gray.700' : '#AED4F7',
// 						}}
// 						_active={{
// 							bg: isDark ? 'gray.800' : '#8CC7F0',
// 						}}
// 					/>
// 				</Flex>
// 				<IconButton
// 					aria-label="Toggle Color Mode"
// 					size="md"
// 					icon={isDark ? <SunIcon /> : <MoonIcon />}
// 					onClick={toggleColorMode}
// 					ml={2}
// 				/>
// 			</Flex>

// 			<Flex
// 				align="center"
// 				display={displayMenu ? 'flex' : ['none', 'none', 'flex', 'flex']}
// 				flexDir="column"
// 				position="fixed"
// 				top={16}
// 				right={0}
// 				left={0}
// 				zIndex={99}
// 				bg={isDark ? 'gray.900' : '#B2F5EA'}
// 				color={isDark ? 'white' : '#E9D8FD'}
// 			>
// 				<Button as="a" href="/" variant="ghost" my={2}>
// 					Home
// 				</Button>
// 				<Button as="a" href="/blog" variant="ghost" my={2}>
// 					Blog
// 				</Button>
// 				<Button as="a" href="/journey" variant="ghost" my={2}>
// 					Journey
// 				</Button>
// 				<Button as="a" href="/tools" variant="ghost" my={2}>
// 					Tools
// 				</Button>
// 				<Button as="a" href="/contact" variant="ghost" my={2}>
// 					Contact
// 				</Button>
// 			</Flex>
// 		</Flex>
// 	);
// };

// export default Navbar;

// import { useState } from 'react';
// import {
// 	useColorMode,
// 	Flex,
// 	Button,
// 	IconButton,
// 	Input,
// 	Box,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

// const Navbar = () => {
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const isDark = colorMode === 'dark';
// 	const [displayMenu, setDisplayMenu] = useState(false);

// 	const toggleMenu = () => {
// 		setDisplayMenu(!displayMenu);
// 	};

// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			py={2}
// 			px={4}
// 			bg={isDark ? 'gray.900' : '#E9D8FD'}
// 			color={isDark ? 'white' : '#6B46C1'}
// 			position="fixed"
// 			top={0}
// 			left={0}
// 			right={0}
// 			zIndex={100}
// 		>
// 			<Flex align="center">
// 				<Button
// 					as="a"
// 					href="/"
// 					variant="ghost"
// 					fontSize="2xl"
// 					fontWeight="bold"
// 				>
// 					Aravind
// 				</Button>
// 			</Flex>

// 			<Flex align="center" display={['none', 'none', 'flex', 'flex']}>
// 				<Button as="a" href="/" variant="ghost" mx={2}>
// 					Home
// 				</Button>
// 				<Button as="a" href="/blog" variant="ghost" mx={2}>
// 					Blog
// 				</Button>
// 			</Flex>

// 			<Flex align="center">
// 				<Input
// 					type="text"
// 					placeholder="Search"
// 					size="sm"
// 					borderRadius="md"
// 					mr={2}
// 				/>
// 				<Flex display={['flex', 'flex', 'none', 'none']}>
// 					<IconButton
// 						aria-label="Toggle Menu"
// 						size="md"
// 						icon={displayMenu ? <CloseIcon /> : <HamburgerIcon />}
// 						onClick={toggleMenu}
// 						borderRadius="full"
// 						bg={isDark ? 'gray.900' : '#E9D8FD'}
// 						color={isDark ? 'white' : '#6B46C1'}
// 						_hover={{
// 							bg: isDark ? 'gray.700' : '#D1BCF9',
// 						}}
// 						_active={{
// 							bg: isDark ? 'gray.800' : '#A893E9',
// 						}}
// 					/>
// 				</Flex>
// 				<IconButton
// 					aria-label="Toggle Color Mode"
// 					size="md"
// 					icon={isDark ? <SunIcon /> : <MoonIcon />}
// 					onClick={toggleColorMode}
// 					ml={2}
// 				/>
// 			</Flex>

// 			<Flex
// 				align="center"
// 				display={displayMenu ? 'flex' : ['none', 'none', 'flex', 'flex']}
// 				flexDir="column"
// 				position="fixed"
// 				top={16}
// 				right={0}
// 				left={0}
// 				zIndex={99}
// 				bg={isDark ? 'gray.900' : '#E9D8FD'}
// 				color={isDark ? 'white' : '#6B46C1'}
// 			>
// 				<Button as="a" href="/" variant="ghost" my={2}>
// 					Home
// 				</Button>
// 				<Button as="a" href="/blog" variant="ghost" my={2}>
// 					Blog
// 				</Button>
// 				<Button as="a" href="/journey" variant="ghost" my={2}>
// 					Journey
// 				</Button>
// 				<Button as="a" href="/tools" variant="ghost" my={2}>
// 					Tools
// 				</Button>
// 				<Button as="a" href="/contact" variant="ghost" my={2}>
// 					Contact
// 				</Button>
// 			</Flex>
// 		</Flex>
// 	);
// };

// export default Navbar;

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
// import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import RecipeCard from './Recipe';
import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import GoToTop from './GoToTop';
// import { Box } from '@chakra-ui/react';
// import Navbar from './Navbar';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	const [displayMenu, setDisplayMenu] = useState(false);

	const toggleMenu = () => {
		setDisplayMenu(!displayMenu);
	};
	//* Taking this from App.jsx

	//* for Search functionality
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	//* this is api key
	const apiKey = '326549e531aceed4c05fd54e58a18378';
	const apiID = 'bf29d630';
	const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiID}&app_key=${apiKey}`;

	//*  for Api runs only 1 time
	useEffect(() => {
		const RecipeData = async () => {
			const res = await axios.get(url);
			// setRecipe(res.data.hits);
			console.log('Data', res.data.hits);
		};
		RecipeData();
	}, [url]);

	//* For Searching
	const updateSearch = (e) => {
		setSearch(e.target.value);
	};
	// * Form Submit
	const updateQuery = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch(''); // Clear the input field
	};
	// * for Enter key press
	const enterSubmit = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setQuery(search);
			setSearch(''); // Clear the input field
		}
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
				{/* <Input
					type="text"
					placeholder="Search"
					size="sm"
					borderRadius="md"
					mr={2}
				/> */}

				{/* Search function edit */}
				{/* Search Section  */}

				<Container mt="100px">
					<Flex alignItems="center" justifyContent="center">
						<form onSubmit={updateQuery} onKeyPress={enterSubmit}>
							{/* input 1 */}
							<InputGroup>
								<InputLeftElement
									children={
										<Tooltip
											hasArrow
											label="Search Your Recipes"
											bg="#4CAF50"
											color="white"
											borderRadius="5px"
											cursor="pointer"
											fontWeight="bold"
										>
											<SearchIcon />
										</Tooltip>
									}
								/>
								<Input
									type="search"
									placeholder="Search Your Recipes"
									value={search}
									onChange={updateSearch}
									border="none"
									boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
									borderRadius="8px"
									paddingLeft="32px"
								/>
								<Button
									type="submit"
									bg="#50a799"
									color="#ffffff"
									borderRadius="8px"
									cursor="pointer"
									boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
									ml={3}
									_hover={{ bg: '#99e7dc', color: 'Green' }}
								>
									Search
								</Button>
							</InputGroup>
						</form>
					</Flex>
				</Container>

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

// import { useEffect, useState } from 'react';
// import {
// 	useColorMode,
// 	Flex,
// 	Button,
// 	IconButton,
// 	Input,
// 	Box,
// 	InputGroup,
// 	InputLeftElement,
// 	Tooltip,
// 	Container,
// 	Heading,
// 	SimpleGrid,
// 	Text,
// } from '@chakra-ui/react';
// import {
// 	HamburgerIcon,
// 	CloseIcon,
// 	SunIcon,
// 	MoonIcon,
// 	SearchIcon,
// } from '@chakra-ui/icons';
// import axios from 'axios';
// import RecipeCard from './Recipe';
// // import Recipe from './Recipe';
// import GoToTop from './GoToTop';

// const Navbar = () => {
// 	//* for Search functionality
// 	const [search, setSearch] = useState('');
// 	const [query, setQuery] = useState('chicken');
// 	// * For Storing Api data
// 	const [recipe, setRecipe] = useState([]);
// 	const { colorMode, toggleColorMode } = useColorMode();
// 	const isDark = colorMode === 'dark';
// 	const [displayMenu, setDisplayMenu] = useState(false);

// 	const toggleMenu = () => {
// 		setDisplayMenu(!displayMenu);
// 	};

// 	//* this is api key
// 	const apiKey = '326549e531aceed4c05fd54e58a18378';
// 	const apiID = 'bf29d630';
// 	const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiID}&app_key=${apiKey}`;

// 	//*  for Api runs only 1 time
// 	useEffect(() => {
// 		const RecipeData = async () => {
// 			const res = await axios.get(url);

// 			setRecipe(res.data.hits);
// 		};
// 		RecipeData();
// 	}, [url]);
// 	//* For Searching Section
// 	const updateSearch = (e) => {
// 		setSearch(e.target.value);
// 	};
// 	// * Form Submit
// 	const updateQuery = (e) => {
// 		e.preventDefault();
// 		console.log('submitted');
// 		setQuery(search);
// 		setSearch(''); // Clear the input field
// 	};
// 	// * for Enter key press
// 	const enterSubmit = (e) => {
// 		if (e.key === 'Enter') {
// 			console.log('enter success');
// 			e.preventDefault();
// 			setQuery(search);
// 			setSearch(''); // Clear the input field
// 		}
// 	};
// 	//* Search End

// 	//* Define the background color and text color variables
// 	const bgColor = isDark ? 'gray.900' : '#f0c2f3cc';
// 	const textColor = isDark ? 'white' : '#9852ad';
// 	return (
// 		<Flex
// 			as="nav"
// 			align="center"
// 			justify="space-between"
// 			py={2}
// 			px={4}
// 			bg={bgColor}
// 			color={textColor}
// 			position="fixed"
// 			top={0}
// 			left={0}
// 			right={0}
// 			zIndex={100}
// 			boxShadow=" rgb(211, 94, 206) 0px 20px 30px -10px;"
// 		>
// 			{/* Logo */}
// 			<Flex align="center">
// 				<Button
// 					as="a"
// 					href="/"
// 					variant="ghost"
// 					fontSize="2xl"
// 					fontWeight="bold"
// 				>
// 					Recipe Radar
// 				</Button>
// 			</Flex>
// 			{/* Desktop Menu */}

// 			<Flex align="center" display={['none', 'none', 'flex', 'flex']}>
// 				<Button as="a" href="/" variant="ghost" mx={2}>
// 					Home
// 				</Button>

// 				<Button as="a" href="/blog" variant="ghost" mx={2}>
// 					Blog
// 				</Button>
// 			</Flex>
// 			{/* Search Input */}
// 			<Flex display={['none', 'none', 'flex', 'flex']} width="35%">
// 				<form onSubmit={updateQuery} onKeyPress={enterSubmit}>
// 					<InputGroup>
// 						<InputLeftElement
// 							children={
// 								<Tooltip
// 									hasArrow
// 									label="Search Your Recipes"
// 									// bg={bgColor}
// 									// color={textColor}
// 									bg={`isDark ? 'gray.900' : ${bgColor}`}
// 									color={`isDark ? 'gray.900' : ${textColor}`}
// 									borderRadius="5px"
// 									cursor="pointer"
// 									fontWeight="bold"
// 								>
// 									<SearchIcon />
// 								</Tooltip>
// 							}
// 						/>
// 						<Input
// 							type="search"
// 							placeholder="Search Your Recipes"
// 							value={search}
// 							onChange={updateSearch}
// 							border="none"
// 							boxShadow={
// 								isDark
// 									? '0px 0px 5px rgba(114, 103, 113, 0.884)'
// 									: '0px 0px 5px rgba(235, 40, 225, 0.884)'
// 							}
// 							fontWeight="600"
// 							borderRadius="8px"
// 							fontSize={21}
// 							_placeholder={{
// 								color: isDark ? '#fff' : '#9433a0',
// 								fontWeight: '600',
// 							}}
// 						/>
// 						<Button
// 							type="submit"
// 							bg={isDark ? '#fff' : '#9e41d3'}
// 							color={isDark ? 'gray.900' : '#fff'}
// 							borderRadius="8px"
// 							cursor="pointer"
// 							boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
// 							ml={3}
// 							_hover={{ bg: '#d46bd0', color: '#fff' }}
// 						>
// 							Search
// 						</Button>
// 					</InputGroup>
// 				</form>
// 			</Flex>
// 			{/* Hamburger Menu and Color Mode Toggle */}
// 			<Flex align="center">
// 				<Flex display={['flex', 'flex', 'none', 'none']}>
// 					<IconButton
// 						aria-label="Toggle Menu"
// 						size="md"
// 						icon={displayMenu ? <CloseIcon /> : <HamburgerIcon />}
// 						onClick={toggleMenu}
// 						borderRadius="full"
// 						bg={isDark ? 'gray.900' : '#E9D8FD'}
// 						color={isDark ? 'white' : '#6B46C1'}
// 						_hover={{
// 							bg: isDark ? 'gray.700' : '#D1BCF9',
// 						}}
// 						_active={{
// 							bg: isDark ? 'gray.800' : '#A893E9',
// 						}}
// 					/>
// 				</Flex>
// 				<IconButton
// 					aria-label="Toggle Color Mode"
// 					size="md"
// 					icon={isDark ? <SunIcon /> : <MoonIcon />}
// 					onClick={toggleColorMode}
// 					ml={2}
// 				/>
// 			</Flex>
// 			{/* Mobile Menu */}
// 			<Flex
// 				align="center"
// 				display={displayMenu ? 'flex' : ['none', 'none']}
// 				flexDir="column"
// 				position="fixed"
// 				top={16}
// 				right={0}
// 				left={0}
// 				zIndex={99}
// 				bg={isDark ? 'gray.900' : '#E9D8FD'}
// 				color={isDark ? 'white' : '#6B46C1'}
// 			>
// 				<Button as="a" href="/" variant="ghost" my={2}>
// 					Home
// 				</Button>
// 				<Button as="a" href="/blog" variant="ghost" my={2}>
// 					Blog
// 				</Button>
// 			</Flex>
// 			<Box ml="6" mr="6" pt={20}>
// 				<Heading
// 					as="h1"
// 					size="xl"
// 					textAlign="center"
// 					mb="5"
// 					color="#b643c8"
// 					textTransform="uppercase"
// 				>
// 					{query}
// 				</Heading>
// 				<SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
// 					{recipe.map(({ recipe }) => (
// 						<RecipeCard
// 							key={recipe.uri}
// 							title={recipe.label}
// 							calories={recipe.calories}
// 							image={recipe.image}
// 							ingredients={recipe.ingredientLines}
// 						/>
// 					))}
// 				</SimpleGrid>

// 				<GoToTop />
// 			</Box>
// 		</Flex>
// 	);
// };

// export default Navbar;

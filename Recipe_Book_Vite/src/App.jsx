import axios from 'axios';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import RecipeCard from './Recipe';
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	IconButton,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Tooltip } from '@chakra-ui/react';
import GoToTop from './GoToTop';
// import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const App = () => {
	// * For Storing Api data
	const [recipe, setRecipe] = useState([]);
	//* for Search functionality
	// const [search, setSearch] = useState('');
	// const [query, setQuery] = useState('');

	// //* this is api key
	// const apiKey = '326549e531aceed4c05fd54e58a18378';
	// const apiID = 'bf29d630';
	// const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${apiID}&app_key=${apiKey}`;

	// //*  for Api runs only 1 time
	// useEffect(() => {
	// 	const RecipeData = async () => {
	// 		const res = await axios.get(url);
	// 		setRecipe(res.data.hits);
	// 	};
	// 	RecipeData();
	// }, [url]);

	// //* For Searching
	// const updateSearch = (e) => {
	// 	setSearch(e.target.value);
	// };
	// // * Form Submit
	// const updateQuery = (e) => {
	// 	e.preventDefault();
	// 	setQuery(search);
	// 	setSearch(''); // Clear the input field
	// };
	// // * for Enter key press
	// const enterSubmit = (e) => {
	// 	if (e.key === 'Enter') {
	// 		e.preventDefault();
	// 		setQuery(search);
	// 		setSearch(''); // Clear the input field
	// 	}
	// };

	return (
		<Box>
			<Navbar />
			{/* <GoToTop />  */}

			{/* Search Section  */}

			{/* <Container mt="100px">
				<Flex alignItems="center" justifyContent="center">
					<form onSubmit={updateQuery} onKeyPress={enterSubmit}> */}
						{/* input 1 */}
						{/* <InputGroup>
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
			</Container> */}

			{/* main Body section  */}

			<Box ml="6" mr="6" pt={20}>
				<Heading
					as="h1"
					size="xl"
					textAlign="center"
					mb="5"
					color="#b643c8"
					textTransform="uppercase"
				>
					{/* Todays Recipe {query} */}
				</Heading>
				<SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
					{recipe.map(({ recipe }) => (
						<RecipeCard
							key={recipe.uri}
							title={recipe.label}
							calories={recipe.calories}
							image={recipe.image}
							ingredients={recipe.ingredientLines}
						/>
					))}
				</SimpleGrid>

				<GoToTop />
			</Box>
		</Box>
	);
};
export default App;

import React from 'react';

import {
	Box,
	Image,
	Text,
	Badge,
	Flex,
	List,
	ListItem,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
//* Accordion panel
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';

const RecipeCard = ({ title, calories, image, ingredients, index }) => {
	return (
		<Box
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			boxShadow="md"
		>
			<Box justifyContent="center" alignItems="center" borderRadius="xl">
				<Image
					d="flex"
					m="auto"
					borderRadius="1xl"
					w="100%"
					src={image}
					alt={title}
				/>
			</Box>

			<Box p="6">
				<Box d="flex" alignItems="baseline">
					<Box display="flex" alignItems="center">
						<Box>
							<Badge borderRadius="full" px="2" colorScheme="teal">
								Recipe
							</Badge>
						</Box>

						<Box ml={3}>
							<Badge borderRadius="full" px="2" colorScheme="purple">
								{calories.toFixed(0)} Calories
							</Badge>
						</Box>
					</Box>
				</Box>

				<Text
					mt="4"
					fontWeight="semibold"
					as="h2"
					lineHeight="tight"
					isTruncated
					color="#1d7e6e"
					_hover={{ color: '#683c99' }}
					cursor="pointer"
				>
					{title}
				</Text>
				{/* Toggle section */}
				<Accordion allowToggle mt={3}>
					<AccordionItem>
						<AccordionButton
							bg="#E9D8FD"
							borderRadius={10}
							_hover={{ bg: '#B2F5EA', color: '#198372' }}
							color="#8d46de"
						>
							<Box flex="1" textAlign="left">
								<Text fontWeight="bold">Ingredients</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel
							pb={4}
							borderRadius="25px"
							borderLeft="4px solid #E9D8FD"
							borderRight="4px solid #E9D8FD"
							borderBottom="4px solid #B2F5EA"
							borderTop="4px solid #B2F5EA"
							mt={2}
							mb={2}
						>
							<List spacing={2} mt={2} color="gray.700">
								{ingredients.map((ingredient, index) => (
									<ListItem key={index} display="flex" alignItems="center">
										<Badge
											borderRadius="full"
											colorScheme={index % 2 === 0 ? 'teal' : 'purple'}
											mr={1}
											textAlign="center"
											boxSize={5}
										>
											{index + 1}
										</Badge>
										<ArrowForwardIcon
											key={index}
											borderRadius="full"
											bg={index % 2 === 0 ? '#B2F5EA' : '#E9D8FD'}
											fontWeight={700}
											color="#234E52"
											boxSize={5}
											mr={1}
										/>
										<Box
											bg={index % 2 === 0 ? '#B2F5EA' : '#E9D8FD'}
											w="80%"
											borderRadius="10px"
										>
											<Text ml={2} width="auto" fontWeight="600">
												{ingredient}.
											</Text>
										</Box>
									</ListItem>
								))}
							</List>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		</Box>
	);
};

export default RecipeCard;

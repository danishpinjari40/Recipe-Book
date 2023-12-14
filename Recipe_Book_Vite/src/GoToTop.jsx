// //* Chakra ui updated code
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';

const GoToTop = () => {
	const [isHovered, setIsHovered] = useState(false);
	const goToBtn = () => {
		document.documentElement.scrollTop = 0;
	};

	const calcScrollValue = () => {
		const scrollProgress = document.getElementById('progress');
		const pos = document.documentElement.scrollTop;
		const calcHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrollValue = Math.round((pos * 100) / calcHeight);

		// if (pos > 100) {
		// 	scrollProgress.style.display = 'grid';
		// } else {
		// 	scrollProgress.style.display = 'none';
		// }
		
		scrollProgress.style.display = pos > 100 ? 'grid' : 'none';

		scrollProgress.addEventListener('click', () => {
			document.documentElement.scrollTop = 0;
		});

		scrollProgress.style.background = isHovered
			? `conic-gradient(#7f56af ${scrollValue}%, #dee9e4 ${scrollValue}%)`
			: `conic-gradient(#3dcfb7 ${scrollValue}%, #dee9e4 ${scrollValue}%)`;
	};

	useEffect(() => {
		window.addEventListener('scroll', calcScrollValue);
		window.addEventListener('load', calcScrollValue);
		return () => {
			window.removeEventListener('scroll', calcScrollValue);
			window.removeEventListener('load', calcScrollValue);
		};
	}, []);

	// * Hover color
	const purpel = {
		bg: '#E9D8FD',
		boxShadow:
			'0px 54px 55px rgba(211, 75, 221, 0.324), 0px -12px 30px rgba(234, 138, 218, 0.272), 0px 4px 6px rgba(218, 139, 224, 0.276), 0px 12px 13px rgba(214, 154, 221, 0.243), 0px -3px 5px rgba(221, 187, 223, 0.187),0px 0px 0px',
		color: '#7f56af',
	};

	return (
		<>
			<Box
				color="#0c8e94"
				fontSize="30px"
				bg="#B2F5EA"
				className="top-btn"
				onClick={goToBtn}
				position="fixed"
				bottom="30px"
				right="30px"
				width="50px"
				height="50px"
				borderRadius="50%"
				display="flex"
				alignItems="center"
				justifyContent="center"
				cursor="pointer"
				transition="background-color 0.3s ease"
				_hover={purpel}
				boxShadow="0px 54px 55px rgba(69, 231, 240, 0.383), 0px -12px 30px rgba(23, 232, 229, 0.373), 0px 4px 6px rgba(13, 165, 173, 0.465), 0px 12px 13px rgba(52, 202, 240, 0.374), 0px -3px 5px rgba(91, 225, 227, 0.355), 0px 0px 0px"
			>
				<FaArrowUp
					className="top-btn-icon"
					transition="transform 0.3s ease"
					_hover={{ transform: 'scale(1.2)' }}
				/>
			</Box>
			<Box
				// border="1px solid red"
				id="progress"
				position="fixed"
				bottom="30px"
				right="30px"
				height="60px"
				width="60px"
				display="none"
				placeItems="center"
				borderRadius="50%"
				_hover={purpel}
				boxShadow="0px 54px 55px rgba(69, 231, 240, 0.383), 0px -12px 30px rgba(23, 232, 229, 0.373), 0px 4px 6px rgba(13, 165, 173, 0.465), 0px 12px 13px rgba(52, 202, 240, 0.374), 0px -3px 5px rgba(91, 225, 227, 0.355), 0px 0px 0px"
				cursor="pointer"
			>
				<Box
					id="progress-value"
					height="calc(100% - 15px)"
					width="calc(100% - 15px)"
					color="#217176"
					fontSize="30px"
					bg="#B2F5EA"
					borderRadius="50%"
					display="grid"
					placeItems="center"
					_hover={purpel}
					onMouseEnter={() => {
						setIsHovered(true);
						calcScrollValue();
					}}
					onMouseLeave={() => {
						setIsHovered(false);
						calcScrollValue();
					}}
				>
					<FaArrowUp
						className="top-btn-icon"
						transition="transform 0.3s ease"
					/>
				</Box>
			</Box>
		</>
	);
};

export default GoToTop;

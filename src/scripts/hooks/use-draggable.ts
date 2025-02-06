import { useState } from 'react';

function useDraggable(ref: React.RefObject<HTMLElement>) {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.clientX); // Сохраняем начальную позицию по оси X
		if (ref.current) setScrollLeft(ref.current.scrollLeft); // Сохраняем текущее положение прокрутки
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;

		const x = e.clientX; // Текущая позиция по оси X
		const walk = x - startX; // На сколько нужно прокрутить
		if (ref.current) ref.current.scrollLeft = scrollLeft - walk; // Обновляем положение прокрутки
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseLeave = () => {
		setIsDragging(false);
	};

	return {
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		handleMouseLeave,
	};
}

export default useDraggable;

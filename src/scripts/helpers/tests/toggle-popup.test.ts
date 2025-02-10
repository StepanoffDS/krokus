import { describe, expect, it, vi } from 'vitest';

import { togglePopup } from '../toggle-popup';

describe('togglePopup', () => {
	it('should toggle isOpen state and modify body styles on opening the popup', () => {
		const setIsOpen = vi.fn();
		const isOpen = false;

		global.innerWidth = 1200;
		Object.defineProperty(document.documentElement, 'clientWidth', {
			value: 1150,
		});

		togglePopup({ setIsOpen, isOpen });

		expect(setIsOpen).toHaveBeenCalledWith(true);

		expect(document.body.style.marginRight).toBe('50px'); // 1200 - 1150 = 50
		expect(document.body.style.overflow).toBe('hidden');
		expect(document.body.classList.contains('overlay')).toBe(true);
	});

	it('should toggle isOpen state and modify body styles on closing the popup', () => {
		const setIsOpen = vi.fn(); // имитация функции setIsOpen
		const isOpen = true; // текущее состояние открытого попапа

		// Устанавливаем необходимые свойства для теста
		global.innerWidth = 1200; // ширина окна
		Object.defineProperty(document.documentElement, 'clientWidth', {
			value: 1150,
		});

		// Запускаем функцию
		togglePopup({ setIsOpen, isOpen });

		// Проверяем, что setIsOpen был вызван с правильным значением
		expect(setIsOpen).toHaveBeenCalledWith(false);

		// Проверяем изменения стилей body
		expect(document.body.style.marginRight).toBe('0px');
		expect(document.body.style.overflow).toBe('auto');
		expect(document.body.classList.contains('overlay')).toBe(false);
	});
});

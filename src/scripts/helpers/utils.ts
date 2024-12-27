export const formatTel = (tel: string) => {
	// Убирает все скобки и пробелы
	return tel.replace(/[\s()]/g, "");
};

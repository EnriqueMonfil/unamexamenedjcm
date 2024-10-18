import { getZipInfo } from '../models/CodeZipModel';

export const handleFormSubmit = async (
  formData: { country: string; zipCode: string },
  setResults: React.Dispatch<React.SetStateAction<{ city: string; state: string }[]>>,
  setRecentZips: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const { country, zipCode } = formData;

  try {
    const result = await getZipInfo(country, zipCode);
    setResults(result);

    setRecentZips((prev) => {
      const newZips = [zipCode, ...prev];
      return newZips.slice(0, 5); // Mantener sólo los últimos 5
    });
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

export const handleClearHistory = (setRecentZips: React.Dispatch<React.SetStateAction<string[]>>) => {
  setRecentZips([]); // Limpiar historial
};

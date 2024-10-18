export interface ZipResult {
    city: string;
    state: string;
  }
  
  export const getZipInfo = async (country: string, zipCode: string): Promise<ZipResult[]> => {
    const url = `https://api.zippopotam.us/${country}/${zipCode}`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
  
    const data = await response.json();
    return data.places.map((place: any) => ({
      city: place['place name'],
      state: place['state']
    }));
  };
  
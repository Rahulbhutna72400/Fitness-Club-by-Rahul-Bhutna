
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '93438886eamsh5caf5c61e90f6bbp11acf3jsn95e65dc6d20d',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '93438886eamsh5caf5c61e90f6bbp11acf3jsn95e65dc6d20d',
  },
};

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    console.log(`Fetched data from ${url}:`, data); // Debugging line
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

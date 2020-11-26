const customFetch = async (url) => {
  const fetched = await fetch(url);

  const result = fetched.json();

  return result;
};

export default customFetch;

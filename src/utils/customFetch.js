const customFetch = async (url) => {
  const fetched = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = await fetched.json();

  const STATUS_CODES = ["error"];
  if (res.status >= 400 || STATUS_CODES.includes(res.status)) {
    throw new Error(JSON.stringify(res));
  }
  return res;
};

export default customFetch;

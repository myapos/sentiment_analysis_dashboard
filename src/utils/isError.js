const isError = (res) => res.status && res.status.match(/error/gi);

export default isError;

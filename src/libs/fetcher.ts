const fetcher = async (key: string) => fetch(key).then((res) => res.json());

export default fetcher;

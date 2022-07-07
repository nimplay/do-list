const getData = () => {
  const data = localStorage.getItem('Data');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export default getData;
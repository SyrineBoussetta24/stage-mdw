const fetchData = async () => {
  const Url = 'http://192.168.1.69:8086'
  try {
    const response_elements = await fetch(Url + '/api/load-instrument');
    data.initProducts = [await response_elements.json()];

    const response_users = await fetch(Url + '/api/load-users');
    data.users = [await response_users.json()];
    console.log(data)

    return data;
  } catch (error) {
    console.error('Error fetching data from API Elements:', error);
    return [];
  }
};

const data = {
  users: [
    
  ],
  initProducts: [
    
  ],
};



export {data, fetchData};
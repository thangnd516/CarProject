import axios from 'axios';

export const postLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post('https://your-api-domain.com/api/login', {
      email,
      password,
      delay: 5000
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('Network error');
    }
  }
};

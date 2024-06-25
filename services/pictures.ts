import axios from 'axios';

export const sendPicture = async (file: File): Promise<string> => {
  const data = new FormData();
  data.append('file', file);

  const response = await axios.post('/api/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data.secure_url;
};

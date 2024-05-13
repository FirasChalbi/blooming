import { FormData } from '@/component/plus/Contact2';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';
    const notify = () => toast("Email sent successfully"); // Define notify function here
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        notify(); // Call notify function to show success message
      })
      .catch((err) => {
        toast.error(err.message); // Use toast.error for error messages
      });
  }
  
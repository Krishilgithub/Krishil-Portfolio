interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Get the API URL from environment variables or use a default
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    
    const response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}; 
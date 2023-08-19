
import { useQuery } from 'react-query';

export function useContacts() {
  return useQuery('contacts', async () => {
    const response = await fetch('/api/contacts'); // Replace with your API endpoint
    return response.json();
  });
}


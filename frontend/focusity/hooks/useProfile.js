import { useQuery } from '@tanstack/react-query';
import api from '../api/api';

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await api.get('/profile/current');
      return res.data;
    },
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 10,
  });
}

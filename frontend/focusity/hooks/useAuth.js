import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { register } from '../api/auth';

export function useLogin() {
  return useMutation({
    mutationFn: async ({ username, password }) => {
      const user = await login(username, password);
      return user;
    }
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: async ({ username, email, password }) => {
      const user = await register(username, email, password);
      return user;
    }
  });
}
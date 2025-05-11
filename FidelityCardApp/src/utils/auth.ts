// src/utils/auth.ts
export const login = (email: string, password: string): Promise<boolean> => {
  console.log('Logging in with:', email, password);
  // Simulate an asynchronous operation (e.g., API call)
  return Promise.resolve(true);
};
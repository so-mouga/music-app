export const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getItem = (key: string): string => {
  return localStorage.get(key);
};

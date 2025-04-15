export const isValidEmail = (email: string): boolean => {
  // Check domain suffix (e.g., .com, .net, .org, etc.)
  const pattern = /^[^\s@]+@[^\s@]+\.(com|net|org|co\.il|edu|gov|info|io)$/i;
  return pattern.test(email);
};

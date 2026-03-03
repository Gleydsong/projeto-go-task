export const generateUniqueIdWithTimestamp = (): string => {
  const timestamp = new Date().getTime().toString(36); // Converte o timestamp para base 36
  const randomPart = Math.random().toString(36).substring(2, 9); // Gera uma string aleatória de 7 caracteres
  return `${timestamp}-${randomPart}`; // Combina o timestamp e a string aleatória
};

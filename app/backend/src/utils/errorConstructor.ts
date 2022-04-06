export default (code: string, message: string) => {
  const error = Error();
  error.name = code;
  error.message = message;
  return error;
};

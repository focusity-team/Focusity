export const UserData = {
  username: {
    type: "string",
    minLength: 3,
    maxLength: 25,
    regex: /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._]+(?<!\.)$/
  },
  email: {
    type: "string",
    maxLength: 100,
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
    optional: true,
  },
  password: {
    type: "string",
    minLength: 8,
    maxLength: 32, 
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/
  },
};
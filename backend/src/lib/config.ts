import 'dotenv/config';

export default {
  database: process.env.NODE_ENV === 'development' ? process.env.DEV_DATABASE! : process.env.PROD_DATABASE!,
  username: process.env.NODE_ENV === 'development' ? process.env.DEV_USERNAME! : process.env.PROD_USERNAME!,
  password: process.env.NODE_ENV === 'development' ? process.env.DEV_PASSWORD! : process.env.PROD_PASSWORD!,
};

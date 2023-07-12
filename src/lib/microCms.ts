import { createClient } from 'microcms-js-sdk';

export default createClient({
  serviceDomain: 'xsffb0cqnq',
  apiKey: process.env.API_KEY ?? '',
});
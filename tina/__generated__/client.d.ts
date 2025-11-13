import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'eec05ac4a9a16086e0b078bc7d226979bbba4800', queries,  });
export default client;
  
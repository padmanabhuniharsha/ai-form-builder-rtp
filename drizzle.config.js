import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://aiformbuilder_owner:bz7W0BiURfvk@ep-wandering-pine-a5lcgw6d.us-east-2.aws.neon.tech/aiformbuilder?sslmode=require'
  }
});
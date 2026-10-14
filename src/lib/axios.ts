import axios from "axios";

// Reserved for Route Handler integrations; ordinary CRUD uses the Supabase SDK.
export const http = axios.create({ baseURL: "/api", timeout: 15000 });

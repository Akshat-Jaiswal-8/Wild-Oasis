import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yeoamgeqgnrbztltzqnr.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllb2FtZ2VxZ25yYnp0bHR6cW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MjAxOTIsImV4cCI6MjAxMjA5NjE5Mn0.26JxEtdogK0nSHd0bkmmZowUJVXhQYpIlWZjiPLlaJw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

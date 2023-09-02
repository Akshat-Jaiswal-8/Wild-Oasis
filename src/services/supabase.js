import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yeoamgeqgnrbztltzqnr.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllb2FtZ2VxZ25yYnp0bHR6cW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0OTQ2MzksImV4cCI6MjAwOTA3MDYzOX0.IrdVzYc1ahCvhnWOdw4bVXWauvf60Q20HkYMy5pGNHY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://exvahbhaslvclboiknni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4dmFoYmhhc2x2Y2xib2lrbm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMTkzODAsImV4cCI6MjAyMDc5NTM4MH0.T3J0VwENs2VZ21Mfnpis3bEa7jMe3jo-MPNWwnwZSNs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

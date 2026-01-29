import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zxdhnlvcpnldxfiqabeg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZGhubHZjcG5sZHhmaXFhYmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2ODcxNjIsImV4cCI6MjA4NTI2MzE2Mn0.KDXk4xSkYsV30L0jWm9C5iQtFMSQ5sTjqBMz98sMtDA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
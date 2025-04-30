import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://brwfbrgarjmlifzumcqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyd2ZicmdhcmptbGlmenVtY3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NzU1NDIsImV4cCI6MjA2MTU1MTU0Mn0.EcCenGZQr74790KXzdimcdawJQcbKvGkoEsE9vo9dR0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

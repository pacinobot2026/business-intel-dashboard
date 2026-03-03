import { createClient } from '@supabase/supabase-js';

// Browser-safe client — uses anon key, safe to expose to the frontend
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client;

// Don't throw error during build - create dummy client if missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase env vars - creating dummy client for build');
  client = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signOut: () => Promise.resolve()
    },
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => ({ data: null, error: null }),
      update: () => ({ data: null, error: null }),
      delete: () => ({ data: null, error: null })
    })
  };
} else {
  client = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabaseClient = client;

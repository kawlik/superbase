// @node
import { create } from "zustand";

// @root
import { supabaseClient } from "@/services/supabase";
import { SupabaseAuth } from "@/types/supabase/auth";
import { SupabaseUser } from "@/types/supabase/user";

export const useAuthContext = create<{
	auth: SupabaseAuth;
	user: SupabaseUser | undefined;
}>(() => ({
	auth: supabaseClient.auth,
	user: undefined,
}));

supabaseClient.auth.onAuthStateChange((_, session) => {
	useAuthContext.setState({ user: session?.user });
});

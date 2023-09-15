// @node
import { create } from "zustand";

// @root
import { superbaseClient } from "@/services/superbase";
import { SuperbaseAuth } from "@/types/superbase/auth";
import { SuperbaseUser } from "@/types/superbase/user";

export const useAuthContext = create<{
	auth: SuperbaseAuth;
	user: SuperbaseUser | undefined;
}>(() => ({
	auth: superbaseClient.auth,
	user: undefined,
}));

superbaseClient.auth.onAuthStateChange((_, session) => {
	useAuthContext.setState({ user: session?.user });
});

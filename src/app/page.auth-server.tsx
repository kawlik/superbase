// @next
import { cookies } from "next/headers";

// @node
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// @view
import AuthClient from "./page.auth-client";

export default async function AuthServer() {
	// component hooks
	const supabase = createServerComponentClient({ cookies });

	// component logic
	const session = await supabase.auth.getSession();

	// component layout
	return <AuthClient hasSession={!!session} />;
}

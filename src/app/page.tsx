// @next
import { redirect } from "next/navigation";

// @root
import { getSupabaseServer } from "@/tools/supabase";

// @view
import AuthServer from "./page.auth-server";

export default async function () {
	// component hooks
	const supabase = await getSupabaseServer();

	// component logic
	if (!(await supabase.auth.getSession()).data.session) {
		return redirect("/auth");
	}

	const { data: tweets } = await supabase.from("tweets").select("*, users(*)");

	// component layout
	return (
		<main className="h-full w-full overflow-y-auto">
			<AuthServer />
			<pre>{JSON.stringify(tweets, null, 4)}</pre>
		</main>
	);
}

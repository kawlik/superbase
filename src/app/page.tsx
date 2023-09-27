// @next
import { cookies } from "next/headers";

// @node
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// @view
import { redirect } from "next/navigation";
import AuthServer from "./page.auth-server";

export default async function () {
	// component hooks
	const supabase = await createServerComponentClient({ cookies });

	// component logic
	if (!(await supabase.auth.getSession()).data.session) {
		return redirect("/auth");
	}

	const { data: tweets } = await supabase.from("tweets").select();

	// component layout
	return (
		<main className="h-full w-full overflow-y-auto">
			<AuthServer />
			<pre>{JSON.stringify(tweets, null, 4)}</pre>
		</main>
	);
}

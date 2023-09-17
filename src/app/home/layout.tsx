"use client";

// @node
import { redirect } from "next/navigation";

// @root
import { useAuthContext } from "@/contexts/auth";
import { useLedgersContext } from "@/contexts/ledgers";

export default function (props: React.PropsWithChildren) {
	// component hooks
	const authCtx = useAuthContext();
	const ledgers = useLedgersContext();

	console.log(authCtx.user);

	// component logic
	if (!authCtx) return redirect("/auth/sign-in");

	// component layout
	return (
		<main className="flex h-full w-full flex-col flex-nowrap items-stretch justify-between">
			{props.children}
		</main>
	);
}

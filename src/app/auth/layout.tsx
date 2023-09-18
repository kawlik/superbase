"use client";

// @node
import { redirect } from "next/navigation";

// @root
import { useAuthContext } from "@/contexts/auth";

export default function (props: React.PropsWithChildren) {
	// component hooks
	const authCtx = useAuthContext();

	// component logic
	if (!!authCtx.user) return redirect("/home/ledgers");

	// component layout
	return <main className="flex h-full w-full place-content-center">{props.children}</main>;
}

"use client";

// @next
import { useRouter } from "next/navigation";

// @node
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthClient(props: { hasSession: boolean }) {
	// component hooks
	const router = useRouter();
	const supabase = createClientComponentClient();

	// component logic
	const handleSignIn = async () => {
		const { error } = await supabase.auth.signInWithOtp({
			email: prompt("Enter email address") || "",
		});

		if (error) {
			alert("Error! Please check your credentials and try again later.");
		} else {
			alert("Please check your email and use the magic link to continue.");
		}
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};

	// component layout
	return props.hasSession ? (
		<button onClick={handleSignOut}>Sign Out</button>
	) : (
		<button onClick={handleSignIn}>Sign In</button>
	);
}

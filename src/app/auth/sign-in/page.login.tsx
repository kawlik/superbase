// @node
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Login(props: { signInWithEmail(email: string): void }) {
	// component hooks
	const form = useForm<{ email: string }>();

	// component logic
	const [isLoading, setIsLoading] = useState(false);

	// component layout
	return (
		<form className="flex w-full flex-col gap-2">
			<input
				{...form.register("email", { required: true })}
				className="input input-bordered w-full"
				placeholder="Enter your e-mail address"
				type="email"
			/>
			<button
				className="btn btn-primary normal-case"
				disabled={!form.formState.isValid}
				type="submit"
			>
				Sign In
			</button>
		</form>
	);
}

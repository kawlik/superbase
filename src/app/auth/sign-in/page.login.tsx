// @node
import { useForm } from "react-hook-form";

export function Login(props: { signInWithEmail(email: string): Promise<void> }) {
	// component hooks
	const form = useForm<{ email: string }>();

	// component logic
	const isInvalid = !form.formState.isValid;
	const isLoading = form.formState.isSubmitting;
	const isDisabled = isInvalid || isLoading;

	const submitForm = form.handleSubmit(async ({ email }) => {
		await props.signInWithEmail(email);
	});

	// component layout
	return (
		<form className="flex w-full flex-col gap-2" onSubmit={submitForm}>
			<input
				{...form.register("email", { required: true })}
				className="input input-bordered w-full rounded-full"
				placeholder="Enter your e-mail address"
				type="email"
			/>
			<button
				className="btn btn-primary rounded-full normal-case"
				disabled={isDisabled}
				type="submit"
			>
				{isLoading ? <span className="loading loading-dots loading-lg" /> : "Sign In"}
			</button>
		</form>
	);
}

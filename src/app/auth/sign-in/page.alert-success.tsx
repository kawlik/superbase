// @icon
import { MdCheck } from "react-icons/md";

export function AlertSuccess(props: { dismiss(): void; isVisible: boolean }) {
	// component logic

	// component layout
	return (
		<dialog className="modal backdrop-blur" open={props.isVisible}>
			<div className="modal-box max-w-sm p-0">
				<div className="grid h-48 place-content-center bg-success">
					<span className="rounded-full border-4 border-base-100 p-4">
						<MdCheck className="text-5xl text-base-100" />
					</span>
				</div>
				<div className="flex flex-col gap-2 p-6 text-center">
					<h3 className="text-2xl font-bold">Success!</h3>
					<hr />
					<p className="text-lg font-semibold">
						Open your email client and click the magic link to continue.
					</p>
					<button
						className="btn btn-success m-auto mt-6 block w-2/3 rounded-full normal-case text-base-100"
						onClick={props.dismiss}
						type="button"
					>
						Got it!
					</button>
				</div>
			</div>
		</dialog>
	);
}

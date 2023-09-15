// @node
import { create } from "zustand";

export const useLedgersCtx = create<{
	list: unknown[];
}>(() => ({
	list: [],
}));

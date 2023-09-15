// @node
import { create } from "zustand";

export const useReportsCtx = create<{
	list: unknown[];
}>(() => ({
	list: [],
}));

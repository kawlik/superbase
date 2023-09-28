export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			tweets: {
				Row: {
					id: string;
					timestamp_created_at: string;
					timestamp_updated_at: string;
					title: string;
					user_id: string;
				};
				Insert: {
					id?: string;
					timestamp_created_at?: string;
					timestamp_updated_at?: string;
					title: string;
					user_id: string;
				};
				Update: {
					id?: string;
					timestamp_created_at?: string;
					timestamp_updated_at?: string;
					title?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "tweets_user_id_fkey";
						columns: ["user_id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			users: {
				Row: {
					avatar: string | null;
					email: string;
					id: string;
					name: string | null;
				};
				Insert: {
					avatar?: string | null;
					email: string;
					id: string;
					name?: string | null;
				};
				Update: {
					avatar?: string | null;
					email?: string;
					id?: string;
					name?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "users_id_fkey";
						columns: ["id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

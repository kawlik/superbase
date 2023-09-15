// @node
import { createClient } from "@supabase/supabase-js";

// @root
import { Database } from "@/types/superbase/app";

export const superbaseClient = createClient<Database>(
	"https://dhwgwnbyycokaibeijbq.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRod2d3bmJ5eWNva2FpYmVpamJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3ODYzMTEsImV4cCI6MjAxMDM2MjMxMX0.ktYD7-s_qMFAgPieNg9jD6NBrFzMDoIGnkCH7_oAe7I",
);

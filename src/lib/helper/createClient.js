import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://gqegaixgboitvurhqbdi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxZWdhaXhnYm9pdHZ1cmhxYmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyOTE4NDIsImV4cCI6MjA0MTg2Nzg0Mn0.AUp8TGj8tulxNaXu-qSXhbVvIh08x-Cw5Uy8h_S1prg"
)
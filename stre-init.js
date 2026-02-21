alert("STRE INIT JS LOADED");

console.log("STRE init starting");

try {
  const SUPABASE_URL = "https://vdcgfmqvyujzykgomeym.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_uayeCGdeNHivQq9r6Gne6g_ffxI-cnQ";

  alert("Supabase variables loaded");

  const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  alert("Supabase client created");

  supabase
    .from("sessions")
    .insert({
      source: "3dvista-test",
      started_at: new Date().toISOString()
    })
    .then(({ error }) => {
      if (error) {
        alert("SUPABASE ERROR: " + error.message);
        console.error(error);
      } else {
        alert("SESSION INSERTED SUCCESSFULLY");
      }
    });
} catch (e) {
  alert("JS ERROR: " + e.message);
}

(function () {
  const SUPABASE_URL = "https://vdcgfmqvyujzykgomeym.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_uayeCGdeNHivQq9r6Gne6g_ffxI-cnQ";

  const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  supabase.from("sessions").insert({
    source: "3dvista",
    started_at: new Date().toISOString()
  });
})();

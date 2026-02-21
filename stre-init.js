(function () {
  const SUPABASE_URL = "https://vdcgfmqvyujzykgomeym.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_uayeCGdeNHivQq9r6Gne6g_ffxI-cnQ";

  if (!window.supabase) return;

  // Create ONE global client
  window.STRE_SUPABASE = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  // Session insert
  window.STRE_SUPABASE.from("sessions").insert({
    tour_id: window.STRE_TOUR_ID || null,
    source: "3dvista",
    started_at: new Date().toISOString()
  });
})();

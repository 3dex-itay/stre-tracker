(function () {
  const config = window.STRE_CONFIG;
  if (!config) return;

  const supabase = window.supabase.createClient(
    config.supabaseUrl,
    config.supabaseKey
  );

  function getVisitorId() {
    const name = "stre_visitor_id";
    let id = document.cookie
      .split("; ")
      .find(x => x.startsWith(name + "="))
      ?.split("=")[1];

    if (!id) {
      id = crypto.randomUUID();
      document.cookie = `${name}=${id}; path=/; max-age=31536000`;
    }
    return id;
  }

  const visitorId = getVisitorId();
  const sessionId = crypto.randomUUID();

console.log("STRE loaded");
  supabase.from("sessions").insert({
    visitor_id: visitorId,
    session_token: sessionId,
    started_at: new Date().toISOString()
  });
})();

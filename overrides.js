// Don't autostart private browsing.
user_pref('browser.privatebrowsing.autostart', false);

// Don't disable cache and history.  Keep SSL pages cache and CSS visited links
// disabled from user.js.
user_pref('browser.cache.offline.enable', true);
user_pref('browser.cache.disk.enable', true);
user_pref('browser.cache.memory.enable', true);
user_pref('browser.history_expire_days', 180);  // Default
user_pref('browser.history_expire_sites', 40000);  // Default
user_pref('browser.history_expire_visits', 20000);  // Default
user_pref('places.history.enabled', true);

// Don't disable autocomplete since history lookup requires it enabled.
user_pref('browser.urlbar.autocomplete.enabled', true);

// Allow suggestions for URL bar.
user_pref('browser.urlbar.maxRichResults', 12);  // Default

// Don't clear cache and history on exit, but keep clearing everything else.
user_pref('privacy.clearOnShutdown.cache', false);
user_pref('privacy.clearOnShutdown.history', false);

// Don't disable clipboard events (disrupts editing Google documents).
user_pref('dom.event.clipboardevents.enabled', true);

// Don't disable clipboard autocopy.
user_pref('clipboard.autocopy', true);

// Don't prompt me to update plugins.
user_pref('plugins.update.notifyUser', false);

// Don't disable built-in PDF viewer.
user_pref('pdfjs.disabled', false);

// Enable location-aware browsing.  Firefox should still present a popup
// requesting authorization before sharing location in a per-site basis.
user_pref('geo.enabled', true);

// Don't disable fonts from documents.  This actually doesn't prevent system
// font fingerprinting (only make it harder, but I didn't figure out why), but
// mess websites going against authors' intentions because it'll work as if
// @font-face didn't exist.
user_pref('browser.display.use_document_fonts', 1);

// Don't display an error message indicating the entered information is not a valid
// URL.  Ask the default search engine (hopefully DuckDuckGo).
user_pref("keyword.enabled", true);

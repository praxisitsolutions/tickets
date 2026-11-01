/* PRAXIS Tickets service worker: shows notifications and opens the ticket when one is tapped. No caching. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type:"window", includeUncontrolled:true });
    for(const c of all){
      if(c.url.startsWith(self.registration.scope)){
        await c.focus();
        c.postMessage({ type:"open", url });
        return;
      }
    }
    await self.clients.openWindow(url);
  })());
});

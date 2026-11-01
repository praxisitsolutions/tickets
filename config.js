// ============================================================
//  PRAXIS Tickets — ρυθμίσεις (έκδοση 2)
// ============================================================
window.PRAXIS_CONFIG = {
  tenantId: "83452b18-517e-4b31-a9e8-3cd60d2a8364",   // Directory (tenant) ID
  clientId: "d20f0323-5238-44e8-acd6-3c542598c8ad",   // Application (client) ID "PRAXIS Tickets"

  // SharePoint site με τις λίστες Tickets / TicketComments / TicketClients
  siteHost: "reinaldogr.sharepoint.com",
  sitePath: "/sites/praxis",

  // Τεχνικοί (email όπως στο Microsoft 365)
  technicians: [
    { name: "Andreas Damis", email: "adamis@praxisit.gr" }
  ],

  ticketPrefix: "PRX-",

  // Πακέτα συμβολαίου: μέγιστος χρόνος πρώτης απόκρισης σε εργάσιμες ώρες (0 = χωρίς SLA)
  tierSla: { "Χωρίς σύμβαση": 0, "Starter": 8, "Business": 4, "Professional": 2, "Enterprise": 2 },

  // SLA ανά προτεραιότητα, σε εργάσιμα λεπτά (απόκριση / επίλυση).
  // Η απόκριση περιορίζεται επιπλέον από το πακέτο του πελάτη.
  slaMatrix: {
    "P1 Κρίσιμο":  { response: 60,  resolve: 240 },
    "P2 Υψηλό":    { response: 120, resolve: 480 },
    "P3 Κανονικό": { response: 240, resolve: 960 },
    "P4 Χαμηλό":   { response: 480, resolve: 2400 }
  },

  // Εργάσιμες ώρες (ώρα Ελλάδας) — Δευτέρα (1) έως Παρασκευή (5)
  businessHours: { start: 9, end: 17, days: [1, 2, 3, 4, 5] },

  // Επίσημες αργίες (ίδια λίστα με τη ροή "Tickets 1")
  holidays: [
    "2026-01-01","2026-01-06","2026-02-23","2026-03-25","2026-04-10","2026-04-13","2026-05-01","2026-06-01","2026-08-15","2026-10-28","2026-12-25","2026-12-26",
    "2027-01-01","2027-01-06","2027-03-15","2027-03-25","2027-04-30","2027-05-03","2027-05-01","2027-06-21","2027-08-15","2027-10-28","2027-12-25","2027-12-26"
  ]
};

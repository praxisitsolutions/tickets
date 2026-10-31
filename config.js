// ============================================================
//  PRAXIS Tickets — ρυθμίσεις
//  Συμπλήρωσε tenantId και clientId από το Entra ID (βλ. ΟΔΗΓΟΣ.md, Βήμα 1).
//  Όσο είναι κενά, η εφαρμογή τρέχει σε λειτουργία επίδειξης (demo).
// ============================================================
window.PRAXIS_CONFIG = {
  tenantId: "83452b18-517e-4b31-a9e8-3cd60d2a8364",          // Directory (tenant) ID
  clientId: "",          // Application (client) ID της εφαρμογής "PRAXIS Tickets"

  // SharePoint site όπου ζουν οι λίστες Tickets / TicketComments / Clients
  siteHost: "reinaldogr.sharepoint.com",
  sitePath: "/sites/praxis",

  // Τεχνικοί που μπορούν να αναλάβουν tickets (email = όπως στο Microsoft 365)
  technicians: [
    { name: "Reinaldo Dhami", email: "adamis@praxisit.gr" }
  ],

  // Πρόθεμα αριθμού ticket (ίδιο με τις ροές Power Automate)
  ticketPrefix: "PRX-",

  // Προεπιλεγμένες ώρες απόκρισης SLA ανά πακέτο (άλλαξέ τες ώστε να ταιριάζουν στο MSA)
  tierSla: { "Χωρίς σύμβαση": 0, "Starter": 8, "Business": 4, "Professional": 2, "Enterprise": 2 }
};

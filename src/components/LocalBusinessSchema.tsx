import { SITE_URL } from "@/app/layout";
import { weddingsServices, originsServices } from "@/data/services";

// Structured data (schema.org) — tells Google & AI search exactly who the
// House is, where it serves, and every service it offers.
export default function LocalBusinessSchema() {
  const offers = [...weddingsServices, ...originsServices].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name, description: s.descriptor },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: "House of Parva",
        description:
          "Fine-art wedding photography and cinematic films in Bangalore: pre-weddings, destination and intimate weddings, proposals, maternity, baby showers, naming ceremonies, housewarmings, poojas and family photography across Karnataka and India.",
        url: SITE_URL,
        email: "hello@thehouseofparva.in",
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 12.9716, longitude: 77.5946 },
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "State", name: "Karnataka" },
          { "@type": "Country", name: "India" },
        ],
        sameAs: [
          "https://instagram.com/thehouseofparva.in",
          "https://instagram.com/weddingsbyparva",
          "https://instagram.com/originsbyparva",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Photography & Films",
          itemListElement: offers,
        },
        subOrganization: [
          { "@type": "ProfessionalService", name: "Parva Weddings", url: `${SITE_URL}/parvaweddings` },
          { "@type": "ProfessionalService", name: "Parva Origins", url: `${SITE_URL}/parvaorigins` },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "House of Parva",
        publisher: { "@id": `${SITE_URL}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

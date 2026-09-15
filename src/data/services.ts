// ── WHAT WE OFFER - services undertaken by each atelier ──────────────────────
// Edit names / descriptors here; both Services menus render from this file.
// `group` orders the menu sections - keep each atelier to exactly 2 groups.

export interface Service {
  name: string;
  descriptor: string;
  group: string;
}

export interface ServiceGroup {
  title: string;
  items: Service[];
}

const groupOf = (services: Service[]): ServiceGroup[] => {
  const order: string[] = [];
  const map = new Map<string, Service[]>();
  for (const s of services) {
    if (!map.has(s.group)) {
      map.set(s.group, []);
      order.push(s.group);
    }
    map.get(s.group)!.push(s);
  }
  return order.map((title) => ({ title, items: map.get(title)! }));
};

const weddings: Service[] = [
  { name: "Pre-Weddings", descriptor: "Love stories filmed before the vows: cities, shores, slow evenings", group: "The Days" },
  { name: "Mini Weddings", descriptor: "Small guest lists with grand emotions, fully covered", group: "The Days" },
  { name: "Destination Weddings", descriptor: "Multi-day celebrations across cities, palaces and shores", group: "The Days" },
  { name: "Court Marriages", descriptor: "Quiet signings and registrations, honestly framed", group: "The Days" },
  { name: "Private & Family Weddings", descriptor: "Intimate home rituals with only your own around", group: "The Days" },
  { name: "Proposal Shoots", descriptor: "The question itself: planned, hidden, kept forever", group: "The Keepsakes" },
  { name: "Couple Casual & Intimate Shoots", descriptor: "Unposed hours with just the two of you, anywhere", group: "The Keepsakes" },
  { name: "Candid Photography + Films", descriptor: "Stills and motion together, in one visual language", group: "The Keepsakes" },
  { name: "Cinematic Wedding Films", descriptor: "Your days cut like cinema: teaser, trailer, feature", group: "The Keepsakes" },
  { name: "Documentary Wedding Photography + Film", descriptor: "The whole truth of the day, beautifully kept", group: "The Keepsakes" },
];

const origins: Service[] = [
  { name: "Housewarmings", descriptor: "First lamps lit in a new home, family gathered close", group: "The Ceremonies" },
  { name: "Poojas & Religious Ceremonies", descriptor: "Sacred hours and temple rituals, quietly witnessed", group: "The Ceremonies" },
  { name: "Baby Showers", descriptor: "Welcoming the littlest arrival, blessing the mother", group: "The Ceremonies" },
  { name: "Naming Ceremonies", descriptor: "The first gift a child receives: a name, a gathering", group: "The Ceremonies" },
  { name: "Family Celebrations", descriptor: "Birthdays, anniversaries, everyone together at last", group: "The Gatherings" },
  { name: "Intimate Gatherings", descriptor: "Small circles and warm light, over food and laughter", group: "The Gatherings" },
  { name: "Milestone Events", descriptor: "First birthdays, graduations, every first worth framing", group: "The Gatherings" },
  { name: "Maternity Shoots", descriptor: "Glowing months and quiet anticipation, softly kept", group: "The Gatherings" },
  { name: "Family Photography + Films", descriptor: "Heirloom portraits and motion for the family archive", group: "And everything in between" },
];

export const weddingsServices: Service[] = weddings;
export const originsServices: Service[] = origins;
export const weddingsGroups: ServiceGroup[] = groupOf(weddings);
export const originsGroups: ServiceGroup[] = groupOf(origins);

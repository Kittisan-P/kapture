exports.seed = function (knex) {
  // Inserts seed entries
  return knex('birds').insert([
    { id: 1, name: 'Parson Bird', ignoa: 'Tūī', description: 'Tūī are unique to New Zealand and belong to the honeyeater family, which means they feed mainly on nectar from flowers of native plants.', image: '/images/birds/tui.jpg', found_in: 'North, South and Stewart Islands, and their offshore islands', sound: '/sounds/tui.mp3', conservation_status: 'Not Threatened', threats: 'Predation, habitat loss', colour_id: 1, size_id: 2 },
    { id: 2, name: 'Bellbird', ignoa: 'Korimako', description: 'The melodious bellbird is still widespread but mammalian predators keep their numbers low.', image: '/images/birds/bellbird.jpg', found_in: 'North, South, Stewart and Auckland Islands and many offshore islands', sound: '/sounds/bellbird.mp3', conservation_status: 'Not Threatened', threats: 'Predation', colour_id: 4, size_id: 1 },
    { id: 3, name: 'Brown Kiwi', ignoa: 'Kiwi', description: 'The kiwi is a unique and curious bird: it cannot fly, has loose, hair-like feathers, strong legs and no tail. Learn more about the kiwi, the national icon of New Zealand and unofficial national emblem.', image: '/images/birds/brown-kiwi.jpg', found_in: 'Lowland and coastal native forest and subalpine areas in the North Island', sound: '/sounds/brown-kiwi.mp3', conservation_status: 'At Risk–Declining', threats: 'Dogs, predation', colour_id: 5, size_id: 3 },
    { id: 4, name: 'Bush Parrot', ignoa: 'Kākā', description: 'The New Zealand kaka (Māori: kākā) (Nestor meridionalis) is a large species of parrot of the family Nestoridae found in native forests of New Zealand. Two subspecies are recognised. It is endangered and has disappeared from much of its former range.', image: '/images/birds/kaka.jpg', found_in: 'Large forested areas in the North and South Islands', sound: '/sounds/kaka.mp3', conservation_status: 'North Island kākā are At Risk (Recovering); South Island kākā are Nationally Vulnerable, Chatham Islands kaka are extinct. ', threats: 'Kākā require large tracts of forest to survive. Habitat loss from forest clearance for agriculture and logging have had a devastating effect. Browsing by introduced pests such as possums, deer and pigs has reduced the abundance of food. Possums also eat the same kind of food as kākā, most significantly, high energy food types such as endemic mistletoe and rātā.  Introduced wasps compete with kākā for the shimmering honeydew (excreted by scale insects) which forms on the barks of beech trees. Both the mistletoe and honeydew supply sugary food which is an important part of the bird’s diet, and may be essential for it to breed in some beech forests.  Having evolved in the absence of mammalian predators, kākā have many characteristics that make them easy prey. Kākā nest deep in hollow trees, where there is no escape if they are cornered by predators such as stoats, rats and possums (which eat chicks and eggs). Young birds often leave the nest before they can fly, making them vulnerable to predators. Nesting females are the most vulnerable to stoat attacks, resulting in a disproportionate male/female sex ratio.', colour_id: 3, size_id: 4 },
    { id: 5, name: 'Night Parrot', ignoa: 'Kākāpō', description: 'The kākāpō is a nocturnal, flightless parrot. And its strangeness doesn\'t end there. It\'s critically endangered and one of New Zealand’s unique treasures. There are only 209 kākāpō alive today.', image: '/images/birds/kakapo.jpg', found_in: 'Codfish Island/Whenua Hou, Anchor Island and Te Hauturu-o-Toi/Little Barrier Island', sound: '/sounds/kakapo.mp3', conservation_status: 'Threatened – Nationally Critical', threats: 'Predators, disease, genetic inbreeding, infertility', colour_id: 4, size_id: 4 },
    { id: 6, name: 'Morepork', ignoa: 'Ruru', description: 'The native morepork is known for its haunting, melancholic call. This sound gives it the Māori name \'ruru\'', image: '/images/birds/ruru.jpg', found_in: 'Forests throughout mainland New Zealand and offshore islands', sound: '/sounds/ruru.mp3', conservation_status: 'Not Threatened', threats: 'Predation, loss of habitat', colour_id: 5, size_id: 3 }
  ])
}

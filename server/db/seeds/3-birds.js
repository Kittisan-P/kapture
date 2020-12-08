exports.seed = function (knex) {
  // Inserts seed entries
  return knex('birds').insert([
    { id: 1, name: 'Parson Bird', ignoa: 'Tūī', description: 'Tūī are unique to New Zealand and belong to the honeyeater family, which means they feed mainly on nectar from flowers of native plants.', image: '/images/birds/tui.jpg', found_in: 'North, South and Stewart Islands, and their offshore islands', sound: '/sounds/tui.mp3', conservation_status: 'Not Threatened', threats: 'Predation, habitat loss', colour_id: 1, size_id: 3 },
    { id: 2, name: 'Bellbird', ignoa: 'Korimako', description: 'The melodious bellbird is still widespread but mammalian predators keep their numbers low.', image: '/images/birds/korimako.jpg', found_in: 'North, South, Stewart and Auckland Islands and many offshore islands', sound: '/sounds/korimako.mp3', conservation_status: 'Not Threatened', threats: 'Predation', colour_id: 4, size_id: 1 },
    { id: 3, name: 'Brown Kiwi', ignoa: 'Kiwi', description: 'The kiwi is a unique and curious bird: it cannot fly, has loose, hair-like feathers, strong legs and no tail. Learn more about the kiwi, the national icon of New Zealand and unofficial national emblem.', image: '/images/birds/kiwi.jpg', found_in: 'Lowland and coastal native forest and subalpine areas in the North Island', sound: '/sounds/brown-kiwi.mp3', conservation_status: 'At Risk–Declining', threats: 'Dogs, predation', colour_id: 5, size_id: 3 },
    { id: 4, name: 'Bush Parrot', ignoa: 'Kākā', description: 'The New Zealand kaka (Māori: kākā) (Nestor meridionalis) is a large species of parrot of the family Nestoridae found in native forests of New Zealand. Two subspecies are recognised. It is endangered and has disappeared from much of its former range.', image: '/images/birds/kaka.jpg', found_in: 'Large forested areas in the North and South Islands', sound: '/sounds/kaka.mp3', conservation_status: 'North Island kākā are At Risk (Recovering); South Island kākā are Nationally Vulnerable, Chatham Islands kaka are extinct. ', threats: 'Kākā require large tracts of forest to survive. Habitat loss from forest clearance for agriculture and logging have had a devastating effect. Browsing by introduced pests such as possums, deer and pigs has reduced the abundance of food. Possums also eat the same kind of food as kākā, most significantly, high energy food types such as endemic mistletoe and rātā.  Introduced wasps compete with kākā for the shimmering honeydew (excreted by scale insects) which forms on the barks of beech trees. Both the mistletoe and honeydew supply sugary food which is an important part of the bird’s diet, and may be essential for it to breed in some beech forests.  Having evolved in the absence of mammalian predators, kākā have many characteristics that make them easy prey. Kākā nest deep in hollow trees, where there is no escape if they are cornered by predators such as stoats, rats and possums (which eat chicks and eggs). Young birds often leave the nest before they can fly, making them vulnerable to predators. Nesting females are the most vulnerable to stoat attacks, resulting in a disproportionate male/female sex ratio.', colour_id: 3, size_id: 3 },
    { id: 5, name: 'Night Parrot', ignoa: 'Kākāpō', description: 'The kākāpō is a nocturnal, flightless parrot. And its strangeness does not end there. It is critically endangered and one of New Zealand’s unique treasures. There are only 209 kākāpō alive today.', image: '/images/birds/kakapo.jpg', found_in: 'Codfish Island/Whenua Hou, Anchor Island and Te Hauturu-o-Toi/Little Barrier Island', sound: '/sounds/kakapo.mp3', conservation_status: 'Threatened – Nationally Critical', threats: 'Predators, disease, genetic inbreeding, infertility', colour_id: 4, size_id: 4 },
    { id: 6, name: 'Morepork', ignoa: 'Ruru', description: 'The native morepork is known for its haunting, melancholic call. This sound gives it the Māori name "ruru"', image: '/images/birds/ruru.jpg', found_in: 'Forests throughout mainland New Zealand and offshore islands', sound: '/sounds/ruru.mp3', conservation_status: 'Not Threatened', threats: 'Predation, loss of habitat', colour_id: 5, size_id: 4 },
    { id: 7, name: 'Fantail', ignoa: 'Pīwakawaka', description: 'In Māori mythology, the fantail was responsible for the presence of death in the world. Maui, thinking he could eradicate death by successfully passing through the goddess of death, Hine-nui-te-po, tried to enter the goddess’s sleeping body through the pathway of birth. The fantail, warned by Maui to be quiet, began laughing and woke Hine-nui-te-po, who was so angry that she promptly killed Maui.', image: '/images/birds/piwakawaka.png', found_in: 'Throughout New Zealand', sound: '/sounds/piwakawaka.mp3', conservation_status: 'North and South Island forms are Not Threatened, Chatham Island form is At Risk–Naturally Uncommon', threats: 'Cats, rats, stoats and mynas are as great an enemy to fantails as they are to other native birds', colour_id: 5, size_id: 1 },
    { id: 8, name: 'Grey warbler', ignoa: 'Riroriro', description: 'The grey warbler is a relatively inconspicuous grey bird that flits about the canopy of the forest but its call permeates the forest and takes the edge off a hard uphill slog for any attentive tramper.', image: '/images/birds/riroriro.png', found_in: 'Throughout New Zealand', sound: '/sounds/priroriro.mp3', conservation_status: 'North and South Island forms are Not Threatened, Chatham Island form is At Risk–Naturally Uncommon', threats: 'Grey warblers are abundant and widespread and no threat to their long term existence is apparent.', colour_id: 2, size_id: 1 },
    { id: 9, name: 'Stitchbird', ignoa: 'hihi', description: 'Stitchbird/hihi is a medium-sized forest species that is one of New Zealand’s rarest birds.', image: '/images/birds/hihi.png', found_in: 'Naturally surviving on Little Barrier Island', sound: '/sounds/hihi.mp3', conservation_status: 'Threatened–Nationally Vulnerable', threats: 'Predation, habitat loss, disease', colour_id: 1, size_id: 2 },
    { id: 10, name: 'Common redpoll', ignoa: 'Common redpoll', description: 'Common redpolls are small finches with a distinctive red patch on the crown. They were introduced from Britain between 1862 and 1875, and are now common in hill-country throughout much of New Zealand during the breeding season.', image: '/images/birds/common-redpoll.png', found_in: 'The redpoll is widespread throughout the South Island, and is also found on many off-shore islands. In the North Island, it is found in all regions, but is generally less abundant than in the South Island.', sound: '/sounds/common-redpoll.mp3', conservation_status: 'Introduced and Naturalised', threats: 'No threat to their long term existence is apparent.', colour_id: 3, size_id: 1 },
    { id: 11, name: 'Kingfisher', ignoa: 'Kōtare', description: 'The kingfisher is a distinctive bird with a green-blue back, buff to yellow undersides and a large black bill. It has a broad black eye-stripe, and a white collar in adults. The females are slightly greener and duller.', image: '/images/birds/kotare.png', found_in: 'Kingfishers are found throughout the country in both coastal and inland freshwater habitats. They live in a wide range of habitats, including forest, river margins, farmland, lakes, estuaries and rocky coastlines.', sound: '/sounds/kotare.mp3', conservation_status: 'Native, Not Threatened', threats: 'No threat to their long term existence is apparent.', colour_id: 4, size_id: 2 },
    { id: 12, name: 'Banded rail', ignoa: 'Moho pererū', description: 'The banded rail is a native subspecies which inhabits wetlands throughout New Zealand.', image: '/images/birds/moho_pereru.png', found_in: 'Sparsely throughout New Zealand; mainly in mangroves and salt marshes of the upper North Island', sound: '/sounds/moho_pereru.mp3', conservation_status: 'Native', threats: 'Habitat loss, predation, road-kills, human disturbance.', colour_id: 2, size_id: 2 },
    { id: 13, name: 'Albatross', ignoa: 'Toroa ingoingo', description: 'Albatrosses are the world\'s largest seabirds. They spend at least 85% of their lives at sea returning to land (usually remote islands) to breed and raise their young.', image: '/images/birds/toroa_ingoingo.png', found_in: 'Over 99% of the southern royal albatross population breeds on Campbell Island, and a small proportion on the Auckland Islands (Enderby, Adams and Auckland), with a few birds apparently hybridising with northern royal albatrosses at Taiaroa Head.', sound: '/sounds/toroa_ingoingo.mp3', conservation_status: 'At Risk–Naturally Uncommon', threats: 'Climate and habitat changes, heat stress, fly-strike.', colour_id: 2, size_id: 4 },
    { id: 14, name: 'Black-fronted tern', ignoa: 'Tarapirohe', description: 'Most terns are seabirds but the black-fronted tern lives and breeds inland, only visiting the coast to feed in autumn and winter.', image: '/images/birds/tarapirohe.png', found_in: 'Mainly braided rivers South Island', sound: '/sounds/tarapirohe.mp3', conservation_status: ' Threatened–Nationally Endangered', threats: 'Predation, loss of suitable habitat', colour_id: 2, size_id: 3 },
    { id: 15, name: 'Chatham Islands black robin', ignoa: 'Kakaruia', description: 'The recovery of the Chatham Islands black robin from the brink of extinction is an internationally renowned conservation success story.', image: '/images/birds/kakaruia.png', found_in: 'Mangere and Rangatira (south east) islands, in the Chatham Islands group', sound: '/sounds/kakaruia.mp3', conservation_status: ' Threatened–Nationally Critical', threats: 'Predation, disease', colour_id: 1, size_id: 1 },
    { id: 16, name: 'New Zealand dotterel', ignoa: 'Tūturiwhatu', description: 'The endangered New Zealand dotterel/tūturiwhatu is found only in Aotearoa.', image: '/images/birds/tuturiwhatu.png', found_in: 'Coastal areas around much of the North Island; Stewart Island in the South', sound: '/sounds/tuturiwhatu.mp3', conservation_status: 'Southern NZ dotterel: Threatened – Nationally Critical, Northern NZ dotterel: At Risk – Recovering', threats: 'Predation, habitat loss, disturbance, tide and storm surges', colour_id: 5, size_id: 2 },
    { id: 17, name: 'Chaffinch', ignoa: 'Pahirini', description: 'Chaffinches are the commonest and most widespread of New Zealand’s introduced finches, and are found in a wide range of habitats from sea-level to 1400 m. They are self-introduced to many off-shore islands.', image: '/images/birds/pahirini.png', found_in: 'Chaffinches are widespread throughout the New Zealand mainland and on the Chatham Islands, and are resident on Stewart Island and also the Snares, Auckland and Campbell Islands.', sound: '/sounds/pahirini.mp3', conservation_status: 'Introduced and Naturalised', threats: 'No threat to their long term existence is apparent.', colour_id: 3, size_id: 2 },
    { id: 18, name: 'New Zealand parakeet', ignoa: 'Kākāriki', description: 'Kākāriki, meaning ‘small green parrot’ in Māori, are beautiful forest birds. They feed on berries, seeds, fruit and insects, and generally nest in holes in trees.', image: '/images/birds/kakariki.png', found_in: 'The red-crowned parakeet was widespread throughout the mainland last century but today is very rare on the mainland and only common on islands free of mammalian predators.', sound: '/sounds/kakariki.mp3', conservation_status: 'Red-crowned parakeets are locally common to abundant in suitable habitat.', threats: 'North Island and South Island mainland populations were eliminated through predation by introduced mammals (particularly rats, stoats and cats).', colour_id: 4, size_id: 3 },
    { id: 19, name: 'Hutton\'s shearwater', ignoa: 'Kaikōura tītī', description: 'The nationally vulnerable Hutton\'s shearwater is the only seabird globally to breed in a sub-alpine environment', image: '/images/birds/kaikoura_titi.png', found_in: 'The distribution of Hutton’s shearwaters within New Zealand waters is poorly understood as few at-sea observers attempt to distinguish Hutton’s shearwaters from the similar fluttering shearwater.', sound: '/sounds/kaikoura_titi.mp3', conservation_status: 'Threatened – Nationally Critical', threats: 'Habitat loss and predation by introduced mammals is the main threat to remaining Hutton’s shearwater populations.', colour_id: 1, size_id: 4 },
    { id: 20, name: 'Swamp harrier', ignoa: 'Kāhu', description: 'The swamp harrier is a large, tawny-reddish-brown bird of prey that occurs throughout New Zealand. It is an opportunistic hunter that searches for food by slowly quartering the ground with its large wings held in a distinctive shallow V-shape.', image: '/images/birds/kahu.png', found_in: 'Swamp harriers occupy a wider ecological niche in New Zealand than elsewhere in Australasia. Abundant throughout most of New Zealand including the coastal fringe, estuaries, wetlands, pine forest, farmland and high-country areas.', sound: '/sounds/kahu.mp3', conservation_status: 'Widespread and very common', threats: 'No threat to their long term existence is apparent.', colour_id: 13, size_id: 4 }
  ])
}

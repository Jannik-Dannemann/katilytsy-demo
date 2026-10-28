export const SITE = {
  name: "Kati Lytsy",
  tagline: "Personal trainer",
  email: "kati@katilytsy.fi",
  phone: "+358 40 867 1596",
  phoneHref: "tel:+358408671596",
  businessId: "2959239-6",
  address: "Kalasatamankatu 9A 50, 00580 Helsinki",
  calendly: "https://calendly.com/pt-lytsy/konsultaatio",
  instagram: "https://www.instagram.com/katilytsy",
  facebook: "https://www.facebook.com/trainerkatilytsy",
  linkedin: "https://www.linkedin.com/in/katilytsy",
} as const;

export const NAV = [
  {
    label: "Valmennus",
    href: "/valmennus",
    children: [
      {
        label: "Johtajavalmennus",
        href: "/johtajavalmennus",
        description: "Työn ja kunnon tasapaino",
      },
      {
        label: "Etävalmennus",
        href: "/etavalmennus",
        description: "Valmennus missä tahansa",
      },
      {
        label: "Lytsyn löylyt",
        href: "/lytsynloylyt",
        description: "Pienryhmässä kohti tuloksia",
      },
    ],
  },
  { label: "Työhyvinvointi", href: "/tyohyvinvointi" },
  { label: "Liikuntavartti", href: "/liikuntavartti" },
  { label: "Meistä", href: "/meista" },
  { label: "Blogi", href: "/blogi" },
  { label: "Verkkokauppa", href: "/verkkokauppa" },
] as const;

export const LOCATIONS = [
  {
    name: "Voimalaitos Merihaka",
    address: "Haapaniemenkatu 14, 00530 Helsinki",
  },
  {
    name: "Liikuntamylly",
    address: "Jauhokuja 3, 00920 Helsinki",
  },
  {
    name: "Töölön kisahalli",
    address: "Paavo Nurmen kuja 1 C, 00250 Helsinki",
  },
  {
    name: "FitVantaa – Iron Paradise",
    address: "FitTammisto, Vantaa",
  },
  {
    name: "OleFit Porttipuisto",
    address: "Porttisuontie 7b, Vantaa",
  },
] as const;

export type Service = {
  title: string;
  href: string;
  image: string;
  alt: string;
  blurb: string;
  meta: string;
};

export const SERVICES: Service[] = [
  {
    title: "Johtajavalmennus",
    href: "/johtajavalmennus",
    image: "/images/johtaja-hero.jpg",
    alt: "Kati Lytsy valmentamassa ketjukahvakuulalla mustavalkoisessa kuvassa",
    blurb:
      "Henkilökohtainen valmennus johtajalle tai yrittäjälle, joka haluaa lisää energiaa ilman että työ kärsii.",
    meta: "3 ja 6 kuukauden kokonaisuudet",
  },
  {
    title: "Etävalmennus",
    href: "/etavalmennus",
    image: "/images/eta-3.jpg",
    alt: "Kati Lytsy ulkona harjoittelemassa",
    blurb:
      "Ohjelmat, ravintovalmennus ja viikoittainen seuranta Trainero-sovelluksessa – asuitpa missä tahansa.",
    meta: "150 € / kk",
  },
  {
    title: "Lytsyn löylyt",
    href: "/lytsynloylyt",
    image: "/images/lytsyn-hero.jpg",
    alt: "Lytsyn löylyt pienryhmä treenaamassa yhdessä",
    blurb:
      "Pieni porukka, kova tsemppi ja tekniikat kuntoon. Pienryhmävalmennus Voimalaitos Merihaassa.",
    meta: "4–8 henkeä · tiistaisin klo 18",
  },
];

export const WORK_SERVICES = [
  {
    title: "Virkistyspäivät",
    description:
      "Aktiivinen ja hauska päivä irti arjesta. Liikettä, yhdessä tekemistä ja hyvää fiilistä koko tiimille.",
    image: "/images/work-group.jpg",
    alt: "Työporukka juhlistaa yhdessä kuntosalilla",
  },
  {
    title: "Johtoryhmävalmennus",
    description:
      "Johtoryhmän jaksamista, palautumista ja arjen hyvinvointikäytäntöjä – kestävämpää johtamista ja parempaa esimerkkiä.",
    image: "/images/work-johtoryhma.jpg",
    alt: "Johtoryhmä työskentelemässä yhdessä",
  },
  {
    title: "Ohjattu liikunta",
    description:
      "Taukojumppaa, kuntosalicircuitia, tanssia tai kehonhuoltoa työpaikalle tai etänä. Matalalla kynnyksellä.",
    image: "/images/work-4.jpg",
    alt: "Ohjattua liikuntaa ulkona",
  },
  {
    title: "Luennot & workshopit",
    description:
      "Käytännönläheinen luento tai workshop palautumisesta, niskakivuista tai liikkumisen merkityksestä työssäjaksamiseen.",
    image: "/images/work-2.jpg",
    alt: "Kati Lytsy luennoimassa",
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  company?: string;
  image?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Olin ennen salinvihaaja nro 1 – nyt käyn salilla säännöllisesti. Niskahartiakivut väistyivät, itsetunto nousi ja salikammo jäi historiaan. Kati on valmentajana innostava ja taitava.",
    name: "Mari Kilponen",
    company: "Topakat & Kätevät Oy",
    image: "/images/testimonial-mari.jpg",
  },
  {
    quote:
      "Katin kanssa treenaaminen on ihan parasta. Sain apua myös syömiseen ja henkiseen hyvinvointiin. Näillä saatiin hyviä tuloksia aikaiseksi. Kati on puhtaasti paras PT, mitä on.",
    name: "Neve Hult",
    company: "Maalauspalvelut Hult",
  },
  {
    quote:
      "Opin Katilta vuodessa enemmän kuin olen oppinut aiempina vuosina yhteensä. En ole koskaan aiemmin tavannut yhtä energistä, fiksua, kannustavaa ja kokonaisuuteen keskittyvää valmentajaa.",
    name: "Eveliina Järveläinen",
    company: "Heideli San",
    image: "/images/testimonial-eveliina.jpg",
  },
  {
    quote:
      "Kati on todellinen ammattilainen. Hän huomaa niin tekniikan kuin ajattelunkin virheet ja saa korjattua ne hetkessä. Tulokset paranivat kaikissa liikkeissä, joita kävimme läpi.",
    name: "Karri Naakka",
    company: "Inmedia Systems Oy",
  },
  {
    quote:
      "Hän suunnitteli kaikki ateriat, tuli kanssani kauppaan ja sitten vielä kotiin kokkaamaan ja paketoimaan ruoat. Sain juuri sitä palvelua, mitä olen pyytänyt ja tarvinnut.",
    name: "Ildiko Katona-Hiekkanen",
    company: "ROOF LKV",
    image: "/images/testimonial-ildiko.jpg",
  },
  {
    quote:
      "Valmennus toimi omalla kohdallani loistavasti! Sain sen alkusysäyksen, jonka tarvitsin. Askeleita kertyy entisen 3 000:n sijaan keskimäärin 8 000 päivässä, paino on tippunut 5 kg ja olo on 100 kertaa parempi kuin aloittaessa.",
    name: "Päivi",
    company: "Etävalmennus",
  },
  {
    quote:
      "Olet kyllä hyvä valmentaja. En olisi yksin päässyt tähän, missä nyt olen. Olet saanut minut nostamaan painoja salilla – yksin kitkuttaisin niillä, jotka tuntuvat helpoilta.",
    name: "Heidi",
    company: "Etävalmennus",
  },
];

export const CLIENT_STORIES = [
  {
    quote:
      "Olin ennen salinvihaaja nro 1 – nyt käyn salilla säännöllisesti. Niskahartiakivut väistyivät, itsetunto nousi ja salikammo jäi historiaan.",
    name: "Mari",
    detail: "Topakat & Kätevät Oy",
    result: "Salikammo historiaan",
  },
  {
    quote:
      "Opin Katilta vuodessa enemmän kuin olen oppinut aiempina vuosina yhteensä. Suurin vihollinen asuu oman pään sisällä – ja Katin oppien avulla kuka vain pystyy ihan mihin vain.",
    name: "Eveliina",
    detail: "Heideli San",
    result: "Uusi suhde treenaamiseen",
  },
  {
    quote:
      "Kati laittoi minut ensimmäiseksi syömään lisää terveellistä ruokaa, ja pääsin yli vuoden kestäneestä painon jumituksesta. Viimeisimpänä juoksin elämäni ensimmäisen puolimaratonin.",
    name: "Taina",
    detail: "Pitkäaikainen asiakas",
    result: "Puolimaraton maaliin",
  },
  {
    quote:
      "Paino on pudonnut 11 kiloa, keuhkojen toimintakyky parantunut ja kolesteroli- sekä verensokeriarvot normalisoituneet. Perjantaisin, puhki ollessani, lähden ilolla treenaamaan.",
    name: "Heidi",
    detail: "Lapsiperhearki ja työkiireet",
    result: "−11 kg",
  },
  {
    quote:
      "Sain valmennuksesta juuri sen, mitä halusin ja paljon enemmän. Paritreeni toimi erinomaisesti pikkulapsiarjen keskellä, ja tavoitemekkoon sujahdettiin päivälleen.",
    name: "Sarita & Eero",
    detail: "Yhteinen projekti",
    result: "Tavoitemekko päälle",
  },
] as const;

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
  description: string;
  includes: string[];
  category: "Treenit" | "Valmennus";
};

export const PRODUCTS: Product[] = [
  {
    id: "lytsyn-loylyt-1kk",
    name: "Lytsyn löylyt pienryhmävalmennus 1 kk",
    price: 140,
    image: "/images/lytsyn-hero.jpg",
    alt: "Lytsyn löylyt pienryhmä",
    description:
      "Pienryhmävalmennus tiistaisin klo 18 Voimalaitos Merihaassa. Ryhmässä 4–8 henkeä, joten jokainen huomioidaan.",
    includes: [
      "Viikoittainen 60 min ryhmätreeni",
      "Ohjelmat Trainero-sovelluksessa",
      "Ei sisällä salimaksua",
    ],
    category: "Valmennus",
  },
  {
    id: "ohjattu-treeni",
    name: "Ohjattu treeni",
    price: 99,
    image: "/images/product-session.jpg",
    alt: "Ulkona tehtävä harjoitus",
    description:
      "Yksittäinen henkilökohtainen treeni. Tekniikat kuntoon, motivaatio nousuun tai päivitys omaan saliohjelmaan.",
    includes: ["60 min henkilökohtainen treeni", "Voimalaitos Merihaka, Liikuntamylly tai Töölön kisahalli"],
    category: "Treenit",
  },
  {
    id: "ohjattu-treeni-1x",
    name: "1×60 min personal training + ohjelma",
    price: 174,
    image: "/images/service-pt.jpg",
    alt: "Kati Lytsy henkilökohtaisessa valmennuksessa",
    description:
      "Yksi tapaaminen ja henkilökohtainen harjoitusohjelma. Hyvä aloitus, jos haluat selkeän suunnan treenaamiseen.",
    includes: ["60 min tapaaminen", "Henkilökohtainen harjoitusohjelma"],
    category: "Treenit",
  },
  {
    id: "ohjattu-treeni-3x",
    name: "Ohjattu treeni 3×60 min",
    price: 365,
    image: "/images/product-3x.jpg",
    alt: "Kati Lytsy ohjaamassa kuntosalilla",
    description:
      "Kolme treeniä, joissa käydään tekniikat, painot ja ohjelma läpi. Voidaan toteuttaa myös lahjaksi.",
    includes: ["3 × 60 min treeniä", "Sovitaan sinulle sopiva sali"],
    category: "Treenit",
  },
  {
    id: "etavalmennus-3kk",
    name: "Etävalmennus 3 kk",
    price: 450,
    image: "/images/eta-hero.jpg",
    alt: "Kati Lytsy etävalmennuksessa",
    description:
      "Etävalmennus ohjelmineen, tuen sekä 30 minuutin etäpuhelun kanssa joka kuukausi.",
    includes: [
      "Henkilökohtaiset treeniohjelmat",
      "Ravintovalmennus ja reseptit",
      "Viikoittainen seuranta Traineron kautta",
      "30 min etätapaaminen kuukausittain",
    ],
    category: "Valmennus",
  },
  {
    id: "johtajavalmennus-3kk",
    name: "Toimitusjohtajan huippukuntovalmennus 3 kk",
    price: 1440,
    image: "/images/johtaja-hero.jpg",
    alt: "Kati Lytsy mustavalkoisessa valmennuskuvassa",
    description:
      "Avaimet käteen -valmennus johtajalle tai yrittäjälle. 12 lähitapaamista, ruokavalio, ohjelmat ja jatkuva tuki.",
    includes: [
      "Alkukartoitus ja tavoitteet",
      "12 × 60 min lähitapaamista",
      "Ruokavalio muokkauksineen ja reseptit",
      "Harjoitusohjelmat päivityksineen",
      "Viikoittainen seuranta Traineron kautta",
    ],
    category: "Valmennus",
  },
  {
    id: "johtajavalmennus-3kk-firstbeat",
    name: "Toimitusjohtajan huippukuntovalmennus 3 kk + Firstbeat",
    price: 1740,
    image: "/images/product-1x.jpg",
    alt: "Kati Lytsy kuntosalilla",
    description:
      "Sama vahva kokonaisuus Firstbeat Life -mittauksella ja InBody-kehonkoostumusmittauksilla.",
    includes: [
      "Kaikki 3 kk valmennuksen sisällöt",
      "Firstbeat Life -mittalaite ja unen seuranta",
      "3 × InBody-kehonkoostumusmittaus",
    ],
    category: "Valmennus",
  },
];

export type Faq = { q: string; a: string };

export const GENERAL_FAQS: Faq[] = [
  {
    q: "Entä jos en ole yrittäjä? Voinko silti tulla valmennukseen?",
    a: "Kyllä. Valmennukseen voi tulla, vaikkei olisi yrittäjä. Johtajavalmennus on suunnattu erityisesti kiireisille johtajille ja yrittäjille, mutta myös muut valmennusmuodot ovat kaikille avoimia.",
  },
  {
    q: "Minkä tasoisille valmennus sopii?",
    a: "Kaiken tasoisille – olit sitten aloittelija tai kokeneempi. Et voi olla liian huonossa kunnossa aloittaaksesi. Alkutapaamisessa tehdään liikkuvuustesti, jonka pohjalta ohjelma rakennetaan. Jos sinulla on sairaus tai vamma, konsultoi aina lääkäriä.",
  },
  {
    q: "Miten valmennus etenee?",
    a: "Aloitamme veloituksettomalla alkukartoituksella, jossa käymme läpi tavoitteesi, taustasi ja mahdolliset rajoitukset. Ensimmäisellä tapaamisella keskitymme liikkuvuuteen ja pääset valmennusalustalle, jossa yhteydenpito ja ohjelmat ovat.",
  },
  {
    q: "Onko valmennus mahdollista etänä?",
    a: "Kyllä. Tarjolla on sekä lähi- että etävalmennusta. Etävalmennukseen kuuluu ohjelmat, videopuhelut, viestituki ja seuranta. Moni lisää siihen yksittäisiä tapaamisia ainakin alkuun.",
  },
  {
    q: "Kuinka usein tapaamiset ovat?",
    a: "Tapaamistiheys sovitaan aina asiakkaan kanssa. Suosituin ja tyypillisin valmennustiheys on kerran viikossa, jolla on saatu varsinkin alussa parhaimmat tulokset.",
  },
  {
    q: "Mitkä ovat maksutavat?",
    a: "Lasku, MobilePay (#26408), liikuntaedut, verkkokauppa ja Klarna. Yksittäisiä treenejä voi ostaa verkkokaupasta, ja valmennuksen voi pilkkoa pienempiin osiin.",
  },
  {
    q: "Missä ohjaat?",
    a: "Pääsääntöisesti Helsingissä: Voimalaitos Merihaka, Liikuntamylly ja Töölön kisahalli. Vantaalla tarvittaessa OleFit Porttipuistossa ja Fit Tammistossa. Myös asiakkaan omissa tiloissa voidaan sopia erikseen.",
  },
  {
    q: "Miten aloitan?",
    a: "Varaa veloitukseton 30 minuutin kartoituspuhelu tai laita viestiä suoraan osoitteeseen kati@katilytsy.fi. Voit myös ottaa yhteyttä somen kautta tai yhteydenottolomakkeella.",
  },
];

export const JOHTAJA_FAQS: Faq[] = [
  {
    q: "Mitä jos kalenteri on aivan täynnä?",
    a: "Juuri siksi valmennus rakennetaan sinun arkeesi. Tapaamiset sovitaan etukäteen ja ohjelma toimii myös hotellilla tai kotona. Tavoite on lisätä voimavaroja, ei kuormaa.",
  },
  {
    q: "Mitä Firstbeat Life mittaa?",
    a: "Kannettava mittalaite antaa reaaliaikaista dataa unesta, stressistä, palautumisesta ja kuntotasosta. Sen avulla on ennaltaehkäisty uupumusta ja löydetty jopa oireeton sairaus.",
  },
  {
    q: "Voinko maksaa osissa?",
    a: "Kyllä. Verkkokaupan kautta voit maksaa Klarnalla osissa tai pilkkoa valmennuksen pienempiin kokonaisuuksiin. Myös lasku ja liikuntaedut ovat mahdollisia.",
  },
  {
    q: "Onko tyytyväisyystakuu?",
    a: "Kyllä. Jos et ole tyytyväinen 14 vuorokauden aikana, saat rahasi takaisin.",
  },
  {
    q: "Voinko jatkaa 3 kuukauden jälkeen?",
    a: "Kyllä. Valmennuksesta on 3 ja 6 kuukauden kokonaisuudet, ja jatkosta voidaan sopia tarpeesi mukaan.",
  },
];

export const LYTSYN_FAQS: Faq[] = [
  {
    q: "Miten mukaan?",
    a: "Varmista paikkasi maksamalla ryhmämaksu verkkokaupassa, MobilePaylla (#26408, Personal trainer Kati Lytsy) tai liikuntaedulla. Voit myös täyttää yhteydenottolomakkeen, jos haluat maksaa laskulla tai sinulla on kysyttävää.",
  },
  {
    q: "Miten iso ryhmä on?",
    a: "Ryhmän koko pidetään pienenä, 4–8 henkeä. Näin jokainen saa henkilökohtaista ohjausta myös ryhmävalmennuksessa.",
  },
  {
    q: "Entä jos en pääse kaikille kerroille?",
    a: "Järjestän pari korvauskertaa ryhmän ulkopuolella, joihin voi tulla korvailemaan kertoja. Lähtiessäsi mukaan sitoudut treenien aikatauluun.",
  },
  {
    q: "Pitääkö olla tietyssä kunnossa?",
    a: "Voit tulla mukaan oli kuntotasosi mikä tahansa. Jos sinulla on paljon rajoituksia tai salilla käynti on täysin uutta, suosittelen aloittamaan henkilökohtaisesta valmennuksesta.",
  },
  {
    q: "Pitääkö olla salijäsenyys?",
    a: "Ei tarvitse. Kertamaksun voi ostaa Voimalaitos Merihaan sovelluksesta. Jos sali tulee käyttöön myös omalla ajalla, kortti kannattaa hankkia.",
  },
  {
    q: "Entä jos treenit eivät sovikaan minulle?",
    a: "Ei hätää – valmennuksissa on aina 14 vuorokauden 100 % tyytyväisyystakuu. Jos ryhmä ei tunnu sopivalta, palautan rahat.",
  },
];

export const ETA_FAQS: Faq[] = [
  {
    q: "Mitä etävalmennus sisältää?",
    a: "Alkukartoituksen, henkilökohtaiset treeniohjelmat päivityksineen, ravintovalmennuksen, mittaukset ja testit, viikoittaisen seurannan Traineron kautta, 30 minuutin tapaamisen sekä jatkuvan tuen.",
  },
  {
    q: "Tarvitsenko oman salin?",
    a: "Et. Voit treenata salilla, kotona tai molemmissa. Kotiin saat halutessasi valmiit 15–30 minuutin treenivideot.",
  },
  {
    q: "Voinko lisätä lähitapaamisia?",
    a: "Kyllä. Etävalmennukseen voi lisätä yksittäisiä lähitapaamisia alkaen 99 €. Moni suosittelee niitä ainakin alkuun.",
  },
  {
    q: "Mitä valmennus maksaa?",
    a: "Etävalmennus on 150 €/kk, minimiaika 3 kk. Firstbeat Life -mittauksella 225 €/kk. Lähitapaamiset alk. 99 €.",
  },
];

export const WORK_FAQS: Faq[] = [
  {
    q: "Minkä kokoisille yrityksille palvelut sopivat?",
    a: "Pienistä tiimeistä koko henkilöstöön. Liikuntavartti on suunnattu yli 10 henkilön yrityksille, mutta muut työhyvinvoinnin palvelut räätälöidään yrityksen koon mukaan.",
  },
  {
    q: "Onko liikuntavartti oikeasti maksuton?",
    a: "Kyllä, veloitukseton liikuntavartti on varattavissa PK-seudulla. Täytä lomake, niin Kati soittaa ja sopii ajan.",
  },
  {
    q: "Miten palvelu räätälöidään?",
    a: "Aloitamme kartoituksella: millaisia haasteita työssä on, millainen porukka ja mitä toivotaan. Sen pohjalta rakennetaan sisältö, joka sopii juuri teidän arkeenne.",
  },
  {
    q: "Voiko palvelun toteuttaa etänä?",
    a: "Kyllä. Ohjattu liikunta ja luennot onnistuvat myös etänä, ja taukojumppa ei vaadi paljoa tilaa.",
  },
];

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  image: string;
  alt: string;
  body: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "selkarankareuma",
    title: "Liikuntakyky ei ole itsestäänselvyys",
    excerpt:
      "Kun sain selkärankareumadiagnoosin 2019, olin shokissa. Monipuolinen liikunta on pitänyt tilanteeni hyvänä – ja opettanut arvostamaan sitä, mihin keho pystyy.",
    date: "15.9.2026",
    dateISO: "2026-09-15",
    image: "/images/about-1.jpg",
    alt: "Kati Lytsy juoksemassa portaita",
    body: [
      {
        type: "p",
        text: "Selkärankareuman kanssa on oppinut elämään, ja vielä paremmin kuuntelemaan kehoa. Ja ennen kaikkea pitämään liikuntakykyä lahjana ja arvokkaana asiana, eikä itsestäänselvyytenä.",
      },
      { type: "h2", text: "2019 sain diagnoosin vuosia kestäneisiin kipuihin" },
      {
        type: "p",
        text: "Vuonna 2018 sain tarpeekseni pakarakivuista, jotka olivat alkaneet vuonna 2010. Yhtenä päivänä lähti konkreettisesti jalat alta, enkä kyennyt edes konttaamaan. Päätin ottaa selvää asiasta, vaikka moni oli sanonut, ettei ole mitään vakavaa – liikun vain liikaa. Magneettikuvien ja verikokeiden jälkeen diagnoosi tuli: selkärankareuma. Olin shokissa.",
      },
      {
        type: "p",
        text: "Pitkään kielsin koko asian. Puoli vuotta yritin kieltää sen itseltäni – eihän minulla nyt voi olla selkäsairautta. Istuminen kuitenkin muistutti heti, missä mennään, ja liikkuminen auttoi kipuihin.",
      },
      { type: "h2", text: "Sairaus ei määrittele minua" },
      {
        type: "p",
        text: "Sairaus ei kuitenkaan määrittele minua ihmisenä tai estä elämästä. Rajoittaa välillä toki: huonompana aaltona en välttämättä saa aamulla kunnolla sukkia jalkaan ja sängystä nousu ei ole kovin ketterää. Olen kuitenkin oppinut, mitkä asiat provosoivat ja mitkä auttavat.",
      },
      {
        type: "p",
        text: "Kipujaksojen aikana olen muokannut salitreenejäni: kyykyt ja maastavedot ovat jääneet pois, olen tehnyt enemmän laitteissa ja panostanut liikkuvuuteen erityisesti aamuisin. Istumisen tauotus on äärimmäisen tärkeää. Tanssi ja monipuolinen liikunta ovat auttaneet paljon.",
      },
      { type: "h2", text: "Katse asioihin, joihin voi vaikuttaa" },
      {
        type: "p",
        text: "Tiedän, että siellä on paljon teitä, joilla on myös diagnoosi. Alku oli itselle todella iso shokki – niin kuin varmasti kaikille, jotka saavat jonkun diagnoosin. Olipa tilanne mikä tahansa, on tärkeää kääntää katse asioihin, joihin itse voi vaikuttaa.",
      },
      {
        type: "p",
        text: "Liikunnalla, ravinnolla, unella ja henkisellä hyvinvoinnilla on iso merkitys. Ne kortit kannattaa aina katsoa läpi. Jos en olisi liikkunut elämäni aikana, tilanne voisi olla täysin erilainen. Fysioterapeutti sanoi minulle, että monipuolisen liikunnan ansiosta sairaus ei ole edennyt ja tilanne on hyvä.",
      },
      {
        type: "quote",
        text: "Vaalikaa kykyänne liikkua. Kun pidämme kehostamme huolta, voimme vaikuttaa todella paljon siihen, miten kehomme voi.",
      },
      {
        type: "p",
        text: "Aina löytyy vaihtoehtoja – tärkeää on löytää liikkeet, jotka sopivat itselle eivätkä pahenna tilannetta. Jos kaipaat apua oikeiden liikkeiden löytämiseen ja ohjelman laatimiseen, verkkokaupasta voit ostaa 1–3 kerran PT-paketin, jossa käymme liikkeet, saliohjelman ja liikkuvuusliikkeet tilanteeseesi sopivaksi.",
      },
    ],
  },
  {
    slug: "miksi-paino-jumittaa",
    title: "Miksi paino jumittaa, vaikka syö terveellisesti?",
    excerpt:
      "Teet kaiken oikein – syöt puhtaasti, vältät sokerit ja herkut – mutta vaaka ei liiku. Kuusi yleistä syytä, jotka kannattaa tarkistaa ennen kuin kiristät ruokavaliota lisää.",
    date: "8.5.2025",
    dateISO: "2025-05-08",
    image: "/images/blog-weight.webp",
    alt: "Kati Lytsy peilin edessä",
    body: [
      {
        type: "p",
        text: "Tuntuuko joskus siltä, että teet kaiken oikein – syöt puhtaasti, vältät sokerit ja herkut – mutta silti vaaka ei näytä toivottuja asioita? Tiedän kokemuksesta, että tämä voi olla todella turhauttavaa. Tämä tilanne on ollut myös monella asiakkaallani. Asia ei ole aina niin yksiselitteinen, ja siksi on hyvä selvittää, mistä se voisi johtua.",
      },
      { type: "h2", text: "1. Syöt ehkä liikaa – vaikka se olisi terveellistä ruokaa" },
      {
        type: "p",
        text: "Pähkinät, avokado ja oliiviöljy ovat täynnä ravinteita, ja niiden on tärkeää olla ruokavaliossa mukana. Niissä tulee kuitenkin mukana paljon energiaa. Kalorivaje on painonpudotuksen edellytys, ja myös terveellistä ruokaa voi syödä määrällisesti liikaa.",
      },
      { type: "h2", text: "2. Stressi ja univaje sabotoivat tuloksia" },
      {
        type: "p",
        text: "Pitkittynyt stressi ja huono uni nostavat kortisolitasoja, mikä voi vaikeuttaa rasvanpolttoa ja lisätä kehon tarvetta varastoida energiaa. Krooninen stressi voi vaikeuttaa palautumista ja nukkumista, ja sitä kautta vaikuttaa ruokahaluun ja syömiskäyttäytymiseen.",
      },
      { type: "h2", text: "3. Hormonaaliset tekijät" },
      {
        type: "p",
        text: "Erityisesti naisilla hormonit voivat vaikuttaa voimakkaasti aineenvaihduntaan. Painonpudotus voi olla erittäin vaikeaa ilman lääkitystä, jos kilpirauhanen ei toimi normaalisti. Vaihdevuodet muuttavat hormonitasoja paljon, mikä puolestaan vaikuttaa aineenvaihduntaan. Hormonitasot voi olla hyvä varmistaa verikokeilla, jos epäilee niissä olevan jotain häikkää.",
      },
      {
        type: "p",
        text: "Hyvä on myös muistaa, että kuukautiset voivat nostaa painoa 1–4 kiloa. Sinä viikkona ei yleensä kannata tehdä isoja johtopäätöksiä, vaan katsoa tilannetta kuukautisten jälkeen.",
      },
      { type: "h2", text: "4. Liikunta lisää ruokahalua" },
      {
        type: "p",
        text: "”Nyt olen ansainnut kyllä tämän ruuan, kun kävin treenaamassa.” Kuulostaako tutulta? Saatamme yliarvioida liikunnan aikana poltetut kalorit, ja lisääntynyt liikunta voi helposti lisätä ruokahalua. Huomaamattaan voi siis syödä enemmän kuin ennen. Siksi liikunta edellä ei kannata pudottaa painoa – energiavaje kannattaa hakea ruuasta, ei liikunnasta.",
      },
      { type: "h2", text: "5. Rasva palaa ja lihasta tulee tilalle" },
      {
        type: "p",
        text: "Kaikki kehittyminen ei näy vaa'alla. Kehonkoostumus voi muuttua oikeaan suuntaan, vaikka paino ei tippuisi joka viikko. Esimerkiksi eräällä asiakkaalla paino tippui kilon, mutta samaan aikaan rasvaa lähti noin 3 kiloa ja lihasta tuli tilalle kilo. Samanaikainen lihaksen kasvatus ja rasvanpoltto voi olla mahdollista, jos mukana on voimaharjoittelua eikä liian suurta kalorivajetta.",
      },
      {
        type: "p",
        text: "Vaa'an sijasta voi seurata myös vyötärönympärystä. Jos se menee alaspäin ja treenipainot salilla nousevat, oikeita asioita tapahtuu – vaikka paino ei tippuisi.",
      },
      { type: "h2", text: "6. Et tiedä, kuinka paljon energiaa oikeasti saat" },
      {
        type: "p",
        text: "Hyvin monesti voi käydä niin, että arvioi energiamäärää väärin – joko alikirjaamalla ruokapäiväkirjaan ruokamääriä tai olemalla tietoinen syömistään energiamääristä. Joinain päivinä energiaa voi tulla vähäisesti 1 200 kaloria, mutta toisina päivinä määrät voivat nousta 4 000 kaloriin. Tai ei laske juotuja kaloreita: viikonlopun viiniä ei lasketa.",
      },
      {
        type: "p",
        text: "Yllättävistäkin paikoista voi tulla 200–500 lisäkaloria. Esimerkiksi jos juo paljon kahvia ja käyttää sen kanssa maitoa, käy useamman kerran viikossa ottamassa erikoiskahveja tai syö juustosiivuja siellä täällä.",
      },
      { type: "h2", text: "Mitä tehdä?" },
      {
        type: "p",
        text: "Suosittelen ensin laskemaan oman lepoaineenvaihdunnan sekä kokonaisenergiankulutuksen. Yleinen aktiivisuustaso on yleensä 1,5–1,6 istumatyötä tekevälle. Lepoaineenvaihdunnan alapuolelle ei kannata mennä – se on energiamäärä, jota tarvitset lepotilassa. Kokonaisenergiakulutus on määrä, jolla paino pysyy samassa.",
      },
      {
        type: "p",
        text: "Jos haluat pudottaa painoa, vähennä kokonaisenergiakulutuksesta 200–500 kcal. Jos haluat lihasmassaa, lisää ensin esimerkiksi 200 kaloria. Sen jälkeen rakenna arkeesi sopiva ruokavalio tällä energiamäärällä, huomioiden rajoitukset ja mieltymyksesi. Alkuun kannattaa mennä hyvin tarkasti: punnita ruuat ja katsoa, mitä tapahtuu. Tämä on motivaationkin kannalta tärkeää, jotta saa myös niitä tuloksia.",
      },
      {
        type: "p",
        text: "95 % tapauksissa paino on lähtenyt tippumaan tällä tavalla. Hahmotat paremmin myös määrät silmämääräisesti, ja sinun on helpompi siirtyä soveltamaan tietoa. Ja tämä auttaa myös syömään riittävästi. Itse kannustan syömään mahdollisimman kylläiseksi niissä raameissa, että energiavaje toteutuu – eikä menemään heti mahdollisimman pienillä energiamäärillä.",
      },
      {
        type: "p",
        text: "Jos mikään näistä ei toimi, kannattaa ehdottomasti käydä verikokeissa poissulkemassa esimerkiksi kilpirauhasen vajaatoiminta. Ja miettiä ratkaisuja unen ja stressinhallinnan parantamiseksi, jos siellä meinaa olla ongelmaa. Muista ottaa mukaan myös muitakin mittareita, ettei kaikki ole vaa'an varassa.",
      },
    ],
  },
  {
    slug: "7-syyt-miksi-haluttuja-tuloksia-ei-tule-salilla",
    title: "7 syytä, miksi haluttuja tuloksia ei tule salilla",
    excerpt:
      "Käyt salilla säännöllisesti, syöt mielestäsi terveellisesti – mutta kehitystä ei tule. Tarkista nämä seitsemän kohtaa omista treeneistäsi.",
    date: "17.11.2023",
    dateISO: "2023-11-17",
    image: "/images/blog-gym.jpg",
    alt: "Kati Lytsy treenaamassa kuntosalilla",
    body: [
      {
        type: "p",
        text: "Kuulostaako tutulta? Käyt salilla tai liikkumassa säännöllisesti, syöt mielestäsi terveellisesti ja kaiken pitäisi olla kunnossa – mutta silti haluttua kehitystä ei tule. Kunto ei kehity, motivaatio laskee, paino junnaa eikä mitään tapahdu. Mikä avuksi?",
      },
      {
        type: "p",
        text: "Olen itsekin kompastunut näihin aikoinani, ja varmasti moni muukin. Panostamalla oikeisiin asioihin huomaat, että haluttua kehitystä alkaakin tulla. Tsekkaa lista läpi ja katso, löytyisikö sieltä sinun tilannettasi selittävä tekijä.",
      },
      { type: "h2", text: "1. Syöt liian vähän ja/tai treenaat liikaa" },
      {
        type: "p",
        text: "Moni nainen menee tälläkin hetkellä 1 200 kalorin tietämillä, ja siihen kun lisätään paljon ryhmäliikuntaa ja juoksua, alkaa varmasti tuntua mielenkin päällä. Moni ajattelee, että kehittyäkseen pitää käydä joka aamu aamulenkillä tyhjällä vatsalla ja asua salilla. Ei pidä. Kehittävä treeni on sellaista, mistä myös palaudut.",
      },
      { type: "h2", text: "2. Treenistä puuttuu punainen lanka" },
      {
        type: "p",
        text: "Mikä on tavoitteesi? Tukeeko treeni tavoitettasi? Treeniaika voi helposti mennä haahuiluun, jos ei itsekään tiedä, mitä tänään tekisi ja missä fokus on. Treenin jälkeen pitäisi tulla tunne, että ”vitsit, oli hyvä treeni”. Jos olo on enemmänkin ”tulipahan käytyä”, on syytä laittaa fokus treenin sisältöön.",
      },
      { type: "h2", text: "3. Et seuraa kehittymistäsi tai treenaat aina samalla tavalla" },
      {
        type: "p",
        text: "Sarjapainoja kannattaa kirjata säännöllisesti ylös ja seurata niiden kehitystä. Yleinen virhe on mennä aina mutu-tuntumalla, treenata samoilla liikkeillä ja samoilla painoilla. Lihakset tottuvat nopeasti, eikä riittävää ärsykettä synny. Kirjaaminen ja jaksottelu auttavat tuomaan nousujohteista treeniä, jossa volyymi kasvaa viikko viikolta.",
      },
      { type: "h2", text: "4. Treenaat mukavuusalueella" },
      {
        type: "p",
        text: "Nousujohteinen treeni vaatii treenipainojen nostoa, ja hyvin moni treenaa liian kevyellä painolla. Jos tehdään 10–12 toistoa, moni tekee sellaisella painolla, että saakin 20–30 toistoa. On helppo jäädä turvallisiin, kivoihin painoihin. Uskalla haastaa itseäsi ja ota seuraavalla kerralla isommat painot.",
      },
      { type: "h2", text: "5. Epäonnistumisen pelko tai itseluottamuksen puute" },
      {
        type: "p",
        text: "”En varmasti saa noita ylös!” On hyvin yleistä, että emme luota itseemme treeniä aloittaessa. Emme tiedä, mihin kaikkeen oikeasti pystymme. Tämä ajatus on usein itseään toteuttava ennuste. Toinen kehityksen stoppaaja on epäonnistumisten välttely: jäämme mukavuusalueelle emmekä uskalla haastaa itseämme. Tekniikat kannattaa laittaa ensimmäiseksi kuntoon – kun tietää, mitä tekee, itsevarmuus kasvaa.",
      },
      { type: "h2", text: "6. Treenaat aina liian kovaa tai liian epäsäännöllisesti" },
      {
        type: "p",
        text: "Superkompensaatiota ei synny, jos treenaa hyvin epäsäännöllisesti. Kunto ehtii laskea samaan lähtötasoon kuin edellisellä kerralla, jos ärsykettä ei tule tarpeeksi usein. Kehittyäkseen on jaksettava treenata kovaakin raskailla viikoilla, mutta sitä pitää seurata kevyt viikko, jonka aikana palaudutaan.",
      },
      {
        type: "p",
        text: "Jos treenaa liian usein ja liian kovaa – aina failureen – ärsyke tulee liian äkkiä edellisestä treenistä ja syntyy ylirasitustila. Silloin tulee yleensä muitakin oireita: treenitehot laskevat, harjoituspainot eivät nouse ja yöunet voivat häiriintyä. Myös mieliala synkkenee ja pinna palaa helpommin.",
      },
      { type: "h2", text: "7. Panostat lisäravinteisiin ja epäolennaisiin asioihin" },
      {
        type: "p",
        text: "Et tarvitse purkkitolkulla lisäravinteita kehittyäksesi. Jos kehitystä ei tule, syyt löytyvät aivan varmasti muualta. Toki pari lisäravinnetta voi olla hyvä lisä, mutta ne eivät ole ensimmäinen asia. Perustekeminen salilla ja ruokapuolella pitää olla ensin kunnossa. Sinun ei tarvitse matkia suosituimpia trendiliikkeitä onnistuaksesi – perusliikkeet kuntoon ja yllä oleviin asioihin panostus, niin huomaat kehittyväsi.",
      },
      {
        type: "quote",
        text: "Kaikki tieto on meillä käsissämme. Jos pelkkä tieto riittäisi, olisimme kaikki hyvässä kunnossa. Tiedon lisäksi tarvitsemme konkreettisia steppejä ja käytäntöä, joilla muutos tehdään.",
      },
    ],
  },
];

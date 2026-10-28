import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tietosuoja",
  description:
    "Personal trainer Kati Lytsyn rekisteriseloste ja tietosuojaseloste. Miten henkilötietoja kerätään, käytetään ja suojataan.",
  alternates: { canonical: "/tietosuoja" },
};

export default function TietosuojaPage() {
  return (
    <section className="container-page py-12 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Tietosuoja</p>
        <h1 className="page-title mt-4 font-display font-semibold">
          Rekisteriseloste ja tietosuoja.
        </h1>
        <p className="mt-5 text-sm text-muted">Päivitetty 27.10.2026</p>

        <div className="prose-editorial mt-10">
          <p>
            Tässä tietosuojaselosteessa kerromme, minkälaisia henkilötietoja
            voimme kerätä sinusta tilatessasi maksuttomia tai maksullisia
            tuotteita tai palveluita tai ottaessasi meihin yhteyttä
            verkkosivustomme kautta. Käyttämällä palvelua hyväksyt tietojesi
            käsittelyn tämän selosteen mukaisesti.
          </p>
          <p>
            Voimme ajoittain muuttaa tätä selostetta julkaisemalla siitä uuden
            version verkossa, joten tarkistathan sen säännöllisesti.
          </p>

          <h2>1. Rekisterinpitäjä</h2>
          <p>
            Personal trainer Kati Lytsy
            <br />
            Y-tunnus {SITE.businessId}
            <br />
            {SITE.address}
          </p>

          <h2>2. Rekisteriasioista vastaava yhteyshenkilö</h2>
          <p>
            Kati Lytsy
            <br />
            {SITE.address}
            <br />
            Sähköposti:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>

          <h2>3. Rekisterin nimi</h2>
          <p>Personal trainer Kati Lytsy asiakasrekisteri.</p>

          <h2>4. Rekisteriin liittyvät sivustot</h2>
          <p>www.katilytsy.fi</p>

          <h2>5. Käyttötarkoitus</h2>
          <p>
            Tietoja käytetään asiakassuhteen hoitamiseen ja kehittämiseen sekä
            sähköiseen markkinointiin. Henkilötietojen käsittelyn oikeusperusteena
            on suostumus tai sopimus.
          </p>

          <h2>6. Rekisterin tietosisältö</h2>
          <p>
            Rekisteri koostuu sivuston kautta yhteyttä ottaneista, maksuttoman
            oppaan tilanneista sekä tuotteita ja palveluita ostaneista
            käyttäjistä.
          </p>
          <ul>
            <li>
              Asiakasrekisteri: nimi, sähköposti, puhelinnumero sekä sopimus- ja
              tilaustiedot.
            </li>
            <li>Uutiskirjeen tilaajarekisteri: nimi ja sähköposti.</li>
          </ul>
          <p>
            Uutiskirjeen tilaaja voi milloin tahansa muuttaa ja täydentää tietoja
            jokaisen uutiskirjeen mukana olevasta linkistä.
          </p>

          <h2>7. Säännönmukaiset tietolähteet</h2>
          <p>
            Asiakasrekisterin tiedot saadaan asiakkaalta sopimuksen syntymisen
            yhteydessä. Uutiskirjeen tilaajien tiedot saadaan, kun käyttäjä tilaa
            maksuttoman oppaan, osallistuu webinaariin tai ostaa valmennuksen,
            kurssin tai digitaalisen tuotteen.
          </p>

          <h2>8. Yksityisyys ja tietosuoja</h2>
          <p>
            Sivuston asiakastiedot ovat luottamuksellisia, eikä niitä luovuteta
            kolmansille osapuolille markkinointi-, myynti- tai
            markkinatutkimustarkoituksiin. Henkilötietoja voidaan luovuttaa
            viranomaisille Suomen lakien mukaisesti niin pyydettäessä.
          </p>
          <p>
            Sivustolla ei säilytetä käyttäjän pankkiyhteystietoja eikä
            luottokorttitietoja. Verkkokaupan maksunvälitys toteutetaan erillisen
            maksupalveluntarjoajan kautta, kun korttimaksut otetaan käyttöön.
          </p>

          <h2>9. Tietojen luovuttaminen ja siirto EU:n tai ETA:n ulkopuolelle</h2>
          <p>
            Rekistereihin kerättyjä tietoja ei luovuteta yrityksen ulkopuolelle
            markkinointi-, myynti-, mielipide- tai markkinatutkimustarkoituksiin.
            Tietoja voidaan luovuttaa vain seuraavissa tapauksissa:
          </p>
          <ul>
            <li>maksunvälitys toteutetaan laskulla ja niitä käsitellään kirjanpidossa;</li>
            <li>sähköpostiviestien välitys toteutetaan sähköpostipalveluntarjoajan kautta;</li>
            <li>verkkokaupan maksunvälitys toteutetaan maksupalveluntarjoajan kautta.</li>
          </ul>
          <p>
            Rekisteri on tallennettu tietojärjestelmään, ja se on suojattu ja
            sijoitettu siten, ettei asiaankuulumattomilla tahoilla ole pääsyä
            rekisteritietoihin.
          </p>

          <h2>10. Tarkastusoikeus</h2>
          <p>
            Rekisteröidyllä on oikeus tarkastaa, mitä häntä koskevia tietoja
            asiakasrekisteriin on talletettu. Tarkastuspyynnöt osoitetaan Kati
            Lytsylle sähköpostitse tai allekirjoitetulla kirjeellä yllä olevaan
            osoitteeseen.
          </p>

          <h2>11. Oikeus tietojen korjaamiseen</h2>
          <p>
            Omia tietoja voi korjata ottamalla yhteyttä rekisterinpitäjään
            sähköpostitse tai allekirjoitetulla kirjeellä. Rekisterinpitäjä tekee
            toivotut muutokset.
          </p>

          <h2>12. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h2>
          <p>
            Rekisterissä olevalla henkilöllä on EU:n yleisen tietosuoja-asetuksen
            mukaiset oikeudet. Sinulla on oikeus tulla unohdetuksi vain, jos
            meillä ei ole lakisääteisiä velvoitteita jatkaa henkilötietojesi
            käsittelyä.
          </p>

          <h2>13. Evästeet ja paikallinen tallennus</h2>
          <p>
            Sivusto käyttää välttämättömiä toimintoja, kuten selaimen paikallista
            tallennustilaa ostoskorin muistamiseen. Evästeitä voidaan käyttää
            myös sivuston käytön analysointiin ja mainosten kohdentamiseen, jos
            analytiikka- tai mainontatyökalut ovat käytössä.
          </p>
          <p>
            Voit poistaa evästeet ja paikallisen tallennuksen käytöstä selaimesi
            asetuksista. Huomaa, että tämä voi vaikuttaa palveluiden tehokkaaseen
            käyttöön.
          </p>

          <h2>Lisätietoja</h2>
          <p>
            Rekisteriin liittyvissä kysymyksissä voit olla yhteydessä
            sähköpostilla{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Voit myös lukea{" "}
            <Link href="/yhteystiedot">yhteystiedot</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

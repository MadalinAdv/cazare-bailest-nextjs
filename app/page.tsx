import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      {/* Adăugăm scripturile externe folosind next/script */}
      <Script src="https://third-party-script.js" strategy="lazyOnload" />

      <section className="home">
        <div className="home-text">
          <h5>Let&apos;s</h5>
          <h1>Choose your <br />own camera</h1>
          <p>
            Alege-ți una dintre camerele noastre, avem o diversitate destul de mare
            <br />
            preturile sunt accesibile pentru toată lumea
          </p>
          <a href="tel:+40722465185" className="btn">Contact</a>
          <a href="https://www.booking.com/hotel/ro/gigios-sport-amp-relax.ro.html" target="_blank" className="btn">Rezervă cameră</a>
        </div>
      </section>

      <section className="holiday">
        <div className="holiday-img">
          <Link href="/queen" legacyBehavior>
            <a>
              <Image src="/assets/images/camera-2.jpg" alt="Camera Queen" width={500} height={300} />
            </a>
          </Link>
        </div>
        <div className="holiday-text">
          <h5>Camera Queen</h5>
          <h2>Pretul este de la 189 RON/noapte</h2>
          <p>
            Camerele noastre sunt spațioase și curate, îmbină utilul cu plăcutul.
            Camerele noastre sunt echipate cu pat king size, foarte confortabil,
            smart tv, dar și cu cadrul unei proprietăți dispusă în spațiu verde,
            cu teren de fotbal.
          </p>
          <a href="tel:+40722465185" className="btn">Contact</a>
          <a href="https://www.booking.com/hotel/ro/gigios-sport-amp-relax.ro.html" target="_blank" className="btn">Rezervă cameră</a>
        </div>
      </section>

      <section className="culture">
        <div className="culture-text">
          <h5>Camera Dublă Deluxe</h5>
          <h2>Pretul este de la 199 RON/noapte</h2>
          <p>
            Camerele noastre sunt spațioase și curate, îmbină utilul cu plăcutul.
            Camerele noastre sunt echipate cu pat king size, foarte confortabil,
            smart tv, dar și cu cadrul unei proprietăți dispusă în spațiu verde,
            cu teren de fotbal.
          </p>
          <a href="tel:+40722465185" className="btn">Contact</a>
          <a href="https://www.booking.com/hotel/ro/gigios-sport-amp-relax.ro.html" target="_blank" className="btn">Rezervă cameră</a>
        </div>
        <div className="culture-img">
          <Link href="/deluxe" legacyBehavior>
            <a>
              <Image src="/assets/images/deluxe1.jpg" alt="Camera Dublă Deluxe" width={500} height={300} />
            </a>
          </Link>
        </div>
      </section>

      <section className="holiday">
        <div className="holiday-img">
          <Link href="/buget" legacyBehavior>
            <a>
              <Image src="/assets/images/buget.jpg" alt="Camera Dublă Buget" width={500} height={300} />
            </a>
          </Link>
        </div>
        <div className="holiday-text">
          <h5>Camera Dublă Buget</h5>
          <h2>Pretul este de la 179 RON/noapte</h2>
          <p>
            Camerele noastre sunt spațioase și curate, îmbină utilul cu plăcutul.
            Camerele noastre sunt echipate cu pat king size, foarte confortabil,
            smart tv, dar și cu cadrul unei proprietăți dispusă în spațiu verde,
            cu teren de fotbal.
          </p>
          <a href="tel:+40722465185" className="btn">Contact</a>
          <a href="https://www.booking.com/hotel/ro/gigios-sport-amp-relax.ro.html" target="_blank" className="btn">Rezervă cameră</a>
        </div>
      </section>

      <section className="culture">
        <div className="culture-text">
          <h5>Camera Dublă Economy</h5>
          <h2>Pretul este de la 169 RON/noapte</h2>
          <p>
            Camerele noastre sunt spațioase și curate, îmbină utilul cu plăcutul.
            Camerele noastre sunt echipate cu pat king size, foarte confortabil,
            smart tv, dar și cu cadrul unei proprietăți dispusă în spațiu verde,
            cu teren de fotbal.
          </p>
          <a href="tel:+40722465185" className="btn">Contact</a>
          <a href="https://www.booking.com/hotel/ro/gigios-sport-amp-relax.ro.html" target="_blank" className="btn">Rezervă cameră</a>
        </div>
        <div className="culture-img">
          <Link href="/economy" legacyBehavior>
            <a>
              <Image src="/assets/images/economy.jpg" alt="Camera Dublă Economy" width={500} height={300} />
            </a>
          </Link>
        </div>
      </section>

      <section className="tour">
        <div className="center-text">
          <h2>Alte fotografii</h2>
        </div>
        <div className="tour-content">
          <div className="box">
            <Link href="/other" legacyBehavior>
              <a>
                <Image src="/assets/images/evenimente.jpg" alt="Evenimente" width={500} height={300} />
              </a>
            </Link>
            <h6>Evenimente</h6>
            <h4>Spațiu pentru evenimente</h4>
          </div>

          <div className="box">
            <Link href="/other" legacyBehavior>
              <a>
                <Image src="/assets/images/topogan.jpg" alt="Topogan și altele" width={500} height={300} />
              </a>
            </Link>
            <h6>Topogan și altele</h6>
            <h4>Avem locuri de joacă și pentru cei mici</h4>
          </div>

          <div className="box">
            <Link href="/other" legacyBehavior>
              <a>
                <Image src="/assets/images/piscina.jpg" alt="Piscină (PE TIMP DE VARĂ)" width={500} height={300} />
              </a>
            </Link>
            <h6>Piscină (PE TIMP DE VARĂ)</h6>
            <h4>La cazarea noastră există și piscină</h4>
          </div>
        </div>
      </section>
    </>
  );
}

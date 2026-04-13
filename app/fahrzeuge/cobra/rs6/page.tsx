"use client"
import { CobraDetailPage } from "@/components/cobra-detail-page"
const B = "https://www.cobra-cn.de/wp-content/uploads"
export default function RS6Page() {
  return (
    <CobraDetailPage
      model="RS6"
      tagline="900 PS. Ohne Kompromisse."
      ps="900 PS"
      kw="662 kW"
      rpm="6.600 U/min"
      nm="1.080 Nm"
      nmRpm="4.200 U/min"
      topSpeed=">300 km/h"
      accel100="<3,2 Sek."
      accel200="<8,8 Sek."
      price="159.900 €"
      priceNet="134.369,75 €"
      brakesFront="Brembo 6-Kolben Festsattel, 355mm geschlitzt & innenbelüftet"
      brakesRear="Brembo 4-Kolben Festsattel, 310mm gelocht & innenbelüftet"
      wheelsFront='9×18"'
      wheelsRear='11,5×18"'
      tiresFront="245/40 ZR18"
      tiresRear="315/30 ZR18"
      gearbox="6-Gang Rennschaltgetriebe Tremec"
      differential="Rennsperrdifferential Drexler-BMW 3.64"
      extras={["Traktionskontrolle", "Stabilisatoren", "Rennsperrdifferential Drexler"]}
      heroImage={`${B}/2016/07/7.jpg`}
      images={[
        `${B}/2016/07/7.jpg`,
        `${B}/2016/07/6.jpg`,
        `${B}/2016/07/3.jpg`,
        `${B}/2016/07/2.jpg`,
        `${B}/2016/07/1.jpg`,
        `${B}/2015/09/ELF_9990-1024x683.jpg`,
        `${B}/2015/09/Bild-4-1024x768.jpg`,
        `${B}/2016/02/ac-cobra-superblower-c466009062013091859_7.jpg`,
        `${B}/2016/02/ac-cobra-superblower-c466009062013091859_8.jpg`,
      ]}
    />
  )
}

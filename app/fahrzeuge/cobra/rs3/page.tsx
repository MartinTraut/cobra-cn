"use client"
import { CobraDetailPage } from "@/components/cobra-detail-page"
const B = "https://www.cobra-cn.de/wp-content/uploads"
export default function RS3Page() {
  return (
    <CobraDetailPage
      model="RS3"
      tagline="530 PS. Pure Essenz."
      ps="530 PS"
      kw="390 kW"
      rpm="6.400 U/min"
      nm="670 Nm"
      nmRpm="5.100 U/min"
      topSpeed="280 km/h"
      accel100="3,9 Sek."
      accel200="10,6 Sek."
      price="102.900 €"
      priceNet="86.470,59 €"
      brakesFront="Brembo 4-Kolben Festsattel, 332mm gelocht & innenbelüftet"
      brakesRear="Brembo 4-Kolben Festsattel, 310mm gelocht & innenbelüftet"
      wheelsFront='9×18"'
      wheelsRear='11,5×18"'
      tiresFront="245/40 ZR18"
      tiresRear="315/30 ZR18"
      gearbox="6-Gang BorgWarner"
      differential="Automatisches Sperrdifferential BMW 3.64"
      heroImage={`${B}/2015/09/ELF_9989-1024x683.jpg`}
      images={[
        `${B}/2015/09/IMG_1031-scaled.jpg`,
        `${B}/2015/09/ELF_9989-1024x683.jpg`,
        `${B}/2015/09/ELF_9990-1024x683.jpg`,
        `${B}/2015/09/WOI_9969-e1443196384336-1024x819.jpg`,
        `${B}/2015/09/Bild-4-1024x768.jpg`,
        `${B}/2015/09/Bild-1115-091-scaled.jpg`,
        `${B}/2015/09/DSC_0430.jpg`,
        `${B}/2015/09/ELF_9985.jpg`,
        `${B}/2015/09/ELF_9994.jpg`,
      ]}
    />
  )
}

"use client"
import { CobraDetailPage } from "@/components/cobra-detail-page"
const B = "https://www.cobra-cn.de/wp-content/uploads"
export default function RS4Page() {
  return (
    <CobraDetailPage
      model="RS4"
      tagline="580 PS. Der Anspruchsvolle."
      ps="580 PS"
      kw="427 kW"
      rpm="6.400 U/min"
      nm="710 Nm"
      nmRpm="5.300 U/min"
      topSpeed="290 km/h"
      accel100="3,7 Sek."
      accel200="10,1 Sek."
      price="109.900 €"
      priceNet="92.352,94 €"
      brakesFront="Brembo 6-Kolben Festsattel, 355mm geschlitzt & innenbelüftet"
      brakesRear="Brembo 4-Kolben Festsattel, 310mm gelocht & innenbelüftet"
      wheelsFront='9×18"'
      wheelsRear='11,5×18"'
      tiresFront="245/40 ZR18"
      tiresRear="315/30 ZR18"
      gearbox="6-Gang Rennschaltgetriebe Tremec"
      differential="Automatisches Sperrdifferential BMW 3.64"
      heroImage={`${B}/2016/02/IMG_0868.jpg`}
      images={[
        `${B}/2016/02/IMG_0868.jpg`,
        `${B}/2016/02/IMG_0872.jpg`,
        `${B}/2016/02/IMG_3093.jpg`,
        `${B}/2016/02/IMG_3095.jpg`,
        `${B}/2016/02/IMG_3096.jpg`,
        `${B}/2015/09/IMG_0038-1024x768.jpg`,
        `${B}/2016/04/CN_RS4_1.jpg`,
        `${B}/2016/04/CN_RS4_7.jpg`,
        `${B}/2016/02/WOI_9945.jpg`,
        `${B}/2016/02/ELF_9936.jpg`,
        `${B}/2016/02/ELF_9925.jpg`,
      ]}
    />
  )
}

import type { ImageMetadata } from "astro";
import achan from "../../assets/images/achan.jpg";
import chishi from "../../assets/images/chishis.jpeg";
import churchFamily from "../../assets/images/bgoption.webp";
import churchFamilyShirts from "../../assets/images/bgoption2.webp";
import lakesideBaptism from "../../assets/images/bgoption3.webp";
import worshipChoir from "../../assets/images/bgoption5.jpg";
import churchLeaders from "../../assets/images/bgoption6.jpg";
import foundingMembers from "../../assets/images/foundingmembers.jpg";
import culturalDay from "../../assets/images/fundraider.jpg";
import hosea from "../../assets/images/hosea.jpg";
import joseph from "../../assets/images/joseph.jpg";
import katensangla from "../../assets/images/katensangla2.jpg";
import kinoto from "../../assets/images/kinoto2.jpg";
import keyilungdauleHieme from "../../assets/images/keyilungdaule-hieme.jpeg";
import kumar from "../../assets/images/kumar-optimized.jpg";
import lanu from "../../assets/images/lanu.jpg";
import livi from "../../assets/images/Livi.jpg";
import mathingmi from "../../assets/images/mathingmi-optimized.jpg";
import peraly from "../../assets/images/peraly.jpg";
import prayingHands from "../../assets/images/praying hands.jpg";
import rhite from "../../assets/images/rhite.png";
import saman from "../../assets/images/saman-optimized.jpg";
import sentiAier from "../../assets/images/senti-aier.jpeg";
import theishing from "../../assets/images/theishing.jpg";

export const localImages: Record<string, ImageMetadata | string> = {
  achan, chishi, churchFamily, churchFamilyShirts, lakesideBaptism, worshipChoir, churchLeaders,
  foundingMembers, culturalDay, hosea, joseph, katensangla, kinoto, kumar, lanu, livi, mathingmi,
  peraly, prayingHands, rhite, saman, theishing,
  "keyilungdaule-hieme": keyilungdauleHieme,
  "senti-aier": sentiAier,
  paypalQr: "/paypal.jpg",
  zelleQr: "/zelle.jpg",
};

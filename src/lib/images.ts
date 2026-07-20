import type { ImageMetadata } from "astro";
import achan from "../assets/images/achan.jpg";
import chishi from "../assets/images/chishis.jpeg";
import hosea from "../assets/images/hosea.jpg";
import joseph from "../assets/images/joseph.jpg";
import katensangla from "../assets/images/katensangla2.jpg";
import kinoto from "../assets/images/kinoto2.jpg";
import kumar from "../assets/images/kumar-optimized.jpg";
import lanu from "../assets/images/lanu.jpg";
import livi from "../assets/images/Livi.jpg";
import keyilungdauleHieme from "../assets/images/keyilungdaule-hieme.jpeg";
import sentiAier from "../assets/images/senti-aier.jpeg";
import mathingmi from "../assets/images/mathingmi-optimized.jpg";
import peraly from "../assets/images/peraly.jpg";
import rhite from "../assets/images/rhite.png";
import saman from "../assets/images/saman-optimized.jpg";
import theishing from "../assets/images/theishing.jpg";
import churchFamily from "../assets/images/bgoption.webp";
import churchFamilyShirts from "../assets/images/bgoption2.webp";
import lakesideBaptism from "../assets/images/bgoption3.webp";
import worshipChoir from "../assets/images/bgoption5.jpg";
import churchLeaders from "../assets/images/bgoption6.jpg";
import foundingMembers from "../assets/images/foundingmembers.jpg";
import culturalDay from "../assets/images/fundraider.jpg";

export const personImages: Record<string, ImageMetadata> = {
  achan, chishi, hosea, joseph, katensangla, kinoto, kumar, lanu, livi,
  mathingmi, peraly, rhite, saman, theishing,
  "keyilungdaule-hieme": keyilungdauleHieme,
  "senti-aier": sentiAier,
};

export const galleryImages: Record<string, ImageMetadata> = {
  churchFamily,
  churchFamilyShirts,
  lakesideBaptism,
  worshipChoir,
  churchLeaders,
  foundingMembers,
  culturalDay,
};

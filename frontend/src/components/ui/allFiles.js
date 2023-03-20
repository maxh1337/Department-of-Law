import zayavlenie from "../../images/docs/Заявление о преступлении.png";
import protocolDoprosa1 from "../../images/docs/Протокол-допроса-потерпевшей-1.webp";
import protocolDoprosa2 from "../../images/docs/Протокол-допроса-потерпевшей-2.webp";
import protocolDoprosa3 from "../../images/docs/Протокол-допроса-потерпевшей-3.webp";
import protocolDoprosa4 from "../../images/docs/Протокол-допроса-потерпевшей-4.webp";
import uzop1 from "../../images/docs/Протокол-устного-заявления-о-преступлении-1.webp";
import uzop2 from "../../images/docs/Протокол-устного-заявления-о-преступлении-2.webp";
import raportObnaruzh from "../../images/docs/Рапорт-об-обнаружении-признаков-преступления.webp";
import obyasneniyeSinichkinoy from "../../images/docs/Объяснение Синичкиной.png";
import obyasneniyeMuzha from "../../images/docs/Объяснение мужа.png";
import obyasneniyeDochery from "../../images/docs/Объяснение дочери.png";
import ActSobakii from "../../images/docs/Акт о применении собаки.png";
import obhod from "../../images/docs/Поквартирный обход.png";
import protocolOsmotra1 from "../../images/docs/Копия Протокол осмотра места происшествия-1.png";
import protocolOsmotra2 from "../../images/docs/Копия Протокол осмотра места происшествия-2.png";
import protocolOsmotra3 from "../../images/docs/Копия Протокол осмотра места происшествия-3.png";
import protocolOsmotra4 from "../../images/docs/Копия Протокол осмотра места происшествия-4.png";
import protocolOsmotra5 from "../../images/docs/Копия Протокол осмотра места происшествия-5.png";
import protocolOsmotra6 from "../../images/docs/Копия Протокол осмотра места происшествия-6.png";
import dactilo1 from "../../images/docs/Заключение дактилоскопической экспертизы-1.png";
import dactilo2 from "../../images/docs/Заключение дактилоскопической экспертизы-2.png";
import dactilo3 from "../../images/docs/Заключение дактилоскопической экспертизы-3.png";
import dactilo4 from "../../images/docs/Заключение дактилоскопической экспертизы-4.png";
import dactilo5 from "../../images/docs/Заключение дактилоскопической экспертизы-5.png";
import dactilo6 from "../../images/docs/Заключение дактилоскопической экспертизы-6.png";
import dactilo7 from "../../images/docs/Заключение дактилоскопической экспертизы-7.png";
import dactilo8 from "../../images/docs/Заключение дактилоскопической экспертизы-8.png";
import zamok1 from "../../images/docs/Заключение эксперта замок-1.png";
import zamok2 from "../../images/docs/Заключение эксперта замок-2.png";
import zamok3 from "../../images/docs/Заключение эксперта замок-3.png";
import zamok4 from "../../images/docs/Заключение эксперта замок-4.png";
import zamok5 from "../../images/docs/Заключение эксперта замок-5.png";
import otkaz1 from "../../images/docs/Постановление об отказе в возбуждении уголовного дела-1.png";
import otkaz2 from "../../images/docs/Постановление об отказе в возбуждении уголовного дела-2.png";
import otkaz3 from "../../images/docs/Постановление-об-отказе-в-возбуждении-уголовного-дела-3.webp";
import prinyatie1 from "../../images/docs/Постановление о возбуждении уголовного дела и принятии его к производству-1.png";
import prinyatie2 from "../../images/docs/Постановление о возбуждении уголовного дела и принятии его к производству-2.png";

//Заявление о преступлении
export const zayava = {
  href: "https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view",
  name: "Заявление о преступлении",
  data: "zayava",
  documents: [{ image: zayavlenie }],
};

//Протокол допроса потерпевшей (ЕГО БЫТЬ НЕ ДОЛЖНО В ФИНАЛЕ)
export const protokolDoprosa = {
  href: "https://drive.google.com/file/d/1pjE-OOjKm-Cj78MKxQJqr5UiEXChIxAF/view",
  name: "Протокол допроса потерпевшей",
  documents: [
    { image: protocolDoprosa1 },
    { image: protocolDoprosa2 },
    { image: protocolDoprosa3 },
    { image: protocolDoprosa4 },
  ],
};

//УЗОП (ЕГО БЫТЬ НЕ ДОЛЖНО В ФИНАЛЕ)
export const uzop = {
  href: "https://drive.google.com/file/d/1p5y9GCvhO-zizn7QQAFNkAJLZNZvGYZG/view",
  name: "Протокол уcтного заявления о преступлении",
  documents: [{ image: uzop1 }, { image: uzop2 }],
};

//Рапорт обнаружения признаков преступления (ЕГО БЫТЬ НЕ ДОЛЖНО В ФИНАЛЕ)
export const raportObObnaruzhenii = {
  href: "https://drive.google.com/file/d/1vMlOar6blg4XyuUdUvM2UYXwNP--13F7/view",
  name: "Рапорт об обнаружении признаков преступления",
  documents: [{ image: raportObnaruzh }],
};

//Объяснение гражданки Синичкиной
export const objasnenie = {
  href: "https://drive.google.com/file/d/1f3E5XSKmwWhc25xdmgKMcrhdhn6ER_y1/view",
  name: "Объяснение гражданки синичкиной",
  documents: [{ image: obyasneniyeSinichkinoy }],
};

//Объяснение мужа Синичкиной
export const objasnenieMuzha = {
  href: "https://docs.google.com/document/d/1eAz4dStIqRusHxTXEIMx952BoSbpzOKg/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true",
  name: "Объяснение мужа Синичкиной ",
  documents: [{ image: obyasneniyeMuzha }],
};

//Результаты поквартирного обхода
export const resultObhoda = {
  href: "https://docs.google.com/document/d/1Hp9j4o2_KA1TXW7V04OKOFSR-G1HpGk9/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true",
  name: "Результаты поквартирного обхода",
  documents: [{ image: obhod }],
};

//Объяснение дочери Синичкиной
export const objasnenieDocheri = {
  href: "https://docs.google.com/document/d/1ubYQVtaLQQz5mwAp9QNE2tM1Ji0IjFoO/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true",
  name: "Объяснение дочери Синичкиной",
  documents: [{ image: obyasneniyeDochery }],
};

//Акт о применении служебной собаки
export const ActSobaki = {
  href: "https://docs.google.com/document/d/1UUNJhqa0YklyL1pfW9ezqtoE-KSC8z2U/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true",
  name: "Акт о применении служебной собаки",
  documents: [{ image: ActSobakii }],
};

//Протокол осмотра места происшествия(ОМП)
export const OsmotrMesta = {
  href: "https://docs.google.com/document/d/1LqyI8IDxibWBhgLCGatNWAH800H_GTQ9/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true",
  name: "Протокол осмотра места происшествия",
  documents: [
    { image: protocolOsmotra1 },
    { image: protocolOsmotra2 },
    { image: protocolOsmotra3 },
    { image: protocolOsmotra4 },
    { image: protocolOsmotra5 },
    { image: protocolOsmotra6 },
  ],
};

//Заключение дактилоскопической экспертизы
export const ZacluchenieDactilo = {
  href: "https://docs.google.com/document/d/1ZVazQ4iQFizuSQ66dad_BnWO4dyiq055/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true ",
  name: "Заключение дактилоскопической экспертизы",
  documents: [
    { image: dactilo1 },
    { image: dactilo2 },
    { image: dactilo3 },
    { image: dactilo4 },
    { image: dactilo5 },
    { image: dactilo6 },
    { image: dactilo7 },
    { image: dactilo8 },
  ],
};

//Заключение трасологической экспертизы
export const ZacluchenieTrasologicheskoy = {
  href: "https://docs.google.com/document/d/1mpeO0wShCfUJ0CRwQLHDla2l0XOqdmbc/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true",
  name: "Заключение трасологической экспертизы",
  documents: [
    { image: zamok1 },
    { image: zamok2 },
    { image: zamok3 },
    { image: zamok4 },
    { image: zamok5 },
  ],
};

//Постановление о возбуждении уголовного дела и принятии его к производству
export const PostanovleniePrinyatieDela = {
  href: "https://docs.google.com/document/d/15jUUgw_YaxoW6Qt9iE8zX4C4c91BrC2a/edit",
  name: "Постановление о возбуждении уголовного дела и принятии его к производству",
  documents: [{ image: prinyatie1 }, { image: prinyatie2 }],
};

//Постановление об отказе в возбуждении уголовного дела
export const PostanovlenieObOtkaze = {
  href: "https://docs.google.com/document/d/1a4xH8G9fhaqpu9vW0BR1Zvl2noVCu7Al/edit",
  name: "Постановление об отказе в возбуждении уголовного дела",
  documents: [{ image: otkaz1 }, { image: otkaz2 }, { image: otkaz3 }],
};

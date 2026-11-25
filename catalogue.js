const catalogue = [
  {
    "id": "5",
    "ref": "WTQ AL",
    "category": "Casques et lunettes",
    "name": "Casque ABS à bandes réfléchissantes",
    "description": "Coque ABS, tour de tête de 51 à 63 cm.",
    "photo": "assets/produits/5.webp",
    "file": "assets/fiches/5.pdf"
  },
  {
    "id": "31",
    "ref": "AR-2100 / AR-2110 / AR-2120 / AR-2130",
    "category": "Vêtements de travail",
    "name": "Gilet pour cadre jaune",
    "description": "Gilet jaune fluorescent en maille polyester et polyester Oxford avec bandes rétroréfléchissantes.",
    "photo": "assets/produits/31.webp",
    "file": "assets/fiches/31.pdf"
  },
  {
    "id": "29",
    "ref": "PROTECT",
    "category": "Chaussures et bottes",
    "name": "Chaussures Protect S3 SRC",
    "description": "Tige en cuir, embout composite 200 J et pointures 37 à 46.",
    "photo": "assets/produits/29-photo-catalogue.webp",
    "file": "assets/fiches/29.pdf"
  },
  {
    "id": "14",
    "ref": "AR-1300",
    "category": "Gants",
    "name": "Gants de manutention de précision",
    "description": "Support polyester et paume enduite.",
    "photo": "assets/produits/14-photo-catalogue.webp",
    "file": "assets/fiches/14.pdf"
  },
  {
    "id": "7",
    "ref": "VSPL-1012",
    "category": "Antichute",
    "name": "Harnais de sécurité",
    "description": "Anneau dorsal et sangles réglables. EN 361:2002 indiquée sur la fiche.",
    "photo": "assets/produits/7-photo-catalogue.webp",
    "file": "assets/fiches/7.pdf"
  },
  {
    "id": "16",
    "ref": "ROFA FFP2 sans soupape",
    "category": "Protection respiratoire",
    "name": "Masque pliable ROFA FFP2 sans soupape",
    "description": "Version sans soupape du masque pliable FFP2 ROFA. Dimensions de la fiche : 145 × 105 mm.",
    "photo": "assets/produits/16-photo-catalogue.webp",
    "file": "assets/fiches/16.pdf"
  },
  {
    "id": "19",
    "ref": "NBR02",
    "category": "Protection auditive",
    "name": "Casque antibruit avec arceau",
    "description": "SNR 27 dB et EN 352-1:2020 indiqués sur la fiche.",
    "photo": "assets/produits/19.webp",
    "file": "assets/fiches/19.pdf"
  },
  {
    "id": "40",
    "ref": "8106",
    "category": "Signalisation",
    "name": "Chaîne de balisage en plastique",
    "description": "Maillons de 6 ou 8 mm, rouge et blanc ou jaune et noir.",
    "photo": "assets/produits/chaine-8106-photo.webp",
    "file": "assets/fiches/40.pdf"
  },
  {
    "id": "39",
    "ref": "AR-VP",
    "category": "Vêtements de travail",
    "name": "Ensemble veste et pantalon Ariane",
    "description": "Tenue de travail deux pièces avec veste à col montant.",
    "photo": "assets/produits/39-photo-catalogue.webp",
    "file": "assets/fiches/39.pdf"
  },
  {
    "id": "15",
    "ref": "BLOUSE 25G",
    "category": "Hygiène",
    "name": "Blouse visiteur blanche 25 g",
    "description": "Polypropylène non tissé, fermeture autoagrippante et poignets élastiques.",
    "photo": "assets/produits/15.webp",
    "file": "assets/fiches/15.pdf"
  },
  {
    "id": "36",
    "ref": "380VP",
    "category": "Chaussures et bottes",
    "name": "Bottes Dunlop Pricemastor",
    "description": "Bottes imperméables en PVC pour les travaux agricoles.",
    "photo": "assets/produits/36-photo-catalogue.webp",
    "file": "assets/fiches/36.pdf"
  },
  {
    "id": "18",
    "ref": "171BV",
    "category": "Chaussures et bottes",
    "name": "Bottes Dunlop Protomastor",
    "description": "Bottes en PVC à embout acier pour l’agroalimentaire.",
    "photo": "assets/produits/18-photo-catalogue.webp",
    "file": "assets/fiches/18.pdf"
  },
  {
    "id": "12",
    "ref": "VN-001",
    "category": "Chaussures et bottes",
    "name": "Bottes PVC sans embout",
    "description": "Tige PVC, doublure textile, pointures 37 à 46.",
    "photo": "assets/produits/12.webp",
    "file": "assets/fiches/12.pdf"
  },
  {
    "id": "43",
    "ref": "SVN-002",
    "category": "Chaussures et bottes",
    "name": "Bottes de sécurité avec embout",
    "description": "Bottes avec embout de sécurité, pointures 37 à 46. Voir la fiche pour le classement indiqué.",
    "photo": "assets/produits/43.webp",
    "file": "assets/fiches/43.pdf"
  },
  {
    "id": "8",
    "ref": "SL 1453",
    "category": "Protection auditive",
    "name": "Bouchons d’oreille avec cordon plastique",
    "description": "Bouchons SL 1453 en TPE avec cordon plastique. La fiche indique un SNR de 31 dB.",
    "photo": "assets/produits/8-photo-catalogue.webp",
    "file": "assets/fiches/8.pdf"
  },
  {
    "id": "48",
    "ref": "NBR01",
    "category": "Protection auditive",
    "name": "Casque antibruit NBR01",
    "description": "SNR 34 dB et EN 352-1:2020 indiqués sur la fiche.",
    "photo": "assets/produits/48-photo-catalogue.webp",
    "file": "assets/fiches/48.pdf"
  },
  {
    "id": "13",
    "ref": "VST AL",
    "category": "Casques et lunettes",
    "name": "Casque de sécurité PEHD",
    "description": "Coque en polyéthylène haute densité, tour de tête de 54 à 64 cm.",
    "photo": "assets/produits/13.webp",
    "file": "assets/fiches/13.pdf"
  },
  {
    "id": "10",
    "ref": "VST",
    "category": "Casques et lunettes",
    "name": "Casque de sécurité ventilé",
    "description": "Coque PEHD, suspension à quatre points, tour de tête de 54 à 64 cm.",
    "photo": "assets/produits/vst-jaune-photo.webp",
    "file": "assets/fiches/10.pdf"
  },
  {
    "id": "1",
    "ref": "CHARLOTTE",
    "category": "Hygiène",
    "name": "Charlotte jetable",
    "description": "Polypropylène non tissé, élastique protégé, usage unique.",
    "photo": "assets/produits/1.webp",
    "file": "assets/fiches/1.pdf"
  },
  {
    "id": "32",
    "ref": "ARS 6029",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité ARS 6029",
    "description": "Tige cuir, semelle PU bidensité et embout acier. Pointures 37 à 46.",
    "photo": "assets/produits/32-photo-catalogue.webp",
    "file": "assets/fiches/32.pdf"
  },
  {
    "id": "21",
    "ref": "BS-5000",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité BS-5000",
    "description": "Tige en cuir, semelle PU bidensité, embout et intercalaire en acier. Pointures 36 à 46. Classement S1P SRC indiqué sur la fiche.",
    "photo": "assets/produits/21-photo-catalogue.webp",
    "file": "assets/fiches/21.pdf",
    "searchAliases": "BS-5000-1"
  },
  {
    "id": "27",
    "ref": "IRONA 300",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité Irona 300",
    "description": "Cuir grainé, embout acier et semelle PU bidensité. Pointures 39 à 46.",
    "photo": "assets/produits/27-photo-catalogue.webp",
    "file": "assets/fiches/27.pdf"
  },
  {
    "id": "46",
    "ref": "VOLTA",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité Volta S1P ESD",
    "description": "Tige en nubuck, embout composite 200 J. Pointures 36 à 45.",
    "photo": "assets/produits/46.webp",
    "file": "assets/fiches/46.pdf"
  },
  {
    "id": "34",
    "ref": "YC100G",
    "category": "Vêtements de travail",
    "name": "Combinaison PVC renforcée",
    "description": "Combinaison verte avec double rabat et coutures soudées. Tailles S à XXL.",
    "photo": "assets/produits/34.webp",
    "file": "assets/fiches/34.pdf"
  },
  {
    "id": "42",
    "ref": "SL 1451",
    "category": "Protection auditive",
    "name": "Coquilles antibruit pour casque",
    "description": "Modèle monté sur casque avec coussinets remplaçables. Vérifier la compatibilité.",
    "photo": "assets/produits/sl1451-photo-integrale.webp",
    "file": "assets/fiches/42.pdf"
  },
  {
    "id": "9",
    "ref": "745 + A1",
    "category": "Protection respiratoire",
    "name": "Demi-masque Climax 745 avec filtre A1",
    "description": "Ensemble demi-masque et filtre de classe A1.",
    "photo": "assets/produits/9.webp",
    "file": "assets/fiches/9.pdf"
  },
  {
    "id": "33",
    "ref": "AR-3401 / 1858015",
    "category": "Antichute",
    "name": "Double longe avec absorbeur d’énergie",
    "description": "Double longe à corde avec épissures protégées.",
    "photo": "assets/produits/33.webp",
    "file": "assets/fiches/33.pdf"
  },
  {
    "id": "37",
    "ref": "AR-5200 / AR-5210 / AR-5220 / AR-5230",
    "category": "Vêtements de travail",
    "name": "Ensemble de pluie AR-5200",
    "description": "Veste à capuche et pantalon en polyamide enduit PVC. M (AR-5200), L (AR-5210), XL (AR-5220), XXL (AR-5230).",
    "photo": "assets/produits/37-photo-catalogue.webp",
    "file": "assets/fiches/37.pdf"
  },
  {
    "id": "3",
    "ref": "1601",
    "category": "Vêtements de travail",
    "name": "Ensemble professionnel anti-froid",
    "description": "Veste à capuche et salopette matelassées. Coloris noir à finitions rouges.",
    "photo": "assets/produits/3-photo-catalogue.webp",
    "file": "assets/fiches/3.jpg"
  },
  {
    "id": "20",
    "ref": "755 A1B1E1K1",
    "category": "Protection respiratoire",
    "name": "Filtre Climax 755 A1B1E1K1",
    "description": "Filtre pour certains gaz et vapeurs. Voir la fiche pour les limites d’utilisation.",
    "photo": "assets/produits/20.webp",
    "file": "assets/fiches/20.pdf"
  },
  {
    "id": "35",
    "ref": "760 ABEK1",
    "category": "Protection respiratoire",
    "name": "Filtre Climax 760 ABEK1",
    "description": "Filtre Climax de classe ABEK1. Compatibilité et limites sur la fiche.",
    "photo": "assets/produits/35.webp",
    "file": "assets/fiches/35.pdf"
  },
  {
    "id": "47",
    "ref": "ARG-5200",
    "category": "Gants",
    "name": "Gants PVC rouges 27 cm",
    "description": "Enduction PVC intégrale sur support polycoton.",
    "photo": "assets/produits/47.webp",
    "file": "assets/fiches/47.pdf"
  },
  {
    "id": "11",
    "ref": "AR-6410",
    "category": "Gants",
    "name": "Gants PVC rouges 40 cm",
    "description": "Enduction PVC intégrale sur support polycoton.",
    "photo": "assets/produits/11.webp",
    "file": "assets/fiches/11.pdf"
  },
  {
    "id": "30",
    "ref": "AR-7200",
    "category": "Gants",
    "name": "Gants PVC verts 27 cm",
    "description": "Enduction PVC intégrale sur support coton.",
    "photo": "assets/produits/30.webp",
    "file": "assets/fiches/30.pdf"
  },
  {
    "id": "17",
    "ref": "AR-8300",
    "category": "Gants",
    "name": "Gants anticoupure de précision",
    "description": "Support tricoté HPPE. Niveau E/5 indiqué sur la fiche.",
    "photo": "assets/produits/17-photo-catalogue.webp",
    "file": "assets/fiches/17.pdf"
  },
  {
    "id": "28",
    "ref": "AR-5100",
    "category": "Gants",
    "name": "Gants nitrile pour l’agroalimentaire",
    "description": "Gant vert entièrement enduit de nitrile.",
    "photo": "assets/produits/28-photo-catalogue.webp",
    "file": "assets/fiches/28.pdf"
  },
  {
    "id": "24",
    "ref": "AR-1032 / 1831000-4",
    "category": "Antichute",
    "name": "Harnais avec ceinture de maintien",
    "description": "Harnais de suspension avec ceinture et point d’attache dorsal.",
    "photo": "assets/produits/24.webp",
    "file": "assets/fiches/24.pdf"
  },
  {
    "id": "23",
    "ref": "TE-401",
    "category": "Casques et lunettes",
    "name": "Lunettes de protection PROSSA",
    "description": "Oculaire panoramique incolore en polycarbonate.",
    "photo": "assets/produits/23-photo-catalogue.webp",
    "file": "assets/fiches/23.pdf"
  },
  {
    "id": "38",
    "ref": "755/1 + A1",
    "category": "Protection respiratoire",
    "name": "Masque Climax 755/1 avec filtre A1",
    "description": "Ensemble respiratoire avec filtre chimique de classe A1.",
    "photo": "assets/produits/38.webp",
    "file": "assets/fiches/38.pdf"
  },
  {
    "id": "4",
    "ref": "AR-3500 / AR-3510 / AR-3520 / AR-3530",
    "category": "Vêtements de travail",
    "name": "Parka haute visibilité",
    "description": "Parka haute visibilité en polyester Oxford enduit PU, unie ou bicolore. M (AR-3500), L (AR-3510), XL (AR-3520), XXL (AR-3530).",
    "photo": "assets/produits/4.webp",
    "file": "assets/fiches/4.pdf"
  },
  {
    "id": "2",
    "ref": "AR-9200 / AR-9210 / AR-9220 / AR-9230",
    "category": "Vêtements de travail",
    "name": "Parka marine à bandes",
    "description": "Parka en polyamide avec bandes. Quatre références.",
    "photo": "assets/produits/2-photo-catalogue.webp",
    "file": "assets/fiches/2.pdf"
  },
  {
    "id": "pupille-c",
    "ref": "T112053C",
    "category": "Casques et lunettes",
    "name": "Lunettes Pupille incolores",
    "description": "Oculaire monobloc en polycarbonate, traitements antirayures et antibuée. Taille unique.",
    "photo": "assets/produits/pupille-c-photo-catalogue.webp",
    "file": "assets/fiches/n0.pdf"
  },
  {
    "id": "pupille-s",
    "ref": "T112053S",
    "category": "Casques et lunettes",
    "name": "Lunettes Pupille fumées",
    "description": "Oculaire fumé en polycarbonate, traitements antirayures et antibuée. Taille unique.",
    "photo": "assets/produits/pupille-s-photo-catalogue.webp",
    "file": "assets/fiches/n0.pdf"
  },
  {
    "id": "choroide",
    "ref": "T110051C",
    "category": "Casques et lunettes",
    "name": "Surlunettes Choroïde",
    "description": "Oculaire monobloc incolore en polycarbonate avec traitement antirayures. Taille unique.",
    "photo": "assets/produits/choroide.webp",
    "file": "assets/fiches/n1.pdf"
  },
  {
    "id": "rigger",
    "ref": "P5400",
    "category": "Chaussures et bottes",
    "name": "Bottes de sécurité Rigger S3 WR HRO SRC",
    "description": "Cuir de buffle pleine fleur, embout composite et semelle antiperforation. Pointures 37 à 47. La fiche indique P5400.",
    "photo": "assets/produits/rigger-photo-integrale.webp",
    "file": "assets/fiches/n2.pdf",
    "searchAliases": "C5400"
  },
  {
    "id": "temporal",
    "ref": "T1210",
    "category": "Casques et lunettes",
    "name": "Casque ventilé Temporal",
    "description": "Coque en polypropylène, coiffe textile à six points de fixation et taille réglable.",
    "photo": "assets/produits/temporal.webp",
    "file": "assets/fiches/n3.pdf"
  },
  {
    "id": "uvee-c",
    "ref": "T115053C",
    "category": "Casques et lunettes",
    "name": "Lunettes Uvée incolores",
    "description": "Lunettes monobloc avec protection frontale en TPE et traitements antibuée et antirayures.",
    "photo": "assets/produits/uvee-c-photo-catalogue.webp",
    "file": "assets/fiches/n4.pdf"
  },
  {
    "id": "uvee-s",
    "ref": "T115053S",
    "category": "Casques et lunettes",
    "name": "Lunettes Uvée fumées",
    "description": "Oculaire fumé, protection frontale en TPE et traitements antibuée et antirayures.",
    "photo": "assets/produits/uvee-s-photo-catalogue.webp",
    "file": "assets/fiches/n4.pdf"
  },
  {
    "id": "fluo",
    "ref": "C3100",
    "category": "Vêtements de travail",
    "name": "Gilet haute visibilité Fluo",
    "description": "Gilet polyester avec bandes rétroréfléchissantes cousues et fermeture autoagrippante. Jaune fluo ou orange fluo, taille unique.",
    "photo": "assets/produits/c3100-photo-integrale.webp",
    "file": "assets/fiches/n5.pdf"
  },
  {
    "id": "index",
    "ref": "C3600",
    "category": "Vêtements de travail",
    "name": "Gilet haute visibilité Index",
    "description": "Gilet polyester jaune fluo et bleu marine avec bandes sur le corps et les épaules. Tailles M à XXL.",
    "photo": "assets/produits/c3600-photo-integrale.webp",
    "file": "assets/fiches/n6.pdf"
  },
  {
    "id": "griffin",
    "ref": "GRIFFIN",
    "category": "Chaussures et bottes",
    "name": "Chaussures montantes Griffin S3 SRC ESD",
    "description": "Tige en tissu PUTEK avec renfort en nubuck, semelle PU double densité et construction sans métal selon la fiche.",
    "photo": "assets/produits/griffin-photo-integrale.webp",
    "file": "assets/fiches/n7.pdf"
  },
  {
    "id": "rain-reflective",
    "ref": "AR-5300 / AR-5310 / AR-5320 / AR-5330",
    "category": "Vêtements de travail",
    "name": "Ensemble de pluie à bandes",
    "description": "Veste à capuche et pantalon en polyamide enduit PVC, avec bandes réfléchissantes. M (AR-5300), L (AR-5310), XL (AR-5320), XXL (AR-5330).",
    "photo": "assets/produits/rain-reflective-photo-catalogue.webp",
    "file": "assets/fiches/n9.pdf"
  },
  {
    "id": "vest-3m",
    "ref": "AR-2600 / AR-2610 / AR-2620 / AR-2630",
    "category": "Vêtements de travail",
    "name": "Gilet haute visibilité à bandes 3M",
    "description": "Polyester fluorescent 200 g/m² et fermeture à glissière. Tailles M à XXL selon la référence.",
    "photo": "assets/produits/vest-3m-photo-catalogue.webp",
    "file": "assets/fiches/n10.pdf"
  },
  {
    "id": "bs3000",
    "ref": "BS-3000",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité BS-3000",
    "description": "Daim perforé, doublure en maille 3D, embout et intercalaire en acier. Pointures 36 à 46, classement S1P SRC indiqué sur la fiche.",
    "photo": "assets/produits/bs3000-photo-catalogue.webp",
    "file": "assets/fiches/n12.pdf"
  },
  {
    "id": "vip",
    "ref": "VIP",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité VIP S3 SRC",
    "description": "Tige en cuir de buffle, embout composite 200 J et semelle PU bidensité. Pointures 37 à 46.",
    "photo": "assets/produits/vip-photo-catalogue.webp",
    "file": "assets/fiches/vip.pdf"
  },
  {
    "id": "sport",
    "ref": "SPORT",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité Sport S1P SRC",
    "description": "Tige en tissu PUTEK, embout composite 200 J et semelle PU bidensité. Pointures 37 à 46.",
    "photo": "assets/produits/sport-photo-catalogue.webp",
    "file": "assets/fiches/sport.pdf"
  },
  {
    "id": "scratch",
    "ref": "SCRATCH",
    "category": "Chaussures et bottes",
    "name": "Chaussures de sécurité Scratch S1P SRC",
    "description": "Tige en microfibre, embout composite 200 J et semelle PU bidensité. Fermeture autoagrippante.",
    "photo": "assets/produits/scratch-photo-catalogue.webp",
    "file": "assets/fiches/scratch.pdf"
  },
  {
    "id": "vest-orange",
    "ref": "AR-2200",
    "category": "Vêtements de travail",
    "name": "Gilet pour cadre orange",
    "description": "Gilet orange fluorescent en maille polyester et polyester Oxford avec bandes rétroréfléchissantes.",
    "photo": "assets/produits/vest-orange.webp",
    "file": "assets/fiches/31.pdf"
  },
  {
    "id": "rofa-valve",
    "ref": "ROFA FFP2 avec soupape",
    "category": "Protection respiratoire",
    "name": "Masque pliable ROFA FFP2 avec soupape",
    "description": "Version avec soupape du masque pliable FFP2 ROFA. Dimensions de la fiche : 145 × 105 mm.",
    "photo": "assets/produits/rofa-valve-photo-catalogue.webp",
    "file": "assets/fiches/16.pdf"
  },
  {
    "id": "sl1453-textile",
    "ref": "SL 1453",
    "category": "Protection auditive",
    "name": "Bouchons d’oreille avec cordon textile",
    "description": "Bouchons SL 1453 en TPE avec cordon textile. La fiche indique un SNR de 31 dB.",
    "photo": "assets/produits/sl1453-textile-photo-catalogue.webp",
    "file": "assets/fiches/8.pdf"
  },
  {
    "id": "blouse-beige",
    "category": "Vêtements de travail",
    "name": "Blouse de travail beige",
    "description": "Blouse longue à manches longues, avec col à revers, une poche poitrine et deux poches basses.",
    "photo": "assets/produits/blouse-beige.webp"
  },
  {
    "id": "blouse-anthracite",
    "category": "Vêtements de travail",
    "name": "Blouse de travail anthracite",
    "description": "Blouse longue à manches longues, avec col à revers, une poche poitrine et deux poches basses.",
    "photo": "assets/produits/blouse-anthracite.webp"
  },
  {
    "id": "blouse-blanche",
    "category": "Vêtements de travail",
    "name": "Blouse de travail blanche",
    "description": "Blouse longue blanche à manches longues, avec col à revers et poches basses.",
    "photo": "assets/produits/blouse-blanche.webp"
  },
  {
    "id": "blouse-verte",
    "category": "Vêtements de travail",
    "name": "Blouse de travail verte",
    "description": "Blouse longue à manches longues, avec col à revers, une poche poitrine et deux poches basses.",
    "photo": "assets/produits/blouse-verte.webp"
  },
  {
    "id": "blouse-bleue",
    "category": "Vêtements de travail",
    "name": "Blouse de travail bleu roi",
    "description": "Blouse longue bleu roi à manches longues, avec col à revers et poches plaquées.",
    "photo": "assets/produits/blouse-bleue.webp"
  },
  {
    "id": "ensemble-marine-orange",
    "category": "Vêtements de travail",
    "name": "Ensemble gilet et pantalon marine et orange",
    "description": "Gilet zippé à quatre poches et pantalon de travail assorti, avec empiècements foncés et finitions orange.",
    "photo": "assets/produits/ensemble-marine-orange.webp"
  },
  {
    "id": "ensemble-noir-orange",
    "category": "Vêtements de travail",
    "name": "Ensemble gilet et pantalon noir et orange",
    "description": "Gilet zippé et pantalon de travail avec poches à rabat, empiècements gris et finitions orange.",
    "photo": "assets/produits/ensemble-noir-orange.webp"
  },
  {
    "id": "ensemble-marine-rouge",
    "category": "Vêtements de travail",
    "name": "Ensemble gilet et pantalon marine et rouge",
    "description": "Gilet zippé et pantalon assorti avec empiècements bleu vif et finitions rouges.",
    "photo": "assets/produits/ensemble-marine-rouge.webp"
  },
  {
    "id": "combinaison-bleu-roi",
    "category": "Vêtements de travail",
    "name": "Combinaison de travail bleu roi",
    "description": "Combinaison une pièce à manches longues et col à revers.",
    "photo": "assets/produits/combinaison-bleu-roi.webp"
  },
  {
    "id": "combinaison-marine",
    "category": "Vêtements de travail",
    "name": "Combinaison de travail bleu marine",
    "description": "Combinaison une pièce à manches longues, avec poches poitrine et poche sur la cuisse.",
    "photo": "assets/produits/combinaison-marine.webp"
  },
  {
    "id": "combinaison-grise",
    "category": "Vêtements de travail",
    "name": "Combinaison de travail grise",
    "description": "Combinaison une pièce à manches longues, avec poches poitrine et poche sur la cuisse.",
    "photo": "assets/produits/combinaison-grise.webp"
  },
  {
    "id": "gilet-orange-multipoches",
    "category": "Vêtements de travail",
    "name": "Gilet multipoches orange et noir",
    "description": "Gilet de travail sans manches, avec fermeture à glissière et quatre poches à rabat.",
    "photo": "assets/produits/gilet-orange-multipoches.webp"
  },
  {
    "id": "gilet-ardoise-multipoches",
    "category": "Vêtements de travail",
    "name": "Gilet multipoches gris ardoise et orange",
    "description": "Gilet zippé à quatre poches à rabat, avec empiècements foncés et détails orange.",
    "photo": "assets/produits/gilet-ardoise-multipoches.webp"
  },
  {
    "id": "gilet-anthracite-orange",
    "category": "Vêtements de travail",
    "name": "Gilet anthracite à finitions orange",
    "description": "Gilet sans manches avec empiècements orange aux épaules, une poche poitrine et deux poches basses zippées.",
    "photo": "assets/produits/gilet-anthracite-orange.webp"
  },
  {
    "id": "gilet-orange-reflechissant",
    "category": "Vêtements de travail",
    "name": "Gilet orange à bande réfléchissante",
    "description": "Gilet orange zippé, avec une bande réfléchissante horizontale et une poche poitrine.",
    "photo": "assets/produits/gilet-orange-reflechissant.webp"
  },
  {
    "id": "gilet-anthracite-rouge",
    "category": "Vêtements de travail",
    "name": "Gilet anthracite à finitions rouges",
    "description": "Gilet sans manches avec empiècements rouges aux épaules, une poche poitrine et deux poches basses zippées.",
    "photo": "assets/produits/gilet-anthracite-rouge.webp"
  },
  {
    "id": "gilet-gris-multipoches",
    "category": "Vêtements de travail",
    "name": "Gilet multipoches gris clair et orange",
    "description": "Gilet zippé à quatre poches à rabat, avec empiècements noirs et détails orange.",
    "photo": "assets/produits/gilet-gris-multipoches.webp"
  },
  {
    "id": "gilet-bleu-roi",
    "category": "Vêtements de travail",
    "name": "Gilet de travail bleu roi",
    "description": "Gilet sans manches à fermeture noire, avec une poche poitrine et deux poches basses zippées.",
    "photo": "assets/produits/gilet-bleu-roi.webp"
  },
  {
    "id": "gilet-vert",
    "name": "Gilet de travail vert",
    "category": "Vêtements de travail",
    "description": "Gilet sans manches avec fermeture à glissière noire, une poche poitrine à rabat et deux poches basses zippées.",
    "photo": "assets/produits/gilet-vert.webp"
  },
  {
    "id": "gilet-rouge",
    "name": "Gilet de travail rouge",
    "category": "Vêtements de travail",
    "description": "Gilet sans manches rouge avec une poche poitrine à rabat et deux poches basses zippées.",
    "photo": "assets/produits/gilet-rouge.webp"
  },
  {
    "id": "gilet-bleu-multipoches",
    "name": "Gilet multipoches bleu roi et orange",
    "category": "Vêtements de travail",
    "description": "Gilet à quatre poches à rabat, empiècements sombres et finitions orange.",
    "photo": "assets/produits/gilet-bleu-multipoches.webp"
  },
  {
    "id": "gilet-rouge-multipoches",
    "name": "Gilet multipoches rouge et noir",
    "category": "Vêtements de travail",
    "description": "Gilet à glissière rouge avec quatre poches à rabat, empiècements noirs et finitions grises.",
    "photo": "assets/produits/gilet-rouge-multipoches.webp"
  },
  {
    "id": "gilet-vert-multipoches",
    "name": "Gilet multipoches vert et orange",
    "category": "Vêtements de travail",
    "description": "Gilet à quatre poches à rabat, empiècements noirs et finitions orange.",
    "photo": "assets/produits/gilet-vert-multipoches.webp"
  },
  {
    "id": "gilet-blanc",
    "name": "Gilet de travail blanc",
    "category": "Vêtements de travail",
    "description": "Gilet sans manches blanc avec fermeture noire, une poche poitrine et deux poches basses zippées.",
    "photo": "assets/produits/gilet-blanc.webp"
  },
  {
    "id": "gilet-noir-multipoches",
    "name": "Gilet multipoches noir à liserés gris",
    "category": "Vêtements de travail",
    "description": "Gilet noir à quatre poches à rabat avec bordures grises et fermeture à glissière.",
    "photo": "assets/produits/gilet-noir-multipoches.webp"
  },
  {
    "id": "gilet-orange",
    "name": "Gilet de travail orange",
    "category": "Vêtements de travail",
    "description": "Gilet sans manches orange avec fermeture noire, une poche poitrine à rabat et deux poches basses zippées.",
    "photo": "assets/produits/gilet-orange.webp"
  },
  {
    "id": "gilet-noir-col-montant",
    "name": "Gilet noir à col montant",
    "category": "Vêtements de travail",
    "description": "Gilet de travail noir avec fermeture argentée, deux poches poitrine à rabat et des poches basses.",
    "photo": "assets/produits/gilet-noir-col-montant.webp"
  },
  {
    "id": "ensemble-gris-marine-bandes",
    "name": "Ensemble veste et pantalon gris à bandes réfléchissantes",
    "category": "Vêtements de travail",
    "description": "Veste grise zippée avec épaules bleu marine et pantalon cargo assorti. Bandes réfléchissantes sur la veste et le pantalon.",
    "photo": "assets/produits/ensemble-gris-marine-bandes.webp"
  },
  {
    "id": "ensemble-marine-jaune-bandes",
    "name": "Ensemble veste et pantalon marine et jaune fluo",
    "category": "Vêtements de travail",
    "description": "Veste zippée avec empiècement jaune fluorescent et pantalon bleu marine assorti. Bandes réfléchissantes sur les deux pièces.",
    "photo": "assets/produits/ensemble-marine-jaune-bandes.webp"
  },
  {
    "id": "ensemble-marine-bleu-bandes",
    "name": "Ensemble veste et pantalon marine et bleu roi",
    "category": "Vêtements de travail",
    "description": "Veste zippée à empiècement bleu roi et pantalon bleu marine. Bandes réfléchissantes sur les deux pièces.",
    "photo": "assets/produits/ensemble-marine-bleu-bandes.webp"
  },
  {
    "id": "ensemble-marine-orange-bandes",
    "name": "Ensemble veste et pantalon marine et orange à bandes réfléchissantes",
    "category": "Vêtements de travail",
    "description": "Veste zippée à empiècement orange et pantalon cargo bleu marine avec détails orange.",
    "photo": "assets/produits/ensemble-marine-orange-bandes.webp"
  },
  {
    "id": "cones-signalisation",
    "name": "Cônes de signalisation rouges à bandes réfléchissantes",
    "category": "Signalisation",
    "description": "Cônes rouges avec deux bandes claires et une base noire. Précisez la hauteur souhaitée dans votre demande.",
    "photo": "assets/produits/cones-signalisation.webp"
  },
  {
    "id": "casquette-insert-noire",
    "name": "Casquette noire avec insert intérieur",
    "category": "Casques et lunettes",
    "description": "Casquette noire à visière, avec insert intérieur visible sur la photo.",
    "photo": "assets/produits/casquette-insert-noire.webp"
  },
  {
    "id": "chaussure-gris-rose",
    "name": "Chaussures de travail basses grises et roses",
    "category": "Chaussures et bottes",
    "description": "Chaussures basses à lacets, tige grise et doublure rose. Précisez la pointure souhaitée dans votre demande.",
    "photo": "assets/produits/chaussure-gris-rose.webp"
  },
  {
    "id": "casque-ventile-rouge",
    "name": "Casque de chantier ventilé rouge",
    "category": "Casques et lunettes",
    "description": "Casque rouge à coque ventilée et visière courte.",
    "photo": "assets/produits/casque-ventile-rouge.webp"
  },
  {
    "id": "casque-ventile-bleu",
    "name": "Casque de chantier ventilé bleu",
    "category": "Casques et lunettes",
    "description": "Casque bleu à coque ventilée avec jugulaire grise visible.",
    "photo": "assets/produits/casque-ventile-bleu.webp"
  }
];

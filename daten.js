// ============================================================
// DATENSTAMM – nur hier Adressen und Koordinaten pflegen!
// Wird von index.html und hofflohmarkt_druck.html verwendet.
// ============================================================

const standorte = [
  { adresse: "Am Schafgarten 7",        lat: 49.2093017, lng: 8.879023  },
  { adresse: "Beckenwiesenweg 9",       lat: 49.2069678, lng: 8.8789685 },
  { adresse: "Beckenwiesenweg 16",      lat: 49.2059745, lng: 8.8786874 },
  { adresse: "Burggrafenstr. 12",       lat: 49.209318,  lng: 8.877961  },
  { adresse: "Burggrafenstr. 17",       lat: 49.2095322, lng: 8.8781344 },
  { adresse: "Elsbeereweg 3",           lat: 49.2053434, lng: 8.8769788 },
  { adresse: "Elsbeereweg 6",           lat: 49.2049925, lng: 8.876976  },
  { adresse: "Elsbeereweg 10",          lat: 49.2047689, lng: 8.8774288 },
  { adresse: "Elsbeereweg 20",          lat: 49.2043993, lng: 8.8786002 },
  { adresse: "Enzianstr. 2a",           lat: 49.2074191, lng: 8.876814  },
  { adresse: "Enzianstr. 3",            lat: 49.2071693, lng: 8.8773599 },
  { adresse: "Enzianstr. 4",            lat: 49.2066126, lng: 8.8770216 },
  { adresse: "Fliederstr. 2",           lat: 49.2045029, lng: 8.8718988 },
  { adresse: "Fürstenstr. 4",           lat: 49.211394,  lng: 8.875441  },
  { adresse: "Fürstenstr. 7",           lat: 49.2115361, lng: 8.8753193 },
  { adresse: "Ginsterstr. 9",           lat: 49.207185,  lng: 8.8769151 },
  { adresse: "Grötzenstr. 1",           lat: 49.2135892, lng: 8.8721341 },
  { adresse: "Grötzenstr. 7",           lat: 49.2136167, lng: 8.8710745 },
  { adresse: "Hälde 7",                 lat: 49.2146579, lng: 8.8715043 },
  { adresse: "Holunderweg 6",           lat: 49.2118437, lng: 8.8763389 },
  { adresse: "Kaiserstr. 16",           lat: 49.2076632, lng: 8.875399  },
  { adresse: "Kaiserstr. 41",           lat: 49.2096032, lng: 8.8759698 },
  { adresse: "Kaiserstr. 54",           lat: 49.2112849, lng: 8.8746487 },
  { adresse: "Kaiserstr. 56",           lat: 49.2115144, lng: 8.8746708 },
  { adresse: "Kaiserstr. 60",           lat: 49.211504,  lng: 8.8742484 },
  { adresse: "Kaiserstr. 90",           lat: 49.213634,  lng: 8.8727357 },
  { adresse: "Kornblumenstr. 4",        lat: 49.2053332, lng: 8.8743501 },
  { adresse: "Kornblumenstr. 6",        lat: 49.2051153, lng: 8.8740034 },
  { adresse: "Kornblumenstr. 8",        lat: 49.2050017, lng: 8.8737974 },
  { adresse: "Reihener Str. 3a",        lat: 49.2080528, lng: 8.8764738 },
  { adresse: "Reihenerstr. 10",         lat: 49.2078,    lng: 8.8772    },
  { adresse: "Rohräckerstr. 18",        lat: 49.2060727, lng: 8.8773155 },
  { adresse: "Rohräckerstr. 26",        lat: 49.206428,  lng: 8.878638  },
  { adresse: "Schafgasse 11",           lat: 49.2104134, lng: 8.8777988 },
  { adresse: "Schafgasse 16",           lat: 49.2103024, lng: 8.8782227 },
  { adresse: "Spervogelstr. 3",         lat: 49.2147378, lng: 8.8723755 },
  { adresse: "Unter der Kelter 6",      lat: 49.2102854, lng: 8.8799671 },
  { adresse: "Unter der Kelter 8a",     lat: 49.2105335, lng: 8.8796253 },
  { adresse: "Von Öttingenstr. 45",     lat: 49.2040678, lng: 8.8752566 },
  { adresse: "Von-Venningen-Str. 10",   lat: 49.2049091, lng: 8.8750602 },
  { adresse: "Von-Venningen-Str. 19",   lat: 49.2038861, lng: 8.8743773 },
  { adresse: "Waldangellocher Str. 1",  lat: 49.208914,  lng: 8.875448  },
  { adresse: "Waldangellocherstr. 1a",  lat: 49.208914,  lng: 8.875448  },
  { adresse: "Weinbergstrasse 5",       lat: 49.2104763, lng: 8.879157  }
];

const parkplaetze = [
  { name: "Parkplatz Ev. Kirche Weiler",   adresse: "Schafgasse, Weiler",          lat: 49.210790,  lng: 8.876835  },
  { name: "Parkplatz Fliederstraße",       adresse: "Fliederstraße, Weiler",       lat: 49.204238,  lng: 8.873265  },
  { name: "Parkplatz Alte Kelter",         adresse: "Weinbergstraße, Weiler",      lat: 49.211588,  lng: 8.878358  },
  { name: "Parkplatz FC Weiler",           adresse: "Zum Steinbruch, Weiler",      lat: 49.217264,  lng: 8.872222  },
  { name: "Friedhof-Parkplatz Weiler",     adresse: "Kaiserstraße 3A, Weiler",     lat: 49.2067174, lng: 8.873426  },
  { name: "Parkplatz Kornblumenstraße",    adresse: "Kornblumenstraße 4, Weiler",  lat: 49.2053987, lng: 8.8745918 },
  { name: "Parkplatz Ortsmitte",           adresse: "Kaiserstraße, Weiler",        lat: 49.211143,  lng: 8.874386  },
  { name: "Parkplatz Burg Steinsberg",     adresse: "Weinbergstraße, Hilsbach",    lat: 49.2148998, lng: 8.8764047 },
  { name: "Parkplatz Hilsbach",            adresse: "Hilsbach",                    lat: 49.200334,  lng: 8.8716343 }
];

const kindergarten = {
  name: "Ev. Kindergarten Gänseblümchen",
  adresse: "Burggrafenstraße 12, Weiler",
  lat: 49.2089932,
  lng: 8.8780397
};

// ============================================================
// PIN-POSITIONEN FÜR DRUCKANSICHT – hier zentral gepflegt
// Einmal per Drag & Drop gesetzt, für alle Besucher gültig
// ============================================================
const pinPositionen = [
  { "id": "s0",  "px": 570, "py": 526 },
  { "id": "s1",  "px": 533, "py": 603 },
  { "id": "s2",  "px": 536, "py": 667 },
  { "id": "s3",  "px": 525, "py": 531 },
  { "id": "s4",  "px": 515, "py": 495 },
  { "id": "s5",  "px": 488, "py": 690 },
  { "id": "s6",  "px": 420, "py": 743 },
  { "id": "s7",  "px": 458, "py": 765 },
  { "id": "s8",  "px": 489, "py": 734 },
  { "id": "s9",  "px": 258, "py": 559 },
  { "id": "s10", "px": 505, "py": 574 },
  { "id": "s11", "px": 507, "py": 623 },
  { "id": "s12", "px": 230, "py": 715 },
  { "id": "s13", "px": 477, "py": 374 },
  { "id": "s14", "px": 433, "py": 348 },
  { "id": "s15", "px": 297, "py": 575 },
  { "id": "s16", "px": 198, "py": 297 },
  { "id": "s17", "px": 197, "py": 335 },
  { "id": "s18", "px": 241, "py": 285 },
  { "id": "s19", "px": 469, "py": 337 },
  { "id": "s20", "px": 290, "py": 542 },
  { "id": "s21", "px": 333, "py": 464 },
  { "id": "s22", "px": 281, "py": 398 },
  { "id": "s23", "px": 397, "py": 339 },
  { "id": "s24", "px": 355, "py": 346 },
  { "id": "s25", "px": 375, "py": 291 },
  { "id": "s26", "px": 233, "py": 638 },
  { "id": "s27", "px": 204, "py": 663 },
  { "id": "s28", "px": 249, "py": 668 },
  { "id": "s29", "px": 325, "py": 520 },
  { "id": "s30", "px": 554, "py": 566 },
  { "id": "s31", "px": 483, "py": 656 },
  { "id": "s32", "px": 554, "py": 623 },
  { "id": "s33", "px": 513, "py": 404 },
  { "id": "s34", "px": 554, "py": 413 },
  { "id": "s35", "px": 353, "py": 254 },
  { "id": "s36", "px": 613, "py": 489 },
  { "id": "s37", "px": 605, "py": 432 },
  { "id": "s38", "px": 352, "py": 759 },
  { "id": "s39", "px": 390, "py": 721 },
  { "id": "s40", "px": 271, "py": 779 },
  { "id": "s41", "px": 293, "py": 468 },
  { "id": "s42", "px": 244, "py": 487 },
  { "id": "s43", "px": 578, "py": 463 }
];

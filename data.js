// Säsongen 2026/27. Lägg till eller ändra tävlingar här – sidan läser bara den här filen.
// sport: "biathlon" | "xc"   type: "wc" (världscup) | "champ" (mästerskap)
// confirmed: false => datum är preliminära / källorna går isär (visas med varningsmarkering)
window.UPDATED = "2026-11-27";
window.EVENTS = [
  // ---------- Skidskytte: världscupen ----------
  { sport: "biathlon", type: "wc", name: "Världscup 1", place: "Kontiolahti", country: "Finland", start: "2026-11-26", end: "2026-11-29" },
  { sport: "biathlon", type: "wc", name: "Världscup 2", place: "Hochfilzen", country: "Österrike", start: "2026-12-04", end: "2026-12-06" },
  { sport: "biathlon", type: "wc", name: "Världscup 3", place: "Annecy–Le Grand-Bornand", country: "Frankrike", start: "2026-12-10", end: "2026-12-13" },
  { sport: "biathlon", type: "wc", name: "Världscup 4", place: "Pokljuka", country: "Slovenien", start: "2027-01-02", end: "2027-01-03" },
  { sport: "biathlon", type: "wc", name: "Världscup 5", place: "Ruhpolding", country: "Tyskland", start: "2027-01-06", end: "2027-01-10" },
  { sport: "biathlon", type: "wc", name: "Världscup 6", place: "Antholz-Anterselva", country: "Italien", start: "2027-01-14", end: "2027-01-17" },
  { sport: "biathlon", type: "wc", name: "Världscup 7", place: "Nové Město na Moravě", country: "Tjeckien", start: "2027-01-21", end: "2027-01-24" },
  { sport: "biathlon", type: "wc", name: "Världscup 8", place: "Oberhof", country: "Tyskland", start: "2027-03-04", end: "2027-03-07" },
  { sport: "biathlon", type: "wc", name: "Världscup 9", place: "Östersund", country: "Sverige", start: "2027-03-11", end: "2027-03-14" },
  { sport: "biathlon", type: "wc", name: "Världscup 10 (final)", place: "Oslo Holmenkollen", country: "Norge", start: "2027-03-18", end: "2027-03-21" },
  // ---------- Skidskytte: mästerskap ----------
  { sport: "biathlon", type: "champ", name: "VM skidskytte", place: "Otepää", country: "Estland", start: "2027-02-10", end: "2027-02-21" },

  // ---------- Längdskidor: världscupen ----------
  { sport: "xc", type: "wc", name: "Världscup 1", place: "Ruka", country: "Finland", start: "2026-11-27", end: "2026-11-29" },
  { sport: "xc", type: "wc", name: "Världscup 2", place: "Trondheim", country: "Norge", start: "2026-12-04", end: "2026-12-06" },
  { sport: "xc", type: "wc", name: "Världscup 3", place: "Davos", country: "Schweiz", start: "2026-12-11", end: "2026-12-13" },
  { sport: "xc", type: "wc", name: "Tour de Ski", place: "Les Rousses / Oberstdorf / Val di Fiemme", country: "Frankrike / Tyskland / Italien", start: "2027-01-01", end: "2027-01-10" },
  { sport: "xc", type: "wc", name: "Världscup 5", place: "Engadin", country: "Schweiz", start: "2027-01-22", end: "2027-01-24" },
  { sport: "xc", type: "wc", name: "Världscup 6", place: "Toblach", country: "Italien", start: "2027-01-29", end: "2027-01-31" },
  { sport: "xc", type: "wc", name: "Världscup 7", place: "Lahti", country: "Finland", start: "2027-02-12", end: "2027-02-14" },
  { sport: "xc", type: "wc", name: "Världscup 8", place: "Oslo Holmenkollen", country: "Norge", start: "2027-03-13", end: "2027-03-14" },
  { sport: "xc", type: "wc", name: "Världscup 9", place: "Drammen", country: "Norge", start: "2027-03-16", end: "2027-03-16" },
  { sport: "xc", type: "wc", name: "Världscup 10 (final)", place: "Ulricehamn", country: "Sverige", start: "2027-03-19", end: "2027-03-21" },
  // ---------- Längdskidor: mästerskap ----------
  { sport: "xc", type: "champ", name: "VM i nordisk skidsport", place: "Falun", country: "Sverige", start: "2027-02-24", end: "2027-03-07", confirmed: false, note: "Startdatum 22 eller 24 feb beroende på källa" }
];

// Enskilda lopp. Nyckel: "<sport>|<startdatum för tävlingen>". Varje lopp: [datum, starttid (svensk tid, tom om okänd), text].
// D = damer, H = herrar. Källa: Aftonbladets tv-tider (skidskytte och längdskidor), VM i skidskytte från Wikipedia (utan tider).
window.RACE_NOTES = {
  biathlon: "Tider från Aftonbladet (svensk tid), uppdateras under säsongen. Sänds i SVT och SVT Play. VM-programmet saknar tider.",
  xc: "Tider från Aftonbladet (svensk tid), uppdateras under säsongen. Sänds på Viaplay Sport; SVT sänder loppen i Sverige."
};
window.RACES = {
  "biathlon|2026-11-26": [["2026-11-26","16.15","H 20 km distans"],["2026-11-27","16.15","D 15 km distans"],["2026-11-28","13.10","Singelmixstafett"],["2026-11-28","15.15","Mixstafett"],["2026-11-29","13.00","H 10 km sprint"],["2026-11-29","16.15","D 7,5 km sprint"]],
  "biathlon|2026-12-04": [["2026-12-04","11.25","D 7,5 km sprint"],["2026-12-04","14.15","H 10 km sprint"],["2026-12-05","12.15","D 10 km jaktstart"],["2026-12-05","14.30","H 12,5 km jaktstart"],["2026-12-06","11.30","D 4×6 km stafett"],["2026-12-06","14.15","H 4×7,5 km stafett"]],
  "biathlon|2026-12-10": [["2026-12-10","14.15","D 7,5 km sprint"],["2026-12-11","14.15","H 10 km sprint"],["2026-12-12","12.15","D 10 km jaktstart"],["2026-12-12","14.45","H 12,5 km jaktstart"],["2026-12-13","12.15","D 12,5 km masstart"],["2026-12-13","14.45","H 15 km masstart"]],
  "biathlon|2027-01-02": [["2027-01-02","11.25","H 10 km sprint"],["2027-01-02","14.10","D 7,5 km sprint"],["2027-01-03","11.35","H 4×7,5 km stafett"],["2027-01-03","14.15","D 4×6 km stafett"]],
  "biathlon|2027-01-06": [["2027-01-06","14.15","D 4×6 km stafett"],["2027-01-07","14.15","H 4×7,5 km stafett"],["2027-01-08","14.15","D 7,5 km sprint"],["2027-01-09","14.30","H 10 km sprint"],["2027-01-10","12.00","D 10 km jaktstart"],["2027-01-10","14.45","H 12,5 km jaktstart"]],
  "biathlon|2027-01-14": [["2027-01-14","14.15","H 20 km distans"],["2027-01-15","14.15","D 15 km distans"],["2027-01-16","11.45","Singelmixstafett"],["2027-01-16","14.30","Mixstafett"],["2027-01-17","12.45","H 15 km masstart"],["2027-01-17","15.00","D 12,5 km masstart"]],
  "biathlon|2027-01-21": [["2027-01-21","16.30","D 7,5 km sprint"],["2027-01-22","16.30","H 10 km sprint"],["2027-01-23","14.45","D 12,5 km masstart"],["2027-01-23","17.00","H 4×7,5 km stafett"],["2027-01-24","14.35","D 4×6 km stafett"],["2027-01-24","17.10","H 15 km masstart"]],
  "biathlon|2027-03-04": [["2027-03-04","14.45","H 10 km sprint"],["2027-03-05","14.10","D 7,5 km sprint"],["2027-03-06","13.45","H 12,5 km jaktstart"],["2027-03-06","16.00","D 10 km jaktstart"],["2027-03-07","12.45","H 4×7,5 km stafett"],["2027-03-07","15.50","D 4×6 km stafett"]],
  "biathlon|2027-03-11": [["2027-03-11","16.10","D 15 km distans"],["2027-03-12","16.10","H 20 km distans"],["2027-03-13","14.30","Singelmixstafett"],["2027-03-13","17.10","Mixstafett"],["2027-03-14","14.30","D 12,5 km masstart"],["2027-03-14","17.10","H 15 km masstart"]],
  "biathlon|2027-03-18": [["2027-03-18","16.30","H 10 km sprint"],["2027-03-19","16.30","D 7,5 km sprint"],["2027-03-20","14.45","H 12,5 km jaktstart"],["2027-03-20","17.00","D 10 km jaktstart"],["2027-03-21","13.30","H 15 km masstart"],["2027-03-21","16.00","D 12,5 km masstart"]],
  "biathlon|2027-02-10": [["2027-02-10","","Mixstafett 4×6 km"],["2027-02-12","","H sprint"],["2027-02-13","","D sprint"],["2027-02-14","","Jaktstart H + D"],["2027-02-16","","Singelmixstafett"],["2027-02-17","","H 20 km distans"],["2027-02-18","","D 15 km distans"],["2027-02-19","","H stafett"],["2027-02-20","","D stafett"],["2027-02-21","","Masstart H + D"]],
  "xc|2026-11-27": [["2026-11-27","10.30","D 10 km klassisk, intervallstart"],["2026-11-27","13.15","H 10 km klassisk, intervallstart"],["2026-11-28","8.45","Sprint klassisk, kval D+H"],["2026-11-28","11.15","Sprint klassisk, final D+H"],["2026-11-29","10.00","H 20 km fristil, masstart"],["2026-11-29","11.55","D 20 km fristil, masstart"]],
  "xc|2026-12-04": [["2026-12-04","9.30","D 10 km klassisk, intervallstart"],["2026-12-04","12.15","H 10 km klassisk, intervallstart"],["2026-12-05","10.15","Sprint fristil, kval D"],["2026-12-05","10.45","Sprint fristil, kval H"],["2026-12-05","12.45","Sprint fristil, final D"],["2026-12-05","13.15","Sprint fristil, final H"],["2026-12-06","10.30","H 20 km skiathlon"],["2026-12-06","12.30","D 20 km skiathlon"]],
  "xc|2026-12-11": [["2026-12-11","16.00","Lagsprint fristil, kval D"],["2026-12-11","16.30","Lagsprint fristil, kval H"],["2026-12-11","18.00","Lagsprint fristil, final D"],["2026-12-11","18.30","Lagsprint fristil, final H"],["2026-12-12","14.45","Sprint fristil, kval D"],["2026-12-12","15.15","Sprint fristil, kval H"],["2026-12-12","18.00","Sprint fristil, final D"],["2026-12-12","18.30","Sprint fristil, final H"],["2026-12-13","11.00","D 5 km fristil, heat-masstart"],["2026-12-13","14.00","H 5 km fristil, heat-masstart"]],
  "xc|2027-01-01": [["2027-01-01","11.45","Etapp 1, Les Rousses: sprint fristil, kval D+H"],["2027-01-01","14.15","Etapp 1, Les Rousses: sprint fristil, final D+H"],["2027-01-02","10.15","Etapp 2, Les Rousses: D 20 km klassisk masstart"],["2027-01-02","14.15","Etapp 2, Les Rousses: H 20 km klassisk masstart"],["2027-01-03","13.15","Etapp 3, Les Rousses: D 15 km fristil jaktstart"],["2027-01-03","15.30","Etapp 3, Les Rousses: H 15 km fristil jaktstart"],["2027-01-05","13.15","Etapp 4, Oberstdorf: H 15 km klassisk masstart"],["2027-01-05","15.40","Etapp 4, Oberstdorf: D 15 km klassisk masstart"],["2027-01-06","13.00","Etapp 5, Oberstdorf: D 5 km fristil heat-masstart"],["2027-01-06","15.30","Etapp 5, Oberstdorf: H 5 km fristil heat-masstart"],["2027-01-08","13.00","Etapp 6, Val di Fiemme: D 15 km skiathlon"],["2027-01-08","15.30","Etapp 6, Val di Fiemme: H 15 km skiathlon"],["2027-01-09","12.30","Etapp 7, Val di Fiemme: sprint fristil, kval D"],["2027-01-09","13.00","Etapp 7, Val di Fiemme: sprint fristil, kval H"],["2027-01-09","15.00","Etapp 7, Val di Fiemme: sprint fristil, final D"],["2027-01-09","15.30","Etapp 7, Val di Fiemme: sprint fristil, final H"],["2027-01-10","12.35","Etapp 8, Val di Fiemme: D 10 km fristil masstart"],["2027-01-10","15.40","Etapp 8, Val di Fiemme: H 10 km fristil masstart"]],
  "xc|2027-01-22": [["2027-01-22","15.00","Mixstafett 4×5 km"],["2027-01-23","12.45","Sprint fristil, kval D+H"],["2027-01-23","15.15","Sprint fristil, final D+H"],["2027-01-24","11.20","H 20 km fristil, masstart"],["2027-01-24","14.30","D 20 km fristil, masstart"]],
  "xc|2027-01-29": [["2027-01-29","13.00","H 10 km fristil, intervallstart"],["2027-01-29","14.45","D 10 km fristil, intervallstart"],["2027-01-30","11.45","Sprint fristil, kval D+H"],["2027-01-30","14.15","Sprint fristil, final D+H"],["2027-01-31","10.00","H 20 km klassisk, masstart"],["2027-01-31","12.00","D 20 km klassisk, masstart"]],
  "xc|2027-02-12": [["2027-02-12","15.30","Sprint klassisk, kval D"],["2027-02-12","16.00","Sprint klassisk, kval H"],["2027-02-12","18.00","Sprint klassisk, final D"],["2027-02-12","18.25","Sprint klassisk, final H"],["2027-02-13","11.00","H 20 km skiathlon"],["2027-02-13","14.00","D 20 km skiathlon"],["2027-02-14","12.00","D 10 km klassisk, intervallstart"],["2027-02-14","14.40","H 10 km klassisk, intervallstart"]],
  "xc|2027-03-13": [["2027-03-13","10.30","H 50 km klassisk, masstart"],["2027-03-14","11.30","D 50 km klassisk, masstart"]],
  "xc|2027-03-16": [["2027-03-16","13.45","Sprint klassisk, kval D"],["2027-03-16","14.15","Sprint klassisk, kval H"],["2027-03-16","16.15","Sprint klassisk, final D"],["2027-03-16","16.45","Sprint klassisk, final H"]],
  "xc|2027-03-19": [["2027-03-19","11.45","H 10 km fristil, intervallstart"],["2027-03-19","14.00","D 10 km fristil, intervallstart"],["2027-03-20","10.15","Sprint fristil, kval D+H"],["2027-03-20","12.45","Sprint fristil, final D+H"],["2027-03-21","12.00","H 20 km klassisk, masstart"],["2027-03-21","14.30","D 20 km klassisk, masstart"]]
  // Falun: grenarna är kända men inte dagarna (sprint, skiathlon, 10 km klassisk, lagsprint, stafett 4×7,5 km, 50 km fristil)
};

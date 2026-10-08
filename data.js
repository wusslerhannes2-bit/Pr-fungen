// Prüfung Realschule Baden-Württemberg — Vollständige Prüfungsdaten 1990–2024
// Erstellt auf Basis des Original-Archivs von Walter Bauer (walterbauer.net)

const YEARS_DATA = [
  {
    "year": 2024,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "structure": "Pflichtteil A1 (10 Pkt, hilfsmittelfrei) + Pflichtteil A2 (20 Pkt) + Wahlteil B (2 aus 4, 20 Pkt)",
    "calcAllowed": "A1: Nein (hilfsmittelfrei) | A2 & B: Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "emerald",
    "uebersichtUrl": "http://www.walterbauer.net/2024_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2024.html",
    "taskCount": 23,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2024_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2024_uebersicht.html"
      },
      {
        "label": "A1/1",
        "type": "pflicht-a1",
        "href": "2024_a1_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p1.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p1.html"
      },
      {
        "label": "A1/2",
        "type": "pflicht-a1",
        "href": "2024_a1_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p2.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p2.html"
      },
      {
        "label": "A1/3",
        "type": "pflicht-a1",
        "href": "2024_a1_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p3.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p3.html"
      },
      {
        "label": "A1/4a",
        "type": "pflicht-a1",
        "href": "2024_a1_p4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p4a.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p4a.html"
      },
      {
        "label": "A1/4b",
        "type": "pflicht-a1",
        "href": "2024_a1_p4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p4b.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p4b.html"
      },
      {
        "label": "A1/5",
        "type": "pflicht-a1",
        "href": "2024_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p5.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p5.html"
      },
      {
        "label": "A1/6a",
        "type": "pflicht-a1",
        "href": "2024_a1_p6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p6a.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p6a.html"
      },
      {
        "label": "A1/6b",
        "type": "pflicht-a1",
        "href": "2024_a1_p6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p6b.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p6b.html"
      },
      {
        "label": "A1/7a",
        "type": "pflicht-a1",
        "href": "2024_a1_p7a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p7a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p7a.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p7a.html"
      },
      {
        "label": "A1/7b",
        "type": "pflicht-a1",
        "href": "2024_a1_p7b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p7b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p7b.html",
        "pageUrl": "http://www.walterbauer.net/2024_a1_p7b.html"
      },
      {
        "label": "A2/1",
        "type": "pflicht-a2",
        "href": "2024_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p1.html",
        "pageUrl": "http://www.walterbauer.net/2024_a2_p1.html"
      },
      {
        "label": "A2/2",
        "type": "pflicht-a2",
        "href": "2024_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p2.html",
        "pageUrl": "http://www.walterbauer.net/2024_a2_p2.html"
      },
      {
        "label": "A2/3",
        "type": "pflicht-a2",
        "href": "2024_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p3.html",
        "pageUrl": "http://www.walterbauer.net/2024_a2_p3.html"
      },
      {
        "label": "A2/4",
        "type": "pflicht-a2",
        "href": "2024_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p4.html",
        "pageUrl": "http://www.walterbauer.net/2024_a2_p4.html"
      },
      {
        "label": "A2/5",
        "type": "pflicht-a2",
        "href": "2024_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p5.html",
        "pageUrl": "http://www.walterbauer.net/2024_a2_p5.html"
      },
      {
        "label": "A2/6",
        "type": "pflicht-a2",
        "href": "2024_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p6.html",
        "pageUrl": "http://www.walterbauer.net/2024_a2_p6.html"
      },
      {
        "label": "B/1a",
        "type": "wahl-b",
        "href": "2024_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_1a.html",
        "pageUrl": "http://www.walterbauer.net/2024_b_1a.html"
      },
      {
        "label": "B/1b",
        "type": "wahl-b",
        "href": "2024_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_b_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_1b.html",
        "pageUrl": "http://www.walterbauer.net/2024_b_1b.html"
      },
      {
        "label": "B/2a",
        "type": "wahl-b",
        "href": "2024_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_2a.html",
        "pageUrl": "http://www.walterbauer.net/2024_b_2a.html"
      },
      {
        "label": "B/2b",
        "type": "wahl-b",
        "href": "2024_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_2b.html",
        "pageUrl": "http://www.walterbauer.net/2024_b_2b.html"
      },
      {
        "label": "B/3a",
        "type": "wahl-b",
        "href": "2024_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_3a.html",
        "pageUrl": "http://www.walterbauer.net/2024_b_3a.html"
      },
      {
        "label": "B/3b",
        "type": "wahl-b",
        "href": "2024_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2024_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_3b.html",
        "pageUrl": "http://www.walterbauer.net/2024_b_3b.html"
      }
    ]
  },
  {
    "year": 2023,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "structure": "Pflichtteil A1 (10 Pkt, hilfsmittelfrei) + Pflichtteil A2 (20 Pkt) + Wahlteil B (2 aus 4, 20 Pkt)",
    "calcAllowed": "A1: Nein (hilfsmittelfrei) | A2 & B: Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "emerald",
    "uebersichtUrl": "http://www.walterbauer.net/2023_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2023.html",
    "taskCount": 25,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2023_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2023_uebersicht.html"
      },
      {
        "label": "A1/1",
        "type": "pflicht-a1",
        "href": "2023_a1_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p1.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p1.html"
      },
      {
        "label": "A1/2a",
        "type": "pflicht-a1",
        "href": "2023_a1_p2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p2a.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p2a.html"
      },
      {
        "label": "A1/2b",
        "type": "pflicht-a1",
        "href": "2023_a1_p2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p2b.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p2b.html"
      },
      {
        "label": "A1/3",
        "type": "pflicht-a1",
        "href": "2023_a1_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p3.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p3.html"
      },
      {
        "label": "A1/4",
        "type": "pflicht-a1",
        "href": "2023_a1_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p4.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p4.html"
      },
      {
        "label": "A1/5",
        "type": "pflicht-a1",
        "href": "2023_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p5.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p5.html"
      },
      {
        "label": "A1/6",
        "type": "pflicht-a1",
        "href": "2023_a1_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p6.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p6.html"
      },
      {
        "label": "A1/7",
        "type": "pflicht-a1",
        "href": "2023_a1_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p7.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p7.html"
      },
      {
        "label": "A1/8a",
        "type": "pflicht-a1",
        "href": "2023_a1_p8a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p8a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p8a.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p8a.html"
      },
      {
        "label": "A1/8b",
        "type": "pflicht-a1",
        "href": "2023_a1_p8b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p8b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p8b.html",
        "pageUrl": "http://www.walterbauer.net/2023_a1_p8b.html"
      },
      {
        "label": "A2/1",
        "type": "pflicht-a2",
        "href": "2023_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p1.html",
        "pageUrl": "http://www.walterbauer.net/2023_a2_p1.html"
      },
      {
        "label": "A2/2",
        "type": "pflicht-a2",
        "href": "2023_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p2.html",
        "pageUrl": "http://www.walterbauer.net/2023_a2_p2.html"
      },
      {
        "label": "A2/3",
        "type": "pflicht-a2",
        "href": "2023_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p3.html",
        "pageUrl": "http://www.walterbauer.net/2023_a2_p3.html"
      },
      {
        "label": "A2/4",
        "type": "pflicht-a2",
        "href": "2023_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p4.html",
        "pageUrl": "http://www.walterbauer.net/2023_a2_p4.html"
      },
      {
        "label": "A2/5",
        "type": "pflicht-a2",
        "href": "2023_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p5.html",
        "pageUrl": "http://www.walterbauer.net/2023_a2_p5.html"
      },
      {
        "label": "A2/6",
        "type": "pflicht-a2",
        "href": "2023_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p6.html",
        "pageUrl": "http://www.walterbauer.net/2023_a2_p6.html"
      },
      {
        "label": "B/1a",
        "type": "wahl-b",
        "href": "2023_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_1a.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_1a.html"
      },
      {
        "label": "B/1b",
        "type": "wahl-b",
        "href": "2023_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_1b.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_1b.html"
      },
      {
        "label": "B/2a",
        "type": "wahl-b",
        "href": "2023_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_2a.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_2a.html"
      },
      {
        "label": "B/2b",
        "type": "wahl-b",
        "href": "2023_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_2b.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_2b.html"
      },
      {
        "label": "B/3a",
        "type": "wahl-b",
        "href": "2023_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_3a.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_3a.html"
      },
      {
        "label": "B/3b",
        "type": "wahl-b",
        "href": "2023_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_3b.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_3b.html"
      },
      {
        "label": "B/4a",
        "type": "wahl-b",
        "href": "2023_b_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_4a.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_4a.html"
      },
      {
        "label": "B/4b",
        "type": "wahl-b",
        "href": "2023_b_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2023_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_4b.html",
        "pageUrl": "http://www.walterbauer.net/2023_b_4b.html"
      }
    ]
  },
  {
    "year": 2022,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "structure": "Pflichtteil A1 (10 Pkt, hilfsmittelfrei) + Pflichtteil A2 (20 Pkt) + Wahlteil B (2 aus 4, 20 Pkt)",
    "calcAllowed": "A1: Nein (hilfsmittelfrei) | A2 & B: Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "emerald",
    "uebersichtUrl": "http://www.walterbauer.net/2022_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2022.html",
    "taskCount": 27,
    "tasks": [
      {
        "label": "Uebersicht",
        "type": "general",
        "href": "2022_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2022_uebersicht.html"
      },
      {
        "label": "A1/1a",
        "type": "pflicht-a1",
        "href": "2022_a1_p1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p1a.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p1a.html"
      },
      {
        "label": "A1/1b",
        "type": "pflicht-a1",
        "href": "2022_a1_p1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p1b.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p1b.html"
      },
      {
        "label": "A1/1c",
        "type": "pflicht-a1",
        "href": "2022_a1_p1c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p1c.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p1c.html"
      },
      {
        "label": "A1/2a",
        "type": "pflicht-a1",
        "href": "2022_a1_p2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p2a.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p2a.html"
      },
      {
        "label": "A1/2b",
        "type": "pflicht-a1",
        "href": "2022_a1_p2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p2b.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p2b.html"
      },
      {
        "label": "A1/3a",
        "type": "pflicht-a1",
        "href": "2022_a1_p3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p3a.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p3a.html"
      },
      {
        "label": "A1/3b",
        "type": "pflicht-a1",
        "href": "2022_a1_p3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p3b.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p3b.html"
      },
      {
        "label": "A1/4",
        "type": "pflicht-a1",
        "href": "2022_a1_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p4.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p4.html"
      },
      {
        "label": "A1/5",
        "type": "pflicht-a1",
        "href": "2022_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p5.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p5.html"
      },
      {
        "label": "A1/6a",
        "type": "pflicht-a1",
        "href": "2022_a1_p6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p6a.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p6a.html"
      },
      {
        "label": "A1/6b",
        "type": "pflicht-a1",
        "href": "2022_a1_p6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p6b.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p6b.html"
      },
      {
        "label": "A1/7",
        "type": "pflicht-a1",
        "href": "2022_a1_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p7.html",
        "pageUrl": "http://www.walterbauer.net/2022_a1_p7.html"
      },
      {
        "label": "A2/1",
        "type": "pflicht-a2",
        "href": "2022_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p1.html",
        "pageUrl": "http://www.walterbauer.net/2022_a2_p1.html"
      },
      {
        "label": "A2/2",
        "type": "pflicht-a2",
        "href": "2022_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p2.html",
        "pageUrl": "http://www.walterbauer.net/2022_a2_p2.html"
      },
      {
        "label": "A2/3",
        "type": "pflicht-a2",
        "href": "2022_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p3.html",
        "pageUrl": "http://www.walterbauer.net/2022_a2_p3.html"
      },
      {
        "label": "A2/4",
        "type": "pflicht-a2",
        "href": "2022_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p4.html",
        "pageUrl": "http://www.walterbauer.net/2022_a2_p4.html"
      },
      {
        "label": "A2/5",
        "type": "pflicht-a2",
        "href": "2022_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p5.html",
        "pageUrl": "http://www.walterbauer.net/2022_a2_p5.html"
      },
      {
        "label": "A2/6",
        "type": "pflicht-a2",
        "href": "2022_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p6.html",
        "pageUrl": "http://www.walterbauer.net/2022_a2_p6.html"
      },
      {
        "label": "B/1a",
        "type": "wahl-b",
        "href": "2022_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_1a.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_1a.html"
      },
      {
        "label": "B/1b",
        "type": "wahl-b",
        "href": "2022_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_1b.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_1b.html"
      },
      {
        "label": "B/2a",
        "type": "wahl-b",
        "href": "2022_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_2a.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_2a.html"
      },
      {
        "label": "B/2b",
        "type": "wahl-b",
        "href": "2022_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_2b.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_2b.html"
      },
      {
        "label": "B/3a",
        "type": "wahl-b",
        "href": "2022_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_3a.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_3a.html"
      },
      {
        "label": "B/3b",
        "type": "wahl-b",
        "href": "2022_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_3b.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_3b.html"
      },
      {
        "label": "B/4a",
        "type": "wahl-b",
        "href": "2022_b_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_4a.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_4a.html"
      },
      {
        "label": "B/4b",
        "type": "wahl-b",
        "href": "2022_b_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2022_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_4b.html",
        "pageUrl": "http://www.walterbauer.net/2022_b_4b.html"
      }
    ]
  },
  {
    "year": 2021,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "structure": "Pflichtteil A1 (10 Pkt, hilfsmittelfrei) + Pflichtteil A2 (20 Pkt) + Wahlteil B (2 aus 4, 20 Pkt)",
    "calcAllowed": "A1: Nein (hilfsmittelfrei) | A2 & B: Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "emerald",
    "uebersichtUrl": "http://www.walterbauer.net/2021_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2021.html",
    "taskCount": 25,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2021_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2021_uebersicht.html"
      },
      {
        "label": "A1/1a",
        "type": "pflicht-a1",
        "href": "2021_a1_p1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p1a.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p1a.html"
      },
      {
        "label": "A1/1b",
        "type": "pflicht-a1",
        "href": "2021_a1_p1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p1b.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p1b.html"
      },
      {
        "label": "A!/2",
        "type": "general",
        "href": "2021_a1_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p2.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p2.html"
      },
      {
        "label": "A1/3a",
        "type": "pflicht-a1",
        "href": "2021_a1_p3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p3a.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p3a.html"
      },
      {
        "label": "A1/3b",
        "type": "pflicht-a1",
        "href": "2021_a1_p3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p3b.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p3b.html"
      },
      {
        "label": "A1/4a",
        "type": "pflicht-a1",
        "href": "2021_a1_p4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p4a.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p4a.html"
      },
      {
        "label": "A1/4b",
        "type": "pflicht-a1",
        "href": "2021_a1_p4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p4b.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p4b.html"
      },
      {
        "label": "A1/5",
        "type": "pflicht-a1",
        "href": "2021_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p5.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p5.html"
      },
      {
        "label": "A1/6",
        "type": "pflicht-a1",
        "href": "2021_a1_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p6.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p6.html"
      },
      {
        "label": "A1/7",
        "type": "pflicht-a1",
        "href": "2021_a1_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p7.html",
        "pageUrl": "http://www.walterbauer.net/2021_a1_p7.html"
      },
      {
        "label": "A2/1",
        "type": "pflicht-a2",
        "href": "2021_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p1.html",
        "pageUrl": "http://www.walterbauer.net/2021_a2_p1.html"
      },
      {
        "label": "A2/2",
        "type": "pflicht-a2",
        "href": "2021_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p2.html",
        "pageUrl": "http://www.walterbauer.net/2021_a2_p2.html"
      },
      {
        "label": "A2/3",
        "type": "pflicht-a2",
        "href": "2021_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p3.html",
        "pageUrl": "http://www.walterbauer.net/2021_a2_p3.html"
      },
      {
        "label": "A2/4",
        "type": "pflicht-a2",
        "href": "2021_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p4.html",
        "pageUrl": "http://www.walterbauer.net/2021_a2_p4.html"
      },
      {
        "label": "A2/5",
        "type": "pflicht-a2",
        "href": "2021_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p5.html",
        "pageUrl": "http://www.walterbauer.net/2021_a2_p5.html"
      },
      {
        "label": "A2/6",
        "type": "pflicht-a2",
        "href": "2021_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p6.html",
        "pageUrl": "http://www.walterbauer.net/2021_a2_p6.html"
      },
      {
        "label": "B/1a",
        "type": "wahl-b",
        "href": "2021_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_1a.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_1a.html"
      },
      {
        "label": "B/1b",
        "type": "wahl-b",
        "href": "2021_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_1b.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_1b.html"
      },
      {
        "label": "B/2a",
        "type": "wahl-b",
        "href": "2021_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_2a.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_2a.html"
      },
      {
        "label": "B/2b",
        "type": "wahl-b",
        "href": "2021_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_2b.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_2b.html"
      },
      {
        "label": "B/3a",
        "type": "wahl-b",
        "href": "2021_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_3a.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_3a.html"
      },
      {
        "label": "B/3b",
        "type": "wahl-b",
        "href": "2021_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_3b.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_3b.html"
      },
      {
        "label": "B/4a",
        "type": "wahl-b",
        "href": "2021_b_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_4a.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_4a.html"
      },
      {
        "label": "B/4b",
        "type": "wahl-b",
        "href": "2021_b_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2021_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_4b.html",
        "pageUrl": "http://www.walterbauer.net/2021_b_4b.html"
      }
    ]
  },
  {
    "year": 2020,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2020_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2020.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2020_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2020_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2020_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p1.html",
        "pageUrl": "http://www.walterbauer.net/2020_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2020_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p2.html",
        "pageUrl": "http://www.walterbauer.net/2020_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2020_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p3.html",
        "pageUrl": "http://www.walterbauer.net/2020_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2020_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p4.html",
        "pageUrl": "http://www.walterbauer.net/2020_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2020_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p5.html",
        "pageUrl": "http://www.walterbauer.net/2020_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2020_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p6.html",
        "pageUrl": "http://www.walterbauer.net/2020_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2020_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p7.html",
        "pageUrl": "http://www.walterbauer.net/2020_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2020_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p8.html",
        "pageUrl": "http://www.walterbauer.net/2020_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2020_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2020_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2020_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2020_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2020_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2020_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2020_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2020_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2020_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2020_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2020_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2020_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2020_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2020_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2020_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2020_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2020_w4b.html"
      }
    ]
  },
  {
    "year": 2019,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2019_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2019.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2019_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2019_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2019_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p1.html",
        "pageUrl": "http://www.walterbauer.net/2019_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2019_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p2.html",
        "pageUrl": "http://www.walterbauer.net/2019_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2019_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p3.html",
        "pageUrl": "http://www.walterbauer.net/2019_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2019_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p4.html",
        "pageUrl": "http://www.walterbauer.net/2019_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2019_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p5.html",
        "pageUrl": "http://www.walterbauer.net/2019_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2019_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p6.html",
        "pageUrl": "http://www.walterbauer.net/2019_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2019_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p7.html",
        "pageUrl": "http://www.walterbauer.net/2019_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2019_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p8.html",
        "pageUrl": "http://www.walterbauer.net/2019_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2019_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2019_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2019_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2019_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2019_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2019_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2019_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2019_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2019_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2019_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2019_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2019_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2019_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2019_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2019_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2019_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2019_w4b.html"
      }
    ]
  },
  {
    "year": 2018,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2018_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2018.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2018_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2018_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2018_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p1.html",
        "pageUrl": "http://www.walterbauer.net/2018_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2018_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p2.html",
        "pageUrl": "http://www.walterbauer.net/2018_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2018_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p3.html",
        "pageUrl": "http://www.walterbauer.net/2018_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2018_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p4.html",
        "pageUrl": "http://www.walterbauer.net/2018_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2018_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p5.html",
        "pageUrl": "http://www.walterbauer.net/2018_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2018_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p6.html",
        "pageUrl": "http://www.walterbauer.net/2018_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2018_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p7.html",
        "pageUrl": "http://www.walterbauer.net/2018_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2018_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p8.html",
        "pageUrl": "http://www.walterbauer.net/2018_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2018_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2018_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2018_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2018_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2018_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2018_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2018_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2018_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2018_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2018_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2018_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2018_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2018_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2018_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2018_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2018_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2018_w4b.html"
      }
    ]
  },
  {
    "year": 2017,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2017_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2017.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2017_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2017_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2017_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p1.html",
        "pageUrl": "http://www.walterbauer.net/2017_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2017_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p2.html",
        "pageUrl": "http://www.walterbauer.net/2017_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2017_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p3.html",
        "pageUrl": "http://www.walterbauer.net/2017_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2017_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p4.html",
        "pageUrl": "http://www.walterbauer.net/2017_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2017_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p5.html",
        "pageUrl": "http://www.walterbauer.net/2017_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2017_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p6.html",
        "pageUrl": "http://www.walterbauer.net/2017_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2017_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p7.html",
        "pageUrl": "http://www.walterbauer.net/2017_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2017_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p8.html",
        "pageUrl": "http://www.walterbauer.net/2017_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2017_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2017_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2017_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2017_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2017_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2017_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2017_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2017_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2017_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2017_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2017_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2017_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2017_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2017_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2017_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2017_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2017_w4b.html"
      }
    ]
  },
  {
    "year": 2016,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2016_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2016.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2016_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2016_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2016_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p1.html",
        "pageUrl": "http://www.walterbauer.net/2016_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2016_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p2.html",
        "pageUrl": "http://www.walterbauer.net/2016_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2016_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p3.html",
        "pageUrl": "http://www.walterbauer.net/2016_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2016_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p4.html",
        "pageUrl": "http://www.walterbauer.net/2016_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2016_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p5.html",
        "pageUrl": "http://www.walterbauer.net/2016_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2016_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p6.html",
        "pageUrl": "http://www.walterbauer.net/2016_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2016_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p7.html",
        "pageUrl": "http://www.walterbauer.net/2016_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2016_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p8.html",
        "pageUrl": "http://www.walterbauer.net/2016_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2016_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2016_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2016_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2016_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2016_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2016_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2016_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2016_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2016_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2016_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2016_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2016_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2016_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2016_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2016_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2016_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2016_w4b.html"
      }
    ]
  },
  {
    "year": 2015,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2015_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2015.html",
    "taskCount": 18,
    "tasks": [
      {
        "label": "Mathematik",
        "type": "general",
        "href": "mathemartik.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_mathemartik.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_mathemartik.html",
        "pageUrl": "http://www.walterbauer.net/mathemartik.html"
      },
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2015_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2015_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2015_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p1.html",
        "pageUrl": "http://www.walterbauer.net/2015_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2015_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p2.html",
        "pageUrl": "http://www.walterbauer.net/2015_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2015_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p3.html",
        "pageUrl": "http://www.walterbauer.net/2015_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2015_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p4.html",
        "pageUrl": "http://www.walterbauer.net/2015_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2015_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p5.html",
        "pageUrl": "http://www.walterbauer.net/2015_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2015_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p6.html",
        "pageUrl": "http://www.walterbauer.net/2015_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2015_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p7.html",
        "pageUrl": "http://www.walterbauer.net/2015_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2015_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p8.html",
        "pageUrl": "http://www.walterbauer.net/2015_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2015_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2015_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2015_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2015_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2015_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2015_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2015_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2015_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2015_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2015_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2015_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2015_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2015_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2015_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2015_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2015_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2015_w4b.html"
      }
    ]
  },
  {
    "year": 2014,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2014_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2014.html",
    "taskCount": 18,
    "tasks": [
      {
        "label": "Mathematik",
        "type": "general",
        "href": "matematik.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_matematik.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_matematik.html",
        "pageUrl": "http://www.walterbauer.net/matematik.html"
      },
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2014_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2014_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2014_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p1.html",
        "pageUrl": "http://www.walterbauer.net/2014_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2014_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p2.html",
        "pageUrl": "http://www.walterbauer.net/2014_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2014_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p3.html",
        "pageUrl": "http://www.walterbauer.net/2014_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2014_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p4.html",
        "pageUrl": "http://www.walterbauer.net/2014_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2014_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p5.html",
        "pageUrl": "http://www.walterbauer.net/2014_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2014_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p6.html",
        "pageUrl": "http://www.walterbauer.net/2014_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2014_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p7.html",
        "pageUrl": "http://www.walterbauer.net/2014_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2014_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p8.html",
        "pageUrl": "http://www.walterbauer.net/2014_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2014_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2014_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2014_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2014_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2014_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2014_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2014_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2014_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2014_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2014_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2014_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2014_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2014_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2014_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2014_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2014_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2014_w4b.html"
      }
    ]
  },
  {
    "year": 2013,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2013_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2013.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2013_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2013_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2013_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p1.html",
        "pageUrl": "http://www.walterbauer.net/2013_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2013_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p2.html",
        "pageUrl": "http://www.walterbauer.net/2013_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2013_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p3.html",
        "pageUrl": "http://www.walterbauer.net/2013_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2013_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p4.html",
        "pageUrl": "http://www.walterbauer.net/2013_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2013_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p5.html",
        "pageUrl": "http://www.walterbauer.net/2013_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2013_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p6.html",
        "pageUrl": "http://www.walterbauer.net/2013_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2013_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p7.html",
        "pageUrl": "http://www.walterbauer.net/2013_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2013_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p8.html",
        "pageUrl": "http://www.walterbauer.net/2013_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2013_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2013_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2013_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2013_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2013_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2013_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2013_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2013_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2013_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2013_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2013_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2013_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2013_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2013_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2013_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2013_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2013_w4b.html"
      }
    ]
  },
  {
    "year": 2012,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2012_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2012.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2012_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2012_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2012_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p1.html",
        "pageUrl": "http://www.walterbauer.net/2012_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2012_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p2.html",
        "pageUrl": "http://www.walterbauer.net/2012_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2012_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p3.html",
        "pageUrl": "http://www.walterbauer.net/2012_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2012_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p4.html",
        "pageUrl": "http://www.walterbauer.net/2012_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2012_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p5.html",
        "pageUrl": "http://www.walterbauer.net/2012_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2012_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p6.html",
        "pageUrl": "http://www.walterbauer.net/2012_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2012_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p7.html",
        "pageUrl": "http://www.walterbauer.net/2012_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2012_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p8.html",
        "pageUrl": "http://www.walterbauer.net/2012_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2012_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2012_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2012_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2012_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2012_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2012_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2012_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2012_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2012_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2012_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2012_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2012_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2012_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2012_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2012_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2012_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2012_w4b.html"
      }
    ]
  },
  {
    "year": 2011,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2011_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2011.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2011_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2011_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2011_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p1.html",
        "pageUrl": "http://www.walterbauer.net/2011_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2011_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p2.html",
        "pageUrl": "http://www.walterbauer.net/2011_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2011_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p3.html",
        "pageUrl": "http://www.walterbauer.net/2011_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2011_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p4.html",
        "pageUrl": "http://www.walterbauer.net/2011_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2011_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p5.html",
        "pageUrl": "http://www.walterbauer.net/2011_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2011_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p6.html",
        "pageUrl": "http://www.walterbauer.net/2011_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2011_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p7.html",
        "pageUrl": "http://www.walterbauer.net/2011_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2011_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p8.html",
        "pageUrl": "http://www.walterbauer.net/2011_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2011_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2011_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2011_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2011_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2011_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2011_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2011_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2011_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2011_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2011_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2011_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2011_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2011_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2011_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2011_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2011_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2011_w4b.html"
      }
    ]
  },
  {
    "year": 2010,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2010_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2010.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2010_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2010_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2010_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p1.html",
        "pageUrl": "http://www.walterbauer.net/2010_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2010_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p2.html",
        "pageUrl": "http://www.walterbauer.net/2010_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2010_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p3.html",
        "pageUrl": "http://www.walterbauer.net/2010_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2010_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p4.html",
        "pageUrl": "http://www.walterbauer.net/2010_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2010_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p5.html",
        "pageUrl": "http://www.walterbauer.net/2010_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2010_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p6.html",
        "pageUrl": "http://www.walterbauer.net/2010_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2010_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p7.html",
        "pageUrl": "http://www.walterbauer.net/2010_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2010_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p8.html",
        "pageUrl": "http://www.walterbauer.net/2010_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2010_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2010_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2010_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2010_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2010_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2010_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2010_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2010_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2010_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2010_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2010_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2010_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2010_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2010_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2010_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2010_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2010_w4b.html"
      }
    ]
  },
  {
    "year": 2009,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2009_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2009.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2009_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2009_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2009_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p1.html",
        "pageUrl": "http://www.walterbauer.net/2009_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2009_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p2.html",
        "pageUrl": "http://www.walterbauer.net/2009_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2009_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p3.html",
        "pageUrl": "http://www.walterbauer.net/2009_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2009_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p4.html",
        "pageUrl": "http://www.walterbauer.net/2009_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2009_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p5.html",
        "pageUrl": "http://www.walterbauer.net/2009_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2009_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p6.html",
        "pageUrl": "http://www.walterbauer.net/2009_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2009_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p7.html",
        "pageUrl": "http://www.walterbauer.net/2009_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2009_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p8.html",
        "pageUrl": "http://www.walterbauer.net/2009_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2009_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2009_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2009_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2009_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2009_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2009_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2009_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2009_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2009_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2009_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2009_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2009_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2009_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2009_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2009_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2009_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2009_w4b.html"
      }
    ]
  },
  {
    "year": 2008,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "structure": "Pflichtbereich P1–P8 (30 Pkt) + Wahlbereich W1–W4 (2 aus 4, 20 Pkt) | Inkl. Wahrscheinlichkeit",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "indigo",
    "uebersichtUrl": "http://www.walterbauer.net/2008_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2008.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2008_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2008_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2008_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p1.html",
        "pageUrl": "http://www.walterbauer.net/2008_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2008_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p2.html",
        "pageUrl": "http://www.walterbauer.net/2008_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2008_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p3.html",
        "pageUrl": "http://www.walterbauer.net/2008_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2008_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p4.html",
        "pageUrl": "http://www.walterbauer.net/2008_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2008_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p5.html",
        "pageUrl": "http://www.walterbauer.net/2008_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2008_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p6.html",
        "pageUrl": "http://www.walterbauer.net/2008_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2008_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p7.html",
        "pageUrl": "http://www.walterbauer.net/2008_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2008_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p8.html",
        "pageUrl": "http://www.walterbauer.net/2008_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2008_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2008_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2008_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2008_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2008_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2008_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2008_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2008_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2008_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2008_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2008_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2008_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2008_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2008_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2008_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2008_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2008_w4b.html"
      }
    ]
  },
  {
    "year": 2007,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 4 Aufgaben (2 aus 4 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "amber",
    "uebersichtUrl": "http://www.walterbauer.net/2007_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2007.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2007_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2007_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2007_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p1.html",
        "pageUrl": "http://www.walterbauer.net/2007_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2007_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p2.html",
        "pageUrl": "http://www.walterbauer.net/2007_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2007_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p3.html",
        "pageUrl": "http://www.walterbauer.net/2007_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2007_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p4.html",
        "pageUrl": "http://www.walterbauer.net/2007_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2007_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p5.html",
        "pageUrl": "http://www.walterbauer.net/2007_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2007_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p6.html",
        "pageUrl": "http://www.walterbauer.net/2007_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2007_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p7.html",
        "pageUrl": "http://www.walterbauer.net/2007_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2007_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p8.html",
        "pageUrl": "http://www.walterbauer.net/2007_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2007_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2007_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2007_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2007_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2007_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2007_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2007_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2007_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2007_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2007_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2007_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2007_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2007_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2007_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2007_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2007_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2007_w4b.html"
      }
    ]
  },
  {
    "year": 2006,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 4 Aufgaben (2 aus 4 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "amber",
    "uebersichtUrl": "http://www.walterbauer.net/2006_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2006.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2006_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2006_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2006_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p1.html",
        "pageUrl": "http://www.walterbauer.net/2006_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2006_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p2.html",
        "pageUrl": "http://www.walterbauer.net/2006_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2006_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p3.html",
        "pageUrl": "http://www.walterbauer.net/2006_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2006_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p4.html",
        "pageUrl": "http://www.walterbauer.net/2006_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2006_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p5.html",
        "pageUrl": "http://www.walterbauer.net/2006_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2006_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p6.html",
        "pageUrl": "http://www.walterbauer.net/2006_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2006_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p7.html",
        "pageUrl": "http://www.walterbauer.net/2006_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2006_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p8.html",
        "pageUrl": "http://www.walterbauer.net/2006_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2006_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2006_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2006_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2006_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2006_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2006_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2006_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2006_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2006_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2006_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2006_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2006_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2006_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2006_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2006_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2006_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2006_w4b.html"
      }
    ]
  },
  {
    "year": 2005,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 4 Aufgaben (2 aus 4 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "amber",
    "uebersichtUrl": "http://www.walterbauer.net/2005_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2005.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2005_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2005_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2005_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p1.html",
        "pageUrl": "http://www.walterbauer.net/2005_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2005_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p2.html",
        "pageUrl": "http://www.walterbauer.net/2005_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2005_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p3.html",
        "pageUrl": "http://www.walterbauer.net/2005_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2005_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p4.html",
        "pageUrl": "http://www.walterbauer.net/2005_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2005_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p5.html",
        "pageUrl": "http://www.walterbauer.net/2005_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2005_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p6.html",
        "pageUrl": "http://www.walterbauer.net/2005_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2005_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p7.html",
        "pageUrl": "http://www.walterbauer.net/2005_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2005_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p8.html",
        "pageUrl": "http://www.walterbauer.net/2005_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2005_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2005_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2005_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2005_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2005_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2005_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2005_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2005_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2005_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2005_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2005_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2005_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2005_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2005_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2005_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2005_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2005_w4b.html"
      }
    ]
  },
  {
    "year": 2004,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 4 Aufgaben (2 aus 4 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "amber",
    "uebersichtUrl": "http://www.walterbauer.net/2004_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2004.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2004_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2004_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2004_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p1.html",
        "pageUrl": "http://www.walterbauer.net/2004_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2004_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p2.html",
        "pageUrl": "http://www.walterbauer.net/2004_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2004_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p3.html",
        "pageUrl": "http://www.walterbauer.net/2004_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2004_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p4.html",
        "pageUrl": "http://www.walterbauer.net/2004_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2004_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p5.html",
        "pageUrl": "http://www.walterbauer.net/2004_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2004_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p6.html",
        "pageUrl": "http://www.walterbauer.net/2004_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2004_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p7.html",
        "pageUrl": "http://www.walterbauer.net/2004_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2004_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p8.html",
        "pageUrl": "http://www.walterbauer.net/2004_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2004_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2004_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2004_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2004_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2004_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2004_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2004_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2004_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2004_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2004_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2004_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2004_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2004_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2004_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2004_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2004_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2004_w4b.html"
      }
    ]
  },
  {
    "year": 2003,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 4 Aufgaben (2 aus 4 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "amber",
    "uebersichtUrl": "http://www.walterbauer.net/2003_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2003.html",
    "taskCount": 17,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2003_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2003_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2003_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p1.html",
        "pageUrl": "http://www.walterbauer.net/2003_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2003_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p2.html",
        "pageUrl": "http://www.walterbauer.net/2003_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2003_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p3.html",
        "pageUrl": "http://www.walterbauer.net/2003_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2003_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p4.html",
        "pageUrl": "http://www.walterbauer.net/2003_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2003_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p5.html",
        "pageUrl": "http://www.walterbauer.net/2003_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2003_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p6.html",
        "pageUrl": "http://www.walterbauer.net/2003_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2003_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p7.html",
        "pageUrl": "http://www.walterbauer.net/2003_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2003_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p8.html",
        "pageUrl": "http://www.walterbauer.net/2003_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2003_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2003_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2003_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2003_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2003_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2003_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2003_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2003_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2003_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2003_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2003_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2003_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2003_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2003_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2003_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2003_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2003_w4b.html"
      }
    ]
  },
  {
    "year": 2002,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 4 Aufgaben (2 aus 4 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "amber",
    "uebersichtUrl": "http://www.walterbauer.net/2002_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2002.html",
    "taskCount": 18,
    "tasks": [
      {
        "label": "Lernmaterial",
        "type": "general",
        "href": "lernmateriel.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_lernmateriel.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_lernmateriel.html",
        "pageUrl": "http://www.walterbauer.net/lernmateriel.html"
      },
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2002_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2002_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2002_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p1.html",
        "pageUrl": "http://www.walterbauer.net/2002_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2002_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p2.html",
        "pageUrl": "http://www.walterbauer.net/2002_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2002_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p3.html",
        "pageUrl": "http://www.walterbauer.net/2002_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2002_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p4.html",
        "pageUrl": "http://www.walterbauer.net/2002_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2002_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p5.html",
        "pageUrl": "http://www.walterbauer.net/2002_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2002_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p6.html",
        "pageUrl": "http://www.walterbauer.net/2002_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2002_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p7.html",
        "pageUrl": "http://www.walterbauer.net/2002_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2002_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p8.html",
        "pageUrl": "http://www.walterbauer.net/2002_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2002_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2002_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2002_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2002_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2002_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2002_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2002_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2002_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2002_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2002_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2002_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2002_w3b.html"
      },
      {
        "label": "W4a",
        "type": "wahl-w",
        "href": "2002_w4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w4a.html",
        "pageUrl": "http://www.walterbauer.net/2002_w4a.html"
      },
      {
        "label": "W4b",
        "type": "wahl-w",
        "href": "2002_w4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2002_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w4b.html",
        "pageUrl": "http://www.walterbauer.net/2002_w4b.html"
      }
    ]
  },
  {
    "year": 2001,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 3 Aufgaben (2 aus 3 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "orange",
    "uebersichtUrl": "http://www.walterbauer.net/2001_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2001.html",
    "taskCount": 15,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2001_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2001_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2001_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p1.html",
        "pageUrl": "http://www.walterbauer.net/2001_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2001_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p2.html",
        "pageUrl": "http://www.walterbauer.net/2001_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2001_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p3.html",
        "pageUrl": "http://www.walterbauer.net/2001_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2001_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p4.html",
        "pageUrl": "http://www.walterbauer.net/2001_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2001_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p5.html",
        "pageUrl": "http://www.walterbauer.net/2001_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2001_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p6.html",
        "pageUrl": "http://www.walterbauer.net/2001_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2001_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p7.html",
        "pageUrl": "http://www.walterbauer.net/2001_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2001_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p8.html",
        "pageUrl": "http://www.walterbauer.net/2001_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2001_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2001_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2001_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2001_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2001_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2001_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2001_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2001_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2001_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2001_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2001_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2001_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2001_w3b.html"
      }
    ]
  },
  {
    "year": 2000,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 3 Aufgaben (2 aus 3 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "orange",
    "uebersichtUrl": "http://www.walterbauer.net/2000_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/2000.html",
    "taskCount": 15,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "2000_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/2000_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "2000_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p1.html",
        "pageUrl": "http://www.walterbauer.net/2000_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "2000_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p2.html",
        "pageUrl": "http://www.walterbauer.net/2000_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "2000_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p3.html",
        "pageUrl": "http://www.walterbauer.net/2000_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "2000_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p4.html",
        "pageUrl": "http://www.walterbauer.net/2000_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "2000_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p5.html",
        "pageUrl": "http://www.walterbauer.net/2000_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "2000_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p6.html",
        "pageUrl": "http://www.walterbauer.net/2000_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "2000_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p7.html",
        "pageUrl": "http://www.walterbauer.net/2000_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "2000_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p8.html",
        "pageUrl": "http://www.walterbauer.net/2000_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "2000_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w1a.html",
        "pageUrl": "http://www.walterbauer.net/2000_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "2000_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w1b.html",
        "pageUrl": "http://www.walterbauer.net/2000_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "2000_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w2a.html",
        "pageUrl": "http://www.walterbauer.net/2000_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "2000_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w2b.html",
        "pageUrl": "http://www.walterbauer.net/2000_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "2000_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w3a.html",
        "pageUrl": "http://www.walterbauer.net/2000_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "2000_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_2000_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w3b.html",
        "pageUrl": "http://www.walterbauer.net/2000_w3b.html"
      }
    ]
  },
  {
    "year": 1999,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 3 Aufgaben (2 aus 3 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "orange",
    "uebersichtUrl": "http://www.walterbauer.net/1999_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1999.html",
    "taskCount": 15,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1999_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1999_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "1999_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p1.html",
        "pageUrl": "http://www.walterbauer.net/1999_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "1999_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p2.html",
        "pageUrl": "http://www.walterbauer.net/1999_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "1999_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p3.html",
        "pageUrl": "http://www.walterbauer.net/1999_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "1999_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p4.html",
        "pageUrl": "http://www.walterbauer.net/1999_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "1999_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p5.html",
        "pageUrl": "http://www.walterbauer.net/1999_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "1999_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p6.html",
        "pageUrl": "http://www.walterbauer.net/1999_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "1999_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p7.html",
        "pageUrl": "http://www.walterbauer.net/1999_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "1999_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p8.html",
        "pageUrl": "http://www.walterbauer.net/1999_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "1999_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w1a.html",
        "pageUrl": "http://www.walterbauer.net/1999_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "1999_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w1b.html",
        "pageUrl": "http://www.walterbauer.net/1999_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "1999_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w2a.html",
        "pageUrl": "http://www.walterbauer.net/1999_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "1999_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w2b.html",
        "pageUrl": "http://www.walterbauer.net/1999_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "1999_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w3a.html",
        "pageUrl": "http://www.walterbauer.net/1999_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "1999_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1999_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w3b.html",
        "pageUrl": "http://www.walterbauer.net/1999_w3b.html"
      }
    ]
  },
  {
    "year": 1998,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 3 Aufgaben (2 aus 3 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "orange",
    "uebersichtUrl": "http://www.walterbauer.net/1998_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1998.html",
    "taskCount": 15,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1998_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1998_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "1998_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p1.html",
        "pageUrl": "http://www.walterbauer.net/1998_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "1998_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p2.html",
        "pageUrl": "http://www.walterbauer.net/1998_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "1998_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p3.html",
        "pageUrl": "http://www.walterbauer.net/1998_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "1998_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p4.html",
        "pageUrl": "http://www.walterbauer.net/1998_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "1998_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p5.html",
        "pageUrl": "http://www.walterbauer.net/1998_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "1998_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p6.html",
        "pageUrl": "http://www.walterbauer.net/1998_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "1998_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p7.html",
        "pageUrl": "http://www.walterbauer.net/1998_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "1998_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p8.html",
        "pageUrl": "http://www.walterbauer.net/1998_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "1998_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w1a.html",
        "pageUrl": "http://www.walterbauer.net/1998_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "1998_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w1b.html",
        "pageUrl": "http://www.walterbauer.net/1998_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "1998_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w2a.html",
        "pageUrl": "http://www.walterbauer.net/1998_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "1998_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w2b.html",
        "pageUrl": "http://www.walterbauer.net/1998_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "1998_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w3a.html",
        "pageUrl": "http://www.walterbauer.net/1998_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "1998_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1998_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w3b.html",
        "pageUrl": "http://www.walterbauer.net/1998_w3b.html"
      }
    ]
  },
  {
    "year": 1997,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 3 Aufgaben (2 aus 3 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "orange",
    "uebersichtUrl": "http://www.walterbauer.net/1997_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1997.html",
    "taskCount": 15,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1997_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1997_uebersicht.html"
      },
      {
        "label": "P1",
        "type": "pflicht-p",
        "href": "1997_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p1.html",
        "pageUrl": "http://www.walterbauer.net/1997_p1.html"
      },
      {
        "label": "P2",
        "type": "pflicht-p",
        "href": "1997_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p2.html",
        "pageUrl": "http://www.walterbauer.net/1997_p2.html"
      },
      {
        "label": "P3",
        "type": "pflicht-p",
        "href": "1997_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p3.html",
        "pageUrl": "http://www.walterbauer.net/1997_p3.html"
      },
      {
        "label": "P4",
        "type": "pflicht-p",
        "href": "1997_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p4.html",
        "pageUrl": "http://www.walterbauer.net/1997_p4.html"
      },
      {
        "label": "P5",
        "type": "pflicht-p",
        "href": "1997_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p5.html",
        "pageUrl": "http://www.walterbauer.net/1997_p5.html"
      },
      {
        "label": "P6",
        "type": "pflicht-p",
        "href": "1997_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p6.html",
        "pageUrl": "http://www.walterbauer.net/1997_p6.html"
      },
      {
        "label": "P7",
        "type": "pflicht-p",
        "href": "1997_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p7.html",
        "pageUrl": "http://www.walterbauer.net/1997_p7.html"
      },
      {
        "label": "P8",
        "type": "pflicht-p",
        "href": "1997_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p8.html",
        "pageUrl": "http://www.walterbauer.net/1997_p8.html"
      },
      {
        "label": "W1a",
        "type": "wahl-w",
        "href": "1997_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w1a.html",
        "pageUrl": "http://www.walterbauer.net/1997_w1a.html"
      },
      {
        "label": "W1b",
        "type": "wahl-w",
        "href": "1997_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w1b.html",
        "pageUrl": "http://www.walterbauer.net/1997_w1b.html"
      },
      {
        "label": "W2a",
        "type": "wahl-w",
        "href": "1997_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w2a.html",
        "pageUrl": "http://www.walterbauer.net/1997_w2a.html"
      },
      {
        "label": "W2b",
        "type": "wahl-w",
        "href": "1997_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w2b.html",
        "pageUrl": "http://www.walterbauer.net/1997_w2b.html"
      },
      {
        "label": "W3a",
        "type": "wahl-w",
        "href": "1997_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w3a.html",
        "pageUrl": "http://www.walterbauer.net/1997_w3a.html"
      },
      {
        "label": "W3b",
        "type": "wahl-w",
        "href": "1997_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1997_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w3b.html",
        "pageUrl": "http://www.walterbauer.net/1997_w3b.html"
      }
    ]
  },
  {
    "year": 1996,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "structure": "Pflichtbereich (17 Pkt) + Wahlbereich mit 3 Aufgaben (2 aus 3 gewählt, 16 Pkt)",
    "calcAllowed": "Ja (Taschenrechner & Formelsammlung)",
    "badgeColor": "orange",
    "uebersichtUrl": "http://www.walterbauer.net/1996_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1996.html",
    "taskCount": 15,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1996_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1996_uebersicht.html"
      },
      {
        "label": "p1",
        "type": "pflicht-p",
        "href": "1996_p1.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p1.html",
        "pageUrl": "http://www.walterbauer.net/1996_p1.html"
      },
      {
        "label": "p2",
        "type": "pflicht-p",
        "href": "1996_p2.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p2.html",
        "pageUrl": "http://www.walterbauer.net/1996_p2.html"
      },
      {
        "label": "p3",
        "type": "pflicht-p",
        "href": "1996_p3.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p3.html",
        "pageUrl": "http://www.walterbauer.net/1996_p3.html"
      },
      {
        "label": "p4",
        "type": "pflicht-p",
        "href": "1996_p4.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p4.html",
        "pageUrl": "http://www.walterbauer.net/1996_p4.html"
      },
      {
        "label": "p5",
        "type": "pflicht-p",
        "href": "1996_p5.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p5.html",
        "pageUrl": "http://www.walterbauer.net/1996_p5.html"
      },
      {
        "label": "p6",
        "type": "pflicht-p",
        "href": "1996_p6.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p6.html",
        "pageUrl": "http://www.walterbauer.net/1996_p6.html"
      },
      {
        "label": "p7",
        "type": "pflicht-p",
        "href": "1996_p7.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p7.html",
        "pageUrl": "http://www.walterbauer.net/1996_p7.html"
      },
      {
        "label": "p8",
        "type": "pflicht-p",
        "href": "1996_p8.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p8.html",
        "pageUrl": "http://www.walterbauer.net/1996_p8.html"
      },
      {
        "label": "w1a",
        "type": "wahl-w",
        "href": "1996_w1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w1a.html",
        "pageUrl": "http://www.walterbauer.net/1996_w1a.html"
      },
      {
        "label": "w1b",
        "type": "wahl-w",
        "href": "1996_w1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w1b.html",
        "pageUrl": "http://www.walterbauer.net/1996_w1b.html"
      },
      {
        "label": "w2a",
        "type": "wahl-w",
        "href": "1996_w2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w2a.html",
        "pageUrl": "http://www.walterbauer.net/1996_w2a.html"
      },
      {
        "label": "w2b",
        "type": "wahl-w",
        "href": "1996_w2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w2b.html",
        "pageUrl": "http://www.walterbauer.net/1996_w2b.html"
      },
      {
        "label": "w3a",
        "type": "wahl-w",
        "href": "1996_w3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w3a.html",
        "pageUrl": "http://www.walterbauer.net/1996_w3a.html"
      },
      {
        "label": "w3b",
        "type": "wahl-w",
        "href": "1996_w3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1996_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w3b.html",
        "pageUrl": "http://www.walterbauer.net/1996_w3b.html"
      }
    ]
  },
  {
    "year": 1995,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "structure": "6 Hauptaufgaben mit jeweils Teilaufgaben (a, b, c)",
    "calcAllowed": "Ja (Taschenrechner)",
    "badgeColor": "slate",
    "uebersichtUrl": "http://www.walterbauer.net/1995_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1995.html",
    "taskCount": 19,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1995_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1995_uebersicht.html"
      },
      {
        "label": "1a",
        "type": "general",
        "href": "1995_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1a.html",
        "pageUrl": "http://www.walterbauer.net/1995_1a.html"
      },
      {
        "label": "1b",
        "type": "general",
        "href": "1995_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1b.html",
        "pageUrl": "http://www.walterbauer.net/1995_1b.html"
      },
      {
        "label": "1c",
        "type": "general",
        "href": "1995_1c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1c.html",
        "pageUrl": "http://www.walterbauer.net/1995_1c.html"
      },
      {
        "label": "2a",
        "type": "general",
        "href": "1995_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2a.html",
        "pageUrl": "http://www.walterbauer.net/1995_2a.html"
      },
      {
        "label": "2b",
        "type": "general",
        "href": "1995_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2b.html",
        "pageUrl": "http://www.walterbauer.net/1995_2b.html"
      },
      {
        "label": "2c",
        "type": "general",
        "href": "1995_2c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2c.html",
        "pageUrl": "http://www.walterbauer.net/1995_2c.html"
      },
      {
        "label": "3a",
        "type": "general",
        "href": "1995_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3a.html",
        "pageUrl": "http://www.walterbauer.net/1995_3a.html"
      },
      {
        "label": "3b",
        "type": "general",
        "href": "1995_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3b.html",
        "pageUrl": "http://www.walterbauer.net/1995_3b.html"
      },
      {
        "label": "3c",
        "type": "general",
        "href": "1995_3c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3c.html",
        "pageUrl": "http://www.walterbauer.net/1995_3c.html"
      },
      {
        "label": "4a",
        "type": "general",
        "href": "1995_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4a.html",
        "pageUrl": "http://www.walterbauer.net/1995_4a.html"
      },
      {
        "label": "4b",
        "type": "general",
        "href": "1995_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4b.html",
        "pageUrl": "http://www.walterbauer.net/1995_4b.html"
      },
      {
        "label": "4c",
        "type": "general",
        "href": "1995_4c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4c.html",
        "pageUrl": "http://www.walterbauer.net/1995_4c.html"
      },
      {
        "label": "5a",
        "type": "general",
        "href": "1995_5a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_5a.html",
        "pageUrl": "http://www.walterbauer.net/1995_5a.html"
      },
      {
        "label": "5b",
        "type": "general",
        "href": "1995_5b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_5b.html",
        "pageUrl": "http://www.walterbauer.net/1995_5b.html"
      },
      {
        "label": "5c",
        "type": "general",
        "href": "1995_5c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_5c.html",
        "pageUrl": "http://www.walterbauer.net/1995_5c.html"
      },
      {
        "label": "6a",
        "type": "general",
        "href": "1995_6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_6a.html",
        "pageUrl": "http://www.walterbauer.net/1995_6a.html"
      },
      {
        "label": "6b",
        "type": "general",
        "href": "1995_6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_6b.html",
        "pageUrl": "http://www.walterbauer.net/1995_6b.html"
      },
      {
        "label": "6c",
        "type": "general",
        "href": "1995_6c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1995_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_6c.html",
        "pageUrl": "http://www.walterbauer.net/1995_6c.html"
      }
    ]
  },
  {
    "year": 1994,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "structure": "6 Hauptaufgaben mit jeweils Teilaufgaben (a, b, c)",
    "calcAllowed": "Ja (Taschenrechner)",
    "badgeColor": "slate",
    "uebersichtUrl": "http://www.walterbauer.net/1994.html",
    "sourceYearUrl": "http://www.walterbauer.net/1994.html",
    "taskCount": 19,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1990_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1990_uebersicht.html"
      },
      {
        "label": "1a",
        "type": "general",
        "href": "1994_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1a.html",
        "pageUrl": "http://www.walterbauer.net/1994_1a.html"
      },
      {
        "label": "1b",
        "type": "general",
        "href": "1994_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1b.html",
        "pageUrl": "http://www.walterbauer.net/1994_1b.html"
      },
      {
        "label": "1c",
        "type": "general",
        "href": "1994_1c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1c.html",
        "pageUrl": "http://www.walterbauer.net/1994_1c.html"
      },
      {
        "label": "2a",
        "type": "general",
        "href": "1994_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2a.html",
        "pageUrl": "http://www.walterbauer.net/1994_2a.html"
      },
      {
        "label": "2b",
        "type": "general",
        "href": "1994_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2b.html",
        "pageUrl": "http://www.walterbauer.net/1994_2b.html"
      },
      {
        "label": "2c",
        "type": "general",
        "href": "1994_2c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2c.html",
        "pageUrl": "http://www.walterbauer.net/1994_2c.html"
      },
      {
        "label": "3a",
        "type": "general",
        "href": "1994_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3a.html",
        "pageUrl": "http://www.walterbauer.net/1994_3a.html"
      },
      {
        "label": "3b",
        "type": "general",
        "href": "1994_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3b.html",
        "pageUrl": "http://www.walterbauer.net/1994_3b.html"
      },
      {
        "label": "3c",
        "type": "general",
        "href": "1994_3c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3c.html",
        "pageUrl": "http://www.walterbauer.net/1994_3c.html"
      },
      {
        "label": "4a",
        "type": "general",
        "href": "1994_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4a.html",
        "pageUrl": "http://www.walterbauer.net/1994_4a.html"
      },
      {
        "label": "4b",
        "type": "general",
        "href": "1994_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4b.html",
        "pageUrl": "http://www.walterbauer.net/1994_4b.html"
      },
      {
        "label": "4c",
        "type": "general",
        "href": "1994_4c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4c.html",
        "pageUrl": "http://www.walterbauer.net/1994_4c.html"
      },
      {
        "label": "5a",
        "type": "general",
        "href": "1994_5a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_5a.html",
        "pageUrl": "http://www.walterbauer.net/1994_5a.html"
      },
      {
        "label": "5b",
        "type": "general",
        "href": "1994_5b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_5b.html",
        "pageUrl": "http://www.walterbauer.net/1994_5b.html"
      },
      {
        "label": "5c",
        "type": "general",
        "href": "1994_5c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_5c.html",
        "pageUrl": "http://www.walterbauer.net/1994_5c.html"
      },
      {
        "label": "6a",
        "type": "general",
        "href": "1994_6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_6a.html",
        "pageUrl": "http://www.walterbauer.net/1994_6a.html"
      },
      {
        "label": "6b",
        "type": "general",
        "href": "1994_6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_6b.html",
        "pageUrl": "http://www.walterbauer.net/1994_6b.html"
      },
      {
        "label": "6c",
        "type": "general",
        "href": "1994_6c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1994_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_6c.html",
        "pageUrl": "http://www.walterbauer.net/1994_6c.html"
      }
    ]
  },
  {
    "year": 1993,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "structure": "6 Hauptaufgaben mit jeweils Teilaufgaben (a, b, c)",
    "calcAllowed": "Ja (Taschenrechner)",
    "badgeColor": "slate",
    "uebersichtUrl": "http://www.walterbauer.net/1993_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1993.html",
    "taskCount": 19,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1993_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1993_uebersicht.html"
      },
      {
        "label": "1a",
        "type": "general",
        "href": "1993_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1a.html",
        "pageUrl": "http://www.walterbauer.net/1993_1a.html"
      },
      {
        "label": "1b",
        "type": "general",
        "href": "1993_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1b.html",
        "pageUrl": "http://www.walterbauer.net/1993_1b.html"
      },
      {
        "label": "1c",
        "type": "general",
        "href": "1993_1c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1c.html",
        "pageUrl": "http://www.walterbauer.net/1993_1c.html"
      },
      {
        "label": "2a",
        "type": "general",
        "href": "1993_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2a.html",
        "pageUrl": "http://www.walterbauer.net/1993_2a.html"
      },
      {
        "label": "2b",
        "type": "general",
        "href": "1993_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2b.html",
        "pageUrl": "http://www.walterbauer.net/1993_2b.html"
      },
      {
        "label": "2c",
        "type": "general",
        "href": "1993_2c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2c.html",
        "pageUrl": "http://www.walterbauer.net/1993_2c.html"
      },
      {
        "label": "3a",
        "type": "general",
        "href": "1993_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3a.html",
        "pageUrl": "http://www.walterbauer.net/1993_3a.html"
      },
      {
        "label": "3b",
        "type": "general",
        "href": "1993_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3b.html",
        "pageUrl": "http://www.walterbauer.net/1993_3b.html"
      },
      {
        "label": "3c",
        "type": "general",
        "href": "1993_3c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3c.html",
        "pageUrl": "http://www.walterbauer.net/1993_3c.html"
      },
      {
        "label": "4a",
        "type": "general",
        "href": "1993_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4a.html",
        "pageUrl": "http://www.walterbauer.net/1993_4a.html"
      },
      {
        "label": "4b",
        "type": "general",
        "href": "1993_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4b.html",
        "pageUrl": "http://www.walterbauer.net/1993_4b.html"
      },
      {
        "label": "4c",
        "type": "general",
        "href": "1993_4c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4c.html",
        "pageUrl": "http://www.walterbauer.net/1993_4c.html"
      },
      {
        "label": "5a",
        "type": "general",
        "href": "1993_5a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_5a.html",
        "pageUrl": "http://www.walterbauer.net/1993_5a.html"
      },
      {
        "label": "5b",
        "type": "general",
        "href": "1993_5b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_5b.html",
        "pageUrl": "http://www.walterbauer.net/1993_5b.html"
      },
      {
        "label": "5c",
        "type": "general",
        "href": "1993_5c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_5c.html",
        "pageUrl": "http://www.walterbauer.net/1993_5c.html"
      },
      {
        "label": "6a",
        "type": "general",
        "href": "1993_6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_6a.html",
        "pageUrl": "http://www.walterbauer.net/1993_6a.html"
      },
      {
        "label": "6b",
        "type": "general",
        "href": "1993_6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_6b.html",
        "pageUrl": "http://www.walterbauer.net/1993_6b.html"
      },
      {
        "label": "6c",
        "type": "general",
        "href": "1993_6c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1993_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_6c.html",
        "pageUrl": "http://www.walterbauer.net/1993_6c.html"
      }
    ]
  },
  {
    "year": 1992,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "structure": "6 Hauptaufgaben mit jeweils Teilaufgaben (a, b, c)",
    "calcAllowed": "Ja (Taschenrechner)",
    "badgeColor": "slate",
    "uebersichtUrl": "http://www.walterbauer.net/1992_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1992.html",
    "taskCount": 19,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1992_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1992_uebersicht.html"
      },
      {
        "label": "1a",
        "type": "general",
        "href": "1992_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1a.html",
        "pageUrl": "http://www.walterbauer.net/1992_1a.html"
      },
      {
        "label": "1b",
        "type": "general",
        "href": "1992_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1b.html",
        "pageUrl": "http://www.walterbauer.net/1992_1b.html"
      },
      {
        "label": "1c",
        "type": "general",
        "href": "1992_1c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1c.html",
        "pageUrl": "http://www.walterbauer.net/1992_1c.html"
      },
      {
        "label": "2a",
        "type": "general",
        "href": "1992_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2a.html",
        "pageUrl": "http://www.walterbauer.net/1992_2a.html"
      },
      {
        "label": "2b",
        "type": "general",
        "href": "1992_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2b.html",
        "pageUrl": "http://www.walterbauer.net/1992_2b.html"
      },
      {
        "label": "2c",
        "type": "general",
        "href": "1992_2c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2c.html",
        "pageUrl": "http://www.walterbauer.net/1992_2c.html"
      },
      {
        "label": "3a",
        "type": "general",
        "href": "1992_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3a.html",
        "pageUrl": "http://www.walterbauer.net/1992_3a.html"
      },
      {
        "label": "3b",
        "type": "general",
        "href": "1992_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3b.html",
        "pageUrl": "http://www.walterbauer.net/1992_3b.html"
      },
      {
        "label": "3c",
        "type": "general",
        "href": "1992_3c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3c.html",
        "pageUrl": "http://www.walterbauer.net/1992_3c.html"
      },
      {
        "label": "4a",
        "type": "general",
        "href": "1992_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_4a.html",
        "pageUrl": "http://www.walterbauer.net/1992_4a.html"
      },
      {
        "label": "4b",
        "type": "general",
        "href": "1992_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_4b.html",
        "pageUrl": "http://www.walterbauer.net/1992_4b.html"
      },
      {
        "label": "4c",
        "type": "general",
        "href": "1992_4c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_4c.html",
        "pageUrl": "http://www.walterbauer.net/1992_4c.html"
      },
      {
        "label": "5a",
        "type": "general",
        "href": "1992_5a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_5a.html",
        "pageUrl": "http://www.walterbauer.net/1992_5a.html"
      },
      {
        "label": "5b",
        "type": "general",
        "href": "1992_5b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_5b.html",
        "pageUrl": "http://www.walterbauer.net/1992_5b.html"
      },
      {
        "label": "5c",
        "type": "general",
        "href": "1992_5c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_5c.html",
        "pageUrl": "http://www.walterbauer.net/1992_5c.html"
      },
      {
        "label": "6a",
        "type": "general",
        "href": "1992_6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6a.html",
        "pageUrl": "http://www.walterbauer.net/1992_6a.html"
      },
      {
        "label": "6b",
        "type": "general",
        "href": "1992_6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6b.html",
        "pageUrl": "http://www.walterbauer.net/1992_6b.html"
      },
      {
        "label": "6c",
        "type": "general",
        "href": "1992_6c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1992_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6c.html",
        "pageUrl": "http://www.walterbauer.net/1992_6c.html"
      }
    ]
  },
  {
    "year": 1991,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "structure": "6 Hauptaufgaben mit jeweils Teilaufgaben (a, b, c)",
    "calcAllowed": "Ja (Taschenrechner)",
    "badgeColor": "slate",
    "uebersichtUrl": "http://www.walterbauer.net/1991_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1991.html",
    "taskCount": 19,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1991_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1991_uebersicht.html"
      },
      {
        "label": "1a",
        "type": "general",
        "href": "1991_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1a.html",
        "pageUrl": "http://www.walterbauer.net/1991_1a.html"
      },
      {
        "label": "1b",
        "type": "general",
        "href": "1991_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1b.html",
        "pageUrl": "http://www.walterbauer.net/1991_1b.html"
      },
      {
        "label": "1c",
        "type": "general",
        "href": "1991_1c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1c.html",
        "pageUrl": "http://www.walterbauer.net/1991_1c.html"
      },
      {
        "label": "2a",
        "type": "general",
        "href": "1991_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_2a.html",
        "pageUrl": "http://www.walterbauer.net/1991_2a.html"
      },
      {
        "label": "2b",
        "type": "general",
        "href": "1991_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_2b.html",
        "pageUrl": "http://www.walterbauer.net/1991_2b.html"
      },
      {
        "label": "2c",
        "type": "general",
        "href": "1991_2c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_2c.html",
        "pageUrl": "http://www.walterbauer.net/1991_2c.html"
      },
      {
        "label": "3a",
        "type": "general",
        "href": "1991_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3a.html",
        "pageUrl": "http://www.walterbauer.net/1991_3a.html"
      },
      {
        "label": "3b",
        "type": "general",
        "href": "1991_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3b.html",
        "pageUrl": "http://www.walterbauer.net/1991_3b.html"
      },
      {
        "label": "3c",
        "type": "general",
        "href": "1991_3c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3c.html",
        "pageUrl": "http://www.walterbauer.net/1991_3c.html"
      },
      {
        "label": "4a",
        "type": "general",
        "href": "1991_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4a.html",
        "pageUrl": "http://www.walterbauer.net/1991_4a.html"
      },
      {
        "label": "4b",
        "type": "general",
        "href": "1991_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4b.html",
        "pageUrl": "http://www.walterbauer.net/1991_4b.html"
      },
      {
        "label": "4c",
        "type": "general",
        "href": "1991_4c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4c.html",
        "pageUrl": "http://www.walterbauer.net/1991_4c.html"
      },
      {
        "label": "5a",
        "type": "general",
        "href": "1991_5a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_5a.html",
        "pageUrl": "http://www.walterbauer.net/1991_5a.html"
      },
      {
        "label": "5b",
        "type": "general",
        "href": "1991_5b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_5b.html",
        "pageUrl": "http://www.walterbauer.net/1991_5b.html"
      },
      {
        "label": "5c",
        "type": "general",
        "href": "1991_5c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_5c.html",
        "pageUrl": "http://www.walterbauer.net/1991_5c.html"
      },
      {
        "label": "6a",
        "type": "general",
        "href": "1991_6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_6a.html",
        "pageUrl": "http://www.walterbauer.net/1991_6a.html"
      },
      {
        "label": "6b",
        "type": "general",
        "href": "1991_6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_6b.html",
        "pageUrl": "http://www.walterbauer.net/1991_6b.html"
      },
      {
        "label": "6c",
        "type": "general",
        "href": "1991_6c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1991_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_6c.html",
        "pageUrl": "http://www.walterbauer.net/1991_6c.html"
      }
    ]
  },
  {
    "year": 1990,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "structure": "6 Hauptaufgaben mit jeweils Teilaufgaben (a, b, c)",
    "calcAllowed": "Ja (Taschenrechner)",
    "badgeColor": "slate",
    "uebersichtUrl": "http://www.walterbauer.net/1990_uebersicht.html",
    "sourceYearUrl": "http://www.walterbauer.net/1990.html",
    "taskCount": 19,
    "tasks": [
      {
        "label": "Übersicht",
        "type": "general",
        "href": "1990_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_uebersicht.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_uebersicht.html",
        "pageUrl": "http://www.walterbauer.net/1990_uebersicht.html"
      },
      {
        "label": "1a",
        "type": "general",
        "href": "1990_1a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_1a.html",
        "pageUrl": "http://www.walterbauer.net/1990_1a.html"
      },
      {
        "label": "1b",
        "type": "general",
        "href": "1990_1b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_1b.html",
        "pageUrl": "http://www.walterbauer.net/1990_1b.html"
      },
      {
        "label": "1c",
        "type": "general",
        "href": "1990_1c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_1c.html",
        "pageUrl": "http://www.walterbauer.net/1990_1c.html"
      },
      {
        "label": "2a",
        "type": "general",
        "href": "1990_2a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2a.html",
        "pageUrl": "http://www.walterbauer.net/1990_2a.html"
      },
      {
        "label": "2b",
        "type": "general",
        "href": "1990_2b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2b.html",
        "pageUrl": "http://www.walterbauer.net/1990_2b.html"
      },
      {
        "label": "2c",
        "type": "general",
        "href": "1990_2c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2c.html",
        "pageUrl": "http://www.walterbauer.net/1990_2c.html"
      },
      {
        "label": "3a",
        "type": "general",
        "href": "1990_3a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3a.html",
        "pageUrl": "http://www.walterbauer.net/1990_3a.html"
      },
      {
        "label": "3b",
        "type": "general",
        "href": "1990_3b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3b.html",
        "pageUrl": "http://www.walterbauer.net/1990_3b.html"
      },
      {
        "label": "3c",
        "type": "general",
        "href": "1990_3c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3c.html",
        "pageUrl": "http://www.walterbauer.net/1990_3c.html"
      },
      {
        "label": "4a",
        "type": "general",
        "href": "1990_4a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4a.html",
        "pageUrl": "http://www.walterbauer.net/1990_4a.html"
      },
      {
        "label": "4b",
        "type": "general",
        "href": "1990_4b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4b.html",
        "pageUrl": "http://www.walterbauer.net/1990_4b.html"
      },
      {
        "label": "4c",
        "type": "general",
        "href": "1990_4c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4c.html",
        "pageUrl": "http://www.walterbauer.net/1990_4c.html"
      },
      {
        "label": "5a",
        "type": "general",
        "href": "1990_5a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_5a.html",
        "pageUrl": "http://www.walterbauer.net/1990_5a.html"
      },
      {
        "label": "5b",
        "type": "general",
        "href": "1990_5b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_5b.html",
        "pageUrl": "http://www.walterbauer.net/1990_5b.html"
      },
      {
        "label": "5c",
        "type": "general",
        "href": "1990_5c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_5c.html",
        "pageUrl": "http://www.walterbauer.net/1990_5c.html"
      },
      {
        "label": "6a",
        "type": "general",
        "href": "1990_6a.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6a.html",
        "pageUrl": "http://www.walterbauer.net/1990_6a.html"
      },
      {
        "label": "6b",
        "type": "general",
        "href": "1990_6b.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6b.html",
        "pageUrl": "http://www.walterbauer.net/1990_6b.html"
      },
      {
        "label": "6c",
        "type": "general",
        "href": "1990_6c.html",
        "taskUrl": "http://www.walterbauer.net/aufgabe_1990_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6c.html",
        "pageUrl": "http://www.walterbauer.net/1990_6c.html"
      }
    ]
  }
];

const TOPICS_DATA = [
  {
    "id": "topic-1",
    "title": "Bruchgleichungen, Quadratische Gleichungen",
    "category": "Algebra & Gleichungen",
    "description": "Lösung quadratischer Gleichungen, Bruchgleichungen mit Definitionsmengen",
    "taskCount": 34,
    "tasks": [
      {
        "year": 2024,
        "label": "A2/5",
        "url": "http://www.walterbauer.net/aufgabe_2024_a2_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p5.html"
      },
      {
        "year": 2022,
        "label": "A1/5",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p5.html"
      },
      {
        "year": 2022,
        "label": "A2/3",
        "url": "http://www.walterbauer.net/aufgabe_2022_a2_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p3.html"
      },
      {
        "year": 2021,
        "label": "A1/2",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p2.html"
      },
      {
        "year": 2021,
        "label": "A1/5",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p5.html"
      },
      {
        "year": 2020,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2020_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p4.html"
      },
      {
        "year": 2018,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2018_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p5.html"
      },
      {
        "year": 2017,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2017_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p6.html"
      },
      {
        "year": 2016,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2016_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p5.html"
      },
      {
        "year": 2014,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2014_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p5.html"
      },
      {
        "year": 2013,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2013_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p4.html"
      },
      {
        "year": 2011,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2011_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p4.html"
      },
      {
        "year": 2009,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2009_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p5.html"
      },
      {
        "year": 2008,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2008_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p5.html"
      },
      {
        "year": 2007,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2007_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p5.html"
      },
      {
        "year": 2007,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2007_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w2b.html"
      },
      {
        "year": 2006,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2006_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w2b.html"
      },
      {
        "year": 2005,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2005_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p3.html"
      },
      {
        "year": 2005,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2005_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w2b.html"
      },
      {
        "year": 2004,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2004_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w2b.html"
      },
      {
        "year": 2003,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2003_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p5.html"
      },
      {
        "year": 2003,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2003_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w3b.html"
      },
      {
        "year": 2002,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2002_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w2b.html"
      },
      {
        "year": 2001,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2001_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p4.html"
      },
      {
        "year": 2000,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2000_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w3b.html"
      },
      {
        "year": 1999,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_1999_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p3.html"
      },
      {
        "year": 1999,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_1999_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w2b.html"
      },
      {
        "year": 1998,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1998_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w3b.html"
      },
      {
        "year": 1997,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_1997_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p3.html"
      },
      {
        "year": 1997,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_1997_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w2b.html"
      },
      {
        "year": 1996,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_1996_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p6.html"
      },
      {
        "year": 1996,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_1996_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w2b.html"
      },
      {
        "year": 1995,
        "label": "6a",
        "url": "http://www.walterbauer.net/aufgabe_1995_6a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_6a.html"
      },
      {
        "year": 1995,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1995_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_6c.html"
      }
    ]
  },
  {
    "id": "topic-2",
    "title": "Lineare Gleichungssysteme",
    "category": "Algebra & Gleichungen",
    "description": "LGS mit zwei Variablen, Additions- und Einsetzungsverfahren",
    "taskCount": 15,
    "tasks": [
      {
        "year": 2023,
        "label": "A2/3",
        "url": "http://www.walterbauer.net/aufgabe_2023_a2_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p3.html"
      },
      {
        "year": 2021,
        "label": "A2/5",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p5.html"
      },
      {
        "year": 2021,
        "label": "B/1b",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_1b.html"
      },
      {
        "year": 2021,
        "label": "B/2a",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_2a.html"
      },
      {
        "year": 2021,
        "label": "B/4a",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_4a.html"
      },
      {
        "year": 2019,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2019_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p5.html"
      },
      {
        "year": 2015,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2015_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p6.html"
      },
      {
        "year": 2012,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2012_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p5.html"
      },
      {
        "year": 2010,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2010_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p4.html"
      },
      {
        "year": 2008,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2008_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p6.html"
      },
      {
        "year": 2006,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2006_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p5.html"
      },
      {
        "year": 2004,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2004_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p3.html"
      },
      {
        "year": 2002,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2002_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p3.html"
      },
      {
        "year": 2000,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2000_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p5.html"
      },
      {
        "year": 1998,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_1998_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p2.html"
      }
    ]
  },
  {
    "id": "topic-3",
    "title": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
    "category": "Sachrechnen & Finanzmathematik",
    "description": "Zinsrechnung, Kapitalwachstum, Zinseszinsformel und Diagramme",
    "taskCount": 59,
    "tasks": [
      {
        "year": 2024,
        "label": "A1/7a",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p7a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p7a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p7a.html"
      },
      {
        "year": 2024,
        "label": "A1/7b",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p7b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p7b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p7b.html"
      },
      {
        "year": 2024,
        "label": "A2/6",
        "url": "http://www.walterbauer.net/aufgabe_2024_a2_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p6.html"
      },
      {
        "year": 2023,
        "label": "A1/7",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p7.html"
      },
      {
        "year": 2023,
        "label": "A2/6",
        "url": "http://www.walterbauer.net/aufgabe_2023_a2_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p6.html"
      },
      {
        "year": 2022,
        "label": "A1/7",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p7.html"
      },
      {
        "year": 2022,
        "label": "A2/6",
        "url": "http://www.walterbauer.net/aufgabe_2022_a2_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p6.html"
      },
      {
        "year": 2021,
        "label": "A1/7",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p7.html"
      },
      {
        "year": 2021,
        "label": "A2/4",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p4.html"
      },
      {
        "year": 2020,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2020_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p7.html"
      },
      {
        "year": 2020,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2020_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p8.html"
      },
      {
        "year": 2019,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2019_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p4.html"
      },
      {
        "year": 2018,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2018_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p4.html"
      },
      {
        "year": 2017,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2017_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p7.html"
      },
      {
        "year": 2016,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2016_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p8.html"
      },
      {
        "year": 2015,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2015_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p7.html"
      },
      {
        "year": 2014,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2014_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p7.html"
      },
      {
        "year": 2013,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2013_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p6.html"
      },
      {
        "year": 2012,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2012_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p8.html"
      },
      {
        "year": 2011,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2011_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p6.html"
      },
      {
        "year": 2009,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2009_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p6.html"
      },
      {
        "year": 2008,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2008_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p7.html"
      },
      {
        "year": 2007,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2007_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p8.html"
      },
      {
        "year": 2006,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2006_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p7.html"
      },
      {
        "year": 2005,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2005_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p7.html"
      },
      {
        "year": 2005,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2005_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p8.html"
      },
      {
        "year": 2004,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2004_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p7.html"
      },
      {
        "year": 2003,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2003_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p7.html"
      },
      {
        "year": 2003,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2003_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p8.html"
      },
      {
        "year": 2002,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2002_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p8.html"
      },
      {
        "year": 2001,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2001_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p7.html"
      },
      {
        "year": 2000,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2000_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p7.html"
      },
      {
        "year": 2000,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2000_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p8.html"
      },
      {
        "year": 1999,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_1999_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p7.html"
      },
      {
        "year": 1999,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_1999_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p8.html"
      },
      {
        "year": 1998,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_1998_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p7.html"
      },
      {
        "year": 1998,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_1998_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p8.html"
      },
      {
        "year": 1997,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_1997_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p7.html"
      },
      {
        "year": 1997,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_1997_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p8.html"
      },
      {
        "year": 1996,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_1996_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p7.html"
      },
      {
        "year": 1995,
        "label": "5a",
        "url": "http://www.walterbauer.net/aufgabe_1995_5a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_5a.html"
      },
      {
        "year": 1995,
        "label": "5b",
        "url": "http://www.walterbauer.net/aufgabe_1995_5b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_5b.html"
      },
      {
        "year": 1994,
        "label": "5a",
        "url": "http://www.walterbauer.net/aufgabe_1994_5a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_5a.html"
      },
      {
        "year": 1994,
        "label": "5c",
        "url": "http://www.walterbauer.net/aufgabe_1994_5c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_5c.html"
      },
      {
        "year": 1994,
        "label": "6a",
        "url": "http://www.walterbauer.net/aufgabe_1994_6a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_6a.html"
      },
      {
        "year": 1994,
        "label": "6b",
        "url": "http://www.walterbauer.net/aufgabe_1994_6b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_6b.html"
      },
      {
        "year": 1994,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1994_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_6c.html"
      },
      {
        "year": 1993,
        "label": "5a",
        "url": "http://www.walterbauer.net/aufgabe_1993_5a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_5a.html"
      },
      {
        "year": 1993,
        "label": "5b",
        "url": "http://www.walterbauer.net/aufgabe_1993_5b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_5b.html"
      },
      {
        "year": 1993,
        "label": "5c",
        "url": "http://www.walterbauer.net/aufgabe_1993_5c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_5c.html"
      },
      {
        "year": 1992,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1992_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_4c.html"
      },
      {
        "year": 1992,
        "label": "6a",
        "url": "http://www.walterbauer.net/aufgabe_1992_6a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6a.html"
      },
      {
        "year": 1992,
        "label": "6b",
        "url": "http://www.walterbauer.net/aufgabe_1992_6b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6b.html"
      },
      {
        "year": 1991,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1991_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_2c.html"
      },
      {
        "year": 1991,
        "label": "6a",
        "url": "http://www.walterbauer.net/aufgabe_1991_6a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_6a.html"
      },
      {
        "year": 1991,
        "label": "6b",
        "url": "http://www.walterbauer.net/aufgabe_1991_6b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_6b.html"
      },
      {
        "year": 1990,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1990_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4c.html"
      },
      {
        "year": 1990,
        "label": "6a",
        "url": "http://www.walterbauer.net/aufgabe_1990_6a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6a.html"
      },
      {
        "year": 1990,
        "label": "6b",
        "url": "http://www.walterbauer.net/aufgabe_1990_6b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6b.html"
      }
    ]
  },
  {
    "id": "topic-4",
    "title": "Preise, Preisbewegungen, Währung",
    "category": "Sachrechnen & Finanzmathematik",
    "description": "Rabatte, Mehrwertsteuer, Mischungs- und Preisberechnungen",
    "taskCount": 15,
    "tasks": [
      {
        "year": 2007,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2007_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p7.html"
      },
      {
        "year": 2006,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2006_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p8.html"
      },
      {
        "year": 2004,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2004_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p8.html"
      },
      {
        "year": 2002,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2002_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p7.html"
      },
      {
        "year": 2001,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2001_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p8.html"
      },
      {
        "year": 1996,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_1996_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p8.html"
      },
      {
        "year": 1992,
        "label": "5a",
        "url": "http://www.walterbauer.net/aufgabe_1992_5a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_5a.html"
      },
      {
        "year": 1992,
        "label": "5b",
        "url": "http://www.walterbauer.net/aufgabe_1992_5b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_5b.html"
      },
      {
        "year": 1992,
        "label": "5c",
        "url": "http://www.walterbauer.net/aufgabe_1992_5c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_5c.html"
      },
      {
        "year": 1991,
        "label": "5a",
        "url": "http://www.walterbauer.net/aufgabe_1991_5a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_5a.html"
      },
      {
        "year": 1991,
        "label": "5b",
        "url": "http://www.walterbauer.net/aufgabe_1991_5b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_5b.html"
      },
      {
        "year": 1991,
        "label": "5c",
        "url": "http://www.walterbauer.net/aufgabe_1991_5c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_5c.html"
      },
      {
        "year": 1990,
        "label": "5a",
        "url": "http://www.walterbauer.net/aufgabe_1990_5a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_5a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_5a.html"
      },
      {
        "year": 1990,
        "label": "5b",
        "url": "http://www.walterbauer.net/aufgabe_1990_5b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_5b.html"
      },
      {
        "year": 1990,
        "label": "5c",
        "url": "http://www.walterbauer.net/aufgabe_1990_5c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_5c.html"
      }
    ]
  },
  {
    "id": "topic-5",
    "title": "Funktionen, Parabeln",
    "category": "Funktionen & Analysis",
    "description": "Normalparabeln, verschobene/gestreckte Parabeln, Schnittpunkte, Nullstellen",
    "taskCount": 105,
    "tasks": [
      {
        "year": 2024,
        "label": "A2/3",
        "url": "http://www.walterbauer.net/aufgabe_2024_a2_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p3.html"
      },
      {
        "year": 2024,
        "label": "B/1b",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_1b.html"
      },
      {
        "year": 2024,
        "label": "B/2a",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_2a.html"
      },
      {
        "year": 2024,
        "label": "B/3b",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_3b.html"
      },
      {
        "year": 2023,
        "label": "A1/4",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p4.html"
      },
      {
        "year": 2023,
        "label": "A2/4",
        "url": "http://www.walterbauer.net/aufgabe_2023_a2_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p4.html"
      },
      {
        "year": 2023,
        "label": "B/1b",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_p1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_p1b.html"
      },
      {
        "year": 2023,
        "label": "B/2a",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_p2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_p2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_p2a.html"
      },
      {
        "year": 2023,
        "label": "B/3b",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_3b.html"
      },
      {
        "year": 2023,
        "label": "B/4a",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_4a.html"
      },
      {
        "year": 2022,
        "label": "A2/4",
        "url": "http://www.walterbauer.net/aufgabe_2022_a2_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p4.html"
      },
      {
        "year": 2022,
        "label": "B/1b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_p1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_p1b.html"
      },
      {
        "year": 2022,
        "label": "B/2a",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_2a.html"
      },
      {
        "year": 2022,
        "label": "B/3b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_3b.html"
      },
      {
        "year": 2022,
        "label": "B/4a",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_4a.html"
      },
      {
        "year": 2021,
        "label": "A1/4a",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p4a.html"
      },
      {
        "year": 2021,
        "label": "A1/4b",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p4b.html"
      },
      {
        "year": 2021,
        "label": "A2/5",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p5.html"
      },
      {
        "year": 2021,
        "label": "B/1b",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_1b.html"
      },
      {
        "year": 2021,
        "label": "B/2a",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_2a.html"
      },
      {
        "year": 2021,
        "label": "B/3b",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_3b.html"
      },
      {
        "year": 2021,
        "label": "B/4a",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_4a.html"
      },
      {
        "year": 2020,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2020_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p5.html"
      },
      {
        "year": 2020,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2020_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w3a.html"
      },
      {
        "year": 2020,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2020_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w3b.html"
      },
      {
        "year": 2020,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2020_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w4b.html"
      },
      {
        "year": 2019,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2019_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p6.html"
      },
      {
        "year": 2019,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2019_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w3a.html"
      },
      {
        "year": 2019,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2019_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w3b.html"
      },
      {
        "year": 2019,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2019_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w4b.html"
      },
      {
        "year": 2018,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2018_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p6.html"
      },
      {
        "year": 2018,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2018_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w3a.html"
      },
      {
        "year": 2018,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2018_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w3b.html"
      },
      {
        "year": 2018,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2018_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w4b.html"
      },
      {
        "year": 2017,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2017_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p5.html"
      },
      {
        "year": 2017,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2017_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w3a.html"
      },
      {
        "year": 2017,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w3b.html"
      },
      {
        "year": 2017,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w4b.html"
      },
      {
        "year": 2016,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2016_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p6.html"
      },
      {
        "year": 2016,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2016_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w3a.html"
      },
      {
        "year": 2016,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w3b.html"
      },
      {
        "year": 2016,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w4b.html"
      },
      {
        "year": 2015,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2015_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p5.html"
      },
      {
        "year": 2015,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2015_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w3a.html"
      },
      {
        "year": 2015,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w3b.html"
      },
      {
        "year": 2015,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w4b.html"
      },
      {
        "year": 2014,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2014_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p4.html"
      },
      {
        "year": 2014,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2014_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w3a.html"
      },
      {
        "year": 2014,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w3b.html"
      },
      {
        "year": 2014,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w4b.html"
      },
      {
        "year": 2013,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2013_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p5.html"
      },
      {
        "year": 2013,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2013_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w3a.html"
      },
      {
        "year": 2013,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2013_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w3b.html"
      },
      {
        "year": 2013,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2013_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w4b.html"
      },
      {
        "year": 2012,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2012_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p6.html"
      },
      {
        "year": 2012,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2012_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w3a.html"
      },
      {
        "year": 2012,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w3b.html"
      },
      {
        "year": 2012,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w4b.html"
      },
      {
        "year": 2011,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2011_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p5.html"
      },
      {
        "year": 2011,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2011_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w3a.html"
      },
      {
        "year": 2011,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2011_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w3b.html"
      },
      {
        "year": 2011,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2011_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w4b.html"
      },
      {
        "year": 2010,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2010_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p5.html"
      },
      {
        "year": 2010,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2010_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w3a.html"
      },
      {
        "year": 2009,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2009_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p4.html"
      },
      {
        "year": 2009,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2009_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w3a.html"
      },
      {
        "year": 2009,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2009_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w3b.html"
      },
      {
        "year": 2008,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2008_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w3a.html"
      },
      {
        "year": 2008,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w3b.html"
      },
      {
        "year": 2007,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2007_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p6.html"
      },
      {
        "year": 2007,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2007_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w2a.html"
      },
      {
        "year": 2006,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2006_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p6.html"
      },
      {
        "year": 2006,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2006_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w2a.html"
      },
      {
        "year": 2005,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2005_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p4.html"
      },
      {
        "year": 2005,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2005_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w2a.html"
      },
      {
        "year": 2004,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2004_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p4.html"
      },
      {
        "year": 2004,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2004_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w2a.html"
      },
      {
        "year": 2003,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2003_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p6.html"
      },
      {
        "year": 2003,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2003_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w1b.html"
      },
      {
        "year": 2003,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2003_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w3a.html"
      },
      {
        "year": 2002,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2002_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p4.html"
      },
      {
        "year": 2002,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2002_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w2a.html"
      },
      {
        "year": 2001,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2001_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p3.html"
      },
      {
        "year": 2001,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2001_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w3a.html"
      },
      {
        "year": 2001,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2001_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w3b.html"
      },
      {
        "year": 2000,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2000_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p6.html"
      },
      {
        "year": 2000,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2000_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w3a.html"
      },
      {
        "year": 1999,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_1999_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p4.html"
      },
      {
        "year": 1999,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_1999_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w2a.html"
      },
      {
        "year": 1998,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_1998_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p1.html"
      },
      {
        "year": 1998,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_1998_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w3a.html"
      },
      {
        "year": 1997,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_1997_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p4.html"
      },
      {
        "year": 1997,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_1997_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p6.html"
      },
      {
        "year": 1997,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_1997_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w2a.html"
      },
      {
        "year": 1996,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_1996_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p4.html"
      },
      {
        "year": 1996,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_1996_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p5.html"
      },
      {
        "year": 1996,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_1996_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w2a.html"
      },
      {
        "year": 1995,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1995_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4b.html"
      },
      {
        "year": 1995,
        "label": "5c",
        "url": "http://www.walterbauer.net/aufgabe_1995_5c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_5c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_5c.html"
      },
      {
        "year": 1995,
        "label": "6b",
        "url": "http://www.walterbauer.net/aufgabe_1995_6b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_6b.html"
      },
      {
        "year": 1994,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1994_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4b.html"
      },
      {
        "year": 1994,
        "label": "5b",
        "url": "http://www.walterbauer.net/aufgabe_1994_5b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_5b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_5b.html"
      },
      {
        "year": 1993,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1993_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4b.html"
      },
      {
        "year": 1992,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1992_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_4b.html"
      },
      {
        "year": 1991,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1991_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4c.html"
      }
    ]
  },
  {
    "id": "topic-6",
    "title": "Trigonometrie",
    "category": "Geometrie & Trigonometrie",
    "description": "Sinus, Kosinus, Tangens im rechtwinkligen Dreieck, Steigungswinkel",
    "taskCount": 136,
    "tasks": [
      {
        "year": 2024,
        "label": "A1/5",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p5.html"
      },
      {
        "year": 2024,
        "label": "A2/1",
        "url": "http://www.walterbauer.net/aufgabe_2024_a2_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p1.html"
      },
      {
        "year": 2024,
        "label": "B/1a",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_1a.html"
      },
      {
        "year": 2023,
        "label": "A1/1",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p1.html"
      },
      {
        "year": 2023,
        "label": "A2/1",
        "url": "http://www.walterbauer.net/aufgabe_2023_a2_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p1.html"
      },
      {
        "year": 2023,
        "label": "B/1a",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_1a.html"
      },
      {
        "year": 2022,
        "label": "A1/1a",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p1a.html"
      },
      {
        "year": 2022,
        "label": "A1/1b",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p1b.html"
      },
      {
        "year": 2022,
        "label": "A1/1c",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p1c.html"
      },
      {
        "year": 2022,
        "label": "A2/1",
        "url": "http://www.walterbauer.net/aufgabe_2022_a2_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p1.html"
      },
      {
        "year": 2022,
        "label": "B/1a",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_1a.html"
      },
      {
        "year": 2022,
        "label": "B/4b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_4b.html"
      },
      {
        "year": 2021,
        "label": "A2/1",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p1.html"
      },
      {
        "year": 2021,
        "label": "B/1a",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_1a.html"
      },
      {
        "year": 2021,
        "label": "B/4b",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_4b.html"
      },
      {
        "year": 2020,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2020_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p1.html"
      },
      {
        "year": 2020,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2020_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p2.html"
      },
      {
        "year": 2020,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2020_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w1a.html"
      },
      {
        "year": 2020,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2020_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w1b.html"
      },
      {
        "year": 2019,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2019_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p1.html"
      },
      {
        "year": 2019,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2019_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p2.html"
      },
      {
        "year": 2019,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2019_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w1a.html"
      },
      {
        "year": 2019,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2019_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w1b.html"
      },
      {
        "year": 2018,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2018_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p1.html"
      },
      {
        "year": 2018,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2018_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p2.html"
      },
      {
        "year": 2018,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2018_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w1a.html"
      },
      {
        "year": 2018,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2018_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w1b.html"
      },
      {
        "year": 2017,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2017_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p1.html"
      },
      {
        "year": 2017,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2017_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p2.html"
      },
      {
        "year": 2017,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2017_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w1a.html"
      },
      {
        "year": 2017,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w1b.html"
      },
      {
        "year": 2016,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2016_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p1.html"
      },
      {
        "year": 2016,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2016_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p2.html"
      },
      {
        "year": 2016,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2016_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w1a.html"
      },
      {
        "year": 2016,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w1b.html"
      },
      {
        "year": 2015,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2015_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p1.html"
      },
      {
        "year": 2015,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2015_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p2.html"
      },
      {
        "year": 2015,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2015_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w1a.html"
      },
      {
        "year": 2015,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w1b.html"
      },
      {
        "year": 2014,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2014_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p1.html"
      },
      {
        "year": 2014,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2014_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p2.html"
      },
      {
        "year": 2014,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2014_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w1a.html"
      },
      {
        "year": 2014,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w1b.html"
      },
      {
        "year": 2013,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2013_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p1.html"
      },
      {
        "year": 2013,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2013_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p2.html"
      },
      {
        "year": 2013,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2013_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w1a.html"
      },
      {
        "year": 2013,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2013_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w1b.html"
      },
      {
        "year": 2012,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2012_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p1.html"
      },
      {
        "year": 2012,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2012_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w1a.html"
      },
      {
        "year": 2012,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w1b.html"
      },
      {
        "year": 2011,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2011_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p1.html"
      },
      {
        "year": 2011,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2011_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p2.html"
      },
      {
        "year": 2011,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2011_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w1a.html"
      },
      {
        "year": 2011,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2011_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w1b.html"
      },
      {
        "year": 2011,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2011_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w4b.html"
      },
      {
        "year": 2010,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2010_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p2.html"
      },
      {
        "year": 2010,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2010_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w1a.html"
      },
      {
        "year": 2010,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2010_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w4b.html"
      },
      {
        "year": 2009,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2009_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p1.html"
      },
      {
        "year": 2009,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2009_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p2.html"
      },
      {
        "year": 2008,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2008_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p1.html"
      },
      {
        "year": 2008,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2008_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p2.html"
      },
      {
        "year": 2008,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2008_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w1a.html"
      },
      {
        "year": 2007,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2007_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p3.html"
      },
      {
        "year": 2007,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2007_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w1a.html"
      },
      {
        "year": 2007,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2007_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w4a.html"
      },
      {
        "year": 2006,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2006_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p1.html"
      },
      {
        "year": 2006,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2006_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p2.html"
      },
      {
        "year": 2006,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2006_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w1a.html"
      },
      {
        "year": 2006,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2006_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w4b.html"
      },
      {
        "year": 2005,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2005_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p5.html"
      },
      {
        "year": 2005,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2005_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p6.html"
      },
      {
        "year": 2005,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2005_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w4b.html"
      },
      {
        "year": 2004,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2004_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p1.html"
      },
      {
        "year": 2004,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2004_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p2.html"
      },
      {
        "year": 2004,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2004_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w3a.html"
      },
      {
        "year": 2004,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2004_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w3b.html"
      },
      {
        "year": 2003,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2003_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p3.html"
      },
      {
        "year": 2003,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2003_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p4.html"
      },
      {
        "year": 2003,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2003_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w1a.html"
      },
      {
        "year": 2003,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2003_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w4a.html"
      },
      {
        "year": 2002,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2002_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p6.html"
      },
      {
        "year": 2002,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2002_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w1a.html"
      },
      {
        "year": 2002,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2002_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w1b.html"
      },
      {
        "year": 2001,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2001_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p5.html"
      },
      {
        "year": 2001,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2001_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w2a.html"
      },
      {
        "year": 2001,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2001_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w2b.html"
      },
      {
        "year": 2000,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2000_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p3.html"
      },
      {
        "year": 2000,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2000_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p4.html"
      },
      {
        "year": 2000,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2000_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w2a.html"
      },
      {
        "year": 2000,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2000_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w2b.html"
      },
      {
        "year": 1999,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_1999_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p5.html"
      },
      {
        "year": 1999,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_1999_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p6.html"
      },
      {
        "year": 1999,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_1999_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w1a.html"
      },
      {
        "year": 1999,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1999_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w1b.html"
      },
      {
        "year": 1998,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_1998_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p5.html"
      },
      {
        "year": 1998,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_1998_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p6.html"
      },
      {
        "year": 1998,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_1998_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w2a.html"
      },
      {
        "year": 1998,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_1998_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w2b.html"
      },
      {
        "year": 1997,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_1997_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p5.html"
      },
      {
        "year": 1997,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_1997_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w1a.html"
      },
      {
        "year": 1997,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1997_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w1b.html"
      },
      {
        "year": 1996,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_1996_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p3.html"
      },
      {
        "year": 1996,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_1996_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w1a.html"
      },
      {
        "year": 1996,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1996_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w1b.html"
      },
      {
        "year": 1995,
        "label": "3a",
        "url": "http://www.walterbauer.net/aufgabe_1995_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3a.html"
      },
      {
        "year": 1995,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1995_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3b.html"
      },
      {
        "year": 1995,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1995_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3c.html"
      },
      {
        "year": 1995,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1995_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4a.html"
      },
      {
        "year": 1995,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1995_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4c.html"
      },
      {
        "year": 1994,
        "label": "3a",
        "url": "http://www.walterbauer.net/aufgabe_1994_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3a.html"
      },
      {
        "year": 1994,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1994_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3b.html"
      },
      {
        "year": 1994,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1994_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3c.html"
      },
      {
        "year": 1994,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1994_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4a.html"
      },
      {
        "year": 1994,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1994_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4c.html"
      },
      {
        "year": 1993,
        "label": "3a",
        "url": "http://www.walterbauer.net/aufgabe_1993_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3a.html"
      },
      {
        "year": 1993,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1993_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3b.html"
      },
      {
        "year": 1993,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1993_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3c.html"
      },
      {
        "year": 1993,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1993_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4a.html"
      },
      {
        "year": 1993,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1993_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4c.html"
      },
      {
        "year": 1992,
        "label": "3a",
        "url": "http://www.walterbauer.net/aufgabe_1992_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3a.html"
      },
      {
        "year": 1992,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1992_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3b.html"
      },
      {
        "year": 1992,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1992_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3c.html"
      },
      {
        "year": 1992,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1992_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_4a.html"
      },
      {
        "year": 1992,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1992_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6c.html"
      },
      {
        "year": 1991,
        "label": "3a",
        "url": "http://www.walterbauer.net/aufgabe_1991_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3a.html"
      },
      {
        "year": 1991,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1991_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3b.html"
      },
      {
        "year": 1991,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3c.html"
      },
      {
        "year": 1991,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1991_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4a.html"
      },
      {
        "year": 1991,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1991_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4b.html"
      },
      {
        "year": 1990,
        "label": "3a",
        "url": "http://www.walterbauer.net/aufgabe_1990_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3a.html"
      },
      {
        "year": 1990,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1990_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3b.html"
      },
      {
        "year": 1990,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1990_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3c.html"
      },
      {
        "year": 1990,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1990_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4a.html"
      },
      {
        "year": 1990,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1990_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4b.html"
      },
      {
        "year": 1990,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1990_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6c.html"
      }
    ]
  },
  {
    "id": "topic-7",
    "title": "Quadratische Pyramiden",
    "category": "Stereometrie (Körper)",
    "description": "Oberfläche, Volumen, Seitenhöhe hs, Körperhöhe h, Kantenlängen",
    "taskCount": 33,
    "tasks": [
      {
        "year": 2024,
        "label": "A1/1",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p1.html"
      },
      {
        "year": 2024,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_2b.html"
      },
      {
        "year": 2022,
        "label": "A1/2a",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p2a.html"
      },
      {
        "year": 2022,
        "label": "A1/2b",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p2b.html"
      },
      {
        "year": 2022,
        "label": "A2/2",
        "url": "http://www.walterbauer.net/aufgabe_2022_a2_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p2.html"
      },
      {
        "year": 2021,
        "label": "A1/1a",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p1a.html"
      },
      {
        "year": 2021,
        "label": "A1/1b",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p1b.html"
      },
      {
        "year": 2021,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_2b.html"
      },
      {
        "year": 2020,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2020_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w2b.html"
      },
      {
        "year": 2018,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2018_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w2b.html"
      },
      {
        "year": 2017,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w2b.html"
      },
      {
        "year": 2016,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w2b.html"
      },
      {
        "year": 2015,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2015_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p3.html"
      },
      {
        "year": 2014,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2014_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p3.html"
      },
      {
        "year": 2014,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w2b.html"
      },
      {
        "year": 2013,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2013_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p3.html"
      },
      {
        "year": 2012,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2012_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p2.html"
      },
      {
        "year": 2012,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w2b.html"
      },
      {
        "year": 2011,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2011_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p3.html"
      },
      {
        "year": 2010,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2010_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p3.html"
      },
      {
        "year": 2008,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w4b.html"
      },
      {
        "year": 2007,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2007_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p1.html"
      },
      {
        "year": 2006,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2006_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w4a.html"
      },
      {
        "year": 2005,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2005_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p1.html"
      },
      {
        "year": 2005,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2005_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w1a.html"
      },
      {
        "year": 2004,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2004_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w1a.html"
      },
      {
        "year": 2003,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2003_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p2.html"
      },
      {
        "year": 2003,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2003_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w2b.html"
      },
      {
        "year": 2002,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2002_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p1.html"
      },
      {
        "year": 2000,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2000_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p1.html"
      },
      {
        "year": 1999,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_1999_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p2.html"
      },
      {
        "year": 1998,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_1998_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p3.html"
      },
      {
        "year": 1997,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_1997_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p1.html"
      }
    ]
  },
  {
    "id": "topic-8",
    "title": "Kegel, Kugel, Zylinder",
    "category": "Stereometrie (Körper)",
    "description": "Volumen- und Oberflächenberechnungen an runden Körpern",
    "taskCount": 25,
    "tasks": [
      {
        "year": 2024,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_2b.html"
      },
      {
        "year": 2021,
        "label": "A2/2",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p2.html"
      },
      {
        "year": 2020,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2020_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p3.html"
      },
      {
        "year": 2018,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2018_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w2a.html"
      },
      {
        "year": 2016,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2016_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p3.html"
      },
      {
        "year": 2015,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2015_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p3.html"
      },
      {
        "year": 2015,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2015_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w2a.html"
      },
      {
        "year": 2014,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2014_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p3.html"
      },
      {
        "year": 2014,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w2b.html"
      },
      {
        "year": 2013,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2013_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p3.html"
      },
      {
        "year": 2013,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2013_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w2b.html"
      },
      {
        "year": 2012,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w2b.html"
      },
      {
        "year": 2011,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2011_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p3.html"
      },
      {
        "year": 2007,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2007_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p2.html"
      },
      {
        "year": 2007,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2007_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w4b.html"
      },
      {
        "year": 2005,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2005_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w3b.html"
      },
      {
        "year": 2004,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2004_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p6.html"
      },
      {
        "year": 2002,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2002_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p2.html"
      },
      {
        "year": 2002,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2002_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w3b.html"
      },
      {
        "year": 2001,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2001_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p1.html"
      },
      {
        "year": 2000,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2000_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_p2.html"
      },
      {
        "year": 1999,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_1999_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_p1.html"
      },
      {
        "year": 1998,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_1998_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_p4.html"
      },
      {
        "year": 1997,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_1997_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_p2.html"
      },
      {
        "year": 1996,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_1996_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p1.html"
      }
    ]
  },
  {
    "id": "topic-9",
    "title": "Stümpfe",
    "category": "Stereometrie (Körper)",
    "description": "Pyramidenstumpf und Kegelstumpf mit Strahlensatz und Schnittflächen",
    "taskCount": 23,
    "tasks": [
      {
        "year": 2006,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2006_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w3a.html"
      },
      {
        "year": 2006,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2006_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w3b.html"
      },
      {
        "year": 2005,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2005_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w4a.html"
      },
      {
        "year": 2004,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2004_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w4b.html"
      },
      {
        "year": 2002,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2002_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w3a.html"
      },
      {
        "year": 2001,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2001_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w1a.html"
      },
      {
        "year": 2000,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2000_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w1b.html"
      },
      {
        "year": 1997,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1997_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w3b.html"
      },
      {
        "year": 1996,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_1996_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w3a.html"
      },
      {
        "year": 1996,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1996_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w3b.html"
      },
      {
        "year": 1995,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1995_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1c.html"
      },
      {
        "year": 1995,
        "label": "2b",
        "url": "http://www.walterbauer.net/aufgabe_1995_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2b.html"
      },
      {
        "year": 1995,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2c.html"
      },
      {
        "year": 1994,
        "label": "1a",
        "url": "http://www.walterbauer.net/aufgabe_1994_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1a.html"
      },
      {
        "year": 1994,
        "label": "1b",
        "url": "http://www.walterbauer.net/aufgabe_1994_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1b.html"
      },
      {
        "year": 1994,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1994_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1c.html"
      },
      {
        "year": 1993,
        "label": "1b",
        "url": "http://www.walterbauer.net/aufgabe_1993_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1b.html"
      },
      {
        "year": 1993,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1993_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1c.html"
      },
      {
        "year": 1991,
        "label": "1a",
        "url": "http://www.walterbauer.net/aufgabe_1991_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1a.html"
      },
      {
        "year": 1991,
        "label": "1b",
        "url": "http://www.walterbauer.net/aufgabe_1991_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1b.html"
      },
      {
        "year": 1991,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1991_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1c.html"
      },
      {
        "year": 1990,
        "label": "1b",
        "url": "http://www.walterbauer.net/aufgabe_1990_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_1b.html"
      },
      {
        "year": 1990,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1990_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_1c.html"
      }
    ]
  },
  {
    "id": "topic-10",
    "title": "Besondere Pyramiden",
    "category": "Stereometrie (Körper)",
    "description": "Pyramiden mit Rechteck- oder Dreiecksgrundfläche, schiefe Pyramiden",
    "taskCount": 23,
    "tasks": [
      {
        "year": 2024,
        "label": "A2/2",
        "url": "http://www.walterbauer.net/aufgabe_2024_a2_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p2.html"
      },
      {
        "year": 2022,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_2b.html"
      },
      {
        "year": 2020,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2020_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w2a.html"
      },
      {
        "year": 2019,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2019_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w2a.html"
      },
      {
        "year": 2018,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2018_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w2a.html"
      },
      {
        "year": 2017,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2017_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w2a.html"
      },
      {
        "year": 2016,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2016_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w2a.html"
      },
      {
        "year": 2015,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2015_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w2a.html"
      },
      {
        "year": 2014,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2014_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w2a.html"
      },
      {
        "year": 2013,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2013_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w2a.html"
      },
      {
        "year": 2011,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2011_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w2a.html"
      },
      {
        "year": 2010,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2010_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w2b.html"
      },
      {
        "year": 2009,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2009_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w2a.html"
      },
      {
        "year": 2008,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2008_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p3.html"
      },
      {
        "year": 2007,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2007_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w3a.html"
      },
      {
        "year": 2005,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2005_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w3a.html"
      },
      {
        "year": 2004,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2004_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_p5.html"
      },
      {
        "year": 2001,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2001_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p2.html"
      },
      {
        "year": 1998,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_1998_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w1a.html"
      },
      {
        "year": 1997,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_1997_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w3a.html"
      },
      {
        "year": 1995,
        "label": "1a",
        "url": "http://www.walterbauer.net/aufgabe_1995_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1a.html"
      },
      {
        "year": 1995,
        "label": "1b",
        "url": "http://www.walterbauer.net/aufgabe_1995_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1b.html"
      },
      {
        "year": 1990,
        "label": "1a",
        "url": "http://www.walterbauer.net/aufgabe_1990_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_1a.html"
      }
    ]
  },
  {
    "id": "topic-11",
    "title": "Zusammengesetzte Körper",
    "category": "Stereometrie (Körper)",
    "description": "Kombinationen aus Zylinder, Halbkugel, Kegel und Prismen",
    "taskCount": 54,
    "tasks": [
      {
        "year": 2024,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_2b.html"
      },
      {
        "year": 2023,
        "label": "A2/2",
        "url": "http://www.walterbauer.net/aufgabe_2023_a2_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p2.html"
      },
      {
        "year": 2023,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2023_p2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_p2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_p2b.html"
      },
      {
        "year": 2022,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_2b.html"
      },
      {
        "year": 2021,
        "label": "A2/2",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p2.html"
      },
      {
        "year": 2020,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2020_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p3.html"
      },
      {
        "year": 2019,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2019_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p3.html"
      },
      {
        "year": 2019,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2019_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w2b.html"
      },
      {
        "year": 2018,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2018_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p3.html"
      },
      {
        "year": 2017,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2017_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p3.html"
      },
      {
        "year": 2015,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w2b.html"
      },
      {
        "year": 2012,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w2b.html"
      },
      {
        "year": 2011,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2011_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w2b.html"
      },
      {
        "year": 2010,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2010_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p1.html"
      },
      {
        "year": 2010,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2010_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w2a.html"
      },
      {
        "year": 2009,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2009_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p3.html"
      },
      {
        "year": 2009,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2009_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w2b.html"
      },
      {
        "year": 2009,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2009_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w4b.html"
      },
      {
        "year": 2008,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2008_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p4.html"
      },
      {
        "year": 2008,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w2b.html"
      },
      {
        "year": 2007,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2007_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w3b.html"
      },
      {
        "year": 2006,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2006_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p3.html"
      },
      {
        "year": 2005,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2005_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_p2.html"
      },
      {
        "year": 2004,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2004_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w1a.html"
      },
      {
        "year": 2003,
        "label": "P1",
        "url": "http://www.walterbauer.net/aufgabe_2003_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p1.html"
      },
      {
        "year": 2003,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2003_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w2a.html"
      },
      {
        "year": 2002,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2002_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w4b.html"
      },
      {
        "year": 2001,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2001_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w1b.html"
      },
      {
        "year": 2000,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2000_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w1a.html"
      },
      {
        "year": 1999,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_1999_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w3a.html"
      },
      {
        "year": 1999,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1999_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w3b.html"
      },
      {
        "year": 1998,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1998_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w1b.html"
      },
      {
        "year": 1997,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1997_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w3b.html"
      },
      {
        "year": 1996,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_1996_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_p2.html"
      },
      {
        "year": 1995,
        "label": "2a",
        "url": "http://www.walterbauer.net/aufgabe_1995_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2a.html"
      },
      {
        "year": 1995,
        "label": "2b",
        "url": "http://www.walterbauer.net/aufgabe_1995_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2b.html"
      },
      {
        "year": 1995,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2c.html"
      },
      {
        "year": 1994,
        "label": "2a",
        "url": "http://www.walterbauer.net/aufgabe_1994_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2a.html"
      },
      {
        "year": 1994,
        "label": "2b",
        "url": "http://www.walterbauer.net/aufgabe_1994_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2b.html"
      },
      {
        "year": 1994,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1994_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2c.html"
      },
      {
        "year": 1993,
        "label": "2a",
        "url": "http://www.walterbauer.net/aufgabe_1993_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2a.html"
      },
      {
        "year": 1993,
        "label": "2b",
        "url": "http://www.walterbauer.net/aufgabe_1993_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2b.html"
      },
      {
        "year": 1993,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1993_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2c.html"
      },
      {
        "year": 1992,
        "label": "1a",
        "url": "http://www.walterbauer.net/aufgabe_1992_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1a.html"
      },
      {
        "year": 1992,
        "label": "1b",
        "url": "http://www.walterbauer.net/aufgabe_1992_1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1b.html"
      },
      {
        "year": 1992,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1992_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1c.html"
      },
      {
        "year": 1992,
        "label": "2a",
        "url": "http://www.walterbauer.net/aufgabe_1992_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2a.html"
      },
      {
        "year": 1992,
        "label": "2b",
        "url": "http://www.walterbauer.net/aufgabe_1992_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2b.html"
      },
      {
        "year": 1992,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1992_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2c.html"
      },
      {
        "year": 1991,
        "label": "2a",
        "url": "http://www.walterbauer.net/aufgabe_1991_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_2a.html"
      },
      {
        "year": 1991,
        "label": "2b",
        "url": "http://www.walterbauer.net/aufgabe_1991_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_2b.html"
      },
      {
        "year": 1990,
        "label": "2a",
        "url": "http://www.walterbauer.net/aufgabe_1990_2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2a.html"
      },
      {
        "year": 1990,
        "label": "2b",
        "url": "http://www.walterbauer.net/aufgabe_1990_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2b.html"
      },
      {
        "year": 1990,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1990_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2c.html"
      }
    ]
  },
  {
    "id": "topic-12",
    "title": "Streckenzüge und Flächen auf Körpern und im Raum",
    "category": "Geometrie & Raumlehre",
    "description": "Kürzeste Wege auf Mantelflächen, Schnittebenen, Raumdiagonalen",
    "taskCount": 13,
    "tasks": [
      {
        "year": 2023,
        "label": "A1/3",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p3.html"
      },
      {
        "year": 2023,
        "label": "B/4b",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_4b.html"
      },
      {
        "year": 2017,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w2b.html"
      },
      {
        "year": 2012,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2012_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p3.html"
      },
      {
        "year": 2009,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2009_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w1a.html"
      },
      {
        "year": 2008,
        "label": "W2a",
        "url": "http://www.walterbauer.net/aufgabe_2008_w2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w2a.html"
      },
      {
        "year": 2007,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2007_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p4.html"
      },
      {
        "year": 2006,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2006_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w3a.html"
      },
      {
        "year": 2005,
        "label": "W1a",
        "url": "http://www.walterbauer.net/aufgabe_2005_w1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w1a.html"
      },
      {
        "year": 2005,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2005_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w4a.html"
      },
      {
        "year": 2002,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2002_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p5.html"
      },
      {
        "year": 2001,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2001_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p6.html"
      },
      {
        "year": 2000,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2000_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w1b.html"
      }
    ]
  },
  {
    "id": "topic-13",
    "title": "Prismen, Würfel, Quader",
    "category": "Stereometrie (Körper)",
    "description": "Volumen und Netzabwicklungen gerader Prismen und Quader",
    "taskCount": 14,
    "tasks": [
      {
        "year": 2024,
        "label": "A1/1",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p1.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p1.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p1.html"
      },
      {
        "year": 2023,
        "label": "B/4b",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_4b.html"
      },
      {
        "year": 2022,
        "label": "A1/2b",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p2b.html"
      },
      {
        "year": 2022,
        "label": "A2/2",
        "url": "http://www.walterbauer.net/aufgabe_2022_a2_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p2.html"
      },
      {
        "year": 2022,
        "label": "B/2b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_2b.html"
      },
      {
        "year": 2012,
        "label": "P3",
        "url": "http://www.walterbauer.net/aufgabe_2012_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p3.html"
      },
      {
        "year": 2007,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2007_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p4.html"
      },
      {
        "year": 2006,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2006_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_p4.html"
      },
      {
        "year": 2004,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2004_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w1b.html"
      },
      {
        "year": 2003,
        "label": "P2",
        "url": "http://www.walterbauer.net/aufgabe_2003_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_p2.html"
      },
      {
        "year": 2002,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2002_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_p5.html"
      },
      {
        "year": 2001,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2001_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_p6.html"
      },
      {
        "year": 1993,
        "label": "1a",
        "url": "http://www.walterbauer.net/aufgabe_1993_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1a.html"
      },
      {
        "year": 1991,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1991_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_6c.html"
      }
    ]
  },
  {
    "id": "topic-14",
    "title": "Berechnung mit Variablen",
    "category": "Algebra & Terme",
    "description": "Termumformungen, binomische Formeln, allgemeine Formeln nach Variablen auflösen",
    "taskCount": 52,
    "tasks": [
      {
        "year": 2023,
        "label": "A1/5",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p5.html"
      },
      {
        "year": 2019,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2019_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w2b.html"
      },
      {
        "year": 2018,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2018_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w1b.html"
      },
      {
        "year": 2018,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2018_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w2b.html"
      },
      {
        "year": 2017,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w1b.html"
      },
      {
        "year": 2016,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w2b.html"
      },
      {
        "year": 2015,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w1b.html"
      },
      {
        "year": 2014,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w1b.html"
      },
      {
        "year": 2013,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2013_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w1b.html"
      },
      {
        "year": 2012,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w1b.html"
      },
      {
        "year": 2011,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2011_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w2b.html"
      },
      {
        "year": 2010,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2010_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w1b.html"
      },
      {
        "year": 2009,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2009_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w4b.html"
      },
      {
        "year": 2008,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w1b.html"
      },
      {
        "year": 2008,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w2b.html"
      },
      {
        "year": 2008,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w4b.html"
      },
      {
        "year": 2007,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2007_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w3b.html"
      },
      {
        "year": 2006,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2006_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w1b.html"
      },
      {
        "year": 2006,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2006_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w3b.html"
      },
      {
        "year": 2005,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2005_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w3b.html"
      },
      {
        "year": 2004,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2004_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w1b.html"
      },
      {
        "year": 2004,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2004_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w3b.html"
      },
      {
        "year": 2002,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2002_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w4b.html"
      },
      {
        "year": 2001,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2001_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w1b.html"
      },
      {
        "year": 2000,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2000_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w2b.html"
      },
      {
        "year": 1999,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1999_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w1b.html"
      },
      {
        "year": 1999,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1999_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w3b.html"
      },
      {
        "year": 1998,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1998_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w1b.html"
      },
      {
        "year": 1998,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_1998_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w2b.html"
      },
      {
        "year": 1997,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1997_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w1b.html"
      },
      {
        "year": 1996,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1996_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w1b.html"
      },
      {
        "year": 1996,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1996_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w3b.html"
      },
      {
        "year": 1995,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1995_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1c.html"
      },
      {
        "year": 1995,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2c.html"
      },
      {
        "year": 1995,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1995_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3c.html"
      },
      {
        "year": 1995,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1995_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4c.html"
      },
      {
        "year": 1994,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1994_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1c.html"
      },
      {
        "year": 1994,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1994_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2c.html"
      },
      {
        "year": 1994,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1994_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3c.html"
      },
      {
        "year": 1994,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1994_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4c.html"
      },
      {
        "year": 1993,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1993_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1c.html"
      },
      {
        "year": 1993,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1993_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2c.html"
      },
      {
        "year": 1993,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1993_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3c.html"
      },
      {
        "year": 1993,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1993_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4c.html"
      },
      {
        "year": 1992,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1992_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1c.html"
      },
      {
        "year": 1992,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1992_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2c.html"
      },
      {
        "year": 1992,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1992_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3c.html"
      },
      {
        "year": 1991,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1991_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1c.html"
      },
      {
        "year": 1991,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3c.html"
      },
      {
        "year": 1990,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1990_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_1c.html"
      },
      {
        "year": 1990,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1990_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2c.html"
      },
      {
        "year": 1990,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1990_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3c.html"
      }
    ]
  },
  {
    "id": "topic-15",
    "title": "Berechnung ohne Verwendung gerundeter Werte",
    "category": "Exaktes Rechnen",
    "description": "Rechnen mit Wurzeln und Pi ohne Dezimalrundung (exakte Werte)",
    "taskCount": 45,
    "tasks": [
      {
        "year": 2020,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2020_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w1b.html"
      },
      {
        "year": 2018,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2018_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w1b.html"
      },
      {
        "year": 2017,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w1b.html"
      },
      {
        "year": 2016,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w2b.html"
      },
      {
        "year": 2015,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w1b.html"
      },
      {
        "year": 2014,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w1b.html"
      },
      {
        "year": 2013,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2013_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w1b.html"
      },
      {
        "year": 2012,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w1b.html"
      },
      {
        "year": 2010,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2010_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w1b.html"
      },
      {
        "year": 2009,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2009_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w1b.html"
      },
      {
        "year": 2008,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w1b.html"
      },
      {
        "year": 2008,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2008_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w2b.html"
      },
      {
        "year": 2007,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2007_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_w1b.html"
      },
      {
        "year": 2006,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2006_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w1b.html"
      },
      {
        "year": 2006,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2006_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2006_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2006_w3b.html"
      },
      {
        "year": 2005,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2005_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2005_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2005_w1b.html"
      },
      {
        "year": 2004,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2004_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w1b.html"
      },
      {
        "year": 2003,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2003_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2003_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2003_w4b.html"
      },
      {
        "year": 2002,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2002_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w1b.html"
      },
      {
        "year": 2001,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2001_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2001_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2001_w1b.html"
      },
      {
        "year": 2000,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2000_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2000_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2000_w2b.html"
      },
      {
        "year": 1999,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1999_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1999_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1999_w1b.html"
      },
      {
        "year": 1998,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1998_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w1b.html"
      },
      {
        "year": 1998,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_1998_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1998_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1998_w2b.html"
      },
      {
        "year": 1997,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1997_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1997_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1997_w1b.html"
      },
      {
        "year": 1996,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_1996_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w1b.html"
      },
      {
        "year": 1996,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_1996_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1996_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1996_w3b.html"
      },
      {
        "year": 1995,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1995_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_1c.html"
      },
      {
        "year": 1995,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_2c.html"
      },
      {
        "year": 1995,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1995_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_3c.html"
      },
      {
        "year": 1995,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1995_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1995_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1995_4c.html"
      },
      {
        "year": 1994,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1994_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_1c.html"
      },
      {
        "year": 1994,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1994_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_2c.html"
      },
      {
        "year": 1994,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1994_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_3c.html"
      },
      {
        "year": 1994,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1994_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1994_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1994_4c.html"
      },
      {
        "year": 1993,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1993_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_1c.html"
      },
      {
        "year": 1993,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1993_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_2c.html"
      },
      {
        "year": 1993,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1993_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3c.html"
      },
      {
        "year": 1993,
        "label": "4c",
        "url": "http://www.walterbauer.net/aufgabe_1993_4c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_4c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_4c.html"
      },
      {
        "year": 1992,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1992_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_1c.html"
      },
      {
        "year": 1992,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1992_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_2c.html"
      },
      {
        "year": 1992,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1992_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_3c.html"
      },
      {
        "year": 1991,
        "label": "1c",
        "url": "http://www.walterbauer.net/aufgabe_1991_1c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_1c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_1c.html"
      },
      {
        "year": 1991,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3c.html"
      },
      {
        "year": 1990,
        "label": "2c",
        "url": "http://www.walterbauer.net/aufgabe_1990_2c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_2c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_2c.html"
      }
    ]
  },
  {
    "id": "topic-16",
    "title": "Verstehen und Begründen",
    "category": "Mathematische Kompetenzen",
    "description": "Begründen von Zusammenhängen, Argumentieren, Fehleranalyse",
    "taskCount": 41,
    "tasks": [
      {
        "year": 2024,
        "label": "A1/6a",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p6a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p6a.html"
      },
      {
        "year": 2024,
        "label": "A1/6b",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p6b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p6b.html"
      },
      {
        "year": 2023,
        "label": "A1/6",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p6.html"
      },
      {
        "year": 2023,
        "label": "B/1b",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_p1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_p1b.html"
      },
      {
        "year": 2022,
        "label": "A1/4",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p4.html"
      },
      {
        "year": 2022,
        "label": "A1/7",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p7.html"
      },
      {
        "year": 2022,
        "label": "B/1b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_p1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_p1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_p1b.html"
      },
      {
        "year": 2022,
        "label": "B/4b",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_4b.html"
      },
      {
        "year": 2021,
        "label": "A1/6",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p6.html"
      },
      {
        "year": 2021,
        "label": "A2/6",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p6.html"
      },
      {
        "year": 2020,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2020_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p8.html"
      },
      {
        "year": 2020,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2020_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w2b.html"
      },
      {
        "year": 2020,
        "label": "W3a",
        "url": "http://www.walterbauer.net/aufgabe_2020_w3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w3a.html"
      },
      {
        "year": 2020,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2020_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w3b.html"
      },
      {
        "year": 2019,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2019_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w4a.html"
      },
      {
        "year": 2018,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2018_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p8.html"
      },
      {
        "year": 2018,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2018_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w4a.html"
      },
      {
        "year": 2017,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2017_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p4.html"
      },
      {
        "year": 2017,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2017_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p8.html"
      },
      {
        "year": 2017,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2017_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w3b.html"
      },
      {
        "year": 2016,
        "label": "W2b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w2b.html"
      },
      {
        "year": 2016,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2016_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w4a.html"
      },
      {
        "year": 2016,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2016_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w4b.html"
      },
      {
        "year": 2015,
        "label": "W1b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w1b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w1b.html"
      },
      {
        "year": 2015,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2015_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w3b.html"
      },
      {
        "year": 2015,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2015_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w4a.html"
      },
      {
        "year": 2014,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2014_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p6.html"
      },
      {
        "year": 2014,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2014_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w3b.html"
      },
      {
        "year": 2014,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2014_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w4a.html"
      },
      {
        "year": 2013,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2013_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p7.html"
      },
      {
        "year": 2013,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2013_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w4a.html"
      },
      {
        "year": 2012,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2012_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p7.html"
      },
      {
        "year": 2012,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2012_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w4b.html"
      },
      {
        "year": 2011,
        "label": "P5",
        "url": "http://www.walterbauer.net/aufgabe_2011_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p5.html"
      },
      {
        "year": 2011,
        "label": "W4b",
        "url": "http://www.walterbauer.net/aufgabe_2011_w4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w4b.html"
      },
      {
        "year": 2010,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2010_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p6.html"
      },
      {
        "year": 2010,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2010_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p7.html"
      },
      {
        "year": 2010,
        "label": "W3b",
        "url": "http://www.walterbauer.net/aufgabe_2010_w3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w3b.html"
      },
      {
        "year": 2007,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2007_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2007_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2007_p7.html"
      },
      {
        "year": 2004,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2004_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2004_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2004_w4a.html"
      },
      {
        "year": 2002,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2002_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2002_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2002_w4a.html"
      }
    ]
  },
  {
    "id": "topic-17",
    "title": "Statistik, Wahrscheinlichkeit",
    "category": "Stochastik",
    "description": "Baumdiagramme, Pfadregeln, Urnenmodelle, Mittelwerte, Laplace-Wahrscheinlichkeit",
    "taskCount": 54,
    "tasks": [
      {
        "year": 2024,
        "label": "A1/2",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p2.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p2.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p2.html"
      },
      {
        "year": 2024,
        "label": "A2/4",
        "url": "http://www.walterbauer.net/aufgabe_2024_a2_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a2_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a2_p4.html"
      },
      {
        "year": 2024,
        "label": "B/3a",
        "url": "http://www.walterbauer.net/aufgabe_2024_b_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_b_3a.html"
      },
      {
        "year": 2023,
        "label": "A1/2a",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p2a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p2a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p2a.html"
      },
      {
        "year": 2023,
        "label": "A1/2b",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p2b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p2b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p2b.html"
      },
      {
        "year": 2023,
        "label": "A2/5",
        "url": "http://www.walterbauer.net/aufgabe_2023_a2_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a2_p5.html"
      },
      {
        "year": 2023,
        "label": "B/3a",
        "url": "http://www.walterbauer.net/aufgabe_2023_b_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_b_3a.html"
      },
      {
        "year": 2022,
        "label": "A1/3a",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p3a.html"
      },
      {
        "year": 2022,
        "label": "A1/3b",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p3b.html"
      },
      {
        "year": 2022,
        "label": "A1/4",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p4.html"
      },
      {
        "year": 2022,
        "label": "A2/5",
        "url": "http://www.walterbauer.net/aufgabe_2022_a2_p5.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a2_p5.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a2_p5.html"
      },
      {
        "year": 2022,
        "label": "B/3a",
        "url": "http://www.walterbauer.net/aufgabe_2022_b_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_b_3a.html"
      },
      {
        "year": 2021,
        "label": "A1/3a",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p3a.html"
      },
      {
        "year": 2021,
        "label": "A1/3b",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p3b.html"
      },
      {
        "year": 2021,
        "label": "A2/3",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p3.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p3.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p3.html"
      },
      {
        "year": 2021,
        "label": "A2/6",
        "url": "http://www.walterbauer.net/aufgabe_2021_a2_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a2_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a2_p6.html"
      },
      {
        "year": 2021,
        "label": "B/3a",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_3a.html"
      },
      {
        "year": 2020,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2020_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_p6.html"
      },
      {
        "year": 2020,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2020_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2020_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2020_w4a.html"
      },
      {
        "year": 2019,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2019_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p7.html"
      },
      {
        "year": 2019,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2019_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_p8.html"
      },
      {
        "year": 2019,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2019_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2019_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2019_w4a.html"
      },
      {
        "year": 2018,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2018_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p7.html"
      },
      {
        "year": 2018,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2018_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_p8.html"
      },
      {
        "year": 2018,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2018_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2018_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2018_w4a.html"
      },
      {
        "year": 2017,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2017_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p4.html"
      },
      {
        "year": 2017,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2017_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_p8.html"
      },
      {
        "year": 2017,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2017_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2017_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2017_w4a.html"
      },
      {
        "year": 2016,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2016_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p4.html"
      },
      {
        "year": 2016,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2016_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_p7.html"
      },
      {
        "year": 2016,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2016_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2016_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2016_w4a.html"
      },
      {
        "year": 2015,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2015_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p4.html"
      },
      {
        "year": 2015,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2015_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_p8.html"
      },
      {
        "year": 2015,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2015_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2015_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2015_w4a.html"
      },
      {
        "year": 2014,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2014_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p6.html"
      },
      {
        "year": 2014,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2014_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_p8.html"
      },
      {
        "year": 2014,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2014_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2014_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2014_w4a.html"
      },
      {
        "year": 2013,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2013_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p7.html"
      },
      {
        "year": 2013,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2013_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_p8.html"
      },
      {
        "year": 2013,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2013_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2013_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2013_w4a.html"
      },
      {
        "year": 2012,
        "label": "P4",
        "url": "http://www.walterbauer.net/aufgabe_2012_p4.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p4.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p4.html"
      },
      {
        "year": 2012,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2012_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_p7.html"
      },
      {
        "year": 2012,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2012_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2012_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2012_w4a.html"
      },
      {
        "year": 2011,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2011_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p7.html"
      },
      {
        "year": 2011,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2011_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_p8.html"
      },
      {
        "year": 2011,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2011_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2011_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2011_w4a.html"
      },
      {
        "year": 2010,
        "label": "P6",
        "url": "http://www.walterbauer.net/aufgabe_2010_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p6.html"
      },
      {
        "year": 2010,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2010_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_p7.html"
      },
      {
        "year": 2010,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2010_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2010_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2010_w4a.html"
      },
      {
        "year": 2009,
        "label": "P7",
        "url": "http://www.walterbauer.net/aufgabe_2009_p7.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p7.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p7.html"
      },
      {
        "year": 2009,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2009_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_p8.html"
      },
      {
        "year": 2009,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2009_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2009_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2009_w4a.html"
      },
      {
        "year": 2008,
        "label": "P8",
        "url": "http://www.walterbauer.net/aufgabe_2008_p8.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_p8.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_p8.html"
      },
      {
        "year": 2008,
        "label": "W4a",
        "url": "http://www.walterbauer.net/aufgabe_2008_w4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2008_w4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2008_w4a.html"
      }
    ]
  },
  {
    "id": "topic-18",
    "title": "Rotationskörper",
    "category": "Stereometrie (Körper)",
    "description": "Körper durch Rotation von Dreiecken oder Trapezen um eine Achse",
    "taskCount": 0,
    "tasks": []
  },
  {
    "id": "topic-19",
    "title": "Reihen und Folgen",
    "category": "Algebra & Folgen",
    "description": "Arithmetische und geometrische Zahlenfolgen",
    "taskCount": 7,
    "tasks": [
      {
        "year": 2024,
        "label": "A1/4a",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p4a.html"
      },
      {
        "year": 2024,
        "label": "A1/4b",
        "url": "http://www.walterbauer.net/aufgabe_2024_a1_p4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2024_a1_p4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2024_a1_p4b.html"
      },
      {
        "year": 2023,
        "label": "A1/8a",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p8a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p8a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p8a.html"
      },
      {
        "year": 2023,
        "label": "A1/8b",
        "url": "http://www.walterbauer.net/aufgabe_2023_a1_p8b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2023_a1_p8b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2023_a1_p8b.html"
      },
      {
        "year": 2022,
        "label": "A1/6a",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p6a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p6a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p6a.html"
      },
      {
        "year": 2022,
        "label": "A1/6b",
        "url": "http://www.walterbauer.net/aufgabe_2022_a1_p6b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2022_a1_p6b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2022_a1_p6b.html"
      },
      {
        "year": 2021,
        "label": "A1/6",
        "url": "http://www.walterbauer.net/aufgabe_2021_a1_p6.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_a1_p6.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_a1_p6.html"
      }
    ]
  },
  {
    "id": "topic-20",
    "title": "Logarithmus",
    "category": "Algebra & Gleichungen",
    "description": "Exponentialgleichungen und Logarithmengesetze",
    "taskCount": 0,
    "tasks": []
  },
  {
    "id": "topic-21",
    "title": "Sinussatz",
    "category": "Geometrie & Trigonometrie",
    "description": "Berechnung in beliebigen Dreiecken mit a/sin(alpha) = b/sin(beta)",
    "taskCount": 11,
    "tasks": [
      {
        "year": 2021,
        "label": "B/1a",
        "url": "http://www.walterbauer.net/aufgabe_2021_b_1a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_2021_b_1a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_2021_b_1a.html"
      },
      {
        "year": 1993,
        "label": "3a",
        "url": "http://www.walterbauer.net/aufgabe_1993_3a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3a.html"
      },
      {
        "year": 1993,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1993_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3b.html"
      },
      {
        "year": 1992,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1992_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6c.html"
      },
      {
        "year": 1991,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1991_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3b.html"
      },
      {
        "year": 1991,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3c.html"
      },
      {
        "year": 1991,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1991_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4a.html"
      },
      {
        "year": 1991,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1991_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4b.html"
      },
      {
        "year": 1990,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1990_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4a.html"
      },
      {
        "year": 1990,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1990_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4b.html"
      },
      {
        "year": 1990,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1990_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6c.html"
      }
    ]
  },
  {
    "id": "topic-22",
    "title": "Kosinussatz",
    "category": "Geometrie & Trigonometrie",
    "description": "Berechnung in beliebigen Dreiecken mit a² = b² + c² - 2bc*cos(alpha)",
    "taskCount": 10,
    "tasks": [
      {
        "year": 1993,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1993_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1993_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1993_3b.html"
      },
      {
        "year": 1992,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1992_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1992_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1992_6c.html"
      },
      {
        "year": 1991,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1991_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3b.html"
      },
      {
        "year": 1991,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_3c.html"
      },
      {
        "year": 1991,
        "label": "4a",
        "url": "http://www.walterbauer.net/aufgabe_1991_4a.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_4a.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4a.html"
      },
      {
        "year": 1991,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1991_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1991_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1991_4b.html"
      },
      {
        "year": 1990,
        "label": "3b",
        "url": "http://www.walterbauer.net/aufgabe_1990_3b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_3b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3b.html"
      },
      {
        "year": 1990,
        "label": "3c",
        "url": "http://www.walterbauer.net/aufgabe_1990_3c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_3c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_3c.html"
      },
      {
        "year": 1990,
        "label": "4b",
        "url": "http://www.walterbauer.net/aufgabe_1990_4b.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_4b.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_4b.html"
      },
      {
        "year": 1990,
        "label": "6c",
        "url": "http://www.walterbauer.net/aufgabe_1990_6c.html",
        "aufgabeUrl": "http://www.walterbauer.net/aufgabe_1990_6c.html",
        "loesungUrl": "http://www.walterbauer.net/loesung_1990_6c.html"
      }
    ]
  }
];

const REFORMS_DATA = [
  {
    year: 2021,
    title: 'Reform 2021 (Neuer Bildungsplan 2016)',
    highlight: 'Zweiteilung des Pflichtteils: A1 (ohne Taschenrechner) & A2 (mit Taschenrechner)',
    points: 50,
    active: true,
    details: [
      '<strong>Pflichtteil A1 (10 Punkte):</strong> 7 Aufgaben zur Überprüfung grundlegender mathematischer Basiskompetenzen OHNE Verwendung von Taschenrechner und Formelsammlung.',
      '<strong>Pflichtteil A2 (20 Punkte):</strong> 6 Aufgaben mit Taschenrechner und Formelsammlung (Funktionen, Trigonometrie, Stereometrie, Daten & Zufall).',
      '<strong>Wahlteil B (20 Punkte):</strong> 4 komplexe Aufgaben (B1 bis B4). Der Prüfling muss genau 2 dieser 4 Aufgaben vollständig lösen.',
      '<strong>Gesamtpunktzahl:</strong> 50 Punkte (10 Pkt A1 + 20 Pkt A2 + 20 Pkt B).'
    ]
  },
  {
    year: 2008,
    title: 'Reform 2008 (Neue Höchstpunktzahl & Stochastik)',
    highlight: 'Erhöhung auf 50 Punkte & Einführung der Wahrscheinlichkeitsrechnung',
    points: 50,
    active: false,
    details: [
      '<strong>Neue Gesamtpunktzahl:</strong> 50 Punkte statt zuvor 33 Punkte.',
      '<strong>Pflichtbereich:</strong> 8 Aufgaben (P1 bis P8) im Umfang von 30 Punkten.',
      '<strong>Wahlbereich:</strong> 4 Aufgaben (W1 bis W4), Prüfling wählt 2 Aufgaben (jeweils 10 Punkte = 20 Punkte).',
      '<strong>Neu eingeführt:</strong> Aufgaben aus der Stochastik und Wahrscheinlichkeitsrechnung (Baumdiagramme, Pfadregeln, Urnenmodelle).'
    ]
  },
  {
    year: 2002,
    title: 'Reform 2002 (Erweiterung Wahlbereich)',
    highlight: '4 statt 3 Aufgaben im Wahlbereich zur Auswahl',
    points: 33,
    active: false,
    details: [
      '<strong>Wahlbereich:</strong> Es wird eine 4. Wahlaufgabe hinzugefügt. Prüfling wählt 2 aus 4 Aufgaben (je 8 Punkte = 16 Punkte).',
      '<strong>Pflichtbereich:</strong> Alle Aufgaben müssen gelöst werden (17 Punkte).',
      '<strong>Höchstpunktzahl:</strong> 33 Punkte.'
    ]
  },
  {
    year: 1996,
    title: 'Reform 1996 (Einführung Pflicht- und Wahlbereich)',
    highlight: 'Einführung des 33-Punkte-Systems in Baden-Württemberg',
    points: 33,
    active: false,
    details: [
      '<strong>Veränderte Prüfungsstruktur:</strong> Einführung der strikten Trennung zwischen Pflichtbereich und Wahlbereich.',
      '<strong>Pflichtbereich:</strong> 17 Punkte (alle Aufgaben obligatorisch).',
      '<strong>Wahlbereich:</strong> 3 Aufgaben, 2 müssen gelöst werden (16 Punkte).',
      '<strong>Höchstpunktzahl:</strong> 33 Punkte.'
    ]
  }
];

const FORMULAS_DATA = [
  {
    category: 'Stereometrie (Körper)',
    items: [
      { name: 'Quadratische Pyramide', formula: 'V = \frac{1}{3} \cdot a^2 \cdot h', note: 'M = 2 \cdot a \cdot h_s, \quad O = a^2 + M' },
      { name: 'Kreiskegel', formula: 'V = \frac{1}{3} \cdot \pi \cdot r^2 \cdot h', note: 'M = \pi \cdot r \cdot s, \quad s = \sqrt{r^2 + h^2}' },
      { name: 'Kugel', formula: 'V = \frac{4}{3} \cdot \pi \cdot r^3', note: 'O = 4 \cdot \pi \cdot r^2' },
      { name: 'Kreiszylinder', formula: 'V = \pi \cdot r^2 \cdot h', note: 'M = 2 \cdot \pi \cdot r \cdot h, \quad O = 2 \pi r^2 + M' },
      { name: 'Pyramidenstumpf', formula: 'V = \frac{h}{3} \cdot (a_1^2 + a_1 a_2 + a_2^2)', note: 'Strahlensatz zur Höhenbestimmung der Ergänzungspyramide' }
    ]
  },
  {
    category: 'Trigonometrie',
    items: [
      { name: 'Rechtwinkliges Dreieck', formula: '\sin(\alpha) = \frac{Gk}{Hyp}, \; \cos(\alpha) = \frac{Ak}{Hyp}, \; \tan(\alpha) = \frac{Gk}{Ak}', note: '\sin^2(\alpha) + \cos^2(\alpha) = 1' },
      { name: 'Sinussatz', formula: '\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)}', note: 'Anwendung bei beliebigem Dreieck (zwei Winkel & Seite)' },
      { name: 'Kosinussatz', formula: 'a^2 = b^2 + c^2 - 2bc \cdot \cos(\alpha)', note: 'Anwendung bei zwei Seiten & eingeschlossenem Winkel (SWS / SSS)' }
    ]
  },
  {
    category: 'Funktionen & Algebra',
    items: [
      { name: 'Scheitelpunktform', formula: 'y = a(x - d)^2 + e', note: 'Scheitel S(d|e); Normalparabel wenn a = 1' },
      { name: 'Allgemeine Form (Parabel)', formula: 'y = ax^2 + bx + c', note: 'Schnittpunkt mit y-Achse bei P(0|c)' },
      { name: 'p/q-Formel', formula: 'x_{1,2} = -\frac{p}{2} \pm \sqrt{(\frac{p}{2})^2 - q}', note: 'Gleichung muss normiert sein: x² + px + q = 0' },
      { name: 'Lineare Funktion', formula: 'y = m \cdot x + b', note: 'Steigung m = \frac{y_2 - y_1}{x_2 - x_1}' }
    ]
  },
  {
    category: 'Stochastik & Zinsrechnung',
    items: [
      { name: 'Zinseszinsformel', formula: 'K_n = K_0 \cdot (1 + \frac{p}{100})^n', note: 'Wachstumsfaktor q = 1 + p/100' },
      { name: '1. Pfadregel (Multiplikation)', formula: 'P(Pfad) = p_1 \cdot p_2 \cdot \dots \cdot p_k', note: 'Wahrscheinlichkeiten entlang eines Pfades multiplizieren' },
      { name: '2. Pfadregel (Addition)', formula: 'P(Ereignis) = \sum P(Pfad_i)', note: 'Wahrscheinlichkeiten verschiedener Pfade addieren' }
    ]
  }
];

// Prüfung Realschule Baden-Württemberg — Vollständige Prüfungsdaten 1990–2024
// Inklusive Walter Bauer Aufgabenbildern & Lösungen

const YEARS_DATA = [
  {
    "year": 2024,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Hilfsmittel) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "primary",
    "taskCount": 23,
    "tasks": [
      {
        "id": "2024-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2024_uebersicht.html"
      },
      {
        "id": "2024-A1-1",
        "label": "A1/1",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2024/0250.gif",
          "bilder/2024/0251.gif",
          "bilder/2024/0000.png"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p1.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p1.html"
      },
      {
        "id": "2024-A1-2",
        "label": "A1/2",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2024/0011.png"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p2.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p2.html"
      },
      {
        "id": "2024-A1-3",
        "label": "A1/3",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2024/0013.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p3.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p3.html"
      },
      {
        "id": "2024-A1-4a",
        "label": "A1/4a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln.",
        "images": [
          "bilder/2024/0015.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p4a.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p4a.html"
      },
      {
        "id": "2024-A1-4b",
        "label": "A1/4b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln.",
        "images": [
          "bilder/2024/0016.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p4b.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p4b.html"
      },
      {
        "id": "2024-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2024/0022.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p5.html"
      },
      {
        "id": "2024-A1-6a",
        "label": "A1/6a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2024/0025.gif",
          "bilder/2024/0026.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p6a.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p6a.html"
      },
      {
        "id": "2024-A1-6b",
        "label": "A1/6b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2024/0025.gif",
          "bilder/2024/0026.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p6b.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p6b.html"
      },
      {
        "id": "2024-A1-7a",
        "label": "A1/7a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2024/0030.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p7a.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p7a.html"
      },
      {
        "id": "2024-A1-7b",
        "label": "A1/7b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2024/0030.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a1_p7b.html",
        "taskUrl": "http://www.walterbauer.net/2024_a1_p7b.html"
      },
      {
        "id": "2024-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2024/0608.gif",
          "bilder/2024/0052.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/2024_a2_p1.html"
      },
      {
        "id": "2024-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2024/0104.gif",
          "bilder/2024/0105.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/2024_a2_p2.html"
      },
      {
        "id": "2024-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2024/0609.gif",
          "bilder/2024/0610.gif",
          "bilder/2024/0611.gif",
          "bilder/2023/0067.gif",
          "bilder/2023/0067.gif",
          "bilder/2024/0613.gif",
          "bilder/2024/0614.gif",
          "bilder/2024/0615.gif",
          "bilder/2023/0067.gif",
          "bilder/2024/0612.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/2024_a2_p3.html"
      },
      {
        "id": "2024-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2024/0158.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/2024_a2_p4.html"
      },
      {
        "id": "2024-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2024/0159.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/2024_a2_p5.html"
      },
      {
        "id": "2024-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2024/0194.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/2024_a2_p6.html"
      },
      {
        "id": "2024-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2024/0209.gif",
          "bilder/2023/0067.gif",
          "bilder/2024/0210.gif",
          "bilder/2023/0067.gif",
          "bilder/2024/0214.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/2024_b_1a.html"
      },
      {
        "id": "2024-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2024/0230.gif",
          "bilder/2024/0231.gif",
          "bilder/2024/0230.gif",
          "bilder/2024/0233.gif",
          "bilder/2024/0231.gif",
          "bilder/2024/0234.gif",
          "bilder/2024/0235.gif",
          "bilder/2022/0182.gif",
          "bilder/2024/0230.gif",
          "bilder/2024/0231.gif",
          "bilder/2024/0232.gif",
          "bilder/2024/0236.gif",
          "bilder/2024/0237.gif",
          "bilder/2022/0182.gif",
          "bilder/2024/0232.gif",
          "bilder/2024/0238.gif",
          "bilder/2024/0231.gif",
          "bilder/2022/0182.gif",
          "bilder/2024/0236.gif",
          "bilder/2024/0238.gif",
          "bilder/2024/0230.gif",
          "bilder/2024/0231.gif",
          "bilder/2024/0232.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/2024_b_1b.html"
      },
      {
        "id": "2024-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2024/0232.gif",
          "bilder/2024/0239.gif",
          "bilder/2024/0240.gif",
          "bilder/2024/0241.gif",
          "bilder/2022/0182.gif",
          "bilder/2024/0240.gif",
          "bilder/2024/0241.gif",
          "bilder/2024/0240.gif",
          "bilder/2024/0241.gif",
          "bilder/2024/0242.gif",
          "bilder/2022/0182.gif",
          "bilder/2024/0242.gif",
          "bilder/2024/0243.gif",
          "bilder/2024/0244.gif",
          "bilder/2024/0245.gif",
          "bilder/2024/0242.gif",
          "bilder/2024/0243.gif",
          "bilder/2024/0246.gif",
          "bilder/2022/0182.gif",
          "bilder/2024/0246.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/2024_b_2a.html"
      },
      {
        "id": "2024-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2024/0247.gif",
          "bilder/2024/0249.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/2024_b_2b.html"
      },
      {
        "id": "2024-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2024/0252.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/2024_b_3a.html"
      },
      {
        "id": "2024-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2024/0253.gif",
          "bilder/2024/0255.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2024_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/2024_b_3b.html"
      }
    ]
  },
  {
    "year": 2023,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Hilfsmittel) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "primary",
    "taskCount": 25,
    "tasks": [
      {
        "id": "2023-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2023_uebersicht.html"
      },
      {
        "id": "2023-A1-1",
        "label": "A1/1",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2023/0002.gif",
          "bilder/2023/0003.gif",
          "bilder/2023/0004.gif",
          "bilder/2023/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p1.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p1.html"
      },
      {
        "id": "2023-A1-2a",
        "label": "A1/2a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2023/0013.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p2a.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p2a.html"
      },
      {
        "id": "2023-A1-2b",
        "label": "A1/2b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2023/0013.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p2b.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p2b.html"
      },
      {
        "id": "2023-A1-3",
        "label": "A1/3",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2023/0019.gif",
          "bilder/2023/0020.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p3.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p3.html"
      },
      {
        "id": "2023-A1-4",
        "label": "A1/4",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2023/0022.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p4.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p4.html"
      },
      {
        "id": "2023-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2023/0028.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p5.html"
      },
      {
        "id": "2023-A1-6",
        "label": "A1/6",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2023/0040.gif",
          "bilder/2023/0041.gif",
          "bilder/2023/0042.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p6.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p6.html"
      },
      {
        "id": "2023-A1-7",
        "label": "A1/7",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2023/0050.gif",
          "bilder/2023/0051.gif",
          "bilder/2023/0052.gif",
          "bilder/2023/0053.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p7.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p7.html"
      },
      {
        "id": "2023-A1-8a",
        "label": "A1/8a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln.",
        "images": [
          "bilder/2023/0063.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p8a.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p8a.html"
      },
      {
        "id": "2023-A1-8b",
        "label": "A1/8b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln.",
        "images": [
          "bilder/2023/0063.gif",
          "bilder/2023/0064.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a1_p8b.html",
        "taskUrl": "http://www.walterbauer.net/2023_a1_p8b.html"
      },
      {
        "id": "2023-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2023/066.gif",
          "bilder/2023/0067.gif",
          "bilder/2023/0067.gif",
          "bilder/2023/0068.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/2023_a2_p1.html"
      },
      {
        "id": "2023-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2023/0122.gif",
          "bilder/2023/0123.gif",
          "bilder/2023/0122.gif",
          "bilder/2023/0126.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/2023_a2_p2.html"
      },
      {
        "id": "2023-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2023/0173.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/2023_a2_p3.html"
      },
      {
        "id": "2023-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2022/0182.gif",
          "bilder/2023/0206.gif",
          "bilder/2023/0207.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0205.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/2023_a2_p4.html"
      },
      {
        "id": "2023-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2023/0221.gif",
          "bilder/2023/0222.gif",
          "bilder/2023/0223.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0220.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/2023_a2_p5.html"
      },
      {
        "id": "2023-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2023/0239.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/2023_a2_p6.html"
      },
      {
        "id": "2023-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2023/0257.gif",
          "bilder/2023/0258.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_1a.html"
      },
      {
        "id": "2023-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2023/0310.gif",
          "bilder/2023/0311.gif",
          "bilder/2023/0312.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0310.gif",
          "bilder/2023/0310.gif",
          "bilder/2023/0313.gif",
          "bilder/2023/0314.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0315.gif",
          "bilder/2023/0314.gif",
          "bilder/2023/0316.gif",
          "bilder/2023/0315.gif",
          "bilder/2023/0314.gif",
          "bilder/2023/0316.gif",
          "bilder/2023/0315.gif",
          "bilder/2023/0314.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0316.gif",
          "bilder/2023/0315.gif",
          "bilder/2023/0314.gif",
          "bilder/2023/0318.gif",
          "bilder/2023/0314.gif",
          "bilder/2023/0317.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0318.gif",
          "bilder/2023/0318.gif",
          "bilder/2023/0316.gif",
          "bilder/2023/0315.gif",
          "bilder/2023/0314.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_1b.html"
      },
      {
        "id": "2023-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2023/0374.gif",
          "bilder/2023/0375.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0374.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0318.gif",
          "images/2023/b2a/0376.gif",
          "images/2023/b2a/0377.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0318.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0318.gif",
          "bilder/2023/0374.gif",
          "bilder/2022/0182.gif",
          "images/2023/b2a/0378.gif",
          "bilder/2023/0318.gif",
          "bilder/2023/0374.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_2a.html"
      },
      {
        "id": "2023-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2023/0424.gif",
          "bilder/2023/0423.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_2b.html"
      },
      {
        "id": "2023-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2023/0487.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0507.gif",
          "bilder/2023/0508.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0488.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_3a.html"
      },
      {
        "id": "2023-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2023/0518.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0519.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0520.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_3b.html"
      },
      {
        "id": "2023-B-4a",
        "label": "B/4a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2023/0552.gif",
          "bilder/2023/0553.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0552.gif",
          "bilder/2023/0553.gif",
          "bilder/2023/0552.gif",
          "bilder/2023/0554.gif",
          "bilder/2023/0555.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0555.gif",
          "bilder/2023/0556.gif",
          "bilder/2023/0557.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0558.gif",
          "bilder/2023/0556.gif",
          "bilder/2023/0558.gif",
          "bilder/2023/0559.gif",
          "bilder/2023/0554.gif",
          "bilder/2023/0560.gif",
          "bilder/2023/0558.gif",
          "bilder/2023/0555.gif",
          "bilder/2023/0559.gif",
          "bilder/2023/0561.gif",
          "bilder/2022/0182.gif",
          "bilder/2023/0562.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_4a.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_4a.html"
      },
      {
        "id": "2023-B-4b",
        "label": "B/4b",
        "section": "Wahlteil B",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2023/0639.gif",
          "bilder/2023/0640.gif",
          "bilder/2023/0638.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2023_b_4b.html",
        "taskUrl": "http://www.walterbauer.net/2023_b_4b.html"
      }
    ]
  },
  {
    "year": 2022,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Hilfsmittel) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "primary",
    "taskCount": 27,
    "tasks": [
      {
        "id": "2022-Uebersicht",
        "label": "Uebersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2022_uebersicht.html"
      },
      {
        "id": "2022-A1-1a",
        "label": "A1/1a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2022/0001.gif",
          "bilder/2022/0002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p1a.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p1a.html"
      },
      {
        "id": "2022-A1-1b",
        "label": "A1/1b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2022/0005.gif",
          "bilder/2022/0002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p1b.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p1b.html"
      },
      {
        "id": "2022-A1-1c",
        "label": "A1/1c",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2022/0008.gif",
          "bilder/2022/0002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p1c.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p1c.html"
      },
      {
        "id": "2022-A1-2a",
        "label": "A1/2a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2022/0011.gif",
          "bilder/2022/0012.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p2a.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p2a.html"
      },
      {
        "id": "2022-A1-2b",
        "label": "A1/2b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2022/0011.gif",
          "bilder/2022/0012.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p2b.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p2b.html"
      },
      {
        "id": "2022-A1-3a",
        "label": "A1/3a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2022/0027.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p3a.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p3a.html"
      },
      {
        "id": "2022-A1-3b",
        "label": "A1/3b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2022/0027.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p3b.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p3b.html"
      },
      {
        "id": "2022-A1-4",
        "label": "A1/4",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2022/0038.gif",
          "bilder/2022/0039.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p4.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p4.html"
      },
      {
        "id": "2022-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2022/0044.gif",
          "bilder/2022/0045.gif",
          "bilder/2022/0045.gif",
          "bilder/2022/0045.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p5.html"
      },
      {
        "id": "2022-A1-6a",
        "label": "A1/6a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln.",
        "images": [
          "bilder/2022/0053.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p6a.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p6a.html"
      },
      {
        "id": "2022-A1-6b",
        "label": "A1/6b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln.",
        "images": [
          "bilder/2022/0053.gif",
          "bilder/2022/0054.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p6b.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p6b.html"
      },
      {
        "id": "2022-A1-7",
        "label": "A1/7",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a1_p7.html",
        "taskUrl": "http://www.walterbauer.net/2022_a1_p7.html"
      },
      {
        "id": "2022-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2022/0057.gif",
          "bilder/2022/0058.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/2022_a2_p1.html"
      },
      {
        "id": "2022-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2022/0108.gif",
          "bilder/2022/0109.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/2022_a2_p2.html"
      },
      {
        "id": "2022-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2022/0147.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/2022_a2_p3.html"
      },
      {
        "id": "2022-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2022/0182.gif",
          "bilder/2022/0183.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0181.gif",
          "bilder/2022/0740.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/2022_a2_p4.html"
      },
      {
        "id": "2022-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/2022_a2_p5.html"
      },
      {
        "id": "2022-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2022/0251.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/2022_a2_p6.html"
      },
      {
        "id": "2022-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2022/0267.gif",
          "bilder/2022/0268.gif",
          "bilder/2022/0266.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_1a.html"
      },
      {
        "id": "2022-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2022/0347.gif",
          "bilder/2022/0348.gif",
          "bilder/2022/0349.gif",
          "bilder/2022/0350.gif",
          "bilder/2022/0349.gif",
          "bilder/2022/0347.gif",
          "bilder/2022/0351.gif",
          "bilder/2022/0352.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0351.gif",
          "bilder/2022/0352.gif",
          "bilder/2022/0351.gif",
          "bilder/2022/0352.gif",
          "bilder/2022/0353.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0354.gif",
          "bilder/2022/0353.gif",
          "bilder/2022/0351.gif",
          "bilder/2022/0352.gif",
          "bilder/2022/0354.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_1b.html"
      },
      {
        "id": "2022-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2022/0425.gif",
          "bilder/2022/0426.gif",
          "bilder/2022/0427.gif",
          "bilder/2022/0428.gif",
          "bilder/2022/0429.gif",
          "bilder/2022/0427.gif",
          "bilder/2022/0430.gif",
          "bilder/2022/0427.gif",
          "bilder/2022/0431.gif",
          "bilder/2022/0430.gif",
          "bilder/2022/0432.gif",
          "bilder/2022/0425.gif",
          "bilder/2022/0426.gif",
          "bilder/2022/0424.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_2a.html"
      },
      {
        "id": "2022-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2022/0497.gif",
          "bilder/2022/0496.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_2b.html"
      },
      {
        "id": "2022-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0569.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_3a.html"
      },
      {
        "id": "2022-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0607.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_3b.html"
      },
      {
        "id": "2022-B-4a",
        "label": "B/4a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2022/0647.gif",
          "bilder/2022/0648.gif",
          "bilder/2022/0649.gif",
          "bilder/2022/0650.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0651.gif",
          "bilder/2022/0647.gif",
          "bilder/2022/0649.gif",
          "bilder/2022/0647.gif",
          "bilder/2022/0652.gif",
          "bilder/2022/0653.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0652.gif",
          "bilder/2022/0653.gif",
          "bilder/2022/0652.gif",
          "bilder/2022/0653.gif",
          "bilder/2022/0651.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0652.gif",
          "bilder/2022/0651.gif",
          "bilder/2022/0653.gif",
          "bilder/2022/0651.gif",
          "bilder/2022/0649.gif",
          "bilder/2022/0654.gif",
          "bilder/2022/0652.gif",
          "bilder/2022/0654.gif",
          "bilder/2022/0653.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0654.gif",
          "bilder/2022/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_4a.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_4a.html"
      },
      {
        "id": "2022-B-4b",
        "label": "B/4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2022/0705.gif",
          "bilder/2022/0704.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0182.gif",
          "bilder/2022/0706.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2022_b_4b.html",
        "taskUrl": "http://www.walterbauer.net/2022_b_4b.html"
      }
    ]
  },
  {
    "year": 2021,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Hilfsmittel) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "primary",
    "taskCount": 25,
    "tasks": [
      {
        "id": "2021-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2021_uebersicht.html"
      },
      {
        "id": "2021-A1-1a",
        "label": "A1/1a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2021/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p1a.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p1a.html"
      },
      {
        "id": "2021-A1-1b",
        "label": "A1/1b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2021/0003.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p1b.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p1b.html"
      },
      {
        "id": "2021-A!-2",
        "label": "A!/2",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p2.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p2.html"
      },
      {
        "id": "2021-A1-3a",
        "label": "A1/3a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2021/0035.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p3a.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p3a.html"
      },
      {
        "id": "2021-A1-3b",
        "label": "A1/3b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2021/0035.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p3b.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p3b.html"
      },
      {
        "id": "2021-A1-4a",
        "label": "A1/4a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2021/0042.gif",
          "bilder/2021/0041.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p4a.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p4a.html"
      },
      {
        "id": "2021-A1-4b",
        "label": "A1/4b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2021/0073.gif",
          "bilder/2021/0074.gif",
          "bilder/2021/0041.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p4b.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p4b.html"
      },
      {
        "id": "2021-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2021/0076.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p5.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p5.html"
      },
      {
        "id": "2021-A1-6",
        "label": "A1/6",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln.",
        "images": [
          "bilder/2021/0087.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p6.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p6.html"
      },
      {
        "id": "2021-A1-7",
        "label": "A1/7",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2021/0089.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a1_p7.html",
        "taskUrl": "http://www.walterbauer.net/2021_a1_p7.html"
      },
      {
        "id": "2021-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2021/0092.gif",
          "bilder/2021/0093.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a2_p1.html",
        "taskUrl": "http://www.walterbauer.net/2021_a2_p1.html"
      },
      {
        "id": "2021-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2021/0129.gif",
          "bilder/2021/0128.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a2_p2.html",
        "taskUrl": "http://www.walterbauer.net/2021_a2_p2.html"
      },
      {
        "id": "2021-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2021/0179.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a2_p3.html",
        "taskUrl": "http://www.walterbauer.net/2021_a2_p3.html"
      },
      {
        "id": "2021-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2021/0195.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a2_p4.html",
        "taskUrl": "http://www.walterbauer.net/2021_a2_p4.html"
      },
      {
        "id": "2021-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2021/0215.gif",
          "bilder/2021/0216.gif",
          "bilder/2021/0217.gif",
          "bilder/2021/0218.gif",
          "bilder/2021/0219.gif",
          "bilder/2021/0215.gif",
          "bilder/2021/0220.gif",
          "bilder/2021/0215.gif",
          "bilder/2021/0217.gif",
          "bilder/2021/0221.gif",
          "bilder/2021/0217.gif",
          "bilder/2021/0220.gif",
          "bilder/2021/0221.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a2_p5.html",
        "taskUrl": "http://www.walterbauer.net/2021_a2_p5.html"
      },
      {
        "id": "2021-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2021/0271.gif",
          "bilder/2021/0272.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_a2_p6.html",
        "taskUrl": "http://www.walterbauer.net/2021_a2_p6.html"
      },
      {
        "id": "2021-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a/sin(α) = b/sin(β) = c/sin(γ). Einsetzbar wenn eine Seite und der gegenüberliegende Winkel bekannt sind.",
        "images": [
          "bilder/2021/0284.gif",
          "bilder/2021/0285.gif",
          "bilder/2021/0286.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_1a.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_1a.html"
      },
      {
        "id": "2021-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2021/0355.gif",
          "bilder/2021/0356.gif",
          "bilder/2021/0357.gif",
          "bilder/2021/0357.gif",
          "bilder/2021/0358.gif",
          "bilder/2021/0357.gif",
          "bilder/2021/0359.gif",
          "bilder/2021/0360.gif",
          "bilder/2021/0361.gif",
          "bilder/2021/0362.gif",
          "bilder/2021/0363.gif",
          "bilder/2021/0363.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_1b.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_1b.html"
      },
      {
        "id": "2021-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2021/0452.gif",
          "bilder/2021/0453.gif",
          "bilder/2021/0454.gif",
          "bilder/2021/0361.gif",
          "bilder/2021/0453.gif",
          "bilder/2021/0455.gif",
          "bilder/2021/0456.gif",
          "bilder/2021/0453.gif",
          "bilder/2021/0361.gif",
          "bilder/2021/0456.gif",
          "bilder/2021/0457.gif",
          "bilder/2021/0457.gif",
          "bilder/2021/0458.gif",
          "bilder/2021/0458.gif",
          "bilder/2021/0358.gif",
          "bilder/2021/0361.gif",
          "bilder/2021/0459.gif",
          "bilder/2021/0460.gif",
          "bilder/2021/0460.gif",
          "bilder/2021/0461.gif",
          "bilder/2021/0456.gif",
          "bilder/2021/0457.gif",
          "bilder/2021/0460.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_2a.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_2a.html"
      },
      {
        "id": "2021-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2021/0526.gif",
          "bilder/2021/0525.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_2b.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_2b.html"
      },
      {
        "id": "2021-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2021/0588.gif",
          "bilder/2021/0587.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_3a.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_3a.html"
      },
      {
        "id": "2021-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2021/0617.gif",
          "bilder/2021/0616.gif",
          "bilder/2021/0618.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_3b.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_3b.html"
      },
      {
        "id": "2021-B-4a",
        "label": "B/4a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2021/0667.gif",
          "bilder/2021/0668.gif",
          "bilder/2021/0669.gif",
          "bilder/2021/0670.gif",
          "bilder/2021/0671.gif",
          "bilder/2021/0668.gif",
          "bilder/2021/0672.gif",
          "bilder/2021/0667.gif",
          "bilder/2021/0673.gif",
          "bilder/2021/0672.gif",
          "bilder/2021/0674.gif",
          "bilder/2021/0675.gif",
          "bilder/2021/0674.gif",
          "bilder/2021/0675.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_4a.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_4a.html"
      },
      {
        "id": "2021-B-4b",
        "label": "B/4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2021/0749.gif",
          "bilder/2021/0750.gif",
          "bilder/2021/0751.gif",
          "bilder/2021/0752.gif",
          "bilder/2021/0753.gif",
          "bilder/2021/0754.gif",
          "bilder/2021/0749.gif",
          "bilder/2021/0755.gif",
          "bilder/2021/0753.gif",
          "bilder/2021/0751.gif",
          "bilder/2021/0756.gif",
          "bilder/2021/0757.gif",
          "bilder/2021/0758.gif",
          "bilder/2021/0759.gif",
          "bilder/2021/0748.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2021_b_4b.html",
        "taskUrl": "http://www.walterbauer.net/2021_b_4b.html"
      }
    ]
  },
  {
    "year": 2020,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2020-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2020_uebersicht.html"
      },
      {
        "id": "2020-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2020/0001.gif",
          "bilder/2020/0002.gif",
          "bilder/2020/0003.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p1.html",
        "taskUrl": "http://www.walterbauer.net/2020_p1.html"
      },
      {
        "id": "2020-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2020/0040.gif",
          "bilder/2020/0041.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p2.html",
        "taskUrl": "http://www.walterbauer.net/2020_p2.html"
      },
      {
        "id": "2020-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2020/0089.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p3.html",
        "taskUrl": "http://www.walterbauer.net/2020_p3.html"
      },
      {
        "id": "2020-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2020/0133.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p4.html",
        "taskUrl": "http://www.walterbauer.net/2020_p4.html"
      },
      {
        "id": "2020-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2020/0170.gif",
          "bilder/2020/0169.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p5.html",
        "taskUrl": "http://www.walterbauer.net/2020_p5.html"
      },
      {
        "id": "2020-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2020/0209.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p6.html",
        "taskUrl": "http://www.walterbauer.net/2020_p6.html"
      },
      {
        "id": "2020-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2020/0232.gif",
          "bilder/2020/0233.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p7.html",
        "taskUrl": "http://www.walterbauer.net/2020_p7.html"
      },
      {
        "id": "2020-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2020/0243.gif",
          "bilder/2020/0244.gif",
          "bilder/2020/0245.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_p8.html",
        "taskUrl": "http://www.walterbauer.net/2020_p8.html"
      },
      {
        "id": "2020-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2020/0255.gif",
          "bilder/2020/0256.gif",
          "bilder/2020/0257.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2020_w1a.html"
      },
      {
        "id": "2020-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2020/0319.gif",
          "bilder/2020/0320.gif",
          "bilder/2020/0321.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2020_w1b.html"
      },
      {
        "id": "2020-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2020/0364.gif",
          "bilder/2020/0365.gif",
          "bilder/2020/0363.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2020_w2a.html"
      },
      {
        "id": "2020-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2020/0425.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2020_w2b.html"
      },
      {
        "id": "2020-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2020/0465.gif",
          "bilder/2020/0466.gif",
          "bilder/2020/0467.gif",
          "bilder/2018/0518.gif",
          "bilder/2020/0468.gif",
          "bilder/2020/0469.gif",
          "bilder/2020/0470.gif",
          "bilder/2020/0471.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2020_w3a.html"
      },
      {
        "id": "2020-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2020/0527.gif",
          "bilder/2020/0524.gif",
          "bilder/2020/0525.gif",
          "bilder/2020/0526.gif",
          "bilder/2020/0528.gif",
          "bilder/2020/0529.gif",
          "bilder/2020/0525.gif",
          "bilder/2020/0530.gif",
          "bilder/2020/0531.gif",
          "bilder/2020/0532.gif",
          "bilder/2020/0533.gif",
          "bilder/2020/0525.gif",
          "bilder/2020/0534.gif",
          "bilder/2020/0532.gif",
          "bilder/2020/0528.gif",
          "bilder/2020/0535.gif",
          "bilder/2020/0531.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2020_w3b.html"
      },
      {
        "id": "2020-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2020/0587.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2020_w4a.html"
      },
      {
        "id": "2020-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2020/0621.gif",
          "bilder/2020/0622.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2020_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2020_w4b.html"
      }
    ]
  },
  {
    "year": 2019,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2019-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2019_uebersicht.html"
      },
      {
        "id": "2019-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2019/0001.gif",
          "bilder/2019/0002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p1.html",
        "taskUrl": "http://www.walterbauer.net/2019_p1.html"
      },
      {
        "id": "2019-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2019/0065.gif",
          "bilder/2019/0066.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p2.html",
        "taskUrl": "http://www.walterbauer.net/2019_p2.html"
      },
      {
        "id": "2019-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2019/0117.gif",
          "bilder/2019/0118.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p3.html",
        "taskUrl": "http://www.walterbauer.net/2019_p3.html"
      },
      {
        "id": "2019-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2019/0183.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p4.html",
        "taskUrl": "http://www.walterbauer.net/2019_p4.html"
      },
      {
        "id": "2019-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2019/0214.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p5.html",
        "taskUrl": "http://www.walterbauer.net/2019_p5.html"
      },
      {
        "id": "2019-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2019/0254.gif",
          "bilder/2019/0255.gif",
          "bilder/2019/0255.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p6.html",
        "taskUrl": "http://www.walterbauer.net/2019_p6.html"
      },
      {
        "id": "2019-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2019/0290.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p7.html",
        "taskUrl": "http://www.walterbauer.net/2019_p7.html"
      },
      {
        "id": "2019-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2019/0311.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_p8.html",
        "taskUrl": "http://www.walterbauer.net/2019_p8.html"
      },
      {
        "id": "2019-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2019/0326.gif",
          "bilder/2019/0324.gif",
          "images/2019/0325.gif",
          "bilder/2019/0323.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2019_w1a.html"
      },
      {
        "id": "2019-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2019/0404.gif",
          "bilder/2019/0405.gif",
          "bilder/2019/0406.gif",
          "bilder/2019/0407.gif",
          "bilder/2019/0408.gif",
          "bilder/2019/0409.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2019_w1b.html"
      },
      {
        "id": "2019-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2019/0471.gif",
          "bilder/2019/0472.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2019_w2a.html"
      },
      {
        "id": "2019-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2019/0540.gif",
          "bilder/2019/0541.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2019_w2b.html"
      },
      {
        "id": "2019-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2019/0601.gif",
          "bilder/2019/0602.gif",
          "bilder/2019/0603.gif",
          "bilder/2019/0604.gif",
          "bilder/2019/0605.gif",
          "bilder/2019/0606.gif",
          "bilder/2019/0607.gif",
          "bilder/2019/0608.gif",
          "bilder/2019/0606.gif",
          "bilder/2019/0607.gif",
          "bilder/2019/0607.gif",
          "bilder/2019/0609.gif",
          "bilder/2019/0601.gif",
          "bilder/2019/0603.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2019_w3a.html"
      },
      {
        "id": "2019-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2019/0679.gif",
          "bilder/2019/0680.gif",
          "bilder/2019/0681.gif",
          "bilder/2019/0682.gif",
          "bilder/2019/0683.gif",
          "bilder/2019/0684.gif",
          "bilder/2019/0679.gif",
          "bilder/2019/0682.gif",
          "bilder/2019/0685.gif",
          "bilder/2019/0685.gif",
          "bilder/2019/0686.gif",
          "bilder/2019/0687.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2019_w3b.html"
      },
      {
        "id": "2019-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2019/0758.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2019_w4a.html"
      },
      {
        "id": "2019-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2019/0800.gif",
          "bilder/2019/0801.gif",
          "bilder/2019/0802.gif",
          "bilder/2019/0803.gif",
          "bilder/2019/0801.gif",
          "bilder/2019/0799.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2019_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2019_w4b.html"
      }
    ]
  },
  {
    "year": 2018,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2018-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2018_uebersicht.html"
      },
      {
        "id": "2018-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2018/0001.gif",
          "bilder/2018/0002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p1.html",
        "taskUrl": "http://www.walterbauer.net/2018_p1.html"
      },
      {
        "id": "2018-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2018/0057.gif",
          "bilder/2018/0058.gif",
          "bilder/2018/0059.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p2.html",
        "taskUrl": "http://www.walterbauer.net/2018_p2.html"
      },
      {
        "id": "2018-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2018/0096.gif",
          "bilder/2018/0097.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p3.html",
        "taskUrl": "http://www.walterbauer.net/2018_p3.html"
      },
      {
        "id": "2018-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2018/0148.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p4.html",
        "taskUrl": "http://www.walterbauer.net/2018_p4.html"
      },
      {
        "id": "2018-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2018/0165.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p5.html",
        "taskUrl": "http://www.walterbauer.net/2018_p5.html"
      },
      {
        "id": "2018-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2018/0205.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p6.html",
        "taskUrl": "http://www.walterbauer.net/2018_p6.html"
      },
      {
        "id": "2018-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2018/0251.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p7.html",
        "taskUrl": "http://www.walterbauer.net/2018_p7.html"
      },
      {
        "id": "2018-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2018/0286.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_p8.html",
        "taskUrl": "http://www.walterbauer.net/2018_p8.html"
      },
      {
        "id": "2018-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2018/0299.gif",
          "bilder/2018/0297.gif",
          "bilder/2018/0298.gif",
          "bilder/2018/0300.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2018_w1a.html"
      },
      {
        "id": "2018-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2018/0362.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2018_w1b.html"
      },
      {
        "id": "2018-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2018/0406.gif",
          "bilder/2018/0405.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2018_w2a.html"
      },
      {
        "id": "2018-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2018/0461.gif",
          "bilder/2018/0464.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2018_w2b.html"
      },
      {
        "id": "2018-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2018/0516.gif",
          "bilder/2018/0517.gif",
          "bilder/2018/0516.gif",
          "bilder/2018/0517.gif",
          "bilder/2018/0518.gif",
          "bilder/2018/0519.gif",
          "bilder/2018/0520.gif",
          "bilder/2018/0517.gif",
          "bilder/2018/0521.gif",
          "bilder/2018/0522.gif",
          "bilder/2018/0523.gif",
          "bilder/2018/0521.gif",
          "bilder/2018/0524.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2018_w3a.html"
      },
      {
        "id": "2018-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2018/0600.gif",
          "bilder/2018/0601.gif",
          "bilder/2018/0602.gif",
          "bilder/2018/0603.gif",
          "bilder/2018/0604.gif",
          "bilder/2018/0605.gif",
          "bilder/2018/0606.gif",
          "bilder/2018/0600.gif",
          "bilder/2018/0607.gif",
          "bilder/2018/0608.gif",
          "bilder/2018/0607.gif",
          "bilder/2018/0608.gif",
          "bilder/2018/0609.gif",
          "bilder/2018/0607.gif",
          "bilder/2018/0608.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2018_w3b.html"
      },
      {
        "id": "2018-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2018/0663.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2018_w4a.html"
      },
      {
        "id": "2018-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2018_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2018_w4b.html"
      }
    ]
  },
  {
    "year": 2017,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2017-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2017_uebersicht.html"
      },
      {
        "id": "2017-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2017/00001.gif",
          "bilder/2017/00041.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p1.html",
        "taskUrl": "http://www.walterbauer.net/2017_p1.html"
      },
      {
        "id": "2017-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2017/00052.gif",
          "bilder/2017/00054.gif",
          "bilder/2017/00279.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p2.html",
        "taskUrl": "http://www.walterbauer.net/2017_p2.html"
      },
      {
        "id": "2017-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2017/00095.gif",
          "bilder/2017/00289.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p3.html",
        "taskUrl": "http://www.walterbauer.net/2017_p3.html"
      },
      {
        "id": "2017-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2017/00148.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p4.html",
        "taskUrl": "http://www.walterbauer.net/2017_p4.html"
      },
      {
        "id": "2017-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2017/00153.gif",
          "bilder/2017/00152.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p5.html",
        "taskUrl": "http://www.walterbauer.net/2017_p5.html"
      },
      {
        "id": "2017-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2017/00215.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p6.html",
        "taskUrl": "http://www.walterbauer.net/2017_p6.html"
      },
      {
        "id": "2017-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2017/00265.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p7.html",
        "taskUrl": "http://www.walterbauer.net/2017_p7.html"
      },
      {
        "id": "2017-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2017/00266.gif",
          "bilder/2017/00267.gif",
          "bilder/2017/00268.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_p8.html",
        "taskUrl": "http://www.walterbauer.net/2017_p8.html"
      },
      {
        "id": "2017-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2017/00300.gif",
          "bilder/2017/00302.gif",
          "bilder/2017/00300.gif",
          "bilder/2017/00301.gif",
          "bilder/2017/00305.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2017_w1a.html"
      },
      {
        "id": "2017-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2017/00371.gif",
          "bilder/2017/00372.gif",
          "bilder/2017/00373.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2017_w1b.html"
      },
      {
        "id": "2017-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2017/00433.gif",
          "bilder/2017/00483.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2017_w2a.html"
      },
      {
        "id": "2017-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2017/00501.gif",
          "bilder/2017/00576.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2017_w2b.html"
      },
      {
        "id": "2017-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2017/00589.gif",
          "bilder/2017/00590.gif",
          "bilder/2017/00591.gif",
          "bilder/2017/00592.gif",
          "bilder/2017/00593.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2017_w3a.html"
      },
      {
        "id": "2017-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2017/00684.gif",
          "bilder/2017/00685.gif",
          "bilder/2017/00686.gif",
          "bilder/2017/00687.gif",
          "bilder/2017/00688.gif",
          "bilder/2017/00684.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2017_w3b.html"
      },
      {
        "id": "2017-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "images/2017/00755.gif",
          "images/2017/00756.gif",
          "images/2017/00757.gif",
          "images/2017/00752.gif",
          "images/2017/00752.gif",
          "bilder/2017/00751.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2017_w4a.html"
      },
      {
        "id": "2017-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "images/2017/00789.gif",
          "bilder/2017/00791.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2017_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2017_w4b.html"
      }
    ]
  },
  {
    "year": 2016,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2016-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2016_uebersicht.html"
      },
      {
        "id": "2016-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2016/0004.gif",
          "bilder/2016/0003.gif",
          "bilder/2016/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p1.html",
        "taskUrl": "http://www.walterbauer.net/2016_p1.html"
      },
      {
        "id": "2016-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2016/0052.gif",
          "bilder/2016/0051.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p2.html",
        "taskUrl": "http://www.walterbauer.net/2016_p2.html"
      },
      {
        "id": "2016-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2016/0119.gif",
          "bilder/2016/0118.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p3.html",
        "taskUrl": "http://www.walterbauer.net/2016_p3.html"
      },
      {
        "id": "2016-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2016/0176.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p4.html",
        "taskUrl": "http://www.walterbauer.net/2016_p4.html"
      },
      {
        "id": "2016-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2016/0186.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p5.html",
        "taskUrl": "http://www.walterbauer.net/2016_p5.html"
      },
      {
        "id": "2016-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "images/2016/0221.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p6.html",
        "taskUrl": "http://www.walterbauer.net/2016_p6.html"
      },
      {
        "id": "2016-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2016/0261.gif",
          "bilder/2016/0262.gif",
          "bilder/2016/0263.gif",
          "bilder/2016/0264.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p7.html",
        "taskUrl": "http://www.walterbauer.net/2016_p7.html"
      },
      {
        "id": "2016-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2016/0283.gif",
          "bilder/2016/0284.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_p8.html",
        "taskUrl": "http://www.walterbauer.net/2016_p8.html"
      },
      {
        "id": "2016-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2016/0343.gif",
          "bilder/2016/0344.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2016_w1a.html"
      },
      {
        "id": "2016-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2016/0362.gif",
          "bilder/2016/0363.gif",
          "bilder/2016/361.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2016_w1b.html"
      },
      {
        "id": "2016-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2016/0478.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2016_w2a.html"
      },
      {
        "id": "2016-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2016/0494.gif",
          "bilder/2016/0495.gif",
          "bilder/2016/0496.gif",
          "bilder/2016/0497.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2016_w2b.html"
      },
      {
        "id": "2016-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2016/0778.gif",
          "bilder/2016/0567.gif",
          "bilder/2016/0568.gif",
          "bilder/2016/0778.gif",
          "bilder/2016/0778.gif",
          "bilder/2016/0780.gif",
          "bilder/2016/0569.gif",
          "bilder/2016/0778.gif",
          "bilder/2016/0780.gif",
          "bilder/2016/0566.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2016_w3a.html"
      },
      {
        "id": "2016-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2016/0778.gif",
          "bilder/2016/0649.gif",
          "bilder/2016/0650.gif",
          "bilder/2016/0780.gif",
          "bilder/2016/0651.gif",
          "bilder/2016/0778.gif",
          "bilder/2016/0780.gif",
          "bilder/2016/0653.gif",
          "bilder/2016/0654.gif",
          "bilder/2016/0655.gif",
          "bilder/2016/0655.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2016_w3b.html"
      },
      {
        "id": "2016-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2016/0716.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2016_w4a.html"
      },
      {
        "id": "2016-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2016/0846.gif",
          "bilder/2016/0751.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2016_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2016_w4b.html"
      }
    ]
  },
  {
    "year": 2015,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 18,
    "tasks": [
      {
        "id": "2015-Mathematik",
        "label": "Mathematik",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_mathemartik.html",
        "taskUrl": "http://www.walterbauer.net/mathemartik.html"
      },
      {
        "id": "2015-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2015_uebersicht.html"
      },
      {
        "id": "2015-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2015/0001.gif",
          "bilder/2015/0002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p1.html",
        "taskUrl": "http://www.walterbauer.net/2015_p1.html"
      },
      {
        "id": "2015-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2015/0060.gif",
          "bilder/2015/0061.gif",
          "bilder/2015/0059.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p2.html",
        "taskUrl": "http://www.walterbauer.net/2015_p2.html"
      },
      {
        "id": "2015-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2015/0123.gif",
          "bilder/2015/0122.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p3.html",
        "taskUrl": "http://www.walterbauer.net/2015_p3.html"
      },
      {
        "id": "2015-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2015/0174.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p4.html",
        "taskUrl": "http://www.walterbauer.net/2015_p4.html"
      },
      {
        "id": "2015-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2015/0223.gif",
          "bilder/2015/0224.gif",
          "bilder/2015/0225.gif",
          "bilder/2015/0226.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p5.html",
        "taskUrl": "http://www.walterbauer.net/2015_p5.html"
      },
      {
        "id": "2015-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2015/0284.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p6.html",
        "taskUrl": "http://www.walterbauer.net/2015_p6.html"
      },
      {
        "id": "2015-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2015/0332.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p7.html",
        "taskUrl": "http://www.walterbauer.net/2015_p7.html"
      },
      {
        "id": "2015-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2015/0356.gif",
          "bilder/2015/0357.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_p8.html",
        "taskUrl": "http://www.walterbauer.net/2015_p8.html"
      },
      {
        "id": "2015-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2015/0377.gif",
          "bilder/2015/0378.gif",
          "bilder/2015/0379.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2015_w1a.html"
      },
      {
        "id": "2015-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2015/0443.gif",
          "bilder/2015/0455.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2015_w1b.html"
      },
      {
        "id": "2015-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2015/0537.gif",
          "bilder/2015/0538.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2015_w2a.html"
      },
      {
        "id": "2015-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2015/0618.gif",
          "bilder/2015/0617.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2015_w2b.html"
      },
      {
        "id": "2015-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2015_w3a.html"
      },
      {
        "id": "2015-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2015/0741.gif",
          "bilder/2015/0742.gif",
          "bilder/2015/0743.gif",
          "bilder/2015/0744.gif",
          "bilder/2015/0745.gif",
          "bilder/2015/0746.gif",
          "bilder/2015/0747.gif",
          "bilder/2015/0748.gif",
          "bilder/2015/0749.gif",
          "bilder/2015/0750.gif",
          "bilder/2015/0741.gif",
          "bilder/2015/0750.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2015_w3b.html"
      },
      {
        "id": "2015-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2015/0808.gif",
          "bilder/2015/0806.gif",
          "bilder/2015/0807.gif",
          "bilder/2015/0805.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2015_w4a.html"
      },
      {
        "id": "2015-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2015/0846.gif",
          "bilder/2015/0845.gif",
          "bilder/2015/0847.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2015_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2015_w4b.html"
      }
    ]
  },
  {
    "year": 2014,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 18,
    "tasks": [
      {
        "id": "2014-Mathematik",
        "label": "Mathematik",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_matematik.html",
        "taskUrl": "http://www.walterbauer.net/matematik.html"
      },
      {
        "id": "2014-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2014_uebersicht.html"
      },
      {
        "id": "2014-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2014/0001.gif",
          "bilder/2014/0002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p1.html",
        "taskUrl": "http://www.walterbauer.net/2014_p1.html"
      },
      {
        "id": "2014-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2014/0003.gif",
          "bilder/2014/0004.gif",
          "bilder/2014/0063.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p2.html",
        "taskUrl": "http://www.walterbauer.net/2014_p2.html"
      },
      {
        "id": "2014-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2014/0129.gif",
          "bilder/2014/0130.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p3.html",
        "taskUrl": "http://www.walterbauer.net/2014_p3.html"
      },
      {
        "id": "2014-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2014/0184.gif",
          "bilder/2014/0185.gif",
          "bilder/2014/0186.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p4.html",
        "taskUrl": "http://www.walterbauer.net/2014_p4.html"
      },
      {
        "id": "2014-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2014/0250.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p5.html",
        "taskUrl": "http://www.walterbauer.net/2014_p5.html"
      },
      {
        "id": "2014-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2014/0286.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p6.html",
        "taskUrl": "http://www.walterbauer.net/2014_p6.html"
      },
      {
        "id": "2014-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2014/0633.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p7.html",
        "taskUrl": "http://www.walterbauer.net/2014_p7.html"
      },
      {
        "id": "2014-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2014/0652.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_p8.html",
        "taskUrl": "http://www.walterbauer.net/2014_p8.html"
      },
      {
        "id": "2014-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2014/0296.gif",
          "bilder/2014/0297.gif",
          "bilder/2014/0298.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2014_w1a.html"
      },
      {
        "id": "2014-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2014/0371.gif",
          "bilder/2014/0372.gif",
          "bilder/2014/0373.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2014_w1b.html"
      },
      {
        "id": "2014-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2014/0481.gif",
          "bilder/2014/0482.gif",
          "bilder/2014/0483.gif",
          "bilder/2014/0484.gif",
          "bilder/2014/0549.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2014_w2a.html"
      },
      {
        "id": "2014-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2014/0554.gif",
          "bilder/2014/0553.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2014_w2b.html"
      },
      {
        "id": "2014-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2014/0679.gif",
          "bilder/2014/0679.gif",
          "bilder/2014/0680.gif",
          "bilder/2014/0681.gif",
          "bilder/2014/0679.gif",
          "bilder/2014/0680.gif",
          "images/2014/0892.gif",
          "bilder/2014/0683.gif",
          "images/2014/0892.gif",
          "bilder/2014/0679.gif",
          "bilder/2014/0680.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2014_w3a.html"
      },
      {
        "id": "2014-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2014/0679.gif",
          "bilder/2014/0735.gif",
          "bilder/2014/0736.gif",
          "bilder/2014/0680.gif",
          "bilder/2014/0737.gif",
          "bilder/2014/0679.gif",
          "bilder/2014/0738.gif",
          "bilder/2014/0680.gif",
          "bilder/2014/0739.gif",
          "bilder/2014/0740.gif",
          "bilder/2014/0741.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2014_w3b.html"
      },
      {
        "id": "2014-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2014/0833.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2014_w4a.html"
      },
      {
        "id": "2014-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2014/0864.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2014_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2014_w4b.html"
      }
    ]
  },
  {
    "year": 2013,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2013-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2013_uebersicht.html"
      },
      {
        "id": "2013-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2013/0002.gif",
          "bilder/2013/0003.gif",
          "bilder/2013/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p1.html",
        "taskUrl": "http://www.walterbauer.net/2013_p1.html"
      },
      {
        "id": "2013-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2013/0064.gif",
          "bilder/2013/0065.gif",
          "bilder/2013/0066.gif",
          "bilder/2013/0063.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p2.html",
        "taskUrl": "http://www.walterbauer.net/2013_p2.html"
      },
      {
        "id": "2013-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2013/0174.gif",
          "bilder/2013/0175.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p3.html",
        "taskUrl": "http://www.walterbauer.net/2013_p3.html"
      },
      {
        "id": "2013-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2013/0182.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p4.html",
        "taskUrl": "http://www.walterbauer.net/2013_p4.html"
      },
      {
        "id": "2013-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2013/0219.gif",
          "bilder/2013/0220.gif",
          "bilder/2013/0221.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p5.html",
        "taskUrl": "http://www.walterbauer.net/2013_p5.html"
      },
      {
        "id": "2013-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2013/0280.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p6.html",
        "taskUrl": "http://www.walterbauer.net/2013_p6.html"
      },
      {
        "id": "2013-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p7.html",
        "taskUrl": "http://www.walterbauer.net/2013_p7.html"
      },
      {
        "id": "2013-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2013/0329.gif",
          "bilder/2013/0328.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_p8.html",
        "taskUrl": "http://www.walterbauer.net/2013_p8.html"
      },
      {
        "id": "2013-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2013/0342.gif",
          "bilder/2013/0343.gif",
          "bilder/2013/0344.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2013_w1a.html"
      },
      {
        "id": "2013-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2013/0416.gif",
          "bilder/2013/0415.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2013_w1b.html"
      },
      {
        "id": "2013-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2013/0549.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2013_w2a.html"
      },
      {
        "id": "2013-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2013/0602.gif",
          "bilder/2013/0603.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2013_w2b.html"
      },
      {
        "id": "2013-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2013/0668.gif",
          "bilder/2013/0668.gif",
          "bilder/2013/0668.gif",
          "bilder/2013/0669.gif",
          "bilder/2013/0670.gif",
          "bilder/2013/0671.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2013_w3a.html"
      },
      {
        "id": "2013-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2013/0719.gif",
          "bilder/2013/0720.gif",
          "bilder/2013/0721.gif",
          "bilder/2013/0722.gif",
          "bilder/2013/0723.gif",
          "bilder/2013/0719.gif",
          "bilder/2013/0724.gif",
          "bilder/2013/0725.gif",
          "bilder/2013/0721.gif",
          "bilder/2013/0726.gif",
          "bilder/2013/0726.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2013_w3b.html"
      },
      {
        "id": "2013-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2013/0810.gif",
          "bilder/2013/0811.gif",
          "bilder/2013/0812.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2013_w4a.html"
      },
      {
        "id": "2013-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2013/0847.gif",
          "bilder/2013/0846.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2013_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2013_w4b.html"
      }
    ]
  },
  {
    "year": 2012,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2012-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2012_uebersicht.html"
      },
      {
        "id": "2012-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2012/001.gif",
          "bilder/2012/002.gif",
          "bilder/2012/003.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p1.html",
        "taskUrl": "http://www.walterbauer.net/2012_p1.html"
      },
      {
        "id": "2012-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2012/004.gif",
          "bilder/2012/005.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p2.html",
        "taskUrl": "http://www.walterbauer.net/2012_p2.html"
      },
      {
        "id": "2012-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2012/006.gif",
          "bilder/2012/007.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p3.html",
        "taskUrl": "http://www.walterbauer.net/2012_p3.html"
      },
      {
        "id": "2012-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p4.html",
        "taskUrl": "http://www.walterbauer.net/2012_p4.html"
      },
      {
        "id": "2012-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2012/008.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p5.html",
        "taskUrl": "http://www.walterbauer.net/2012_p5.html"
      },
      {
        "id": "2012-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2012/009.gif",
          "bilder/2012/010.gif",
          "bilder/2012/009.gif",
          "bilder/2012/009.gif",
          "bilder/2012/011.gif",
          "bilder/2012/012.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p6.html",
        "taskUrl": "http://www.walterbauer.net/2012_p6.html"
      },
      {
        "id": "2012-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2012/355.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p7.html",
        "taskUrl": "http://www.walterbauer.net/2012_p7.html"
      },
      {
        "id": "2012-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2012/720.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_p8.html",
        "taskUrl": "http://www.walterbauer.net/2012_p8.html"
      },
      {
        "id": "2012-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2012/365.gif",
          "bilder/2012/366.gif",
          "bilder/2012/367.gif",
          "bilder/2012/367.gif",
          "bilder/2012/368.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2012_w1a.html"
      },
      {
        "id": "2012-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2012/443.gif",
          "bilder/2012/444.gif",
          "bilder/2012/445.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2012_w1b.html"
      },
      {
        "id": "2012-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2012/554.gif",
          "bilder/2012/555.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2012_w2a.html"
      },
      {
        "id": "2012-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2012/645.gif",
          "bilder/2012/646.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2012_w2b.html"
      },
      {
        "id": "2012-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2012/500.gif",
          "bilder/2012/904.gif",
          "bilder/2012/746.gif",
          "bilder/2012/505.gif",
          "bilder/2012/747.gif",
          "bilder/2012/500.gif",
          "bilder/2012/505.gif",
          "bilder/2012/503.gif",
          "bilder/2012/748.gif",
          "bilder/2012/503.gif",
          "bilder/2012/749.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2012_w3a.html"
      },
      {
        "id": "2012-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2012/795.gif",
          "bilder/2012/796.gif",
          "bilder/2012/797.gif",
          "bilder/2012/798.gif",
          "bilder/2012/799.gif",
          "bilder/2012/800.gif",
          "bilder/2012/797.gif",
          "bilder/2012/801.gif",
          "bilder/2012/801.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2012_w3b.html"
      },
      {
        "id": "2012-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2012/843.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2012_w4a.html"
      },
      {
        "id": "2012-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2012/865.gif",
          "bilder/2012/866.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2012_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2012_w4b.html"
      }
    ]
  },
  {
    "year": 2011,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2011-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2011_uebersicht.html"
      },
      {
        "id": "2011-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2011/002.gif",
          "bilder/2011/003.gif",
          "bilder/2011/004.gif",
          "bilder/2011/001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p1.html",
        "taskUrl": "http://www.walterbauer.net/2011_p1.html"
      },
      {
        "id": "2011-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2011/042.gif",
          "bilder/2011/077.gif",
          "bilder/2011/041.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p2.html",
        "taskUrl": "http://www.walterbauer.net/2011_p2.html"
      },
      {
        "id": "2011-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2011/089.gif",
          "bilder/2011/088.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p3.html",
        "taskUrl": "http://www.walterbauer.net/2011_p3.html"
      },
      {
        "id": "2011-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2011/136.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p4.html",
        "taskUrl": "http://www.walterbauer.net/2011_p4.html"
      },
      {
        "id": "2011-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2011/195.gif",
          "bilder/2011/167.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p5.html",
        "taskUrl": "http://www.walterbauer.net/2011_p5.html"
      },
      {
        "id": "2011-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2011/208.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p6.html",
        "taskUrl": "http://www.walterbauer.net/2011_p6.html"
      },
      {
        "id": "2011-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2011/216.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p7.html",
        "taskUrl": "http://www.walterbauer.net/2011_p7.html"
      },
      {
        "id": "2011-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2011/221.gif",
          "bilder/2011/222.gif",
          "bilder/2011/223.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_p8.html",
        "taskUrl": "http://www.walterbauer.net/2011_p8.html"
      },
      {
        "id": "2011-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2011/253.gif",
          "bilder/2011/252.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2011_w1a.html"
      },
      {
        "id": "2011-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2011/320.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2011_w1b.html"
      },
      {
        "id": "2011-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2011/374.gif",
          "bilder/2011/375.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2011_w2a.html"
      },
      {
        "id": "2011-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2011/442.gif",
          "bilder/2011/443.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2011_w2b.html"
      },
      {
        "id": "2011-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2011/500.gif",
          "bilder/2011/501.gif",
          "bilder/2011/502.gif",
          "bilder/2011/503.gif",
          "bilder/2011/504.gif",
          "bilder/2011/505.gif",
          "bilder/2011/500.gif",
          "bilder/2011/503.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2011_w3a.html"
      },
      {
        "id": "2011-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2011/565.gif",
          "bilder/2011/566.gif",
          "bilder/2011/567.gif",
          "bilder/2011/568.gif",
          "bilder/2011/569.gif",
          "bilder/2011/570.gif",
          "bilder/2011/571.gif",
          "bilder/2011/569.gif",
          "bilder/2011/565.gif",
          "bilder/2011/567.gif",
          "bilder/2011/568.gif",
          "bilder/2011/571.gif",
          "bilder/2011/571.gif",
          "bilder/2011/565.gif",
          "bilder/2011/571.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2011_w3b.html"
      },
      {
        "id": "2011-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2011/630.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2011_w4a.html"
      },
      {
        "id": "2011-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2011/500.gif",
          "bilder/2011/660.gif",
          "bilder/2011/503.gif",
          "bilder/2011/662.gif",
          "bilder/2011/663.gif",
          "bilder/2011/661.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2011_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2011_w4b.html"
      }
    ]
  },
  {
    "year": 2010,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2010-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2010_uebersicht.html"
      },
      {
        "id": "2010-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2010/001.gif",
          "bilder/2010/002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p1.html",
        "taskUrl": "http://www.walterbauer.net/2010_p1.html"
      },
      {
        "id": "2010-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2010/048.gif",
          "bilder/2010/049.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p2.html",
        "taskUrl": "http://www.walterbauer.net/2010_p2.html"
      },
      {
        "id": "2010-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2010/104.gif",
          "bilder/2010/103.gif",
          "bilder/2010/105.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p3.html",
        "taskUrl": "http://www.walterbauer.net/2010_p3.html"
      },
      {
        "id": "2010-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2010/148.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p4.html",
        "taskUrl": "http://www.walterbauer.net/2010_p4.html"
      },
      {
        "id": "2010-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2010/210.gif",
          "bilder/2010/211.gif",
          "bilder/2010/212.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p5.html",
        "taskUrl": "http://www.walterbauer.net/2010_p5.html"
      },
      {
        "id": "2010-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p6.html",
        "taskUrl": "http://www.walterbauer.net/2010_p6.html"
      },
      {
        "id": "2010-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p7.html",
        "taskUrl": "http://www.walterbauer.net/2010_p7.html"
      },
      {
        "id": "2010-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [
          "bilder/2010/309.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_p8.html",
        "taskUrl": "http://www.walterbauer.net/2010_p8.html"
      },
      {
        "id": "2010-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2010/330.gif",
          "bilder/2010/331.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2010_w1a.html"
      },
      {
        "id": "2010-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2010/402.gif",
          "bilder/2010/403.gif",
          "bilder/2010/404.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2010_w1b.html"
      },
      {
        "id": "2010-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2010/476.gif",
          "bilder/2010/477.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2010_w2a.html"
      },
      {
        "id": "2010-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2010/529.gif",
          "bilder/2010/530.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2010_w2b.html"
      },
      {
        "id": "2010-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2010/601.gif",
          "bilder/2010/602.gif",
          "bilder/2010/603.gif",
          "bilder/2010/601.gif",
          "bilder/2010/602.gif",
          "bilder/2010/603.gif",
          "bilder/2010/604.gif",
          "bilder/2010/600.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2010_w3a.html"
      },
      {
        "id": "2010-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2010/679.gif",
          "bilder/2010/680.gif",
          "bilder/2010/681.gif",
          "bilder/2010/680.gif",
          "bilder/2010/681.gif",
          "bilder/2010/682.gif",
          "bilder/2010/683.gif",
          "bilder/2010/684.gif",
          "bilder/2010/684.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2010_w3b.html"
      },
      {
        "id": "2010-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2010/731.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2010_w4a.html"
      },
      {
        "id": "2010-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2010/758.gif",
          "bilder/2010/759.gif",
          "bilder/2010/760.gif",
          "bilder/2010/757.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2010_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2010_w4b.html"
      }
    ]
  },
  {
    "year": 2009,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2009-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2009_uebersicht.html"
      },
      {
        "id": "2009-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2009/001.gif",
          "bilder/2009/002.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p1.html",
        "taskUrl": "http://www.walterbauer.net/2009_p1.html"
      },
      {
        "id": "2009-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2009/063.gif",
          "bilder/2009/064.gif",
          "bilder/2009/063.gif",
          "bilder/2009/061.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p2.html",
        "taskUrl": "http://www.walterbauer.net/2009_p2.html"
      },
      {
        "id": "2009-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2009/113.gif",
          "bilder/2009/112.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p3.html",
        "taskUrl": "http://www.walterbauer.net/2009_p3.html"
      },
      {
        "id": "2009-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2009/186.gif",
          "bilder/2009/187.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p4.html",
        "taskUrl": "http://www.walterbauer.net/2009_p4.html"
      },
      {
        "id": "2009-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2009/233.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p5.html",
        "taskUrl": "http://www.walterbauer.net/2009_p5.html"
      },
      {
        "id": "2009-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p6.html",
        "taskUrl": "http://www.walterbauer.net/2009_p6.html"
      },
      {
        "id": "2009-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p7.html",
        "taskUrl": "http://www.walterbauer.net/2009_p7.html"
      },
      {
        "id": "2009-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_p8.html",
        "taskUrl": "http://www.walterbauer.net/2009_p8.html"
      },
      {
        "id": "2009-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2009/332.gif",
          "bilder/2009/333.gif",
          "bilder/2009/331.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2009_w1a.html"
      },
      {
        "id": "2009-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2009/403.gif",
          "bilder/2009/404.gif",
          "bilder/2009/405.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2009_w1b.html"
      },
      {
        "id": "2009-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2009/483.gif",
          "bilder/2009/484.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2009_w2a.html"
      },
      {
        "id": "2009-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2009/563.gif",
          "bilder/2009/562.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2009_w2b.html"
      },
      {
        "id": "2009-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2009/635.gif",
          "bilder/2009/694.gif",
          "bilder/2009/695.gif",
          "bilder/2009/663.gif",
          "bilder/2009/662.gif",
          "bilder/2009/672.gif",
          "bilder/2009/672.gif",
          "bilder/2009/662.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2009_w3a.html"
      },
      {
        "id": "2009-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2009/744.gif",
          "bilder/2009/745.gif",
          "bilder/2009/746.gif",
          "bilder/2009/747.gif",
          "bilder/2009/672.gif",
          "bilder/2009/748.gif",
          "bilder/2009/749.gif",
          "bilder/2009/715.gif",
          "bilder/2009/716.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2009_w3b.html"
      },
      {
        "id": "2009-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2009/751.GIF",
          "bilder/2009/750.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2009_w4a.html"
      },
      {
        "id": "2009-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2009/764.gif",
          "bilder/2009/765.gif",
          "bilder/2009/766.gif",
          "bilder/2009/767.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2009_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2009_w4b.html"
      }
    ]
  },
  {
    "year": 2008,
    "eraId": "reform-2008",
    "eraTitle": "Prüfungsordnung 2008–2020",
    "points": 50,
    "duration": "240 Minuten",
    "structure": "Pflichtbereich P1–P8 (30 P) · Wahlbereich W1–W4 (2 aus 4, 20 P) · Inkl. Stochastik",
    "badgeColor": "primary",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2008-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2008_uebersicht.html"
      },
      {
        "id": "2008-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2008/001.GIF",
          "bilder/2008/002.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p1.html",
        "taskUrl": "http://www.walterbauer.net/2008_p1.html"
      },
      {
        "id": "2008-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2008/096.gif",
          "bilder/2008/097.gif",
          "bilder/2008/098.gif",
          "bilder/2008/095.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p2.html",
        "taskUrl": "http://www.walterbauer.net/2008_p2.html"
      },
      {
        "id": "2008-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2008/169.gif",
          "bilder/2008/168.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p3.html",
        "taskUrl": "http://www.walterbauer.net/2008_p3.html"
      },
      {
        "id": "2008-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2008/236.gif",
          "bilder/2008/237.gif",
          "bilder/2008/235.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p4.html",
        "taskUrl": "http://www.walterbauer.net/2008_p4.html"
      },
      {
        "id": "2008-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2008/310.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p5.html",
        "taskUrl": "http://www.walterbauer.net/2008_p5.html"
      },
      {
        "id": "2008-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2008/359.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p6.html",
        "taskUrl": "http://www.walterbauer.net/2008_p6.html"
      },
      {
        "id": "2008-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p7.html",
        "taskUrl": "http://www.walterbauer.net/2008_p7.html"
      },
      {
        "id": "2008-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_p8.html",
        "taskUrl": "http://www.walterbauer.net/2008_p8.html"
      },
      {
        "id": "2008-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2008/422.gif",
          "bilder/2008/423.gif",
          "bilder/2008/421.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2008_w1a.html"
      },
      {
        "id": "2008-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2008/515.gif",
          "bilder/2008/516.gif",
          "bilder/2008/518.gif",
          "bilder/2008/514.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2008_w1b.html"
      },
      {
        "id": "2008-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2008/635.gif",
          "bilder/2008/634.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2008_w2a.html"
      },
      {
        "id": "2008-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2008/706.gif",
          "bilder/2008/707.gif",
          "bilder/2008/708.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2008_w2b.html"
      },
      {
        "id": "2008-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2008/752.gif",
          "bilder/2008/753.gif",
          "bilder/2008/754.gif",
          "bilder/2008/755.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2008_w3a.html"
      },
      {
        "id": "2008-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2008/752.gif",
          "bilder/2008/836.gif",
          "bilder/2008/837.gif",
          "bilder/2008/752.gif",
          "bilder/2008/838.gif",
          "bilder/2008/839.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2008_w3b.html"
      },
      {
        "id": "2008-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren.",
        "images": [
          "bilder/2008/904.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2008_w4a.html"
      },
      {
        "id": "2008-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2008/929.gif",
          "bilder/2008/930.gif",
          "bilder/2008/931.gif",
          "bilder/2008/932.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2008_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2008_w4b.html"
      }
    ]
  },
  {
    "year": 2007,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 4 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2007-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2007_uebersicht.html"
      },
      {
        "id": "2007-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2007/002.gif",
          "bilder/2007/003.gif",
          "bilder/2007/001.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p1.html",
        "taskUrl": "http://www.walterbauer.net/2007_p1.html"
      },
      {
        "id": "2007-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2007/043.gif",
          "bilder/2007/044.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p2.html",
        "taskUrl": "http://www.walterbauer.net/2007_p2.html"
      },
      {
        "id": "2007-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2007/097.gif",
          "bilder/2007/098.gif",
          "bilder/2007/096.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p3.html",
        "taskUrl": "http://www.walterbauer.net/2007_p3.html"
      },
      {
        "id": "2007-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2007/149.gif",
          "bilder/2007/150.gif",
          "bilder/2007/181.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p4.html",
        "taskUrl": "http://www.walterbauer.net/2007_p4.html"
      },
      {
        "id": "2007-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2007/201.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p5.html",
        "taskUrl": "http://www.walterbauer.net/2007_p5.html"
      },
      {
        "id": "2007-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2007/244.gif",
          "bilder/2007/266.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p6.html",
        "taskUrl": "http://www.walterbauer.net/2007_p6.html"
      },
      {
        "id": "2007-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p7.html",
        "taskUrl": "http://www.walterbauer.net/2007_p7.html"
      },
      {
        "id": "2007-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_p8.html",
        "taskUrl": "http://www.walterbauer.net/2007_p8.html"
      },
      {
        "id": "2007-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2007/290.gif",
          "bilder/2007/291.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2007_w1a.html"
      },
      {
        "id": "2007-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2007/395.gif",
          "bilder/2007/396.gif",
          "bilder/2007/397.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2007_w1b.html"
      },
      {
        "id": "2007-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2007/481.GIF",
          "bilder/2007/1010.gif",
          "bilder/2007/1011.gif",
          "bilder/2007/1010.gif",
          "bilder/2007/1012.gif",
          "bilder/2007/1013.gif",
          "bilder/2007/1011.gif",
          "bilder/2007/1014.gif",
          "bilder/2007/1013.gif",
          "bilder/2007/1013.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2007_w2a.html"
      },
      {
        "id": "2007-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2007/563.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2007_w2b.html"
      },
      {
        "id": "2007-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2007/620.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2007_w3a.html"
      },
      {
        "id": "2007-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2007/698.gif",
          "bilder/2007/699.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2007_w3b.html"
      },
      {
        "id": "2007-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2007/756.gif",
          "bilder/2007/757.gif",
          "bilder/2007/762.gif",
          "bilder/2007/763.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2007_w4a.html"
      },
      {
        "id": "2007-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2007/812.gif",
          "bilder/2007/813.gif",
          "bilder/2007/814.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2007_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2007_w4b.html"
      }
    ]
  },
  {
    "year": 2006,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 4 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2006-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2006_uebersicht.html"
      },
      {
        "id": "2006-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2006/001.gif",
          "bilder/2006/002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p1.html",
        "taskUrl": "http://www.walterbauer.net/2006_p1.html"
      },
      {
        "id": "2006-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2006/044.gif",
          "bilder/2006/045.gif",
          "bilder/2006/046.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p2.html",
        "taskUrl": "http://www.walterbauer.net/2006_p2.html"
      },
      {
        "id": "2006-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2006/103.gif",
          "bilder/2006/104.gif",
          "bilder/2006/105.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p3.html",
        "taskUrl": "http://www.walterbauer.net/2006_p3.html"
      },
      {
        "id": "2006-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2006/167.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p4.html",
        "taskUrl": "http://www.walterbauer.net/2006_p4.html"
      },
      {
        "id": "2006-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2006/212.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p5.html",
        "taskUrl": "http://www.walterbauer.net/2006_p5.html"
      },
      {
        "id": "2006-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2006/245.gif",
          "bilder/2006/246.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p6.html",
        "taskUrl": "http://www.walterbauer.net/2006_p6.html"
      },
      {
        "id": "2006-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p7.html",
        "taskUrl": "http://www.walterbauer.net/2006_p7.html"
      },
      {
        "id": "2006-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [
          "bilder/2006/306.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_p8.html",
        "taskUrl": "http://www.walterbauer.net/2006_p8.html"
      },
      {
        "id": "2006-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2006/328.gif",
          "bilder/2006/329.gif",
          "bilder/2006/330.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2006_w1a.html"
      },
      {
        "id": "2006-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2006/406.gif",
          "bilder/2006/407.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2006_w1b.html"
      },
      {
        "id": "2006-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2006/469.gif",
          "bilder/2006/470.gif",
          "bilder/2006/471.gif",
          "bilder/2006/472.gif",
          "bilder/2006/473.gif",
          "bilder/2006/470.gif",
          "bilder/2006/473.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2006_w2a.html"
      },
      {
        "id": "2006-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2006/560.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2006_w2b.html"
      },
      {
        "id": "2006-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2006/620.gif",
          "bilder/2006/621.gif",
          "bilder/2006/619.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2006_w3a.html"
      },
      {
        "id": "2006-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2006/706.gif",
          "bilder/2006/707.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2006_w3b.html"
      },
      {
        "id": "2006-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2006/784.gif",
          "bilder/2006/785.gif",
          "bilder/2006/786.gif",
          "bilder/2006/788.gif",
          "bilder/2006/787.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2006_w4a.html"
      },
      {
        "id": "2006-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2006/851.gif",
          "bilder/2006/852.gif",
          "bilder/2006/853.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2006_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2006_w4b.html"
      }
    ]
  },
  {
    "year": 2005,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 4 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2005-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2005_uebersicht.html"
      },
      {
        "id": "2005-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2005/2005.h1.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p1.html",
        "taskUrl": "http://www.walterbauer.net/2005_p1.html"
      },
      {
        "id": "2005-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2005/2005.h2.gif",
          "bilder/2005/aufg_p2.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p2.html",
        "taskUrl": "http://www.walterbauer.net/2005_p2.html"
      },
      {
        "id": "2005-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2005/755.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p3.html",
        "taskUrl": "http://www.walterbauer.net/2005_p3.html"
      },
      {
        "id": "2005-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2005/095.gif",
          "bilder/2005/096.gif",
          "bilder/2005/097.gif",
          "bilder/2005/098.gif",
          "bilder/2005/099.gif",
          "bilder/2005/100.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p4.html",
        "taskUrl": "http://www.walterbauer.net/2005_p4.html"
      },
      {
        "id": "2005-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2005/129.gif",
          "bilder/2005/130.gif",
          "bilder/2005/aufg_p5.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p5.html",
        "taskUrl": "http://www.walterbauer.net/2005_p5.html"
      },
      {
        "id": "2005-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2005/176.gif",
          "bilder/2005/177.gif",
          "bilder/2005/175.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p6.html",
        "taskUrl": "http://www.walterbauer.net/2005_p6.html"
      },
      {
        "id": "2005-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p7.html",
        "taskUrl": "http://www.walterbauer.net/2005_p7.html"
      },
      {
        "id": "2005-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2005/aufg_p8.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_p8.html",
        "taskUrl": "http://www.walterbauer.net/2005_p8.html"
      },
      {
        "id": "2005-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2005/272.gif",
          "bilder/2005/273.gif",
          "bilder/2005/aufg_w1a.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2005_w1a.html"
      },
      {
        "id": "2005-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2005/344.gif",
          "bilder/2005/345.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2005_w1b.html"
      },
      {
        "id": "2005-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2005/374.gif",
          "bilder/2005/375.gif",
          "bilder/2005/376.gif",
          "bilder/2005/377.gif",
          "bilder/2005/377.gif",
          "bilder/2005/378.gif",
          "bilder/2005/379.gif",
          "bilder/2005/377.gif",
          "bilder/2005/380.gif",
          "bilder/2005/380.gif",
          "bilder/2005/377.gif",
          "bilder/2005/381.gif",
          "bilder/2005/381.gif",
          "bilder/2005/378.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2005_w2a.html"
      },
      {
        "id": "2005-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2005/438.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2005_w2b.html"
      },
      {
        "id": "2005-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2005/496.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2005_w3a.html"
      },
      {
        "id": "2005-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2005/550.GIF",
          "bilder/2005/551.gif",
          "bilder/2005/552.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2005_w3b.html"
      },
      {
        "id": "2005-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2005/616.gif",
          "bilder/2005/617.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2005_w4a.html"
      },
      {
        "id": "2005-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2005/669.gif",
          "bilder/2005/671.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2005_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2005_w4b.html"
      }
    ]
  },
  {
    "year": 2004,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 4 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2004-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2004_uebersicht.html"
      },
      {
        "id": "2004-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2004/001.gif",
          "bilder/2004/002.gif",
          "bilder/2004/aufgp1.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p1.html",
        "taskUrl": "http://www.walterbauer.net/2004_p1.html"
      },
      {
        "id": "2004-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2004/003.gif",
          "bilder/2004/006.gif",
          "bilder/2004/004.gif",
          "bilder/2004/aufgp2.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p2.html",
        "taskUrl": "http://www.walterbauer.net/2004_p2.html"
      },
      {
        "id": "2004-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2004/055.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p3.html",
        "taskUrl": "http://www.walterbauer.net/2004_p3.html"
      },
      {
        "id": "2004-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2004/062.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p4.html",
        "taskUrl": "http://www.walterbauer.net/2004_p4.html"
      },
      {
        "id": "2004-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/2004/108.gif",
          "bilder/2004/109.gif",
          "bilder/2004/110.gif",
          "bilder/2004/aufgp5.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p5.html",
        "taskUrl": "http://www.walterbauer.net/2004_p5.html"
      },
      {
        "id": "2004-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p6.html",
        "taskUrl": "http://www.walterbauer.net/2004_p6.html"
      },
      {
        "id": "2004-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p7.html",
        "taskUrl": "http://www.walterbauer.net/2004_p7.html"
      },
      {
        "id": "2004-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [
          "bilder/2004/aufgp8.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_p8.html",
        "taskUrl": "http://www.walterbauer.net/2004_p8.html"
      },
      {
        "id": "2004-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2004/175.gif",
          "bilder/2004/aufgw1a.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2004_w1a.html"
      },
      {
        "id": "2004-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2004/235.gif",
          "bilder/2004/236.gif",
          "bilder/2004/237.gif",
          "bilder/2004/aufgw1b.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2004_w1b.html"
      },
      {
        "id": "2004-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2004/267.gif",
          "bilder/2004/709.gif",
          "bilder/2004/710.gif",
          "bilder/2004/711.gif",
          "bilder/2004/712.gif",
          "bilder/2004/711.gif",
          "bilder/2004/712.gif",
          "bilder/2004/713.gif",
          "bilder/2004/714.gif",
          "bilder/2004/713.gif",
          "bilder/2004/715.gif",
          "bilder/2004/267.gif",
          "bilder/2004/714.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2004_w2a.html"
      },
      {
        "id": "2004-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2004/aufgw2b.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2004_w2b.html"
      },
      {
        "id": "2004-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2004/358.gif",
          "bilder/2004/359.gif",
          "bilder/2004/aufgw3a.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2004_w3a.html"
      },
      {
        "id": "2004-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2004/409.gif",
          "bilder/2004/410.gif",
          "bilder/2004/aufgw3b.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2004_w3b.html"
      },
      {
        "id": "2004-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2004/aufgw4a.gif",
          "bilder/2004/471.gif",
          "bilder/2004/472.gif",
          "bilder/2004/473.gif",
          "bilder/2004/474.gif",
          "bilder/2004/475.gif",
          "bilder/2004/476.gif",
          "bilder/2004/477.gif",
          "bilder/2004/478.gif",
          "bilder/2004/479.gif",
          "bilder/2004/480.gif",
          "bilder/2004/481.gif",
          "bilder/2004/482.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2004_w4a.html"
      },
      {
        "id": "2004-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/2004/513.gif",
          "bilder/2004/loes047.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2004_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2004_w4b.html"
      }
    ]
  },
  {
    "year": 2003,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 4 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 17,
    "tasks": [
      {
        "id": "2003-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2003_uebersicht.html"
      },
      {
        "id": "2003-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2003/aufg001.gif",
          "bilder/2003/aufg058.gif",
          "bilder/2003/aufg002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p1.html",
        "taskUrl": "http://www.walterbauer.net/2003_p1.html"
      },
      {
        "id": "2003-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p2.html",
        "taskUrl": "http://www.walterbauer.net/2003_p2.html"
      },
      {
        "id": "2003-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2003/aufg004.gif",
          "bilder/2003/aufg003.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p3.html",
        "taskUrl": "http://www.walterbauer.net/2003_p3.html"
      },
      {
        "id": "2003-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2003/aufg006.gif",
          "bilder/2003/aufg007.gif",
          "bilder/2003/aufg005.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p4.html",
        "taskUrl": "http://www.walterbauer.net/2003_p4.html"
      },
      {
        "id": "2003-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2003/aufg008.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p5.html",
        "taskUrl": "http://www.walterbauer.net/2003_p5.html"
      },
      {
        "id": "2003-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2003/aufg009.gif",
          "bilder/2003/aufg010.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p6.html",
        "taskUrl": "http://www.walterbauer.net/2003_p6.html"
      },
      {
        "id": "2003-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p7.html",
        "taskUrl": "http://www.walterbauer.net/2003_p7.html"
      },
      {
        "id": "2003-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2003/aufg011.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_p8.html",
        "taskUrl": "http://www.walterbauer.net/2003_p8.html"
      },
      {
        "id": "2003-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2003/aufg012.gif",
          "bilder/2003/aufg013.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2003_w1a.html"
      },
      {
        "id": "2003-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2003/aufg014.gif",
          "bilder/2003/aufg015.gif",
          "bilder/2003/aufg016.gif",
          "bilder/2003/aufg016.gif",
          "bilder/2003/aufg017.gif",
          "bilder/2003/aufg016.gif",
          "bilder/2003/aufg017.gif",
          "bilder/2003/aufg017.gif",
          "bilder/2003/aufg016.gif",
          "bilder/2003/aufg016.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2003_w1b.html"
      },
      {
        "id": "2003-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2003/aufg018.gif",
          "bilder/2003/aufg019.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2003_w2a.html"
      },
      {
        "id": "2003-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2003/aufg020.gif",
          "bilder/2003/aufg021.gif",
          "bilder/2003/aufg022.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2003_w2b.html"
      },
      {
        "id": "2003-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2003/222.gif",
          "bilder/2003/loes353.gif",
          "bilder/2003/228.gif",
          "bilder/2003/aufg024.gif",
          "bilder/2003/327.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2003_w3a.html"
      },
      {
        "id": "2003-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2003/aufg025.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2003_w3b.html"
      },
      {
        "id": "2003-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2003/aufg026.gif",
          "bilder/2003/aufg027.gif",
          "bilder/2003/aufg028.gif",
          "bilder/2003/aufg029.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2003_w4a.html"
      },
      {
        "id": "2003-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2003/aufg030.gif",
          "bilder/2003/aufg031.gif",
          "bilder/2003/aufg032.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2003_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2003_w4b.html"
      }
    ]
  },
  {
    "year": 2002,
    "eraId": "reform-2002",
    "eraTitle": "Prüfungsordnung 2002–2007",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 4 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 18,
    "tasks": [
      {
        "id": "2002-Lernmaterial",
        "label": "Lernmaterial",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_lernmateriel.html",
        "taskUrl": "http://www.walterbauer.net/lernmateriel.html"
      },
      {
        "id": "2002-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2002_uebersicht.html"
      },
      {
        "id": "2002-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2002/272.gif",
          "bilder/2002/aufg001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p1.html",
        "taskUrl": "http://www.walterbauer.net/2002_p1.html"
      },
      {
        "id": "2002-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2002/302.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p2.html",
        "taskUrl": "http://www.walterbauer.net/2002_p2.html"
      },
      {
        "id": "2002-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2002/aufg002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p3.html",
        "taskUrl": "http://www.walterbauer.net/2002_p3.html"
      },
      {
        "id": "2002-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2002/aufg004.gif",
          "bilder/2002/aufg005.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p4.html",
        "taskUrl": "http://www.walterbauer.net/2002_p4.html"
      },
      {
        "id": "2002-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2002/324.gif",
          "bilder/2002/aufg008.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p5.html",
        "taskUrl": "http://www.walterbauer.net/2002_p5.html"
      },
      {
        "id": "2002-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2002/aufg009.gif",
          "bilder/2002/aufg011.gif",
          "bilder/2002/aufg012.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p6.html",
        "taskUrl": "http://www.walterbauer.net/2002_p6.html"
      },
      {
        "id": "2002-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [
          "bilder/2002/aufg057.gif",
          "bilder/2002/aufg057.gif",
          "bilder/2002/aufg057.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p7.html",
        "taskUrl": "http://www.walterbauer.net/2002_p7.html"
      },
      {
        "id": "2002-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2002/aufg057.gif",
          "bilder/2002/aufg057.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_p8.html",
        "taskUrl": "http://www.walterbauer.net/2002_p8.html"
      },
      {
        "id": "2002-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2002/aufg014.gif",
          "bilder/2002/aufg018.gif",
          "bilder/2002/aufg018.gif",
          "bilder/2002/aufg019.gif",
          "bilder/2002/aufg013.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2002_w1a.html"
      },
      {
        "id": "2002-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2002/aufg020.gif",
          "bilder/2002/aufg021.gif",
          "bilder/2002/aufg022.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2002_w1b.html"
      },
      {
        "id": "2002-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2002/aufg023.gif",
          "bilder/2002/aufg024.gif",
          "bilder/2002/aufg025.gif",
          "bilder/2002/aufg026.gif",
          "bilder/2002/aufg027.gif",
          "bilder/2002/aufg028.gif",
          "bilder/2002/aufg027.gif",
          "bilder/2002/aufg028.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2002_w2a.html"
      },
      {
        "id": "2002-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2002/aufg029.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2002_w2b.html"
      },
      {
        "id": "2002-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/2002/aufg030.gif",
          "bilder/2002/aufg032.gif",
          "bilder/2002/aufg032.gif",
          "bilder/2002/aufg033.gif",
          "bilder/2002/aufg034.gif",
          "bilder/2002/aufg035.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2002_w3a.html"
      },
      {
        "id": "2002-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/2002/aufg036.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2002_w3b.html"
      },
      {
        "id": "2002-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen.",
        "images": [
          "bilder/2002/aufg041.gif",
          "bilder/2002/aufg037.gif",
          "bilder/2002/aufg038.gif",
          "bilder/2002/aufg039.gif",
          "bilder/2002/aufg042.gif",
          "bilder/2002/aufg043.gif",
          "bilder/2002/aufg044.gif",
          "bilder/2002/aufg045.gif",
          "bilder/2002/aufg046.gif",
          "bilder/2002/aufg047.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w4a.html",
        "taskUrl": "http://www.walterbauer.net/2002_w4a.html"
      },
      {
        "id": "2002-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/2002/aufg048.gif",
          "bilder/2002/aufg049.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2002_w4b.html",
        "taskUrl": "http://www.walterbauer.net/2002_w4b.html"
      }
    ]
  },
  {
    "year": 2001,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 3 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 15,
    "tasks": [
      {
        "id": "2001-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2001_uebersicht.html"
      },
      {
        "id": "2001-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p1.html",
        "taskUrl": "http://www.walterbauer.net/2001_p1.html"
      },
      {
        "id": "2001-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p2.html",
        "taskUrl": "http://www.walterbauer.net/2001_p2.html"
      },
      {
        "id": "2001-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2001/aufg001.gif",
          "bilder/2001/aufg002.gif",
          "bilder/2001/aufg003.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p3.html",
        "taskUrl": "http://www.walterbauer.net/2001_p3.html"
      },
      {
        "id": "2001-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2001/aufg004.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p4.html",
        "taskUrl": "http://www.walterbauer.net/2001_p4.html"
      },
      {
        "id": "2001-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2001/aufg005.gif",
          "bilder/2001/aufg008.gif",
          "bilder/2001/aufg009.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p5.html",
        "taskUrl": "http://www.walterbauer.net/2001_p5.html"
      },
      {
        "id": "2001-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/2001/aufg010.gif",
          "bilder/2001/aufg011.gif",
          "bilder/2001/aufg012.gif",
          "bilder/2001/aufg013.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p6.html",
        "taskUrl": "http://www.walterbauer.net/2001_p6.html"
      },
      {
        "id": "2001-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p7.html",
        "taskUrl": "http://www.walterbauer.net/2001_p7.html"
      },
      {
        "id": "2001-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_p8.html",
        "taskUrl": "http://www.walterbauer.net/2001_p8.html"
      },
      {
        "id": "2001-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/2001/aufg014.gif",
          "bilder/2001/aufg017.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2001_w1a.html"
      },
      {
        "id": "2001-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2001/aufg018.gif",
          "bilder/2001/aufg019.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2001_w1b.html"
      },
      {
        "id": "2001-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2001/aufg020.gif",
          "bilder/2001/aufg024.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2001_w2a.html"
      },
      {
        "id": "2001-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2001/aufg025.gif",
          "bilder/2001/aufg028.gif",
          "bilder/2001/aufg029.gif",
          "bilder/2001/aufg030.gif",
          "bilder/2001/aufg031.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2001_w2b.html"
      },
      {
        "id": "2001-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2001/544.gif",
          "bilder/2001/545.gif",
          "bilder/2001/aufg034.gif",
          "bilder/2001/aufg035.gif",
          "bilder/2001/aufg036.gif",
          "bilder/2001/aufg037.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2001_w3a.html"
      },
      {
        "id": "2001-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2001/782.gif",
          "bilder/2001/aufg038.gif",
          "bilder/2001/aufg039.gif",
          "bilder/2001/782.gif",
          "bilder/2001/783.gif",
          "bilder/2001/aufg040.gif",
          "bilder/2001/784.gif",
          "bilder/2001/783.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2001_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2001_w3b.html"
      }
    ]
  },
  {
    "year": 2000,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 3 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 15,
    "tasks": [
      {
        "id": "2000-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/2000_uebersicht.html"
      },
      {
        "id": "2000-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/2000/aufg001.gif",
          "bilder/2000/z001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p1.html",
        "taskUrl": "http://www.walterbauer.net/2000_p1.html"
      },
      {
        "id": "2000-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p2.html",
        "taskUrl": "http://www.walterbauer.net/2000_p2.html"
      },
      {
        "id": "2000-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2000/aufg003.gif",
          "bilder/2000/aufg006.gif",
          "bilder/2000/z002.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p3.html",
        "taskUrl": "http://www.walterbauer.net/2000_p3.html"
      },
      {
        "id": "2000-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2000/aufg007.gif",
          "bilder/2000/724.gif",
          "bilder/2000/724.gif",
          "bilder/2000/z003.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p4.html",
        "taskUrl": "http://www.walterbauer.net/2000_p4.html"
      },
      {
        "id": "2000-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/2000/aufg009.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p5.html",
        "taskUrl": "http://www.walterbauer.net/2000_p5.html"
      },
      {
        "id": "2000-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2000/aufg010.gif",
          "bilder/2000/aufg011.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p6.html",
        "taskUrl": "http://www.walterbauer.net/2000_p6.html"
      },
      {
        "id": "2000-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p7.html",
        "taskUrl": "http://www.walterbauer.net/2000_p7.html"
      },
      {
        "id": "2000-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [
          "bilder/2000/z006.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_p8.html",
        "taskUrl": "http://www.walterbauer.net/2000_p8.html"
      },
      {
        "id": "2000-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/2000/235.gif",
          "bilder/2000/235a.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_w1a.html",
        "taskUrl": "http://www.walterbauer.net/2000_w1a.html"
      },
      {
        "id": "2000-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz.",
        "images": [
          "bilder/2000/289.gif",
          "bilder/2000/290.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_w1b.html",
        "taskUrl": "http://www.walterbauer.net/2000_w1b.html"
      },
      {
        "id": "2000-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/2000/350.gif",
          "bilder/2000/351.gif",
          "bilder/2000/352.gif",
          "bilder/2000/353.gif",
          "bilder/2000/348.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_w2a.html",
        "taskUrl": "http://www.walterbauer.net/2000_w2a.html"
      },
      {
        "id": "2000-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/2000/482.gif",
          "bilder/2000/481.GIF"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_w2b.html",
        "taskUrl": "http://www.walterbauer.net/2000_w2b.html"
      },
      {
        "id": "2000-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/2000/780.gif",
          "bilder/2000/572.gif",
          "bilder/2000/573.gif",
          "bilder/2000/780.gif",
          "bilder/2000/781.gif",
          "bilder/2000/574.gif",
          "bilder/2000/574.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_w3a.html",
        "taskUrl": "http://www.walterbauer.net/2000_w3a.html"
      },
      {
        "id": "2000-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/2000/648.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_2000_w3b.html",
        "taskUrl": "http://www.walterbauer.net/2000_w3b.html"
      }
    ]
  },
  {
    "year": 1999,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 3 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 15,
    "tasks": [
      {
        "id": "1999-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1999_uebersicht.html"
      },
      {
        "id": "1999-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/1999/aufg001.gif",
          "bilder/1999/bild01.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p1.html",
        "taskUrl": "http://www.walterbauer.net/1999_p1.html"
      },
      {
        "id": "1999-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p2.html",
        "taskUrl": "http://www.walterbauer.net/1999_p2.html"
      },
      {
        "id": "1999-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1999/aufg004.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p3.html",
        "taskUrl": "http://www.walterbauer.net/1999_p3.html"
      },
      {
        "id": "1999-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1999/aufg005.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p4.html",
        "taskUrl": "http://www.walterbauer.net/1999_p4.html"
      },
      {
        "id": "1999-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1999/aufg006.gif",
          "bilder/1999/052.gif",
          "bilder/1999/aufg010.gif",
          "bilder/1999/aufg011.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p5.html",
        "taskUrl": "http://www.walterbauer.net/1999_p5.html"
      },
      {
        "id": "1999-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1999/aufg015.gif",
          "bilder/1999/aufg019.gif",
          "bilder/1999/aufg020.gif",
          "bilder/1999/aufg014.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p6.html",
        "taskUrl": "http://www.walterbauer.net/1999_p6.html"
      },
      {
        "id": "1999-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p7.html",
        "taskUrl": "http://www.walterbauer.net/1999_p7.html"
      },
      {
        "id": "1999-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_p8.html",
        "taskUrl": "http://www.walterbauer.net/1999_p8.html"
      },
      {
        "id": "1999-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1999/aufg024.gif",
          "bilder/1999/aufg023.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_w1a.html",
        "taskUrl": "http://www.walterbauer.net/1999_w1a.html"
      },
      {
        "id": "1999-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1999/097.gif",
          "bilder/1999/aufg029.gif",
          "bilder/1999/aufg030.gif",
          "bilder/1999/bild04.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_w1b.html",
        "taskUrl": "http://www.walterbauer.net/1999_w1b.html"
      },
      {
        "id": "1999-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1999/aufg031.gif",
          "bilder/1999/aufg032.gif",
          "bilder/1999/121.gif",
          "bilder/1999/aufg033.gif",
          "bilder/1999/aufg031.gif",
          "bilder/1999/121.gif",
          "bilder/1999/aufg031.gif",
          "bilder/1999/121.gif",
          "bilder/1999/aufg034.gif",
          "bilder/1999/aufg034.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_w2a.html",
        "taskUrl": "http://www.walterbauer.net/1999_w2a.html"
      },
      {
        "id": "1999-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1999/aufg035.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_w2b.html",
        "taskUrl": "http://www.walterbauer.net/1999_w2b.html"
      },
      {
        "id": "1999-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1999/aufg036.gif",
          "bilder/1999/aufg037.gif",
          "bilder/1999/152.gif",
          "bilder/1999/bild08.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_w3a.html",
        "taskUrl": "http://www.walterbauer.net/1999_w3a.html"
      },
      {
        "id": "1999-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/1999/aufg041.gif",
          "bilder/1999/aufg042.gif",
          "bilder/1999/aufg040.gif",
          "bilder/1999/194.gif",
          "bilder/1999/197.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1999_w3b.html",
        "taskUrl": "http://www.walterbauer.net/1999_w3b.html"
      }
    ]
  },
  {
    "year": 1998,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 3 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 15,
    "tasks": [
      {
        "id": "1998-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1998_uebersicht.html"
      },
      {
        "id": "1998-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1998/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p1.html",
        "taskUrl": "http://www.walterbauer.net/1998_p1.html"
      },
      {
        "id": "1998-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen.",
        "images": [
          "bilder/1998/0038.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p2.html",
        "taskUrl": "http://www.walterbauer.net/1998_p2.html"
      },
      {
        "id": "1998-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/1998/0060.gif",
          "bilder/1998/0063.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p3.html",
        "taskUrl": "http://www.walterbauer.net/1998_p3.html"
      },
      {
        "id": "1998-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/1998/0099.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p4.html",
        "taskUrl": "http://www.walterbauer.net/1998_p4.html"
      },
      {
        "id": "1998-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1998/0142.gif",
          "bilder/1998/0143.gif",
          "bilder/1998/0144.gif",
          "bilder/1998/0145.gif",
          "bilder/1998/0141.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p5.html",
        "taskUrl": "http://www.walterbauer.net/1998_p5.html"
      },
      {
        "id": "1998-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1998/0176.gif",
          "bilder/1998/0177.gif",
          "bilder/1998/0180.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p6.html",
        "taskUrl": "http://www.walterbauer.net/1998_p6.html"
      },
      {
        "id": "1998-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p7.html",
        "taskUrl": "http://www.walterbauer.net/1998_p7.html"
      },
      {
        "id": "1998-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_p8.html",
        "taskUrl": "http://www.walterbauer.net/1998_p8.html"
      },
      {
        "id": "1998-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/1998/0238.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_w1a.html",
        "taskUrl": "http://www.walterbauer.net/1998_w1a.html"
      },
      {
        "id": "1998-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1998/0302.gif",
          "bilder/1998/0303.gif",
          "bilder/1998/0301.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_w1b.html",
        "taskUrl": "http://www.walterbauer.net/1998_w1b.html"
      },
      {
        "id": "1998-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1998/0369.gif",
          "bilder/1998/0371.gif",
          "bilder/1998/0372.gif",
          "bilder/1998/0373.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_w2a.html",
        "taskUrl": "http://www.walterbauer.net/1998_w2a.html"
      },
      {
        "id": "1998-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1998/0448.gif",
          "bilder/1998/0449.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_w2b.html",
        "taskUrl": "http://www.walterbauer.net/1998_w2b.html"
      },
      {
        "id": "1998-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1998/0495.gif",
          "bilder/1998/0496.gif",
          "bilder/1998/0497.gif",
          "bilder/1998/0498.gif",
          "bilder/1998/0499.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_w3a.html",
        "taskUrl": "http://www.walterbauer.net/1998_w3a.html"
      },
      {
        "id": "1998-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1998/0565.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1998_w3b.html",
        "taskUrl": "http://www.walterbauer.net/1998_w3b.html"
      }
    ]
  },
  {
    "year": 1997,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 3 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 15,
    "tasks": [
      {
        "id": "1997-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1997_uebersicht.html"
      },
      {
        "id": "1997-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M.",
        "images": [
          "bilder/1997/0002.gif",
          "bilder/1997/0003.gif",
          "bilder/1997/0004.gif",
          "bilder/1997/0005.gif",
          "bilder/1997/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p1.html",
        "taskUrl": "http://www.walterbauer.net/1997_p1.html"
      },
      {
        "id": "1997-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/1997/0038.gif",
          "bilder/1997/0039.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p2.html",
        "taskUrl": "http://www.walterbauer.net/1997_p2.html"
      },
      {
        "id": "1997-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1997/0070.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p3.html",
        "taskUrl": "http://www.walterbauer.net/1997_p3.html"
      },
      {
        "id": "1997-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1997/0103.gif",
          "bilder/1997/0104.gif",
          "bilder/1997/0103.gif",
          "bilder/1997/0105.gif",
          "bilder/1997/0106.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p4.html",
        "taskUrl": "http://www.walterbauer.net/1997_p4.html"
      },
      {
        "id": "1997-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1997/0133.gif",
          "bilder/1997/0134.gif",
          "bilder/1997/0135.gif",
          "bilder/1997/0136.gif",
          "bilder/1997/0137.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p5.html",
        "taskUrl": "http://www.walterbauer.net/1997_p5.html"
      },
      {
        "id": "1997-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1997/0179.gif",
          "bilder/1997/0180.gif",
          "bilder/1997/0181.gif",
          "bilder/1997/0182.gif",
          "bilder/1997/0183.gif",
          "bilder/1997/0184.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p6.html",
        "taskUrl": "http://www.walterbauer.net/1997_p6.html"
      },
      {
        "id": "1997-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p7.html",
        "taskUrl": "http://www.walterbauer.net/1997_p7.html"
      },
      {
        "id": "1997-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_p8.html",
        "taskUrl": "http://www.walterbauer.net/1997_p8.html"
      },
      {
        "id": "1997-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1997/0204.gif",
          "bilder/1997/0207.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_w1a.html",
        "taskUrl": "http://www.walterbauer.net/1997_w1a.html"
      },
      {
        "id": "1997-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1997/0264.gif",
          "bilder/1997/0263.gif",
          "bilder/1997/0265.gif",
          "bilder/1997/0266.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_w1b.html",
        "taskUrl": "http://www.walterbauer.net/1997_w1b.html"
      },
      {
        "id": "1997-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1997/0346.gif",
          "bilder/1997/0347.gif",
          "bilder/1997/0348.gif",
          "bilder/1997/0349.gif",
          "bilder/1997/0350.gif",
          "bilder/1997/0351.gif",
          "bilder/1997/0347.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_w2a.html",
        "taskUrl": "http://www.walterbauer.net/1997_w2a.html"
      },
      {
        "id": "1997-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1997/0412.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_w2b.html",
        "taskUrl": "http://www.walterbauer.net/1997_w2b.html"
      },
      {
        "id": "1997-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/1997/0464.gif",
          "bilder/1997/0465.gif",
          "bilder/1997/0466.gif",
          "bilder/1997/0467.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_w3a.html",
        "taskUrl": "http://www.walterbauer.net/1997_w3a.html"
      },
      {
        "id": "1997-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1997/0538.gif",
          "bilder/1997/0539.gif",
          "bilder/1997/0540.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1997_w3b.html",
        "taskUrl": "http://www.walterbauer.net/1997_w3b.html"
      }
    ]
  },
  {
    "year": 1996,
    "eraId": "reform-1996",
    "eraTitle": "Prüfungsordnung 1996–2001",
    "points": 33,
    "duration": "210 Minuten",
    "structure": "Pflichtbereich (17 P) · Wahlbereich mit 3 Aufgaben (2 gewählt, 16 P)",
    "badgeColor": "blue",
    "taskCount": 15,
    "tasks": [
      {
        "id": "1996-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1996_uebersicht.html"
      },
      {
        "id": "1996-p1",
        "label": "p1",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r².",
        "images": [
          "bilder/1996/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p1.html",
        "taskUrl": "http://www.walterbauer.net/1996_p1.html"
      },
      {
        "id": "1996-p2",
        "label": "p2",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1996/0042.gif",
          "bilder/1996/0043.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p2.html",
        "taskUrl": "http://www.walterbauer.net/1996_p2.html"
      },
      {
        "id": "1996-p3",
        "label": "p3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1996/0068.gif",
          "bilder/1996/0647.gif",
          "bilder/1996/0070.gif",
          "bilder/1996/0071.gif",
          "bilder/1996/0072.gif",
          "bilder/1996/0076.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p3.html",
        "taskUrl": "http://www.walterbauer.net/1996_p3.html"
      },
      {
        "id": "1996-p4",
        "label": "p4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1996/0122.gif",
          "bilder/1996/0123.gif",
          "bilder/1996/0124.gif",
          "bilder/1996/0125.gif",
          "bilder/1996/0126.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p4.html",
        "taskUrl": "http://www.walterbauer.net/1996_p4.html"
      },
      {
        "id": "1996-p5",
        "label": "p5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1996/0132.gif",
          "bilder/1996/0133.gif",
          "bilder/1996/0134.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p5.html",
        "taskUrl": "http://www.walterbauer.net/1996_p5.html"
      },
      {
        "id": "1996-p6",
        "label": "p6",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1996/0154.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p6.html",
        "taskUrl": "http://www.walterbauer.net/1996_p6.html"
      },
      {
        "id": "1996-p7",
        "label": "p7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p7.html",
        "taskUrl": "http://www.walterbauer.net/1996_p7.html"
      },
      {
        "id": "1996-p8",
        "label": "p8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_p8.html",
        "taskUrl": "http://www.walterbauer.net/1996_p8.html"
      },
      {
        "id": "1996-w1a",
        "label": "w1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1996/0229.gif",
          "bilder/1996/0230.gif",
          "bilder/1996/0231.gif",
          "bilder/1996/0232.gif",
          "bilder/1996/0233.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_w1a.html",
        "taskUrl": "http://www.walterbauer.net/1996_w1a.html"
      },
      {
        "id": "1996-w1b",
        "label": "w1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1996/0303.gif",
          "bilder/1996/0304.gif",
          "bilder/1996/0305.gif",
          "bilder/1996/0306.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_w1b.html",
        "taskUrl": "http://www.walterbauer.net/1996_w1b.html"
      },
      {
        "id": "1996-w2a",
        "label": "w2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1996/0361.gif",
          "bilder/1996/0362.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_w2a.html",
        "taskUrl": "http://www.walterbauer.net/1996_w2a.html"
      },
      {
        "id": "1996-w2b",
        "label": "w2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1996/0426.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_w2b.html",
        "taskUrl": "http://www.walterbauer.net/1996_w2b.html"
      },
      {
        "id": "1996-w3a",
        "label": "w3a",
        "section": "Wahlbereich W",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/1996/0479.gif",
          "bilder/1996/0478.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_w3a.html",
        "taskUrl": "http://www.walterbauer.net/1996_w3a.html"
      },
      {
        "id": "1996-w3b",
        "label": "w3b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1996/0580.gif",
          "bilder/1996/0581.gif",
          "bilder/1996/0582.gif",
          "bilder/1996/0583.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1996_w3b.html",
        "taskUrl": "http://www.walterbauer.net/1996_w3b.html"
      }
    ]
  },
  {
    "year": 1995,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "duration": "180 Minuten",
    "structure": "6 Aufgabenkomplexe mit jeweils Teilaufgaben (a, b, c)",
    "badgeColor": "slate",
    "taskCount": 19,
    "tasks": [
      {
        "id": "1995-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1995_uebersicht.html"
      },
      {
        "id": "1995-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/1995/0002.gif",
          "bilder/1995/0003.gif",
          "bilder/1995/0004.gif",
          "bilder/1995/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_1a.html",
        "taskUrl": "http://www.walterbauer.net/1995_1a.html"
      },
      {
        "id": "1995-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/1995/0078.gif",
          "bilder/1995/0079.gif",
          "bilder/1995/0077.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_1b.html",
        "taskUrl": "http://www.walterbauer.net/1995_1b.html"
      },
      {
        "id": "1995-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1995/0170.gif",
          "bilder/1995/0169.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_1c.html",
        "taskUrl": "http://www.walterbauer.net/1995_1c.html"
      },
      {
        "id": "1995-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1995/0228.gif",
          "bilder/1995/0229.gif",
          "bilder/1995/0230.gif",
          "bilder/1995/0231.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_2a.html",
        "taskUrl": "http://www.walterbauer.net/1995_2a.html"
      },
      {
        "id": "1995-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1995/0290.gif",
          "bilder/1995/0291.gif",
          "bilder/1995/0292.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_2b.html",
        "taskUrl": "http://www.walterbauer.net/1995_2b.html"
      },
      {
        "id": "1995-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1995/0347.gif",
          "bilder/1995/0348.gif",
          "bilder/1995/0349.gif",
          "bilder/1995/0346.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_2c.html",
        "taskUrl": "http://www.walterbauer.net/1995_2c.html"
      },
      {
        "id": "1995-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1995/0393.gif",
          "bilder/1995/0394.gif",
          "bilder/1995/0395.gif",
          "bilder/1995/0396.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_3a.html",
        "taskUrl": "http://www.walterbauer.net/1995_3a.html"
      },
      {
        "id": "1995-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1995/0438.gif",
          "bilder/1995/0439.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_3b.html",
        "taskUrl": "http://www.walterbauer.net/1995_3b.html"
      },
      {
        "id": "1995-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1995/0493.gif",
          "bilder/1995/0494.gif",
          "bilder/1995/0495.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_3c.html",
        "taskUrl": "http://www.walterbauer.net/1995_3c.html"
      },
      {
        "id": "1995-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1995/0552.gif",
          "bilder/1995/0553.gif",
          "bilder/1995/0554.gif",
          "bilder/1995/0555.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_4a.html",
        "taskUrl": "http://www.walterbauer.net/1995_4a.html"
      },
      {
        "id": "1995-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1995/0607.gif",
          "bilder/1995/0608.gif",
          "bilder/1995/0609.gif",
          "bilder/1995/0610.gif",
          "bilder/1995/0609.gif",
          "bilder/1995/0611.gif",
          "bilder/1995/0612.gif",
          "bilder/1995/0609.gif",
          "bilder/1995/0613.gif",
          "bilder/1995/0609.gif",
          "bilder/1995/0614.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_4b.html",
        "taskUrl": "http://www.walterbauer.net/1995_4b.html"
      },
      {
        "id": "1995-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1995/0664.gif",
          "bilder/1995/0667.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_4c.html",
        "taskUrl": "http://www.walterbauer.net/1995_4c.html"
      },
      {
        "id": "1995-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_5a.html",
        "taskUrl": "http://www.walterbauer.net/1995_5a.html"
      },
      {
        "id": "1995-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_5b.html",
        "taskUrl": "http://www.walterbauer.net/1995_5b.html"
      },
      {
        "id": "1995-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1995/0729.gif",
          "bilder/1995/0730.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_5c.html",
        "taskUrl": "http://www.walterbauer.net/1995_5c.html"
      },
      {
        "id": "1995-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1995/0750.gif",
          "bilder/1995/0751.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_6a.html",
        "taskUrl": "http://www.walterbauer.net/1995_6a.html"
      },
      {
        "id": "1995-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1995/0815.gif",
          "bilder/1995/0816.gif",
          "bilder/1995/0817.gif",
          "bilder/1995/0818.gif",
          "bilder/1995/0819.gif",
          "bilder/1995/0820.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_6b.html",
        "taskUrl": "http://www.walterbauer.net/1995_6b.html"
      },
      {
        "id": "1995-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden.",
        "images": [
          "bilder/1995/0861.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1995_6c.html",
        "taskUrl": "http://www.walterbauer.net/1995_6c.html"
      }
    ]
  },
  {
    "year": 1994,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "duration": "180 Minuten",
    "structure": "6 Aufgabenkomplexe mit jeweils Teilaufgaben (a, b, c)",
    "badgeColor": "slate",
    "taskCount": 19,
    "tasks": [
      {
        "id": "1994-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1990_uebersicht.html"
      },
      {
        "id": "1994-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_1a.html",
        "taskUrl": "http://www.walterbauer.net/1994_1a.html"
      },
      {
        "id": "1994-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_1b.html",
        "taskUrl": "http://www.walterbauer.net/1994_1b.html"
      },
      {
        "id": "1994-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_1c.html",
        "taskUrl": "http://www.walterbauer.net/1994_1c.html"
      },
      {
        "id": "1994-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_2a.html",
        "taskUrl": "http://www.walterbauer.net/1994_2a.html"
      },
      {
        "id": "1994-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_2b.html",
        "taskUrl": "http://www.walterbauer.net/1994_2b.html"
      },
      {
        "id": "1994-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_2c.html",
        "taskUrl": "http://www.walterbauer.net/1994_2c.html"
      },
      {
        "id": "1994-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_3a.html",
        "taskUrl": "http://www.walterbauer.net/1994_3a.html"
      },
      {
        "id": "1994-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_3b.html",
        "taskUrl": "http://www.walterbauer.net/1994_3b.html"
      },
      {
        "id": "1994-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_3c.html",
        "taskUrl": "http://www.walterbauer.net/1994_3c.html"
      },
      {
        "id": "1994-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_4a.html",
        "taskUrl": "http://www.walterbauer.net/1994_4a.html"
      },
      {
        "id": "1994-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_4b.html",
        "taskUrl": "http://www.walterbauer.net/1994_4b.html"
      },
      {
        "id": "1994-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_4c.html",
        "taskUrl": "http://www.walterbauer.net/1994_4c.html"
      },
      {
        "id": "1994-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_5a.html",
        "taskUrl": "http://www.walterbauer.net/1994_5a.html"
      },
      {
        "id": "1994-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_5b.html",
        "taskUrl": "http://www.walterbauer.net/1994_5b.html"
      },
      {
        "id": "1994-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_5c.html",
        "taskUrl": "http://www.walterbauer.net/1994_5c.html"
      },
      {
        "id": "1994-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_6a.html",
        "taskUrl": "http://www.walterbauer.net/1994_6a.html"
      },
      {
        "id": "1994-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_6b.html",
        "taskUrl": "http://www.walterbauer.net/1994_6b.html"
      },
      {
        "id": "1994-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1994_6c.html",
        "taskUrl": "http://www.walterbauer.net/1994_6c.html"
      }
    ]
  },
  {
    "year": 1993,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "duration": "180 Minuten",
    "structure": "6 Aufgabenkomplexe mit jeweils Teilaufgaben (a, b, c)",
    "badgeColor": "slate",
    "taskCount": 19,
    "tasks": [
      {
        "id": "1993-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1993_uebersicht.html"
      },
      {
        "id": "1993-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/1993/0002.gif",
          "bilder/1993/0003.gif",
          "bilder/1993/0004.gif",
          "bilder/1993/0005.gif",
          "bilder/1993/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_1a.html",
        "taskUrl": "http://www.walterbauer.net/1993_1a.html"
      },
      {
        "id": "1993-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/1993/0048.gif",
          "bilder/1993/0003.gif",
          "bilder/1993/0047.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_1b.html",
        "taskUrl": "http://www.walterbauer.net/1993_1b.html"
      },
      {
        "id": "1993-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1993/0099.gif",
          "bilder/1993/0100.gif",
          "bilder/1993/0047.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_1c.html",
        "taskUrl": "http://www.walterbauer.net/1993_1c.html"
      },
      {
        "id": "1993-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1993/0137.gif",
          "bilder/1993/0138.gif",
          "bilder/1993/0139.gif",
          "bilder/1993/0140.gif",
          "bilder/1993/0143.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_2a.html",
        "taskUrl": "http://www.walterbauer.net/1993_2a.html"
      },
      {
        "id": "1993-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1993/0177.gif",
          "bilder/1993/0143.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_2b.html",
        "taskUrl": "http://www.walterbauer.net/1993_2b.html"
      },
      {
        "id": "1993-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1993/0226.gif",
          "bilder/1993/0227.gif",
          "bilder/1993/0228.gif",
          "bilder/1993/0227.gif",
          "bilder/1993/0143.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_2c.html",
        "taskUrl": "http://www.walterbauer.net/1993_2c.html"
      },
      {
        "id": "1993-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a/sin(α) = b/sin(β) = c/sin(γ). Einsetzbar wenn eine Seite und der gegenüberliegende Winkel bekannt sind.",
        "images": [
          "bilder/1993/0268.gif",
          "bilder/1993/0271.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_3a.html",
        "taskUrl": "http://www.walterbauer.net/1993_3a.html"
      },
      {
        "id": "1993-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1993/0318.gif",
          "bilder/1993/0319.gif",
          "bilder/1993/0316.gif",
          "bilder/1993/0317.gif",
          "bilder/1993/0323.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_3b.html",
        "taskUrl": "http://www.walterbauer.net/1993_3b.html"
      },
      {
        "id": "1993-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1993/0367.gif",
          "bilder/1993/0366.gif",
          "bilder/1993/0370.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_3c.html",
        "taskUrl": "http://www.walterbauer.net/1993_3c.html"
      },
      {
        "id": "1993-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1993/0404.gif",
          "bilder/1993/0405.gif",
          "bilder/1993/0406.gif",
          "bilder/1993/0407.gif",
          "bilder/1993/0408.gif",
          "bilder/1993/0409.gif",
          "bilder/1993/0403.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_4a.html",
        "taskUrl": "http://www.walterbauer.net/1993_4a.html"
      },
      {
        "id": "1993-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1993/0462.gif",
          "bilder/1993/0463.gif",
          "bilder/1993/0464.gif",
          "bilder/1993/0463.gif",
          "bilder/1993/0465.gif",
          "bilder/1993/0466.gif",
          "bilder/1993/0467.gif",
          "bilder/1993/0468.gif",
          "bilder/1993/0464.gif",
          "bilder/1993/0463.gif",
          "bilder/1993/0469.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_4b.html",
        "taskUrl": "http://www.walterbauer.net/1993_4b.html"
      },
      {
        "id": "1993-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1993/0488.gif",
          "bilder/1993/0489.gif",
          "bilder/1993/0492.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_4c.html",
        "taskUrl": "http://www.walterbauer.net/1993_4c.html"
      },
      {
        "id": "1993-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_5a.html",
        "taskUrl": "http://www.walterbauer.net/1993_5a.html"
      },
      {
        "id": "1993-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_5b.html",
        "taskUrl": "http://www.walterbauer.net/1993_5b.html"
      },
      {
        "id": "1993-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_5c.html",
        "taskUrl": "http://www.walterbauer.net/1993_5c.html"
      },
      {
        "id": "1993-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_6a.html",
        "taskUrl": "http://www.walterbauer.net/1993_6a.html"
      },
      {
        "id": "1993-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_6b.html",
        "taskUrl": "http://www.walterbauer.net/1993_6b.html"
      },
      {
        "id": "1993-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1993_6c.html",
        "taskUrl": "http://www.walterbauer.net/1993_6c.html"
      }
    ]
  },
  {
    "year": 1992,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "duration": "180 Minuten",
    "structure": "6 Aufgabenkomplexe mit jeweils Teilaufgaben (a, b, c)",
    "badgeColor": "slate",
    "taskCount": 19,
    "tasks": [
      {
        "id": "1992-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1992_uebersicht.html"
      },
      {
        "id": "1992-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1992/0002.gif",
          "bilder/1992/0003.gif",
          "bilder/1992/0004.gif",
          "bilder/1992/0005.gif",
          "bilder/1992/0006.gif",
          "bilder/1992/0007.gif",
          "bilder/1992/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_1a.html",
        "taskUrl": "http://www.walterbauer.net/1992_1a.html"
      },
      {
        "id": "1992-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1992/0002.gif",
          "bilder/1992/0043.gif",
          "bilder/1992/0044.gif",
          "bilder/1992/0045.gif",
          "bilder/1992/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_1b.html",
        "taskUrl": "http://www.walterbauer.net/1992_1b.html"
      },
      {
        "id": "1992-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1992/0092.gif",
          "bilder/1992/0093.gif",
          "bilder/1992/0001.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_1c.html",
        "taskUrl": "http://www.walterbauer.net/1992_1c.html"
      },
      {
        "id": "1992-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1992/0132.gif",
          "bilder/1992/0133.gif",
          "bilder/1992/0134.gif",
          "bilder/1992/0135.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_2a.html",
        "taskUrl": "http://www.walterbauer.net/1992_2a.html"
      },
      {
        "id": "1992-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1992/0171.gif",
          "bilder/1992/0172gif.gif",
          "bilder/1992/0173.gif",
          "bilder/1992/0174.gif",
          "bilder/1992/0175.gif",
          "bilder/1992/0173.gif",
          "bilder/1992/0176.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_2b.html",
        "taskUrl": "http://www.walterbauer.net/1992_2b.html"
      },
      {
        "id": "1992-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1992/0218.gif",
          "bilder/1992/0219.gif",
          "bilder/1992/0220.gif",
          "bilder/1992/0221.gif",
          "bilder/1992/0224.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_2c.html",
        "taskUrl": "http://www.walterbauer.net/1992_2c.html"
      },
      {
        "id": "1992-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1992/0258.gif",
          "bilder/1992/0259.gif",
          "bilder/1992/0260.gif",
          "bilder/1992/0261.gif",
          "bilder/1992/0262.gif",
          "bilder/1992/0263.gif",
          "bilder/1992/0264.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_3a.html",
        "taskUrl": "http://www.walterbauer.net/1992_3a.html"
      },
      {
        "id": "1992-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1992/0321.gif",
          "bilder/1992/0322.gif",
          "bilder/1992/0323.gif",
          "bilder/1992/0324.gif",
          "bilder/1992/0325.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_3b.html",
        "taskUrl": "http://www.walterbauer.net/1992_3b.html"
      },
      {
        "id": "1992-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1992/0378.gif",
          "bilder/1992/0379.gif",
          "bilder/1992/0380.gif",
          "bilder/1992/0381.gif",
          "bilder/1992/0384.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_3c.html",
        "taskUrl": "http://www.walterbauer.net/1992_3c.html"
      },
      {
        "id": "1992-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1992/0455.gif",
          "bilder/1992/0456.gif",
          "bilder/1992/0457.gif",
          "bilder/1992/0458.gif",
          "bilder/1992/0459.gif",
          "bilder/1992/0460.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_4a.html",
        "taskUrl": "http://www.walterbauer.net/1992_4a.html"
      },
      {
        "id": "1992-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1992/0515.gif",
          "bilder/1992/0516.gif",
          "bilder/1992/0517.gif",
          "bilder/1992/0518.gif",
          "bilder/1992/0519.gif",
          "bilder/1992/0520.gif",
          "bilder/1992/0521.gif",
          "bilder/1992/0517.gif",
          "bilder/1992/0522.gif",
          "bilder/1992/0514.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_4b.html",
        "taskUrl": "http://www.walterbauer.net/1992_4b.html"
      },
      {
        "id": "1992-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_4c.html",
        "taskUrl": "http://www.walterbauer.net/1992_4c.html"
      },
      {
        "id": "1992-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_5a.html",
        "taskUrl": "http://www.walterbauer.net/1992_5a.html"
      },
      {
        "id": "1992-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_5b.html",
        "taskUrl": "http://www.walterbauer.net/1992_5b.html"
      },
      {
        "id": "1992-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_5c.html",
        "taskUrl": "http://www.walterbauer.net/1992_5c.html"
      },
      {
        "id": "1992-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_6a.html",
        "taskUrl": "http://www.walterbauer.net/1992_6a.html"
      },
      {
        "id": "1992-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_6b.html",
        "taskUrl": "http://www.walterbauer.net/1992_6b.html"
      },
      {
        "id": "1992-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1992/0646.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1992_6c.html",
        "taskUrl": "http://www.walterbauer.net/1992_6c.html"
      }
    ]
  },
  {
    "year": 1991,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "duration": "180 Minuten",
    "structure": "6 Aufgabenkomplexe mit jeweils Teilaufgaben (a, b, c)",
    "badgeColor": "slate",
    "taskCount": 19,
    "tasks": [
      {
        "id": "1991-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1991_uebersicht.html"
      },
      {
        "id": "1991-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/1991/0001.gif",
          "bilder/1991/0002.gif",
          "bilder/1991/0003.gif",
          "bilder/1991/0004.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_1a.html",
        "taskUrl": "http://www.walterbauer.net/1991_1a.html"
      },
      {
        "id": "1991-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/1991/0037.gif",
          "bilder/1991/0004.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_1b.html",
        "taskUrl": "http://www.walterbauer.net/1991_1b.html"
      },
      {
        "id": "1991-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1991/0088.gif",
          "bilder/1991/0086.gif",
          "bilder/1991/0087.gif",
          "bilder/1991/0004.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_1c.html",
        "taskUrl": "http://www.walterbauer.net/1991_1c.html"
      },
      {
        "id": "1991-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1991/0119.gif",
          "bilder/1991/0120.gif",
          "bilder/1991/0121.gif",
          "bilder/1991/0122.gif",
          "bilder/1991/0123.gif",
          "bilder/1991/0124.gif",
          "bilder/1991/0125.gif",
          "bilder/1991/0126.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_2a.html",
        "taskUrl": "http://www.walterbauer.net/1991_2a.html"
      },
      {
        "id": "1991-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1991/0164.gif",
          "bilder/1991/0165.gif",
          "bilder/1991/0166.gif",
          "bilder/1991/0167.gif",
          "bilder/1991/0163.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_2b.html",
        "taskUrl": "http://www.walterbauer.net/1991_2b.html"
      },
      {
        "id": "1991-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_2c.html",
        "taskUrl": "http://www.walterbauer.net/1991_2c.html"
      },
      {
        "id": "1991-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1991/0223.gif",
          "bilder/1991/0224.gif",
          "bilder/1991/0225.gif",
          "bilder/1991/0228.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_3a.html",
        "taskUrl": "http://www.walterbauer.net/1991_3a.html"
      },
      {
        "id": "1991-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1991/0282.gif",
          "bilder/1991/0280.gif",
          "bilder/1991/0281.gif",
          "bilder/1991/0283.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_3b.html",
        "taskUrl": "http://www.walterbauer.net/1991_3b.html"
      },
      {
        "id": "1991-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1991/0335.gif",
          "bilder/1991/0337.gif",
          "bilder/1991/0336.gif",
          "bilder/1991/0338.gif",
          "bilder/1991/0339.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_3c.html",
        "taskUrl": "http://www.walterbauer.net/1991_3c.html"
      },
      {
        "id": "1991-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1991/0408.gif",
          "bilder/1991/0409.gif",
          "bilder/1991/0410.gif",
          "bilder/1991/0411.gif",
          "bilder/1991/0412.gif",
          "bilder/1991/0407.gif",
          "bilder/1991/0413.gif",
          "bilder/1991/0414.gif",
          "bilder/1991/0415.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_4a.html",
        "taskUrl": "http://www.walterbauer.net/1991_4a.html"
      },
      {
        "id": "1991-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1991/0408.gif",
          "bilder/1991/0409.gif",
          "bilder/1991/0410.gif",
          "bilder/1991/0411.gif",
          "bilder/1991/0412.gif",
          "bilder/1991/0407.gif",
          "bilder/1991/0459.gif",
          "bilder/1991/0460.gif",
          "bilder/1991/0461.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_4b.html",
        "taskUrl": "http://www.walterbauer.net/1991_4b.html"
      },
      {
        "id": "1991-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln.",
        "images": [
          "bilder/1991/0408.gif",
          "bilder/1991/0409.gif",
          "bilder/1991/0410.gif",
          "bilder/1991/0411.gif",
          "bilder/1991/0412.gif",
          "bilder/1991/0407.gif",
          "bilder/1991/0519.gif",
          "bilder/1991/0520.gif",
          "bilder/1991/0521.gif",
          "bilder/1991/0522.gif",
          "bilder/1991/0523.gif",
          "bilder/1991/0524.gif",
          "bilder/1991/0525.gif",
          "bilder/1991/0526.gif",
          "bilder/1991/0527.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_4c.html",
        "taskUrl": "http://www.walterbauer.net/1991_4c.html"
      },
      {
        "id": "1991-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_5a.html",
        "taskUrl": "http://www.walterbauer.net/1991_5a.html"
      },
      {
        "id": "1991-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_5b.html",
        "taskUrl": "http://www.walterbauer.net/1991_5b.html"
      },
      {
        "id": "1991-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_5c.html",
        "taskUrl": "http://www.walterbauer.net/1991_5c.html"
      },
      {
        "id": "1991-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_6a.html",
        "taskUrl": "http://www.walterbauer.net/1991_6a.html"
      },
      {
        "id": "1991-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_6b.html",
        "taskUrl": "http://www.walterbauer.net/1991_6b.html"
      },
      {
        "id": "1991-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter).",
        "images": [
          "bilder/1991/0630.gif",
          "bilder/1991/0631.gif",
          "bilder/1991/0632.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1991_6c.html",
        "taskUrl": "http://www.walterbauer.net/1991_6c.html"
      }
    ]
  },
  {
    "year": 1990,
    "eraId": "classic-1990",
    "eraTitle": "Prüfungen 1990–1995",
    "points": 30,
    "duration": "180 Minuten",
    "structure": "6 Aufgabenkomplexe mit jeweils Teilaufgaben (a, b, c)",
    "badgeColor": "slate",
    "taskCount": 19,
    "tasks": [
      {
        "id": "1990-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_uebersicht.html",
        "taskUrl": "http://www.walterbauer.net/1990_uebersicht.html"
      },
      {
        "id": "1990-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen.",
        "images": [
          "bilder/1990/0001.gif",
          "bilder/1990/0002.gif",
          "bilder/1990/0003.gif",
          "bilder/1990/0004.gif",
          "bilder/1990/0005.gif",
          "bilder/1990/0006.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_1a.html",
        "taskUrl": "http://www.walterbauer.net/1990_1a.html"
      },
      {
        "id": "1990-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden.",
        "images": [
          "bilder/1990/0055.gif",
          "bilder/1990/0056.gif",
          "bilder/1990/0057.gif",
          "bilder/1990/0058.gif",
          "bilder/1990/0059.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_1b.html",
        "taskUrl": "http://www.walterbauer.net/1990_1b.html"
      },
      {
        "id": "1990-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen.",
        "images": [
          "bilder/1990/0104.gif",
          "bilder/1990/0105.gif",
          "bilder/1990/0106.gif",
          "bilder/1990/0106.gif",
          "bilder/1990/0107.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_1c.html",
        "taskUrl": "http://www.walterbauer.net/1990_1c.html"
      },
      {
        "id": "1990-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1990/0139.gif",
          "bilder/1990/0138.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_2a.html",
        "taskUrl": "http://www.walterbauer.net/1990_2a.html"
      },
      {
        "id": "1990-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen).",
        "images": [
          "bilder/1990/0182.gif",
          "bilder/1990/0183.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_2b.html",
        "taskUrl": "http://www.walterbauer.net/1990_2b.html"
      },
      {
        "id": "1990-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen.",
        "images": [
          "bilder/1990/0243.gif",
          "bilder/1990/0244.gif",
          "bilder/1990/0245.gif",
          "bilder/1990/0246.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_2c.html",
        "taskUrl": "http://www.walterbauer.net/1990_2c.html"
      },
      {
        "id": "1990-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c².",
        "images": [
          "bilder/1990/0300.gif",
          "bilder/1990/0299.gif",
          "bilder/1990/0301.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_3a.html",
        "taskUrl": "http://www.walterbauer.net/1990_3a.html"
      },
      {
        "id": "1990-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1990/0341.gif",
          "bilder/1990/0342.gif",
          "bilder/1990/0343.gif",
          "bilder/1990/0344.gif",
          "bilder/1990/0345.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_3b.html",
        "taskUrl": "http://www.walterbauer.net/1990_3b.html"
      },
      {
        "id": "1990-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1990/0407.gif",
          "bilder/1990/0405.gif",
          "bilder/1990/0406.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_3c.html",
        "taskUrl": "http://www.walterbauer.net/1990_3c.html"
      },
      {
        "id": "1990-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a/sin(α) = b/sin(β) = c/sin(γ). Einsetzbar wenn eine Seite und der gegenüberliegende Winkel bekannt sind.",
        "images": [
          "bilder/1990/0441.gif",
          "bilder/1990/0442.gif",
          "bilder/1990/0443.gif",
          "bilder/1990/0441.gif",
          "bilder/1990/0441.gif",
          "bilder/1990/0442.gif",
          "bilder/1990/0444.gif",
          "bilder/1990/0441.gif",
          "bilder/1990/0445.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_4a.html",
        "taskUrl": "http://www.walterbauer.net/1990_4a.html"
      },
      {
        "id": "1990-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1990/0502.gif",
          "bilder/1990/0503.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_4b.html",
        "taskUrl": "http://www.walterbauer.net/1990_4b.html"
      },
      {
        "id": "1990-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_4c.html",
        "taskUrl": "http://www.walterbauer.net/1990_4c.html"
      },
      {
        "id": "1990-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_5a.html",
        "taskUrl": "http://www.walterbauer.net/1990_5a.html"
      },
      {
        "id": "1990-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_5b.html",
        "taskUrl": "http://www.walterbauer.net/1990_5b.html"
      },
      {
        "id": "1990-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_5c.html",
        "taskUrl": "http://www.walterbauer.net/1990_5c.html"
      },
      {
        "id": "1990-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_6a.html",
        "taskUrl": "http://www.walterbauer.net/1990_6a.html"
      },
      {
        "id": "1990-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten.",
        "images": [],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_6b.html",
        "taskUrl": "http://www.walterbauer.net/1990_6b.html"
      },
      {
        "id": "1990-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS.",
        "images": [
          "bilder/1990/0646.gif",
          "bilder/1990/0645.gif"
        ],
        "solutionUrl": "http://www.walterbauer.net/loesung_1990_6c.html",
        "taskUrl": "http://www.walterbauer.net/1990_6c.html"
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
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2022,
        "label": "A1/5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2022,
        "label": "A2/3",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2021,
        "label": "A1/2",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2021,
        "label": "A1/5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2020,
        "label": "P4",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2018,
        "label": "P5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2017,
        "label": "P6",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2016,
        "label": "P5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2014,
        "label": "P5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2013,
        "label": "P4",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2011,
        "label": "P4",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2009,
        "label": "P5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2008,
        "label": "P5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2007,
        "label": "P5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2007,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2006,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2005,
        "label": "P3",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2005,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2004,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2003,
        "label": "P5",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2003,
        "label": "W3b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2002,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2001,
        "label": "P4",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2000,
        "label": "W3b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1999,
        "label": "P3",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1999,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1998,
        "label": "W3b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1997,
        "label": "P3",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1997,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1996,
        "label": "P6",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1996,
        "label": "W2b",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1995,
        "label": "6a",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1995,
        "label": "6c",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen"
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
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2021,
        "label": "A2/5",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2021,
        "label": "B/1b",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2021,
        "label": "B/2a",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2021,
        "label": "B/4a",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2019,
        "label": "P5",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2015,
        "label": "P6",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2012,
        "label": "P5",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2010,
        "label": "P4",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2008,
        "label": "P6",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2006,
        "label": "P5",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2004,
        "label": "P3",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2002,
        "label": "P3",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 2000,
        "label": "P5",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
      },
      {
        "year": 1998,
        "label": "P2",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen"
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
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2024,
        "label": "A1/7b",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2024,
        "label": "A2/6",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2023,
        "label": "A1/7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2023,
        "label": "A2/6",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2022,
        "label": "A1/7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2022,
        "label": "A2/6",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2021,
        "label": "A1/7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2021,
        "label": "A2/4",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2020,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2020,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2019,
        "label": "P4",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2018,
        "label": "P4",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2017,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2016,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2015,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2014,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2013,
        "label": "P6",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2012,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2011,
        "label": "P6",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2009,
        "label": "P6",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2008,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2007,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2006,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2005,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2005,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2004,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2003,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2003,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2002,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2001,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2000,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2000,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1999,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1999,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1998,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1998,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1997,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1997,
        "label": "P8",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1996,
        "label": "P7",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1995,
        "label": "5a",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1995,
        "label": "5b",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1994,
        "label": "5a",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1994,
        "label": "5c",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1994,
        "label": "6a",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1994,
        "label": "6b",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1994,
        "label": "6c",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1993,
        "label": "5a",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1993,
        "label": "5b",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1993,
        "label": "5c",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1992,
        "label": "4c",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1992,
        "label": "6a",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1992,
        "label": "6b",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1991,
        "label": "2c",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1991,
        "label": "6a",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1991,
        "label": "6b",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1990,
        "label": "4c",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1990,
        "label": "6a",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1990,
        "label": "6b",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik"
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
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2006,
        "label": "P8",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2004,
        "label": "P8",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2002,
        "label": "P7",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 2001,
        "label": "P8",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1996,
        "label": "P8",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1992,
        "label": "5a",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1992,
        "label": "5b",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1992,
        "label": "5c",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1991,
        "label": "5a",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1991,
        "label": "5b",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1991,
        "label": "5c",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1990,
        "label": "5a",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1990,
        "label": "5b",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
      },
      {
        "year": 1990,
        "label": "5c",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik"
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
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2024,
        "label": "B/1b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2024,
        "label": "B/2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2024,
        "label": "B/3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2023,
        "label": "A1/4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2023,
        "label": "A2/4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2023,
        "label": "B/1b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2023,
        "label": "B/2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2023,
        "label": "B/3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2023,
        "label": "B/4a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2022,
        "label": "A2/4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2022,
        "label": "B/1b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2022,
        "label": "B/2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2022,
        "label": "B/3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2022,
        "label": "B/4a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2021,
        "label": "A1/4a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2021,
        "label": "A1/4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2021,
        "label": "A2/5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2021,
        "label": "B/1b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2021,
        "label": "B/2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2021,
        "label": "B/3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2021,
        "label": "B/4a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2020,
        "label": "P5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2020,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2020,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2020,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2019,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2019,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2019,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2019,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2018,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2018,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2018,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2018,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2017,
        "label": "P5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2017,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2017,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2017,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2016,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2016,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2016,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2016,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2015,
        "label": "P5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2015,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2015,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2015,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2014,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2014,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2014,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2014,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2013,
        "label": "P5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2013,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2013,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2013,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2012,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2012,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2012,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2012,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2011,
        "label": "P5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2011,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2011,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2011,
        "label": "W4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2010,
        "label": "P5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2010,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2009,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2009,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2009,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2008,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2008,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2007,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2007,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2006,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2006,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2005,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2005,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2004,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2004,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2003,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2003,
        "label": "W1b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2003,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2002,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2002,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2001,
        "label": "P3",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2001,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2001,
        "label": "W3b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2000,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 2000,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1999,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1999,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1998,
        "label": "P1",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1998,
        "label": "W3a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1997,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1997,
        "label": "P6",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1997,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1996,
        "label": "P4",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1996,
        "label": "P5",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1996,
        "label": "W2a",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1995,
        "label": "4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1995,
        "label": "5c",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1995,
        "label": "6b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1994,
        "label": "4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1994,
        "label": "5b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1993,
        "label": "4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1992,
        "label": "4b",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
      },
      {
        "year": 1991,
        "label": "4c",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis"
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
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2024,
        "label": "A2/1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2024,
        "label": "B/1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2023,
        "label": "A1/1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2023,
        "label": "A2/1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2023,
        "label": "B/1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2022,
        "label": "A1/1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2022,
        "label": "A1/1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2022,
        "label": "A1/1c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2022,
        "label": "A2/1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2022,
        "label": "B/1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2022,
        "label": "B/4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2021,
        "label": "A2/1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2021,
        "label": "B/1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2021,
        "label": "B/4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2020,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2020,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2020,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2020,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2019,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2019,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2019,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2019,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2018,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2018,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2018,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2018,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2017,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2017,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2017,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2017,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2016,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2016,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2016,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2016,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2015,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2015,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2015,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2015,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2014,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2014,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2014,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2014,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2013,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2013,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2013,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2013,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2012,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2012,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2012,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2011,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2011,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2011,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2011,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2011,
        "label": "W4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2010,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2010,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2010,
        "label": "W4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2009,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2009,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2008,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2008,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2008,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2007,
        "label": "P3",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2007,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2007,
        "label": "W4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2006,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2006,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2006,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2006,
        "label": "W4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2005,
        "label": "P5",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2005,
        "label": "P6",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2005,
        "label": "W4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2004,
        "label": "P1",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2004,
        "label": "P2",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2004,
        "label": "W3a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2004,
        "label": "W3b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2003,
        "label": "P3",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2003,
        "label": "P4",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2003,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2003,
        "label": "W4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2002,
        "label": "P6",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2002,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2002,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2001,
        "label": "P5",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2001,
        "label": "W2a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2001,
        "label": "W2b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2000,
        "label": "P3",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2000,
        "label": "P4",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2000,
        "label": "W2a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 2000,
        "label": "W2b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1999,
        "label": "P5",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1999,
        "label": "P6",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1999,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1999,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1998,
        "label": "P5",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1998,
        "label": "P6",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1998,
        "label": "W2a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1998,
        "label": "W2b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1997,
        "label": "P5",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1997,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1997,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1996,
        "label": "P3",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1996,
        "label": "W1a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1996,
        "label": "W1b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1995,
        "label": "3a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1995,
        "label": "3b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1995,
        "label": "3c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1995,
        "label": "4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1995,
        "label": "4c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1994,
        "label": "3a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1994,
        "label": "3b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1994,
        "label": "3c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1994,
        "label": "4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1994,
        "label": "4c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1993,
        "label": "3a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1993,
        "label": "3b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1993,
        "label": "3c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1993,
        "label": "4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1993,
        "label": "4c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1992,
        "label": "3a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1992,
        "label": "3b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1992,
        "label": "3c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1992,
        "label": "4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1992,
        "label": "6c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "3a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "3b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "3c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "3a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "3b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "3c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "4a",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "4b",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "6c",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie"
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
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2024,
        "label": "B/2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "A1/2a",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "A1/2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "A2/2",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2021,
        "label": "A1/1a",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2021,
        "label": "A1/1b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2021,
        "label": "B/2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2020,
        "label": "W2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2018,
        "label": "W2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2017,
        "label": "W2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2016,
        "label": "W2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2015,
        "label": "P3",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2014,
        "label": "P3",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2014,
        "label": "W2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2013,
        "label": "P3",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2012,
        "label": "P2",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2012,
        "label": "W2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2011,
        "label": "P3",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2010,
        "label": "P3",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2008,
        "label": "W4b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2007,
        "label": "P1",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2006,
        "label": "W4a",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2005,
        "label": "P1",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2005,
        "label": "W1a",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2004,
        "label": "W1a",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2003,
        "label": "P2",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2003,
        "label": "W2b",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2002,
        "label": "P1",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2000,
        "label": "P1",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1999,
        "label": "P2",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1998,
        "label": "P3",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1997,
        "label": "P1",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)"
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
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2021,
        "label": "A2/2",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2020,
        "label": "P3",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2018,
        "label": "W2a",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2016,
        "label": "P3",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2015,
        "label": "P3",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2015,
        "label": "W2a",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2014,
        "label": "P3",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2014,
        "label": "W2b",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2013,
        "label": "P3",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2013,
        "label": "W2b",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2012,
        "label": "W2b",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2011,
        "label": "P3",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2007,
        "label": "P2",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2007,
        "label": "W4b",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2005,
        "label": "W3b",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2004,
        "label": "P6",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2002,
        "label": "P2",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2002,
        "label": "W3b",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2001,
        "label": "P1",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2000,
        "label": "P2",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1999,
        "label": "P1",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1998,
        "label": "P4",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1997,
        "label": "P2",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1996,
        "label": "P1",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)"
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
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2006,
        "label": "W3b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2005,
        "label": "W4a",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2004,
        "label": "W4b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2002,
        "label": "W3a",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2001,
        "label": "W1a",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2000,
        "label": "W1b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1997,
        "label": "W3b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1996,
        "label": "W3a",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1996,
        "label": "W3b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "1c",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "2b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "2c",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1994,
        "label": "1a",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1994,
        "label": "1b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1994,
        "label": "1c",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1993,
        "label": "1b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1993,
        "label": "1c",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1991,
        "label": "1a",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1991,
        "label": "1b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1991,
        "label": "1c",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1990,
        "label": "1b",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1990,
        "label": "1c",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)"
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
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "B/2b",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2020,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2019,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2018,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2017,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2016,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2015,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2014,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2013,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2011,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2010,
        "label": "W2b",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2009,
        "label": "W2a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2008,
        "label": "P3",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2007,
        "label": "W3a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2005,
        "label": "W3a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2004,
        "label": "P5",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2001,
        "label": "P2",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1998,
        "label": "W1a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1997,
        "label": "W3a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "1a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "1b",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1990,
        "label": "1a",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)"
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
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2023,
        "label": "A2/2",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2023,
        "label": "B/2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "B/2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2021,
        "label": "A2/2",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2020,
        "label": "P3",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2019,
        "label": "P3",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2019,
        "label": "W2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2018,
        "label": "P3",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2017,
        "label": "P3",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2015,
        "label": "W2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2012,
        "label": "W2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2011,
        "label": "W2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2010,
        "label": "P1",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2010,
        "label": "W2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2009,
        "label": "P3",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2009,
        "label": "W2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2009,
        "label": "W4b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2008,
        "label": "P4",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2008,
        "label": "W2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2007,
        "label": "W3b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2006,
        "label": "P3",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2005,
        "label": "P2",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2004,
        "label": "W1a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2003,
        "label": "P1",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2003,
        "label": "W2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2002,
        "label": "W4b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2001,
        "label": "W1b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2000,
        "label": "W1a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1999,
        "label": "W3a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1999,
        "label": "W3b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1998,
        "label": "W1b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1997,
        "label": "W3b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1996,
        "label": "P2",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1995,
        "label": "2c",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1994,
        "label": "2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1994,
        "label": "2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1994,
        "label": "2c",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1993,
        "label": "2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1993,
        "label": "2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1993,
        "label": "2c",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1992,
        "label": "1a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1992,
        "label": "1b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1992,
        "label": "1c",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1992,
        "label": "2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1992,
        "label": "2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1992,
        "label": "2c",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1991,
        "label": "2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1991,
        "label": "2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1990,
        "label": "2a",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1990,
        "label": "2b",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1990,
        "label": "2c",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)"
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
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2023,
        "label": "B/4b",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2017,
        "label": "W2b",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2012,
        "label": "P3",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2009,
        "label": "W1a",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2008,
        "label": "W2a",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2007,
        "label": "P4",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2006,
        "label": "W3a",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2005,
        "label": "W1a",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2005,
        "label": "W4a",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2002,
        "label": "P5",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2001,
        "label": "P6",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
      },
      {
        "year": 2000,
        "label": "W1b",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre"
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
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2023,
        "label": "B/4b",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "A1/2b",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "A2/2",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2022,
        "label": "B/2b",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2012,
        "label": "P3",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2007,
        "label": "P4",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2006,
        "label": "P4",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2004,
        "label": "W1b",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2003,
        "label": "P2",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2002,
        "label": "P5",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 2001,
        "label": "P6",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1993,
        "label": "1a",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
      },
      {
        "year": 1991,
        "label": "6c",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)"
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
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2019,
        "label": "W2b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2018,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2018,
        "label": "W2b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2017,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2016,
        "label": "W2b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2015,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2014,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2013,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2012,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2011,
        "label": "W2b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2010,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2009,
        "label": "W4b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2008,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2008,
        "label": "W2b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2008,
        "label": "W4b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2007,
        "label": "W3b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2006,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2006,
        "label": "W3b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2005,
        "label": "W3b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2004,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2004,
        "label": "W3b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2002,
        "label": "W4b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2001,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 2000,
        "label": "W2b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1999,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1999,
        "label": "W3b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1998,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1998,
        "label": "W2b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1997,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1996,
        "label": "W1b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1996,
        "label": "W3b",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1995,
        "label": "1c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1995,
        "label": "2c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1995,
        "label": "3c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1995,
        "label": "4c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1994,
        "label": "1c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1994,
        "label": "2c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1994,
        "label": "3c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1994,
        "label": "4c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1993,
        "label": "1c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1993,
        "label": "2c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1993,
        "label": "3c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1993,
        "label": "4c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1992,
        "label": "1c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1992,
        "label": "2c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1992,
        "label": "3c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1991,
        "label": "1c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1991,
        "label": "3c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1990,
        "label": "1c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1990,
        "label": "2c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
      },
      {
        "year": 1990,
        "label": "3c",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme"
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
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2018,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2017,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2016,
        "label": "W2b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2015,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2014,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2013,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2012,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2010,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2009,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2008,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2008,
        "label": "W2b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2007,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2006,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2006,
        "label": "W3b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2005,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2004,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2003,
        "label": "W4b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2002,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2001,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 2000,
        "label": "W2b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1999,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1998,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1998,
        "label": "W2b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1997,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1996,
        "label": "W1b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1996,
        "label": "W3b",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1995,
        "label": "1c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1995,
        "label": "2c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1995,
        "label": "3c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1995,
        "label": "4c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1994,
        "label": "1c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1994,
        "label": "2c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1994,
        "label": "3c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1994,
        "label": "4c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1993,
        "label": "1c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1993,
        "label": "2c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1993,
        "label": "3c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1993,
        "label": "4c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1992,
        "label": "1c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1992,
        "label": "2c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1992,
        "label": "3c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1991,
        "label": "1c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1991,
        "label": "3c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
      },
      {
        "year": 1990,
        "label": "2c",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen"
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
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2024,
        "label": "A1/6b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2023,
        "label": "A1/6",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2023,
        "label": "B/1b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2022,
        "label": "A1/4",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2022,
        "label": "A1/7",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2022,
        "label": "B/1b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2022,
        "label": "B/4b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2021,
        "label": "A1/6",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2021,
        "label": "A2/6",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2020,
        "label": "P8",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2020,
        "label": "W2b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2020,
        "label": "W3a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2020,
        "label": "W3b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2019,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2018,
        "label": "P8",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2018,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2017,
        "label": "P4",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2017,
        "label": "P8",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2017,
        "label": "W3b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2016,
        "label": "W2b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2016,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2016,
        "label": "W4b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2015,
        "label": "W1b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2015,
        "label": "W3b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2015,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2014,
        "label": "P6",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2014,
        "label": "W3b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2014,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2013,
        "label": "P7",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2013,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2012,
        "label": "P7",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2012,
        "label": "W4b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2011,
        "label": "P5",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2011,
        "label": "W4b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2010,
        "label": "P6",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2010,
        "label": "P7",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2010,
        "label": "W3b",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2007,
        "label": "P7",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2004,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
      },
      {
        "year": 2002,
        "label": "W4a",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen"
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
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2024,
        "label": "A2/4",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2024,
        "label": "B/3a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2023,
        "label": "A1/2a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2023,
        "label": "A1/2b",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2023,
        "label": "A2/5",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2023,
        "label": "B/3a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2022,
        "label": "A1/3a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2022,
        "label": "A1/3b",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2022,
        "label": "A1/4",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2022,
        "label": "A2/5",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2022,
        "label": "B/3a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2021,
        "label": "A1/3a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2021,
        "label": "A1/3b",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2021,
        "label": "A2/3",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2021,
        "label": "A2/6",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2021,
        "label": "B/3a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2020,
        "label": "P6",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2020,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2019,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2019,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2019,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2018,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2018,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2018,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2017,
        "label": "P4",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2017,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2017,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2016,
        "label": "P4",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2016,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2016,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2015,
        "label": "P4",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2015,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2015,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2014,
        "label": "P6",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2014,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2014,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2013,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2013,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2013,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2012,
        "label": "P4",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2012,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2012,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2011,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2011,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2011,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2010,
        "label": "P6",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2010,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2010,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2009,
        "label": "P7",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2009,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2009,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2008,
        "label": "P8",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
      },
      {
        "year": 2008,
        "label": "W4a",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik"
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
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen"
      },
      {
        "year": 2024,
        "label": "A1/4b",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen"
      },
      {
        "year": 2023,
        "label": "A1/8a",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen"
      },
      {
        "year": 2023,
        "label": "A1/8b",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen"
      },
      {
        "year": 2022,
        "label": "A1/6a",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen"
      },
      {
        "year": 2022,
        "label": "A1/6b",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen"
      },
      {
        "year": 2021,
        "label": "A1/6",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen"
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
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1993,
        "label": "3a",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1993,
        "label": "3b",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1992,
        "label": "6c",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "3b",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "3c",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "4a",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "4b",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "4a",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "4b",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "6c",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie"
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
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1992,
        "label": "6c",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "3b",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "3c",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "4a",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1991,
        "label": "4b",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "3b",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "3c",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "4b",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      },
      {
        "year": 1990,
        "label": "6c",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie"
      }
    ]
  }
];

const REFORMS_DATA = [
  {
    year: 2021,
    title: 'Reform 2021 (Bildungsplan 2016)',
    highlight: 'Zweiteilung des Pflichtteils: A1 (ohne Hilfsmittel) & A2 (mit Taschenrechner)',
    points: 50,
    active: true,
    details: [
      '<strong>Pflichtteil A1 (10 Punkte):</strong> 7 Aufgaben zur Überprüfung grundlegender mathematischer Basiskompetenzen OHNE Verwendung von Taschenrechner und Formelsammlung (Arbeitszeit: 45 Min).',
      '<strong>Pflichtteil A2 (20 Punkte):</strong> 6 Aufgaben mit wissenschaftlichem Taschenrechner und Formelsammlung (Funktionen, Trigonometrie, Stereometrie, Stochastik).',
      '<strong>Wahlteil B (20 Punkte):</strong> 4 komplexe Wahlaufgaben (B1 bis B4). Der Prüfling muss genau 2 dieser 4 Aufgaben vollständig lösen.',
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
      { name: 'Quadratische Pyramide', formula: 'V = 1/3 · a² · h', note: 'M = 2 · a · hs, O = a² + M, hs² = h² + (a/2)²' },
      { name: 'Kreiskegel', formula: 'V = 1/3 · π · r² · h', note: 'M = π · r · s, s² = r² + h², O = π r² + M' },
      { name: 'Kugel', formula: 'V = 4/3 · π · r³', note: 'O = 4 · π · r²' },
      { name: 'Kreiszylinder', formula: 'V = π · r² · h', note: 'M = 2 · π · r · h, O = 2 π r² + M' },
      { name: 'Pyramidenstumpf', formula: 'V = h/3 · (a1² + a1·a2 + a2²)', note: 'Strahlensatz zur Höhenbestimmung der Ergänzungspyramide' }
    ]
  },
  {
    category: 'Trigonometrie',
    items: [
      { name: 'Rechtwinkliges Dreieck', formula: 'sin(α) = Gk/Hyp · cos(α) = Ak/Hyp · tan(α) = Gk/Ak', note: 'sin²(α) + cos²(α) = 1, Pythagoras: a² + b² = c²' },
      { name: 'Sinussatz', formula: 'a / sin(α) = b / sin(β) = c / sin(γ)', note: 'Anwendung bei beliebigem Dreieck (zwei Winkel & eine Seite)' },
      { name: 'Kosinussatz', formula: 'a² = b² + c² - 2bc · cos(α)', note: 'Anwendung bei beliebigem Dreieck (zwei Seiten & Zwischenwinkel)' }
    ]
  },
  {
    category: 'Funktionen & Algebra',
    items: [
      { name: 'Scheitelpunktform', formula: 'y = a(x - d)² + e', note: 'Scheitelpunkt S(d | e). Nach oben offen wenn a > 0' },
      { name: 'Allgemeine Form (Parabel)', formula: 'y = ax² + bx + c', note: 'Schnittpunkt mit y-Achse bei Sy(0 | c)' },
      { name: 'p/q-Formel', formula: 'x1,2 = -p/2 ± √((p/2)² - q)', note: 'Für normierte Gleichung: x² + px + q = 0' },
      { name: 'Lineare Funktion', formula: 'y = m · x + b', note: 'Steigung m = (y2 - y1) / (x2 - x1)' }
    ]
  },
  {
    category: 'Stochastik & Zinsrechnung',
    items: [
      { name: 'Zinseszinsformel', formula: 'Kn = K0 · (1 + p/100)^n', note: 'Wachstumsfaktor q = 1 + p/100' },
      { name: '1. Pfadregel (Produktregel)', formula: 'P(Pfad) = p1 · p2 · ... · pk', note: 'Wahrscheinlichkeiten entlang eines Pfades multiplizieren' },
      { name: '2. Pfadregel (Summenregel)', formula: 'P(Ereignis) = P(Pfad1) + P(Pfad2) + ...', note: 'Wahrscheinlichkeiten verschiedener günstiger Pfade addieren' }
    ]
  }
];

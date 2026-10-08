// Prüfung Realschule Baden-Württemberg — Vollständige In-Page Prüfungsdaten 1990–2024
// 100% In-Page Navigation: Alle Aufgaben, Themen, Punkte und Rechenhilfen direkt integriert.

const YEARS_DATA = [
  {
    "year": 2024,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Taschenrechner) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "emerald",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2024-A1-1",
        "label": "A1/1",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2024-A1-2",
        "label": "A1/2",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2024-A1-3",
        "label": "A1/3",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2024-A1-4a",
        "label": "A1/4a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln."
      },
      {
        "id": "2024-A1-4b",
        "label": "A1/4b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln."
      },
      {
        "id": "2024-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2024-A1-6a",
        "label": "A1/6a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2024-A1-6b",
        "label": "A1/6b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2024-A1-7a",
        "label": "A1/7a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2024-A1-7b",
        "label": "A1/7b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2024-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2024-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2024-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2024-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2024-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2024-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2024-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2024-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2024-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2024-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2024-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2024-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      }
    ]
  },
  {
    "year": 2023,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Taschenrechner) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "emerald",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2023-A1-1",
        "label": "A1/1",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2023-A1-2a",
        "label": "A1/2a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2023-A1-2b",
        "label": "A1/2b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2023-A1-3",
        "label": "A1/3",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2023-A1-4",
        "label": "A1/4",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2023-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "2023-A1-6",
        "label": "A1/6",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2023-A1-7",
        "label": "A1/7",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2023-A1-8a",
        "label": "A1/8a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln."
      },
      {
        "id": "2023-A1-8b",
        "label": "A1/8b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln."
      },
      {
        "id": "2023-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2023-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2023-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2023-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2023-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2023-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2023-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2023-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2023-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2023-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2023-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2023-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2023-B-4a",
        "label": "B/4a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2023-B-4b",
        "label": "B/4b",
        "section": "Wahlteil B",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      }
    ]
  },
  {
    "year": 2022,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Taschenrechner) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "emerald",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2022-A1-1a",
        "label": "A1/1a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2022-A1-1b",
        "label": "A1/1b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2022-A1-1c",
        "label": "A1/1c",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2022-A1-2a",
        "label": "A1/2a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2022-A1-2b",
        "label": "A1/2b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2022-A1-3a",
        "label": "A1/3a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2022-A1-3b",
        "label": "A1/3b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2022-A1-4",
        "label": "A1/4",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2022-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2022-A1-6a",
        "label": "A1/6a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln."
      },
      {
        "id": "2022-A1-6b",
        "label": "A1/6b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln."
      },
      {
        "id": "2022-A1-7",
        "label": "A1/7",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2022-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2022-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2022-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2022-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2022-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2022-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2022-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2022-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2022-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2022-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2022-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2022-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2022-B-4a",
        "label": "B/4a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2022-B-4b",
        "label": "B/4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      }
    ]
  },
  {
    "year": 2021,
    "eraId": "reform-2021",
    "eraTitle": "Reform ab 2021 (Bildungsplan 2016)",
    "points": 50,
    "duration": "240 Minuten (Teil A1: 45 Min · Teil A2 & B: 195 Min)",
    "structure": "Pflichtteil A1 (10 P, ohne Taschenrechner) · Pflichtteil A2 (20 P) · Wahlteil B (2 aus 4, 20 P)",
    "badgeColor": "emerald",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2021-A1-1a",
        "label": "A1/1a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2021-A1-1b",
        "label": "A1/1b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2021-A!-2",
        "label": "A!/2",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2021-A1-3a",
        "label": "A1/3a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2021-A1-3b",
        "label": "A1/3b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2021-A1-4a",
        "label": "A1/4a",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2021-A1-4b",
        "label": "A1/4b",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2021-A1-5",
        "label": "A1/5",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2021-A1-6",
        "label": "A1/6",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Reihen und Folgen",
        "category": "Algebra & Folgen",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Differenz d (arithmetisch) oder Quotient q (geometrisch) ermitteln."
      },
      {
        "id": "2021-A1-7",
        "label": "A1/7",
        "section": "Pflichtteil A1 (hilfsmittelfrei)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "1,0 P",
        "hilfsmittel": "Ohne Taschenrechner & Formelsammlung",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2021-A2-1",
        "label": "A2/1",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2021-A2-2",
        "label": "A2/2",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2021-A2-3",
        "label": "A2/3",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2021-A2-4",
        "label": "A2/4",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2021-A2-5",
        "label": "A2/5",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2021-A2-6",
        "label": "A2/6",
        "section": "Pflichtteil A2 (mit Hilfsmitteln)",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2021-B-1a",
        "label": "B/1a",
        "section": "Wahlteil B",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a/sin(α) = b/sin(β) = c/sin(γ). Einsetzbar wenn eine Seite und der gegenüberliegende Winkel bekannt sind."
      },
      {
        "id": "2021-B-1b",
        "label": "B/1b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2021-B-2a",
        "label": "B/2a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2021-B-2b",
        "label": "B/2b",
        "section": "Wahlteil B",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2021-B-3a",
        "label": "B/3a",
        "section": "Wahlteil B",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2021-B-3b",
        "label": "B/3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2021-B-4a",
        "label": "B/4a",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2021-B-4b",
        "label": "B/4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2020-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2020-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2020-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2020-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2020-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2020-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2020-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2020-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2020-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2020-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2020-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2020-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2020-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2020-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2020-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2020-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2019-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2019-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2019-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2019-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2019-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2019-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2019-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2019-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2019-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2019-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2019-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2019-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "2019-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2019-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2019-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2019-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2018-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2018-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2018-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2018-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2018-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2018-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2018-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2018-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2018-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2018-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2018-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2018-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "2018-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2018-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2018-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2018-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2017-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2017-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2017-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2017-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2017-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2017-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2017-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2017-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2017-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2017-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2017-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2017-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2017-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2017-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2017-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2017-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2016-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2016-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2016-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2016-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2016-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2016-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2016-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2016-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2016-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2016-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2016-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2016-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2016-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2016-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2016-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2016-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2015-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2015-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2015-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2015-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2015-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2015-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2015-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2015-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2015-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2015-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2015-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2015-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2015-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2015-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2015-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2015-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2015-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2014-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2014-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2014-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2014-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2014-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2014-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2014-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2014-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2014-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2014-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2014-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2014-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2014-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2014-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2014-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2014-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2014-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2013-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2013-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2013-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2013-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2013-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2013-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2013-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2013-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2013-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2013-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2013-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2013-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2013-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2013-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2013-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2013-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2012-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2012-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2012-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2012-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2012-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2012-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2012-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2012-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2012-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2012-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2012-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2012-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2012-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2012-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2012-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2012-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2011-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2011-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2011-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2011-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2011-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2011-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2011-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2011-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2011-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2011-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2011-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2011-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "2011-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2011-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2011-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2011-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2010-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2010-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2010-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2010-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2010-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2010-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2010-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2010-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2010-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2010-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2010-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2010-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2010-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2010-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2010-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2010-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2009-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2009-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2009-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2009-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2009-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2009-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2009-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2009-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2009-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2009-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2009-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2009-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2009-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2009-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2009-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2009-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
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
    "badgeColor": "indigo",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2008-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2008-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2008-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2008-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2008-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2008-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2008-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2008-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2008-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2008-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2008-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2008-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2008-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2008-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2008-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Statistik, Wahrscheinlichkeit",
        "category": "Stochastik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Baumdiagramm zeichnen. 1. Pfadregel: Wahrscheinlichkeiten entlang eines Pfades multiplizieren. 2. Pfadregel: Pfade addieren."
      },
      {
        "id": "2008-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
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
    "badgeColor": "amber",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2007-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2007-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2007-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2007-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2007-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2007-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2007-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2007-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2007-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2007-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2007-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2007-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2007-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2007-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "2007-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2007-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
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
    "badgeColor": "amber",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2006-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2006-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2006-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2006-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2006-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2006-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2006-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2006-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "2006-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2006-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2006-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2006-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2006-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2006-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2006-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2006-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
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
    "badgeColor": "amber",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2005-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2005-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2005-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2005-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2005-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2005-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2005-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2005-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2005-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2005-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2005-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2005-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2005-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2005-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "2005-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2005-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
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
    "badgeColor": "amber",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2004-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2004-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2004-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2004-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2004-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2004-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2004-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2004-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "2004-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2004-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2004-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2004-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2004-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2004-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "2004-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2004-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
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
    "badgeColor": "amber",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2003-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2003-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2003-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2003-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2003-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2003-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2003-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2003-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2003-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2003-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2003-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2003-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2003-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2003-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2003-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2003-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
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
    "badgeColor": "amber",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2002-Übersicht",
        "label": "Übersicht",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2002-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2002-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2002-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2002-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2002-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2002-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2002-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "2002-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2002-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2002-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2002-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2002-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2002-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "2002-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2002-W4a",
        "label": "W4a",
        "section": "Wahlbereich W",
        "topic": "Verstehen und Begründen",
        "category": "Mathematische Kompetenzen",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Mathematische Zusammenhänge mit eigenen Worten erklären, Rechenschritte durch Sätze oder geometrische Eigenschaften begründen."
      },
      {
        "id": "2002-W4b",
        "label": "W4b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
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
    "badgeColor": "orange",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2001-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2001-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "2001-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2001-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "2001-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2001-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "2001-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2001-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "2001-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "2001-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2001-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2001-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2001-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2001-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
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
    "badgeColor": "orange",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "2000-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "2000-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "2000-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2000-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2000-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "2000-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2000-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2000-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "2000-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "2000-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Streckenzüge und Flächen auf Körpern und im Raum",
        "category": "Geometrie & Raumlehre",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Netzabwicklung des Körpers zeichnen! Der kürzeste Weg auf dem Mantel ist eine gerade Strecke im Netz."
      },
      {
        "id": "2000-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "2000-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "2000-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "2000-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
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
    "badgeColor": "orange",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1999-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "1999-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "1999-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "1999-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1999-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1999-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1999-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1999-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1999-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1999-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1999-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1999-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "1999-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1999-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
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
    "badgeColor": "orange",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1998-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1998-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Lineare Gleichungssysteme",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Additions- oder Einsetzungsverfahren nutzen. Variablen schrittweise eliminieren und Lösungsprobe durchführen."
      },
      {
        "id": "1998-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "1998-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "1998-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1998-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1998-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1998-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1998-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "1998-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1998-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1998-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1998-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1998-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
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
    "badgeColor": "orange",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1997-P1",
        "label": "P1",
        "section": "Pflichtbereich P",
        "topic": "Quadratische Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "V = (1/3)*a²*h. Seitenhöhe hs² = h² + (a/2)². Mantelfläche M = 2*a*hs. Oberfläche O = a² + M."
      },
      {
        "id": "1997-P2",
        "label": "P2",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "1997-P3",
        "label": "P3",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "1997-P4",
        "label": "P4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1997-P5",
        "label": "P5",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1997-P6",
        "label": "P6",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1997-P7",
        "label": "P7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1997-P8",
        "label": "P8",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1997-W1a",
        "label": "W1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1997-W1b",
        "label": "W1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1997-W2a",
        "label": "W2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1997-W2b",
        "label": "W2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "1997-W3a",
        "label": "W3a",
        "section": "Wahlbereich W",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "1997-W3b",
        "label": "W3b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
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
    "badgeColor": "orange",
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1996-p1",
        "label": "p1",
        "section": "Pflichtbereich P",
        "topic": "Kegel, Kugel, Zylinder",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Kreiszylinder: V = π*r²*h. Kegel: V = (1/3)*π*r²*h, s² = r²+h². Kugel: V = (4/3)*π*r³, O = 4*π*r²."
      },
      {
        "id": "1996-p2",
        "label": "p2",
        "section": "Pflichtbereich P",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1996-p3",
        "label": "p3",
        "section": "Pflichtbereich P",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1996-p4",
        "label": "p4",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1996-p5",
        "label": "p5",
        "section": "Pflichtbereich P",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1996-p6",
        "label": "p6",
        "section": "Pflichtbereich P",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "1996-p7",
        "label": "p7",
        "section": "Pflichtbereich P",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1996-p8",
        "label": "p8",
        "section": "Pflichtbereich P",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "3,5 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1996-w1a",
        "label": "w1a",
        "section": "Wahlbereich W",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1996-w1b",
        "label": "w1b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1996-w2a",
        "label": "w2a",
        "section": "Wahlbereich W",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1996-w2b",
        "label": "w2b",
        "section": "Wahlteil B",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "1996-w3a",
        "label": "w3a",
        "section": "Wahlbereich W",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "8,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "1996-w3b",
        "label": "w3b",
        "section": "Wahlteil B",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1995-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "1995-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "1995-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1995-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1995-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1995-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1995-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1995-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1995-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1995-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1995-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1995-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1995-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1995-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1995-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1995-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
      },
      {
        "id": "1995-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1995-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Bruchgleichungen, Quadratische Gleichungen",
        "category": "Algebra & Gleichungen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Definitionsmenge ermitteln (Nenner != 0), mit Hauptnenner multiplizieren, quadratische Formel (p/q) anwenden."
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1994-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "1994-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "1994-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1994-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1994-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1994-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1994-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1994-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1994-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1994-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1994-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1994-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1994-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1994-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1994-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1994-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1994-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1994-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1993-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
      },
      {
        "id": "1993-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "1993-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1993-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1993-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1993-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1993-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a/sin(α) = b/sin(β) = c/sin(γ). Einsetzbar wenn eine Seite und der gegenüberliegende Winkel bekannt sind."
      },
      {
        "id": "1993-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1993-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1993-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1993-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1993-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1993-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1993-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1993-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1993-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1993-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1993-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Mathematische Kompetenzen",
        "category": "Allgemein",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1992-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1992-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1992-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1992-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1992-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1992-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1992-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1992-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1992-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1992-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1992-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1992-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1992-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1992-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1992-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1992-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1992-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1992-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1991-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "1991-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "1991-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1991-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1991-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1991-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1991-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1991-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1991-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1991-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1991-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1991-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Funktionen, Parabeln",
        "category": "Funktionen & Analysis",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Scheitelpunktform y = a(x-d)²+e oder Normalform y = x²+px+q. Nullstellen mit p/q-Formel, Schnittpunkte durch Gleichsetzen ermitteln."
      },
      {
        "id": "1991-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1991-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1991-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1991-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1991-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1991-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Prismen, Würfel, Quader",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "V = G * h. Mantel = Umfang(G) * h. Auf Einheitenumrechnungen achten (cm³, dm³, Liter)."
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
        "tipp": "Lösungsschritte strukturiert notieren und Zwischenergebnisse überprüfen."
      },
      {
        "id": "1990-1a",
        "label": "1a",
        "section": "Hauptteil",
        "topic": "Besondere Pyramiden",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundfläche genau analysieren (Rechteck, gleichschenkliges Dreieck). Höhen und Kanten mit Pythagoras bestimmen."
      },
      {
        "id": "1990-1b",
        "label": "1b",
        "section": "Wahlteil B",
        "topic": "Stümpfe",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Strahlensatz zur Bestimmung der Höhe der Ergänzungspyramide / des Ergänzungskegels nutzen. Formel für Stumpfvolumen anwenden."
      },
      {
        "id": "1990-1c",
        "label": "1c",
        "section": "Hauptteil",
        "topic": "Berechnung mit Variablen",
        "category": "Algebra & Terme",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Terme vereinfachen, binomische Formeln rückwärts oder vorwärts anwenden. Formel systematisch nach der gesuchten Variablen auflösen."
      },
      {
        "id": "1990-2a",
        "label": "2a",
        "section": "Hauptteil",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1990-2b",
        "label": "2b",
        "section": "Wahlteil B",
        "topic": "Zusammengesetzte Körper",
        "category": "Stereometrie (Körper)",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Teilkörper einzeln berechnen (z.B. Zylinder + Halbkugel). Auf Nahtstellen bei der Oberfläche achten (Grundflächen entfallen innen)."
      },
      {
        "id": "1990-2c",
        "label": "2c",
        "section": "Hauptteil",
        "topic": "Berechnung ohne Verwendung gerundeter Werte",
        "category": "Exaktes Rechnen",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Exakt mit Wurzeln und π rechnen, nicht in Dezimalbrüche umwandeln! Wurzelterme zusammenfassen."
      },
      {
        "id": "1990-3a",
        "label": "3a",
        "section": "Hauptteil",
        "topic": "Trigonometrie",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Rechtwinkliges Dreieck: sin = Gegenkathete/Hypotenuse, cos = Ankathete/Hypotenuse, tan = Gegenkathete/Ankathete. Pythagoras a²+b²=c²."
      },
      {
        "id": "1990-3b",
        "label": "3b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1990-3c",
        "label": "3c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1990-4a",
        "label": "4a",
        "section": "Hauptteil",
        "topic": "Sinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a/sin(α) = b/sin(β) = c/sin(γ). Einsetzbar wenn eine Seite und der gegenüberliegende Winkel bekannt sind."
      },
      {
        "id": "1990-4b",
        "label": "4b",
        "section": "Wahlteil B",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
      },
      {
        "id": "1990-4c",
        "label": "4c",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1990-5a",
        "label": "5a",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1990-5b",
        "label": "5b",
        "section": "Wahlteil B",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1990-5c",
        "label": "5c",
        "section": "Hauptteil",
        "topic": "Preise, Preisbewegungen, Währung",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Grundwert, Prozentwert und Prozentsatz unterscheiden. Mehrwertsteuer und Rabatte nacheinander berechnen."
      },
      {
        "id": "1990-6a",
        "label": "6a",
        "section": "Hauptteil",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1990-6b",
        "label": "6b",
        "section": "Wahlteil B",
        "topic": "Sparen, Zinsen, Zinseszins, Prozent, Diagramme",
        "category": "Sachrechnen & Finanzmathematik",
        "points": "10,0 P",
        "hilfsmittel": "Taschenrechner & Formelsammlung erlaubt",
        "tipp": "Formel Kn = K0 * (1 + p/100)^n anwenden. Auf Laufzeiten (Tage/Monate/Jahre) und Zinseszins achten."
      },
      {
        "id": "1990-6c",
        "label": "6c",
        "section": "Hauptteil",
        "topic": "Kosinussatz",
        "category": "Geometrie & Trigonometrie",
        "points": "5,0 P",
        "hilfsmittel": "Taschenrechner erlaubt",
        "tipp": "Beliebiges Dreieck: a² = b² + c² - 2bc*cos(α). Einsetzbar bei SWS (zwei Seiten + eingeschlossener Winkel) oder SSS."
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

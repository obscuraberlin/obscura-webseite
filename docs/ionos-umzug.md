# IONOS: Sperrung, Umzug zu Hostinger, E-Mail

Stand: 21. Oktober 2026. Preise und Abläufe ändern sich – die hier
genannten Zahlen stammen aus Drittquellen und sind vor dem Buchen auf
den offiziellen Seiten zu prüfen.

---

## 1. E-Mail an IONOS: sofortige Entsperrung

**Empfänger:** info@ionos.de

Sicherer ist zusätzlich das Kontaktformular im eingeloggten IONOS-Konto
(oben rechts „Hilfe & Kontakt"), weil die Anfrage dort direkt dem
Vertrag zugeordnet wird. Eine eigene Beschwerdeadresse veröffentlicht
IONOS nicht.

**Betreff:**
> Sofortige Entsperrung nach Zahlungseingang – Vertrag [Kundennummer] – obscura-berlin.de

**Nachricht:**
> Sehr geehrte Damen und Herren,
>
> meine Domains und Postfächer wurden wegen eines offenen Betrags von
> 26,- € gesperrt. Der Betrag ist inzwischen vollständig beglichen; die
> Zahlung wurde am [Datum] ausgeführt.
>
> Ich bitte um die **sofortige Entsperrung aller Domains und
> E-Mail-Postfächer**.
>
> Die Sperrung hat unmittelbare geschäftliche Folgen: Unsere Website ist
> nicht erreichbar, und eingehende E-Mails an info@obscura-berlin.de
> können nicht zugestellt werden. Als Agentur, die über diese Adresse
> Kundenanfragen erhält, entsteht uns dadurch ein konkreter Schaden.
>
> Ich möchte außerdem Folgendes anmerken: Eine vollständige Sperrung von
> Domains und Postfächern wegen eines Betrags in dieser Größenordnung
> steht in keinem Verhältnis zum Schaden, der dadurch auf unserer Seite
> entsteht. Es handelt sich zudem nicht um den ersten Vorfall dieser
> Art. Ich bitte darum, künftig vor einer Sperrung eine Mahnung mit
> ausreichender Frist an info@obscura-berlin.de zu senden, und um eine
> Bestätigung, dass dies so hinterlegt wird.
>
> Bitte bestätigen Sie mir die Entsperrung und den Zeitpunkt schriftlich.
>
> Mit freundlichen Grüßen
> Marcel Mancic
> OBSCURA DIGITAL MARKETING GMBH
> Flemingstr. 12 · 10557 Berlin
> Telefon: +49 30 28678956
> Kundennummer: [eintragen]

Vor dem Senden ausfüllen: **Kundennummer**, **Zahlungsdatum**, und die
Domains, falls es mehr als obscura-berlin.de sind.

---

## 2. Zweite E-Mail: Auth-Codes anfordern

**Erst senden, wenn die Entsperrung bestätigt ist.** Vorher nicht – eine
gesperrte Domain lässt sich nicht umziehen, und der Vorgang würde nur
scheitern.

**Betreff:**
> Anforderung der Auth-Codes (EPP) für den Domaintransfer – Kundennummer [Nummer]

**Nachricht:**
> Sehr geehrte Damen und Herren,
>
> ich beabsichtige, folgende Domains zu einem anderen Registrar zu
> transferieren:
>
> · obscura-berlin.de
> · [weitere Domain]
> · [weitere Domain]
>
> Bitte senden Sie mir für diese Domains die **Auth-Codes (EPP-Codes)**
> zu und **heben Sie die Transfersperre auf**.
>
> Bitte beachten Sie: Dies ist noch keine Kündigung des Vertrags. Die
> Kündigung erfolgt gesondert, sobald der Transfer abgeschlossen ist.
> Die E-Mail-Postfächer sollen bis dahin unverändert weiterlaufen.
>
> Mit freundlichen Grüßen
> Marcel Mancic
> OBSCURA DIGITAL MARKETING GMBH

**Wichtig:** Niemals kündigen, bevor der Transfer durch ist. Bei einer
Kündigung kann die Domain zur Löschung freigegeben werden – dann ist sie
im schlimmsten Fall für jeden registrierbar.

---

## 3. Der Umzug zu Hostinger – Reihenfolge

Die Reihenfolge ist entscheidend. Wer zuerst die Domain umzieht,
schaltet damit die Postfächer ab und verliert eingehende E-Mails.

### Schritt 1 – Neue Postfächer bei Hostinger anlegen
Im hPanel unter **E-Mails**. Dieselben Adressen wie bisher anlegen
(info@, und was es sonst gibt). Noch **nichts** umstellen.

### Schritt 2 – Alte E-Mails übertragen
Hostinger hat dafür ein Werkzeug („E-Mail-Import" / IMAP-Migration). Es
kopiert Postfächer per IMAP von IONOS nach Hostinger. Gebraucht werden:
IONOS-Serveradresse (imap.ionos.de), Benutzername und Passwort jedes
Postfachs. Das kann laufen, während bei IONOS noch alles aktiv ist.

### Schritt 3 – Domain transferieren
- Bei IONOS: Transfersperre aufheben, Auth-Code holen (siehe E-Mail oben)
- Bei Hostinger: Transfer bestellen, Auth-Code eingeben
- Dauer: in der Regel 5 bis 7 Tage

Bedingung: Die Domain muss mindestens 60 Tage registriert sein und darf
in den letzten 60 Tagen nicht transferiert worden sein.

### Schritt 4 – MX-Einträge umstellen
Nach dem Transfer die MX-Einträge auf Hostinger zeigen lassen. Erst ab
diesem Moment kommen neue E-Mails bei Hostinger an. Ein bis zwei Tage
lang beide Postfächer im Blick behalten, bis nichts mehr bei IONOS
ankommt.

### Schritt 5 – Erst jetzt bei IONOS kündigen
Mit Kündigungsbestätigung schriftlich.

---

## 4. Was es kostet

Alle Angaben in USD, weil Hostinger so abrechnet, und aus Drittquellen.
**Vor dem Buchen auf hostinger.de prüfen.**

### Domaintransfer
Hostinger bewirbt den Transfer für .de als kostenlos; dabei wird in der
Regel ein Jahr Laufzeit angehängt. Eine Drittquelle nennt 4,99 $ im
ersten Jahr und 7,99 $ Verlängerung. Rechne mit **8 bis 10 € pro Domain
und Jahr**.

### E-Mail-Postfächer
Die Quellen widersprechen sich je nach Laufzeit und Aktion:

| Quelle | Starter | Premium |
|---|---|---|
| Hostinger-Ratgeber | 0,59 $/Monat (12 Mon.), Verlängerung 1,59 $ | – |
| Bearhost | 0,39 $/Monat (48 Mon.), Verlängerung 1,59 $ | 1,99 $, Verl. 3,99 $ |
| TabsWire | 0,99 $/Monat (Aktion) | 2,99 $ |
| Mailafiniti | 2,99 $/Monat bei monatlicher Zahlung | – |

Speicher: 5 GB (Starter), 20 GB, 50 GB je nach Stufe.

### Überschlag für euch
Bei 3 Domains und 3 Postfächern, konservativ gerechnet:

- Domains: 3 × ca. 9 € = **27 € pro Jahr**
- Postfächer: 3 × ca. 1,60 $ Verlängerungspreis × 12 = **ca. 55 € pro Jahr**
- **Summe: rund 80 € pro Jahr**

Bei IONOS zahlt ihr aktuell 26 € im Monat, also **312 € pro Jahr**.
Ersparnis: grob **230 € pro Jahr**.

Das ist eine Schätzung auf Basis widersprüchlicher Drittquellen. Prüf
vor dem Wechsel die tatsächlichen Verlängerungspreise – nicht die
Aktionspreise im ersten Jahr.

---

## 5. Wie ihr danach an die E-Mails kommt

Drei Wege, alle gleichzeitig nutzbar:

**Webmail im Browser** – Hostinger hat eine Weboberfläche, erreichbar
über das hPanel oder direkt unter einer Webmail-Adresse. Funktioniert
auf jedem Gerät ohne Einrichtung.

**Handy** – in den Mail-Einstellungen ein IMAP-Konto hinzufügen. iPhone:
Einstellungen → Apps → Mail → Accounts → Account hinzufügen → Andere.

**Outlook, Apple Mail oder Thunderbird** – als IMAP-Konto einrichten.
Die Zugangsdaten (Serveradresse, Ports) stehen im hPanel beim jeweiligen
Postfach unter „Konfigurationseinstellungen".

**Outlook ist nicht nötig.** Es ändert sich nur der Server, nicht die
Adresse. `info@obscura-berlin.de` bleibt `info@obscura-berlin.de`.
Wenn ihr heute Apple Mail nutzt, könnt ihr das weiter nutzen – ihr
tragt dort nur den neuen Server ein.

**Wichtig:** Lasst die alten IONOS-Postfächer noch zwei bis drei Wochen
bestehen, auch wenn sie leer bleiben. Falls eine Nachricht doch noch
dort landet, ist sie nicht verloren.

---

## 6. Windows im Büro – meine Einschätzung

Kurz: **Ich würde es nicht machen.**

Der Wechsel löst kein Problem, das ihr habt. Die 26 € bei IONOS sind
ein Vertragsproblem, kein Betriebssystemproblem – daran ändert Windows
nichts.

**Was dagegen spricht:**

- Ein kompletter Umstieg kostet Arbeitszeit: neue Geräte einrichten,
  Projekte umziehen, alle neu einarbeiten. Bei einer Produktionsfirma
  bedeutet das Tage, in denen niemand schneidet.
- Eure Schnitt- und Farbprojekte hängen an Dateipfaden, Plug-ins und
  Schriften. Ein Wechsel bringt dort erfahrungsgemäß Nacharbeit.
- Lizenzen für Schnittsoftware sind meist plattformübergreifend, aber
  nicht alles: Final Cut und Motion laufen ausschließlich auf macOS.
  Falls ihr damit arbeitet, wäre der Umstieg ein Komplettumbau.
- Beim Dreh zählt Verlässlichkeit. Ein neues System am Set ist Risiko
  ohne Gegenwert.

**Was dafür spräche:**

- Bei reiner Rechenleistung pro Euro liegt ein selbst zusammengestellter
  Windows-Rechner meist vorn, besonders beim Rendern mit starker
  Grafikkarte.
- Wenn ihr ohnehin neue Rechner braucht, lohnt der Vergleich.

**Mein Vorschlag:** Nicht umstellen, sondern ergänzen. Wenn Renderzeiten
das Problem sind, stellt **einen** Windows-Rechner als Renderstation
daneben. Das kostet einen Bruchteil, stört niemanden im Alltag, und ihr
seht in der Praxis, ob sich mehr lohnt. Falls nicht, habt ihr trotzdem
einen schnellen Rechner mehr.

Wenn hinter der Überlegung etwas anderes steckt – Kosten, Ärger mit
Geräten, Software, die nicht läuft – sag mir, was genau. Dann schaue ich
mir das gezielt an, statt pauschal über Betriebssysteme zu reden.

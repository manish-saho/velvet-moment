Velvet Moments — V8.1 Cover Edition

V4 remains the design baseline. This update keeps the V8 front-cover experience intact and adds only the requested refinements:
- Mobile-first physical invitation-card cover.
- Cover date removed completely.
- Ganapati line-art emblem replaces the leaf symbol.
- “A little story awaits inside” is slightly larger for mobile readability.
- Cover background, card, text, glow and Pattachitra accents follow the selected invitation theme.
- Pattachitra accents use the active theme gold instead of a fixed color.
- Existing scratch-date reveal, exactly 3 memory/photo slots, events, countdown, venue, editor, sharing and opening experience remain intact.

RSVP Google Sheet
The included google_apps_script.gs is wired to the supplied spreadsheet ID and writes exactly these three columns:
Name | Will they join | No of guest

Important: Google does not expose a spreadsheet itself as a public POST endpoint. Deploy the included Apps Script as a Web App once, then paste the resulting /exec URL into Invitation Editor → RSVP Google Apps Script URL. Google’s official Apps Script documentation confirms that deployed web apps receive POST requests through doPost(e).

Sharing
Host the invitation online and give each invitation a public URL such as:
https://yourdomain.com/i/aarav-ananya

Then generate a QR code for that URL. Guest flow: QR/link → physical-style cover → Tap to Open → invitation.

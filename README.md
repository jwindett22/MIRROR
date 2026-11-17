# MIRROR: UNC Charlotte campus mobility twin (prototype)

A browser-based model of how people and vehicles move around the UNC Charlotte campus through a day: a 2D map and a 3D view driven by the class schedule, parking rules, transit, counts and stated assumptions.

**Prototype for feedback.** Agents are simulated from schedules, counts and assumptions; they are not tracked people or vehicles. Every assumption is listed on the page under "Assumptions in this prototype", and data sources are in the page footer.

## Viewing it

With GitHub Pages turned on for this repository (Settings → Pages → Deploy from a branch → `main`, `/ (root)`), the site is served at `https://jwindett22.github.io/MIRROR/`.

To run it on your own computer, the page must be served by a web server (opening `index.html` directly will not load the terrain and aerial images):

- Mac: double-click `start-mac.command`, or run `python3 -m http.server 8765` in this folder and open <http://localhost:8765/>
- Windows: double-click `start-windows.bat` (needs Python)

## What differs from the copy inside Claude

- The observation store, the CSV download and the "standalone copy" button do not work here; they use Claude's page services.
- Live feeds (NCDOT cameras, bus positions, National Weather Service forecast) need internet and may be blocked by the feeds themselves; the page then uses its stored data.
- The 3D library (deck.gl) and fonts load from public CDNs, so the 3D view needs internet.

## Files

`index.html` holds the page and the model. The `*data.js` files are the data layers (buildings, roads, classes, parking, terrain, trees and so on); `aerial/` and `cams/` hold imagery.

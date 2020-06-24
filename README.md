# SVG Web Viz

Setting up:
- run `fix-svg.sh <svg file>` to make sure all of the `fill`s in the SVG file are "transparent" rather than "none"
- move the SVG file to `static/svg`
- edit `static/index.html` to point to the SVG file in `static/svg`
- edit `static/js/app.js` to point to the `ttl` file (usually in `static/ttl`)
- adjust the `idmap` at the top of `static/js/app.js` to encode the labels and IDs from the TTL file to the SVG elements that should be highlighted

Running:
- Install Python deps in `requirements.txt`
- Run `python app.py`

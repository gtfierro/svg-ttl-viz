const idmap = {
	"urn:ex:00001": {'label': "outside_air", 'id': "id41"},
	"urn:ex:00002": {'label': "outside_air.oa", 'id': "id44"},
	"urn:ex:00003": {'label': "outside_air.econ", 'id': "id42"},
	"urn:ex:00004": {'label': "outside_air.ea", 'id': "id43"},
	"urn:ex:00005": {'label': "min_oa_damper", 'id': "id14"},
	"urn:ex:00006": {'label': "min_oa_damper.ain", 'id': "id16"},
	"urn:ex:00007": {'label': "min_oa_damper.aout", 'id': "id47"},
	"urn:ex:00008": {'label': "min_oa_damper.pos", 'id': ""},
	"urn:ex:00010": {'label': "outside_air_afms", 'id': "id55"},
	"urn:ex:00011": {'label': "outside_air_afms.ain", 'id': "id56"},
	"urn:ex:00012": {'label': "outside_air_afms.aout", 'id': "id57"},
	"urn:ex:00013": {'label': "outside_air_afms.flow", 'id': ""},
	"urn:ex:00015": {'label': "economizer_oa_damper", 'id': "id12"},
	"urn:ex:00016": {'label': "economizer_oa_damper.ain", 'id': "id13"},
	"urn:ex:00017": {'label': "economizer_oa_damper.aout", 'id': "id49"},
	"urn:ex:00018": {'label': "economizer_oa_damper.pos", 'id': ""},
	"urn:ex:00020": {'label': "mixed_air", 'id': "id45"},
	"urn:ex:00021": {'label': "mixed_air_damper", 'id': "id26"},
	"urn:ex:00022": {'label': "mixed_air_damper.ain", 'id': "id54"},
	"urn:ex:00023": {'label': "mixed_air_damper.aout", 'id': "id36"},
	"urn:ex:00024": {'label': "mixed_air_damper.pos", 'id': ""},
	"urn:ex:00025": {'label': "hot_water_coil", 'id': "id23"},
	"urn:ex:00026": {'label': "hot_water_coil.ain", 'id': "id30"},
	"urn:ex:00027": {'label': "hot_water_coil.aout", 'id': "id31"},
	"urn:ex:00028": {'label': "hot_water_coil.hws", 'id': "id50"},
	"urn:ex:00029": {'label': "hot_water_coil.hwr", 'id': "id51"},
	"urn:ex:00030": {'label': "hot_water_coil.hw_valve", 'id': ""},
	"urn:ex:00031": {'label': "hot_water_coil.hw_valve.pos", 'id': ""},
	"urn:ex:00032": {'label': "hot_water_coil.hw_valve.hwin", 'id': ""},
	"urn:ex:00033": {'label': "hot_water_coil.hw_valve.hwout", 'id': ""},
	"urn:ex:00036": {'label': "chilled_water_coil", 'id': "id24"},
	"urn:ex:00037": {'label': "chilled_water_coil.ain", 'id': "id32"},
	"urn:ex:00038": {'label': "chilled_water_coil.aout", 'id': "id33"},
	"urn:ex:00039": {'label': "chilled_water_coil.cws", 'id': "id52"},
	"urn:ex:00040": {'label': "chilled_water_coil.cwr", 'id': "id53"},
	"urn:ex:00041": {'label': "chilled_water_coil.cw_valve", 'id': ""},
	"urn:ex:00042": {'label': "chilled_water_coil.cw_valve.pos", 'id': ""},
	"urn:ex:00043": {'label': "chilled_water_coil.cw_valve.cwin", 'id': ""},
	"urn:ex:00044": {'label': "chilled_water_coil.cw_valve.cwout", 'id': ""},
	"urn:ex:00047": {'label': "supply_fan", 'id': "id25"},
	"urn:ex:00048": {'label': "supply_fan.ain", 'id': "id34"},
	"urn:ex:00049": {'label': "supply_fan.aout", 'id': "id35"},
	"urn:ex:00051": {'label': "zone_1", 'id': "id73"},
	"urn:ex:00052": {'label': "zone_1.sa", 'id': "id75"},
	"urn:ex:00053": {'label': "zone_1.ra", 'id': "id74"},
	"urn:ex:00054": {'label': "vav_1", 'id': ""},
	"urn:ex:00055": {'label': "vav_1.temp", 'id': ""},
	"urn:ex:00056": {'label': "vav_1.air_flow_station", 'id': "id61"},
	"urn:ex:00057": {'label': "vav_1.air_flow_station.ain", 'id': "id62"},
	"urn:ex:00058": {'label': "vav_1.air_flow_station.aout", 'id': "id63"},
	"urn:ex:00059": {'label': "vav_1.air_flow_station.flow", 'id': ""},
	"urn:ex:00060": {'label': "vav_1.damper", 'id': "id58"},
	"urn:ex:00061": {'label': "vav_1.damper.ain", 'id': "id59"},
	"urn:ex:00062": {'label': "vav_1.damper.aout", 'id': "id60"},
	"urn:ex:00063": {'label': "vav_1.damper.pos", 'id': ""},
	"urn:ex:00064": {'label': "vav_1.hw_coil", 'id': "id64"},
	"urn:ex:00065": {'label': "vav_1.hw_coil.ain", 'id': "id65"},
	"urn:ex:00066": {'label': "vav_1.hw_coil.aout", 'id': "id66"},
	"urn:ex:00067": {'label': "vav_1.hw_coil.hws", 'id': "id67"},
	"urn:ex:00068": {'label': "vav_1.hw_coil.hwr", 'id': "id68"},
	"urn:ex:00069": {'label': "vav_1.hw_valve", 'id': ""},
	"urn:ex:00070": {'label': "vav_1.hw_valve.pos", 'id': ""},
	"urn:ex:00071": {'label': "vav_1.hw_valve.hwin", 'id': ""},
	"urn:ex:00072": {'label': "vav_1.hw_valve.hwout", 'id': ""},
	"urn:ex:00077": {'label': "zone_2", 'id': "id91"},
	"urn:ex:00078": {'label': "zone_2.sa", 'id': "id93"},
	"urn:ex:00079": {'label': "zone_2.ra", 'id': "id92"},
	"urn:ex:00080": {'label': "vav_2", 'id': ""},
	"urn:ex:00081": {'label': "vav_2.temp", 'id': ""},
	"urn:ex:00082": {'label': "vav_2.air_flow_station", 'id': "id79"},
	"urn:ex:00083": {'label': "vav_2.air_flow_station.ain", 'id': "id80"},
	"urn:ex:00084": {'label': "vav_2.air_flow_station.aout", 'id': "id81"},
	"urn:ex:00085": {'label': "vav_2.air_flow_station.flow", 'id': ""},
	"urn:ex:00086": {'label': "vav_2.damper", 'id': "id76"},
	"urn:ex:00087": {'label': "vav_2.damper.ain", 'id': "id77"},
	"urn:ex:00088": {'label': "vav_2.damper.aout", 'id': "id78"},
	"urn:ex:00089": {'label': "vav_2.damper.pos", 'id': ""},
	"urn:ex:00090": {'label': "vav_2.hw_coil", 'id': "id82"},
	"urn:ex:00091": {'label': "vav_2.hw_coil.ain", 'id': "id83"},
	"urn:ex:00092": {'label': "vav_2.hw_coil.aout", 'id': "id84"},
	"urn:ex:00093": {'label': "vav_2.hw_coil.hws", 'id': "id85"},
	"urn:ex:00094": {'label': "vav_2.hw_coil.hwr", 'id': "id86"},
	"urn:ex:00095": {'label': "vav_2.hw_valve", 'id': ""},
	"urn:ex:00096": {'label': "vav_2.hw_valve.pos", 'id': ""},
	"urn:ex:00097": {'label': "vav_2.hw_valve.hwin", 'id': ""},
	"urn:ex:00098": {'label': "vav_2.hw_valve.hwout", 'id': ""},
	"urn:ex:00103": {'label': "supply_air", 'id': "id4"},
	"urn:ex:00104": {'label': "return_air", 'id': "id3"},
	"urn:ex:00105": {'label': "return_fan", 'id': "id21"},
	"urn:ex:00106": {'label': "return_fan.ain", 'id': "id22"},
	"urn:ex:00107": {'label': "return_fan.aout", 'id': "id39"},
	"urn:ex:00108": {'label': "exhaust_air_damper", 'id': "id18"},
	"urn:ex:00109": {'label': "exhaust_air_damper.ain", 'id': "id38"},
	"urn:ex:00110": {'label': "exhaust_air_damper.aout", 'id': "id19"},
	"urn:ex:00111": {'label': "exhaust_air_damper.pos", 'id': ""},
	"urn:ex:00114": {'label': "return_air_damper", 'id': "id20"},
	"urn:ex:00115": {'label': "return_air_damper.ain", 'id': "id40"},
	"urn:ex:00116": {'label': "return_air_damper.aout", 'id': "id48"},
	"urn:ex:00117": {'label': "return_air_damper.pos", 'id': ""},
};
const nodemap = {};

window.addEventListener("load", function() {
    // populate reverse
	Object.entries(idmap).forEach(k => {
        nodemap[k[1].id] = k[0];
    });

    // reference to most recently clicked SVG element
    var last_clicked = null;
    // reference highlight objects in the code snippet so we can clear them
    const highlights = [];

    var editor = CodeMirror.fromTextArea(document.getElementById("turtlefile"), {
    	mode: "text/turtle",
        readOnly: true,
        lineNumbers: true
        // matchBrackets: true
    });
    editor.setSize("100%",500);

    var queryeditor = CodeMirror.fromTextArea(document.getElementById("query"), {
    	mode: "application/sparql-query",
        lineNumbers: true
        // matchBrackets: true
    });
    queryeditor.setSize("100%",100);

    // fetch file asynchronously
    var fileRequest = new XMLHttpRequest();
    fileRequest.onreadystatechange = function() {
        if (fileRequest.readyState == 4 && fileRequest.status == 200)
            editor.setValue(fileRequest.responseText);
    }
    fileRequest.open("GET", 'static/ttl/guideline-36-model-01.ttl', true);
    fileRequest.send();

    var update_clicked_id_label = function(id) {
        document.getElementById("clicked_id").innerHTML = id;
        if (id !== "") {
            document.getElementById("id_label").innerHTML = idmap[nodemap[id]].label;
        }
    }

    // TODO: assumes that you are going to a line of form "<urn:IDENT"
    // where this pattern occurs at the start of the line
    var highlighted_lines_around_id = function(ident) {
        // clear old highlights
        highlights.forEach(hl => hl.clear());
        highlights.length = 0; // clears the list

        var search = new RegExp('^<' + nodemap[ident]);
        var cursor = editor.getSearchCursor(search);
        if (!cursor.findNext()) {
            console.log("Could not find ident in turtle:", ident);
            return
        }
        var pos = cursor.from();
        // first line of the definition
        var starting_line = cursor.from().line;

        // scroll to that line
        var h = editor.getScrollInfo().clientHeight;
        var coords = editor.charCoords(pos, "local");
        editor.scrollTo(null, (coords.top + coords.bottom - h) / 2);

        // now search for the next '.' constituting the end of the turtle block
        var cursor2 = editor.getSearchCursor(/\.$/, cursor.to());
        cursor2.findNext();
        var pos = cursor2.from();
        var ending_line = cursor2.to().line;

        // highlight between starting_line and ending_line
        var hl = editor.markText({line: starting_line, ch:0}, {line: ending_line, ch:100}, {className: "highlighted-line"});
        highlights.push(hl)
    }

    var clear_svg_highlight = function(svg) {
        // clear styles
        let paths = svg.querySelectorAll("g > path");
        Array.prototype.forEach.call(paths, node => {
            if (node.getAttribute("fill") !== "rgb(255,255,255)") {
                node.setAttribute("style", "fill: transparent; fill-opacity: 1.0");
            } else {
                console.log(node.getAttribute("fill"));
            }
        });
    }

    var elem = document.getElementById('slide13');
    var svgDoc = elem.contentDocument;
    svgDoc.addEventListener("click", function(e) {
        clear_svg_highlight(svgDoc);

        var node = e.target.closest('path');
        var ident = e.target.closest('g').id
        update_clicked_id_label(ident);
        highlighted_lines_around_id(ident);

        node.setAttribute("style", "fill: #ff6961; fill-opacity: 1.0");
        last_clicked = node;
    });

    // setup query button
    document.getElementById("doquery").addEventListener("click", function() {
        let query_value = queryeditor.getValue();
        let req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200) {
                clear_svg_highlight(svgDoc);
                update_clicked_id_label(""); // clear
                highlights.forEach(hl => hl.clear());
                highlights.length = 0; // clears the list

                let res = JSON.parse(req.responseText);
                res.forEach(item => {
                   Object.values(item).forEach(ident => {
                     if (idmap[ident] === undefined) { return }
                     let node_id = idmap[ident].id;
                     // console.log(ident, idmap[ident]);
                     if (node_id === "") { return }
                     let x = svgDoc.getElementById(node_id).getElementsByTagName("path");
                     Array.prototype.forEach.call(x, node => {
                        if (node.getAttribute("fill") === "transparent") {
                            node.setAttribute("style", "fill: #ff6961; fill-opacity: 1.0");
                        }
                     });
                     // console.log("look for", ident);
                   });
                })
            } else if (req.readyState == 4) {
                console.error(req);
            }
        }
        req.open("POST", "/query", true);
        req.send(JSON.stringify({'file': 'guideline-36-model-01.ttl', 'query': query_value}));
    });
});

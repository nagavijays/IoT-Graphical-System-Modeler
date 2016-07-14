function export_graph(a){
        	var myWindow = window.open();
        	myWindow.document.write("<title>Export Graph</title><pre id='jsonExport'>h</pre>");
        	
        	myWindow.document.getElementById("jsonExport").innerHTML = JSON.stringify(a.toJSON(), undefined, 2);
        	
        }

function export_sementic(a) {
	var myWindow = window.open();
	var exp_grp = a.toJSON();
	exp_grp = JSON.parse(JSON.stringify(exp_grp).split('"textarea":').join('"node":'));
	for (var i = 0; i < exp_grp.cells.length; i++) {
		delete exp_grp.cells[i].angle;
		delete exp_grp.cells[i].position;
		delete exp_grp.cells[i].size;
		delete exp_grp.cells[i].img_src;
		delete exp_grp.cells[i].z;
		delete exp_grp.cells[i].attrs;
		delete exp_grp.cells[i].type;
		delete exp_grp.cells[i].embeds;
		
	}
	myWindow.document.write("<title>Export Logic</title><pre id='jsonExport'>h</pre>");
	
	myWindow.document.getElementById("jsonExport").innerHTML = JSON.stringify(exp_grp, undefined, 2);
	
	console.log(exp_grp.cells);
}

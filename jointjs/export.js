function export_graph(a){
        	var myWindow = window.open();
        	myWindow.document.write("<title>Export</title><pre id='jsonExport'>h</pre>");
        	
        	myWindow.document.getElementById("jsonExport").innerHTML = JSON.stringify(a.toJSON(), undefined, 2);
        	
        }

function export_sementic(a) {
	var exp_grp = a.toJSON();
	
	
	console.log(exp_grp.cells.length);
}

function export_graph(a){
        	var myWindow = window.open();
        	console.log(a.toJSON());
        	myWindow.document.write("<title>Export</title><pre id='jsonExport'>h</pre>");
        	
        	myWindow.document.getElementById("jsonExport").innerHTML = JSON.stringify(a.toJSON(), undefined, 2);
        	
        }

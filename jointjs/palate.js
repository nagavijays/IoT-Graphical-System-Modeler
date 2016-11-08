function palate_devices(category,i) {		
	var device_cat  = document.getElementById("device_cat"+category);
	var nw_elmnt = document.createElement('div');
		nw_elmnt.setAttribute("class", "col-lg-3 col-md-4 col-xs-6");
	var device_img = document.createElement('img');	
		device_img.setAttribute("class","device_img");
		device_img.setAttribute("src","./resources/"+device_catlog[i].image);
		device_img.setAttribute("title",device_catlog[i].device);
		device_img.setAttribute("value",i);
		nw_elmnt.appendChild(device_img);
		device_cat.appendChild(nw_elmnt);
}

function palate_catogories (category_name,i){
	var side_menu  = document.getElementById("side-menu");
	var li_elmnt = document.createElement('li');
	var a_elmnt = document.createElement('a');
	    a_elmnt.setAttribute("href", "#");
	var i_elmnt = document.createElement('i');
		i_elmnt.setAttribute("class", "glyphicon glyphicon-hdd");
	var t = document.createTextNode(" "+category_name);
	var span_elmnt = document.createElement('span');
	    span_elmnt.setAttribute("class", "fa arrow");
	var ul_elmnt = document.createElement('ul');
		ul_elmnt.setAttribute("class", "nav nav-second-level");
	var div_elmnt = document.createElement('div');
		div_elmnt.setAttribute("id","device_cat"+(i+1));
		
		side_menu.appendChild(li_elmnt);
		li_elmnt.appendChild(a_elmnt);
		a_elmnt.appendChild(i_elmnt);
		a_elmnt.appendChild(t);
		a_elmnt.appendChild(span_elmnt);
		li_elmnt.appendChild(ul_elmnt);
		ul_elmnt.appendChild(div_elmnt);
		
}
var m5 = new joint.shapes.devs.Model({
     	    position: { x: 50, y: 50 },
     	    size: { width: 70, height: 70 },
     	    inPorts: ['in'],
     	    outPorts: ['out'],
     	    attrs: {
     	        '.label': { text: 'Model', 'ref-x': .4, 'ref-y': .2 },
     	        rect: { fill: '#2ECC71' },
     	        '.inPorts circle': { fill: '#16A085' },
     	        '.outPorts circle': { fill: '#E74C3C' }
     	    }
     	});
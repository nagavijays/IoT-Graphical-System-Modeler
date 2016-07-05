// Create a custom element.
	    // ------------------------
	    joint.shapes.html = {};
	    joint.shapes.html.Element = joint.shapes.basic.Generic.extend(_.extend({}, joint.shapes.basic.PortsModelInterface, {
	        markup: '<g class="rotatable"><g class="scalable"><rect/></g><g class="inPorts"/><g class="outPorts"/></g>',
	        portMarkup: '<g class="port<%= id %>"><circle/></g>',
	        defaults: joint.util.deepSupplement({
	            type: 'html.Element',
	            size: { width: 60, height: 40 },
	            inPorts: [],
	            outPorts: [],
	            attrs: {
	                '.': { magnet: false },
	                rect: {
	                    stroke: 'none', 'fill-opacity': 0, width: 150, height: 250,
	                },
	                circle: {
	                    r: 6, //circle radius
	                    magnet: true,
	                    stroke: 'black'
	                },

	                '.inPorts circle': { fill: 'green', magnet: 'passive', type: 'input'},
	                '.outPorts circle': { fill: 'red', type: 'output'}
	            }
	        }, joint.shapes.basic.Generic.prototype.defaults),
	        getPortAttrs: function (portName, index, total, selector, type) {

	            var attrs = {};
	            var portClass = 'port' + index;
	            var portSelector = selector + '>.' + portClass;
	            var portCircleSelector = portSelector + '>circle';
	            attrs[portCircleSelector] = { port: { id: portName || _.uniqueId(type), type: type } };
	            attrs[portSelector] = { ref: 'rect', 'ref-y': (index + 0.5) * (1 / total) };
	            if (selector === '.outPorts') { attrs[portSelector]['ref-dx'] = 0; }
	            return attrs;
	        }
	    }));


	   // Create a custom view for that element that displays an HTML div above it.
	   // -------------------------------------------------------------------------

	    joint.shapes.html.ElementView = joint.dia.ElementView.extend({

	        template: [
	            '<div class="html-element">',
	            '<button class="delete">x</button>',
	            '<span id="lbl" value="Please write here"></span>',
	            '</div>'
	        ].join(''),

	    initialize: function() {
	        _.bindAll(this, 'updateBox');
	        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

	        this.$box = $(_.template(this.template)());
	        // Prevent paper from handling pointerdown.
	        this.$box.find('input,select').on('mousedown click', function(evt) { evt.stopPropagation(); });


	        // This is an example of reacting on the input change and storing the input data in the cell model.
	        
	        this.$box.find('.delete').on('click', _.bind(this.model.remove, this.model));
	        // Update the box position whenever the underlying model changes.
	        this.model.on('change', this.updateBox, this);
	        // Remove the box when the model gets removed from the graph.
	        this.model.on('remove', this.removeBox, this);

	        this.updateBox();

	        this.listenTo(this.model, 'process:ports', this.update);
	        joint.dia.ElementView.prototype.initialize.apply(this, arguments);
	    },


	     render: function() {
	        joint.dia.ElementView.prototype.render.apply(this, arguments);
	        this.paper.$el.prepend(this.$box);
	        // this.paper.$el.mousemove(this.onMouseMove.bind(this)), this.paper.$el.mouseup(this.onMouseUp.bind(this));
	        this.updateBox();
	        return this;
	    },

	    renderPorts: function () {
	        var $inPorts = this.$('.inPorts').empty();
	        var $outPorts = this.$('.outPorts').empty();

	        var portTemplate = _.template(this.model.portMarkup);

	        _.each(_.filter(this.model.ports, function (p) { return p.type === 'in' }), function (port, index) {

	            $inPorts.append(V(portTemplate({ id: index, port: port })).node);
	        });
	        _.each(_.filter(this.model.ports, function (p) { return p.type === 'out' }), function (port, index) {

	            $outPorts.append(V(portTemplate({ id: index, port: port })).node);
	        });
	    }, 

	    update: function () {

	        // First render ports so that `attrs` can be applied to those newly created DOM elements
	        // in `ElementView.prototype.update()`.
	        this.renderPorts();
	        joint.dia.ElementView.prototype.update.apply(this, arguments);
	    },

	    updateBox: function() {
	        // Set the position and dimension of the box so that it covers the JointJS element.
	        var bbox = this.model.getBBox();
	        // Example of updating the HTML with a data stored in the cell model.
	        // paper.on('blank:pointerdown', function(evt, x, y) { this.$box.find('textarea').toBack(); });
	        this.$box.find('span').text(this.model.get('textarea'));
	        this.model.on('cell:pointerclick', function(evt, x, y) { this.$box.find('textarea').toFront(); });
	        this.$box.css({ width: bbox.width, height: bbox.height, left: bbox.x, top: bbox.y, transform: 'rotate(' + (this.model.get('angle') || 0) + 'deg)' });
	    },
	    removeBox: function(evt) {
	        this.$box.remove();
	    }
	}); 


	// Create JointJS elements and add them to the graph as usual.
	// -----------------------------------------------------------

	var el1 = new joint.shapes.html.Element({ 
	    position: { x: 50, y: 250 }, 
	    size: { width: 60, height: 40 },
	    inPorts: ['in','in1'],
	    outPorts: ['out'],
	    textarea: 'Device'
	  });

	var el2 = new joint.shapes.html.Element({ 
	    position: { x: 100, y: 400 },
	    size: { width: 60, height: 40 },
	    inPorts: ['in'],
	    outPorts: ['out'],
	    textarea: 'Device'
	  });
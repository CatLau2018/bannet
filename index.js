(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[442,302,440,440],[0,744,440,440],[0,0,720,300],[0,302,440,440],[442,744,440,440]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.basket = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ceramic = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.counter_top = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dip_bowl = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wood_bowl = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basket();
	this.instance.parent = this;
	this.instance.setTransform(-220,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-220,440,440);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basket();
	this.instance.parent = this;
	this.instance.setTransform(-220,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-220,440,440);


(lib.everydaythings_logosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// everydaythings_logo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDABIAAgBQADAAAEABg");
	this.shape.setTransform(118.6,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOCRIAAg6QAiAXAhAAQARAAAHgJQAJgJAAgQQAAgQgKgNQgJgNgWgQQgVgNgLgMQgLgNgGgQQgFgRAAgUQgBgrAWgWQAZgXAkAAQAMAAAYAGIAAADIAIAAQASAHAIAFIgVAvIgWgLQgJgEgPAAQgMAAgIAJQgJAIAAARQAAARAJALQANAOATAMQAcATAOAXQANAWAAAcQAAAtgXAWQgYAXgoAAQgkAAgigRg");
	this.shape_1.setTransform(113.8,47.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA7CgIgShNIhQAAIgSBNIgzAAQgFAAgDgCIBNk9IBOAAIBOE/gAAeAcIgeiOQgBAMgGAdIgWBlIA7AAg");
	this.shape_2.setTransform(130,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiUEUQgegqAAhOQAAhOAigpQAjgqA6AAIAQABIAIABIAAk6IBYAAQA3AAAeAqQAeAoADBLQAABNghArQgfAqg7AAIg/AAQAOAAASAMIgTAuQgegPgTAAQghAAgVAeQgSAegBAzQABA3AOAZQAOAdAbAAQAQAAARgDIAAhJIgsAAIAAg3IBiAAIAACmQgxASgoAAQg3AAgfgqgAAmg1IARAAQAgAAAOgZQAQgdAAgyQAAhpg6AAIgVAAg");
	this.shape_3.setTransform(100.8,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA8E6IAAiEIhNAAIAACDIg3AAIAAk0IAhAAIhKk+IA6AAIAqC/QAIApADAfQACgVAIgxIApjBIA6AAIhJE/IgzAAIAAB5IBNAAIAAh5IA2AAIAAE0g");
	this.shape_4.setTransform(28.2,31.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdCgIAAh/IhJjAIA+AAIAoB9IAqh9IA9AAIhOC+IAACBg");
	this.shape_5.setTransform(147.2,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCgIAAh/IhLjAIA+AAIApB9IAqh9IA9AAIhMC+IAACBg");
	this.shape_6.setTransform(86.5,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhtE5IAAkzIAXAAIAAk+IBKAAQAwgBAWAZQAYAaAAAuQAAA9gpAYIA9CJIAIAAIAAEyIhGAAIhgjbIgDAAQAGARAAAhIAACqgAA7DjIAAgCIAEAAQgGgVAAgfIAAinIgSAAIgyh4IgUAAIAAB4IgEAAgAgfiqIAQAAQAVAAAHgLQAKgMAAgWQAAgYgKgJQgIgJgVAAIgPAAg");
	this.shape_7.setTransform(68.1,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPE6IAAk0Ig3AAIAAk/ICOAAIAAA4IhNAAIAABMIBNAAIAAAsIhNAAIAABZIBNAAIAAA2IghAAIAAE0g");
	this.shape_8.setTransform(47.9,31.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWE6IAAkIIhBAAIAAgsIALAAIAAk/ICOAAIAAA4IhMAAIAABMIBMAAIAAAsIhMAAIAABZIBMAAIAAA2IAWAAIAAAsIg4AAIAAEIg");
	this.shape_9.setTransform(8.8,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.5,63.6);


// stage content:
(lib.FirstPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headline
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfBbQgZgjAAg2QAAg/AhglQAiglA0AAQA4AAAiAnQAhAmgBBOIirAAQABAeAQARQAPARAXAAQAQAAALgIQALgJAGgUIBEAMQgNAlgcAUQgdATgrAAQhCAAghgsgAgihCQgPARAAAcIBmAAQgBgegPgPQgOgQgVAAQgWAAgOAQg");
	this.shape.setTransform(646.8,120.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghCzIAAllIBDAAIAAFlg");
	this.shape_1.setTransform(626.2,115.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiBxQgXgVABghQgBgXALgQQALgSASgHQATgKAkgHQAvgJASgIIAAgHQAAgTgKgJQgJgIgaAAQgTAAgKAHQgKAHgHATIg+gMQALglAZgTQAagSAzAAQAsAAAXAMQAXAKAJARQAJARAAAsIgBBPQAAAjADAQQADAQAKATIhEAAIgHgVIgCgIQgSARgUAJQgTAJgXgBQgnABgYgXgAgBAPQgdAHgIAFQgOAKAAAOQAAAPAKALQAMAKAQAAQARAAARgMQANgJAEgOQACgJAAgZIAAgNQgNAFgbAFg");
	this.shape_2.setTransform(605.3,120.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhlCaQglgggHg8IBHgHQAGAkAUAQQATARAgAAQAjAAARgPQATgOgBgUQABgNgIgJQgIgJgSgGQgNgFgsgLQg6gOgYgUQgggegBgqQAAgcAQgXQAPgYAegNQAdgMApAAQBDAAAhAdQAjAeABAxIhIADQgFgbgOgMQgQgMgdAAQggAAgSAMQgMAJAAAOQAAAMALAJQAOAMA0AMQA1ANAZANQAZANAPAXQANAXAAAiQABAegSAbQgRAbgfANQgfANgvAAQhDAAgkgfg");
	this.shape_3.setTransform(574.4,115.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyCFIAAiFQgBgpgEgMQgEgMgKgIQgKgGgOAAQgRAAgOAJQgOAKgFAQQgGARABAqIAAB2IhFAAIAAkDIA/AAIAAAmQAigrAzAAQAXAAASAHQAUAJAJANQAKAMAEAQQADARAAAdIAAChg");
	this.shape_4.setTransform(612.3,61.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah9CJQgwgxAAhWQAAg2ARgkQAMgcAVgWQAVgVAZgLQAigOArAAQBPAAAvAxQAwAxAABXQAABWgvAyQgwAwhOAAQhPAAgvgwgAhHhcQgbAfAAA9QAAA9AcAfQAcAgAqgBQAsAAAbgeQAcggAAg9QAAg+gbgeQgbgegtAAQgrAAgcAeg");
	this.shape_5.setTransform(577.5,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

	// text box
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#339999").s().p("AwyQzMAAAghlMAhlAAAMAAAAhlg");
	this.shape_6.setTransform(612.5,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(40));

	// ceramic bowl
	this.instance = new lib.ceramic();
	this.instance.parent = this;
	this.instance.setTransform(116,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// wood bowl
	this.instance_1 = new lib.wood_bowl();
	this.instance_1.parent = this;
	this.instance_1.setTransform(116,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// dip bowl
	this.instance_2 = new lib.dip_bowl();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// basket
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-229.9,236.1,1,1,135);

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(336,236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,rotation:0,x:336,y:236},19).wait(21));

	// logo
	this.instance_5 = new lib.everydaythings_logosvg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(98.1,47.3,1,1,0,0,0,78.8,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	// back
	this.instance_6 = new lib.counter_top();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.1,74.9,1261.2,622.3);
// library properties:
lib.properties = {
	width: 720,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
/*
	模拟双向数据绑定之-模板引擎
	作者：吴光远
*/

function ggT(id, scop) {
	this.id = id;
	this.scop = scop;
	this.components = {};
	this.componentName = '';
};

ggT.prototype.ggS = function () {

	document.getElementById(this.id).innerHTML = this.components[this.componentName];
	var v = document.getElementById(this.id).innerHTML;
	// console.log(v);
	for (var k in this.scop) {//遍历scop对象
		var r = "{{" + k + "}}";
		var reg = new RegExp(r, "g");
		v = v.replace(reg, this.scop[k]);
	};
	document.getElementById(this.id).innerHTML = v;
	console.log(this.components);
};

ggT.prototype.component = function(componentName, component){
	this.componentName = componentName
	var newObj = {};
	newObj[componentName] = component;
	Object.assign(this.components, newObj);
}

module.exports = ggT;





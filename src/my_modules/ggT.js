/*
	模拟双向数据绑定之-模板引擎
	作者：吴光远
*/

function ggT(id, scop, router) {
	this.id = id || '';
	this.scop = scop || '';
	this.components = {};
	this.componentName = '';
	this.page = router || [];
};

ggT.prototype.ggS = function (page) {
	page = (page || this.page[0].component) || '';
	document.getElementById(this.id).innerHTML = page;
	var v = document.getElementById(this.id).innerHTML;
	// console.log(v);
	for (var k in this.scop) {//遍历scop对象
		var r = "{{" + k + "}}";
		var reg = new RegExp(r, "g");
		v = v.replace(reg, this.scop[k]);
	};
	document.getElementById(this.id).innerHTML = v;
	console.log(page);
	console.log(this.page);
};

ggT.prototype.component = function (componentName, component) {
	this.componentName = componentName
	var newObj = {};
	newObj[componentName] = component;
	Object.assign(this.components, newObj);
};

ggT.prototype.router = function (router) {
	let page = '';
	for (let i = 0; i < this.page.length; i++) {
		if(this.page[i].name === router.name){
			page = this.page[i].component;
			break;
		}
	}
	console.log(page);
	document.getElementById(this.id).innerHTML = '';
	this.ggS(page);
}

module.exports = ggT;





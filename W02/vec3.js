//Constructor
Vec3 = function(x, y, z,){
	this.x = x;
	this.y = y;
	this.z = z;
}

//Add method
Vec3.prototype.add = function(v){
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
}

//Sum method
Vec3.prototype.sum = function(){
	return this.x + this.y + this.z;
}

//Search minimum value
Vec3.prototype.mini = function(){
	var values = [this.x,this.y,this.z];
	return values.sort()[0];
}

//Search maxi value
Vec3.prototype.maxi = function(){
	var values = [this.x,this.y,this.z];
	return values.sort()[2];
}

//Search mid value
Vec3.prototype.mid = function(){
	var values = [this.x,this.y,this.z];
	return values.sort()[1];
}

function AreaOfTriangle(v1, v2, v3){
	var s1 = Math.sqrt(Math.pow((v1.x-v2.x),2)+Math.pow((v1.y-v2.y),2)+Math.pow((v1.z-v2.z),2))
	var s2 = Math.sqrt(Math.pow((v1.x-v3.x),2)+Math.pow((v1.y-v3.y),2)+Math.pow((v1.z-v3.z),2))
	var s3 = Math.sqrt(Math.pow((v2.x-v3.x),2)+Math.pow((v1.y-v2.y),2)+Math.pow((v2.z-v3.z),2))
	var s = (s1 + s2 + s3)/2;
	var area =  Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
	return area;
}

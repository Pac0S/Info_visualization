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
	if (this.x<=this.y && this.x <=this.z){
		mini = this.x;
	}else if (this.y <= this.x && this.y <= this.z){
		mini = this.y;
	}else{
		mini = this.z;
	}
	return mini;
}

//Search maxi value
Vec3.prototype.maxi = function(){
	if (this.x>=this.y && this.x >=this.z){
		maxi = this.x;
	}else if (this.y >= this.x && this.y >= this.z){
		maxi = this.y;
	}else{
		maxi = this.z;
	}
	return maxi;
}

//Search mid value
Vec3.prototype.mid = function(){
	if (this.x != this.maxi() && this.x != this.mini()){
		mid = this.x;
	}else if (this.y != this.maxi() && this.y != this.mini()){
		mid = this.y;
	}else{
		mid = this.z;
	}
}

function AreaOfTriangle(v1, v2, v3){
	


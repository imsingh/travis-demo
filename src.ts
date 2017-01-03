class First {
	data:string = "Hello";
	constructor(value) {
		this.data = value;
	};
	
	display() {
		console.log(this.data);
	}
}

let check = new First();
check.display();
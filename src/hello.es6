class Hello {
	run() {
		document.querySelector('#helloDiv').innerHTML = "Hello world";
	}
}

var hello = new Hello();
hello.run();
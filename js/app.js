var scene, camera, renderer;

init();

function init(){
	// Choosing a renderer and adding the elemnt to the dom where the scene is rendered
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(600, 600);
	document.body.appendChild(renderer.domElement);

	// Create a scene
	scene = new THREE.Scene();

	// Create the camera
	camera = new THREE.PerspectiveCamera(45, 600 / 600, 0.1, 1000);
	camera.position.z = 400;

	// Create a geometry
	var geometry = new THREE.SphereGeometry(20, 200, 200);

	// create a material
	var material = new THREE.MeshPhongMaterial({ color: 0xe4e4e4 });

	// create a mesh and add it to the scene. Mesh takes the geometry and the material
	var sphere = new THREE.Mesh(geometry, material);
	scene.add(sphere, 0, 0);

	// Create alight and add it to the scene
	var pointLight = new THREE.PointLight(0xffffff);
	pointLight.position.set(-100, -90, 130);
	scene.add(pointLight);

	//renderer.render(scene, camera);

	// set the animation
	function animate(){
		requestAnimationFrame(animate);

		// Move along x and y axis
		if(sphere.position.x < 200){
			sphere.position.x += 1;
			//sphere.position.y -= 1;
		} else{
			sphere.position.x = -200;
			//sphere.position.y = 50;
		}

		// Rotate along x and y axis
		sphere.rotation.x += 0.1;
		sphere.rotation.y -= 0.1;

		renderer.render(scene, camera);
	}

	animate();

	window.addEventListener('keydown', function(event) {
		var key = event.which ? event.which : event.keyCode;
		console.log(key);
		switch(key) {
			case 87:
				sphere.position.y += 3;
				sphere.rotation.x -= 0.2;
				break;
			case 65:
				sphere.position.x -= 3;
				sphere.rotation.y -= 0.2;
				break;
			case 83:
				sphere.position.y -= 3;
				sphere.rotation.x += 0.2;
				break;
			case 68:
				sphere.position.x += 3;
				sphere.rotation.y += 0.2;
				break;
		}

	}, false);

}
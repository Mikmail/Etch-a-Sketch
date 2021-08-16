const grid = document.querySelector('#grid-div');
const rainbow = document.querySelector('#rainbow');
const shading = document.querySelector('#shading');

let colors = [];
let selectedColor = "rgb(0,0,0)";

const addForm = document.forms['add-grid'];
addForm.addEventListener('submit', function(e){
	e.preventDefault();
	grid.innerHTML = '';

	const value = addForm.querySelector('input[type="text"]').value;
	
	if (value !== "" && value > 0 && value <= 50) {

		grid.style.setProperty('grid-template-columns', 'repeat(' + value + ', 1fr)');
		boxLength = 460 / value;
		for (var i = 0; i < value*value; i++)
		{
			const box = document.createElement('div');
			box.style.width = boxLength + "px";
			box.style.height = boxLength + "px";

			box.classList.add('box');

			grid.appendChild(box);
		}
		hoverBoxes();
	}

	addForm.reset();


});


function hoverBoxes() {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach(function(box){
		var shade = 0.1;
		box.addEventListener('mouseover', function(e) {
			box.style.backgroundColor = selectedColor;


			if (rainbow.checked) {
				for (let i = 0; i < 3; i++)
				{
					colors[i] = Math.floor(Math.random() * 256); 
				};
				box.style.backgroundColor = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
			}
			 if (shading.checked)
			{
				box.style.backgroundColor = box.style.backgroundColor.slice(0, -1) + "," + shade + ")";
				shade += 0.1;
			}	
		})
	});
}


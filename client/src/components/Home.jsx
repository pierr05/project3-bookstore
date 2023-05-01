import React from 'react'
import adventure from '../assets/adventure.png'
import dino from '../assets/dino.png'
import fairy from '../assets/fairy.png'
import hairy from '../assets/image1.jpeg'
import hairy2 from '../assets/image2.jpeg'
import hairy3 from '../assets/image3.jpeg'
import monsters from '../assets/monsters.png'
import princess from '../assets/princess.png'
import unicorn from '../assets/unicorn.png'
import '../components/home.css'

export default function Home() {

	const style =
    'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';

  return (
    <div className='flex flex-col justify-center items-center h-full m-0 p-0'>
    

	<div class="wrapper">
		<section class="slideshow">
			<a href="#" class="slide-item">
				<img src={hairy} alt="Image 1"/>
				<p>Subtitle 1</p>
			</a>
			<a href="#" class="slide-item">
				<img src={hairy2}alt="Image 2"/>
				<p>Subtitle 2</p>
			</a>
			<a href="#" class="slide-item">
				<img src={hairy3} alt="Image 3"/>
				<p>Subtitle 3</p>
			</a>
		</section>

		<section class="featured-categories">
			<div class="category-column">
				<a href="#" class="category-item">
					<img src={dino} alt="Category 1"/>
				</a>
				
				<a href="#" class="category-item">
					<img src={fairy} alt="Category 2"/>
				</a>
				
				
			</div>
			<div class="category-column">
				<a href="#" class="category-item">
					<img src={princess} alt="Category 4"/>
				</a>
					
				<a href="#" class="category-item">
					<img src={unicorn} alt="Category 5"/>
				</a>
					
			
			</div>
			<div class="category-column">
				<a href="#" class="category-item">
					<img src={adventure} alt="Category 3"/>
				</a>
				<a href="#" class="category-item">
					<img src={monsters} alt="Category 6"/>
				</a>
			
			</div>
		</section>
		<footer class="footer">
		<p>Trash To Treasue</p>
	</footer>
	</div>

	<div id="modal-container" class="modal-container">
		<div class="modal-content">
			<img id="modal-image" src="" alt="Popup Image" width="300" height="auto"/>
			<p id="modal-paragraph"></p>
			<button id="close-button">Close</button>
		</div>
	</div>
  </div>
  )
}


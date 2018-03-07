import React from 'react'
import '../SASS/_header.css'
import HeaderImage from '../images/KnightsOfArthur.png'

//https://stackoverflow.com/questions/27639005/how-to-copy-static-files-to-build-directory-with-webpack

function Header() {
	return (
		<div className='header'> 
			<div id='empty' />
			<div className='image-container'>
				<img className='header-image' alt='' src={HeaderImage} />
			</div>
			<div className='rules-link-container'>
				<a href=''> Rules </a>
			</div>
			<div className='about-link-container'>
				<a href=''> About </a>
			</div>
		</div>
	)
}


//??? Search this up
export default Header
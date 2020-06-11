import React from 'react';
import './FaceRecognition.css'

const FaceRecongnition =({imageUrl,box,celeb})=> {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width = '200px' height='auto'/>
				<div className='ttu tracked center ma f3 pa3' style={{cname:celeb.celebrity}}>{celeb.celebrity}</div>
			</div>
		</div>
	);
}

export default FaceRecongnition;
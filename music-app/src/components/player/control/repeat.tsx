import { icon } from '../../../assets/icon'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const RepeatBtn = () => {
	const [isActive , setIsActive]  = useState<boolean>(false)
	const dispatch = useDispatch()
	const handleOnClickRepeatBtn = ()=> {
		setIsActive(!isActive)	
		dispatch({type : 'REPEAT' , payload : !isActive})
	}	
	return <span onClick={handleOnClickRepeatBtn} className={`icon ${isActive && 'text-yellow'}`}>{icon.playLoop}</span>
}

export default RepeatBtn

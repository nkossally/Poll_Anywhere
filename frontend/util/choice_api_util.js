export const createChoice = (choiceArr, poll)=>{
	
	return(  $.ajax({
		method: 'POST',
		url: '/api/choices',
		data: { choiceArr: choiceArr, poll_id: poll.poll.id }

  }))
}

export const showChoice = (id)=>(
  $.ajax({
		method: 'GET',
		url: `/api/choices/${id}`,
  })
)

export const showAllChoices = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/choices'
  })
)

export const destroyChoice = (id)=>{
	return ( 
		$.ajax({
		method: 'DELETE',
		url: `/api/choices/${id}`
  }))
}
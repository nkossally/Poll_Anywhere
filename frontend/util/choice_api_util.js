// export const createChoice = (choice)=>(
//   $.ajax({
// 		method: 'POST',
// 		url: '/api/choices',
// 		data: { choice }
//   })
// )

export const createChoice = (choiceArr, poll)=>{
	debugger
	return(  $.ajax({
		method: 'POST',
		url: '/api/choices',
		data: { choiceArr: choiceArr, poll_id: poll.id }

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

export const destroyChoice = (id)=>(
  $.ajax({
		method: 'DELETE',
		url: `/api/choices/${id}`
  })
)
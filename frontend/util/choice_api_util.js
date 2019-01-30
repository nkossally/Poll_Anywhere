export const createChoice = (choice)=>(
  $.ajax({
		method: 'POST',
		url: '/api/choices',
		data: { choice }
  })
)

// export const createChoice = (choiceArr, poll)=>{
// 	debugger
// 	return(  $.ajax({
// 		method: 'POST',
// 		url: '/api/choices',
// 		data: { choiceArr: choiceArr, poll_id: poll.id }

//   }))
// }

export const show = (id)=>(
  $.ajax({
		method: 'GET',
		url: `/api/choices/${id}`,
  })
)

export const showAll = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/choices'
  })
)

export const destroy = (id)=>(
  $.ajax({
		method: 'DELETE',
		url: `/api/choices/${id}`
  })
)
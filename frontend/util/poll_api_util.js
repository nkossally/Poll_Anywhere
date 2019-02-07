// export const createPoll = (poll)=>(
//   $.ajax({
// 		method: 'POST',
// 		url: '/api/polls',
// 		data: { poll }
//   })
// )

export const createPoll = (poll, choices)=>{
  return(
		$.ajax({
		method: 'POST',
		url: '/api/polls',
		data: { poll, choices }
  	})
	)
}

export const showPoll = (id)=>(
  $.ajax({
		method: 'GET',
		url: `/api/polls/${id}`,
  })
)

export const updatePoll = (poll, choices)=>(
  $.ajax({
		method: 'PATCH',
		url: `/api/polls/${poll.id}`,
		data: {poll, choices}
  })
)

export const showAllPolls = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/polls'
  })
)

export const destroyPoll = (id)=>(
  $.ajax({
		method: 'DELETE',
		url: `/api/polls/${id}`
  })
)
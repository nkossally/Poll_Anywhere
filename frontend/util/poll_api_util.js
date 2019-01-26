export const create = (poll)=>(
  $.ajax({
		method: 'POST',
		url: '/api/polls',
		data: { poll }
  })
)

export const show = (id)=>(
  $.ajax({
		method: 'GET',
		url: `/api/polls/${id}`,
  })
)

export const showAll = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/polls'
  })
)

export const destroy = (id)=>(
  $.ajax({
		method: 'DELETE',
		url: `/api/polls/${id}`
  })
)
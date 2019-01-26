export const create = (choice)=>(
  $.ajax({
		method: 'POST',
		url: '/api/choices',
		data: { choice }
  })
)

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
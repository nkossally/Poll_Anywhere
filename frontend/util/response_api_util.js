export const create = (response)=>(
  $.ajax({
		method: 'POST',
		url: '/api/responses',
		data: { response }
  })
)

export const show = (id)=>(
  $.ajax({
		method: 'GET',
		url: `/api/responses/${id}`,
  })
)

export const showAll = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/responses'
  })
)

export const destroy = (id)=>(
  $.ajax({
		method: 'DELETE',
		url: `/api/responses/${id}`
  })
)
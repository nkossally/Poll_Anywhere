export const create = (group)=>(
  $.ajax({
		method: 'POST',
		url: '/api/groups',
		data: { group }
  })
)

export const show = (id)=>(
  $.ajax({
		method: 'GET',
		url: `/api/groups/${id}`,
  })
)

export const showAll = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/groups'
  })
)

export const destroy = (id)=>(
  $.ajax({
		method: 'DELETE',
		url: `/api/groups/${id}`
  })
)
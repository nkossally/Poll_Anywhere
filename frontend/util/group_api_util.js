export const createGroup = (group)=>(
  $.ajax({
		method: 'POST',
		url: '/api/groups',
		data: { group }
  })
)

export const showGroup = (id)=>(
  $.ajax({
		method: 'GET',
		url: `/api/groups/${id}`,
  })
)

export const showAllGroups = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/groups'
  })
)

export const destroyGroup = (id)=>(
  $.ajax({
		method: 'DELETE',
		url: `/api/groups/${id}`
  })
)
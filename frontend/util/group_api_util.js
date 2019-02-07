export const createGroup = (group, user)=>(
  $.ajax({
		method: 'POST',
		url: '/api/groups',
		data: { group: group, user_id: user.id }
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
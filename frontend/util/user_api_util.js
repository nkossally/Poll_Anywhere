export const showAllUsers = ()=>(
  $.ajax({
		method: 'GET',
		url: '/api/users'
  })
)
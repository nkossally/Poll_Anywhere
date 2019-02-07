export const signup = (user, group)=>{
	debugger
	return(
		$.ajax({
			method: 'POST',
			url: '/api/users',
			data: { user: user, group: group }
		})
	)
}

export const login = (user)=>(
  $.ajax({
		method: 'POST',
		url: '/api/session',
		data: { user }
  })
)

export const logout = ()=>(
  $.ajax({
		method: 'DELETE',
		url: '/api/session'
  })
)

 
export const signup = (user, group)=>{
	return(
		$.ajax({
			method: 'POST',
			url: '/api/users',
			data: { user: user, group: group }
		})
	)
}

export const login = (user)=>{
	return (
		$.ajax({
			method: 'POST',
			url: '/api/session',
			data: { user }
		})
	)
}

export const logout = ()=>(
  $.ajax({
		method: 'DELETE',
		url: '/api/session'
  })
)

 
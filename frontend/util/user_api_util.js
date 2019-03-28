export const showAllUsers = () =>
  $.ajax({
    method: "GET",
    url: "/api/users"
  });

export const showUser = id =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });

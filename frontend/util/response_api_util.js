export const createResponse = response =>
  $.ajax({
    method: "POST",
    url: "/api/responses",
    data: { response }
  });

export const showResponse = id =>
  $.ajax({
    method: "GET",
    url: `/api/responses/${id}`
  });

export const showAllResponses = () =>
  $.ajax({
    method: "GET",
    url: "/api/responses"
  });

export const destroyResponse = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/responses/${id}`
  });

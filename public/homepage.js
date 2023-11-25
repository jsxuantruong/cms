console.log("hello world");
let tbody = document.getElementById("tbody");
fetch("http://localhost:3000/api/v1/users/")
  .then((res) => res.json())
  .then((data) => {
    let { users } = data;
    users.forEach((element) => {
      tbody.innerHTML += `
    <tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.address}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
          </tr>
          
    `;
    });
  })
  .catch((err) => console.log(err));

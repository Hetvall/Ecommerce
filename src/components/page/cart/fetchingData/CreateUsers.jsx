const CreateUsers = () => {
  let newUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const createNewUSer = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      // headers: {
      //   authorization: "Barer jfnjnsdklnlfn",
      // },
    });
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
  };

  const updateUSer = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: "James" }),
    });
  };

  return (
    <div>
      <button onClick={createNewUSer}>Add new</button>
      <button onClick={() => deleteUser(5)}>Delete user</button>
      <button onClick={() => updateUSer(2)}>Update user</button>
    </div>
  );
};

export default CreateUsers;

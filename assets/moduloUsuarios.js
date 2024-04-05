(async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const { results } = await response.json();
    results.forEach((usuario) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');

      const userImage = document.createElement('img');
      userImage.src = usuario.picture.large;
      userImage.alt = 'User Avatar';
      userDiv.appendChild(userImage);

      const userName = document.createElement('p');
      userName.innerText = `${usuario.name.first} ${usuario.name.last}`;
      userDiv.appendChild(userName);

      const userEmail = document.createElement('p');
      userEmail.innerText = usuario.email;
      userDiv.appendChild(userEmail);

      const userPhone = document.createElement('p');
      userPhone.innerText = usuario.phone;
      userDiv.appendChild(userPhone);

      document.getElementById('user-data').appendChild(userDiv);
    });
  } catch (error) {
    console.error(error);
    document.getElementById('user-data').innerText = 'No se pudieron cargar los datos';
  }
})();


  
  

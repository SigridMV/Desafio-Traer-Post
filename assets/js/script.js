// funcion asincrona
const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  //Manejar los posibles errores con try-catch
  try {
    const response = await fetch(url);

    const data = await response.json();

    //Mostrar el resultado del request en HTML (utilizar listas desordenadas para mostrar
    //cada uno de los post).
    let list = document.querySelector('#post-data > ul');
    let html = '';

    data.forEach((elemento) => {
      html += `<li>
              <p><strong>${elemento.title}</strong></p>
              <p>${elemento.body}</p>
              </br>
              </li>`;
    });

    list.innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

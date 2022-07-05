<template>
  <main>
    <div class="cad-home">
      <h1>Cadastro de Livros</h1>
      <input placeholder="Nome do Livro" />
      <input placeholder="Autor" />
      <input type="number" placeholder="ISBN" />
      <input placeholder="Editora" />
    </div>
    <div>
      <button class="cadastro">Cadastrar</button>
    </div>
  </main>
</template>

<style>
.cad-home {
  font-family: 'EB Garemond';
  font-size: 50px;
  font-weight: 200;
  text-align: center;
  color: #000000;
}

::placeholder {
  font-family: 'EB Garemond';
  color: rgb(119, 114, 114);
}

input {
  margin: 15px 0px;
  padding: 10px;  
  width: 81.5%;
  border-radius: 10px;
  border-color: #019BCB;
  border-style: solid;
  box-shadow: 0 4px 8px 0.1px grey
}

.cadastro {
  left: 45%;
  margin-top: 30px; 
  border-color: #616fee;
  background-color: #ffffff;
  border-radius: 30px;
  border-width: 3px;
  border-style: solid;
  color: #616fee;
  font-weight: 700;
  font-size: medium;
}

.cadastro:active {
  background-color: #616fee;
  color: #fafafa;
}

.cadastro:hover {
  cursor: pointer;
}
</style>
<template>
    <header>
      <img src="@/assets/Imagens/Bookshelf.png" alt="" srcset="">
      <div class="menu-esquerdo">
        <span> <RouterLink to="/Livros">Livros</RouterLink> </span>
        <span>|</span>
        <span> <RouterLink to="/Editora">Editoras</RouterLink> </span>
        <span>|</span>
        <span> <RouterLink to="/Autores">Autores</RouterLink> </span>
        <span>|</span>
        <span> <RouterLink to="/Produtos">Produtos</RouterLink> </span>
      </div>
      <div class="btn-sair">
        <button @click="">Sair</button>
      </div>
      <img class="user" src="@/assets/Imagens/TheRoko.png" alt="" srcset="">
  </header>
</template>

<style>
header{
  background-color: #019BCB;
  height: 15%;
  font-size: 1.3rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'EB Garamond';
}

header span {
  padding: 0 20px;
}

.user {
  height: 100px;
  padding-right: 8%;
}

.btn-sair{
  padding-left: 130px;
}

button {
  width: 100px;
  height: 50px;
  border-radius: 15px;
  border-color: #019BCB;
  background-color: #ffffff;
  border-width: 3px;
  border-style: solid;
  color: #019BCB;
  font-weight: 700;
  font-size: medium;
}

</style>
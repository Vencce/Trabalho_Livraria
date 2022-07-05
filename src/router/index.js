import { createRouter, createWebHistory } from 'vue-router';
import LivrosView from '@/views/LivrosView.vue';
import EditoraView from '@/views/EditoraView.vue';
import AutoresView from '@/views/AutoresView.vue';
import ProdutosView from '@/views/ProdutosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Livros', name: 'livros', component: LivrosView },
    { path: '/Editora', name: 'editora', component: EditoraView },
    { path: '/Autores', name: 'autores', component: AutoresView },
    { path: '/Produtos', name: 'produtos', component: ProdutosView },
  ],
});

export default router

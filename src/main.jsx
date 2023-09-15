import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Bloco de rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditarProdutos from './routes/Produtos/EditarProdutos.jsx';
import Home from './routes/Home/Home.jsx';
import Produtos from './routes/Produtos/Produtos.jsx';
import Error404 from './routes/Erro/Error404.jsx';
import ExcluirProdutos from './routes/Produtos/ExcluirProdutos.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App/>,
    errorElement: <Error404/>,
    children: [
        {path: '/', element: <Home/>},
        {path: '/produtos', element: <Produtos/>},
        {path: '/editar/produtos/:id', element: <EditarProdutos/>},
        {path: '/excluir/produtos/:id', element: <ExcluirProdutos/>},
      ]
    }
]);



//Bloco de rota


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

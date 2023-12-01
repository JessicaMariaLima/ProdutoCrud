import {Router} from 'express'
import {Request, Response} from 'express'
import * as produtoController from '../controllers/produtoController'

const router = Router()

router.get('/', (req:Request, res:Response) => {
    res.send('/')
}) 

router.get('/produtos', produtoController.index)
//visualizar página de cadastro
router.get('/cadastro',produtoController.visualizaPaginaCadastro)

//rota para cadastrar os produtos
router.post('/cadastro',produtoController.cadastroProduto)

//chamando editaProduto
router.get('/editar/:id',produtoController.editaProduto)
//chamando atualizaProduto
router.post('/editar/:id',produtoController.atualizaProduto)

router.get('/excluir/:id',produtoController.deletaProduto)

export default router
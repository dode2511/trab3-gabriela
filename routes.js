import { Router } from "express"
import { usuarioAlteraSenha, usuarioCreate, usuarioIndex } from "./controllers/usuarioController.js"
import { loginUsuario, usuarioDestroy } from "./controllers/loginController.js"
import { verificaLogin } from "./middlewares/verificaLogin.js"
import { imovelCreate, imovelDestroy, imovelIndex } from "./controllers/imovelController.js"


const router = Router()

router.get('/usuario', usuarioIndex, verificaLogin)
      .put('/usuario', usuarioAlteraSenha)
      .post('/usuario', usuarioCreate)
      .delete('/usuario/:id', usuarioDestroy)



      
router.get('/imovel', imovelIndex)
      .post('/imovel', imovelCreate)
      .delete('/imovel/:id', imovelDestroy,verificaLogin)
      


router.get('/login', loginUsuario)


export default router
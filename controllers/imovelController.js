import { Imovel } from '../models/Imovel.js'
import { Log } from '../models/Log.js'
import { Usuario } from '../models/Usuario.js'



export const imovelIndex = async (req, res) => {
  try {
    const imoveis = await Imovel.findAll({ include: Usuario })
    res.status(200).json(imoveis)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const imovelCreate = async (req, res) => {
  const {  usuario_id, endereco,tipo, num } = req.body

  // se não informou estes atributos
  if (  !endereco || !num||!tipo ||!usuario_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const imovel = await Imovel.create({
      num, usuario_id,tipo,endereco
    });
    res.status(201).json(imovel)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const imovelDestroy = async (req, res) => {
  const { id } = req.params
  
  const user_logado_id = req.user_logado_id

  try {
    await Imovel.destroy({ where: { id } });

    
    await Log.create({
      descricao: "Exclusão do imóvel " + id,
      usuario_id: user_logado_id
    })

    res.status(200).json({ msg: "Ok! Removido com Sucesso" })
  } catch (error) {
    res.status(400).send(error)
  }
}
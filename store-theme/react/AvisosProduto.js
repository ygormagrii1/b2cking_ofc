import React from "react"
import { useCssHandles } from "vtex.css-handles"
import "./components/css/product.css"

// Adicionar aqui todas as classes
const CSS_HANDLES = ["aviso12d"]

const AvisosProduto = () => {

  const handles = useCssHandles(CSS_HANDLES)
  //console.log(handles)

  return (
    <div className="b2ckingbrasil-store-theme-0-x-aviso12d">Prazo de produção 12 dias úteis</div>
  )
}

export default AvisosProduto

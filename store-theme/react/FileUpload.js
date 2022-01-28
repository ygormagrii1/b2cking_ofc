import React from "react"
import { useCssHandles } from "vtex.css-handles"
import "./components/css/product.css"

// Adicionar aqui todas as classes
const CSS_HANDLES = ["fileupload"]

const FileUpload = () => {

  const handles = useCssHandles(CSS_HANDLES)
  //console.log(handles)

  return (
    <div className="vtex-product-customizer-2-x-fileupload mb4">
      <label class="vtex-input w-100">
        <span class="vtex-input__label db mb3 w-100 c-on-base t-small ">Adicione seu logo ou estampa</span>
        <div class="vtex-input-prefix__group flex flex-row items-stretch overflow-hidden br2 bw1 b--solid b--muted-4 hover-b--muted-3 h-regular ">
          <input class="vtex-styleguide-9-x-input ma0 border-box vtex-styleguide-9-x-hideDecorators vtex-styleguide-9-x-noAppearance br2   w-100 bn outline-0 bg-base c-on-base b--muted-4 hover-b--muted-3 t-body ph5 " maxlength="45" type="file" value="" />
        </div>
      </label>
    </div>
  )
}

export default FileUpload

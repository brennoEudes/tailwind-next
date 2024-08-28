'use client'

import { useFileInput } from './Root'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInput() // recebendo os arquivos selecionados

  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {/* ref parent na div principal permite as animações em todos os elementos internos */}
      {files.map((file) => {
        return <FileItem key={file.name} name={file.name} size={file.size} />
      })}
    </div>
  )
}

'use client'
import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react' // forma de memorizar um cálculo pesado p/ o navegador e só recalcular qnd necessário

export function ImagePreview() {
  const { files } = useFileInput() // acessando o arquivo selecionado

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }
    return URL.createObjectURL(files[0]) // cria uma URL temporária a partir do 1º arquivo selecionado
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      //eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        alt="preview image"
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}

'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType) // como o root envolve todos os input, vamos passar o contexto nele;

export function Root(props: RootProps) {
  const id = useId() // Novo React Hook q gera um id único p/ cada input automaticamente!
  const [files, setFiles] = useState<File[]>([]) // estado para armazenar os arquivos

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      {/* passando as info p/ todos os componentes */}

      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)

import { SettingTabs } from '@/app/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingTabs />
    </>
  )
}

// Anotações:
// O TW por padrão parte das especificações para mobile! (mobile first)
// Evite usar valores arbitrários fora do padrão do TW (ex: max-w-[700px]. Crie o atalho em extends no tailwind/config e aplique no código (ex: colors brenno)
// TW possui uma ordem semântica: classes estruturais, classes de estilo (cores, fontes) e depois classes de seletores (ex: hover etc). Não esqueça de >reload p/ resetar o VSCode no final.

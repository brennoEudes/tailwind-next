import { SettingTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Mail, UploadCloud, User } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              {/* Form abaixo vinculado pela props form, sem a necessidade de envolver tudo na msm div */}
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* TW: divide é props exclusiva do TW e divide automaticamente os elementos! */}
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Brenno" />
              </Input.InputRoot>
              <Input.InputRoot>
                <Input.InputControl defaultValue="Eudes" />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail address
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                type="email"
                defaultValue="brenno@gmail.com"
              />
            </Input.InputRoot>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <User className="h-8 w-8 text-violet-500" />
              </div>
              <label
                htmlFor="photo"
                className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
              >
                <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                  {' '}
                  {/* TW: efeito vibração borda */}
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <strong className="text-violet-700">Click to upload</strong>{' '}
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>
              <input type="file" className="sr-only" id="photo"></input>{' '}
              {/* sr-only: aplica estilos visíveis somente ao crowler. Estratégia p/ ñ estilizar diretamente o input de arquivo, q será feito pela label */}
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.InputRoot>
              <Input.InputControl
                id="role"
                type="text"
                defaultValue="Frontend Developer"
              />
            </Input.InputRoot>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              // type="submit" Como está dentro do form, não é necessário
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

// Anotações:
// O TW por padrão parte das especificações para mobile! (mobile first)
// Evite usar valores arbitrários fora do padrão do TW (ex: max-w-[700px]. Crie o atalho em extends no tailwind/config e aplique no código (ex: colors brenno)
// TW possui uma ordem semântica: classes estruturais, classes de estilo (cores, fontes) e depois classes de seletores (ex: hover etc). Não esqueça de >reload p/ resetar o VSCode no final.

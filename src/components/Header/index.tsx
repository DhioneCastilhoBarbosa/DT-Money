import { HeaderContainer, HeaderContent, NewTranslationButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg'
export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt=""/>

        <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTranslationButton>Nova transação</NewTranslationButton>
            </Dialog.Trigger>
        </Dialog.Root>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </HeaderContent>
    </HeaderContainer>
  )
}
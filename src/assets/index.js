import Acoes0 from '../../reutilizaveis/acoes0.svg';
import Acoes1 from '../../reutilizaveis/acoes1.svg';
import Acoes2 from '../../reutilizaveis/acoes2.svg';
import ConteudoPost0 from '../../reutilizaveis/conteudo-post0.svg';
import ConteudoPost1 from '../../reutilizaveis/conteudo-post1.svg';
import ConteudoPost2 from '../../reutilizaveis/conteudo-post2.svg';
import CreateButton from '../../reutilizaveis/create-button0.svg';
import HomeButton from '../../reutilizaveis/home-button1.svg';
import Kebab0 from '../../reutilizaveis/kebabmenu0.svg';
import Kebab1 from '../../reutilizaveis/kebabmenu1.svg';
import Kebab2 from '../../reutilizaveis/kebabmenu2.svg';
import Logo from '../../reutilizaveis/logo0.svg';
import MenuButton from '../../reutilizaveis/menu-button0.svg';
import MeetingsButton from '../../reutilizaveis/meetings-button0.svg';
import NotificationButton from '../../reutilizaveis/notification-button0.svg';
import Perfil0 from '../../reutilizaveis/perfil0.svg';
import Perfil1 from '../../reutilizaveis/perfil1.svg';
import Perfil2 from '../../reutilizaveis/perfil2.svg';
import SearchButton from '../../reutilizaveis/search-button0.svg';
import UserButton from '../../reutilizaveis/user-button0.svg';

export const uiIcons = {
  logo: Logo,
  menu: MenuButton,
  notification: NotificationButton,
};

const avatarIcons = {
  perfil0: Perfil0,
  perfil1: Perfil1,
  perfil2: Perfil2,
};

const contentIcons = {
  conteudoPost0: ConteudoPost0,
  conteudoPost1: ConteudoPost1,
  conteudoPost2: ConteudoPost2,
};

const actionIcons = {
  acoes0: Acoes0,
  acoes1: Acoes1,
  acoes2: Acoes2,
};

export const navIcons = {
  home: HomeButton,
  search: SearchButton,
  create: CreateButton,
  meetings: MeetingsButton,
  user: UserButton,
};

const kebabIcons = {
  kebab0: Kebab0,
  kebab1: Kebab1,
  kebab2: Kebab2,
};

export function getAvatarIcon(name) {
  return avatarIcons[name] ?? avatarIcons.perfil0;
}

export function getContentIcon(name) {
  return contentIcons[name] ?? contentIcons.conteudoPost0;
}

export function getActionIcon(name) {
  return actionIcons[name] ?? actionIcons.acoes0;
}

export function getKebabIcon(name) {
  return kebabIcons[name] ?? kebabIcons.kebab0;
}
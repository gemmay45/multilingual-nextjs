import { getModelByUrl, getNav } from '@/lib/api';
import HomeBody from './_components/HomeBody';
import { Locale } from '../../../i18n-config';

// Types
type Props = {
  params: { lang: Locale };
};

export default async function Home({ params }: Readonly<Props>) {
  const {lang } = params; 
  const model = await getModelByUrl(`/${lang}/`);
  // console.log("MODEL >>>>>>>", model);

  if (!model) {
    return null;
  }


  const menuItems = await getNav(lang);
  return (
    <HomeBody
      model={model}
      menuItems={menuItems}
    />
  )
}

// Home.getInitialProps = getInitialProps;

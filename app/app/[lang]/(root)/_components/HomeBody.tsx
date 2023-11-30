"use client"

import { contentTypeMap } from '@/components/ContentMap';
import { useCrafterAppContext } from '@/components/providers/CrafterAppProvider';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Title from '@/components/shared/Title';
import { TNavItem } from '@/types';
import ExperienceBuilder from '@craftercms/experience-builder/react/ExperienceBuilder';
import RenderComponents from '@craftercms/experience-builder/react/RenderComponents';
import { ContentInstance } from '@craftercms/models';
import { editOnClass, emptyFieldClass } from '@/components/constants';

const HomeBody = ({
  model,
  menuItems
}: {
  model: ContentInstance,
  menuItems: TNavItem[],
}) => {
  const { isAuthoring } = useCrafterAppContext();

  // console.log("page model", model);

  if (!model) return <></>;

  return (
    <ExperienceBuilder
      model={model}
      isAuthoring={isAuthoring}
      globalStyleOverrides={{
        [`.${editOnClass!}`]: { [`.${emptyFieldClass}`]: { '&::before': { content: '"Edit content here"' } } }
      }}
    >
      <Header menuItems={menuItems} />
      <Title model={model} />
      <RenderComponents contentTypeMap={contentTypeMap} model={model} fieldId="content_o" />
      <Footer />
    </ExperienceBuilder>
  )
}

export default HomeBody

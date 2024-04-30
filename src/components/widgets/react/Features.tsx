// ---
import WidgetWrapper from "../../../components/ui/react/WidgetWrapper"
import ItemGrid from "../../../components/ui/ItemGrid.astro";
import Headline from "../../../components/ui/Headline.astro";
import type { CallToAction, Item } from "../../../types";
import { twMerge } from "tailwind-merge";
// import type { Features } from "../../../types";

interface Video {
  src: string;
  type?: string;
}

interface Features  {
  title: string;
  subtitle: string;
  tagline: string;
  id?: string;
  isDark?: boolean;
  classes?: Record<string, string>;
  bg?: string;
  image?: string | unknown;
  video?: Video;
  items: Array<Item>;
  columns: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}


// const {
//   title = await Astro.slots.render("title"),
//   subtitle = await Astro.slots.render("subtitle"),
//   tagline = await Astro.slots.render("tagline"),
//   items = [],
//   columns = 2,

//   defaultIcon,

//   id,
//   isDark = false,
//   classes = {},
//   bg = await Astro.slots.render("bg"),
// } = Astro.props as Features;
// ---

const FeaturesWidget = ({title, subtitle, tagline, items, columns, defaultIcon, id, isDark, classes, bg}: Features) => {
return(

<WidgetWrapper
  id={id}
  isDark={isDark}
  containerClass={`max-w-5xl ${classes?.container ?? ""}`}
  bg={bg}
>

<WrapperTag class="relative not-prose scroll-mt-[72px]" {...id ? { id } : {}}>
  <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
    <slot name="bg">
      {bg ? <Fragment set:html={bg} /> : <Background isDark={isDark} />}
    </slot>
  </div>
  <div
    data-class:list={[
      twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
      { dark: isDark },
    ]}
  >
    <slot />
  </div>
</WrapperTag>
  <Headline
    title={title}
    subtitle={subtitle}
    tagline={tagline}
    classes={classes?.headline}
  />
  <ItemGrid
    items={items}
    columns={columns}
    defaultIcon={defaultIcon}
    classes={{
      container: "",
      title: "md:text-[1.3rem]",
      icon: "text-white bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 rtl:ml-4 rtl:mr-0",
      ...((classes?.items as {}) ?? {}),
    }}
  />
</WidgetWrapper>
)}

export default FeaturesWidget;
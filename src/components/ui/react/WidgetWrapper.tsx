
import { twMerge } from "tailwind-merge";
import { Fragment } from "react/jsx-runtime";
// import Background from "./Background.astro";


// const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro.props;

interface Widget {
 id?: string;
 isDark?: boolean;
 containerClass?: string;
 bg?: string;
}

const WidgetWrapperProp = (children: React.ReactNode, {id, isDark, containerClass, bg}: Widget) => {
return(

<section className="relative not-prose scroll-mt-[72px]" {...id ? { id } : {}}>
  <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
    <slot name="bg">
      {bg ? <Fragment>{bg}</Fragment> : 
      <div data-class:list={['absolute inset-0', { 'bg-dark dark:bg-transparent': isDark }]}>
      <slot />
    </div>
      }
    </slot>
  </div>
  <div
    data-class:list={[
      twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
      { dark: isDark },
    ]}
  >
    {children}
    {/* <slot /> */}
  </div>
</section>
)}

export default WidgetWrapperProp;
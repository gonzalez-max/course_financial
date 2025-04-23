/** @jsxImportSource @emotion/react */


import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { useCallback, useContext } from "react"
import { Event, isTrue } from "$/utils/state"
import { Box as RadixThemesBox, DropdownMenu as RadixThemesDropdownMenu, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"




export function A_2400880137c329fe3c62d4f2e32fe205 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <a css={({ ["position"] : "fixed", ["bottom"] : "1rem", ["right"] : "1rem", ["display"] : "flex", ["flex-direction"] : "row", ["gap"] : "0.375rem", ["align-items"] : "center", ["width"] : "auto", ["border-radius"] : "0.5rem", ["color"] : ((resolvedColorMode === "light") ? "#E5E7EB" : "#27282B"), ["border"] : ((resolvedColorMode === "light") ? "1px solid #27282B" : "1px solid #E5E7EB"), ["background-color"] : ((resolvedColorMode === "light") ? "#151618" : "#FCFCFD"), ["padding"] : "0.375rem", ["transition"] : "background-color 0.2s ease-in-out", ["box-shadow"] : "0 1px 2px 0 rgba(0, 0, 0, 0.05)", ["z-index"] : "9998", ["cursor"] : "pointer", ["align"] : "center", ["textAlign"] : "center" })} href={"https://reflex.dev"} target={"_blank"}>

<svg css={({ ["fill"] : "white", ["viewBox"] : "0 0 16 16" })} height={"16"} width={"16"} xmlns={"http://www.w3.org/2000/svg"}>

<rect css={({ ["fill"] : "#6E56CF" })} height={"16"} rx={"2"} width={"16"}/>
<path css={({ ["fill"] : "white" })} d={"M10 9V13H12V9H10Z"}/>
<path css={({ ["fill"] : "white" })} d={"M4 3V13H6V9H10V7H6V5H10V7H12V3H4Z"}/>
</svg>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesText as={"p"} css={({ ["color"] : "var(--slate-1)", ["fontWeight"] : "600", ["fontFamily"] : "'Instrument Sans', sans-serif", ["--default-font-family"] : "'Instrument Sans', sans-serif", ["fontSize"] : "0.875rem", ["lineHeight"] : "1rem", ["letterSpacing"] : "-0.00656rem" })}>

{"Built with Reflex"}
</RadixThemesText>
</RadixThemesBox>
</a>
  )
}

export function Tooltip_f5e6a55bca12d52bfe1a36c42a21b26c () {
  
  const reflex___state____state__mi_web___components___general_components___nav_bar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___nav_bar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesTooltip content={"No me toques."}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___nav_bar____logo_state.increment_click", ({  }), ({  })))], args, ({  }))))} src={reflex___state____state__mi_web___components___general_components___nav_bar____logo_state.logo_src}/>
</RadixThemesTooltip>
  )
}

export function Img_544b3e2872f3fdafb9f22edff3b2be1f () {
  
  const reflex___state____state__mi_web___components___general_components___nav_bar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___nav_bar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4601de63bb2da6dd2c92964a58538d0d = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___nav_bar____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} onClick={on_click_4601de63bb2da6dd2c92964a58538d0d} src={reflex___state____state__mi_web___components___general_components___nav_bar____logo_state.logo_src}/>
  )
}

export function Dropdownmenu__item_a4b79031cd0a0aaab6615a386df7fd1f () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_878b59ed445e335ab3312bf6ae65b075 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/financial_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_878b59ed445e335ab3312bf6ae65b075}>

{"Proyecto"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Dropdownmenu__item_b0a6762496b52f8de3428cdb0d180c40 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7dc200586272c1bbcd7f51ea48788135 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_7dc200586272c1bbcd7f51ea48788135}>

{"Contacto"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Img_1dc145e38a4a77bada704003b0548d02 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd5dfb31d3782427c73d08de247645b4 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={on_click_bd5dfb31d3782427c73d08de247645b4} src={reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src}/>
  )
}

export function Tooltip_6525ba879cedca0bf213d67734a8d425 () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesTooltip content={"No me toques."}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], args, ({  }))))} src={reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src}/>
</RadixThemesTooltip>
  )
}

export function Img_0b82476f3ea7e22d4a7d54d5744b561b () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_f2425d612b9e4477d8552ff062cbbc10 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} onClick={on_click_f2425d612b9e4477d8552ff062cbbc10} src={reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src}/>
  )
}

export function Dropdownmenu__item_bab67f5e89dd620a8f08fe00942058f5 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_e1787349f6d52d1b453713c488641ba5 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/choice_modules", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_e1787349f6d52d1b453713c488641ba5}>

{"Curso"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Dropdownmenu__item_f5601b3f02dbc23bf8da1fc3302d2108 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7dc200586272c1bbcd7f51ea48788135 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_7dc200586272c1bbcd7f51ea48788135}>

{"Contactos"}
</RadixThemesDropdownMenu.Item>
  )
}

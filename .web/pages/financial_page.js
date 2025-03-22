/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export function Div_0c4c0d922d990c245023c72baae2d5e1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_c179379f847dbcf00ba21f73b0ad1b3d/>
</div>
  )
}

export function Fragment_c179379f847dbcf00ba21f73b0ad1b3d () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Tooltip_5c913e4cde495fcd66b90837dd384683 () {
  
  const reflex___state____state__mi_web___components___general___nav_bar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general___nav_bar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesTooltip content={"No me toques."}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general___nav_bar____logo_state.increment_click", ({  }), ({  })))], args, ({  }))))} src={reflex___state____state__mi_web___components___general___nav_bar____logo_state.logo_src}/>
</RadixThemesTooltip>
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

export function Errorboundary_219e445b00130d8eecd427f24bcff0c2 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["aria-label"] : "Reflex", ["css"] : ({ ["fill"] : "currentColor" }), ["height"] : "12", ["role"] : "img", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))), (jsx("title", ({  }), (jsx(Fragment, ({  }), "Reflex")))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["textColor"] : "black", ["backgroundColor"] : "#80bfff", ["height"] : "100%", ["minHeight"] : "100vh", ["justifyContent"] : "space-between", ["display"] : "flex", ["flexDirection"] : "column" })}>

<RadixThemesBox css={({ ["width"] : "100%", ["height"] : "40px", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex", ["top"] : "0px", ["alignItems"] : "center" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<Tooltip_5c913e4cde495fcd66b90837dd384683/>
<RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"}>

<RadixThemesTooltip content={"Inicio"} css={({ ["textDecoration"] : "none", ["href"] : "/#" })}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</RadixThemesTooltip>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesTooltip content={"Mis proyectos"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/financial_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Proyectos"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesTooltip>
<RadixThemesTooltip content={"Contact\u00e1me"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/soporte_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Contacto"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesTooltip>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<Img_51c0cd0ede7f49aed0ccd7b33d4249f5/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<Dropdownmenu__item_a4b79031cd0a0aaab6615a386df7fd1f/>
<Dropdownmenu__item_b0a6762496b52f8de3428cdb0d180c40/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Fragment>

<RadixThemesBox>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["marginTop"] : "0" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "50px", ["fontWeight"] : "bold", ["color"] : "white", ["textAlign"] : "center", ["marginBottom"] : "20px", ["marginTop"] : "50px", ["padding"] : "10px", ["letterSpacing"] : "1px" })}>

{"Bienvenidos al curso de Trading"}
</RadixThemesHeading>
<RadixThemesBox css={({ ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<img css={({ ["height"] : "400px", ["width"] : "100%", ["maxWidth"] : "600px", ["IMAGEWidth"] : "600px", ["IMAGEHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid gray", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px gray", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["transform"] : "scale(1.05)" }) })} src={"/intro_image.jpg?refresh=1"}/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["marginTop"] : "50px", ["marginBottom"] : "50px", ["marginInlineStart"] : "3px", ["marginInlineEnd"] : "3px", ["width"] : "100%", ["borderRadius"] : "10px" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"Introduccion y Objetivos del curso."}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"En este curso aprenderas desde lo mas basico hasta lo mas avanzado Ense\u00f1ar conceptos clave de finanzas personales, trading y an\u00e1lisis t\u00e9cnico, mientras se advierte sobre fraudes en el mundo financiero y se ofrecen herramientas para evitarlos."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</Fragment>
<Link_5dd9fddb29d1577922193ad476998589/>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center" })} direction={"column"} gap={"3"}>

<Img_6507af2531a58768e5fa055fb09496d9/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })}>

{"since 1999 copyright registered."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Curso Finanzas y Trading"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

export function Img_51c0cd0ede7f49aed0ccd7b33d4249f5 () {
  
  const reflex___state____state__mi_web___components___general___nav_bar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general___nav_bar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4bd0b1eac19b0ca1ae0d63935666b691 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general___nav_bar____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} onClick={on_click_4bd0b1eac19b0ca1ae0d63935666b691} src={reflex___state____state__mi_web___components___general___nav_bar____logo_state.logo_src}/>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Img_6507af2531a58768e5fa055fb09496d9 () {
  
  const reflex___state____state__mi_web___components___general___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_254027890be7d62cce645cc15dffcf3c = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general___footer____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={on_click_254027890be7d62cce645cc15dffcf3c} src={reflex___state____state__mi_web___components___general___footer____logo_state.logo_src}/>
  )
}

export function Link_5dd9fddb29d1577922193ad476998589 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "600px" })} direction={"column"} gap={"3"}>

<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_1", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{"Modulo numero 1: Fundamentos de Finanzas personales y Mercado Financiero. "}
</RadixThemesButton>
<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{"Modulo numero 2: Tipos de Inversores e Instrumentos de inversion "}
</RadixThemesButton>
<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_3", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{" Modulo numero 3: Introduccion al Trading"}
</RadixThemesButton>
<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_4", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{" Modulo numero 4: Fundamentos del An\u00e1lisis T\u00e9cnico y Patrones"}
</RadixThemesButton>
<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_5", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{" Modulo numero 5: Dominando Soportes, Resistencias y Rangos"}
</RadixThemesButton>
<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_6", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{" Modulo numero 6: Tendencias y como identificarlas"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesLink>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_219e445b00130d8eecd427f24bcff0c2/>
  )
}

/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Theme as RadixThemesTheme, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import { Drawer as VaulDrawer } from "vaul"
import theme from "$/utils/theme.js"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { Bar as RechartsBar, CartesianGrid as RechartsCartesianGrid, Legend as RechartsLegend, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const RechartsBarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });


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

export function Errorboundary_d30fcee74ef408714698cdbc8b0dc689 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["aria-label"] : "Reflex", ["css"] : ({ ["fill"] : "currentColor" }), ["height"] : "12", ["role"] : "img", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))), (jsx("title", ({  }), (jsx(Fragment, ({  }), "Reflex")))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["textColor"] : "black", ["backgroundColor"] : "white", ["height"] : "100%", ["minHeight"] : "100vh", ["justifyContent"] : "space-between", ["display"] : "flex", ["flexDirection"] : "column" })}>

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
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesBox css={({ ["position"] : "fixed", ["top"] : "80px", ["left"] : "20px", ["zIndex"] : "5" })}>

<VaulDrawer.Root direction={"left"}>

<VaulDrawer.Trigger asChild={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"3"} variant={"solid"}>

{"Modulos Menu"}
</RadixThemesButton>
</VaulDrawer.Trigger>
<VaulDrawer.Overlay css={({ ["position"] : "fixed", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["top"] : "0", ["z_index"] : 50, ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "5" })}/>
<VaulDrawer.Portal>

<RadixThemesTheme css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>

<VaulDrawer.Content css={({ ["left"] : "0", ["right"] : "auto", ["bottom"] : "0", ["top"] : "auto", ["position"] : "fixed", ["z_index"] : 50, ["display"] : "flex", ["height"] : "100%", ["width"] : "20em", ["padding"] : "2em", ["backgroundColor"] : "#ff3333" })}>

<RadixThemesFlex css={({ ["alignItems"] : "start" })} direction={"column"}>

<VaulDrawer.Close asChild={true}>

<RadixThemesBox>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"3"} variant={"solid"}>

{"Cerrar"}
</RadixThemesButton>
</RadixThemesBox>
</VaulDrawer.Close>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_1"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 1"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_2"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 2"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_3"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 3"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_4"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 4"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_5"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 5"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_6"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 6"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</VaulDrawer.Content>
</RadixThemesTheme>
</VaulDrawer.Portal>
</VaulDrawer.Root>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "600px", ["width"] : "100%", ["marginTop"] : "0.1em", ["marginBottom"] : "0.1em", ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesBox>

<RadixThemesHeading css={({ ["fontSize"] : "50px", ["fontWeight"] : "bold", ["color"] : "white", ["textAlign"] : "center", ["marginBottom"] : "20px", ["marginTop"] : "50px", ["padding"] : "10px", ["letterSpacing"] : "1px" })}>

{"M\u00f3dulo 1: Fundamentos de Finanzas Personales y Mercado Financiero"}
</RadixThemesHeading>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"1. \u00bfQu\u00e9 son las finanzas?"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

{"Las finanzas corresponden a un \u00e1rea de la econom\u00eda que estudia la obtenci\u00f3n y administraci\u00f3n de dinero y de capital, es decir, los recursos financieros.\nEstudia tanto la obtenci\u00f3n de recursos (financiaci\u00f3n), como la inversi\u00f3n y el ahorro de los mismos."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"2. Conceptos Contables"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li>

{"Cuentas patrimoniales"}
</li>
<li>

{"Activo, pasivo y patrimonio neto"}
</li>
<li>

{"Cuentas de resultados"}
</li>
<li>

{"Ingresos, gastos y resultado"}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Cuentas patrimoniales"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"column"} gap={"3"}>

<Fragment>

<RadixThemesTable.Root css={({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "orange" })}>

<RadixThemesTable.ColumnHeaderCell>

{"Activo"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Pasivo"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Patrimonio Neto"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Ingresos"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Gastos"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Resultado"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<RadixThemesTable.Body>

<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

{"Bienes o derechos de una persona."}
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Obligaciones o deudas."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Diferencia entre activo y pasivo."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Ganancias que se suman al presupuesto."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Utilizaci\u00f3n o consumo de bienes o servicios."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Diferencia entre ingresos y gastos."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

{"Ej: acciones, inmuebles, bonos."}
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Ej: saldos de tarjetas, hipotecas, deudas."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Ej: empresa con activos de 210,000\u20ac y sin deudas."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Ej: salario, comisiones, honorarios, inversiones."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Ej: alquileres, seguros, impuestos, pr\u00e9stamos."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Ej: resultado financiero del balance."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"3. El ahorro"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["width"] : "100%", ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "350px", ["width"] : "100%", ["IMAGEWidth"] : "600px", ["IMAGEHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid gray", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px gray", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["transform"] : "scale(1.05)" }) })} src={"/el_ahorro.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

{"Este h\u00e1bito no solo te ayudar\u00e1 a construir un fondo de emergencia, sino que tambi\u00e9n te permitir\u00e1invertir en oportunidades futuras. Con el tiempo, ese 10% acumulado puede brindarte estabilidad financiera y mayor libertad para tomar decisiones sin presiones econ\u00f3micas."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Por ejemplo"}
</RadixThemesStrong>
{", si cobr\u00e1s $100.000 por mes, destinar el 10% significar\u00eda ahorrar $10.000 de entrada. Si configur\u00e1s una transferencia autom\u00e1tica el mismo d\u00eda que te depositan el sueldo, te asegur\u00e1s de no gastarlo sin darte cuenta. Tambi\u00e9n pod\u00e9s usar una app que redondee cada compra al peso superior y mande la diferencia a una cuenta de ahorros. A la larga, estos peque\u00f1os aportes suman m\u00e1s de lo que imagin\u00e1s, y casi sin esfuerzo."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"column"} gap={"3"}>

<RechartsResponsiveContainer height={300} minHeight={10} minWidth={10} width={"100%"}>

<RechartsBarChart data={[({ ["name"] : "Mes 1", ["Ahorro $"] : 10000 }), ({ ["name"] : "Mes 2", ["Ahorro $"] : 20000 }), ({ ["name"] : "Mes 3", ["Ahorro $"] : 30000 }), ({ ["name"] : "Mes 4", ["Ahorro $"] : 40000 }), ({ ["name"] : "Mes 5", ["Ahorro $"] : 50000 }), ({ ["name"] : "Mes 6", ["Ahorro $"] : 60000 }), ({ ["name"] : "Mes 7", ["Ahorro $"] : 70000 }), ({ ["name"] : "Mes 8", ["Ahorro $"] : 80000 }), ({ ["name"] : "Mes 9", ["Ahorro $"] : 90000 }), ({ ["name"] : "Mes 10", ["Ahorro $"] : 100000 }), ({ ["name"] : "Mes 11", ["Ahorro $"] : 110000 }), ({ ["name"] : "Mes 12", ["Ahorro $"] : 120000 })]} height={"100%"} width={"100%"}>

<RechartsBar animationBegin={150} animationDuration={1800} animationEasing={"ease"} dataKey={"Ahorro $"} fill={"var(--blue-11)"} isAnimationActive={true} name={"Ahorro Mensual"} stroke={"var(--pink-10)"}/>
<RechartsXAxis dataKey={"name"} stroke={"var(--mauve-1)"}/>
<RechartsYAxis name={"Ahorro ($)"} stroke={"var(--yellow-1)"}/>
<RechartsCartesianGrid stroke={"var(--yellow-1)"} strokeDasharray={"3 3"}/>
<RechartsTooltip contentStyle={({ ["background"] : "var(--gray-1)", ["borderColor"] : "var(--gray-4)", ["borderRadius"] : "8px" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })}/>
<RechartsLegend layout={"horizontal"} verticalAlign={"top"} wrapperStyle={({ ["wrapper_style"] : ({ ["paddingBottom"] : "10px" }) })}/>
</RechartsBarChart>
</RechartsResponsiveContainer>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"An\u00e1lisis del Gr\u00e1fico"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"El gr\u00e1fico muestra c\u00f3mo un ahorro constante del 10% del ingreso mensual ($10.000) se acumula a lo largo del a\u00f1o. Al final del per\u00edodo, el ahorro total alcanza los $120.000, demostrando el impacto positivo de la constancia en el ahorro."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Conclusi\u00f3n"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

{"Adoptar este h\u00e1bito no solo permite construir un fondo de emergencia, sino que tambi\u00e9n abre oportunidades de inversi\u00f3n y estabilidad financiera a largo plazo"}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"4. Identificacion de Gastos"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["width"] : "100%", ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "350px", ["width"] : "100%", ["IMAGEWidth"] : "600px", ["IMAGEHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid gray", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px gray", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["transform"] : "scale(1.05)" }) })} src={"/identificacion_gastos.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

{"Para una correcta administraci\u00f3n financiera, es clave identificar y clasificar los diferentestipos de gastos. Esto permite entender mejor el flujo de dinero y tomar decisiones m\u00e1s inteligentes sobre el presupuesto."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"1. Gastos Fijos y Supervivencia"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

{"Son aquellos necesarios para mantener un nivel de vida estable y no suelen cambiar mes a mes. Deben ser prioridad en cualquier planificaci\u00f3n financiera."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Ejemplos: "}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginLeft"] : "1.5rem" })}>

<li>

{"Alquiler o hipoteca"}
</li>
<li>

{"Servicios basicos (Agua, luz, gas, internet)"}
</li>
<li>

{"Alimentacion"}
</li>
<li>

{"Transporte esencial"}
</li>
</ol>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"2. Gastos Variables"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

{"Son gastos que pueden fluctuar dependiendo del mes y del estilo de vida. Se pueden ajustar seg\u00fan las necesidades y prioridades."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Ejemplos: "}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginLeft"] : "1.5rem" })}>

<li>

{"Combustible"}
</li>
<li>

{"Mantenimiento de vehiculo"}
</li>
<li>

{"Compras no escenciales"}
</li>
<li>

{"Viajes"}
</li>
</ol>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"3. Gastos Extraordinarios"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

{"Son aquellos imprevistos que pueden generar un impacto en la econom\u00eda personal. Para estos, es recomendable contar con un "}
<RadixThemesStrong>

{"fondo de emergencia"}
</RadixThemesStrong>
{" que permita cubrirlos, sin afectar el presupuesto mensual."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Ejemplos: "}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginLeft"] : "1.5rem" })}>

<li>

{"Reparaciones del Hogar o Vehiculo"}
</li>
<li>

{"Emergencias Medicas"}
</li>
<li>

{"Reemplazo de Electrodomesticos"}
</li>
<li>

{"Multas o Deudas Inesperadas"}
</li>
</ol>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"importante:"}
</RadixThemesStrong>
{" Llevar un registro detallado de los gastos ayuda a identificar patrones y encontrar oportunidades de ahorro. Aplicaciones de finanzas personales o simples hojas de c\u00e1lculo pueden ser herramientas \u00fatiles para este prop\u00f3sito."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"Conceptos Financieros Clave"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "black", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"Para comprender mejor la gesti\u00f3n financiera y la toma de decisiones econ\u00f3micas, es fundamental conocer estos conceptos clave:"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"column"} gap={"3"}>

<Fragment>

<RadixThemesTable.Root css={({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "orange" })}>

<RadixThemesTable.ColumnHeaderCell>

{"Concepto"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Definicion"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Ejemplo"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Tipos/Factores claves"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<RadixThemesTable.Body>

<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Rentabilidad"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Relacion entre los recursos utilizados y el beneficio (o perdida) obtenido."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Inviertes $10.000 y obtenes $12.000 \u2192 Rentabilidad del 20%"}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

<RadixThemesStrong>

{"-Economia"}
</RadixThemesStrong>
{" (Beneficio/Activos)"}
<RadixThemesStrong>

{"-Financiera"}
</RadixThemesStrong>
{"(Beneficio/Capital invertido)"}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Tasa de Interes"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Precio del dinero; lo que se paga por un prestamo o se gana en una inversion"}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Prestamo de $100.000 con 10% anual \u2192 Pagas $10.000 en intereses. "}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

<RadixThemesStrong>

{"-Fija"}
</RadixThemesStrong>
{" (No cambia)"}
<RadixThemesStrong>

{"-Variable"}
</RadixThemesStrong>
{"(Depende de la economia)"}
<RadixThemesStrong>

{"-Nominal vs Efectiva"}
</RadixThemesStrong>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Inflacion"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Aumento sostenido de los precios, reduciendo el poder adquisitivo del dinero."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Producto cuesta $1.000 hoy \u2192 Con 50% de inflaci\u00f3n, costar\u00e1 $1.500 el pr\u00f3ximo mes."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

<RadixThemesStrong>

{"- Demanda excesiva - Costos de produccion - Politica monetaria"}
</RadixThemesStrong>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })}>

{"Conclusi\u00f3n del M\u00f3dulo 1:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li>

<RadixThemesStrong>

{"Resumen:"}
</RadixThemesStrong>
{" Hemos explorado qu\u00e9 son las finanzas, los conceptos contables b\u00e1sicos, la importancia del ahorro, la identificaci\u00f3n de gastos y conceptos financieros clave."}
</li>
<li>

<RadixThemesStrong>

{"Aplicaci\u00f3n Pr\u00e1ctica:"}
</RadixThemesStrong>
{" Te invitamos a revisar tus propios gastos y a empezar a llevar un registro detallado. Calcul\u00e1 tu rentabilidad personal y pens\u00e1 en estrategias para optimizar tu presupuesto."}
</li>
<li>

<RadixThemesStrong>

{"Pr\u00f3ximos Pasos:"}
</RadixThemesStrong>
{" En el pr\u00f3ximo m\u00f3dulo veremos los perfiles de inversores, intrumentos de inversion y sus caracteristicas."}
</li>
</ol>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "absolute", ["bottom"] : "80px", ["left"] : "20px" })}>

<img css={({ ["height"] : "200px", ["width"] : "100%", ["maxWidth"] : "200px" })} src={"/despedida.gif?refresh=1"}/>
</RadixThemesBox>
<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "20px", ["right"] : "20px" })}>

<Button_73b3a35bd49d36f75e3914de80e89462/>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center" })} direction={"column"} gap={"3"}>

<Img_6507af2531a58768e5fa055fb09496d9/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })}>

{"since 1999 copyright registered."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Modulo 1"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

export function Button_73b3a35bd49d36f75e3914de80e89462 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_faf29b6728fc7b0a1decc8f1fa76ef77 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "#ff3333", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["backgroundColor"] : "#cc0000" }), ["transition"] : "all 0.3s ease-in-out", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["border"] : "#6366F1" })} onClick={on_click_faf29b6728fc7b0a1decc8f1fa76ef77}>

{"Siguiente \u2192"}
</RadixThemesButton>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_d30fcee74ef408714698cdbc8b0dc689/>
  )
}

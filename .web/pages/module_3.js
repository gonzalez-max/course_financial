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
import NextHead from "next/head"



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

export function Dropdownmenu__item_b0a6762496b52f8de3428cdb0d180c40 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7dc200586272c1bbcd7f51ea48788135 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_7dc200586272c1bbcd7f51ea48788135}>

{"Contacto"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Div_0c4c0d922d990c245023c72baae2d5e1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_c179379f847dbcf00ba21f73b0ad1b3d/>
</div>
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

export function Errorboundary_bc522f85df02241d3e81fc906dbc9044 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["aria-label"] : "Reflex", ["css"] : ({ ["fill"] : "currentColor" }), ["height"] : "12", ["role"] : "img", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))), (jsx("title", ({  }), (jsx(Fragment, ({  }), "Reflex")))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["backgroundColor"] : "black" })}>

<RadixThemesBox css={({ ["width"] : "100%", ["height"] : "40px", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex", ["top"] : "0px", ["alignItems"] : "center" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<Tooltip_f5e6a55bca12d52bfe1a36c42a21b26c/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesTooltip content={"Inicio"}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</RadixThemesTooltip>
</NextLink>
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

<Img_544b3e2872f3fdafb9f22edff3b2be1f/>
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

<RadixThemesHeading css={({ ["fontSize"] : "clamp(28px, 5vw, 50px)", ["fontWeight"] : "600", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.07em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })}>

{"M\u00f3dulo 3: Introducci\u00f3n al Trading"}
</RadixThemesHeading>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "300", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2" })}>

{"1. \u00bfQu\u00e9 es el trading? "}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/que_es_trader.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"El "}
<RadixThemesStrong>

{"trading"}
</RadixThemesStrong>
{" es la compra y venta de activos financieros (acciones, divisas, criptomonedas, materias primas, etc.) con el objetivo de obtener ganancias a partir de los movimientos del mercado. A diferencia de la inversi\u00f3n tradicional, el trading se enfoca en el corto y mediano plazo."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Caracter\u00edsticas del trading:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

{"Se basa en la especulaci\u00f3n de precios."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Puede realizarse en diferentes mercados financieros."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Requiere an\u00e1lisis (t\u00e9cnico y/o fundamental) para tomar decisiones."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Tiene distintos niveles de riesgo y estrategias seg\u00fan el plazo."}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Tipos de trading m\u00e1s comunes:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Scalping:"}
</RadixThemesStrong>
{" Operaciones en segundos o minutos. Buscan peque\u00f1as ganancias r\u00e1pidas."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Day Trading"}
</RadixThemesStrong>
{" Compra y venta en el mismo d\u00eda. No se dejan operaciones abiertas de un d\u00eda para otro."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Swing Trading:"}
</RadixThemesStrong>
{" Operaciones que duran d\u00edas o semanas, siguiendo tendencias del mercado."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Position Trading:"}
</RadixThemesStrong>
{" Similar a la inversi\u00f3n, manteniendo activos por meses o incluso a\u00f1os."}
</li>
</ol>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/tipos_trading.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "300", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2" })}>

{"2. Tipos de an\u00e1lisis en Trading"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"En el mundo del trading existen dos enfoques principales para analizar los mercados financieros: el "}
<RadixThemesStrong>

{"an\u00e1lisis fundamental"}
</RadixThemesStrong>
{" y "}
<RadixThemesStrong>

{"el an\u00e1lisis t\u00e9cnico."}
</RadixThemesStrong>
{" Ambos tienen sus ventajas y desventajas, pero en este curso nos enfocaremos principalmente en el an\u00e1lisis t\u00e9cnico."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/fundamental_vs_tecnico.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"An\u00e1lisis Fundamental"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block" })}>

{"El"}
<RadixThemesStrong>

{" an\u00e1lisis fundamental"}
</RadixThemesStrong>
{" estudia el valor real de un activo basado en factores econ\u00f3micos, financieros y de mercado. Se usa principalmente en inversiones a largo plazo."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Aspectos clave:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

{" Datos econ\u00f3micos (PIB, inflaci\u00f3n, tasas de inter\u00e9s)."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{" Reportes financieros de empresas (ingresos, ganancias, deuda)."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{" Noticias y eventos globales que afectan los mercados."}
</li>
</ol>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Ejemplo:"}
</RadixThemesStrong>
{" Un inversor en acciones analiza los reportes de ganancias de una empresa para determinar si es una buena inversi\u00f3n."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Desventaja:"}
</RadixThemesStrong>
{" Requiere un conocimiento profundo de econom\u00eda y los efectos de las noticias pueden tardar en reflejarse en el precio."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"An\u00e1lisis T\u00e9cnico (Enfoque de este curso)"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block" })}>

{"El "}
<RadixThemesStrong>

{"an\u00e1lisis t\u00e9cnico"}
</RadixThemesStrong>
{" Se basa en el estudio de los gr\u00e1ficos de precios y patrones de comportamiento del mercado. Su premisa es que \u201cel precio lo descuenta todo\u201d y que la historia tiende a repetirse."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Aspectos clave:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Acci\u00f3n del precio:"}
</RadixThemesStrong>
{" C\u00f3mo se mueve el precio en el tiempo."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Soportes y resistencias:"}
</RadixThemesStrong>
{" Zonas donde el precio tiende a frenarse."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Tendencias:"}
</RadixThemesStrong>
{" Identificaci\u00f3n de mercados alcistas, bajistas o laterales."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Patrones gr\u00e1ficos y de velas japonesas:"}
</RadixThemesStrong>
{" Figuras que indican posibles movimientos futuros."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Indicadores t\u00e9cnicos:"}
</RadixThemesStrong>
{" Herramientas como medias m\u00f3viles, RSI y MACD que ayudan en la toma de decisiones."}
</li>
</ol>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Ejemplo:"}
</RadixThemesStrong>
{" Un trader observa un patr\u00f3n de velas Doji en una resistencia fuerte y decide vender porque indica posible reversi\u00f3n de tendencia."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Ventaja:"}
</RadixThemesStrong>
{" Se basa en datos visuales y permite tomar decisiones r\u00e1pidas para operar en el corto y mediano plazo."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "300", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2" })}>

{"3. Introducci\u00f3n a las Velas Japonesas"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Las velas japonesas"}
</RadixThemesStrong>
{" son una de las herramientas m\u00e1s utilizadas en el an\u00e1lisis t\u00e9cnico. Representan la evoluci\u00f3n del precio en un per\u00edodo determinado y ayudan a interpretar el sentimiento del mercado."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/vela_verde_contra_roja.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Estructura de una vela japonesa"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Cada vela est\u00e1 compuesta por:"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"1. Cuerpo:"}
</RadixThemesStrong>
{" Diferencia entre el precio de apertura y cierre."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"2. Mecha o sombra:"}
</RadixThemesStrong>
{" Representa los precios m\u00e1ximo y m\u00ednimo alcanzados."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"3. Color:"}
</RadixThemesStrong>
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"\ud83d\udfe2 Verde:"}
</RadixThemesStrong>
{" Indica que el precio cerr\u00f3 por encima del precio de apertura (alcista)."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"\ud83d\udd34 Roja:"}
</RadixThemesStrong>
{" Indica que el precio cerr\u00f3 por debajo del precio de apertura (bajista)."}
</li>
</ol>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/velas-japonesas.png?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Tipos de velas m\u00e1s comunes"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Vela alcista:"}
</RadixThemesStrong>
{" Cuerpo verde, con o sin sombras. Indica fuerza compradora."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Vela bajista:"}
</RadixThemesStrong>
{" Cuerpo rojo, con o sin sombras. Indica presi\u00f3n vendedora."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Doji:"}
</RadixThemesStrong>
{"Representa indecisi\u00f3n en el mercado porque el precio de apertura y cierre son muy similares, con sombras en ambos lados o sin sombras. Cuerpo casi inexistente, reflejando indecisi\u00f3n en el mercado."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Gravestone Doji:"}
</RadixThemesStrong>
{" Tiene una sombra superior larga y casi sin cuerpo ni sombra inferior. Esto significa que los compradores intentaron subir el precio, pero los vendedores tomaron el control y lo devolvieron al nivel de apertura."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Martillo y martillo (Hammer) invertido:"}
</RadixThemesStrong>
{" Posible cambio de tendencia si aparecen en zonas clave."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Estrella fugaz (shooting star) y hombre colgado:"}
</RadixThemesStrong>
{" Herramientas como medias m\u00f3viles, RSI y MACD que ayudan en la toma de decisiones."}
</li>
</ol>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/fuerza_velas.png?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"\u26a0\ufe0f\u00a1\u00a1importante!!\u26a0\ufe0f"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block" })}>

{"Las Velas Japonesas ayudan a entender la accion del precio en cualquier mercado, si bien, son escenciales para identificar patrones y tendencias."}
<RadixThemesStrong>

{" deben combinarse con otros indicadores para confirmar se\u00f1ales."}
</RadixThemesStrong>
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"En las pr\u00f3ximas secciones exploraremos c\u00f3mo usarlas de forma pr\u00e1ctica y segura."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "300", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2" })}>

{"4. Gesti\u00f3n del Riesgo "}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"El manejo del riesgo"}
</RadixThemesStrong>
{" en el mercado es esencial y debe considerarse un negocio, no una apuesta. Muchos operadores caen en la trampa de intentar "}
<RadixThemesStrong>

{"PREDECIR"}
</RadixThemesStrong>
{" el mercado, lo que puede llevar a p\u00e9rdidas significativas. "}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/gestion_riesgo.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Es fundamental centrarse en el "}
<RadixThemesStrong>

{"an\u00e1lisis t\u00e9cnico"}
</RadixThemesStrong>
{" y "}
<RadixThemesStrong>

{"desarrollar una mentalidad empresarial"}
</RadixThemesStrong>
{". El tama\u00f1o de las \u00f3rdenes debe determinarse cuidadosamente para preservar el capital y evitar que el dinero pase de manos inexpertas a operadores m\u00e1s experimentados. Aprender a gestionar el capital y controlar el riesgo es clave para el \u00e9xito en el trading."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Medidas Simples para el Manejo del Riesgo"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block" })}>

{"Para gestionar adecuadamente el riesgo en el mercado, sigue estas medidas:"}
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

{"1. Define cu\u00e1nto capital est\u00e1s dispuesto a arriesgar en cada operaci\u00f3n."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"2. Establece un l\u00edmite de p\u00e9rdida personal, como un m\u00e1ximo del 10% de tu capital total."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"3. Si acumulas m\u00e1s de 10 p\u00e9rdidas consecutivas, DETENTE y reeval\u00faa tu estrategia."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"4. Si las p\u00e9rdidas potenciales de tus operaciones abiertas representan un 10% o m\u00e1s de tu capital, EVITA abrir nuevas operaciones."}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Errores Comunes en el Manejo del Riesgo"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Uno de los errores m\u00e1s frecuentes"}
</RadixThemesStrong>
{" es aumentar el tama\u00f1o de una nueva orden despu\u00e9s de una p\u00e9rdida previa, lo que puede llevar a p\u00e9rdidas masivas. Para evitarlo, sigue una estrategia que limite el riesgo de tu capital en cada operaci\u00f3n. Mant\u00e9n la objetividad y evita que las emociones influyan en tus decisiones. Siempre usa un "}
<RadixThemesStrong>

{"stop-loss"}
</RadixThemesStrong>
{"y arriesga solo una peque\u00f1a parte de tu capital en cada operaci\u00f3n."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Herramientas de gesti\u00f3n de riesgo"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Stop-Loss:"}
</RadixThemesStrong>
{" Es una orden que cierra tu operaci\u00f3n autom\u00e1ticamente para limitar p\u00e9rdidas. Ejemplo: Compras a $100, stop-loss en $95, pierdes $5 si se ejecuta. Es \u00fatil para principiantes, pero cuidado: en mercados manipulados, noticias falsas pueden barrer los stop-loss y sacarte antes de que el precio suba. Algunos traders lo evitan."}
<RadixThemesStrong>

{" Mas adelante durante el curso lo veremos mas a detalle."}
</RadixThemesStrong>
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Relaci\u00f3n Riesgo/Beneficio:"}
</RadixThemesStrong>
{" Imagin\u00e1 que compras algo porque cre\u00e9s que subir\u00e1 de precio. Decid\u00eds arriesgar $50 si las cosas van mal, pero solo entr\u00e1s si pod\u00e9s ganar al menos $100. Eso es una relaci\u00f3n riesgo/beneficio de 1 a 2. La idea es buscar operaciones donde valga la pena el riesgo."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Tama\u00f1o de posici\u00f3n:"}
</RadixThemesStrong>
{" Ten\u00e9s $50.000 y quer\u00e9s arriesgar $500 por operaci\u00f3n. Si una acci\u00f3n cuesta $100 y pens\u00e1s perder $5 por acci\u00f3n si baja, compr\u00e1s 100 acciones ($10.000). As\u00ed, tu riesgo queda controlado aunque salgas manualmente."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "300", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2" })}>

{"5. Psicolog\u00eda Del Trading"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"El \u00e9xito en el trading no solo depende del an\u00e1lisis t\u00e9cnico, sino tambi\u00e9n de "}
<RadixThemesStrong>

{"la mentalidad del inversor."}
</RadixThemesStrong>
{" La flexibilidad mental es crucial, y asumir la responsabilidad de cada decisi\u00f3n es el primer paso hacia una mentalidad ganadora. Evita culpar a factores externos y c\u00e9ntrate en mejorar tus propias estrategias."}
</RadixThemesText>
<RadixThemesHeading css={({ ["marginBottom"] : "1em" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "700px", ["maxWidth"] : "100%", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px black", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["box-shadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/psicologia_trading.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesHeading>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"El Proceso Neurol\u00f3gico"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Es importante desarrollar creencias realistas sobre el mercado:"}
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

{"El mercado "}
<RadixThemesStrong>

{"es incierto"}
</RadixThemesStrong>
{" y no puede predecirse con certeza."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Una estrategia basada en "}
<RadixThemesStrong>

{"an\u00e1lisis t\u00e9cnico y gesti\u00f3n de capital"}
</RadixThemesStrong>
{"aumenta las probabilidades de \u00e9xito."}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left" })}>

{"Mentalidad del Inversor"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["alignText"] : "center", ["word-wrap"] : "break-word", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "10px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Adaptar tu mentalidad es clave para operar con \u00e9xito. La disciplina y la paciencia son esenciales para que, a largo plazo, las operaciones ganadoras superen a las perdedoras. Cambiar creencias err\u00f3neas y desarrollar confianza en tu sistema de trading marcar\u00e1 la diferencia entre el \u00e9xito y el fracaso."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "300", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2" })}>

{"Tips a tener en cuenta"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<Fragment>

<RadixThemesTable.Root css={({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "orange" })}>

<RadixThemesTable.ColumnHeaderCell>

{"Tip"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Descripci\u00f3n"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<RadixThemesTable.Body>

<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"\u26ab Estudiar:"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"\u2705 Es muy importante conocer a profundidad los distintos conceptos y an\u00e1lisis del mercado."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"\u26ab Tener un plan:"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"\u2705 Hay que tomar seriamente las inversiones, armando un plan que contemple distintos escenarios."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"\u26ab Gestionar el riesgo:"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"\u2705 Es fundamental conocer los potenciales riesgos para evaluar correctamente el tama\u00f1o de la posici\u00f3n."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"\u26ab Invertir con ahorros:"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"\u274c Tomar deuda para invertir suele ser una mala idea y aumenta el riesgo financiero."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"\u26ab No operar para comprar algo:"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"\u274c No es recomendable operar para conseguir dinero r\u00e1pido para un gasto espec\u00edfico suele llevar a tomar malas decisiones."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"\u26ab No seguir an\u00e1lisis de otros:"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"\u274c Cada persona tiene un perfil distinto, por lo que debemos invertir seg\u00fan nuestro propio conocimiento y experiencia."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"\u26ab Calcular riesgo/beneficio:"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"\u2705 Siempre evaluar el potencial riesgo y beneficio antes de ejecutar una operaci\u00f3n."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "300", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "10px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "60%", ["margin"] : "auto", ["lineHeight"] : "1.2" })}>

{"Conclusi\u00f3n del M\u00f3dulo 3: "}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Resumen:"}
</RadixThemesStrong>
{" En este m\u00f3dulo aprendimos qu\u00e9 es el trading, sus principales caracter\u00edsticas y enfoques. Diferenciamos entre an\u00e1lisis fundamental y an\u00e1lisis t\u00e9cnico, profundizando en este \u00faltimo. Tambi\u00e9n exploramos las velas japonesas y c\u00f3mo nos ayudan a interpretar el mercado."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Aplicaci\u00f3n Pr\u00e1ctica:"}
</RadixThemesStrong>
{" Reflexion\u00e1 sobre qu\u00e9 tipo de trading se adapta mejor a tu estilo y objetivos. Analiz\u00e1 gr\u00e1ficos con velas japonesas y empez\u00e1 a identificar patrones b\u00e1sicos para mejorar tu lectura del mercado."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Pr\u00f3ximos Pasos:"}
</RadixThemesStrong>
{" En el siguiente m\u00f3dulo, daremos los primeros pasos en el an\u00e1lisis t\u00e9cnico, explorando el Ciclo del Precio, identificando tendencias alcistas y bajistas, trazando l\u00edneas de soporte y resistencia, y reconociendo patrones gr\u00e1ficos que revelan el comportamiento del mercado."}
</li>
</ol>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"center"} gap={"3"}>

<RadixThemesBox css={({ ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "absolute", ["bottom"] : "80px", ["left"] : "20px" })}>

<img css={({ ["height"] : "200px", ["width"] : "100%", ["maxWidth"] : "200px" })} src={"/despedida.gif?refresh=1"}/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "20px", ["right"] : "20px" })}>

<Button_f46d7b6d1b8cc2ccedd67f51887d3b65/>
</RadixThemesBox>
<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "20px", ["left"] : "20px" })}>

<Button_a341248439020d6913fc47798be684e9/>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center", ["padding"] : "10px 0", ["backgroundColor"] : "black" })} direction={"column"} gap={"3"}>

<Img_1dc145e38a4a77bada704003b0548d02/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })}>

{"since 1999 copyright registered."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Modulo 3"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

export function Img_1dc145e38a4a77bada704003b0548d02 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd5dfb31d3782427c73d08de247645b4 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={on_click_bd5dfb31d3782427c73d08de247645b4} src={reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src}/>
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

export function Button_a341248439020d6913fc47798be684e9 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_faf29b6728fc7b0a1decc8f1fa76ef77 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "#2d5986", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["backgroundColor"] : "#4080bf" }), ["transition"] : "all 0.3s ease-in-out", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["borderColor"] : "#6366F1" })} onClick={on_click_faf29b6728fc7b0a1decc8f1fa76ef77}>

{"\u2190 Atr\u00e1s"}
</RadixThemesButton>
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


export function Button_f46d7b6d1b8cc2ccedd67f51887d3b65 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_08b7789e3faf18ddcedc3d0f700af8da = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_4", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "#ff3333", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["backgroundColor"] : "#cc0000" }), ["transition"] : "all 0.3s ease-in-out", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["border"] : "#6366F1" })} onClick={on_click_08b7789e3faf18ddcedc3d0f700af8da}>

{"Siguiente \u2192"}
</RadixThemesButton>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_bc522f85df02241d3e81fc906dbc9044/>
  )
}

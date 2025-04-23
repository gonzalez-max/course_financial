/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { A_2400880137c329fe3c62d4f2e32fe205, Dropdownmenu__item_a4b79031cd0a0aaab6615a386df7fd1f, Dropdownmenu__item_b0a6762496b52f8de3428cdb0d180c40, Img_1dc145e38a4a77bada704003b0548d02, Img_544b3e2872f3fdafb9f22edff3b2be1f, Tooltip_f5e6a55bca12d52bfe1a36c42a21b26c } from "$/utils/stateful_components"
import { ErrorBoundary } from "react-error-boundary"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
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

export function Root_2f1223816bff7ec3d439c5d17bf66c10 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_352cc4ca87de6a308aa6959801562746 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.mi_web___views___web_principal_views___soporte_page____contact_form_state.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))());

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_352cc4ca87de6a308aa6959801562746}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["justifyContent"] : "center", ["maxWidth"] : "500px", ["width"] : "100%", ["marginTop"] : "4em", ["marginBottom"] : "1em" })} direction={"column"} gap={"3"}>

<RadixThemesFlex>

<RadixThemesCard css={({ ["width"] : "500px", ["backgroundColor"] : "rgba(255, 255, 255, 0.3)" })} variant={"surface"}>

<RadixThemesTextField.Root css={({ ["color"] : "white", ["isRequired"] : true })} name={"name"} placeholder={"Nombre"}/>
<RadixThemesTextField.Root css={({ ["isRequired"] : true })} name={"email"} placeholder={"Correo electr\u00f3nico"}/>
<RadixThemesTextField.Root css={({ ["isRequired"] : true })} name={"subject"} placeholder={"Asunto"}/>
<RadixThemesTextArea css={({ ["& textarea"] : null, ["height"] : "8em", ["isRequired"] : true })} name={"message"} placeholder={"Mensaje"}/>
<RadixThemesButton css={({ ["backgroundColor"] : "black", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "80px", ["transition"] : "all 0.3s ease-in-out", ["alignItems"] : "center", ["justifyContent"] : "center", ["cursor"] : "pointer", ["width"] : "100%", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.6)", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} type={"submit"}>

{"Enviar"}
</RadixThemesButton>
</RadixThemesCard>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
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


export function Div_0c4c0d922d990c245023c72baae2d5e1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_c179379f847dbcf00ba21f73b0ad1b3d/>
</div>
  )
}

export function Errorboundary_a2a6369045f079145a34dd4b622b9aee () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["aria-label"] : "Reflex", ["css"] : ({ ["fill"] : "currentColor" }), ["height"] : "12", ["role"] : "img", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))), (jsx("title", ({  }), (jsx(Fragment, ({  }), "Reflex")))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["textColor"] : "black", ["width"] : "100%", ["flexDirection"] : "column", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto", ["background"] : "radial-gradient(circle,rgba(117, 55, 153, 1) 0%, rgba(80, 98, 163, 1) 51%, rgba(28, 115, 166, 1) 100%)" })}>

<RadixThemesBox css={({ ["width"] : "100%", ["height"] : "40px", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex", ["top"] : "0px", ["alignItems"] : "center" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<Tooltip_f5e6a55bca12d52bfe1a36c42a21b26c/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesTooltip content={"Inicio"}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) })} size={"3"} weight={"regular"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</RadixThemesTooltip>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesHoverCard.Root>

<RadixThemesHoverCard.Trigger>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"#mis-proyectos"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) })} size={"3"} weight={"regular"}>

{"Proyectos"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesHoverCard.Trigger>
<RadixThemesHoverCard.Content css={({ ["padding"] : "2", ["borderRadius"] : "8px", ["border"] : "1.5px solid transparent", ["boxShadow"] : "0px 4px 14px rgba(0, 0, 0, 0.3)", ["transition"] : "opacity 0.3s ease-out, transform 0.3s ease-out", ["background"] : "rgba(250, 250, 250, 0.4)", ["backdropFilter"] : "blur(10px)" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) })} size={"3"} weight={"regular"}>

<NextLink href={"/financial_page"} passHref={true}>

{"Curso de Finanzas, Trading y como evitar Estafas."}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesHoverCard.Content>
</RadixThemesHoverCard.Root>
<RadixThemesTooltip content={"Contact\u00e1me"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/soporte_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) })} size={"3"} weight={"regular"}>

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

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) })} size={"3"} weight={"regular"}>

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
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["justifyContent"] : "center", ["size"] : "2", ["maxWidth"] : "800px" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "50px", ["marginTop"] : "2em" })}>

{"\u00a1\u00a1 Contact\u00e1me !!"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Root_2f1223816bff7ec3d439c5d17bf66c10/>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center", ["backgroundColor"] : "transparent", ["display"] : "flex", ["flexWrap"] : "wrap", ["gap"] : "10px" })} direction={"column"} gap={"3"}>

<Img_1dc145e38a4a77bada704003b0548d02/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })}>

{"since 1999 copyright registered."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Soporte"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<A_2400880137c329fe3c62d4f2e32fe205/>
<Errorboundary_a2a6369045f079145a34dd4b622b9aee/>
</Fragment>
  )
}

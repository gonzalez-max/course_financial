/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export function Errorboundary_780d8bcc4e59bbae15b0d7241f2c9f15 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["aria-label"] : "Reflex", ["css"] : ({ ["fill"] : "currentColor" }), ["height"] : "12", ["role"] : "img", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))), (jsx("title", ({  }), (jsx(Fragment, ({  }), "Reflex")))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["textColor"] : "black", ["width"] : "100%", ["maxWidth"] : "100%", ["background"] : "linear-gradient(180deg, rgba(2,4,45,1) 0%, rgba(136,75,111,1) 100%)", ["display"] : "flex", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "10px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto" })}>

<RadixThemesBox css={({ ["width"] : "100%", ["height"] : "40px", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex", ["top"] : "0px", ["alignItems"] : "center" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<Tooltip_6525ba879cedca0bf213d67734a8d425/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/financial_page"} passHref={true}>

<RadixThemesTooltip content={"Pagina Principal"}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Inicio"}
</RadixThemesHeading>
</RadixThemesTooltip>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesHoverCard.Root>

<RadixThemesHoverCard.Trigger>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/choice_modules"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Curso"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesHoverCard.Trigger>
<RadixThemesHoverCard.Content css={({ ["padding"] : "2", ["borderRadius"] : "8px", ["border"] : "1.5px solid transparent", ["boxShadow"] : "0px 4px 14px rgba(0, 0, 0, 0.3)", ["transition"] : "transform 0.2s ease-in-out", ["background"] : "rgba(250, 250, 250, 0.4)", ["backdropFilter"] : "blur(10px)" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#ffd284", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" })} size={"5"} weight={"bold"}>

{"M\u00f3dulos del curso "}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_1"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 1:"}
</RadixThemesStrong>
{" Fundamentos de Finanzas Personales y el Mercado "}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_2"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 2:"}
</RadixThemesStrong>
{" Inversores y tipos de Instrumentos"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_3"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 3:"}
</RadixThemesStrong>
{" Introducci\u00f3n al Trading"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_4"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 4:"}
</RadixThemesStrong>
{" Fundamentos del An\u00e1lisis T\u00e9cnico y Patrones"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_5"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 5:"}
</RadixThemesStrong>
{" Dominando Soportes, Resistencias y Rangos"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_6"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 6:"}
</RadixThemesStrong>
{" Tendencias y como identificarlas"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_7"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 7:"}
</RadixThemesStrong>
{" Indicadores y Entradas Exitosas"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_8"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 8:"}
</RadixThemesStrong>
{" Hablemos de Criptomonedas"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_9"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 9:"}
</RadixThemesStrong>
{" Las Estafas en el Trading y las Inversiones"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

<NextLink href={"/module_10"} passHref={true}>

<RadixThemesStrong>

{"M\u00f3dulo 10:"}
</RadixThemesStrong>
{" Plataformas de Trading y Final del Curso"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesHoverCard.Content>
</RadixThemesHoverCard.Root>
<RadixThemesTooltip content={"Contact\u00e1me"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/soporte_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

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

<Img_0b82476f3ea7e22d4a7d54d5744b561b/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/financial_page"} passHref={true}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" })} size={"3"} weight={"regular"}>

{"Inicio"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<Dropdownmenu__item_bab67f5e89dd620a8f08fe00942058f5/>
<Dropdownmenu__item_f5601b3f02dbc23bf8da1fc3302d2108/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["maxWidth"] : "600px", ["width"] : "100%", ["borderRadius"] : "10px" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Fragment>

<RadixThemesBox>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["maxWidth"] : "600px" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "clamp(28px, 5vw, 50px)", ["fontWeight"] : "600", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.07em", ["width"] : "100%", ["maxWidth"] : "600px", ["margin"] : "auto", ["lineHeight"] : "1.1", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["marginTop"] : "35px" })}>

{"Curso de Finanzas, Trading y como evitar Estafas"}
</RadixThemesHeading>
<RadixThemesBox>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["maxWidth"] : "600px", ["width"] : "100%" })}>

<img css={({ ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "0.1px solid white", ["borderRadius"] : "20px" })} src={"/intro_image.jpg?refresh=1"}/>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "700", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginTop"] : "0.5em" })}>

{"Introduccion"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block" })}>

{"Te damos la bienvenida al curso de Inversiones Trading y como evitar estafas, dise\u00f1ado para brindarte un conocimiento s\u00f3lido y pr\u00e1ctico sobre el mundo financiero. A lo largo de este curso, aprender\u00e1s desde los conceptos m\u00e1s b\u00e1sicos hasta estrategias avanzadas de inversi\u00f3n, con un enfoque especial en c\u00f3mo reconocer y evitar fraudes financieros."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "700", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginTop"] : "0.5em" })}>

{"\u00bfQu\u00e9 aprender\u00e1s en este curso?"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

{"Fundamentos de finanzas personales: administraci\u00f3n del dinero, ahorro e inversi\u00f3n."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Principios b\u00e1sicos y avanzados de trading y an\u00e1lisis t\u00e9cnico."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Identificaci\u00f3n de fraudes y estafas financieras m\u00e1s comunes."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{" Herramientas y estrategias para proteger tu capital y tomar decisiones informadas."}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "700", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginTop"] : "0.5em" })}>

{"\u00bfPor qu\u00e9 tomar este curso?"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block", ["marginTop"] : "0.5em" })}>

{"En un mundo donde las oportunidades financieras crecen, tambi\u00e9n lo hacen los riesgos. Este curso te proporcionar\u00e1 conocimientos pr\u00e1cticos y casos reales para que puedas invertir con confianza y seguridad."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "700", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginTop"] : "0.5em" })}>

{"Seis Puntos a tener en cuenta"}
</RadixThemesHeading>
<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "20px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginTop"] : "0.5em" })}>

{"1. Organiza tu tiempo"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block" })}>

{"El curso est\u00e1 dise\u00f1ado para darte conocimientos desde lo b\u00e1sico hasta lo avanzado, por lo que es importante que asignes tiempo cada semana para aprender, practicar y repasar los contenidos."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "20px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginTop"] : "0.5em" })}>

{"2. Ten una libreta de apuntes"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block" })}>

{"Aunque sea un curso digital, es fundamental tomar notas de los conceptos clave. Esto te ayudar\u00e1 a recordar informaci\u00f3n importante y a estructurar mejor tu aprendizaje."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "20px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginTop"] : "0.5em" })}>

{"3. S\u00e9 cr\u00edtico con la informaci\u00f3n"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block" })}>

{"En internet hay mucha informaci\u00f3n falsa sobre trading y finanzas. Aseg\u00farate de analizar la fuente de cada dato y aplicar un pensamiento cr\u00edtico antes de tomar decisiones financieras."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "20px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginTop"] : "0.5em" })}>

{"4. Mant\u00e9n una mentalidad realista y disciplinada"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block" })}>

{"El trading y las finanzas no son un esquema para hacerse rico r\u00e1pidamente. Aqu\u00ed aprender\u00e1s c\u00f3mo tomar decisiones informadas y minimizar riesgos, pero necesitar\u00e1s paciencia, disciplina y pr\u00e1ctica constante."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "20px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginTop"] : "0.5em" })}>

{"5. Prepar\u00e1te para aprender de tus errores"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block" })}>

{"En el mundo financiero, cometer errores es parte del proceso. No te frustres si algo no sale bien al principio, lo importante es aprender y mejorar con la experiencia."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "20px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginTop"] : "0.5em" })}>

{"6. Disfruta el proceso y participa activamente"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["word-wrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "normal", ["fontSize"] : "clamp(14px, 1.2vw, 18px)", ["padding"] : "0px", ["display"] : "block" })}>

{"Haz preguntas, comparte ideas y aprovecha al m\u00e1ximo este curso. La educaci\u00f3n financiera es una de las herramientas m\u00e1s valiosas para mejorar tu calidad de vida."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesHeading css={({ ["fontSize"] : "clamp(28px, 5vw, 50px)", ["fontWeight"] : "600", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.07em", ["width"] : "100%", ["maxWidth"] : "600px", ["margin"] : "auto", ["lineHeight"] : "1.1", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["marginTop"] : "0.5em" })}>

{"Muchos Exitos con tu aprendisaje... comencemos \ud83d\ude80\ud83d\udcc8"}
</RadixThemesHeading>
<Link_af73276f7b9bee5b2a301fd4362953d7/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</Fragment>
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

{"Curso Finanzas y Trading"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Dropdownmenu__item_f5601b3f02dbc23bf8da1fc3302d2108 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7dc200586272c1bbcd7f51ea48788135 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_7dc200586272c1bbcd7f51ea48788135}>

{"Contactos"}
</RadixThemesDropdownMenu.Item>
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

export function Img_1dc145e38a4a77bada704003b0548d02 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd5dfb31d3782427c73d08de247645b4 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={on_click_bd5dfb31d3782427c73d08de247645b4} src={reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src}/>
  )
}

export function Link_af73276f7b9bee5b2a301fd4362953d7 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"}>

<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "30px", ["spacing"] : "5px", ["borderRadius"] : "50px", ["marginBottom"] : "10px", ["fontSize"] : "500", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "rgba(0,0,0,0.9)", ["border"] : "1.5px solid black", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["borderColor"] : "black", ["transform"] : "scale(1.10)", ["color"] : "black" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/choice_modules", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{"Comenzar con el curso"}
</RadixThemesButton>
</RadixThemesLink>
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

export function Tooltip_6525ba879cedca0bf213d67734a8d425 () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesTooltip content={"No me toques."}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], args, ({  }))))} src={reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src}/>
</RadixThemesTooltip>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_780d8bcc4e59bbae15b0d7241f2c9f15/>
  )
}

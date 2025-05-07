/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import NextLink from "next/link"
import { Menu as LucideMenu } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { Bar as RechartsBar, CartesianGrid as RechartsCartesianGrid, Legend as RechartsLegend, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const RechartsBarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });


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

export function Tooltip_6525ba879cedca0bf213d67734a8d425 () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesTooltip content={"No me toques."}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], args, ({  }))))} src={reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src}/>
</RadixThemesTooltip>
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

export function Img_0b82476f3ea7e22d4a7d54d5744b561b () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_f2425d612b9e4477d8552ff062cbbc10 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} onClick={on_click_f2425d612b9e4477d8552ff062cbbc10} src={reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src}/>
  )
}

export function Button_e711dacee9b5486a9ecece1c6e967a5a () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_faf29b6728fc7b0a1decc8f1fa76ef77 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} onClick={on_click_faf29b6728fc7b0a1decc8f1fa76ef77}>

{"Siguiente \u2192"}
</RadixThemesButton>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesBox css={({ ["textColor"] : "black", ["width"] : "100%", ["background"] : "linear-gradient(180deg, rgba(74,34,98,1) 0%, rgba(71,85,139,1) 52%, rgba(11,103,93,1) 100%)", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto", ["maxWidth"] : "100%" })}>

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

<LucideMenu css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<Dropdownmenu__item_bab67f5e89dd620a8f08fe00942058f5/>
<Dropdownmenu__item_f5601b3f02dbc23bf8da1fc3302d2108/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["justifyContent"] : "center", ["maxWidth"] : "600px", ["size"] : "2" })} direction={"column"} gap={"3"}>

<RadixThemesBox>

<RadixThemesHeading css={({ ["fontSize"] : "clamp(28px, 5vw, 50px)", ["fontWeight"] : "600", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.07em", ["width"] : "100%", ["maxWidth"] : "600px", ["margin"] : "auto", ["lineHeight"] : "1.1", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["marginTop"] : "35px", ["marginBottom"] : "0.5em" })}>

{"M\u00f3dulo 1: Fundamentos de Finanzas Personales y el Mercado"}
</RadixThemesHeading>
<RadixThemesHeading css={({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })}>

{"1. \u00bfQu\u00e9 son las finanzas?"}
</RadixThemesHeading>
<RadixThemesBox css={({ ["marginBottom"] : "1em" })}>

<RadixThemesBox css={({ ["alignItems"] : "center", ["display"] : "flex", ["justify"] : "center", ["width"] : "100%", ["height"] : "100%" })}>

<img css={({ ["width"] : "100%", ["maxWidth"] : "500px", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["border"] : "0.1px solid white", ["borderRadius"] : "20px", ["display"] : "block", ["margin"] : "auto" })} src={"/que_son_finanzas.gif?refresh=1"}/>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Las finanzas corresponden a un \u00e1rea de la econom\u00eda que estudia la obtenci\u00f3n y administraci\u00f3n de dinero y de capital, es decir, los recursos financieros.\nEstudia tanto la obtenci\u00f3n de recursos (financiaci\u00f3n), como la inversi\u00f3n y el ahorro de los mismos."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1" })}>

{"2. Conceptos Contables"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginTop"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })}>

{"\u2022 Cuentas patrimoniales"}
</li>
<li css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })}>

{"\u2022 Activo, pasivo y patrimonio neto"}
</li>
<li css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })}>

{"\u2022 Cuentas de resultados"}
</li>
<li css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })}>

{"\u2022 Ingresos, gastos y resultado"}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })}>

{"Cuentas patrimoniales"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em", ["marginTop"] : "1em" })} direction={"column"} gap={"3"}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesTable.Root css={({ ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "600px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "#2d5986" })}>

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
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesTable.Root css={({ ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "400px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "#2d5986" })}>

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
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })}>

{"3. El Ahorro"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/el_ahorro.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Este h\u00e1bito no solo te ayudar\u00e1 a construir un fondo de emergencia, sino que tambi\u00e9n te permitir\u00e1invertir en oportunidades futuras. Con el tiempo, ese 10% acumulado puede brindarte estabilidad financiera y mayor libertad para tomar decisiones sin presiones econ\u00f3micas."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong css={({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })}>

{"Por ejemplo"}
</RadixThemesStrong>
{", si cobr\u00e1s $100.000 por mes, destinar el 10% significar\u00eda ahorrar $10.000 de entrada. Si configur\u00e1s una transferencia autom\u00e1tica el mismo d\u00eda que te depositan el sueldo, te asegur\u00e1s de no gastarlo sin darte cuenta. Tambi\u00e9n pod\u00e9s usar una app que redondee cada compra al peso superior y mande la diferencia a una cuenta de ahorros. A la larga, estos peque\u00f1os aportes suman m\u00e1s de lo que imagin\u00e1s, y casi sin esfuerzo."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"column"} gap={"3"}>

<RechartsResponsiveContainer height={300} minHeight={10} minWidth={10} width={"100%"}>

<RechartsBarChart css={({ ["maxWidth"] : "600px" })} data={[({ ["name"] : "Mes 1", ["Ahorro $"] : 10000 }), ({ ["name"] : "Mes 2", ["Ahorro $"] : 20000 }), ({ ["name"] : "Mes 3", ["Ahorro $"] : 30000 }), ({ ["name"] : "Mes 4", ["Ahorro $"] : 40000 }), ({ ["name"] : "Mes 5", ["Ahorro $"] : 50000 }), ({ ["name"] : "Mes 6", ["Ahorro $"] : 60000 }), ({ ["name"] : "Mes 7", ["Ahorro $"] : 70000 }), ({ ["name"] : "Mes 8", ["Ahorro $"] : 80000 }), ({ ["name"] : "Mes 9", ["Ahorro $"] : 90000 }), ({ ["name"] : "Mes 10", ["Ahorro $"] : 100000 }), ({ ["name"] : "Mes 11", ["Ahorro $"] : 110000 }), ({ ["name"] : "Mes 12", ["Ahorro $"] : 120000 })]} height={"100%"} width={"100%"}>

<RechartsBar animationBegin={150} animationDuration={1800} animationEasing={"ease"} dataKey={"Ahorro $"} fill={"var(--blue-11)"} isAnimationActive={true} name={"Ahorro Mensual"} stroke={"var(--pink-10)"}/>
<RechartsXAxis dataKey={"name"} stroke={"var(--mauve-1)"}/>
<RechartsYAxis name={"Ahorro ($)"} stroke={"var(--mauve-1)"}/>
<RechartsCartesianGrid stroke={"var(--mauve-2)"} strokeDasharray={"3 3"}/>
<RechartsTooltip contentStyle={({ ["background"] : "var(--gray-1)", ["borderColor"] : "var(--gray-4)", ["borderRadius"] : "8px" })} cursor={({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" })} itemStyle={({ ["color"] : "var(--gray-12)" })} labelStyle={({ ["color"] : "var(--gray-11)" })}/>
<RechartsLegend layout={"horizontal"} verticalAlign={"top"} wrapperStyle={({ ["wrapper_style"] : ({ ["paddingBottom"] : "10px" }) })}/>
</RechartsBarChart>
</RechartsResponsiveContainer>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })}>

{"An\u00e1lisis del Gr\u00e1fico"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })}>

{"El gr\u00e1fico muestra c\u00f3mo un ahorro constante del 10% del ingreso mensual ($10.000) se acumula a lo largo del a\u00f1o. Al final del per\u00edodo, el ahorro total alcanza los $120.000, demostrando el impacto positivo de la constancia en el ahorro."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })}>

{"Conclusi\u00f3n"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Adoptar este h\u00e1bito no solo permite construir un fondo de emergencia, sino que tambi\u00e9n abre oportunidades de inversi\u00f3n y estabilidad financiera a largo plazo"}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })}>

{"4. Identificacion de Gastos"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Zoom css={({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })}>

<img css={({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} src={"/identificacion_gastos.jpg?refresh=1"}/>
</Zoom>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Para una correcta administraci\u00f3n financiera, es clave identificar y clasificar los diferentestipos de gastos. Esto permite entender mejor el flujo de dinero y tomar decisiones m\u00e1s inteligentes sobre el presupuesto."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })}>

{"1. Gastos Fijos y Supervivencia"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Son aquellos necesarios para mantener un nivel de vida estable y no suelen cambiar mes a mes. Deben ser prioridad en cualquier planificaci\u00f3n financiera."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })}>

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
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })}>

{"2. Gastos Variables"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Son gastos que pueden fluctuar dependiendo del mes y del estilo de vida. Se pueden ajustar seg\u00fan las necesidades y prioridades."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })}>

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
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })}>

{"3. Gastos Extraordinarios"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

{"Son aquellos imprevistos que pueden generar un impacto en la econom\u00eda personal. Para estos, es recomendable contar con un "}
<RadixThemesStrong css={({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })}>

{"fondo de emergencia"}
</RadixThemesStrong>
{" que permita cubrirlos, sin afectar el presupuesto mensual."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })}>

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
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })}>

<RadixThemesStrong css={({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })}>

{"importante:"}
</RadixThemesStrong>
{" Llevar un registro detallado de los gastos ayuda a identificar patrones y encontrar oportunidades de ahorro. Aplicaciones de finanzas personales o simples hojas de c\u00e1lculo pueden ser herramientas \u00fatiles para este prop\u00f3sito."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })}>

{"Conceptos Financieros Clave"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })}>

{"Para comprender mejor la gesti\u00f3n financiera y la toma de decisiones econ\u00f3micas, es fundamental conocer estos conceptos clave:"}
</RadixThemesText>
<RadixThemesBox css={({ ["marginBottom"] : "1em" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesTable.Root css={({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "600px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "#2d5986" })}>

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
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesTable.Root css={({ ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "400px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "#2d5986" })}>

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
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "1em" })}>

{"Conclusi\u00f3n del M\u00f3dulo 1:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "0.5em" })}>

<RadixThemesStrong>

{"Resumen:"}
</RadixThemesStrong>
{" Hemos explorado qu\u00e9 son las finanzas, los conceptos contables b\u00e1sicos, la importancia del ahorro, la identificaci\u00f3n de gastos y conceptos financieros clave."}
</li>
<li css={({ ["marginBottom"] : "0.5em" })}>

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
<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })}>

<Button_e711dacee9b5486a9ecece1c6e967a5a/>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center", ["backgroundColor"] : "transparent", ["display"] : "flex", ["flexWrap"] : "wrap", ["gap"] : "10px" })} direction={"column"} gap={"3"}>

<Img_1dc145e38a4a77bada704003b0548d02/>
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
</Fragment>
  )
}

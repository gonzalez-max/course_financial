

import { Fragment, lazy, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { ClientSide, EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { Bar as RechartsBar, CartesianGrid as RechartsCartesianGrid, Legend as RechartsLegend, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import { jsx } from "@emotion/react"

const RechartsBarChart = ClientSide(lazy(() => import('recharts').then((mod) => ({default: mod.BarChart}))))


function Img_44193794075118247882912592078120564270 () {
  
  const reflex___state____state__mi_web___components___general_components___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_fa1b729bdabd98dbf80c7f3f665e4707 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___course_navbar____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" }),onClick:on_click_fa1b729bdabd98dbf80c7f3f665e4707,src:reflex___state____state__mi_web___components___general_components___course_navbar____logo_state.logo_src_rx_state_},)

  )
}

function Dropdownmenu__item_219216628386599214634898977905934367657 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_b48446425b75df925e56732f12d72355 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_b48446425b75df925e56732f12d72355},
"Contactos"
,)
  )
}

function Button_132784516581802624872026802099445069084 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_babb70248ca98812d507e961a9be1e52 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_babb70248ca98812d507e961a9be1e52},
"Siguiente \u2192"
,)
  )
}

function Tooltip_107787178243800509720440254496591202213 () {
  
  const reflex___state____state__mi_web___components___general_components___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
RadixThemesTooltip,
{content:"No me toques."},
jsx("img",{css:({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) }),onClick:((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___course_navbar____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))),src:reflex___state____state__mi_web___components___general_components___course_navbar____logo_state.logo_src_rx_state_},)
,)
  )
}

function Dropdownmenu__item_287075228212589713390829397942124902700 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_5f3f71c76c6fe2931e3440026bbf646f = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/choice_modules", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_5f3f71c76c6fe2931e3440026bbf646f},
"Curso"
,)
  )
}

function Img_299474052678682706390452813831564012767 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd1bd52eb3f49731a43de1af718afe95 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "40px", ["height"] : "40px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) }),onClick:on_click_bd1bd52eb3f49731a43de1af718afe95,src:reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src_rx_state_},)

  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["background"] : "linear-gradient(180deg, rgba(74,34,98,1) 0%, rgba(71,85,139,1) 52%, rgba(11,103,93,1) 100%)", ["textColor"] : "black", ["width"] : "100%", ["maxWidth"] : "100%", ["display"] : "flex", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "10px", ["alignItems"] : "center", ["margin"] : "0 auto" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["height"] : "40px", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex", ["top"] : "0px", ["alignItems"] : "center" })},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx(Tooltip_107787178243800509720440254496591202213,{},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesTooltip,
{content:"Pagina Principal"},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
"Inicio"
,),),),),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",justify:"end",gap:"3"},
jsx(
RadixThemesHoverCard.Root,
{},
jsx(
RadixThemesHoverCard.Trigger,
{},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/choice_modules"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
"Curso"
,),),),),jsx(
RadixThemesHoverCard.Content,
{css:({ ["padding"] : "2", ["borderRadius"] : "8px", ["border"] : "1.5px solid transparent", ["boxShadow"] : "0px 4px 14px rgba(0, 0, 0, 0.3)", ["transition"] : "transform 0.2s ease-in-out", ["background"] : "rgba(250, 250, 250, 0.4)", ["backdropFilter"] : "blur(10px)" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"2"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#ffd284", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" }),size:"5",weight:"bold"},
"M\u00f3dulos del curso "
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_1"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 1:"
,)," Fundamentos de Finanzas Personales y el Mercado "
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_2"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 2:"
,)," Inversores y tipos de Instrumentos"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_3"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 3:"
,)," Introducci\u00f3n al Trading"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_4"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 4:"
,)," Fundamentos del An\u00e1lisis T\u00e9cnico y Patrones"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_5"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 5:"
,)," Dominando Soportes, Resistencias y Rangos"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_6"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 6:"
,)," Tendencias y como identificarlas"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_7"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 7:"
,)," Indicadores y Entradas Exitosas"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_8"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 8:"
,)," Hablemos de Criptomonedas"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_9"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 9:"
,)," Las Estafas en el Trading y las Inversiones"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
jsx(
ReactRouterLink,
{to:"/module_10"},
jsx(
RadixThemesStrong,
{},
"M\u00f3dulo 10:"
,)," Plataformas de Trading y Final del Curso"
,),),),),),jsx(
RadixThemesTooltip,
{content:"Contact\u00e1me"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/soporte_page"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
"Contacto"
,),),),),),),),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx(Img_44193794075118247882912592078120564270,{},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/"},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.2s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"medium"},
"Inicio"
,),),),),jsx(
RadixThemesDropdownMenu.Root,
{css:({ ["justify"] : "end" })},
jsx(
RadixThemesDropdownMenu.Trigger,
{},
jsx(LucideMenu,{size:30},)
,),jsx(
RadixThemesDropdownMenu.Content,
{},
jsx(Dropdownmenu__item_287075228212589713390829397942124902700,{},)
,jsx(Dropdownmenu__item_219216628386599214634898977905934367657,{},)
,),),),),),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["justifyContent"] : "center", ["maxWidth"] : "600px", ["size"] : "2" }),direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesHeading,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "35px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "42px" }), ["@media screen and (min-width: 48em)"] : ({ ["fontSize"] : "46px" }), ["@media screen and (min-width: 62em)"] : ({ ["fontSize"] : "55px" }), ["fontWeight"] : "600", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.07em", ["width"] : "100%", ["maxWidth"] : "600px", ["margin"] : "auto", ["lineHeight"] : "1.1", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["marginTop"] : "35px", ["marginBottom"] : "0.5em" })},
"M\u00f3dulo 1: Fundamentos de Finanzas Personales y el Mercado"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"1. \u00bfQu\u00e9 son las finanzas?"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesBox,
{css:({ ["alignItems"] : "center", ["display"] : "flex", ["justify"] : "center", ["width"] : "100%", ["height"] : "100%" })},
jsx("img",{css:({ ["width"] : "100%", ["maxWidth"] : "500px", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["border"] : "0.1px solid white", ["borderRadius"] : "20px", ["display"] : "block", ["margin"] : "auto" }),src:"/que_son_finanzas.gif?refresh=1"},)
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Las finanzas corresponden a un \u00e1rea de la econom\u00eda que estudia la obtenci\u00f3n y administraci\u00f3n de dinero y de capital, es decir, los recursos financieros.\nEstudia tanto la obtenci\u00f3n de recursos (financiaci\u00f3n), como la inversi\u00f3n y el ahorro de los mismos."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1" })},
"2. Conceptos Contables"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginTop"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })},
"\u2022 Cuentas patrimoniales"
,),jsx(
"li",
{css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })},
"\u2022 Activo, pasivo y patrimonio neto"
,),jsx(
"li",
{css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })},
"\u2022 Cuentas de resultados"
,),jsx(
"li",
{css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["maxWidth"] : "600px", ["fontWeight"] : "200", ["fontSize"] : "17px", ["display"] : "block" })},
"\u2022 Ingresos, gastos y resultado"
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"Cuentas patrimoniales"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em", ["marginTop"] : "1em" }),direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesTable.Root,
{css:({ ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "600px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" }),size:"2",variant:"surface"},
jsx(
RadixThemesTable.Header,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["backgroundColor"] : "#2d5986" })},
jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Activo"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Pasivo"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Patrimonio Neto"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Ingresos"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Gastos"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Resultado"
,),),),jsx(
RadixThemesTable.Body,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Bienes o derechos de una persona."
,),jsx(
RadixThemesTable.Cell,
{},
"Obligaciones o deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Diferencia entre activo y pasivo."
,),jsx(
RadixThemesTable.Cell,
{},
"Ganancias que se suman al presupuesto."
,),jsx(
RadixThemesTable.Cell,
{},
"Utilizaci\u00f3n o consumo de bienes o servicios."
,),jsx(
RadixThemesTable.Cell,
{},
"Diferencia entre ingresos y gastos."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Ej: acciones, inmuebles, bonos."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: saldos de tarjetas, hipotecas, deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: empresa con activos de 210,000\u20ac y sin deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: salario, comisiones, honorarios, inversiones."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: alquileres, seguros, impuestos, pr\u00e9stamos."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: resultado financiero del balance."
,),),),),),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},
jsx(
RadixThemesTable.Root,
{css:({ ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "350px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" }),size:"2",variant:"surface"},
jsx(
RadixThemesTable.Header,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["backgroundColor"] : "#2d5986" })},
jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Activo"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Pasivo"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Patrimonio Neto"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Ingresos"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Gastos"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Resultado"
,),),),jsx(
RadixThemesTable.Body,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Bienes o derechos de una persona."
,),jsx(
RadixThemesTable.Cell,
{},
"Obligaciones o deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Diferencia entre activo y pasivo."
,),jsx(
RadixThemesTable.Cell,
{},
"Ganancias que se suman al presupuesto."
,),jsx(
RadixThemesTable.Cell,
{},
"Utilizaci\u00f3n o consumo de bienes o servicios."
,),jsx(
RadixThemesTable.Cell,
{},
"Diferencia entre ingresos y gastos."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Ej: acciones, inmuebles, bonos."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: saldos de tarjetas, hipotecas, deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: empresa con activos de 210,000\u20ac y sin deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: salario, comisiones, honorarios, inversiones."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: alquileres, seguros, impuestos, pr\u00e9stamos."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: resultado financiero del balance."
,),),),),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"3. El Ahorro"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/el_ahorro.jpg?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Este h\u00e1bito no solo te ayudar\u00e1 a construir un fondo de emergencia, sino que tambi\u00e9n te permitir\u00e1invertir en oportunidades futuras. Con el tiempo, ese 10% acumulado puede brindarte estabilidad financiera y mayor libertad para tomar decisiones sin presiones econ\u00f3micas."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Por ejemplo"
,),", si cobr\u00e1s $100.000 por mes, destinar el 10% significar\u00eda ahorrar $10.000 de entrada. Si configur\u00e1s una transferencia autom\u00e1tica el mismo d\u00eda que te depositan el sueldo, te asegur\u00e1s de no gastarlo sin darte cuenta. Tambi\u00e9n pod\u00e9s usar una app que redondee cada compra al peso superior y mande la diferencia a una cuenta de ahorros. A la larga, estos peque\u00f1os aportes suman m\u00e1s de lo que imagin\u00e1s, y casi sin esfuerzo."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"column",gap:"3"},
jsx(
RechartsResponsiveContainer,
{height:300,minHeight:10,minWidth:10,width:"100%"},
jsx(
RechartsBarChart,
{css:({ ["maxWidth"] : "600px" }),data:[({ ["name"] : "Mes 1", ["Ahorro $"] : 10000 }), ({ ["name"] : "Mes 2", ["Ahorro $"] : 20000 }), ({ ["name"] : "Mes 3", ["Ahorro $"] : 30000 }), ({ ["name"] : "Mes 4", ["Ahorro $"] : 40000 }), ({ ["name"] : "Mes 5", ["Ahorro $"] : 50000 }), ({ ["name"] : "Mes 6", ["Ahorro $"] : 60000 }), ({ ["name"] : "Mes 7", ["Ahorro $"] : 70000 }), ({ ["name"] : "Mes 8", ["Ahorro $"] : 80000 }), ({ ["name"] : "Mes 9", ["Ahorro $"] : 90000 }), ({ ["name"] : "Mes 10", ["Ahorro $"] : 100000 }), ({ ["name"] : "Mes 11", ["Ahorro $"] : 110000 }), ({ ["name"] : "Mes 12", ["Ahorro $"] : 120000 })],height:"100%",width:"100%"},
jsx(RechartsBar,{animationBegin:150,animationDuration:1800,animationEasing:"ease",dataKey:"Ahorro $",fill:"var(--blue-11)",isAnimationActive:true,name:"Ahorro Mensual",stroke:"var(--pink-10)"},)
,jsx(RechartsXAxis,{dataKey:"name",stroke:"var(--mauve-1)"},)
,jsx(RechartsYAxis,{name:"Ahorro ($)",stroke:"var(--mauve-1)"},)
,jsx(RechartsCartesianGrid,{stroke:"var(--mauve-2)",strokeDasharray:"3 3"},)
,jsx(RechartsTooltip,{contentStyle:({ ["background"] : "var(--gray-1)", ["borderColor"] : "var(--gray-4)", ["borderRadius"] : "8px" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},)
,jsx(RechartsLegend,{layout:"horizontal",verticalAlign:"top",wrapperStyle:({ ["wrapper_style"] : ({ ["paddingBottom"] : "10px" }) })},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"An\u00e1lisis del Gr\u00e1fico"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"El gr\u00e1fico muestra c\u00f3mo un ahorro constante del 10% del ingreso mensual ($10.000) se acumula a lo largo del a\u00f1o. Al final del per\u00edodo, el ahorro total alcanza los $120.000, demostrando el impacto positivo de la constancia en el ahorro."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Conclusi\u00f3n"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Adoptar este h\u00e1bito no solo permite construir un fondo de emergencia, sino que tambi\u00e9n abre oportunidades de inversi\u00f3n y estabilidad financiera a largo plazo"
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"4. Identificacion de Gastos"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/identificacion_gastos.jpg?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Para una correcta administraci\u00f3n financiera, es clave identificar y clasificar los diferentestipos de gastos. Esto permite entender mejor el flujo de dinero y tomar decisiones m\u00e1s inteligentes sobre el presupuesto."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"1. Gastos Fijos y Supervivencia"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Son aquellos necesarios para mantener un nivel de vida estable y no suelen cambiar mes a mes. Deben ser prioridad en cualquier planificaci\u00f3n financiera."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"Ejemplos: "
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Alquiler o hipoteca"
,),jsx(
"li",
{},
"Servicios basicos (Agua, luz, gas, internet)"
,),jsx(
"li",
{},
"Alimentacion"
,),jsx(
"li",
{},
"Transporte esencial"
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"2. Gastos Variables"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Son gastos que pueden fluctuar dependiendo del mes y del estilo de vida. Se pueden ajustar seg\u00fan las necesidades y prioridades."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"Ejemplos: "
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Combustible"
,),jsx(
"li",
{},
"Mantenimiento de vehiculo"
,),jsx(
"li",
{},
"Compras no escenciales"
,),jsx(
"li",
{},
"Viajes"
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"3. Gastos Extraordinarios"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Son aquellos imprevistos que pueden generar un impacto en la econom\u00eda personal. Para estos, es recomendable contar con un "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"fondo de emergencia"
,)," que permita cubrirlos, sin afectar el presupuesto mensual."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"Ejemplos: "
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Reparaciones del Hogar o Vehiculo"
,),jsx(
"li",
{},
"Emergencias Medicas"
,),jsx(
"li",
{},
"Reemplazo de Electrodomesticos"
,),jsx(
"li",
{},
"Multas o Deudas Inesperadas"
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"importante:"
,)," Llevar un registro detallado de los gastos ayuda a identificar patrones y encontrar oportunidades de ahorro. Aplicaciones de finanzas personales o simples hojas de c\u00e1lculo pueden ser herramientas \u00fatiles para este prop\u00f3sito."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"Conceptos Financieros Clave"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"Para comprender mejor la gesti\u00f3n financiera y la toma de decisiones econ\u00f3micas, es fundamental conocer estos conceptos clave:"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesTable.Root,
{css:({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "600px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" }),size:"2",variant:"surface"},
jsx(
RadixThemesTable.Header,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["backgroundColor"] : "#2d5986" })},
jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Concepto"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Definicion"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Ejemplo"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Tipos/Factores claves"
,),),),jsx(
RadixThemesTable.Body,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"Rentabilidad"
,),),jsx(
RadixThemesTable.Cell,
{},
"Relacion entre los recursos utilizados y el beneficio (o perdida) obtenido."
,),jsx(
RadixThemesTable.Cell,
{},
"Inviertes $10.000 y obtenes $12.000 \u2192 Rentabilidad del 20%"
,),jsx(
RadixThemesTable.Cell,
{},
jsx(
RadixThemesStrong,
{},
"-Economia"
,)," (Beneficio/Activos)"
,jsx(
RadixThemesStrong,
{},
"-Financiera"
,),"(Beneficio/Capital invertido)"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"Tasa de Interes"
,),),jsx(
RadixThemesTable.Cell,
{},
"Precio del dinero; lo que se paga por un prestamo o se gana en una inversion"
,),jsx(
RadixThemesTable.Cell,
{},
"Prestamo de $100.000 con 10% anual \u2192 Pagas $10.000 en intereses. "
,),jsx(
RadixThemesTable.Cell,
{},
jsx(
RadixThemesStrong,
{},
"-Fija"
,)," (No cambia)"
,jsx(
RadixThemesStrong,
{},
"-Variable"
,),"(Depende de la economia)"
,jsx(
RadixThemesStrong,
{},
"-Nominal vs Efectiva"
,),),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"Inflacion"
,),),jsx(
RadixThemesTable.Cell,
{},
"Aumento sostenido de los precios, reduciendo el poder adquisitivo del dinero."
,),jsx(
RadixThemesTable.Cell,
{},
"Producto cuesta $1.000 hoy \u2192 Con 50% de inflaci\u00f3n, costar\u00e1 $1.500 el pr\u00f3ximo mes."
,),jsx(
RadixThemesTable.Cell,
{},
jsx(
RadixThemesStrong,
{},
"- Demanda excesiva - Costos de produccion - Politica monetaria"
,),),),),),),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},
jsx(
RadixThemesTable.Root,
{css:({ ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "350px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" }),size:"2",variant:"surface"},
jsx(
RadixThemesTable.Header,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["backgroundColor"] : "#2d5986" })},
jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Activo"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Pasivo"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Patrimonio Neto"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Ingresos"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Gastos"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Resultado"
,),),),jsx(
RadixThemesTable.Body,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Bienes o derechos de una persona."
,),jsx(
RadixThemesTable.Cell,
{},
"Obligaciones o deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Diferencia entre activo y pasivo."
,),jsx(
RadixThemesTable.Cell,
{},
"Ganancias que se suman al presupuesto."
,),jsx(
RadixThemesTable.Cell,
{},
"Utilizaci\u00f3n o consumo de bienes o servicios."
,),jsx(
RadixThemesTable.Cell,
{},
"Diferencia entre ingresos y gastos."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Ej: acciones, inmuebles, bonos."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: saldos de tarjetas, hipotecas, deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: empresa con activos de 210,000\u20ac y sin deudas."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: salario, comisiones, honorarios, inversiones."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: alquileres, seguros, impuestos, pr\u00e9stamos."
,),jsx(
RadixThemesTable.Cell,
{},
"Ej: resultado financiero del balance."
,),),),),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "1em" })},
"Conclusi\u00f3n del M\u00f3dulo 1:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Resumen:"
,)," Hemos explorado qu\u00e9 son las finanzas, los conceptos contables b\u00e1sicos, la importancia del ahorro, la identificaci\u00f3n de gastos y conceptos financieros clave."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Aplicaci\u00f3n Pr\u00e1ctica:"
,)," Te invitamos a revisar tus propios gastos y a empezar a llevar un registro detallado. Calcul\u00e1 tu rentabilidad personal y pens\u00e1 en estrategias para optimizar tu presupuesto."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{},
"Pr\u00f3ximos Pasos:"
,)," En el pr\u00f3ximo m\u00f3dulo veremos los perfiles de inversores, intrumentos de inversion y sus caracteristicas."
,),),),),),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })},
jsx(Button_132784516581802624872026802099445069084,{},)
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["minWidth"] : "100%", ["margin"] : "0", ["padding"] : "20px", ["backgroundColor"] : "#333", ["color"] : "white", ["position"] : "relative" }),direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p"},
"\u00a9 2025 Maximiliano Gonzalez. Todos los derechos reservados."
,),jsx(
RadixThemesText,
{as:"p"},
"\u00bfQuer\u00e9s ver informaci\u00f3n sobre tus empresas favoritas? "
,),jsx(
RadixThemesText,
{as:"p"},
"Conoc\u00e9 FinDash ->"
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://dashboard-financial.onrender.com"},
"https://dashboard-financial.onrender.com"
,),),),jsx(Img_299474052678682706390452813831564012767,{},)
,),),jsx(
"title",
{},
"Modulo 1"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

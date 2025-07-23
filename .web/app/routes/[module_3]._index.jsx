

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { jsx } from "@emotion/react"



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

function Img_44193794075118247882912592078120564270 () {
  
  const reflex___state____state__mi_web___components___general_components___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_fa1b729bdabd98dbf80c7f3f665e4707 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___course_navbar____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" }),onClick:on_click_fa1b729bdabd98dbf80c7f3f665e4707,src:reflex___state____state__mi_web___components___general_components___course_navbar____logo_state.logo_src_rx_state_},)

  )
}

function Button_253495660183595733168286311982217853267 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_c8c7d691c8f33dd61ca74a02b23b75e3 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_4", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_c8c7d691c8f33dd61ca74a02b23b75e3},
"Siguiente \u2192"
,)
  )
}

function Button_202551544518720143979293598247937391130 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_babb70248ca98812d507e961a9be1e52 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "black", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "white", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_babb70248ca98812d507e961a9be1e52},
"\u2190 Atr\u00e1s"
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

function Img_164144592572901142842083229647882011920 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd1bd52eb3f49731a43de1af718afe95 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) }),onClick:on_click_bd1bd52eb3f49731a43de1af718afe95,src:reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src_rx_state_},)

  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["textColor"] : "black", ["width"] : "100%", ["background"] : "linear-gradient(180deg, rgba(74,34,98,1) 0%, rgba(71,85,139,1) 52%, rgba(11,103,93,1) 100%)", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto", ["maxWidth"] : "100%" })},
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
{to:"/financial_page"},
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
"M\u00f3dulo 3: Introducci\u00f3n al Trading"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"1. \u00bfQu\u00e9 es el trading? "
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/que_es_trader.jpg?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"El "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"trading"
,)," es la compra y venta de activos financieros (acciones, divisas, criptomonedas, materias primas, etc.) con el objetivo de obtener ganancias a partir de los movimientos del mercado. A diferencia de la inversi\u00f3n tradicional, el trading se enfoca en el corto y mediano plazo."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Caracter\u00edsticas del trading:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"Se basa en la especulaci\u00f3n de precios."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"Puede realizarse en diferentes mercados financieros."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"Requiere an\u00e1lisis (t\u00e9cnico y/o fundamental) para tomar decisiones."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"Tiene distintos niveles de riesgo y estrategias seg\u00fan el plazo."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Tipos de trading m\u00e1s comunes:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Scalping:"
,)," Operaciones en segundos o minutos. Buscan peque\u00f1as ganancias r\u00e1pidas."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Day Trading:"
,)," Compra y venta en el mismo d\u00eda. No se dejan operaciones abiertas de un d\u00eda para otro."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Swing Trading:"
,)," Operaciones que duran d\u00edas o semanas, siguiendo tendencias del mercado."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Position Trading:"
,)," Similar a la inversi\u00f3n, manteniendo activos por meses o incluso a\u00f1os."
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/tipos_trading.jpg?refresh=1"},)
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"2. Tipos de an\u00e1lisis en Trading"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"En el mundo del trading existen dos enfoques principales para analizar los mercados financieros: el "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"an\u00e1lisis fundamental"
,)," y "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"el an\u00e1lisis t\u00e9cnico."
,)," Ambos tienen sus ventajas y desventajas, pero en este curso nos enfocaremos principalmente en el an\u00e1lisis t\u00e9cnico."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/fundamental_vs_tecnico.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"An\u00e1lisis Fundamental"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"El"
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" an\u00e1lisis fundamental"
,)," estudia el valor real de un activo basado en factores econ\u00f3micos, financieros y de mercado. Se usa principalmente en inversiones a largo plazo."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Aspectos clave:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
" Datos econ\u00f3micos (PIB, inflaci\u00f3n, tasas de inter\u00e9s)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
" Reportes financieros de empresas (ingresos, ganancias, deuda)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
" Noticias y eventos globales que afectan los mercados."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Ejemplo:"
,)," Un inversor en acciones analiza los reportes de ganancias de una empresa para determinar si es una buena inversi\u00f3n."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Desventaja:"
,)," Requiere un conocimiento profundo de econom\u00eda y los efectos de las noticias pueden tardar en reflejarse en el precio."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"An\u00e1lisis T\u00e9cnico (Enfoque de este curso)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"El "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"an\u00e1lisis t\u00e9cnico"
,)," Se basa en el estudio de los gr\u00e1ficos de precios y patrones de comportamiento del mercado. Su premisa es que \u201cel precio lo descuenta todo\u201d y que la historia tiende a repetirse."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Aspectos clave:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginTop"] : "0.1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Acci\u00f3n del precio:"
,)," C\u00f3mo se mueve el precio en el tiempo."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Soportes y resistencias:"
,)," Zonas donde el precio tiende a frenarse."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Tendencias:"
,)," Identificaci\u00f3n de mercados alcistas, bajistas o laterales."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Patrones gr\u00e1ficos y de velas japonesas:"
,)," Figuras que indican posibles movimientos futuros."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Indicadores t\u00e9cnicos:"
,)," Herramientas como medias m\u00f3viles, RSI y MACD que ayudan en la toma de decisiones."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Ejemplo:"
,)," Un trader observa un patr\u00f3n de velas Doji en una resistencia fuerte y decide vender porque indica posible reversi\u00f3n de tendencia."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Ventaja:"
,)," Se basa en datos visuales y permite tomar decisiones r\u00e1pidas para operar en el corto y mediano plazo."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"3. Introducci\u00f3n a las Velas Japonesas"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Las velas japonesas"
,)," son una de las herramientas m\u00e1s utilizadas en el an\u00e1lisis t\u00e9cnico. Representan la evoluci\u00f3n del precio en un per\u00edodo determinado y ayudan a interpretar el sentimiento del mercado."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/vela_verde_contra_roja.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Estructura de una vela japonesa"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"Cada vela est\u00e1 compuesta por:"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"1. Cuerpo:"
,)," Diferencia entre el precio de apertura y cierre."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"2. Mecha o sombra:"
,)," Representa los precios m\u00e1ximo y m\u00ednimo alcanzados."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"3. Color:"
,),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"\ud83d\udfe2 Verde:"
,)," Indica que el precio cerr\u00f3 por encima del precio de apertura (alcista)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"\ud83d\udd34 Roja:"
,)," Indica que el precio cerr\u00f3 por debajo del precio de apertura (bajista)."
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/velas-japonesas.png?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Tipos de velas m\u00e1s comunes"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Vela alcista:"
,)," Cuerpo verde, con o sin sombras. Indica fuerza compradora."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Vela bajista:"
,)," Cuerpo rojo, con o sin sombras. Indica presi\u00f3n vendedora."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Doji:"
,)," Representa indecisi\u00f3n en el mercado porque el precio de apertura y cierre son muy similares, con sombras en ambos lados o sin sombras. Cuerpo casi inexistente, reflejando indecisi\u00f3n en el mercado."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Gravestone Doji:"
,)," Tiene una sombra superior larga y casi sin cuerpo ni sombra inferior. Esto significa que los compradores intentaron subir el precio, pero los vendedores tomaron el control y lo devolvieron al nivel de apertura."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Martillo y martillo (Hammer) invertido:"
,)," Posible cambio de tendencia si aparecen en zonas clave."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" Estrella fugaz (shooting star) y hombre colgado:"
,)," Herramientas como medias m\u00f3viles, RSI y MACD que ayudan en la toma de decisiones."
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/fuerza_velas.png?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"\u26a0\ufe0f\u00a1\u00a1importante!!\u26a0\ufe0f"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"Las Velas Japonesas ayudan a entender la accion del precio en cualquier mercado, si bien, son escenciales para identificar patrones y tendencias."
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
" deben combinarse con otros indicadores para confirmar se\u00f1ales."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"En las pr\u00f3ximas secciones exploraremos c\u00f3mo usarlas de forma pr\u00e1ctica y segura."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"4. Gesti\u00f3n del Riesgo "
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"El manejo del riesgo"
,)," en el mercado es esencial y debe considerarse un negocio, no una apuesta. Muchos operadores caen en la trampa de intentar "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"PREDECIR"
,)," el mercado, lo que puede llevar a p\u00e9rdidas significativas. "
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/gestion_riesgo.jpg?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Es fundamental centrarse en el "
,jsx(
RadixThemesStrong,
{},
"an\u00e1lisis t\u00e9cnico"
,)," y "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"desarrollar una mentalidad empresarial"
,),". El tama\u00f1o de las \u00f3rdenes debe determinarse cuidadosamente para preservar el capital y evitar que el dinero pase de manos inexpertas a operadores m\u00e1s experimentados. Aprender a gestionar el capital y controlar el riesgo es clave para el \u00e9xito en el trading."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Medidas Simples para el Manejo del Riesgo"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"Para gestionar adecuadamente el riesgo en el mercado, sigue estas medidas:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "decimal", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
"1. Define cu\u00e1nto capital est\u00e1s dispuesto a arriesgar en cada operaci\u00f3n."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
"2. Establece un l\u00edmite de p\u00e9rdida personal, como un m\u00e1ximo del 10% de tu capital total."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
"3. Si acumulas m\u00e1s de 10 p\u00e9rdidas consecutivas, DETENTE y reeval\u00faa tu estrategia."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
"4. Si las p\u00e9rdidas potenciales de tus operaciones abiertas representan un 10% o m\u00e1s de tu capital, EVITA abrir nuevas operaciones."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Errores Comunes en el Manejo del Riesgo"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Uno de los errores m\u00e1s frecuentes"
,)," es aumentar el tama\u00f1o de una nueva orden despu\u00e9s de una p\u00e9rdida previa, lo que puede llevar a p\u00e9rdidas masivas. Para evitarlo, sigue una estrategia que limite el riesgo de tu capital en cada operaci\u00f3n. Mant\u00e9n la objetividad y evita que las emociones influyan en tus decisiones. Siempre usa un "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"stop-loss"
,),"y arriesga solo una peque\u00f1a parte de tu capital en cada operaci\u00f3n."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Herramientas de gesti\u00f3n de riesgo"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Stop-Loss:"
,)," Es una orden que cierra tu operaci\u00f3n autom\u00e1ticamente para limitar p\u00e9rdidas. "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Ejemplo:"
,)," Compr\u00e1s a $100, stop-loss en $95, pierdes $5 si se ejecuta. Es \u00fatil para principiantes, pero cuidado: en mercados manipulados, noticias falsas pueden barrer los stop-loss y sacarte antes de que el precio suba. Algunos traders lo evitan."
,jsx(
RadixThemesStrong,
{},
" Mas adelante durante el curso lo veremos mas a detalle."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Relaci\u00f3n Riesgo/Beneficio:"
,)," Imagin\u00e1 que compras algo porque cre\u00e9s que subir\u00e1 de precio. Decid\u00eds arriesgar $50 si las cosas van mal, pero solo entr\u00e1s si pod\u00e9s ganar al menos $100. Eso es una relaci\u00f3n riesgo/beneficio de 1 a 2. La idea es buscar operaciones donde valga la pena el riesgo."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Tama\u00f1o de posici\u00f3n:"
,)," Ten\u00e9s $50.000 y quer\u00e9s arriesgar $500 por operaci\u00f3n. Si una acci\u00f3n cuesta $100 y pens\u00e1s perder $5 por acci\u00f3n si baja, compr\u00e1s 100 acciones ($10.000). As\u00ed, tu riesgo queda controlado aunque salgas manualmente."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"5. Psicolog\u00eda Del Trading"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"El \u00e9xito en el trading no solo depende del an\u00e1lisis t\u00e9cnico, sino tambi\u00e9n de "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"la mentalidad del inversor."
,)," La flexibilidad mental es crucial, y asumir la responsabilidad de cada decisi\u00f3n es el primer paso hacia una mentalidad ganadora. Evita culpar a factores externos y c\u00e9ntrate en mejorar tus propias estrategias."
,),jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/psicologia_trading.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"El Proceso Neurol\u00f3gico"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"Es importante desarrollar creencias realistas sobre el mercado:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"El mercado "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"es incierto"
,)," y no puede predecirse con certeza."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"Una estrategia basada en "
,jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"an\u00e1lisis t\u00e9cnico y gesti\u00f3n de capital"
,),"aumenta las probabilidades de \u00e9xito."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Mentalidad del Inversor"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Adaptar tu mentalidad es clave para operar con \u00e9xito. La disciplina y la paciencia son esenciales para que, a largo plazo, las operaciones ganadoras superen a las perdedoras. Cambiar creencias err\u00f3neas y desarrollar confianza en tu sistema de trading marcar\u00e1 la diferencia entre el \u00e9xito y el fracaso."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Antes de comprar una accion o meterte en una inversion preguntate: "
,),jsx(
RadixThemesBox,
{css:({ ["textAlign"] : "center", ["alignItems"] : "center" })},
jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"\u00bf Para que invierto ?"
,),),jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"\u00bf Cual es mi objetivo ?"
,),),jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"\u00bf Cuanto estoy dispuesto a perder?"
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "1em" })},
"Tips a tener en cuenta"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "4em" }),direction:"row",gap:"3"},
jsx(
Fragment,
{},
jsx(
RadixThemesTable.Root,
{css:({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" }),size:"2",variant:"surface"},
jsx(
RadixThemesTable.Header,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["backgroundColor"] : "#2d5986" })},
jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Tip"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Descripci\u00f3n"
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
"\u26ab Estudiar:"
,),),jsx(
RadixThemesTable.Cell,
{},
"\u2705 Es muy importante conocer a profundidad los distintos conceptos y an\u00e1lisis del mercado."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"\u26ab Tener un plan:"
,),),jsx(
RadixThemesTable.Cell,
{},
"\u2705 Hay que tomar seriamente las inversiones, armando un plan que contemple distintos escenarios."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"\u26ab Gestionar el riesgo:"
,),),jsx(
RadixThemesTable.Cell,
{},
"\u2705 Es fundamental conocer los potenciales riesgos para evaluar correctamente el tama\u00f1o de la posici\u00f3n."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"\u26ab Invertir con ahorros:"
,),),jsx(
RadixThemesTable.Cell,
{},
"\u274c Tomar deuda para invertir suele ser una mala idea y aumenta el riesgo financiero."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"\u26ab No operar para comprar algo:"
,),),jsx(
RadixThemesTable.Cell,
{},
"\u274c No es recomendable operar para conseguir dinero r\u00e1pido para un gasto espec\u00edfico suele llevar a tomar malas decisiones."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"\u26ab No seguir an\u00e1lisis de otros:"
,),),jsx(
RadixThemesTable.Cell,
{},
"\u274c Cada persona tiene un perfil distinto, por lo que debemos invertir seg\u00fan nuestro propio conocimiento y experiencia."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"\u26ab Calcular riesgo/beneficio:"
,),),jsx(
RadixThemesTable.Cell,
{},
"\u2705 Siempre evaluar el potencial riesgo y beneficio antes de ejecutar una operaci\u00f3n."
,),),),),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "1em" })},
"Conclusi\u00f3n del M\u00f3dulo 3: "
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
" Resumen:"
,)," En este m\u00f3dulo aprendimos qu\u00e9 es el trading, sus principales caracter\u00edsticas y enfoques. Diferenciamos entre an\u00e1lisis fundamental y an\u00e1lisis t\u00e9cnico, profundizando en este \u00faltimo. Tambi\u00e9n exploramos las velas japonesas y c\u00f3mo nos ayudan a interpretar el mercado."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
" Aplicaci\u00f3n Pr\u00e1ctica:"
,)," Reflexion\u00e1 sobre qu\u00e9 tipo de trading se adapta mejor a tu estilo y objetivos. Analiz\u00e1 gr\u00e1ficos con velas japonesas y empez\u00e1 a identificar patrones b\u00e1sicos para mejorar tu lectura del mercado."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
" Pr\u00f3ximos Pasos:"
,)," En el siguiente m\u00f3dulo, daremos los primeros pasos en el an\u00e1lisis t\u00e9cnico, explorando el Ciclo del Precio, identificando tendencias alcistas y bajistas, trazando l\u00edneas de soporte y resistencia, y reconociendo patrones gr\u00e1ficos que revelan el comportamiento del mercado."
,),),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"center",gap:"3"},)
,),),),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })},
jsx(Button_253495660183595733168286311982217853267,{},)
,),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["left"] : "20px" })},
jsx(Button_202551544518720143979293598247937391130,{},)
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center", ["backgroundColor"] : "transparent", ["display"] : "flex", ["flexWrap"] : "wrap", ["gap"] : "10px", ["maxWidth"] : "100%" }),direction:"column",gap:"3"},
jsx(Img_164144592572901142842083229647882011920,{},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white" })},
"since 1999 copyright registered."
,),),),jsx(
"title",
{},
"Modulo 3"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

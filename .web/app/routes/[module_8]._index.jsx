

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { jsx } from "@emotion/react"



function Button_74443495540174869781310087633826640187 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_db3aef611d081b17bf8c41489ddd3e74 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_9", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_db3aef611d081b17bf8c41489ddd3e74},
"Siguiente \u2192"
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

function Img_299474052678682706390452813831564012767 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd1bd52eb3f49731a43de1af718afe95 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "40px", ["height"] : "40px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) }),onClick:on_click_bd1bd52eb3f49731a43de1af718afe95,src:reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src_rx_state_},)

  )
}

function Button_42013120070755842199661413863407461771 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_e68f8e4f14916518ccacb453de5dba9a = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_7", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "black", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_e68f8e4f14916518ccacb453de5dba9a},
"\u2190 Atr\u00e1s"
,)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["background"] : "linear-gradient(180deg, #0d1117 0%, #1c1f26 100%)", ["width"] : "100%", ["maxWidth"] : "100%", ["display"] : "flex", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "10px", ["alignItems"] : "center", ["margin"] : "0 auto" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["height"] : "40px", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex", ["top"] : "0px", ["alignItems"] : "center", ["borderBottom"] : "1px solid rgba(255, 255, 255, 0.2)" })},
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
{css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
"Curso"
,),),),),jsx(
RadixThemesHoverCard.Content,
{css:({ ["padding"] : "2", ["borderRadius"] : "8px", ["border"] : "1.5px solid transparent", ["boxShadow"] : "0px 4px 14px rgba(0, 0, 0, 0.3)", ["transition"] : "transform 0.3s ease-in-out", ["background"] : "rgba(250, 250, 250, 0.4)", ["backdropFilter"] : "blur(10px)" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"2"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#006dfc", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica" }),size:"5",weight:"bold"},
"M\u00f3dulos del curso "
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{css:({ ["color"] : "black", ["fontFamily"] : "montserrat", ["--default-font-family"] : "montserrat", ["transition"] : "color 0.3s ease", ["textAlign"] : "left", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white", ["transform"] : "scale(1.05)" }) }),size:"3",weight:"medium"},
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
{css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "35px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "42px" }), ["@media screen and (min-width: 48em)"] : ({ ["fontSize"] : "46px" }), ["@media screen and (min-width: 62em)"] : ({ ["fontSize"] : "55px" }), ["fontWeight"] : "700", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.05em", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.2", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["maxWidth"] : "900px", ["marginTop"] : "35px", ["marginBottom"] : "0.5em" })},
"M\u00f3dulo 8: Hablemos de Criptomonedas"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"1. \u00bfQu\u00e9 son las criptomonedas?"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesBox,
{css:({ ["alignItems"] : "center", ["display"] : "flex", ["justify"] : "center", ["width"] : "100%", ["height"] : "100%" })},
jsx("img",{css:({ ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["border"] : "0.1px solid white", ["borderRadius"] : "20px", ["display"] : "block", ["margin"] : "auto" }),src:"/batman_pensando.gif?refresh=1"},)
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Las criptomonedas son activos digitales dise\u00f1ados para funcionar como un medio de intercambio, utilizando criptograf\u00eda para garantizar transacciones seguras, controlar la creaci\u00f3n de nuevas unidades y verificar la transferencia de activos."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"A diferencia del dinero tradicional (como el d\u00f3lar o el euro), las criptomonedas no dependen de bancos centrales ni gobiernos, sino que operan en una red descentralizada basada en tecnolog\u00eda blockchain. Esto significa que todas las transacciones quedan registradas en un libro contable p\u00fablico, transparente y dif\u00edcil de alterar."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"2. Principales criptomonedas"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Las principales criptomonedas del mercado se destacan por su adopci\u00f3n, tecnolog\u00eda y capitalizaci\u00f3n burs\u00e1til. A continuaci\u00f3n, te presento algunas de las m\u00e1s relevantes:"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"1. Bitcoin (BTC) \u2013 La pionera"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/BTC.png?refresh=1"},)
,),),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Creada en 2009 por Satoshi Nakamoto."
,),jsx(
"li",
{},
"Considerada el oro digital por su escasez (solo existir\u00e1n 21 millones de BTC)."
,),jsx(
"li",
{},
"Es la m\u00e1s utilizada y aceptada como reserva de valor."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"2. Ethereum (ETH) \u2013 La base de los contratos inteligentes"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/ETH.jpg?refresh=1"},)
,),),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Introducida en 2015 por Vitalik Buterin."
,),jsx(
"li",
{},
"Permite la creaci\u00f3n de contratos inteligentes y aplicaciones descentralizadas (dApps)."
,),jsx(
"li",
{},
"Base de muchas otras criptomonedas y proyectos en el mundo cripto."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"3. Binance Coin (BNB) \u2013 La moneda del ecosistema Binance"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/BNB.png?refresh=1"},)
,),),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Naci\u00f3 en 2017 como el token nativo del exchange Binance."
,),jsx(
"li",
{},
"Se usa para pagar comisiones en la plataforma y participar en proyectos dentro del ecosistema."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"4. Cardano (ADA) \u2013 Un enfoque cient\u00edfico"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/ADA.png?refresh=1"},)
,),),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Desarrollada por Charles Hoskinson, cofundador de Ethereum."
,),jsx(
"li",
{},
"Destaca por su metodolog\u00eda basada en investigaci\u00f3n cient\u00edfica y su algoritmo de consenso Proof-of-Stake (PoS)."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"5. Solana (SOL) \u2013 R\u00e1pida y escalable"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/SOL.png?refresh=1"},)
,),),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Conocida por su velocidad y bajos costos de transacci\u00f3n."
,),jsx(
"li",
{},
"Soporta contratos inteligentes y NFTs, compitiendo con Ethereum en ese \u00e1mbito."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"\u26a0\ufe0f\u00a1\u00a1importante!!\u26a0\ufe0f"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Antes de invertir en una criptomoneda, es importante analizar su tecnolog\u00eda, prop\u00f3sito y adopci\u00f3n en el mercado"
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px" })},
"3. Blockchain: \u00bfQu\u00e9 es y c\u00f3mo funciona?"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/blockchain.png?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Un blockchain (cadena de bloques) es un registro digital descentralizado y seguro donde se almacenan transacciones de manera inmutable. En lugar de depender de una entidad central (como un banco), la informaci\u00f3n se distribuye entre m\u00faltiples computadoras en una red."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Este sistema es clave en el mundo de las criptomonedas, ya que permite registrar y verificar transacciones sin necesidad de intermediarios."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"\u00bfC\u00f3mo funciona un blockchain?"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "decimal", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Transacci\u00f3n:"
,)," Un usuario env\u00eda informaci\u00f3n (por ejemplo, una transferencia de criptomonedas)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Verificaci\u00f3n:"
,)," La red de nodos (computadoras conectadas al blockchain) valida la transacci\u00f3n mediante un consenso (como Proof of Work o Proof of Stake)"
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Creaci\u00f3n del bloque:"
,)," Una vez verificada, la transacci\u00f3n se agrupa con otras y forma un nuevo bloque de datos."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Encadenamiento:"
,)," El nuevo bloque se enlaza al bloque anterior, creando una cadena de bloques con un historial inmutable."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Registro inalterable:"
,)," Una vez a\u00f1adido a la cadena, el bloque no puede modificarse, lo que hace al blockchain seguro y transparente."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"En conclusi\u00f3n..."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Blockchain es una tecnolog\u00eda revolucionaria que garantiza seguridad, transparencia y descentralizaci\u00f3n, con aplicaciones en m\u00faltiples industrias m\u00e1s all\u00e1 de las criptomonedas."
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"4. \u00bfC\u00f3mo se consiguen criptomonedas?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Existen varias formas de obtener criptomonedas, desde la compra directa hasta la miner\u00eda o participaci\u00f3n en plataformas que las ofrecen como recompensa."
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"Compra en Exchanges"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"La forma m\u00e1s com\u00fan es comprar criptomonedas en exchanges (plataformas de intercambio como Binance, Coinbase, Kraken o Bitso). Para hacerlo:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
"Creas una cuenta en un exchange."
,),jsx(
"li",
{},
"Depositas dinero en tu moneda local. (llamado dinero FIAT)"
,),jsx(
"li",
{},
"Compras la criptomoneda que deseas."
,),jsx(
"li",
{},
"La almacenas en una wallet (billetera digital)."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"Miner\u00eda de Criptomonedas"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Algunas criptomonedas, como Bitcoin, se pueden obtener minando. Esto implica usar computadoras potentes para resolver problemas matem\u00e1ticos y validar transacciones en la red."
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "0.5em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
" Proof of Work (PoW):"
,)," Se requiere hardware especializado (como ASICs)."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{},
"Proof of Stake (PoS):"
,)," Se obtiene criptomonedasapostando o bloqueando fondos en la red."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"\u26a0\ufe0f La miner\u00eda puede ser costosa por el consumo de energ\u00eda y la necesidad de equipos avanzados."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"Staking y Yield Farming"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Algunas criptomonedas permiten ganar recompensas bloqueando fondos en una red:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
jsx(
RadixThemesStrong,
{},
"Staking:"
,)," Bloqueas criptomonedas para ayudar a validar transacciones y recibes recompensas."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{},
"Yield Farming:"
,)," Depositas criptos en plataformas DeFi para generar intereses o recompensas."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"Recibir pagos en Criptomonedas"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Si trabajas de manera freelance o tienes un negocio, puedes aceptar pagos en criptomonedas a trav\u00e9s de plataformas como BitPay o Lightning Network."
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"5. Carteras y exchanges: diferencias y tipos"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"Cuando hablamos de criptomonedas, es fundamental conocer la diferencia entre carteras (wallets) y exchanges, ya que cumplen funciones distintas en la gesti\u00f3n y almacenamiento de tus activos digitales."
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"\u00bfQu\u00e9 es una cartera (wallet)?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Una cartera de criptomonedas es una herramienta que permite almacenar, enviar y recibir criptomonedas. Funciona como un 'banco digital personal', donde solo vos tenes el control total de tus fondos."
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/hot_cold_wallets.png?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{},
jsx(
RadixThemesStrong,
{},
"Tipos de carteras o wallets"
,),),jsx(
RadixThemesStrong,
{},
"Carteras fr\u00edas (Cold Wallets) \u2744\ufe0f"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
" Almacenamiento fuera de l\u00ednea (sin conexi\u00f3n a Internet)."
,),jsx(
"li",
{},
" Mayor seguridad, ideal para guardar grandes cantidades a largo plazo."
,),jsx(
"li",
{},
" Ejemplo: Ledger Nano, Trezor."
,),),jsx(
RadixThemesStrong,
{},
"Carteras calientes (Hot Wallets) \ud83d\udd25"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
" Conectadas a Internet, m\u00e1s accesibles pero menos seguras."
,),jsx(
"li",
{},
" Ideales para operaciones diarias y peque\u00f1as cantidades."
,),jsx(
"li",
{},
" Ejemplo: Trust Wallet, MetaMask."
,),),jsx(
RadixThemesStrong,
{},
"Carteras de papel (Paper Wallets) \ud83d\udcdc"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
" Claves privadas impresas en papel."
,),jsx(
"li",
{},
" Seguras si se guardan bien, pero f\u00e1ciles de perder."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"\u00bfQu\u00e9 es un exchange?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Un exchange es una plataforma donde puedes comprar, vender e intercambiar criptomonedas. Funciona como una casa de cambio digital y ofrece herramientas para trading."
,),jsx(
RadixThemesHeading,
{},
jsx(
RadixThemesStrong,
{},
"Tipos de exchanges"
,),),jsx(
RadixThemesStrong,
{},
"Exchanges Centralizados (CEX)"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
" Son manejados por empresas que facilitan la compra/venta."
,),jsx(
"li",
{},
" Ejemplo: Binance, Coinbase, Kraken."
,),jsx(
"li",
{},
" Ventaja: Facilidad de uso y alta liquidez."
,),jsx(
"li",
{},
" Desventaja: No tienes control total sobre tus fondos (pueden ser hackeados)."
,),),jsx(
RadixThemesStrong,
{},
"Exchanges Descentralizados (DEX)"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
" Operan sin intermediarios, conectando directamente a compradores y vendedores."
,),jsx(
"li",
{},
" Ejemplo: Uniswap, PancakeSwap."
,),jsx(
"li",
{},
" Ventaja: M\u00e1s seguridad y control de tus fondos."
,),jsx(
"li",
{},
" Desventaja: Pueden ser m\u00e1s complejos de usar y con menor liquidez.(pueden ser hackeados)."
,),),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Tabla comparativa"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
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
"Caracter\u00edstica"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Cartera (Wallet)"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Exchange"
,),),),jsx(
RadixThemesTable.Body,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Control de fondos"
,),jsx(
RadixThemesTable.Cell,
{},
"\u2705100% personal"
,),jsx(
RadixThemesTable.Cell,
{},
"\u274cLo maneja la plataforma"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Seguridad"
,),jsx(
RadixThemesTable.Cell,
{},
"\u2705 Mayor (depende del tipo)"
,),jsx(
RadixThemesTable.Cell,
{},
"\u26a0\ufe0fVulnerable a hackeos"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Funci\u00f3n principal"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udce6Almacenar criptos"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udd04Comprar y vender criptos"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Accesibilidad"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udd25 Hot wallets: R\u00e1pida \ud83d\udd12 Cold wallets: Segura"
,),jsx(
RadixThemesTable.Cell,
{},
"\u2705 F\u00e1cil acceso en todo momento"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Uso recomendado"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udcb0 Guardar criptos a largo plazo"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udcca Trading y compra/venta de criptos"
,),),),),),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},
jsx(
RadixThemesTable.Root,
{css:({ ["padding"] : "5px", ["fontSize"] : "10px", ["maxWidth"] : "400px", ["backgroundColor"] : "#002961", ["overflowX"] : "auto", ["boxSizing"] : "border-box", ["color"] : "#3d5c5c", ["border"] : "1px solid #ffffff" }),size:"2",variant:"surface"},
jsx(
RadixThemesTable.Header,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["backgroundColor"] : "#2d5986" })},
jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Caracter\u00edstica"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Cartera (Wallet)"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Exchange"
,),),),jsx(
RadixThemesTable.Body,
{},
jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Control de fondos"
,),jsx(
RadixThemesTable.Cell,
{},
"\u2705100% personal"
,),jsx(
RadixThemesTable.Cell,
{},
"\u274cLo maneja la plataforma"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Seguridad"
,),jsx(
RadixThemesTable.Cell,
{},
"\u2705 Mayor (depende del tipo)"
,),jsx(
RadixThemesTable.Cell,
{},
"\u26a0\ufe0fVulnerable a hackeos"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Funci\u00f3n principal"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udce6Almacenar criptos"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udd04Comprar y vender criptos"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Accesibilidad"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udd25 Hot wallets: R\u00e1pida \ud83d\udd12 Cold wallets: Segura"
,),jsx(
RadixThemesTable.Cell,
{},
"\u2705 F\u00e1cil acceso en todo momento"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
"Uso recomendado"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udcb0 Guardar criptos a largo plazo"
,),jsx(
RadixThemesTable.Cell,
{},
"\ud83d\udcca Trading y compra/venta de criptos"
,),),),),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"Conclusi\u00f3n:"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Si quer\u00e9s operar y hacer trading, us\u00e1 un exchange. Si quer\u00e9s almacenar criptos de manera segura, us\u00e1 una wallet (preferiblemente una cartera fr\u00eda). Lo ideal es no dejar tus criptos en un exchange por seguridad y transferirlas a una cartera personal"
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"6. Riesgos y beneficios de las criptomonedas"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/cripto_riesgo_beneficio.png?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Las criptomonedas han revolucionado el mundo financiero, ofreciendo nuevas oportunidades de inversi\u00f3n y transacciones digitales. Sin embargo, tambi\u00e9n conllevan ciertos riesgos. A continuaci\u00f3n, analizamos los principales beneficios y riesgos de este ecosistema."
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"Beneficios de las criptomonedas"
,),jsx(
RadixThemesStrong,
{},
"Descentralizaci\u00f3n y autonom\u00eda"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Las criptomonedas operan sin intermediarios como bancos o gobiernos, lo que permite a los usuarios tener control total sobre sus fondos y realizar transacciones sin restricciones geogr\u00e1ficas."
,),jsx(
RadixThemesStrong,
{},
"Seguridad y transparencia"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Gracias a la tecnolog\u00eda blockchain, todas las transacciones quedan registradas de manera inmutable y transparente. Adem\u00e1s, los sistemas criptogr\u00e1ficos brindan un alto nivel de seguridad."
,),jsx(
RadixThemesStrong,
{},
"Bajas comisiones y rapidez en transacciones"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Las transferencias de criptomonedas suelen tener costos menores en comparaci\u00f3n con bancos tradicionales y pueden realizarse de manera r\u00e1pida, incluso a nivel internacional."
,),jsx(
RadixThemesStrong,
{},
"Oportunidades de inversi\u00f3n y rentabilidad"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Las criptomonedas han demostrado ser una inversi\u00f3n rentable para muchos, con casos como Bitcoin y Ethereum alcanzando valores significativamente altos en el tiempo. Existen oportunidades en trading, staking y DeFi."
,),jsx(
RadixThemesStrong,
{},
"Privacidad y anonimato"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Aunque las transacciones son p\u00fablicas en la blockchain, los usuarios pueden operar sin revelar su identidad personal, lo que protege su privacidad."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px" })},
"Beneficios de las criptomonedas"
,),jsx(
RadixThemesStrong,
{},
"Alta volatilidad"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Las criptomonedas pueden experimentar fluctuaciones de precio extremas en cortos per\u00edodos de tiempo, lo que las convierte en inversiones de alto riesgo."
,),jsx(
RadixThemesStrong,
{},
"Riesgo de p\u00e9rdida total de fondos"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Si un usuario pierde sus claves privadas, no podr\u00e1 recuperar sus criptomonedas. A diferencia de los bancos, no hay forma de solicitar un reembolso o recuperar los fondos."
,),jsx(
RadixThemesStrong,
{},
"Hackeos y estafas"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Los exchanges, wallets y plataformas DeFi han sido objetivos de hackeos. Adem\u00e1s, hay muchas estafas como esquemas Ponzi y fraudes en proyectos cripto."
,),jsx(
RadixThemesStrong,
{},
"Falta de regulaci\u00f3n y respaldo legal"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Las criptomonedas a\u00fan carecen de una regulaci\u00f3n clara en muchos pa\u00edses. Esto implica riesgos legales y la posibilidad de que los gobiernos impongan restricciones."
,),jsx(
RadixThemesStrong,
{},
"Uso en actividades il\u00edcitas"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Debido a su anonimato, las criptomonedas han sido utilizadas en actividades ilegales, lo que ha generado regulaciones m\u00e1s estrictas y restricciones en ciertos lugares"
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"En resumen..."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Las criptomonedas ofrecen m\u00faltiples beneficios como autonom\u00eda, seguridad y rentabilidad, pero tambi\u00e9n presentan riesgos importantes como volatilidad y falta de regulaci\u00f3n. Si decides invertir o utilizarlas, es clave informarse, asegurar los fondos adecuadamente y diversificar los riesgos."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Conclusi\u00f3n del M\u00f3dulo 8:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Resumen:"
,)," Aprendimos qu\u00e9 son las criptomonedas, c\u00f3mo funciona la tecnolog\u00eda blockchain, y conocimos las principales criptos, wallets, exchanges, y los riesgos y beneficios de operar con estos activos."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Aplicaci\u00f3n Pr\u00e1ctica:"
,)," Explor\u00e1 exchanges de prueba, prob\u00e1 distintas wallets y analiz\u00e1 el mercado antes de invertir. Mantenete informado sobre regulaci\u00f3n y gestion\u00e1 siempre los riesgos."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{},
"Pr\u00f3ximos Pasos:"
,),"En el pr\u00f3ximo m\u00f3dulo vas a aprender a detectar estafas y a comprender c\u00f3mo operan los estafadores para quitarte tu dinero. Tambi\u00e9n vas a ver ejemplos reales de algunas estafas que circulan por internet."
,),),),),),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["left"] : "20px" })},
jsx(Button_42013120070755842199661413863407461771,{},)
,),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })},
jsx(Button_74443495540174869781310087633826640187,{},)
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["minWidth"] : "100%", ["margin"] : "0", ["padding"] : "20px", ["backgroundColor"] : "#2d3038", ["color"] : "white", ["position"] : "relative", ["borderTop"] : "1px solid rgba(255, 255, 255, 0.4)" }),direction:"column",gap:"3"},
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
"Modulo 8"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}



import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
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

function Img_164144592572901142842083229647882011920 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd1bd52eb3f49731a43de1af718afe95 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) }),onClick:on_click_bd1bd52eb3f49731a43de1af718afe95,src:reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src_rx_state_},)

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

function Button_326566584149923165971631546972613773366 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_c3d78afcb2924bc931e125e55670ec97 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_8", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "black", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "white", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_c3d78afcb2924bc931e125e55670ec97},
"\u2190 Atr\u00e1s"
,)
  )
}

function Button_34468043318925202081973624580075777918 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_e9e65047ace9869199663e14ec6fd7f2 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_10", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_e9e65047ace9869199663e14ec6fd7f2},
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

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["background"] : "linear-gradient(180deg, rgba(74,34,98,1) 0%, rgba(71,85,139,1) 52%, rgba(11,103,93,1) 100%)", ["textColor"] : "black", ["width"] : "100%", ["maxWidth"] : "100%", ["display"] : "flex", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "10px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto" })},
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
"M\u00f3dulo 9: Las Estafas en el Trading y las Inversiones"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "1em" })},
"1. \u00bfEl mercado es una estafa?"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesBox,
{css:({ ["alignItems"] : "center", ["display"] : "flex", ["justify"] : "center", ["width"] : "100%", ["height"] : "100%" })},
jsx("img",{css:({ ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["objectFit"] : "cover", ["border"] : "0.1px solid white", ["borderRadius"] : "20px", ["display"] : "block", ["margin"] : "auto" }),src:"/mercado_estafa.gif?refresh=1"},)
,),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"No, el mercado financiero no es una estafa, pero s\u00ed hay muchas personas y empresas que intentan aprovecharse de la falta de conocimiento de los nuevos inversores para estafarlos."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
" El mercado en s\u00ed es leg\u00edtimo porque sigue reglas econ\u00f3micas basadas en oferta y demanda. Las bolsas de valores, las divisas y las criptomonedas tienen movimientos naturales que dependen de m\u00faltiples factores, como la econom\u00eda, la pol\u00edtica y el sentimiento del inversor."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfPor qu\u00e9 algunas personas creen que es una estafa?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Porque pierden dinero sin entender los riesgos. Muchos entran al trading sin preparaci\u00f3n, toman malas decisiones y culpan al mercado."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Porque hay manipulaci\u00f3n en algunos sectores (como en ciertos criptoactivos o acciones de baja capitalizaci\u00f3n), donde grandes jugadores pueden influir en los precios."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Porque hay muchas estafas en torno al trading, como cursos milagrosos, robots de trading fraudulentos y brokers sin regulaci\u00f3n."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"En pocas palabras..."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"El mercado es una herramienta para invertir y generar riqueza, pero sin educaci\u00f3n ni estrategia, se puede convertir en una trampa para los principiantes. Lo importante es aprender, investigar y operar con precauci\u00f3n."
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"2. Brokers: \u00bfSon todos una estafa?"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"No, no todos los brokers son una estafa, pero hay que tener cuidado al elegir uno."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfQu\u00e9 es un broker?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Un broker es una plataforma o empresa que act\u00faa como intermediario para que puedas comprar y vender activos financieros (acciones, divisas, criptomonedas, etc.)."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfPor qu\u00e9 algunos piensan que son una estafa?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u274c Brokers sin regulaci\u00f3n:"
,)," Hay plataformas que operan sin estar supervisadas por entidades financieras serias. Esto permite que manipulen precios, bloqueen retiros o incluso desaparezcan con el dinero de los clientes."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u274c Brokers 'Market Maker' poco confiables:"
,)," Algunos brokers que crean su propio mercado pueden operar en contra del cliente, generando conflictos de inter\u00e9s."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u274c Publicidad enga\u00f1osa:"
,)," Muchos prometen 'ganancias seguras' o bonos atractivos para atraer a novatos, pero luego aplican condiciones ocultas que dificultan la retirada del dinero."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfC\u00f3mo identificar un broker seguro?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u2705 Regulaci\u00f3n oficial:"
,)," Debe estar regulado por entidades reconocidas como la SEC (EE.UU.), CNMV (Espa\u00f1a), FCA (Reino Unido),CNV (Argentina),etc."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u2705 Buena reputaci\u00f3n:"
,)," Investiga opiniones de otros usuarios en foros y sitios de rese\u00f1as."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u2705 Transparencia en comisiones:"
,)," Desconf\u00eda de los que ocultan costos o tienen spreads excesivos."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"\u2705 Facilidad de retiro:"
,)," Si un broker pone trabas para retirar tu dinero, es una mala se\u00f1al."
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"3. Ejemplos de Estafas reales en Las Inversiones"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"A continuaci\u00f3n, vamos a mostrarte algunos ejemplos de estafas reales encontradas en publicidades de YouTube."
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/estafa_1.jpg?refresh=1"},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/estafa_3.jpg?refresh=1"},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/estafa_4.jpg?refresh=1"},)
,),),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfC\u00f3mo sabemos que es una estafa?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Al observar la imagen, nos encontramos con la publicidad de la supuesta empresa YPF (Yacimientos Petrol\u00edferos Fiscales), la principal empresa de comercializaci\u00f3n de petr\u00f3leo, gas y combustibles de Argentina."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Una empresa de este calibre nunca, pero NUNCA, te pedir\u00e1 que inviertas en ella ni te exigir\u00e1 una 'inversi\u00f3n m\u00ednima' de casi $250 USD ($250.000 pesos argentinos)."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"Si realmente quieres invertir en YPF,"
,)," solo basta con comprar sus acciones en la bolsa o suscribirte a un FCI (Fondo Com\u00fan de Inversi\u00f3n) a trav\u00e9s de brokers registrados."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Otra forma de detectar una estafa es cuando te ofrecen un monto fijo de ganancias. En el mundo de las inversiones en acciones, "
,jsx(
RadixThemesStrong,
{},
"NUNCA"
,)," hay nada garantizado. Nadie puede asegurarte que ganar\u00e1s cierta cantidad de dinero en un d\u00eda, una semana o un mes, a menos que puedan predecir el futuro con una bola de cristal."
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/estafa_2.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["alignItems"] : "center", ["textAlign"] : "center", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
" El mercado sube y baja constantemente, por lo que es imposible garantizar un retorno fijo."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\ud83d\udccc Consejo:"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Si lo que buscas es una inversi\u00f3n con retornos fijos, existen las inversiones de renta fija (como lo vimos en el M\u00f3dulo 2: Tipos de Inversiones y sus Instrumentos), que incluyen opciones como plazos fijos, cauciones, bonos, etc.. Para acceder a ellas, solo necesitas crear una cuenta en un broker de confianza."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"Otro dato clave sobre la estafa de YPF"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Otro indicio de que esto es una estafa es que, al hacer clic en los tres puntos de la publicidad en YouTube, accedemos al Centro de anuncios de YouTube, donde podemos gestionar los anuncios que aparecen en nuestra cuenta."
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/prueba_estafa1.jpg?refresh=1"},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/prueba_estafa2.jpg?refresh=1"},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/prueba_estafa3.jpg?refresh=1"},)
,),),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Hasta ah\u00ed todo parece normal. Sin embargo, al revisar la informaci\u00f3n del anunciante, nos damos cuenta de que el nombre no coincide con YPF."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
" Adem\u00e1s, en las im\u00e1genes de ejemplo podemos ver que las ubicaciones del anunciante est\u00e1n fuera de Argentina, lo cual es muy sospechoso, considerando que YPF es una empresa argentina."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Si a\u00fan tienes dudas, preg\u00fantate lo siguiente:"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\ud83d\udc49 \u00bfPor qu\u00e9 YPF pondr\u00eda publicidad con una ubicaci\u00f3n en Ucrania, Chipre o Australia?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\ud83d\udc49 \u00bfPor qu\u00e9 el anunciante es una empresa extranjera en lugar de YPF?"
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"4. Esquemas piramidales y Ponzi"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Uno de los m\u00e9todos de estafa m\u00e1s comunes y antiguos en el mundo de las inversiones son los esquemas piramidales y Ponzi. Aunque suenen parecidos, tienen algunas diferencias clave, pero ambos se basan en enga\u00f1ar a personas con promesas falsas de ganancias r\u00e1pidas y aseguradas."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfQu\u00e9 es un esquema piramidal?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Es un modelo de negocio en el que la ganancia proviene de sumar a m\u00e1s personas al sistema, no de una actividad econ\u00f3mica real. Funciona as\u00ed:"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/esquema_ponzi.png?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa A vos te prometen dinero si invert\u00eds y tra\u00e9s a m\u00e1s personas."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa Esas personas traen a otras, y as\u00ed se va formando una \u201cpir\u00e1mide\u201d de ingresos."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa Al principio parece funcionar, pero todo depende de seguir sumando gente. Cuando eso se frena, la pir\u00e1mide colapsa y los de abajo pierden todo su dinero."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\ud83d\udccc Ejemplo t\u00edpico:"
,)," 'Met\u00e9 $100 d\u00f3lares y tra\u00e9 a 2 amigos. Cuando ellos traigan a otros 2, gan\u00e1s $400'. Parece f\u00e1cil\u2026 pero es una trampa."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfQu\u00e9 es una estafa Ponzi?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Es similar, pero m\u00e1s sutil. En este caso:"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "10px" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"- Te prometen rendimientos fijos muy altos (ej: \u201cgan\u00e1s 10% mensual s\u00ed o s\u00ed\u201d)."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"- No hay ning\u00fan negocio real: usan el dinero de nuevos inversores para pagarle a los anteriores."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"- Mientras entra gente nueva, el sistema sobrevive. Pero cuando se corta el flujo, se cae todo y desaparecen con tu dinero."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfC\u00f3mo detectarlos?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa\u200b Te prometen ganancias fijas y r\u00e1pidas sin riesgo."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa\u200b Te piden que sumes gente para ganar m\u00e1s."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa\u200b No hay transparencia sobre c\u00f3mo se genera el dinero."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa\u200b No est\u00e1n registrados en la CNV, ni en ning\u00fan ente regulador."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"\u26aa\u200b No tienen una actividad comercial clara."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\ud83d\udccc Recuerda"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px", ["marginBottom"] : "1em" })},
"Si no entend\u00e9s de d\u00f3nde viene la ganancia, la ganancia sos vos.Siempre verific\u00e1 que las empresas o plataformas est\u00e9n reguladas y sean transparentes. Si algo suena demasiado bueno para ser verdad\u2026 probablemente no sea verdad."
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"5. Cursos de Trading, Masterminds y \u201cC\u00f3mo ser millonario\u201d"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"Hoy en d\u00eda, es muy com\u00fan encontrarse con publicidades en redes sociales o YouTube donde alguien, en un auto de lujo o frente a una mansi\u00f3n, te promete que 'vas a ser millonario en 6 meses si compr\u00e1s su curso de trading'. Pero\u2026 \u00bfqu\u00e9 tan real es eso?"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"\u00bfD\u00f3nde est\u00e1 el enga\u00f1o?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u200b\u274c Promesas falsas:"
,)," Te venden la idea de que con solo hacer su curso vas a dejar tu trabajo, vivir de las inversiones y ganar miles de d\u00f3lares por mes."
,jsx(
RadixThemesStrong,
{},
"\u26a0\ufe0f Spoiler: El mercado no funciona as\u00ed. Aprender a invertir lleva tiempo, pr\u00e1ctica y conocimiento real, no f\u00f3rmulas m\u00e1gicas."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u200b\u274c Falsa autoridad:"
,)," Muchos de estos \u201cgur\u00fas\u201d no tienen experiencia real operando en los mercados. Solo ganan dinero vendiendo cursos\u2026 no invirtiendo."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u200b\u274c Precios alt\u00edsimos y urgencia falsa:"
,)," Te cobran $200, $500 o hasta $1000 d\u00f3lares por informaci\u00f3n que pod\u00e9s aprender gratis o por muy poco en fuentes confiables. Adem\u00e1s, usan frases como '\u00faltimos cupos', 'sube el precio ma\u00f1ana', o 'el secreto que los bancos no quieren que sepas' para apurarte a comprar."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{},
"\u200b\u274c Masterminds o grupos VIP:"
,)," Una vez que compraste, te meten en grupos cerrados donde te siguen vendiendo m\u00e1s cosas, como membres\u00edas, se\u00f1ales de compra/venta o \u201cestrategias secretas\u201d."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto" })},
"Entonces\u2026 \u00bftodos los cursos son una estafa?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block" })},
"No. Hay educadores serios que ense\u00f1an de forma clara, honesta y con fundamentos."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["marginBottom"] : "1em" })},
"Busca cursos Que el contenido sea realista y educativo, no emocional ni manipulador, Que te ense\u00f1en a gestionar el riesgo, no solo a \u201cganar dinero\u201d, Que te den herramientas para que vos mismo puedas aprender y analizar, por ultimo, Que el precio sea acorde y no dependan de que reclutes m\u00e1s gente."
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "1em" })},
"Conclusi\u00f3n del M\u00f3dulo 9:"
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
,)," Vimos que el mercado no es una estafa, pero s\u00ed est\u00e1 lleno de personas y plataformas que buscan enga\u00f1ar a inversores sin experiencia. Aprendimos a detectar brokers inseguros, estafas comunes como las pir\u00e1mides y Ponzi, y cursos falsos que prometen riqueza f\u00e1cil."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Aplicaci\u00f3n Pr\u00e1ctica:"
,)," Antes de invertir o capacitarte, verific\u00e1 que todo sea legal, regulado y transparente. Evit\u00e1 promesas de dinero r\u00e1pido y busc\u00e1 siempre informaci\u00f3n confiable. La mejor defensa contra las estafas es tu educaci\u00f3n financiera."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{},
"Pr\u00f3ximos Pasos:"
,)," En el pr\u00f3ximo y \u00faltimo m\u00f3dulo vas a conocer en qu\u00e9 plataformas pod\u00e9s invertir y empezar a generar ganancias con el trading. Aprender\u00e1s sobre los principales brokers, exchanges y los distintos tipos de wallets."
,),),),),),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["left"] : "20px" })},
jsx(Button_326566584149923165971631546972613773366,{},)
,),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })},
jsx(Button_34468043318925202081973624580075777918,{},)
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
"Modulo 9"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

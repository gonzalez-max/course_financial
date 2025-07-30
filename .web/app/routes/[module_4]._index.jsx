

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { jsx } from "@emotion/react"



function Button_289379737737876758684702757549221383768 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_0b4cd557b67ca668b1cb5a4ef2e4bdc5 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_5", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_0b4cd557b67ca668b1cb5a4ef2e4bdc5},
"Siguiente \u2192"
,)
  )
}

function Button_80602914111874605778150711832267787589 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_6b1cf88ef590349c6ba2bc1f01e89ab9 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_3", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "black", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_6b1cf88ef590349c6ba2bc1f01e89ab9},
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
"M\u00f3dulo 4: Fundamentos del An\u00e1lisis T\u00e9cnico y Patrones"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"1. El Ciclo del Precio"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"El ciclo del precio tiene cuatro fases: acumulaci\u00f3n, tendencia alcista, distribuci\u00f3n y tendencia bajista. Para ganar en el trading, es clave aprovechar las tendencias (alcista y bajista) interpretando el comportamiento del precio en un gr\u00e1fico. "
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/ciclo_del_precio.png?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
" \u00bfC\u00f3mo Identificar las Tendencias?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"En el an\u00e1lisis t\u00e9cnico existen dos tipos principales de formaciones:"
,jsx(
RadixThemesStrong,
{},
" Tendencias y Rangos."
,),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"Las"
,jsx(
RadixThemesStrong,
{},
" tendencias"
,)," pueden ser "
,jsx(
RadixThemesStrong,
{},
"alcistas"
,)," si los precios suben o "
,jsx(
RadixThemesStrong,
{},
"bajistas"
,)," si los precios caen."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
"Los "
,jsx(
RadixThemesStrong,
{},
"rangos"
,)," pueden ser de "
,jsx(
RadixThemesStrong,
{},
"acumulaci\u00f3n"
,)," que se encuentran al inicio del ciclo, o de "
,jsx(
RadixThemesStrong,
{},
"distribuci\u00f3n"
,)," que se encuentran en la parte alta del ciclo."
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/identificar_tendencias.png?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Para identificar una tendencia "
,jsx(
RadixThemesStrong,
{},
"alcista"
,),", observamos una sucesi\u00f3n de "
,jsx(
RadixThemesStrong,
{},
"m\u00e1ximos mayores y m\u00ednimos mayores."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Para una tendencia "
,jsx(
RadixThemesStrong,
{},
"bajista"
,),", observamos "
,jsx(
RadixThemesStrong,
{},
"m\u00e1ximos menores y m\u00ednimos menores"
,),". Los "
,jsx(
RadixThemesStrong,
{},
" rangos de acumulaci\u00f3n "
,),"tienen m\u00e1ximos y m\u00ednimos variados."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"2. Sentido Com\u00fan en el An\u00e1lisis T\u00e9cnico"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"Para realizar un an\u00e1lisis t\u00e9cnico preciso, se utilizan l\u00edneas de "
,jsx(
RadixThemesStrong,
{},
"soporte y resistencia"
,),", las cuales son:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Est\u00e1ticas"
,)," (horizontales)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Din\u00e1micas"
,)," (inclinadas en un \u00e1ngulo con respecto al eje horizontal)"
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/sentido_comun.png?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"A menudo,"
,jsx(
RadixThemesStrong,
{},
" la simplicidad y efectividad"
,)," del an\u00e1lisis t\u00e9cnico se ven opacadas por el exceso de indicadores y herramientas adicionales. En este contexto,"
,jsx(
RadixThemesStrong,
{},
" el sentido com\u00fan"
,)," juega un papel fundamental para interpretar correctamente las tendencias en los gr\u00e1ficos."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"3. El precio y su comportamiento"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
" L\u00edneas de precio (Soporte y Resistencia)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"En el mercado, las l\u00edneas de soporte y resistencia son fundamentales. Existen tres tipos de estas l\u00edneas, y su interpretaci\u00f3n depende de su relevancia y utilidad para tus operaciones"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
" L\u00edneas horizontales de soporte y resistencia"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Los niveles horizontales de soporte y resistencia son esenciales en el an\u00e1lisis t\u00e9cnico. La resistencia se\u00f1ala los puntos donde el precio tiende a bajar, mientras que el soporte indica los puntos donde el precio tiende a subir."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Resistencia:"
,)," Uni\u00f3n de dos o m\u00e1s puntos donde el mercado cambia a la baja."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Soporte:"
,)," Uni\u00f3n de dos o m\u00e1s puntos donde el mercado cambia de direcci\u00f3n a la alza."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/soporte_resistencia.png?refresh=1"},)
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"4. trazando soportes y las resistencias"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Identificar correctamente los niveles de soporte, resistencia y tendencias es esencial para anticipar movimientos del mercado y tomar decisiones m\u00e1s seguras. Estos conceptos te ayudar\u00e1n a reconocer zonas donde el precio podr\u00eda rebotar, detenerse o cambiar de direcci\u00f3n"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"1. Soporte y Resistencia Horizontal:"
,)," Un soporte se identifica cuando el precio rebota varias veces en un nivel, como $8,22. Una resistencia se forma cuando el precio falla en superar un nivel, como $11,20."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"2. L\u00ednea de Tendencia:"
,)," En una tendencia alcista, traza una l\u00ednea que una los m\u00ednimos crecientes como soporte din\u00e1mico. En una bajista, traza una l\u00ednea sobre los m\u00e1ximos decrecientes como resistencia din\u00e1mica."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"3. Confluencia de Niveles:"
,)," Si una l\u00ednea de tendencia coincide (choca/toca) con un soporte o resistencia horizontal, ese nivel se refuerza como una zona clave. Ya sea para comprar o para vender"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"4. Tiempo M\u00faltiple:"
,)," Analiza diferentes marcos temporales, ya que un nivel fuerte en un gr\u00e1fico semanal puede no ser relevante en uno diario. Mas adelante veremos temporalidades a profundidad"
,),jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/trazando_soporte_resistencia.png?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"Importante Recordar:"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Para graficar las l\u00edneas de tendencia, "
,jsx(
RadixThemesStrong,
{},
"siempre se deben tomar desde las mechas de las velas."
,)," En una tendencia alcista, se debe graficar desde la parte inferior, y en una tendencia bajista, desde la parte superior de las velas."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Conclusi\u00f3n del M\u00f3dulo 4: "
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
,)," Aprendimos los fundamentos del an\u00e1lisis t\u00e9cnico: el Ciclo del Precio (acumulaci\u00f3n, tendencia alcista, distribuci\u00f3n, tendencia bajista), c\u00f3mo identificar tendencias con m\u00e1ximos y m\u00ednimos, y el uso de l\u00edneas de soporte, resistencia y como aplicarlas en graficos reales para operar en el mercado."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
" Aplicaci\u00f3n Pr\u00e1ctica:"
,)," Reflexion\u00e1 sobre c\u00f3mo usar l\u00edneas de soporte y resistencia en gr\u00e1ficos. Practic\u00e1 trazando tendencias y detectando patrones para identificar oportunidades de entrada o salida."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
" Pr\u00f3ximos Pasos:"
,)," En el siguiente m\u00f3dulo, aplicar\u00e1s el an\u00e1lisis t\u00e9cnico con ejemplos gr\u00e1ficos, explorando la importancia de las l\u00edneas horizontales, los quiebres, rangos del mercado y su uso para gestionar riesgo y maximizar ganancias."
,),),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"center",gap:"3"},)
,),),),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })},
jsx(Button_289379737737876758684702757549221383768,{},)
,),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["left"] : "20px" })},
jsx(Button_80602914111874605778150711832267787589,{},)
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
"Modulo 4"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

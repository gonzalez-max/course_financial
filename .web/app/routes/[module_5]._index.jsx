

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { jsx } from "@emotion/react"



function Button_339314614795469639836257366390952808794 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_3f068d1be5cea8a42f0fb8ce08873c71 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_6", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_3f068d1be5cea8a42f0fb8ce08873c71},
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

function Button_211914599466946523782681579030234293626 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_c8c7d691c8f33dd61ca74a02b23b75e3 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_4", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "black", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_c8c7d691c8f33dd61ca74a02b23b75e3},
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
"M\u00f3dulo 5: Dominando Soportes, Resistencias y Rangos"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"1. La importancia de las l\u00edneas horizontales"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"La relevancia de una "
,jsx(
RadixThemesStrong,
{},
"l\u00ednea de soporte o resistencia"
,)," aumenta con cada prueba (es decir, cada vez que el gr\u00e1fico choca con las l\u00edneas horizontales). "
,jsx(
RadixThemesStrong,
{},
"Cuando una l\u00ednea pasa de ser soporte a resistencia, o viceversa, se vuelve m\u00e1s significativa"
,),". Sus quiebres suelen provocar movimientos decisivos y duraderos en la direcci\u00f3n del quiebre. Adem\u00e1s, las l\u00edneas que abarcan un per\u00edodo m\u00e1s largo de tiempo son mucho m\u00e1s importantes."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em" }),direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/importancia_lineas_1.png?refresh=1"},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/importancia_lineas_2.png?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"Explicaci\u00f3n de los graficos"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"Estos gr\u00e1ficos muestran c\u00f3mo las l\u00edneas horizontales de soporte y resistencia funcionan en un escenario real: "
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"La l\u00ednea verde (soporte)"
,)," resiste varias ca\u00eddas del precio, pero al romperse, el precio cae con fuerza."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"La l\u00ednea roja (resistencia)"
,)," detiene los intentos de subir varias veces, pero cuando se quiebra, el precio sube de forma sostenida, formando un "
,jsx(
RadixThemesStrong,
{},
"nuevo soporte."
,),),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Las l\u00edneas que tienen m\u00e1s pruebas y abarcan m\u00e1s tiempo"
,)," (como estas) son las m\u00e1s importantes para tus decisiones de trading, ya que indican niveles clave donde los grandes movimientos pueden ocurrir."
,),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"2. L\u00edneas de tendencia"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Las l\u00edneas de tendencia din\u00e1micas se forman cuando estas se rompen: el precio puede cambiar de tendencia o lateralizarse,"
,)," y el quiebre del \u00faltimo m\u00ednimo o m\u00e1ximo marca un cambio s\u00f3lido en la tendencia. "
,jsx(
RadixThemesStrong,
{},
"Se recomienda que un m\u00e1ximo mayor o un m\u00ednimo menor recorra una distancia considerable para que la l\u00ednea sea v\u00e1lida."
,)," La pr\u00e1ctica intensa ayuda a desarrollar la habilidad para definir estos niveles correctamente."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/lineas_de_tendencia.png?refresh=1"},)
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"3. Riesgo, ganancias y l\u00edneas de soporte y resistencia"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Las l\u00edneas horizontales de soporte y resistencia"
,)," ayudan a controlar el riesgo y tomar ganancias en las operaciones. "
,jsx(
RadixThemesStrong,
{},
"Sirven para encontrar niveles clave y decidir c\u00f3mo maximizar beneficios. "
,),"Por ejemplo, en un gr\u00e1fico alcista, estas l\u00edneas muestran c\u00f3mo ajustar riesgo y ganancia mientras avanza la operaci\u00f3n. Esto es clave para proteger y aumentar las ganancias en el trading."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/riesgo_ganancias_lineas.png?refresh=1"},)
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"4. Rangos (acumulaci\u00f3n y distribuci\u00f3n)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"En la fase de rangos el mercado esta en una fase de"
,jsx(
RadixThemesStrong,
{},
" acumulaci\u00f3n"
,)," (cuando los inversores compran en silencio antes de una tendencia alcista) o "
,jsx(
RadixThemesStrong,
{},
"distribuci\u00f3n"
,)," (cuando los inversores venden discretamente antes de una tendencia bajista) los operadores pueden perder ganancias o enfrentar perdidas si intentan operar en esta fase."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/rangos_acumulacion_distribucion.png?refresh=1"},)
,),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"5. Negociar Rangos"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Negociar rangos de acumulaci\u00f3n y distribuci\u00f3n significa esperar a que el precio rompa la lateralizaci\u00f3n en direcci\u00f3n opuesta a la tendencia. La altura y ancho del rango dan pistas sobre el precio y el tiempo, pero no aseguran \u00e9xito. Ajusta la temporalidad del gr\u00e1fico (d\u00eda, semana, mes) seg\u00fan el movimiento. Observa las pruebas en m\u00e1ximos o m\u00ednimos para medir la resistencia. Rangos con poco ruido, altura moderada y poca expansi\u00f3n ofrecen mejor riesgo/beneficio"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/negociar_rangos.png?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"En un rango, las pruebas sobre la resistencia ayudan a confirmar si una ruptura es fuerte o d\u00e9bil:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Sin pruebas:"
,)," La ruptura es m\u00e1s riesgosa y propensa a fallar."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Con 1 prueba:"
,)," Hay mayor confirmaci\u00f3n, pero a\u00fan existe riesgo moderado."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Con 2 pruebas o mas:"
,),"La ruptura es m\u00e1s s\u00f3lida y confiable."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Consejo:"
,)," Esperar al menos una prueba antes de operar y buscar confirmaci\u00f3n con un aumento de volumen."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"Otras ideas sobre rangos"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Entender c\u00f3mo funcionan los mercados es clave, porque su l\u00f3gica no cambia con el tiempo. La relaci\u00f3n precio-tiempo var\u00eda siempre, influida por las emociones y las \u00f3rdenes de los participantes."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "2em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["boxSizing"] : "border-box", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/otras_ideas.png?refresh=1"},)
,),),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Esta imagen muestra dos ejemplos de falsos quiebres en rangos:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Falso quiebre desde piso prolongado (izquierda):"
,)," El precio estuvo rebotando en un soporte (piso) durante un tiempo. Luego, parece romper al alza, pero esa ruptura no se sostiene y el precio cae r\u00e1pidamente."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Falso quiebre desde techo prolongado (derecha):"
,)," Similar al caso anterior, pero en resistencia (techo). El precio parece romper hacia abajo, pero luego revierte con fuerza hacia arriba."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "400", ["color"] : "#4493f8", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginBottom"] : "0.5em" })},
"\u26a0\ufe0f\u00a1\u00a1Importante!!\u26a0\ufe0f"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Esta es una lecci\u00f3n sobre c\u00f3mo el precio"
,jsx(
RadixThemesStrong,
{},
" enga\u00f1a"
,)," y por qu\u00e9 es esencial ser"
,jsx(
RadixThemesStrong,
{},
" paciente y anal\u00edtico"
,)," en los rangos."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Los falsos quiebres son comunes"
,)," cuando muchos traders esperan rupturas claras. Estos movimientos suelen atrapar a quienes entran tarde, generando liquidez para el verdadero movimiento contrario."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Consejo:"
,)," Siempre busca confirmaci\u00f3n antes de operar en una ruptura y ten en cuenta el volumen y el contexto del mercado."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#c6ceda", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginBottom"] : "1em" })},
"Conclusi\u00f3n del M\u00f3dulo 5: "
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
,)," Exploramos el an\u00e1lisis t\u00e9cnico pr\u00e1ctico, destacando las l\u00edneas horizontales de soporte y resistencia, las l\u00edneas de tendencia y su rol en identificar cambios del mercado, adem\u00e1s de los rangos de acumulaci\u00f3n y distribuci\u00f3n, y la gesti\u00f3n de riesgos y ganancias."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Aplicaci\u00f3n Pr\u00e1ctica:"
,)," Practic\u00e1 trazando l\u00edneas horizontales y de tendencia en gr\u00e1ficos reales. Analiz\u00e1 las pruebas de soporte y resistencia, identific\u00e1 posibles rangos y observ\u00e1 los quiebres para anticipar movimientos. Evalu\u00e1 el volumen y el contexto antes de tomar decisiones."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em" })},
jsx(
RadixThemesStrong,
{},
"Pr\u00f3ximos Pasos: :"
,),"En el pr\u00f3ximo m\u00f3dulo, veremos c\u00f3mo identificar las l\u00edneas de tendencia en gr\u00e1ficos reales, conoceremos al enemigo de las tendencias y aprender\u00e1s c\u00f3mo colocar un stop-loss para evitar p\u00e9rdidas, adem\u00e1s de c\u00f3mo identificar rupturas y falsas rupturas."
,),),),),),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })},
jsx(Button_339314614795469639836257366390952808794,{},)
,),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["left"] : "20px" })},
jsx(Button_211914599466946523782681579030234293626,{},)
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
"Modulo 5"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

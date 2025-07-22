

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { jsx } from "@emotion/react"



function Button_321254683990531036296743993884549814701 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_e5fe15f70779907a10fd0195f5dfbd80 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_1", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "black", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "white", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_e5fe15f70779907a10fd0195f5dfbd80},
"\u2190 Atr\u00e1s"
,)
  )
}

function Button_67557510853656413435808366953385563877 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_6b1cf88ef590349c6ba2bc1f01e89ab9 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_3", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "white", ["color"] : "black", ["padding"] : "10px 20px", ["borderRadius"] : "50px", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "black", ["color"] : "white", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),onClick:on_click_6b1cf88ef590349c6ba2bc1f01e89ab9},
"Siguiente \u2192"
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

function Tooltip_57155636450566436524232588975192965443 () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
RadixThemesTooltip,
{content:"No me toques."},
jsx("img",{css:({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) }),onClick:((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))),src:reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src_rx_state_},)
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

function Img_164144592572901142842083229647882011920 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd1bd52eb3f49731a43de1af718afe95 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) }),onClick:on_click_bd1bd52eb3f49731a43de1af718afe95,src:reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src_rx_state_},)

  )
}

function Img_215776905481918966922303443692193449816 () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_783c3e9898a3489cd7667c778df859aa = useCallback(((_e) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx("img",{css:({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" }),onClick:on_click_783c3e9898a3489cd7667c778df859aa,src:reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src_rx_state_},)

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
jsx(Tooltip_57155636450566436524232588975192965443,{},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/financial_page"},
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
jsx(Img_215776905481918966922303443692193449816,{},)
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
{css:({ ["fontSize"] : "clamp(28px, 5vw, 50px)", ["fontWeight"] : "600", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.07em", ["width"] : "100%", ["maxWidth"] : "600px", ["margin"] : "auto", ["lineHeight"] : "1.1", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["marginTop"] : "35px", ["marginBottom"] : "0.5em" })},
"M\u00f3dulo 2: Inversores y tipos de Instrumentos"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"1. Tipos de Inversores y C\u00f3mo Identificar el Tuyo"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Cuando hablamos de inversiones, no todos los inversores son iguales. Cada persona tiene una tolerancia al riesgo diferente, lo que influye en las decisiones que toma a la hora de invertir."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/tipo_inversor.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"\u00bfQu\u00e9 es un perfil de inversor?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Un perfil de inversor es una clasificaci\u00f3n que nos ayuda a entender c\u00f3mo reaccionamos ante los riesgos y qu\u00e9 tipo de inversiones son m\u00e1s adecuadas para nosotros."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"\u00bfPara qu\u00e9 sirve conocer tu perfil?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Determinar tu perfil de inversor te ayudar\u00e1 a elegir estrategias alineadas con tu comodidad financiera y objetivos. Por ejemplo, si prefieres estabilidad, quiz\u00e1s no sea conveniente invertir en activos muy vol\u00e1tiles como criptomonedas o acciones de alto riesgo."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Tipos de inversores seg\u00fan su tolerancia al riesgo"
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"column",gap:"3"},
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
"Perfil"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Caracter\u00edsticas"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Tipos de inversi\u00f3n recomendados"
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
"Conservador"
,),),jsx(
RadixThemesTable.Cell,
{},
"Busca seguridad y estabilidad. Prioriza preservar el capital."
,),jsx(
RadixThemesTable.Cell,
{},
"Plazos fijos, bonos de bajo riesgo, FCI de renta fija."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"Moderado"
,),),jsx(
RadixThemesTable.Cell,
{},
"Acepta un riesgo medio para obtener mejor rentabilidad. Diversifica entre activos seguros y de riesgo."
,),jsx(
RadixThemesTable.Cell,
{},
"Bonos, acciones de empresas consolidadas, FCI mixtos."
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"Agresivo"
,),),jsx(
RadixThemesTable.Cell,
{},
"Est\u00e1 dispuesto a asumir altos riesgos para maximizar ganancias."
,),jsx(
RadixThemesTable.Cell,
{},
"Acciones de crecimiento, criptomonedas, opciones, trading."
,),),),),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"\u00bfC\u00f3mo saber qu\u00e9 tipo de inversor eres?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Responde estas preguntas y descubre tu perfil:"
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"\u2714 \u00bfC\u00f3mo reaccionar\u00edas si tu inversi\u00f3n pierde valor en el corto plazo?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"\u2714 \u00bfPrefieres estabilidad o est\u00e1s dispuesto a asumir riesgos por mayor rentabilidad?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"\u2714 \u00bfCu\u00e1nto tiempo est\u00e1s dispuesto a mantener una inversi\u00f3n?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Este an\u00e1lisis ser\u00e1 clave antes de adentrarte en el mundo del trading, ya que te permitir\u00e1 tomar decisiones financieras con mayor seguridad."
,),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"2. los Instumentos de inversion"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"La inversi\u00f3n es una de las mejores herramientas para hacer crecer el capital y alcanzar objetivos financieros a mediano y largo plazo. Existen distintos instrumentos de inversi\u00f3n, cada uno con sus propias caracter\u00edsticas, riesgos y niveles de rentabilidad."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/instrumentos_inversion.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
" \u00bfComo elijo el adecuado para mi perfil?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"Para elegir el instrumento adecuado, es importante considerar factores como:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Plazo:"
,)," Se refiere al tiempo durante el cual se mantiene una inversi\u00f3n antes de obtener rendimientos o recuperar el capital. Puede ser "
,jsx(
RadixThemesStrong,
{},
"corto plazo"
,)," (hasta 1 a\u00f1o), "
,jsx(
RadixThemesStrong,
{},
"mediano plazo"
,)," (entre 1 y 5 a\u00f1os) o "
,jsx(
RadixThemesStrong,
{},
"largo plazo"
,)," (m\u00e1s de 5 a\u00f1os)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Riesgo:"
,)," Representa la posibilidad de perder dinero en una inversi\u00f3n. "
,jsx(
RadixThemesStrong,
{},
"Inversiones seguras"
,)," (como un plazo fijo o bonos gubernamentales) ofrecen menor riesgo pero rendimientos m\u00e1s bajos, mientras que"
,jsx(
RadixThemesStrong,
{},
" inversiones m\u00e1s vol\u00e1tiles"
,)," (como acciones u opciones) pueden generar mayores ganancias, pero tambi\u00e9n mayores p\u00e9rdidas."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Liquidez:"
,)," Indica qu\u00e9 tan r\u00e1pido y f\u00e1cilmente se puede vender una inversi\u00f3n y convertirla en efectivo sin perder valor. Inversiones como acciones o FCI tienen alta liquidez, mientras que inmuebles o bonos a largo plazo suelen tener menor liquidez."
,),jsx(
"li",
{css:({ ["marginBottom"] : "1em", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Rentabilidad esperada:"
,)," Es la ganancia potencial que se puede obtener de una inversi\u00f3n. A mayor riesgo, generalmente se espera una mayor rentabilidad. Por ejemplo, los plazos fijos tienen baja rentabilidad pero son seguros, mientras que las acciones pueden generar altos retornos pero con mayor incertidumbre."
,),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"3. Diferencias entre Renta Fija y Renta Variable"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Las inversiones pueden dividirse en renta fija y renta variable, dependiendo de la previsibilidad de sus rendimientos y el nivel de riesgo asociado."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/diferencia_fija_variable.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Renta fija"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Son inversiones con un retorno predecible, donde se conoce de antemano la tasa de inter\u00e9s o el pago que se recibir\u00e1. Son m\u00e1s seguras, pero su rentabilidad suele ser menor en comparaci\u00f3n con la renta variable"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Plazo fijo:"
,)," Dep\u00f3sito de dinero en un banco durante un tiempo determinado, a cambio de un inter\u00e9s fijo al finalizar el per\u00edodo."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Bonos:"
,)," Instrumentos de deuda emitidos por gobiernos o empresas. Funcionan como un pr\u00e9stamo en el que el inversionista recibe intereses peri\u00f3dicos hasta el vencimiento."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Letras:"
,)," T\u00edtulos de deuda p\u00fablica a corto plazo, emitidos por el Estado para financiarse. Suelen ofrecer rendimientos menores que los bonos, pero con menor riesgo."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Renta Variable"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"En estas inversiones, la rentabilidad no est\u00e1 garantizada y depende de factores del mercado, lo que las hace m\u00e1s vol\u00e1tiles pero con un potencial de ganancias mayor."
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Acciones/CEDEARS:"
,)," Representan una parte de una empresa. Su valor var\u00eda seg\u00fan la oferta y demanda en la bolsa, pudiendo generar ganancias por apreciaci\u00f3n del precio o por dividendos"
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Commodities:"
,)," Materias primas como oro, petr\u00f3leo o soja, cuyos precios fluct\u00faan en funci\u00f3n de la oferta y demanda global."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Opciones:"
,)," Derivados financieros que otorgan el derecho (pero no la obligaci\u00f3n) de comprar o vender un activo en una fecha futura a un precio determinado. Se utilizan para especulaci\u00f3n o cobertura de riesgos."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Criptomonedas:"
,)," Activos digitales descentralizados que operan en tecnolog\u00eda blockchain. Su valor es altamente vol\u00e1til y depende del mercado. Mas adelante abundaremos mas sobre ellas."
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"column",gap:"3"},
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
"Caracteristica"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Renta Fija"
,),jsx(
RadixThemesTable.ColumnHeaderCell,
{},
"Renta Variable"
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
"Riesgo"
,),),jsx(
RadixThemesTable.Cell,
{},
"Bajo"
,),jsx(
RadixThemesTable.Cell,
{},
"Alto"
,),),jsx(
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
"Predecible y estable"
,),jsx(
RadixThemesTable.Cell,
{},
"Variable y no asegurada"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"Ejemplos"
,),),jsx(
RadixThemesTable.Cell,
{},
"Plazo fijo, bonos, letras"
,),jsx(
RadixThemesTable.Cell,
{},
"Acciones, commodities, opciones, criptos"
,),),jsx(
RadixThemesTable.Row,
{css:({ ["color"] : "white" })},
jsx(
RadixThemesTable.RowHeaderCell,
{},
jsx(
RadixThemesStrong,
{},
"Liquidez"
,),),jsx(
RadixThemesTable.Cell,
{},
"Depende del tipo de inversi\u00f3n"
,),jsx(
RadixThemesTable.Cell,
{},
"Depende del mercado"
,),),),),),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"4. \u00bfQu\u00e9 son los CEDEARs?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"Si viv\u00eds en Argentina seguramente alguna vez hayas escuchadosobre los CEDEARS, \u00bfQue realmente son?."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"CEDEAR significa Certificado de Dep\u00f3sito Argentino. Son activos que representan acciones de empresas extranjeras (como Apple, Tesla o Coca-Cola), pero que se pueden comprar y vender en la Bolsa de Argentina (BYMA)"
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"\u00bfQu\u00e9 te permite un CEDEAR?"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Invertir en empresas de Estados Unidos u otros pa\u00edses sin necesidad de tener una cuenta en el exterior."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Estar expuesto al tipo de cambio d\u00f3lar CCL (Contado con Liquidaci\u00f3n)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Diversificar tu cartera con acciones globales."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"\u00bfCuales son sus ventajas?"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Pod\u00e9s invertir en empresas como Google, Microsoft, Amazon, etc."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Se compran en pesos."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Est\u00e1n protegidos por la suba del d\u00f3lar (porque se ajustan al tipo de cambio)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Ideal para proteger tus ahorros frente a la inflaci\u00f3n o devaluaci\u00f3n."
,),),jsx(
RadixThemesStrong,
{css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block" })},
"Puntos a tener en cuenta"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"No pagan dividendos en muchos casos, o lo hacen en muy baja proporci\u00f3n."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Tienen menor liquidez que acciones locales."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Est\u00e1n protegidos por la suba del d\u00f3lar (porque se ajustan al tipo de cambio)."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Ten\u00e9s que ver la relaci\u00f3n de conversi\u00f3n, ya que no siempre 1 CEDEAR = 1 acci\u00f3n."
,),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "0.5em" })},
"5. Fondos comunes de inversion."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "1em" })},
"Los Fondos Comunes de Inversi\u00f3n (FCI) son herramientas que permiten invertir sin necesidad de conocimientos avanzados. Funcionan agrupando dinero de muchas personas y gestion\u00e1ndolo en distintos activos seg\u00fan el tipo de fondo."
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginBottom"] : "1em" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "600px", ["maxHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid white", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:"/fci_image.jpg?refresh=1"},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["marginBottom"] : "0.5em" })},
"Tipos de FCI seg\u00fan sus caracter\u00edsticas:"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"1."
,jsx(
RadixThemesStrong,
{},
" Seg\u00fan el riesgo:"
,),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["alignItems"] : "center", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Renta fija:"
,)," Invierte en instrumentos estables como bonos o plazos fijos. Bajo riesgo y menor rentabilidad."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Renta variable:"
,)," Invierte en acciones u otros activos de mayor volatilidad. Mayor riesgo y potencial de ganancia."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"2.\u200b"
,jsx(
RadixThemesStrong,
{},
" Mercado de capitales:"
,),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["alignItems"] : "center", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Seg\u00fan la moneda:"
,)," Fondos en pesos."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Renta variable:"
,)," Fondos en d\u00f3lares."
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "17px", ["display"] : "block", ["marginBottom"] : "0.5em" })},
"3."
,jsx(
RadixThemesStrong,
{},
" Seg\u00fan el mercado en el que invierten:"
,),),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Mercado de dinero:"
,)," Plazos fijos, bonos cortos, inversiones de bajo riesgo."
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Mercado de capitales:"
,),"  Acciones, bonos de largo plazo, instrumentos financieros m\u00e1s complejos"
,),jsx(
"li",
{},
jsx(
RadixThemesStrong,
{css:({ ["fontSize"] : "16px", ["fontWeight"] : "semibold", ["fontFamily"] : "Helvetica", ["--default-font-family"] : "Helvetica", ["color"] : "white", ["backgroundColor"] : "#c14d00", ["padding"] : "2px 5px", ["borderRadius"] : "5px" })},
"Mercados internacionales:"
,)," FCI que invierten en activos de otros pa\u00edses. financieros m\u00e1s complejos"
,),),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" }),size:"4"},)
,jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["marginBottom"] : "1em" })},
"Conclusi\u00f3n del M\u00f3dulo 2: "
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
,)," En este m\u00f3dulo exploramos los distintos instrumentos de inversi\u00f3n, diferenciamos entre renta fija y renta variable, entendimos el funcionamiento de los Fondos Comunes de Inversi\u00f3n y la importancia de conocer nuestro perfil de inversor."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Aplicaci\u00f3n Pr\u00e1ctica:"
,)," Reflexion\u00e1 sobre tu tolerancia al riesgo y qu\u00e9 tipo de inversor sos. Investig\u00e1 qu\u00e9 instrumentos de inversi\u00f3n se alinean mejor con tus objetivos financieros y empez\u00e1 a evaluar opciones reales en el mercado"
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
jsx(
RadixThemesStrong,
{},
"Pr\u00f3ximos Pasos:"
,)," En el siguiente m\u00f3dulo, daremos un paso m\u00e1s profundo en el mundo de las inversiones y nos adentraremos en el trading, explorando estrategias, el analisis tecnico, velas doji y herramientas clave para operar en los mercados financieros."
,),),),),),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["right"] : "20px" })},
jsx(Button_67557510853656413435808366953385563877,{},)
,),jsx(
RadixThemesBox,
{css:({ ["position"] : "fixed", ["bottom"] : "50px", ["left"] : "20px" })},
jsx(Button_321254683990531036296743993884549814701,{},)
,),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center", ["backgroundColor"] : "transparent", ["display"] : "flex", ["flexWrap"] : "wrap", ["gap"] : "10px" }),direction:"column",gap:"3"},
jsx(Img_164144592572901142842083229647882011920,{},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white" })},
"since 1999 copyright registered."
,),),),jsx(
"title",
{},
"Modulo 2"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

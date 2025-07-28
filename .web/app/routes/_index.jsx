

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import { jsx } from "@emotion/react"



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

function Link_55467223364215175522289453147854771246 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
RadixThemesLink,
{css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),href:"#"},
jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100px", ["padding"] : "30px", ["spacing"] : "5px", ["borderRadius"] : "50px", ["fontSize"] : "20px", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "rgba(0,0,0,1)", ["border"] : "1.5px solid black", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["textDecoration"] : "none", ["&:hover"] : ({ ["backgroundColor"] : "white", ["borderColor"] : "black", ["transform"] : "scale(1.10)", ["color"] : "black", ["textDecoration"] : "none" }), ["marginTop"] : "1em" }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/choice_modules", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"3",variant:"solid"},
"Comenzar con el curso"
,),)
  )
}

function Link_49149495207899390339577974416985833977 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
RadixThemesLink,
{css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),href:"#"},
jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["marginBottom"] : "4em", ["width"] : "100%", ["height"] : "100px", ["padding"] : "30px", ["spacing"] : "5px", ["borderRadius"] : "50px", ["fontSize"] : "20px", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "rgba(0,0,0,1)", ["border"] : "1.5px solid black", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["textDecoration"] : "none", ["&:hover"] : ({ ["backgroundColor"] : "white", ["borderColor"] : "black", ["transform"] : "scale(1.10)", ["color"] : "black", ["textDecoration"] : "none" }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/choice_modules", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"3",variant:"solid"},
"Comenzar con el curso"
,),)
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
{css:({ ["textColor"] : "black", ["width"] : "100%", ["background"] : "linear-gradient(180deg, rgba(2,4,45,1) 0%, rgba(136,75,111,1) 100%)", ["display"] : "flex", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "10px", ["alignItems"] : "center", ["margin"] : "0 auto", ["overflowX"] : "hidden", ["overflowY"] : "auto" })},
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
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["borderRadius"] : "10px", ["maxWidth"] : "100%" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center" }),direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100vw", ["height"] : "100vh", ["minHeight"] : "100vh", ["padding"] : "20px", ["marginTop"] : "40px", ["marginBottom"] : "4em", ["backgroundImage"] : "url('/financial_background.jpg')", ["backgroundPosition"] : "center", ["backgroundRepeat"] : "no-repeat", ["backgroundSize"] : "cover" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "100px", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "20px" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "35px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "42px" }), ["@media screen and (min-width: 48em)"] : ({ ["fontSize"] : "46px" }), ["@media screen and (min-width: 62em)"] : ({ ["fontSize"] : "55px" }), ["fontWeight"] : "700", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.05em", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.2", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["maxWidth"] : "900px" })},
"Curso de Finanzas, Trading y como evitar Estafas"
,),jsx(Link_55467223364215175522289453147854771246,{},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "0.1em" })},
"Introduccion"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Te damos la bienvenida al curso de Inversiones Trading y como evitar estafas, dise\u00f1ado para brindarte un conocimiento s\u00f3lido y pr\u00e1ctico sobre el mundo financiero. A lo largo de este curso, aprender\u00e1s desde los conceptos m\u00e1s b\u00e1sicos hasta estrategias avanzadas de inversi\u00f3n, con un enfoque especial en c\u00f3mo reconocer y evitar fraudes financieros."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"\u00bfQu\u00e9 aprender\u00e1s en este curso?"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "0.5em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Fundamentos de finanzas personales: administraci\u00f3n del dinero, ahorro e inversi\u00f3n."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Principios b\u00e1sicos y avanzados de trading y an\u00e1lisis t\u00e9cnico."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Identificaci\u00f3n de fraudes y estafas financieras m\u00e1s comunes."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
" Herramientas y estrategias para proteger tu capital y tomar decisiones informadas."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"\u00bfPor qu\u00e9 tomar este curso?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"En un mundo donde las oportunidades financieras crecen, tambi\u00e9n lo hacen los riesgos. Este curso te proporcionar\u00e1 conocimientos pr\u00e1cticos y casos reales para que puedas invertir con confianza y seguridad."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"Seis Puntos a tener en cuenta"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"1. Organiza tu tiempo"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"El curso est\u00e1 dise\u00f1ado para darte conocimientos desde lo b\u00e1sico hasta lo avanzado, por lo que es importante que asignes tiempo cada semana para aprender, practicar y repasar los contenidos."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"2. Ten una libreta de apuntes"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Aunque sea un curso digital, es fundamental tomar notas de los conceptos clave. Esto te ayudar\u00e1 a recordar informaci\u00f3n importante y a estructurar mejor tu aprendizaje."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"3. S\u00e9 cr\u00edtico con la informaci\u00f3n"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"En internet hay mucha informaci\u00f3n falsa sobre trading y finanzas. Aseg\u00farate de analizar la fuente de cada dato y aplicar un pensamiento cr\u00edtico antes de tomar decisiones financieras."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"4. Mant\u00e9n una mentalidad realista y disciplinada"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"El trading y las finanzas no son un esquema para hacerse rico r\u00e1pidamente. Aqu\u00ed aprender\u00e1s c\u00f3mo tomar decisiones informadas y minimizar riesgos, pero necesitar\u00e1s paciencia, disciplina y pr\u00e1ctica constante."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"5. Prepar\u00e1te para aprender de tus errores"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"En el mundo financiero, cometer errores es parte del proceso. No te frustres si algo no sale bien al principio, lo importante es aprender y mejorar con la experiencia."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"6. Disfruta el proceso y participa activamente"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Haz preguntas, comparte ideas y aprovecha al m\u00e1ximo este curso. La educaci\u00f3n financiera es una de las herramientas m\u00e1s valiosas para mejorar tu calidad de vida."
,),),),jsx(
RadixThemesHeading,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "35px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "42px" }), ["@media screen and (min-width: 48em)"] : ({ ["fontSize"] : "46px" }), ["@media screen and (min-width: 62em)"] : ({ ["fontSize"] : "55px" }), ["fontWeight"] : "700", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.05em", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.2", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["maxWidth"] : "900px", ["marginTop"] : "0.5em" })},
"Muchos Exitos con tu aprendisaje... comencemos \ud83d\ude80\ud83d\udcc8"
,),jsx(Link_49149495207899390339577974416985833977,{},)
,),),),),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center" }),direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100vw", ["height"] : "100vh", ["minHeight"] : "100vh", ["padding"] : "20px", ["marginTop"] : "40px", ["marginBottom"] : "4em", ["backgroundImage"] : "url('/financial_background.jpg')", ["backgroundPosition"] : "center", ["backgroundRepeat"] : "no-repeat", ["backgroundSize"] : "cover" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["justifyContent"] : "right" }),direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["marginTop"] : "4em" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "35px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "42px" }), ["@media screen and (min-width: 48em)"] : ({ ["fontSize"] : "46px" }), ["@media screen and (min-width: 62em)"] : ({ ["fontSize"] : "55px" }), ["fontWeight"] : "700", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.05em", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.2", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["maxWidth"] : "900px", ["marginTop"] : "1em" })},
"Curso de Finanzas, Trading y como evitar Estafas"
,),jsx(Link_55467223364215175522289453147854771246,{},)
,),),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "1em" })},
"Introduccion"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Te damos la bienvenida al curso de Inversiones Trading y como evitar estafas, dise\u00f1ado para brindarte un conocimiento s\u00f3lido y pr\u00e1ctico sobre el mundo financiero. A lo largo de este curso, aprender\u00e1s desde los conceptos m\u00e1s b\u00e1sicos hasta estrategias avanzadas de inversi\u00f3n, con un enfoque especial en c\u00f3mo reconocer y evitar fraudes financieros."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"\u00bfQu\u00e9 aprender\u00e1s en este curso?"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginBottom"] : "0.5em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Fundamentos de finanzas personales: administraci\u00f3n del dinero, ahorro e inversi\u00f3n."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Principios b\u00e1sicos y avanzados de trading y an\u00e1lisis t\u00e9cnico."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
"Identificaci\u00f3n de fraudes y estafas financieras m\u00e1s comunes."
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em" })},
" Herramientas y estrategias para proteger tu capital y tomar decisiones informadas."
,),),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"\u00bfPor qu\u00e9 tomar este curso?"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"En un mundo donde las oportunidades financieras crecen, tambi\u00e9n lo hacen los riesgos. Este curso te proporcionar\u00e1 conocimientos pr\u00e1cticos y casos reales para que puedas invertir con confianza y seguridad."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "30px", ["fontWeight"] : "500", ["color"] : "#ffa824", ["textAlign"] : "left", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["letterSpacing"] : "0.05em", ["maxWidth"] : "600px", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.1", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"Seis Puntos a tener en cuenta"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"1. Organiza tu tiempo"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"El curso est\u00e1 dise\u00f1ado para darte conocimientos desde lo b\u00e1sico hasta lo avanzado, por lo que es importante que asignes tiempo cada semana para aprender, practicar y repasar los contenidos."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"2. Ten una libreta de apuntes"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Aunque sea un curso digital, es fundamental tomar notas de los conceptos clave. Esto te ayudar\u00e1 a recordar informaci\u00f3n importante y a estructurar mejor tu aprendizaje."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"3. S\u00e9 cr\u00edtico con la informaci\u00f3n"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"En internet hay mucha informaci\u00f3n falsa sobre trading y finanzas. Aseg\u00farate de analizar la fuente de cada dato y aplicar un pensamiento cr\u00edtico antes de tomar decisiones financieras."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"4. Mant\u00e9n una mentalidad realista y disciplinada"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"El trading y las finanzas no son un esquema para hacerse rico r\u00e1pidamente. Aqu\u00ed aprender\u00e1s c\u00f3mo tomar decisiones informadas y minimizar riesgos, pero necesitar\u00e1s paciencia, disciplina y pr\u00e1ctica constante."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"5. Prepar\u00e1te para aprender de tus errores"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"En el mundo financiero, cometer errores es parte del proceso. No te frustres si algo no sale bien al principio, lo importante es aprender y mejorar con la experiencia."
,),jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "25px", ["fontWeight"] : "500", ["color"] : "#8ad3ff", ["textAlign"] : "left", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.03em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["padding"] : "10px", ["marginTop"] : "0.5em" })},
"6. Disfruta el proceso y participa activamente"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white", ["wordWrap"] : "break-word", ["lineHeight"] : "1.3", ["letterSpacing"] : "0.1em", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "600px", ["fontWeight"] : "400", ["fontSize"] : "clamp(14px, 2vw, 18px)", ["display"] : "block", ["padding"] : "10px" })},
"Haz preguntas, comparte ideas y aprovecha al m\u00e1ximo este curso. La educaci\u00f3n financiera es una de las herramientas m\u00e1s valiosas para mejorar tu calidad de vida."
,),),),jsx(
RadixThemesHeading,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "35px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "42px" }), ["@media screen and (min-width: 48em)"] : ({ ["fontSize"] : "46px" }), ["@media screen and (min-width: 62em)"] : ({ ["fontSize"] : "55px" }), ["fontWeight"] : "700", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.05em", ["width"] : "100%", ["margin"] : "auto", ["lineHeight"] : "1.2", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["maxWidth"] : "900px", ["marginTop"] : "0.5em" })},
"Muchos Exitos con tu aprendisaje... comencemos \ud83d\ude80\ud83d\udcc8"
,),jsx(Link_49149495207899390339577974416985833977,{},)
,),),),),),),jsx(
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
"Curso Finanzas y Trading"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

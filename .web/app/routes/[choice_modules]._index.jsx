

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import { jsx } from "@emotion/react"



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

function Link_281991700993764501436321777147070541869 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    jsx(
RadixThemesLink,
{css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),href:"#"},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["marginBottom"] : "4em" })},
jsx(
RadixThemesGrid,
{columns:"2",css:({ ["maxWidth"] : "600px", ["alignItems"] : "center", ["justifyItems"] : "center" }),gap:"5"},
jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_1", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 1: Fundamentos de Finanzas personales y el Mercado."
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 2: Inversores y Tipos de Instrumentos."
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_3", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 3: Introduccion al Trading."
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_4", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 4: Fundamentos del An\u00e1lisis T\u00e9cnico y Patrones."
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_5", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 5: Dominando Soportes, Resistencias y Rangos."
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_6", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 6: Tendencias y como identificarlas."
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_7", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 7: Indicadores y Entradas Exitosas"
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_8", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 8: Hablemos de Criptomonedas."
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_9", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 9: Las Estafas en el Trading y las Inversiones"
,),jsx(
RadixThemesButton,
{css:({ ["isExternal"] : false, ["width"] : "100%", ["minHeigth"] : "auto", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["borderRadius"] : "15px", ["marginBottom"] : "10px", ["fontSize"] : "1rem", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "100%", ["backgroundColor"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1.5px solid white", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.3)", ["borderColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "white" }), ["&:media"] : ({ ["(max-width: 768px)"] : ({ ["width"] : "100%", ["fontSize"] : "1rem", ["padding"] : "10px", ["size"] : "1" }), ["(max-width: 430px)"] : ({ ["fontSize"] : "5px", ["padding"] : "8px", ["minHeight"] : "60px", ["size"] : "2rem" }) }) }),onClick:((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_10", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))),radius:"medium",size:"1",variant:"solid"},
" M\u00f3dulo numero 10: Plataformas de Trading y Final del Curso"
,),),),)
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
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["textColor"] : "black", ["width"] : "100%", ["maxWidth"] : "100%", ["background"] : "linear-gradient(180deg, rgba(2,4,45,1) 0%, rgba(136,75,111,1) 100%)", ["display"] : "flex", ["flexDirection"] : "column", ["minHeight"] : "100vh", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "10px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto" })},
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
{css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "white" }), ["transition"] : "color 0.3s ease", ["justifyContent"] : "center", ["width"] : "100%" }),size:"3",weight:"regular"},
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
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontSize"] : "clamp(28px, 5vw, 50px)", ["fontWeight"] : "600", ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "17px", ["letterSpacing"] : "0.07em", ["width"] : "100%", ["maxWidth"] : "600px", ["margin"] : "auto", ["lineHeight"] : "1.1", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["textWrap"] : "balance", ["marginTop"] : "1em" })},
"Secci\u00f3n de M\u00f3dulos"
,),jsx(Link_281991700993764501436321777147070541869,{},)
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%", ["justifyContent"] : "center", ["backgroundColor"] : "transparent", ["display"] : "flex", ["flexWrap"] : "wrap", ["gap"] : "10px" }),direction:"column",gap:"3"},
jsx(Img_164144592572901142842083229647882011920,{},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "white" })},
"since 1999 copyright registered."
,),),),),jsx(
"title",
{},
"M\u00f3dulos"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}



import { Fragment, useCallback, useContext, useEffect, useRef } from "react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { Dropdownmenu__item_281113508146928172296470634782203745354, Dropdownmenu__item_338517215627197619108720637606008039098, Flex_79648591044956947332842049083232657846, Img_164144592572901142842083229647882011920, Img_298512741951362708578143316570517596619, Tooltip_152635404748307709368232623922664606088 } from "$/utils/stateful_components"
import { Link as ReactRouterLink } from "react-router"
import { Menu as LucideMenu } from "lucide-react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, refs } from "$/utils/state"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { jsx } from "@emotion/react"



function Button_34793777933790021165915863573390125941 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_976a9c6f0dfc05e4789ccf13a814390f = useCallback(((_e) => (addEvents([(Event("_download", ({ ["url"] : "/Profesional Maximiliano Gonzalez.pdf", ["filename"] : "Profesional Maximiliano Gonzalez.pdf" }), ({  }))), (Event("_call_function", ({ ["function"] : (() => (refs['__toast']("\u2714\ufe0f Cv Descargado Exitosamente", ({ ["position"] : "top-right", ["style"] : ({ ["color"] : "white", ["fontFamily"] : "Arial", ["weight"] : "bold", ["alignItems"] : "center", ["borderRadius"] : "1px" }) })))), ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["backgroundColor"] : "#2A3C80", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "15px", ["display"] : "flex", ["cursor"] : "pointer", ["alignItem"] : "center", ["justifyContent"] : "center", ["margin"] : "1px", ["&:hover"] : ({ ["backgroundColor"] : "white", ["transition"] : "transform 0.2s ease-in-out", ["color"] : "#2A3C80", ["transform"] : "scale(1.07)" }) }),onClick:on_click_976a9c6f0dfc05e4789ccf13a814390f},
"Descargar CV"
,)
  )
}

function Button_283058782470826559226656565134108488314 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_b48446425b75df925e56732f12d72355 = useCallback(((_e) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["height"] : "100px", ["spacing"] : "5px", ["borderRadius"] : "20px", ["fontSize"] : "30px", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "400px", ["backgroundColor"] : "rgba(255, 255, 255, 0.2)", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["transform"] : "scale(1.10)", ["color"] : "black" }) }),onClick:on_click_b48446425b75df925e56732f12d72355,radius:"medium",size:"3",variant:"solid"},
"Contactame"
,)
  )
}

function Tooltip_313036802900956549389254611943840562898 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_79a5fc91686e4844703971ca5f0f9be1 = useCallback(((_e) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"]("gonzalezmaxi997@gmail.com"))), ["callback"] : null }), ({  }))), (Event("_call_function", ({ ["function"] : (() => (refs['__toast']("\u2714\ufe0f Email Copiado", ({ ["closeButton"] : true, ["duration"] : 3000 })))), ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesTooltip,
{content:"Copiar email",css:({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["borderRadius"] : "50%", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["margin"] : "1px", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["transition"] : "transform 0.2s ease-in-out", ["transform"] : "scale(1.07)" }) }),onClick:on_click_79a5fc91686e4844703971ca5f0f9be1},
jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["borderRadius"] : "50%", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["margin"] : "1px", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["transition"] : "transform 0.2s ease-in-out", ["transform"] : "scale(1.07)" }) })},
jsx("img",{css:({ ["width"] : "35px", ["height"] : "35px" }),src:"/icons/email.png"},)
,),),)
  )
}

function Img_162681571901024381351400602206696998823 () {
  
  const reflex___state____state__mi_web___components___general_components___carousel____carousel_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___carousel____carousel_state)





  
  return (
    jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "700px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:reflex___state____state__mi_web___components___general_components___carousel____carousel_state.images_rx_state_.at(reflex___state____state__mi_web___components___general_components___carousel____carousel_state.index_rx_state_)},)

  )
}

function Img_231238073412267682910896070410367668041 () {
  
  const reflex___state____state__mi_web___components___general_components___carousel____carousel_state2 = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___carousel____carousel_state2)
  const reflex___state____state__mi_web___components___general_components___carousel____carousel_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___carousel____carousel_state)





  
  return (
    jsx("img",{css:({ ["height"] : "auto", ["width"] : "100%", ["maxWidth"] : "700px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["borderRadius"] : "20px", ["cursor"] : "pointer", ["transition"] : "transform 0.2s ease-in-out", ["alignItems"] : "center", ["justify"] : "center", ["objectFit"] : "cover", ["display"] : "block", ["margin"] : "auto", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) }),src:reflex___state____state__mi_web___components___general_components___carousel____carousel_state2.images_rx_state_.at(reflex___state____state__mi_web___components___general_components___carousel____carousel_state.index_rx_state_)},)

  )
}

export default function Component() {
    
  const ref_mis_proyectos = useRef(null); refs["ref_mis_proyectos"] = ref_mis_proyectos;




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["textColor"] : "black", ["width"] : "100%", ["flexDirection"] : "column", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto", ["background"] : "linear-gradient(60deg, rgba(0,65,161,1) 0%, rgba(255,73,73,1) 100%)" })},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["height"] : "40px", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex", ["top"] : "0px", ["alignItems"] : "center" })},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx(Tooltip_152635404748307709368232623922664606088,{},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesTooltip,
{content:"Inicio"},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"regular"},
"Maximiliano Gonzalez"
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
{to:"#mis-proyectos"},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"regular"},
"Proyectos"
,),),),),jsx(
RadixThemesHoverCard.Content,
{css:({ ["padding"] : "2", ["borderRadius"] : "8px", ["border"] : "1.5px solid transparent", ["boxShadow"] : "0px 4px 14px rgba(0, 0, 0, 0.3)", ["transition"] : "opacity 0.3s ease-out, transform 0.3s ease-out", ["background"] : "rgba(250, 250, 250, 0.4)", ["backdropFilter"] : "blur(10px)" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"regular"},
jsx(
ReactRouterLink,
{to:"/financial_page"},
"Curso de Finanzas, Trading y como evitar Estafas."
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
{as:"p",css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"regular"},
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
jsx(Img_298512741951362708578143316570517596619,{},)
,jsx(
RadixThemesLink,
{asChild:true,css:({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["transition"] : "color 0.2s ease", ["justifyContent"] : "center", ["width"] : "100%", ["&:hover"] : ({ ["color"] : "white" }) }),size:"3",weight:"regular"},
"Maximiliano Gonzalez"
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
jsx(Dropdownmenu__item_338517215627197619108720637606008039098,{},)
,jsx(Dropdownmenu__item_281113508146928172296470634782203745354,{},)
,),),),),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["justifyContent"] : "center", ["size"] : "2", ["maxWidth"] : "800px" }),direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{css:({ ["textColor"] : "black", ["width"] : "100%", ["flexDirection"] : "column", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["justifyContent"] : "center", ["size"] : "2", ["marginBottom"] : "10em" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["fontStyle"] : "normal", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "30px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["marginTop"] : "40px", ["textAlign"] : "center", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })},
"Bienvenido,"
,),jsx(
RadixThemesHeading,
{className:"roboto-bold",css:({ ["fontStyle"] : "normal", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "5px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "50px", ["maxWidth"] : "100%", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }), ["color"] : "#ffff99" })},
"Soy Maximiliano Gonzalez"
,),jsx(
RadixThemesHeading,
{css:({ ["fontStyle"] : "normal", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "30px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["textAlign"] : "center", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })},
"Desarrollador Web Junior"
,),jsx(
RadixThemesFlex,
{asChild:true,css:({ ["width"] : "100%", ["maxWidth"] : "400px", ["objectFit"] : "cover", ["margin"] : "auto", ["flexWrap"] : "wrap", ["transition"] : "transform 0.2s ease-in-out", ["backgroundColor"] : "rgba(255, 255, 255, 0.5)", ["padding"] : "20px", ["borderRadius"] : "30px", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)" }) }),gap:"2"},
jsx(
RadixThemesCard,
{css:({ ["justifyContent"] : "center", ["textAlign"] : "center" }),size:"2"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"column",gap:"3"},
jsx(RadixThemesAvatar,{css:({ ["name"] : "Maxi Gonzalez", ["justifyContent"] : "center", ["alignItems"] : "center", ["flexWrap"] : "wrap" }),fallback:"MG",size:"9",src:"/mi-foto-cara.jpg"},)
,),jsx(
RadixThemesBox,
{css:({ ["marginTop"] : "0.5em", ["alignItems"] : "center", ["display"] : "flex", ["spacing"] : "2", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"center",gap:"3"},
jsx(
RadixThemesTooltip,
{content:"Linkedin"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:"_blank",to:"https://www.linkedin.com/in/maxi-gonzalez-479691323"},
jsx(
RadixThemesBox,
{css:({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["borderRadius"] : "50%", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["margin"] : "1px", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["transition"] : "transform 0.2s ease-in-out", ["transform"] : "scale(1.07)" }) })},
jsx("img",{css:({ ["width"] : "35px", ["height"] : "35px" }),src:"/icons/linkedin.svg"},)
,),),),),jsx(
RadixThemesTooltip,
{content:"Github"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:"_blank",to:"https://github.com/gonzalez-max"},
jsx(
RadixThemesBox,
{css:({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["borderRadius"] : "50%", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["margin"] : "1px", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "white", ["transition"] : "transform 0.2s ease-in-out", ["transform"] : "scale(1.07)" }) })},
jsx("img",{css:({ ["width"] : "35px", ["height"] : "35px" }),src:"/icons/github.svg"},)
,),),),),jsx(Tooltip_313036802900956549389254611943840562898,{},)
,jsx(Button_34793777933790021165915863573390125941,{},)
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["maxWidth"] : "400px", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "center", ["width"] : "100%", ["margin"] : "auto", ["color"] : "black" })},
"Soy Maxi Gonz\u00e1lez, Programador en HTML, CSS y Python (Django framework, Reflex), Asesor financiero y agente productor, me encuentro creando un curso gratuito de trading donde encontrar\u00e1s lo m\u00e1s importante para invertir en la bolsa, cripto y c\u00f3mo evitar estafas."
,),),),),),jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["textColor"] : "black", ["width"] : "100%", ["flexDirection"] : "column", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["justifyContent"] : "center", ["size"] : "2", ["marginBottom"] : "4em" }),direction:"column",gap:"3"},
jsx(
RadixThemesBox,
{},
jsx(
RadixThemesHeading,
{className:"roboto-bold",css:({ ["fontStyle"] : "normal", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "5px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "50px", ["maxWidth"] : "100%", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }), ["marginBottom"] : "1em", ["color"] : "#ffff99" })},
" Habilidades"
,),jsx(
RadixThemesFlex,
{css:({ ["alignItems"] : "flex-start", ["justifyContent"] : "center", ["flexWrap"] : "wrap", ["variant"] : "surface", ["cursor"] : "default" }),gap:"2"},
jsx(
RadixThemesTooltip,
{content:"Lenguaje vers\u00e1til para backend, scripting y automatizaci\u00f3n."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"Python"
,),),jsx(
RadixThemesTooltip,
{content:"Lenguaje de marcado para estructurar p\u00e1ginas web."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"HTML"
,),),jsx(
RadixThemesTooltip,
{content:"Lenguaje de estilos para dise\u00f1o y maquetaci\u00f3n web."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"CSS"
,),),jsx(
RadixThemesTooltip,
{content:"Lenguaje para dinamismo en el frontend."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"Javascript (B\u00e1sico)"
,),),jsx(
RadixThemesTooltip,
{content:"Framework de Python para construir aplicaciones web."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"Django (framework de backend)"
,),),jsx(
RadixThemesTooltip,
{content:"Framework fullstack para crear interfaces con Python."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"Reflex (framework frontend y backend)"
,),),jsx(
RadixThemesTooltip,
{content:"Sistema de control de versiones distribuido."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"Git"
,),),jsx(
RadixThemesTooltip,
{content:"Base de datos ligera y sin servidor."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"SQLite"
,),),jsx(
RadixThemesTooltip,
{content:"Sistema de gesti\u00f3n de bases de datos relacional."},
jsx(
RadixThemesCard,
{css:({ ["fontSize"] : "20px", ["transition"] : "transform 0.2s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.08)", ["boxShadow"] : "0px 4px 15px rgba(0, 0, 0, 0.3)", ["background"] : "rgba(255, 255, 255, 0.1)", ["border"] : "1px solid white" }) }),size:"1"},
"MySQL"
,),),),),),),),jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["justify"] : "center", ["paddingTop"] : "60px", ["paddingBottom"] : "60px", ["textColor"] : "black", ["width"] : "100%", ["flexDirection"] : "column", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto", ["marginBottom"] : "4em" }),id:"mis-proyectos",ref:ref_mis_proyectos},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{className:"roboto-bold",css:({ ["fontStyle"] : "normal", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "5px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "50px", ["maxWidth"] : "100%", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }), ["color"] : "#ffff99", ["marginBottom"] : "0.5em" })},
" Proyectos"
,),jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "2em" })},
jsx(
RadixThemesFlex,
{},
jsx(
RadixThemesCard,
{},
jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "0.5em", ["fontStyle"] : "normal", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "30px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["color"] : "white", ["textAlign"] : "left" })},
"Curso de Finanzas, Trading y C\u00f3mo Evitar Estafas"
,),jsx(
RadixThemesHeading,
{css:({ ["fontStyle"] : "normal", ["textAlign"] : "left", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["color"] : "white", ["fontSize"] : "20px", ["fontWeight"] : "300" })},
"Curso educativo enfocado en brindar herramientas financieras b\u00e1sicas, principios de inversi\u00f3n responsable y prevenci\u00f3n de fraudes comunes en el mundo del trading."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "30px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["color"] : "white", ["textAlign"] : "left" })},
" Tecnolog\u00edas utilizadas:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em", ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%" })},
"Python"
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em", ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%" })},
"CSS"
,),jsx(
"li",
{css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%" })},
"Reflex"
,),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "2" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx(Img_162681571901024381351400602206696998823,{},)
,),),jsx(Flex_79648591044956947332842049083232657846,{},)
,),),),),),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{},
jsx(
RadixThemesCard,
{},
jsx(
RadixThemesHeading,
{css:({ ["marginBottom"] : "0.5em", ["fontStyle"] : "normal", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "30px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["color"] : "white", ["textAlign"] : "left" })},
"FinDash - Dashboard Financiero Interactivo"
,),jsx(
RadixThemesHeading,
{css:({ ["fontStyle"] : "normal", ["textAlign"] : "left", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["color"] : "white", ["fontSize"] : "20px", ["fontWeight"] : "300" })},
"Desarrollo de una plataforma web interactiva con Python y Django, que permite a los usuarios consultar informaci\u00f3n financiera de sus empresas favoritas."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["alignItems"] : "center", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "30px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["color"] : "white", ["textAlign"] : "left" })},
" Tecnolog\u00edas utilizadas:"
,),jsx(
"ol",
{css:({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })},
jsx(
"li",
{css:({ ["marginBottom"] : "0.5em", ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%" })},
"Python"
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em", ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%" })},
"Django Framework"
,),jsx(
"li",
{css:({ ["marginBottom"] : "0.5em", ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%" })},
"CSS, HTML"
,),jsx(
"li",
{css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%" })},
"Render"
,),),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "2" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(
Zoom,
{css:({ ["zoomScale"] : 50, ["cursor"] : "zoom-in" })},
jsx(Img_231238073412267682910896070410367668041,{},)
,),),jsx(Flex_79648591044956947332842049083232657846,{},)
,),),),),),),),),),jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["textColor"] : "black", ["width"] : "100%", ["flexDirection"] : "column", ["display"] : "flex", ["flexWrap"] : "wrap", ["justifyContent"] : "center", ["gap"] : "5px", ["alignItems"] : "center", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["margin"] : "0 auto" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["borderRadius"] : "10px", ["alignItems"] : "center", ["justifyContent"] : "center", ["paddingTop"] : "100px", ["paddingBottom"] : "60px", ["size"] : "2", ["marginBottom"] : "2em" }),direction:"column",gap:"3"},
jsx(
RadixThemesHeading,
{className:"roboto-bold",css:({ ["fontStyle"] : "normal", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "5px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "50px", ["maxWidth"] : "100%", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }), ["marginBottom"] : "0.5em", ["color"] : "#ffff99" })},
"Formaci\u00f3n/Educacion"
,),jsx(
RadixThemesBox,
{},
jsx(
RadixThemesFlex,
{},
jsx(
RadixThemesCard,
{},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Fundamentos de AI \u2013 IBM Skillbuild (2025-02)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Introducci\u00f3n al pensamiento computacional, machine learning y aplicaciones pr\u00e1cticas de la IA en distintos sectores."
,),jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Introducci\u00f3n a la Ciencia de Datos \u2013 Cisco Networking Academy (2025-02)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Aprend\u00ed a trabajar con datos, identificar patrones y usar herramientas b\u00e1sicas para an\u00e1lisis estad\u00edstico y visualizaci\u00f3n."
,),jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Excel \u2013 Santander Open Academy (2025-01)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Manejo de funciones, tablas din\u00e1micas y f\u00f3rmulas avanzadas para la gesti\u00f3n y an\u00e1lisis de datos."
,),jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Fundamentos Python 2 \u2013 Cisco Networking Academy (2024-12)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Profundizaci\u00f3n en programaci\u00f3n con Python: estructuras de control, funciones, listas, manejo de errores y buenas pr\u00e1cticas."
,),jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Programacion Lenguaje Python - Santander Open Academy (2024-11)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Fundamentos de desarrollo en Python orientado a resolver problemas reales con l\u00f3gica y estructuras eficientes."
,),jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Curso de Asesoramiento Financiero - UTN Buenos Aires (2024-10)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Capacitaci\u00f3n integral en finanzas personales, productos financieros, inversiones y marco regulatorio."
,),jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Gesti\u00f3n de Proyectos y metodolog\u00eda Agile \u2013 Santander Open Academy (2024-10)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Aprend\u00ed a planificar, organizar y ejecutar proyectos con metodolog\u00edas \u00e1giles como Scrum y Kanban."
,),jsx(
RadixThemesHeading,
{css:({ ["color"] : "#FFFFFF", ["fontStyle"] : "normal", ["alignItems"] : "center", ["textAlign"] : "left", ["padding"] : "10px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "25px", ["fontFamily"] : "roboto", ["--default-font-family"] : "roboto", ["fontWeight"] : "400" })},
"\u2726 Introduccion al Desarrollo Web - Google Act\u00edvate (2022-05)"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontStyle"] : "normal", ["padding"] : "5px", ["letterSpacing"] : "0.01px", ["fontFamily"] : "Roboto", ["--default-font-family"] : "Roboto", ["fontWeight"] : "300", ["fontSize"] : "20px", ["textWrap"] : "normal", ["textAlign"] : "left", ["width"] : "100%", ["marginBottom"] : "0.5em" })},
"Conceptos fundamentales de dise\u00f1o y desarrollo web usando HTML y CSS"
,),),),),),),),jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["marginBottom"] : "4em" })},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["textAlign"] : "center" }),direction:"column",gap:"3"},
jsx(
RadixThemesText,
{as:"p",className:"roboto-bold",css:({ ["fontStyle"] : "normal", ["textAlign"] : "center", ["alignItems"] : "center", ["padding"] : "5px", ["letterSpacing"] : "1px", ["textWrap"] : "normal", ["width"] : "100%", ["margin"] : "auto", ["display"] : "block", ["fontSize"] : "50px", ["maxWidth"] : "100%", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }), ["marginTop"] : "1em" })},
"\u00bfTe interesa trabajar conmigo?"
,),jsx(Button_283058782470826559226656565134108488314,{},)
,),),),),jsx(
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
"Maximiliano Portfolio"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}

/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import NextLink from "next/link"
import { Drawer as VaulDrawer } from "vaul"
import theme from "$/utils/theme.js"
import NextHead from "next/head"



export function Dropdownmenu__item_dac86115f575bf5bb4e63dc75106d651 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_878b59ed445e335ab3312bf6ae65b075 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/financial_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_878b59ed445e335ab3312bf6ae65b075}>

{"Aprender"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Div_0c4c0d922d990c245023c72baae2d5e1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_c179379f847dbcf00ba21f73b0ad1b3d/>
</div>
  )
}

export function Fragment_c179379f847dbcf00ba21f73b0ad1b3d () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Dropdownmenu__item_21c52e4bd8d99a75477658423d582352 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7dc200586272c1bbcd7f51ea48788135 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_7dc200586272c1bbcd7f51ea48788135}>

{"Soporte"}
</RadixThemesDropdownMenu.Item>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<Fragment>

<RadixThemesBox css={({ ["backgroundColor"] : "black" })}>

<RadixThemesBox css={({ ["background"] : " linear-gradient(45deg, var(--tomato-9), var(--plum-9))", ["padding"] : "0.5em", ["width"] : "100%" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center", ["color"] : "white" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["backgroundColor"] : "black", ["padding"] : "5px", ["borderRadius"] : "50px" })}>

<img css={({ ["width"] : "50px", ["height"] : "50px" })} src={"/orbesdmc.png"}/>
</RadixThemesBox>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesHeading css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "purple" }) })} size={"4"} weight={"bold"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/financial_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "purple" }) })} size={"4"} weight={"medium"}>

{"Aprender"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/soporte_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "purple" }) })} size={"4"} weight={"medium"}>

{"Soporte"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"center"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["backgroundColor"] : "transparent", ["padding"] : "5px", ["borderRadius"] : "50px" })}>

<img css={({ ["width"] : "50px", ["height"] : "50px" })} src={"/orbesdmc.png"}/>
</RadixThemesBox>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesHeading css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "purple" }) })} size={"4"} weight={"bold"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<Dropdownmenu__item_dac86115f575bf5bb4e63dc75106d651/>
<Dropdownmenu__item_21c52e4bd8d99a75477658423d582352/>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesBox css={({ ["position"] : "fixed", ["top"] : "80px", ["left"] : "20px", ["zIndex"] : "5" })}>

<VaulDrawer.Root direction={"left"}>

<VaulDrawer.Trigger asChild={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"3"} variant={"solid"}>

{"Modulos Menu"}
</RadixThemesButton>
</VaulDrawer.Trigger>
<VaulDrawer.Overlay css={({ ["position"] : "fixed", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["top"] : "0", ["z_index"] : 50, ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "5" })}/>
<VaulDrawer.Portal>

<RadixThemesTheme css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>

<VaulDrawer.Content css={({ ["left"] : "0", ["right"] : "auto", ["bottom"] : "0", ["top"] : "auto", ["position"] : "fixed", ["z_index"] : 50, ["display"] : "flex", ["height"] : "100%", ["width"] : "20em", ["padding"] : "2em", ["backgroundColor"] : "#ff3333" })}>

<RadixThemesFlex css={({ ["alignItems"] : "start" })} direction={"column"}>

<VaulDrawer.Close asChild={true}>

<RadixThemesBox>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"3"} variant={"solid"}>

{"Cerrar"}
</RadixThemesButton>
</RadixThemesBox>
</VaulDrawer.Close>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_1"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 1"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_2"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 2"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/module_3"} passHref={true}>

<RadixThemesButton css={({ ["width"] : "100%", ["height"] : "30px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "150px", ["backgroundColor"] : "#003366", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#800080", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} radius={"medium"} size={"4"} variant={"solid"}>

{"Modulo 3"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</VaulDrawer.Content>
</RadixThemesTheme>
</VaulDrawer.Portal>
</VaulDrawer.Root>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "600px", ["width"] : "100%", ["marginTop"] : "0.1em", ["marginBottom"] : "0.1em", ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesBox>

<RadixThemesHeading css={({ ["fontSize"] : "50px", ["fontWeight"] : "bold", ["color"] : "white", ["textAlign"] : "center", ["marginBottom"] : "20px", ["padding"] : "10px", ["letterSpacing"] : "1px" })}>

{"M\u00f3dulo 3: Introducci\u00f3n al Trading"}
</RadixThemesHeading>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"1. \u00bfQu\u00e9 es el trading? "}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"El "}
<RadixThemesStrong>

{"trading"}
</RadixThemesStrong>
{" es la compra y venta de activos financieros (acciones, divisas, criptomonedas, materias primas, etc.) con el objetivo de obtener ganancias a partir de los movimientos del mercado. A diferencia de la inversi\u00f3n tradicional, el trading se enfoca en el corto y mediano plazo."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Caracter\u00edsticas del trading:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

{"Se basa en la especulaci\u00f3n de precios."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Puede realizarse en diferentes mercados financieros."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Requiere an\u00e1lisis (t\u00e9cnico y/o fundamental) para tomar decisiones."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{"Tiene distintos niveles de riesgo y estrategias seg\u00fan el plazo."}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Tipos de trading m\u00e1s comunes:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Scalping:"}
</RadixThemesStrong>
{" Operaciones en segundos o minutos. Buscan peque\u00f1as ganancias r\u00e1pidas."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Day Trading"}
</RadixThemesStrong>
{" Compra y venta en el mismo d\u00eda. No se dejan operaciones abiertas de un d\u00eda para otro."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Swing Trading:"}
</RadixThemesStrong>
{" Operaciones que duran d\u00edas o semanas, siguiendo tendencias del mercado."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Position Trading:"}
</RadixThemesStrong>
{" Similar a la inversi\u00f3n, manteniendo activos por meses o incluso a\u00f1os."}
</li>
</ol>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<img css={({ ["height"] : "400px", ["width"] : "100%", ["maxWidth"] : "600px", ["borderRadius"] : "20px" })} src={"/tipos_trading.jpg?refresh=1"}/>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"2. Tipos de an\u00e1lisis en Trading"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"En el mundo del trading existen dos enfoques principales para analizar los mercados financieros: el "}
<RadixThemesStrong>

{"an\u00e1lisis fundamental"}
</RadixThemesStrong>
{" y "}
<RadixThemesStrong>

{"el an\u00e1lisis t\u00e9cnico."}
</RadixThemesStrong>
{" Ambos tienen sus ventajas y desventajas, pero en este curso nos enfocaremos principalmente en el an\u00e1lisis t\u00e9cnico."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<img css={({ ["height"] : "400px", ["width"] : "100%", ["maxWidth"] : "600px", ["borderRadius"] : "20px" })} src={"/fundamental_vs_tecnico.jpg?refresh=1"}/>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"An\u00e1lisis Fundamental"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

{"El"}
<RadixThemesStrong>

{" an\u00e1lisis fundamental"}
</RadixThemesStrong>
{" estudia el valor real de un activo basado en factores econ\u00f3micos, financieros y de mercado. Se usa principalmente en inversiones a largo plazo."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Aspectos clave:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

{" Datos econ\u00f3micos (PIB, inflaci\u00f3n, tasas de inter\u00e9s)."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{" Reportes financieros de empresas (ingresos, ganancias, deuda)."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

{" Noticias y eventos globales que afectan los mercados."}
</li>
</ol>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Ejemplo:"}
</RadixThemesStrong>
{" Un inversor en acciones analiza los reportes de ganancias de una empresa para determinar si es una buena inversi\u00f3n."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Desventaja:"}
</RadixThemesStrong>
{" Requiere un conocimiento profundo de econom\u00eda y los efectos de las noticias pueden tardar en reflejarse en el precio."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"An\u00e1lisis T\u00e9cnico (Enfoque de este curso)"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

{"El "}
<RadixThemesStrong>

{"an\u00e1lisis t\u00e9cnico"}
</RadixThemesStrong>
{" Se basa en el estudio de los gr\u00e1ficos de precios y patrones de comportamiento del mercado. Su premisa es que \u201cel precio lo descuenta todo\u201d y que la historia tiende a repetirse."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Aspectos clave:"}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Acci\u00f3n del precio:"}
</RadixThemesStrong>
{" C\u00f3mo se mueve el precio en el tiempo."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Soportes y resistencias:"}
</RadixThemesStrong>
{" Zonas donde el precio tiende a frenarse."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Tendencias:"}
</RadixThemesStrong>
{" Identificaci\u00f3n de mercados alcistas, bajistas o laterales."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Patrones gr\u00e1ficos y de velas japonesas:"}
</RadixThemesStrong>
{" Figuras que indican posibles movimientos futuros."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{" Indicadores t\u00e9cnicos:"}
</RadixThemesStrong>
{" Herramientas como medias m\u00f3viles, RSI y MACD que ayudan en la toma de decisiones."}
</li>
</ol>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Ejemplo:"}
</RadixThemesStrong>
{" Un trader observa un patr\u00f3n de velas Doji en una resistencia fuerte y decide vender porque indica posible reversi\u00f3n de tendencia."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Ventaja:"}
</RadixThemesStrong>
{" Se basa en datos visuales y permite tomar decisiones r\u00e1pidas para operar en el corto y mediano plazo."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"3. Introducci\u00f3n a las Velas Japonesas"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

{"Las velas japonesas son una de las herramientas m\u00e1s utilizadas en el an\u00e1lisis t\u00e9cnico. Representan la evoluci\u00f3n del precio en un per\u00edodo determinado y ayudan a interpretar el sentimiento del mercado."}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "black" })} src={"/orbesdmc.png?refresh=1"}/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })}>

{"since 1999 copyright registered."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</Fragment>
<NextHead>

<title>

{"Modulo 3"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}

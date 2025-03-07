/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import NextLink from "next/link"
import { Drawer as VaulDrawer } from "vaul"
import theme from "$/utils/theme.js"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_0c4c0d922d990c245023c72baae2d5e1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_c179379f847dbcf00ba21f73b0ad1b3d/>
</div>
  )
}

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

export function Button_9d7249c50b4a2d3dc74bcc9afd423032 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_335361c49b4cbb1cfd6a0646de038ff9 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_3", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "#ff3333", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["backgroundColor"] : "#cc0000" }), ["transition"] : "all 0.3s ease-in-out", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["border"] : "#6366F1" })} onClick={on_click_335361c49b4cbb1cfd6a0646de038ff9}>

{"Siguiente \u2192"}
</RadixThemesButton>
  )
}

export function Button_ea890557131a448bbece2c8dd1c660a0 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7b069812767522a7e2790976d4ef2763 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_1", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "#2d5986", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["backgroundColor"] : "#4080bf" }), ["transition"] : "all 0.3s ease-in-out", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)", ["borderColor"] : "#6366F1" })} onClick={on_click_7b069812767522a7e2790976d4ef2763}>

{"\u2190 Atr\u00e1s"}
</RadixThemesButton>
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

export function Dropdownmenu__item_dac86115f575bf5bb4e63dc75106d651 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_878b59ed445e335ab3312bf6ae65b075 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/financial_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_878b59ed445e335ab3312bf6ae65b075}>

{"Aprender"}
</RadixThemesDropdownMenu.Item>
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

export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
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

<RadixThemesHeading css={({ ["fontSize"] : "50px", ["fontWeight"] : "bold", ["color"] : "white", ["textAlign"] : "center", ["marginBottom"] : "20px", ["marginTop"] : "50px", ["padding"] : "10px", ["letterSpacing"] : "1px" })}>

{"M\u00f3dulo 2: Tipos de Inversores e Instrumentos de inversion"}
</RadixThemesHeading>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"1. Tipos de Inversores y C\u00f3mo Identificar el Tuyo"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"Cuando hablamos de inversiones, no todos los inversores son iguales. Cada persona tiene una tolerancia al riesgo diferente, lo que influye en las decisiones que toma a la hora de invertir."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<img css={({ ["width"] : "100%", ["IMAGEWidth"] : "600px", ["IMAGEHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid gray", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px gray" })} src={"/tipo_inversor.jpg?refresh=1"}/>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"\u00bfQu\u00e9 es un perfil de inversor?"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"Un perfil de inversor es una clasificaci\u00f3n que nos ayuda a entender c\u00f3mo reaccionamos ante los riesgos y qu\u00e9 tipo de inversiones son m\u00e1s adecuadas para nosotros."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"\u00bfPara qu\u00e9 sirve conocer tu perfil?"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"Determinar tu perfil de inversor te ayudar\u00e1 a elegir estrategias alineadas con tu comodidad financiera y objetivos. Por ejemplo, si prefieres estabilidad, quiz\u00e1s no sea conveniente invertir en activos muy vol\u00e1tiles como criptomonedas o acciones de alto riesgo."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Tipos de inversores seg\u00fan su tolerancia al riesgo"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"column"} gap={"3"}>

<Fragment>

<RadixThemesTable.Root css={({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "orange" })}>

<RadixThemesTable.ColumnHeaderCell>

{"Perfil"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Caracter\u00edsticas"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Tipos de inversi\u00f3n recomendados"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<RadixThemesTable.Body>

<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Conservador"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Busca seguridad y estabilidad. Prioriza preservar el capital."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Plazos fijos, bonos de bajo riesgo, FCI de renta fija."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Moderado"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Acepta un riesgo medio para obtener mejor rentabilidad. Diversifica entre activos seguros y de riesgo."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Bonos, acciones de empresas consolidadas, FCI mixtos."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Agresivo"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Est\u00e1 dispuesto a asumir altos riesgos para maximizar ganancias."}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Acciones de crecimiento, criptomonedas, opciones, trading."}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"\u00bfC\u00f3mo saber qu\u00e9 tipo de inversor eres?"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

<RadixThemesStrong>

{"Responde estas preguntas y descubre tu perfil:"}
</RadixThemesStrong>
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

{"\u2714 \u00bfC\u00f3mo reaccionar\u00edas si tu inversi\u00f3n pierde valor en el corto plazo?"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

{"\u2714 \u00bfPrefieres estabilidad o est\u00e1s dispuesto a asumir riesgos por mayor rentabilidad?"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"\u2714 \u00bfCu\u00e1nto tiempo est\u00e1s dispuesto a mantener una inversi\u00f3n?"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"Este an\u00e1lisis ser\u00e1 clave antes de adentrarte en el mundo del trading, ya que te permitir\u00e1 tomar decisiones financieras con mayor seguridad."}
</RadixThemesText>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"2. los Instumentos de inversion"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"La inversi\u00f3n es una de las mejores herramientas para hacer crecer el capital y alcanzar objetivos financieros a mediano y largo plazo. Existen distintos instrumentos de inversi\u00f3n, cada uno con sus propias caracter\u00edsticas, riesgos y niveles de rentabilidad."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{" \u00bfComo elijo el adecuado para mi perfil?"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

{"Para elegir el instrumento adecuado, es importante considerar factores como:"}
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Plazo:"}
</RadixThemesStrong>
{" Se refiere al tiempo durante el cual se mantiene una inversi\u00f3n antes de obtener rendimientos o recuperar el capital. Puede ser "}
<RadixThemesStrong>

{"corto plazo"}
</RadixThemesStrong>
{" (hasta 1 a\u00f1o), "}
<RadixThemesStrong>

{"mediano plazo"}
</RadixThemesStrong>
{" (entre 1 y 5 a\u00f1os) o "}
<RadixThemesStrong>

{"largo plazo"}
</RadixThemesStrong>
{" (m\u00e1s de 5 a\u00f1os)."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Riesgo:"}
</RadixThemesStrong>
{" Representa la posibilidad de perder dinero en una inversi\u00f3n. "}
<RadixThemesStrong>

{"Inversiones seguras"}
</RadixThemesStrong>
{" (como un plazo fijo o bonos gubernamentales) ofrecen menor riesgo pero rendimientos m\u00e1s bajos, mientras que"}
<RadixThemesStrong>

{" inversiones m\u00e1s vol\u00e1tiles"}
</RadixThemesStrong>
{" (como acciones u opciones) pueden generar mayores ganancias, pero tambi\u00e9n mayores p\u00e9rdidas."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Liquidez:"}
</RadixThemesStrong>
{" Indica qu\u00e9 tan r\u00e1pido y f\u00e1cilmente se puede vender una inversi\u00f3n y convertirla en efectivo sin perder valor. Inversiones como acciones o FCI tienen alta liquidez, mientras que inmuebles o bonos a largo plazo suelen tener menor liquidez."}
</li>
<li css={({ ["marginBottom"] : "1em" })}>

<RadixThemesStrong>

{"Rentabilidad esperada:"}
</RadixThemesStrong>
{" Es la ganancia potencial que se puede obtener de una inversi\u00f3n. A mayor riesgo, generalmente se espera una mayor rentabilidad. Por ejemplo, los plazos fijos tienen baja rentabilidad pero son seguros, mientras que las acciones pueden generar altos retornos pero con mayor incertidumbre."}
</li>
</ol>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"3. Diferencias entre Renta Fija y Renta Variable"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"Las inversiones pueden dividirse en renta fija y renta variable, dependiendo de la previsibilidad de sus rendimientos y el nivel de riesgo asociado."}
</RadixThemesText>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Renta fija"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"Son inversiones con un retorno predecible, donde se conoce de antemano la tasa de inter\u00e9s o el pago que se recibir\u00e1. Son m\u00e1s seguras, pero su rentabilidad suele ser menor en comparaci\u00f3n con la renta variable"}
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li>

<RadixThemesStrong>

{"Plazo fijo:"}
</RadixThemesStrong>
{" Dep\u00f3sito de dinero en un banco durante un tiempo determinado, a cambio de un inter\u00e9s fijo al finalizar el per\u00edodo."}
</li>
<li>

<RadixThemesStrong>

{"Bonos:"}
</RadixThemesStrong>
{" Instrumentos de deuda emitidos por gobiernos o empresas. Funcionan como un pr\u00e9stamo en el que el inversionista recibe intereses peri\u00f3dicos hasta el vencimiento."}
</li>
<li>

<RadixThemesStrong>

{"Letras:"}
</RadixThemesStrong>
{" T\u00edtulos de deuda p\u00fablica a corto plazo, emitidos por el Estado para financiarse. Suelen ofrecer rendimientos menores que los bonos, pero con menor riesgo."}
</li>
</ol>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Renta Variable"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"En estas inversiones, la rentabilidad no est\u00e1 garantizada y depende de factores del mercado, lo que las hace m\u00e1s vol\u00e1tiles pero con un potencial de ganancias mayor."}
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li>

<RadixThemesStrong>

{"Acciones:"}
</RadixThemesStrong>
{" Representan una parte de una empresa. Su valor var\u00eda seg\u00fan la oferta y demanda en la bolsa, pudiendo generar ganancias por apreciaci\u00f3n del precio o por dividendos"}
</li>
<li>

<RadixThemesStrong>

{"Commodities:"}
</RadixThemesStrong>
{" Materias primas como oro, petr\u00f3leo o soja, cuyos precios fluct\u00faan en funci\u00f3n de la oferta y demanda global."}
</li>
<li>

<RadixThemesStrong>

{"Opciones:"}
</RadixThemesStrong>
{" Derivados financieros que otorgan el derecho (pero no la obligaci\u00f3n) de comprar o vender un activo en una fecha futura a un precio determinado. Se utilizan para especulaci\u00f3n o cobertura de riesgos."}
</li>
<li>

<RadixThemesStrong>

{"Criptomonedas:"}
</RadixThemesStrong>
{" Activos digitales descentralizados que operan en tecnolog\u00eda blockchain. Su valor es altamente vol\u00e1til y depende del mercado. Mas adelante abundaremos mas sobre ellas."}
</li>
</ol>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"column"} gap={"3"}>

<Fragment>

<RadixThemesTable.Root css={({ ["width"] : "100%", ["padding"] : "5px", ["fontSize"] : "10px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid #ffffff" })} size={"2"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row css={({ ["backgroundColor"] : "orange" })}>

<RadixThemesTable.ColumnHeaderCell>

{"Caracteristica"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Renta Fija"}
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

{"Renta Variable"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<RadixThemesTable.Body>

<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Riesgo"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Bajo"}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Alto"}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Rentabilidad"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Predecible y estable"}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Variable y no asegurada"}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Ejemplos"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Plazo fijo, bonos, letras"}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Acciones, commodities, opciones, criptos"}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
<RadixThemesTable.Row css={({ ["color"] : "white" })}>

<RadixThemesTable.RowHeaderCell>

<RadixThemesStrong>

{"Liquidez"}
</RadixThemesStrong>
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{"Depende del tipo de inversi\u00f3n"}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{"Depende del mercado"}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</Fragment>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"4. Fondos comunes de inversion."}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["marginBottom"] : "1em" })}>

{"Los Fondos Comunes de Inversi\u00f3n (FCI) son herramientas que permiten invertir sin necesidad de conocimientos avanzados. Funcionan agrupando dinero de muchas personas y gestion\u00e1ndolo en distintos activos seg\u00fan el tipo de fondo."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["marginBottom"] : "1em" })} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<img css={({ ["width"] : "100%", ["IMAGEWidth"] : "600px", ["IMAGEHeight"] : "400px", ["backgroundColor"] : "#99003d", ["color"] : "#333333", ["border"] : "1px solid gray", ["borderRadius"] : "20px", ["boxShadow"] : "0px 0px 10px gray" })} src={"/fci_image.jpg?refresh=1"}/>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesHeading css={({ ["fontSize"] : "18px", ["fontWeight"] : "semibold", ["color"] : "#b37400", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Tipos de FCI seg\u00fan sus caracter\u00edsticas:"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["alignItems"] : "center" })}>

{"1."}
<RadixThemesStrong>

{" Seg\u00fan el riesgo:"}
</RadixThemesStrong>
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["alignItems"] : "center", ["marginLeft"] : "1.5rem" })}>

<li>

<RadixThemesStrong>

{"Renta fija:"}
</RadixThemesStrong>
{" Invierte en instrumentos estables como bonos o plazos fijos. Bajo riesgo y menor rentabilidad."}
</li>
<li>

<RadixThemesStrong>

{"Renta variable:"}
</RadixThemesStrong>
{" Invierte en acciones u otros activos de mayor volatilidad. Mayor riesgo y potencial de ganancia."}
</li>
</ol>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1", ["alignItems"] : "center" })}>

{"2.\u200b"}
<RadixThemesStrong>

{" Mercado de capitales:"}
</RadixThemesStrong>
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["alignItems"] : "center", ["marginLeft"] : "1.5rem" })}>

<li>

<RadixThemesStrong>

{"Seg\u00fan la moneda:"}
</RadixThemesStrong>
{" Fondos en pesos."}
</li>
<li>

<RadixThemesStrong>

{"Renta variable:"}
</RadixThemesStrong>
{" Fondos en d\u00f3lares."}
</li>
</ol>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "16px", ["fontWeight"] : "regular", ["color"] : "white", ["textAlign"] : "justify", ["lineHeight"] : "1.5", ["letterSpacing"] : "0.1" })}>

{"3."}
<RadixThemesStrong>

{" Seg\u00fan el mercado en el que invierten:"}
</RadixThemesStrong>
</RadixThemesText>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li>

<RadixThemesStrong>

{"Mercado de dinero:"}
</RadixThemesStrong>
{" Plazos fijos, bonos cortos, inversiones de bajo riesgo."}
</li>
<li>

<RadixThemesStrong>

{"Mercado de capitales:"}
</RadixThemesStrong>
{"  Acciones, bonos de largo plazo, instrumentos financieros m\u00e1s complejos"}
</li>
<li>

<RadixThemesStrong>

{"Mercados internacionales:"}
</RadixThemesStrong>
{" FCI que invierten en activos de otros pa\u00edses. financieros m\u00e1s complejos"}
</li>
</ol>
<RadixThemesSeparator css={({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "0.1em", ["marginBottom"] : "1em" })} size={"4"}/>
<RadixThemesHeading css={({ ["fontSize"] : "25px", ["fontWeight"] : "semibold", ["color"] : "#FFC75F", ["textAlign"] : "left", ["marginBottom"] : "8px" })}>

{"Conclusi\u00f3n del M\u00f3dulo 2: "}
</RadixThemesHeading>
<ol css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["color"] : "white", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem" })}>

<li>

<RadixThemesStrong>

{"Resumen:"}
</RadixThemesStrong>
{" En este m\u00f3dulo exploramos los distintos instrumentos de inversi\u00f3n, diferenciamos entre renta fija y renta variable, entendimos el funcionamiento de los Fondos Comunes de Inversi\u00f3n y la importancia de conocer nuestro perfil de inversor."}
</li>
<li>

<RadixThemesStrong>

{"Aplicaci\u00f3n Pr\u00e1ctica:"}
</RadixThemesStrong>
{" Reflexion\u00e1 sobre tu tolerancia al riesgo y qu\u00e9 tipo de inversor sos. Investig\u00e1 qu\u00e9 instrumentos de inversi\u00f3n se alinean mejor con tus objetivos financieros y empez\u00e1 a evaluar opciones reales en el mercado"}
</li>
<li>

<RadixThemesStrong>

{"Pr\u00f3ximos Pasos:"}
</RadixThemesStrong>
{" En el siguiente m\u00f3dulo, daremos un paso m\u00e1s profundo en el mundo de las inversiones y nos adentraremos en el trading, explorando estrategias, el analisis tecnico, velas doji y herramientas clave para operar en los mercados financieros."}
</li>
</ol>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "20px", ["right"] : "20px" })}>

<Button_9d7249c50b4a2d3dc74bcc9afd423032/>
</RadixThemesBox>
<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "20px", ["left"] : "20px" })}>

<Button_ea890557131a448bbece2c8dd1c660a0/>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "black" })} src={"/orbesdmc.png?refresh=1"}/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })}>

{"since 1999 copyright registered."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Modulo 2"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}

/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { MenuIcon as LucideMenuIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


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

export function Div_0c4c0d922d990c245023c72baae2d5e1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_c179379f847dbcf00ba21f73b0ad1b3d/>
</div>
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

<RadixThemesBox css={({ ["width"] : "100%", ["height"] : "50px", ["backgroundColor"] : "rgba(255, 255, 255, 0.6)", ["padding"] : "1em", ["zIndex"] : "1000", ["position"] : "fixed", ["boxShadow"] : "0 1px 3px rgba(0, 0, 0, 0.1)", ["backdropFilter"] : "blur(10px)", ["justifyContent"] : "center", ["display"] : "flex" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} src={"/orbesdmc.png"}/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["margin"] : "0 auto", ["maxWidth"] : "1200px", ["transition"] : "color 0.3s ease", ["justifyContent"] : "center" })} size={"3"} weight={"regular"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/financial_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["margin"] : "0 auto", ["maxWidth"] : "1200px", ["transition"] : "color 0.3s ease", ["justifyContent"] : "center" })} size={"3"} weight={"regular"}>

{"Proyecto"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/soporte_page"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["margin"] : "0 auto", ["maxWidth"] : "1200px", ["transition"] : "color 0.3s ease", ["justifyContent"] : "center" })} size={"3"} weight={"regular"}>

{"Contacto"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} src={"/orbesdmc.png"}/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/#"} passHref={true}>

<RadixThemesHeading css={({ ["color"] : "black", ["fontFamily"] : "Arial", ["--default-font-family"] : "Arial", ["&:hover"] : ({ ["color"] : "gray" }), ["margin"] : "0 auto", ["maxWidth"] : "1200px", ["transition"] : "color 0.3s ease", ["justifyContent"] : "center" })} size={"3"} weight={"regular"}>

{"Maximiliano Gonzalez"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<RadixThemesDropdownMenu.Item>

{"Proyecto"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item>

{"Contacto"}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "600px", ["width"] : "100%", ["marginTop"] : "6em", ["marginBottom"] : "6em", ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"}>

{"Esta es la pagina de soporte y preguntas"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "black" })} src={"/orbesdmc.png?refresh=1"}/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })}>

{"since 1999 copyright registered."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Soporte"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}

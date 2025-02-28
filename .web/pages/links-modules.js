/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Button as RadixThemesButton, Flex as RadixThemesFlex, Link as RadixThemesLink } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_ab9415b67971e5b3a962f0a1d4c964b9 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesLink css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["maxWidth"] : "600px" })} direction={"column"} gap={"3"}>

<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "300px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_1", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{"Modulo numero 1: Fundamentos de Finanzas personales y Mercado Financiero. "}
</RadixThemesButton>
<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "300px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_2", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{"Modulo numero 2: Tipos de Inversores e Instrumentos de inversion "}
</RadixThemesButton>
<RadixThemesButton css={({ ["isExternal"] : false, ["width"] : "100%", ["height"] : "100px", ["padding"] : "10px", ["spacing"] : "5px", ["marginBottom"] : "10px", ["fontSize"] : "semibold", ["textTransform"] : "capitalize", ["letterSpacing"] : "1px", ["color"] : "white", ["whiteSpace"] : "normal", ["textAlign"] : "center", ["maxWidth"] : "300px", ["backgroundColor"] : "#990033", ["border"] : "2px solid transparent", ["wordWrap"] : "break-word", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["transition"] : "all 0.3s ease-in-out", ["&:hover"] : ({ ["backgroundColor"] : "#4338CA", ["borderColor"] : "#6366F1", ["boxShadow"] : "0px 4px 10px rgba(79, 70, 229, 0.3)" }) })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/module_3", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} radius={"medium"} size={"3"} variant={"solid"}>

{" Modulo numero 3: "}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesLink>
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

export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<Div_0c4c0d922d990c245023c72baae2d5e1/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<Link_ab9415b67971e5b3a962f0a1d4c964b9/>
<NextHead>

<title>

{"MiWeb | Links-Modules"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}

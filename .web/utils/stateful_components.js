/** @jsxImportSource @emotion/react */


import { Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import { useCallback, useContext, useEffect } from "react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"




export function Tooltip_f5e6a55bca12d52bfe1a36c42a21b26c () {
  
  const reflex___state____state__mi_web___components___general_components___nav_bar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___nav_bar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesTooltip content={"No me toques."}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___nav_bar____logo_state.increment_click", ({  }), ({  })))], args, ({  }))))} src={reflex___state____state__mi_web___components___general_components___nav_bar____logo_state.logo_src}/>
</RadixThemesTooltip>
  )
}

export function Img_544b3e2872f3fdafb9f22edff3b2be1f () {
  
  const reflex___state____state__mi_web___components___general_components___nav_bar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___nav_bar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4601de63bb2da6dd2c92964a58538d0d = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___nav_bar____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} onClick={on_click_4601de63bb2da6dd2c92964a58538d0d} src={reflex___state____state__mi_web___components___general_components___nav_bar____logo_state.logo_src}/>
  )
}

export function Dropdownmenu__item_a4b79031cd0a0aaab6615a386df7fd1f () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_878b59ed445e335ab3312bf6ae65b075 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/financial_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_878b59ed445e335ab3312bf6ae65b075}>

{"Proyecto"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Dropdownmenu__item_b0a6762496b52f8de3428cdb0d180c40 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7dc200586272c1bbcd7f51ea48788135 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_7dc200586272c1bbcd7f51ea48788135}>

{"Contacto"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Button_263aa287f2f1f47b300c24caf3a56c35 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9b451bd4b3eb7ecea423971eb88b107a = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___carousel____carousel_state.prev_image", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "rgba(255, 255, 255, 0.2)", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "80px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.6)", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} onClick={on_click_9b451bd4b3eb7ecea423971eb88b107a}>

{"\u276e"}
</RadixThemesButton>
  )
}

export function Button_8734d2a9e137b210513d2b8d13f6e03d () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_5a88ea1aa92091ecd68a1f490f226718 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___carousel____carousel_state.next_image", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "rgba(255, 255, 255, 0.2)", ["color"] : "white", ["padding"] : "10px 20px", ["borderRadius"] : "80px", ["transition"] : "all 0.3s ease-in-out", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "rgba(255, 255, 255, 0.6)", ["color"] : "black", ["boxShadow"] : "0px 4px 10px rgba(0, 0, 0, 1)", ["transform"] : "scale(1.05)" }) })} onClick={on_click_5a88ea1aa92091ecd68a1f490f226718}>

{"\u276f"}
</RadixThemesButton>
  )
}

export function Flex_7a8674e2d6a60a6187373b0eb56ab098 () {
  
  
                useEffect(() => {
                    ((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___carousel____carousel_state.on_load", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"center"} gap={"2"}>

<Button_263aa287f2f1f47b300c24caf3a56c35/>
<Button_8734d2a9e137b210513d2b8d13f6e03d/>
</RadixThemesFlex>
  )
}

export function Img_1dc145e38a4a77bada704003b0548d02 () {
  
  const reflex___state____state__mi_web___components___general_components___footer____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___general_components___footer____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bd5dfb31d3782427c73d08de247645b4 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___general_components___footer____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "50px", ["height"] : "50px", ["backgroundColor"] : "transparent", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={on_click_bd5dfb31d3782427c73d08de247645b4} src={reflex___state____state__mi_web___components___general_components___footer____logo_state.logo_src}/>
  )
}

export function Tooltip_6525ba879cedca0bf213d67734a8d425 () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesTooltip content={"No me toques."}>

<img css={({ ["width"] : "25px", ["height"] : "25px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px", ["cursor"] : "pointer", ["&:hover"] : ({ ["transform"] : "scale(1.10)" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], args, ({  }))))} src={reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src}/>
</RadixThemesTooltip>
  )
}

export function Img_0b82476f3ea7e22d4a7d54d5744b561b () {
  
  const reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state = useContext(StateContexts.reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_f2425d612b9e4477d8552ff062cbbc10 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.mi_web___components___course_components___links_course___course_navbar____logo_state.increment_click", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <img css={({ ["width"] : "30px", ["height"] : "30px", ["borderRadius"] : "50px", ["backgroundColor"] : "transparent", ["padding"] : "0px" })} onClick={on_click_f2425d612b9e4477d8552ff062cbbc10} src={reflex___state____state__mi_web___components___course_components___links_course___course_navbar____logo_state.logo_src}/>
  )
}

export function Dropdownmenu__item_bab67f5e89dd620a8f08fe00942058f5 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_e1787349f6d52d1b453713c488641ba5 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/choice_modules", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_e1787349f6d52d1b453713c488641ba5}>

{"Curso"}
</RadixThemesDropdownMenu.Item>
  )
}

export function Dropdownmenu__item_f5601b3f02dbc23bf8da1fc3302d2108 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_7dc200586272c1bbcd7f51ea48788135 = useCallback(((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/soporte_page", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesDropdownMenu.Item onClick={on_click_7dc200586272c1bbcd7f51ea48788135}>

{"Contactos"}
</RadixThemesDropdownMenu.Item>
  )
}

import reflex as rx
from enum import Enum

#constantes
MAX_WIDTH="600px"
#tamaños para paginas
MAX_WIDTH_PAGES="1200px"
MAX_HEIGHT_PAGES="44px"
#sizes
class Size(Enum):
    NONE="0em"
    MICRO="0.02em"
    TINY="0.05em"
    SMALL="0.1em"
    EXTRA_SMALL="0.25em"
    MEDIUM="0.5em"
    SLIGHTLY_SMALL="0.75em"
    DEFAULT="1em"
    MEDIUM_DEFAULT="1.5em"
    REGULAR="2em"
    LARGE="3em"
    BIG="4em"
    EXTRA_BIG="5em"
    ULTRA="6em"
    HUGE="8em"
    MASSIVE="10em"
    IMAGE_width="600px"
    IMAGE_height="400px"
    
#____________________________CARD_STYLES_____________________________________________#
CARD_STYLES={
        "spacing":"2",
        "max_width": ["90%", "80%", "600px"],
        "as_child":True,
        "flex_wrap":"wrap",
        "transition": "transform 0.2s ease-in-out",
        "background_color": "rgba(255, 255, 255, 0.5)",
        "padding":"20px",
        "height": "auto",
        "width": ["100%", "48%", "31%"],
        "_hover":{
                "transform": "scale(1.08)",
                "box-shadow": "0px 4px 15px rgba(0, 0, 0, 0.3)",
        }
}

#____________________________AVATAR_STYLES___________________________________________#
AVATAR_STYLE={
    "size":"9",
    "justify_content":"center",
    "align_items":"center",
    "flex_wrap":"wrap",
    "transition": "transform 0.2s ease-in-out",
    "&:hover": {
    "transform": "scale(1.10)",
    "box-shadow": "0px 4px 15px rgba(0, 0, 0, 0.3)"},
}


#________________________ NAV BAR STYLES_________________________________________________________#
NAVBAR_STYLES={
    "width":"100%",
    "height":"40px",
    "background_color":"rgba(255, 255, 255, 0.5)", #color trasparente
    "padding": "1em",
    "z_index": "1000",
    "position": "fixed",
    "box_shadow": "0 1px 3px rgba(0, 0, 0, 0.1)", 
    "backdrop_filter": "blur(10px)",#Filtro desenfoque
    "justify_content": "center",
    "display": "flex",
    "top":"0px",
    "align_items":"center",
}

NAVBAR_FONTS_STYLES={
    "size":"3",
    "color":"black", 
    "weight":"regular",
    "font_family": "Arial",
    "transition": "color 0.2s ease",
    "justify_content": "center",
    "width":"100%",
    "_hover":{
        "color": "white",
         },
}
#________________________________________Link_Button__styles_____________________________________________________________#

LINK_BUTTON_STYLES={
        "width":"50px",
        "height":"50px",
        "background_color":"transparent",  
        "border_radius":"50%",
        "display":"flex",
        "align_items":"center",
        "justify_content":"center",
        "margin":"1px",
        "cursor":"pointer",  
        "_hover":{"background_color": "white",
                "transition": "transform 0.2s ease-in-out",
                "transform": "scale(1.07)"},
}





#______________________________________________________________________________________________________________________#
#estilos
BASE_STYLE = {
    rx.button:{
        "width":"100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "display":"block"
    },
    rx.link: {
        "text_decoration":"none",
        "_hover":{}
    }
}

 #global styles
global_styles = {
    "text_color" : "black",
    "width":"100%",
    "justify_content": "center",
    "align_items": "center",
    "display": "flex",
    "flex_direction": "column",
}
#_____________________________#styles pagina principal_____________________________________________________

main_page_styles={
    "width":"100%",
    "align_items": "center",
    "justify_content":"center",
    "margin_bottom":Size.DEFAULT.value
}
text_main_page={
    "title":{
    "font_style":"normal",
    "text_align": "center",
    "padding":"5px",
    "letter_spacing" : "1px",
    #"transition": "transform 0.3s ease-in-out",
    #"&:hover": {
    #"transform": "scale(1.05)"},
    #"cursor":"context-menu"
    },
    
    "body":{
    "font_style":"normal",
    "color": "#1D1D1F",
    "padding" : "1px",
    "letter_spacing" : "0.01px",
    "font_family":"Roboto",
    #"font_size":"17px",
    "max_width":"400px",
    "font_weight":"300",
    "font_size": ["14px", "16px", "18px"]
    #"_hover":{
        #"transition": "transform 0.5s ease-in-out",
        #"transform": "scale(1.10)",
    #}
    }
}

#fuentes de google
"""
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

@keyframes fadeInSlideUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.roboto-bold {
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
}

.roboto-black {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
}

.roboto-regular {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
"""
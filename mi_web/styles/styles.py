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
    
#_____________________________BREAKPOINTS_________________________________________________________#
rx.Config(
    app_name="mi_web",
    theme=rx.theme(
        breakpoints={
            "base": "0em",
            "sm": "43.75em",  # 700px
            "md": "43.75em",     # 768px
            "lg": "64em",
            "xl": "80em",
        }
    )
)

#_____________________________PORTFOLIO IMAGES_______________________________________#
PORTFOLIO_IMAGE_STYLES={
    "width":"100%",
    "max_width":"700px",
    #"max_height":"400px",
    "background_color": "#99003d",
    "color": "#333333",
    "border_radius": "20px", #forma de los bordes
    "cursor": "pointer",  # Indica que la imagen es clickeable
    "transition": "transform 0.2s ease-in-out",  # Suaviza el efecto
    "align_items":"center",
    "justify":"center",
    "object_fit":"cover",  # Evita deformaciones
    "display":"block",  # Asegura que el margin auto funcione
    "margin":"auto",
    "_hover": {
        "background_color": "#800080",  # Azul más oscuro en hover
        "border_color": "#6366F1",  # Bordes visibles en hover
        "box-shadow" : "0px 4px 10px rgba(0, 0, 0, 1)",
        "transform": "scale(1.05)",
    },
}

corousel_button_style={
    "background_color":"rgba(255, 255, 255, 0.2)",
    "color":"white",
    "padding":"10px 20px",
    "border_radius":"80px",
    "transition":"all 0.3s ease-in-out",
    "cursor": "pointer",
    #border= "2px solid #e28cac",# Cambio de color al pasar el mouse
    "_hover":{
        "background_color": "rgba(255, 255, 255, 0.6)",
        "color":"black",
        "box_shadow":"0px 4px 10px rgba(0, 0, 0, 1)",
        "transform": "scale(1.05)",
    },
    
}

form_button_style={
    "background_color":"black",
    "color":"white",
    "padding":"10px 20px",
    "border_radius":"80px",
    "transition":"all 0.3s ease-in-out",
    "align_items":"center",
    "justify_content":"center",
    "cursor":"pointer",
    "width":"100%",
    "margin":"auto",
    #border= "2px solid #e28cac",# Cambio de color al pasar el mouse
    "_hover":{
        "background_color": "rgba(255, 255, 255, 0.6)",
        "color":"black",
        "box_shadow":"0px 4px 10px rgba(0, 0, 0, 1)",
        "transform": "scale(1.05)"
    },
    
}

#____________________________CARD_STYLES_____________________________________________#


CARD_STYLES_DESKTOP = {
    "width": "100%",  # Ocupa el 100% del ancho de la pantalla
    "spacing": "2",
    "max_width": "800px",  # Elimina la restricción de 400px, pero permite ajuste si es necesario
    "min_width": "300px",  # Asegura que el ancho mínimo sea de 300px
    "object_fit": "cover",  # Mantiene la proporción de las imágenes
    "as_child": True,
    "flex_wrap": "wrap",
    "transition": "transform 0.2s ease-in-out",
    "background_color": "rgba(255, 255, 255, 0.5)",
    "border_radius": "30px",
    "_hover": {
        "transform": "scale(1.08)",
        "box_shadow": "0px 4px 15px rgba(0, 0, 0, 0.3)",
    }
}


CARD_STYLES_MOBILE = {
    "width": "100%",  # Ocupa el 100% del ancho de la pantalla
    "spacing": "2",
    "max_width": "420px",  # Elimina la restricción de 400px, pero permite ajuste si es necesario
    "object_fit": "cover",  # Mantiene la proporción de las imágenes
    "as_child": True,
    "flex_wrap": "wrap",
    "transition": "transform 0.2s ease-in-out",
    "background_color": "rgba(255, 255, 255, 0.5)",
    "border_radius": "30px",
    "_hover": {
        "transform": "scale(1.08)",
        "box_shadow": "0px 4px 15px rgba(0, 0, 0, 0.3)",
    }
}


MINI_CARDS_STYLES={
    
    "size":"1",
    "font_size":"20px",
    "transition": "transform 0.2s ease-in-out",
    "_hover":{
                "transform": "scale(1.08)",
                "box-shadow": "0px 4px 15px rgba(0, 0, 0, 0.3)",
                "background": "rgba(255, 255, 255, 0.1)",
                "border":"1px solid white"
        }
    
}

TOOLTIP_STYLES={
    
    "bg":"rgba(255, 255, 255, 0.1)",
    "border_radius":"6px",
    "padding":"8px",
    "font_size":"0.8em",
    "position": "absolute",
     
}


#____________________________AVATAR_STYLES___________________________________________#
AVATAR_STYLE={
    "width": "100%",
    "height": "auto",
    "flex_wrap":"wrap",
    "border_radius": "12px",
    "min_width": "150px",  # Asegura que el avatar no sea demasiado pequeño
    "max_width":"250px",  # Asegura que el avatar no sea demasiado grande
    "align_items": "center",
    "justify_content": "center",

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

#_____________________________________CONTACT BUTTON_____________________________________________________#
CONTACT_BUTTON_STYLE={
    "size": "3",
    "variant": "solid",
    "radius": "medium",
    "width": "100%",  # Ajusta el ancho del botón
    "height": "100px",  # Ajusta la altura del botón
    "spacing" : "5px",
    "border_radius":"20px",
    "font_size": "30px",
    "text_transform": "capitalize", #tipo de texto 
    "letter_spacing" : "1px", #espacio sutil entre letras 
    "color": "white", #color fuente
    "white_space": "normal",  # Permite que el texto se divida en varias líneas
    "text_align": "center",   # Asegura que el texto esté centrado dentro del botón
    "max_width": "400px",     # Ajusta el ancho máximo del botón para evitar que sea demasiado ancho
    "background_color":"rgba(255, 255, 255, 0.2)",#color de fondo 
    "word_wrap": "break-word",  # Ajuste del texto dentro del botón
    "display": "flex",  # Permitir centrado interno
    "align_items": "center",  # Centrar verticalmente el contenido
    "justify_content": "center",  # Centrar horizontalmente el contenido
    "transition": "all 0.3s ease-in-out", #animacion
    "cursor":"pointer",
    "_hover": {
        "background_color":"white", 
        "transform": "scale(1.10)",
        "color":"black",
        
    },
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
    "flex_direction": "column",
    "display": "flex",
    "flex_wrap": "wrap",
    "justify_content": "center", 
    "gap": "5px" ,
    "align_items":"center",
    "padding_x": "20px",
    "margin": "0 auto",
    #"min_height":"100vh",

}
#_____________________________#styles pagina principal_____________________________________________________



text_main_page= {
    "title":{
    "font_style":"normal",
    "text_align": "center",
    "align_items":"center",
    "padding":"5px",
    "letter_spacing" : "1px",
    "text_wrap" :"normal",
    "width":"100%",
    "margin":"auto",
    "display":"block",
    "font_size":"50px",
    "class_name":"roboto-bold",
    "max_width":"100%",
    "transition": "transform 0.5s ease-in-out",
    "_hover":{
        "transform": "scale(1.10)",
    },
},
    
    "subtitle":{
    "font_style":"normal",
    "align_items":"center",
    "padding":"10px",
    "letter_spacing" : "1px",
    "text_wrap" :"normal",
    "width":"100%",
    "margin":"auto",
    "display":"block",
    "font_size":"30px",
    "font_family":"roboto",
    #"font_weight":"300",
    
    
},


"subseccion":{
    "color":"#FFFFFF",
    "font_style":"normal",
    "align_items":"center",
    "text_align": "left",
    "padding":"10px",
    "letter_spacing" : "1px",
    "text_wrap" :"normal",
    "width":"100%",
    "margin":"auto",
    "display":"block",
    "font_size":"25px",
    "font_family":"roboto",
    "font_weight":"400",
    
    
},


"card_body":{
    "font_style":"normal",
    "text_align":"left",
    "align_items":"center",
    "padding":"10px",
    "letter_spacing":"1px",
    "text_wrap":"normal",
    "width":"100%",
    "margin":"auto",
    "display":"block",
    "font_size":"20px",
    "font_weight":"300",
    "max_width":"400px",
    },


    
    
"body":{
    "font_style":"normal",
    "padding" : "5px",
    "letter_spacing" : "0.01px",
    "font_family":"Roboto",
    #"max_width":"400px",
    "font_weight":"300",
    "font_size": "20px",
    "text_wrap" :"normal",
    "text_align": "left",
    "width":"100%",
    #"margin":"auto",
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

#_____________________________media queries_________________________________________________________#

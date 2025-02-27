import reflex as rx
from enum import Enum

#constantes
MAX_WIDTH="600px"

#sizes
class Size(Enum):
    SMALL="0.1em"
    MEDIUM="0.5em"
    DEFAULT="1em"
    BIG="4em"
    ULTRA="6em"


#estilos de botones
BUTTON_STYLE = {
    "size": "3",
    "variant": "solid",
    "radius": "medium",
    "width": "100%",  # Ajusta el ancho del botón
    "height": "100px",  # Ajusta la altura del botón
    "padding" : "10px", # Ajusta el padding interno
    "spacing" : "5px",
    "margin_bottom": "10px", #Espacio entre botones
    "font_size": "semibold", #fuente semi negra 
    "text_transform": "capitalize", #tipo de texto 
    "letter_spacing" : "1px", #espacio sutil entre letras 
    "color": "white", #color fuente
    "white_space": "normal",  # Permite que el texto se divida en varias líneas
    "text_align": "center",   # Asegura que el texto esté centrado dentro del botón
    "max_width": "300px",     # Ajusta el ancho máximo del botón para evitar que sea demasiado ancho
    "background_color": "#990033",  #color de fondo 
    "border": "2px solid transparent",     #bordes 
    "word_wrap": "break-word",  # Ajuste del texto dentro del botón
    "display": "flex",  # Permitir centrado interno
    "align_items": "center",  # Centrar verticalmente el contenido
    "justify_content": "center",  # Centrar horizontalmente el contenido
    "transition": "all 0.3s ease-in-out", #animacion
    "_hover": {
        "background_color": "#4338CA",  # Azul más oscuro en hover
        "border_color": "#6366F1",  # Bordes visibles en hover
        "box_shadow": "0px 4px 10px rgba(79, 70, 229, 0.3)",  # Sombra elegante
    },
}


#drawer styles
DRAWER_BUTTON_STYLE = {
    "size": "3",
    "variant": "solid",
    "radius": "medium",
    "width": "100%",  # Ajusta el ancho del botón
    "height": "30px",  # Ajusta la altura del botón
    "padding" : "10px", # Ajusta el padding interno
    "spacing" : "5px",
    "margin_bottom": "10px", #Espacio entre botones
    "font_size": "semibold", #fuente semi negra 
    "text_transform": "capitalize", #tipo de texto 
    "letter_spacing" : "1px", #espacio sutil entre letras 
    "color": "white", #color fuente
    "white_space": "normal",  # Permite que el texto se divida en varias líneas
    "text_align": "center",   # Asegura que el texto esté centrado dentro del botón
    "max_width": "150px",     # Ajusta el ancho máximo del botón para evitar que sea demasiado ancho
    "background_color": "#990033",  #color de fondo 
    "border": "2px solid transparent",     #bordes 
    "word_wrap": "break-word",  # Ajuste del texto dentro del botón
    "display": "flex",  # Permitir centrado interno
    "align_items": "center",  # Centrar verticalmente el contenido
    "justify_content": "center",  # Centrar horizontalmente el contenido
    "transition": "all 0.3s ease-in-out", #animacion
    "_hover": {
        "background_color": "#4338CA",  # Azul más oscuro en hover
        "border_color": "#6366F1",  # Bordes visibles en hover
        "box_shadow": "0px 4px 10px rgba(79, 70, 229, 0.3)",  # Sombra elegante
    },
}

#CONTENT DRAWER STYLES
DRAWER_CONTENT_STYLE = {
    "size": "4",
    "variant": "solid",
    "radius": "medium",
    "width": "100%",  # Ajusta el ancho del botón
    "height": "30px",  # Ajusta la altura del botón
    "padding" : "10px", # Ajusta el padding interno
    "spacing" : "5px",
    "margin_bottom": "10px", #Espacio entre botones
    "font_size": "semibold", #fuente semi negra 
    "text_transform": "capitalize", #tipo de texto 
    "letter_spacing" : "1px", #espacio sutil entre letras 
    "color": "white", #color fuente
    "white_space": "normal",  # Permite que el texto se divida en varias líneas
    "text_align": "center",   # Asegura que el texto esté centrado dentro del botón
    "max_width": "150px",     # Ajusta el ancho máximo del botón para evitar que sea demasiado ancho
    "background_color": "#003366",  #color de fondo 
    "border": "2px solid transparent",     #bordes 
    "word_wrap": "break-word",  # Ajuste del texto dentro del botón
    "display": "flex",  # Permitir centrado interno
    "align_items": "center",  # Centrar verticalmente el contenido
    "justify_content": "center",  # Centrar horizontalmente el contenido
    "transition": "all 0.3s ease-in-out", #animacion
    "_hover": {
        "background_color": "#800080",  # Azul más oscuro en hover
        "border_color": "#6366F1",  # Bordes visibles en hover
        "box_shadow": "0px 4px 10px rgba(79, 70, 229, 0.3)",  # Sombra elegante
    },
}

TABLES_STYLES={
    "background_color": "#99003d",
    "color": "#333333",
    "border": "1px solid #ffffff",}
                    
    








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

button_title_style = dict(
    font_size=Size.DEFAULT.value
)

button_body_style = dict(
    font_size=Size.MEDIUM.value
)

title_style = dict(
    size="md",
    width="100%",
    padding_top=Size.DEFAULT.value
)
#text styles
global_styles = {
    "text_color_w": "white",
    "background_color_b": "black",
}

font_style = {
    "font_family": "Comic Sans MS",
    "font_size": "16px",
}

# Diccionario de estilos para textos en Reflex
TEXT_STYLE = {
    "title": {  # Para títulos principales
        "font_size": "50px",
        "font_weight": "bold",
        "color": "white",
        "text_align": "center",
        "margin_bottom": "20px",
        "padding" : "10px",
        "letter_spacing" : "1px",
    },
    "subtitle": {  # Para subtítulos o encabezados secundarios
        "font_size": "25px",
        "font_weight": "semibold",
        "color": "#FFC75F",
        "text_align": "left",
        "margin_bottom": "8px",
    },
    
    "subseccion": {  # Para subtítulos o encabezados secundarios
        "font_size": "18px",
        "font_weight": "semibold",
        "color": "#b37400",
        "text_align": "left",
        "margin_bottom": "8px",
    },
    
    "body": {  # Para párrafos o contenido de texto
        "font_size": "16px",
        "font_weight": "regular",
        "color": "white",
        "text_align": "justify",
        "line_height": "1.5",
        "letter_spacing" : "0.1",
    },
    "highlight": {  # Texto resaltado
        "font_size": "16px",
        "font_weight": "bold",
        "color": "red",
        "background_color": "yellow",
        "padding": "2px 5px",
        "border_radius": "5px",
    },
    "link": {  # Estilos para enlaces
        "font_size": "16px",
        "color": "blue",
        "text_decoration": "underline",
        "_hover": {
            "color": "darkblue",
            "text_decoration": "none",
        },
    },
}

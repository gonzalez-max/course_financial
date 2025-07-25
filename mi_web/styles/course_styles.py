
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


#____________________________________CURSO__STYLES______________________________________________________________________-#

COURSE_STYLES = {
    "background" : "linear-gradient(180deg, rgba(74,34,98,1) 0%, rgba(71,85,139,1) 52%, rgba(11,103,93,1) 100%)",
    "text_color" : "black",
    "width":"100%",
    "max_width":"100%",
    "display": "flex",
    "flex_direction": "column",
    "min_height":"100vh",
    #"justify_content": "space-between",
    "flex_wrap": "wrap",
    "justify_content": "center", 
    "gap": "10px" ,
    "align_items":"center",
    "margin": "0 auto"
    
}
#______________________CHOICE_MODULES_STYLE______________________________________________#
STYLES_CHOICE_MODULES={
   "text_color" : "black",
    "width":"100%",
    "background" : "linear-gradient(180deg, rgba(2,4,45,1) 0%, rgba(136,75,111,1) 100%)",
    "max_width":"100%",
    "display": "flex",
    "flex_direction": "column",
    "min_height":"100vh",
    #"justify_content": "space-between",
    "flex_wrap": "wrap",
    "justify_content": "center", 
    "gap": "10px" ,
    "align_items":"center",
    "margin": "0 auto"
}

BUTTON_COURSES_STYLES={ 
    "size": "1",
    "variant": "solid",
    "radius": "medium",
    "width": "100%", 
    "min_height":"auto",# Ajusta el ancho del botón
    "height": "100px",  # Ajusta la altura del botón
    "padding" : "10px", # Ajusta el padding interno
    "spacing" : "5px",
    "border_radius":"15px",
    "margin_bottom": "10px", #Espacio entre botones
    "font_size": "1rem",
    "text_transform": "capitalize", #tipo de texto 
    "letter_spacing" : "1px", #espacio sutil entre letras 
    "color": "white", #color fuente
    "white_space": "normal",  # Permite que el texto se divida en varias líneas
    "text_align": "center",   # Asegura que el texto esté centrado dentro del botón
    "max_width": "100%",     # Ajusta el ancho máximo del botón para evitar que sea demasiado ancho
    "background_color":"rgba(255, 255, 255, 0.1)",#color de fondo 
    "border": "1.5px solid white",     #bordes 
    "word_wrap": "break-word",  # Ajuste del texto dentro del botón
    "display": "flex",  # Permitir centrado interno
    "align_items": "center",  # Centrar verticalmente el contenido
    "justify_content": "center",# Centrar horizontalmente el contenido
    "overflow":"hidden",
    "transition": "all 0.3s ease-in-out", #animacion
    "cursor":"pointer",
    "text_decoration": "none",  # Elimina el subrayado del texto
    "_hover": {
        "background_color":"rgba(255, 255, 255, 0.3)",  # Azul más oscuro en hover
        "border_color": "white",  # Bordes visibles en hover
        "transform": "scale(1.10)",
        "color":"white",
        "text_decoration": "none",  # Elimina el subrayado del texto
        
    },
    
        
    
}



#_____________________BUTTONS_STYLES________________________________________________________#
#estilos de botones
BUTTON_STYLE = { 
    "size": "3",
    "variant": "solid",
    "radius": "medium",
    "width": "100%",  # Ajusta el ancho del botón
    "height": "100px",  # Ajusta la altura del botón
    "padding" : "30px", # Ajusta el padding interno
    "spacing" : "5px",
    "border_radius":"50px",
    "font_size": "20px",
    "text_transform": "capitalize", #tipo de texto 
    "letter_spacing" : "1px", #espacio sutil entre letras 
    "color": "white", #color fuente
    "white_space": "normal",  # Permite que el texto se divida en varias líneas
    "text_align": "center",   # Asegura que el texto esté centrado dentro del botón
    "max_width": "400px",     # Ajusta el ancho máximo del botón para evitar que sea demasiado ancho
    "background_color":"rgba(0,0,0,0.9)",#color de fondo 
    "border": "1.5px solid black",     #bordes 
    "word_wrap": "break-word",  # Ajuste del texto dentro del botón
    "display": "flex",  # Permitir centrado interno
    "align_items": "center",  # Centrar verticalmente el contenido
    "justify_content": "center",  # Centrar horizontalmente el contenido
    "transition": "all 0.3s ease-in-out", #animacion
    "cursor":"pointer",
    "text_decoration": "none",  # Elimina el subrayado del texto
    "_hover": {
        "background_color":"white",  
        "border_color": "black",  # Bordes visibles en hover
        "transform": "scale(1.10)",
        "color":"black",
        "text_decoration": "none",  # Elimina el subrayado del texto
    },
}


#________________________ NAV BAR STYLES_________________________________________________________#
COURSE_NAVBAR_STYLES={
    "width":"100%",
    "height":"40px",
    "max_width":"100%",
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

COURSE_NAVBAR_FONTS={
    "size":"3",
    "color":"black", 
    "weight":"medium",
    "font_family": "montserrat",
    "transition": "color 0.2s ease",
    "text_align": "left",
    "align_items": "center",
    "justify_content": "center",
    "width":"100%",
    "_hover":{
        "color": "white",
         },
}
#________________________FOOTER STYLES_________________________________________________________#

#__________________drawer styles________________________#
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


#_____________________TABLAS STYLES____________________________________#
TABLES_STYLES={
    "background_color": "#002961",
    "overflow_x":"auto",
    "box_sizing": "border-box",
    "color": "#3d5c5c",
    "border": "1px solid #ffffff",
}

                 

#________________IMAGEN STYLES_________________________________________#
IMAGE_STYLES={
    "width":"100%",
    "max_width":"600px",
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
    "box_sizing": "border-box",
    "_hover": {
        "background_color": "#800080",  # Azul más oscuro en hover
        "border_color": "#6366F1",  # Bordes visibles en hover
        "box-shadow" : "0px 4px 10px rgba(0, 0, 0, 1)",
        "transform": "scale(1.05)",
    },
}


#__________________Diccionario de estilos para textos en Reflex_________________#
TEXT_STYLE = {
    "title": {  # Para títulos principales
        "font_size": ["35px", "42px", "46px", "55px"],  # Se adapta dinámicamente al tamaño de pantalla
        "font_weight": "600",
        "color": "white",
        "text_align": "center",
        "align_items":"center",
        "padding": "17px",
        "letter_spacing": "0.07em",  # Ajuste fino para mejor legibilidad
        "width": "100%",
        "max_width":"600px",
        "margin": "auto",  # Centra el título dentro de su contenedor
        "line_height": "1.1",  # Mejora la legibilidad en varias líneas
        "font_family":"Roboto",
        "text_wrap":"balance"
    },
    "subtitle": {  # Para subtítulos o encabezados secundarios
        "font_size": "30px",
        "font_weight": "500",
        "color": "#ffa824",
        "text_align": "left",
        "font_family": "Roboto",
        "letter_spacing": "0.05em",  # Ajuste fino para mejor legibilidad
        "max_width": "600px", # Evita que el título sea demasiado ancho en pantallas pequeñas
        "width":"100%",
        "margin": "auto",  # Centra el título dentro de su contenedor
        "line_height": "1.1", 
    },
    
    "subseccion": {  # Para subtítulos o encabezados secundarios
        "font_size": "25px",
        "font_weight": "500",
        "color": "#8ad3ff",
        "text_align": "left",
        "line_height": "1.3",
        "letter_spacing": "0.03em",
        "font_family": "Roboto",
        
    },
    
    "body": {  # Para párrafos o contenido de texto
        
        "color": "white",
        "word-wrap": "break-word",
        "line_height": "1.3",
        "letter_spacing" : "0.1em",
        "font_family": "Roboto",
        "max_width":"600px",
        "font_weight":"400",
        "font_size": "clamp(14px, 2vw, 18px)",
        "display": "block",
        
    },
    
    "mini_body": {  # Para párrafos o contenido de texto
        
        "color": "white",
        "word-wrap": "break-word",
        "line_height": "1.3",
        "letter_spacing" : "0.1em",
        "font_family": "Helvetica",
        "max_width":"600px",
        "font_weight":"200",
        "font_size": "17px",
        "display": "block",
        
    },
    
    "highlight": {  # Texto resaltado
        "font_size": "16px",
        "font_weight": "semibold",
        "font_family": "Helvetica",
        "color": "white",
        "background_color": "#c14d00",
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


#global styles
global_styles = {
    "text_color" : "black",
    "width":"100%",
    "max_width":"100%",
    "display": "flex",
    "flex_direction": "column",
    "min_height":"100vh",
    #"justify_content": "space-between",
    "flex_wrap": "wrap",
    "justify_content": "center", 
    "gap": "10px" ,
    "align_items":"center",
    "margin": "0 auto"
   

}

#____________________________________boton soporte____________-_________________________#
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



























MOBILE_TABLET_STYLES = {
    "body": {
        "font_size": "clamp(12px, 4vw, 16px)",  # Se adapta mejor a pantallas pequeñas
        "max_width": "95%",  # Usa casi todo el ancho disponible en móviles
        "padding": "15px",  # Aumenta el padding para mejor lectura
        "line_height": "1.7",  # Facilita la lectura en dispositivos pequeños
    },
    
    "container": {
        "display": "flex",
        "flex_direction": "column",
        "align_items": "center",
        "justify_content": "center",
        "padding": "10px",
        "width": "100%",
    },
    
    "header": {
        "font_size": "clamp(16px, 5vw, 24px)",  # Ajusta títulos para pantallas pequeñas
        "text_align": "center",
        "padding": "10px 0",
    },

    "tables": {
        "width": "100%",
        "overflow_x": "auto",  # Permite hacer scroll horizontal en tablas grandes
        "display": "block",
        "white_space": "nowrap",
    },
    
    "buttons": {
        "width": "90%",  # Los botones ocupan más espacio en pantallas táctiles
        "padding": "12px",
        "font_size": "clamp(14px, 4vw, 18px)",
        "border_radius": "8px",  # Bordes redondeados para mejor apariencia en móviles
    },

    "images": {
        "max_width": "100%",
        "height": "auto",
        "border_radius": "10px",
    },
}

#____________________________________CURSO__STYLES______________________________________________________________________-#

COURSE_STYLES = {
    "text_color" : "black",
    "width":"100%",
    "background" : "linear-gradient(180deg, rgba(0,67,113,1) 0%, rgba(222,117,179,1) 100%)",
    "display": "flex",
    "flex_direction": "column",
    "min_height":"100vh",
    "justify_content": "space-between",
    
}

#estilos de botones
BUTTON_STYLE = { 
    "size": "3",
    "variant": "solid",
    "radius": "medium",
    "width": "100%",  # Ajusta el ancho del botón
    "height": "100px",  # Ajusta la altura del botón
    "padding" : "10px", # Ajusta el padding interno
    "spacing" : "5px",
    "border_radius":"20px",
    "margin_bottom": "10px", #Espacio entre botones
    "font_size": "semibold", #fuente semi negra 
    "text_transform": "capitalize", #tipo de texto 
    "letter_spacing" : "1px", #espacio sutil entre letras 
    "color": "white", #color fuente
    "white_space": "normal",  # Permite que el texto se divida en varias líneas
    "text_align": "center",   # Asegura que el texto esté centrado dentro del botón
    "max_width": "400px",     # Ajusta el ancho máximo del botón para evitar que sea demasiado ancho
    "background_color": "#990033",  #color de fondo 
    "border": "2px solid transparent",     #bordes 
    "word_wrap": "break-word",  # Ajuste del texto dentro del botón
    "display": "flex",  # Permitir centrado interno
    "align_items": "center",  # Centrar verticalmente el contenido
    "justify_content": "center",  # Centrar horizontalmente el contenido
    "transition": "all 0.3s ease-in-out", #animacion
    "cursor":"pointer",
    "_hover": {
        "background_color": "#4338CA",  # Azul más oscuro en hover
        "border_color": "#6366F1",  # Bordes visibles en hover
        "box_shadow": "0px 4px 10px rgba(79, 70, 229, 0.3)",  # Sombra elegante
        "transform": "scale(1.10)"
    },
}
#________________________ NAV BAR STYLES_________________________________________________________#
COURSE_NAVBAR_STYLES={
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
    "align_items":"center"
}

COURSE_NAVBAR_FONTS={
    "size":"3",
    "color":"black", 
    "weight":"regular",
    "font_family": "Arial",
    "_hover":
        {"color": "gray"},
    "transition": "color 0.3s ease",
    "justify_content": "center",
    "width":"100%"
}


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
    "background_color": "#99003d",
    "color": "#333333",
    "border": "1px solid #ffffff",}
                    

#________________IMAGEN STYLES_________________________________________#
IMAGE_STYLES={
    "width":"700px",
    "max_width":"100%",
    "max_height":"400px",
    #"height":"auto",  # Se ajusta automáticamente
    "object_fit":"cover",  # Evita deformaciones
    "background_color": "#99003d",
    "color": "#333333",
    "border": "1px solid white", #color de bordes normales
    "border_radius": "20px", #forma de los bordes
    "box_shadow":"0px 0px 10px black",#efecto a los bordes
    "cursor": "pointer",  # Indica que la imagen es clickeable
    "transition": "transform 0.2s ease-in-out",  # Suaviza el efecto
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
        "font_size": "clamp(28px, 5vw, 50px)",  # Se adapta dinámicamente al tamaño de pantalla
        "font_weight": "bold",
        "color": "white",
        "text_align": "center",
        "padding": "10px",
        "letter_spacing": "0.05em",  # Ajuste fino para mejor legibilidad
        "max_width": "90%",  # Evita que el título sea demasiado ancho en pantallas pequeñas
        "margin": "auto",  # Centra el título dentro de su contenedor
        "line_height": "1.2",  # Mejora la legibilidad en varias líneas
        "word_wrap": "break-word",
    },
    "subtitle": {  # Para subtítulos o encabezados secundarios
        "font_size": "25px",
        "font_weight": "semibold",
        "color": "#FFC75F",
        "text_align": "left",
        "margin_bottom": "10px",
        "font_family": "Helvetica"
    },
    
    "subseccion": {  # Para subtítulos o encabezados secundarios
        "font_size": "18px",
        "font_weight": "semibold",
        "color": "#b37400",
        "text_align": "left",
    },
    
    "body": {  # Para párrafos o contenido de texto
        
        "color": "white",
        "align_text":"center",
        "word-wrap": "break-word",
        "line_height": "1.5",
        "letter_spacing" : "0.1em",
        "font_family": "Helvetica",
        "max_width":"600px",
        "font_weight":"normal",
        "font_size": "clamp(14px, 1.2vw, 18px)",
        "padding": "10px",
        "display": "block",
        
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
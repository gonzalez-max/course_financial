#____________________________________CURSO__STYLES______________________________________________________________________-#

COURSE_STYLES = {
    "text_color" : "black",
    "width":"100%",
    "background" : "linear-gradient(180deg, rgba(55,49,69,1) 0%, rgba(0,0,0,1) 100%)",
    "flex_direction": "column",
    "min_height":"100vh",
    "display": "flex",
    "flex_wrap": "wrap",
    "justify_content": "center", 
    "gap": "5px" ,
    "align_items":"center",
    "padding_x": "20px",
    "margin": "0 auto",
    "max_width" :"100%"
    
}
#______________________CHOICE_MODULES_STYLE______________________________________________#
STYLES_CHOICE_MODULES={
   "text_color" : "black",
    "width":"100%",
    "max_width":"100%",
    "background" : "linear-gradient(180deg, rgba(2,4,45,1) 0%, rgba(254,138,206,1) 100%)",
    "display": "flex",
    "flex_direction": "column",
    "min_height":"100vh",
    #"justify_content": "space-between",
    "flex_wrap": "wrap",
    "justify_content": "center", 
    "gap": "10px" ,
    "align_items":"center",
    "padding_x": "20px",
    "margin": "0 auto"
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
    "margin_bottom": "10px", #Espacio entre botones
    "font_size": "500",
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
    "_hover": {
        "background_color":"rgba(0,0,0,0.7)",  
        "border_color": "black",  # Bordes visibles en hover
        "transform": "scale(1.10)",
        "color":"white",
        
    },
}

#botones de la seccion choice_modules o links modules
BUTTON_COURSES_STYLES={ 
    "size": "1",
    "variant": "solid",
    "radius": "medium",
    "width": "100%", 
    "min_heigth":"auto",# Ajusta el ancho del botón
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
    "_hover": {
        "background_color":"rgba(255, 255, 255, 0.3)",  # Azul más oscuro en hover
        "border_color": "white",  # Bordes visibles en hover
        "transform": "scale(1.10)",
        "color":"white",
        
    },
     # Estilos responsivos (no se si funcionan)
    "_media": {
        "(max-width: 768px)": {  # Para tablets y móviles
            "width": "100%",  # Usa todo el ancho disponible
            "font_size": "1rem",  # Reduce un poco el tamaño de la fuente
            "padding": "10px",
            "size":"1",  # Menos padding en móviles
        },
        "(max-width: 430px)": {  # Para móviles pequeños
            "font_size": "5px",
            "padding": "8px",
            "min_height": "60px",
            "size":"2rem"
        }
    }
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
    "align_items":"center"
}

COURSE_NAVBAR_FONTS={
    "size":"3",
    "color":"black", 
    "weight":"regular",
    "font_family": "Arial",
    "_hover":
        {"color": "white"},
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
    "max_height":"400px",
    #"height":"auto",  # Se ajusta automáticamente
    "object_fit":"cover",  # Evita deformaciones
    "background_color": "#99003d",
    "color": "#333333",
    "border": "1px solid white", #color de bordes normales
    "border_radius": "20px", #forma de los bordes
    "cursor": "pointer",  # Indica que la imagen es clickeable
    "transition": "transform 0.2s ease-in-out",  # Suaviza el efecto
    #"margin_top":"1em",
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
        "font_weight": "600",
        "color": "white",
        "text_align": "center",
        "align_items":"center",
        "padding": "17px",
        "letter_spacing": "0.07em",  # Ajuste fino para mejor legibilidad
        "width": "100%",
        "max_width":"600px",
        "margin": "auto",  # Centra el título dentro de su contenedor
        "line_height": "1.2",  # Mejora la legibilidad en varias líneas
        "font_family":"Roboto",
    },
    "subtitle": {  # Para subtítulos o encabezados secundarios
        "font_size": "25px",
        "font_weight": "400",
        "color": "#ffc246",
        "text_align": "left",
        "font_family": "Roboto",
        "letter_spacing": "0.05em",  # Ajuste fino para mejor legibilidad
        "max_width": "600px", # Evita que el título sea demasiado ancho en pantallas pequeñas
        "width":"100%",
        "margin": "auto",  # Centra el título dentro de su contenedor
        "line_height": "1.2", 
    },
    
    "subseccion": {  # Para subtítulos o encabezados secundarios
        "font_size": "18px",
        "font_weight": "semibold",
        "color": "#b67a00",
        "text_align": "left",
    },
    
    "body": {  # Para párrafos o contenido de texto
        
        "color": "white",
        #"text_align":"center",
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

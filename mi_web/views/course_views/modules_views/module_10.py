import reflex as rx
from mi_web.components.general_components.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.general_components.next_button import next_button
from mi_web.components.general_components.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.components.course_components.module10_components.modulo10_imagenes import gif_celebration




def module_10() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(

                        rx.heading("Módulo 10: Plataformas de Trading y Final del Curso",
                                   **c_styles.TEXT_STYLE["title"],
                                   margin_top="35px",
                                   margin_bottom=Size.MEDIUM.value
                                   ),

                        rx.heading(" Ultimos pasos hacia el exito",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        #gif 
                        rx.box(
                               gif_celebration(),
                               margin_bottom=Size.DEFAULT.value),
             
                        rx.box(
                            rx.vstack(
                                rx.text("A lo largo de estos nueve módulos, aprendiste desde"
                                        " lo más básico de las finanzas hasta cómo operar en los mercados."
                                        " Exploraste los fundamentos del análisis técnico, dominaste conceptos "
                                        "como soportes, resistencias y rangos, identificaste líneas de tendencia"
                                        " y te familiarizaste con indicadores clave.También descubriste el mundo de "
                                        "las criptomonedas y cómo detectar estafas financieras.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text("Ahora bien... la gran pregunta es:",rx.text.strong(" ¿Dónde puedo aplicar todo lo aprendido?"),
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text("En este último módulo, vamos a responder justamente eso. Te vamos a mostrar las "
                                        "plataformas que recomendamos para invertir, comparar sus ventajas y desventajas, "
                                        "y ayudarte a elegir cuál se adapta mejor a tu estilo como trader o inversor.",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.DEFAULT.value),
                                
                                rx.heading("1. Plataformas para graficar y hacer análisis técnico",
                                           **c_styles.TEXT_STYLE["subtitle"],
                                           margin_bottom=Size.DEFAULT.value),
                                
                                rx.heading(" TradingView",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("⚪​ Plataforma mas popular para análisis técnico del mercado.",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪​ Interfaz amigable y moderna",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪​ Gran comunidad y muchos scripts personalizados",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪​ Posibilidad de usar indicadores, alertas y múltiples gráficos",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.DEFAULT.value),
                                
                                rx.heading("2. Brokers para operar en Argentina",
                                           **c_styles.TEXT_STYLE["subtitle"],
                                           ),
                                rx.text("Son las plataformas locales donde podés comprar acciones, bonos, CEDEARs, "
                                        "fondos comunes, etc.",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.DEFAULT.value),
                                
                                rx.heading(" IOL (InvertirOnline)",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("⚪​ Muy conocida y confiable",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪​ Interfaz clara, simple",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🟢​ Pros: Ideal para: inversores principiantes en Argentina",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🔴​ Contra: Pocas herramientas gráficas",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.MEDIUM.value),
                                
                                rx.heading(" BullMarket",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("⚪ Tiene cuenta comitente y muchas opciones de inversión",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪ Buen soporte y recursos educativos",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🟢​ Pros: Ideal para quienes buscan variedad en Argentina",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🔴​ Contras: No tan intuitiva como otras",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.MEDIUM.value),
                                
                                rx.heading("Cocos Capital",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("⚪ Plataforma joven y dinámica",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪ Fuerte foco en la comunidad",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🟢​ Pros: Ideal para inversores jóvenes y tecnológicos",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🔴 Contras: Menor trayectoria que otros brokers",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.DEFAULT.value),
                                
                                rx.heading("3. Exchanges para operar criptomonedas y más",
                                           **c_styles.TEXT_STYLE["subtitle"]),
                                rx.text("Son plataformas donde podés comprar, vender e intercambiar "
                                        "criptomonedas.",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.DEFAULT.value),
                                
                                rx.heading("Binance",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("⚪ Gran variedad de criptos y derivados",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪ Herramientas gráficas integradas",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🟢​ Pros: Ideal para cripto-traders intermedios y avanzados",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🔴​ Contras: No es ideal para principiantes",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.MEDIUM.value),
                                
                                rx.heading("Etoro",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("⚪ Red social de trading (ver qué hacen otros)",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪ Función de CopyTrading",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🟢​ Pros: Ideal para principiantes y curiosos",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🔴​ Contras: Comisiones más altas que otras",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.MEDIUM.value),
                                
                                rx.heading("Coinbase",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("⚪ Muy segura y fácil de usar",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("⚪ Buena para comprar criptos y holdear",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🟢​ Pros: Ideal para principiantes en criptomonedas",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("🔴​ Contras: Comisiones altas",
                                        **c_styles.TEXT_STYLE["body"],
                                        ),
                                
                                rx.text("Elegí el que mas se acomode a tu estrategia y con el cual"
                                                          " te sientas mas comodo y seguro.",
                                                          **c_styles.TEXT_STYLE["body"],
                                                          margin_bottom=Size.DEFAULT.value),
                                          
                                rx.heading(rx.text.strong("No operes con dinero real hasta que te sientes comodo y siempre"
                                        " invertí dinero que estas dispuesto a perder."),
                                           align_items="center",
                                           text_align= "center",
                                           margin_bottom=Size.DEFAULT.value),
                            ),
                        ),
                        
                        rx.heading("Despedida Del Curso",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.DEFAULT.value),
                        rx.text("Muchas gracias por tomarte el tiempo de hacer este curso, Espero que esto te sirva"
                                " en tu dia a dia y a poder lograr la libertad financiera.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.MEDIUM.value),
                        rx.text("El mercado No se trata de ganar dinero, sino de no perderlo.",
                                **c_styles.TEXT_STYLE["body"]),
                        rx.text("Sé inteligente y que las emociones no nublen tus estrategias",
                                **c_styles.TEXT_STYLE["body"])
                        
            
                #_____________________________________________________________________________________#   
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                max_width="600px",
                size="2" 
                ),
        ),
        back_button("/module_9"),
        #next_button("/module_8"),
        footer(),
        **c_styles.COURSE_STYLES
    )

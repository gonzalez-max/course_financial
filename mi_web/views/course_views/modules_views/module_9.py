import reflex as rx
from mi_web.components.general_components.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.general_components.next_button import next_button
from mi_web.components.general_components.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.components.course_components.module7_components.module7_table import table1_module7
from mi_web.components.course_components.module7_components.module7_table import mobile_table1_module7
from mi_web.components.course_components.module9_components.modulo9_imagenes import gif_mercado_estafa





def module_9() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(
                        #titulo del modulo 9
                        rx.heading("Módulo 9: Las Estafas en el Trading y las Inversiones",
                                   **c_styles.TEXT_STYLE["title"],
                                   margin_top="35px",
                                   margin_bottom=Size.MEDIUM.value),

                        #seccion 1 el mercado es una estafa
                        rx.heading("1. ¿El mercado es una estafa?",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.DEFAULT.value),
                        
                        rx.box(
                            gif_mercado_estafa(),
                            margin_bottom=Size.DEFAULT.value,
                        ),
                        
                        rx.box(
                            rx.vstack(
                                rx.text("No, el mercado financiero no es una estafa, "
                                        "pero sí hay muchas personas y empresas que intentan "
                                        "aprovecharse de la falta de conocimiento de los nuevos"
                                        " inversores para estafarlos.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text(" El mercado en sí es legítimo porque sigue reglas "
                                        "económicas basadas en oferta y demanda. Las bolsas de valores,"
                                        " las divisas y las criptomonedas tienen movimientos naturales "
                                        "que dependen de múltiples factores, como la economía, la política "
                                        "y el sentimiento del inversor.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                #subseccion
                                rx.heading("¿Por qué algunas personas creen que es una estafa?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                #lista de porque las personas piensan que es una estafa?
                                
                                    rx.text("Porque pierden dinero sin entender los riesgos."
                                                 " Muchos entran al trading sin preparación, "
                                                 "toman malas decisiones y culpan al mercado.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("Porque hay manipulación en algunos sectores "
                                                 "(como en ciertos criptoactivos o acciones de baja capitalización),"
                                                 " donde grandes jugadores pueden influir en los precios.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("Porque hay muchas estafas en torno al trading, como cursos milagrosos, "
                                                 "robots de trading fraudulentos y brokers sin regulación.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                   
                                #conclusion
                                rx.heading("En pocas palabras...",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("El mercado es una herramienta para invertir y generar riqueza, pero sin educación "
                                        "ni estrategia, se puede convertir en una trampa para los principiantes. "
                                        "Lo importante es aprender, investigar y operar con precaución.",
                                        **c_styles.TEXT_STYLE["body"]),
                            ),
                        ),
                    
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),

                        #seccion 2 brokers
                        rx.heading("2. Brokers: ¿Son todos una estafa?",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.box(
                            rx.vstack(
                                rx.text("No, no todos los brokers son una estafa, pero hay que tener cuidado al elegir uno.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                #subseccion 
                                rx.heading("¿Qué es un broker?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("Un broker es una plataforma o empresa que actúa como intermediario para que puedas "
                                        "comprar y vender activos financieros (acciones, divisas, criptomonedas, etc.).",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.heading("¿Por qué algunos piensan que son una estafa?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                #lista de porque dicen que es una estafa
                                
                                rx.text(rx.text.strong("❌ Brokers sin regulación:"),
                                                 " Hay plataformas que operan sin estar supervisadas por entidades "
                                                 "financieras serias. Esto permite que manipulen precios, bloqueen "
                                                 "retiros o incluso desaparezcan con el dinero de los clientes.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                rx.text(rx.text.strong("❌ Brokers 'Market Maker' poco confiables:"),
                                                 " Algunos brokers que crean su propio mercado pueden operar en contra"
                                                 " del cliente, generando conflictos de interés.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                rx.text(rx.text.strong("❌ Publicidad engañosa:"),
                                                 " Muchos prometen 'ganancias seguras' o bonos atractivos para atraer "
                                                 "a novatos, pero luego aplican condiciones ocultas que dificultan la "
                                                 "retirada del dinero.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                                

                                
                                #subseccion como identificar un broker seguro
                                rx.heading("¿Cómo identificar un broker seguro?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text(rx.text.strong("✅ Regulación oficial:")," Debe estar regulado por entidades reconocidas como la SEC "
                                        "(EE.UU.), CNMV (España), FCA (Reino Unido),CNV (Argentina),etc.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text(rx.text.strong("✅ Buena reputación:")," Investiga opiniones de otros usuarios en foros y sitios de reseñas.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text(rx.text.strong("✅ Transparencia en comisiones:")," Desconfía de los que ocultan costos o tienen spreads excesivos.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text(rx.text.strong("✅ Facilidad de retiro:")," Si un broker pone trabas para retirar tu dinero, es una mala señal.",
                                        **c_styles.TEXT_STYLE["body"],
                                        margin_bottom=Size.DEFAULT.value),
                            ),
                        ),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                        
                        #seccion 3 ejemplos de estadas reales
                        rx.heading("3. Ejemplos de Estafas reales en Las Inversiones",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.box(
                            rx.vstack(
                                rx.text("A continuación, vamos a mostrarte algunos ejemplos de estafas reales encontradas en "
                                        "publicidades de YouTube.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                #imagenes de estafas
                                rx.box(
                                            rx.hstack(
                                                zoomed_image("/estafa_1.jpg?refresh=1"),
                                                zoomed_image("/estafa_3.jpg?refresh=1"),
                                                zoomed_image("/estafa_4.jpg?refresh=1"),
                                            )
                                          ),
                                
                                rx.heading("¿Cómo sabemos que es una estafa?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                            
                                rx.text("Al observar la imagen, nos encontramos con la publicidad de la supuesta "
                                        "empresa YPF (Yacimientos Petrolíferos Fiscales), la principal empresa de "
                                        "comercialización de petróleo, gas y combustibles de Argentina.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text("Una empresa de este calibre nunca, pero NUNCA, te pedirá que inviertas "
                                        "en ella ni te exigirá una 'inversión mínima' de casi "
                                        "$250 USD ($250.000 pesos argentinos).",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text(rx.text.strong("Si realmente quieres invertir en YPF,")," solo basta con comprar sus acciones "
                                        "en la bolsa o suscribirte a un FCI (Fondo Común de Inversión) a "
                                        "través de brokers registrados.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text("Otra forma de detectar una estafa es cuando te ofrecen un monto fijo de "
                                        "ganancias. En el mundo de las inversiones en acciones, ",rx.text.strong("NUNCA")," hay nada garantizado. "
                                        "Nadie puede asegurarte que ganarás cierta cantidad de dinero en un día,"
                                        " una semana o un mes, a menos que puedan predecir el futuro con una bola de cristal.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.box(
                                        zoomed_image("/estafa_2.jpg?refresh=1"),
                                        margin_bottom=Size.DEFAULT.value  
                                ),
                                
                                rx.heading(rx.text.strong(" El mercado sube y baja constantemente, "
                                                          "por lo que es imposible garantizar un retorno fijo."),
                                           align_items="center",
                                           text_align= "center",
                                           margin_bottom=Size.DEFAULT.value),
                                
                                #consejo
                                rx.heading("📌 Consejo:",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("Si lo que buscas es una inversión con retornos fijos, existen las inversiones de renta fija "
                                        "(como lo vimos en el Módulo 2: Tipos de Inversiones y sus Instrumentos), que incluyen opciones "
                                        "como plazos fijos, cauciones, bonos, etc.. Para acceder a ellas, solo necesitas crear una "
                                        "cuenta en un broker de confianza.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.heading("Otro dato clave sobre la estafa de YPF",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                
                                rx.text("Otro indicio de que esto es una estafa es que, al hacer clic en los tres puntos de la publicidad "
                                        "en YouTube, accedemos al Centro de anuncios de YouTube, donde podemos gestionar los anuncios que "
                                        "aparecen en nuestra cuenta.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                #imagen ejemplo anunciante
                                rx.box(
                                    rx.hstack(
                                            zoomed_image("/prueba_estafa1.jpg?refresh=1"),
                                            zoomed_image("/prueba_estafa2.jpg?refresh=1"),
                                            zoomed_image("/prueba_estafa3.jpg?refresh=1"),
                            
                                    )
                                ),
                                
                                rx.text("Hasta ahí todo parece normal. Sin embargo, al revisar la información del anunciante, nos damos "
                                        "cuenta de que el nombre no coincide con YPF.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text(" Además, en las imágenes de ejemplo podemos ver que las ubicaciones del anunciante están fuera de Argentina, "
                                        "lo cual es muy sospechoso, considerando que YPF es una empresa argentina.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text("Si aún tienes dudas, pregúntate lo siguiente:",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text("👉 ¿Por qué YPF pondría publicidad con una ubicación en Ucrania, Chipre o Australia?",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                rx.text("👉 ¿Por qué el anunciante es una empresa extranjera en lugar de YPF?",
                                        **c_styles.TEXT_STYLE["body"]),
                            ),
                        ),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                        
                        #seccion 4
                        rx.heading("4. Esquemas piramidales y Ponzi",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.box(
                            rx.vstack(
                                rx.text("Uno de los métodos de estafa más comunes y antiguos en el mundo de las inversiones son los esquemas "
                                        "piramidales y Ponzi. Aunque suenen parecidos, tienen algunas diferencias clave, pero ambos se basan "
                                        "en engañar a personas con promesas falsas de ganancias rápidas y aseguradas.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                #subseccion
                                rx.heading("¿Qué es un esquema piramidal?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("Es un modelo de negocio en el que la ganancia proviene de sumar a más personas al sistema,"
                                        " no de una actividad económica real. Funciona así:",
                                        **c_styles.TEXT_STYLE["body"]),
                               
                               rx.box(
                                       zoomed_image("/esquema_ponzi.png?refresh=1"),
                               ),
                               
                               
                                #lista esquema estafa piramidal
                                
                                    rx.text("⚪ A vos te prometen dinero si invertís y traés a más personas.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("⚪ Esas personas traen a otras, y así se va formando una “pirámide” "
                                                 "de ingresos.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("⚪ Al principio parece funcionar, pero todo depende de seguir sumando gente."
                                                 " Cuando eso se frena, la pirámide colapsa y los de abajo pierden todo "
                                                 "su dinero.",
                                                 **c_styles.TEXT_STYLE["body"]),
                            
                                #ejemplo 
                                rx.text(rx.text.strong("📌 Ejemplo típico:")," 'Meté $100 dólares y traé a 2 amigos. Cuando ellos traigan a otros 2, "
                                        "ganás $400'. Parece fácil… pero es una trampa.",
                                        **c_styles.TEXT_STYLE["body"]),
                                
                                #subseccion que es una estafa ponzi
                                rx.heading("¿Qué es una estafa Ponzi?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("Es similar, pero más sutil. En este caso:",
                                        **c_styles.TEXT_STYLE["body"],
                                       ),
                                
                                #lista esquema ponzi
                                rx.box(
                                    rx.text("- Te prometen rendimientos fijos muy altos (ej: “ganás 10% mensual sí o sí”).",
                                            **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("- No hay ningún negocio real: usan el dinero de nuevos inversores para pagarle "
                                                 "a los anteriores.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("- Mientras entra gente nueva, el sistema sobrevive. Pero cuando se corta el flujo,"
                                                 " se cae todo y desaparecen con tu dinero.",
                                                 **c_styles.TEXT_STYLE["body"],
                                                 ),
                                margin_bottom="10px"),

                                #subseccion como detectarlos
                                rx.heading("¿Cómo detectarlos?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                #lista de como detectarlos
                                
                                    rx.text("⚪​ Te prometen ganancias fijas y rápidas sin riesgo.",
                                            **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("⚪​ Te piden que sumes gente para ganar más.",
                                            **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("⚪​ No hay transparencia sobre cómo se genera el dinero.",
                                            **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("⚪​ No están registrados en la CNV, ni en ningún ente regulador.",
                                            **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text("⚪​ No tienen una actividad comercial clara.",
                                            **c_styles.TEXT_STYLE["body"]),
                                 
                                 
                                rx.heading("📌 Recuerda",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("Si no entendés de dónde viene la ganancia, la ganancia sos vos."
                                        "Siempre verificá que las empresas o plataformas estén reguladas y "
                                        "sean transparentes. Si algo suena demasiado bueno para ser verdad… "
                                        "probablemente no sea verdad.",
                                        **c_styles.TEXT_STYLE["highlight"],
                                        margin_bottom=Size.DEFAULT.value)
                            ),
                        ),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                        
                        #seccion 5 cursos de trading, mastermids y como ser millonario
                        rx.heading("5. Cursos de Trading, Masterminds y “Cómo ser millonario”",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                       
                        rx.box(
                            rx.vstack(
                                rx.text("Hoy en día, es muy común encontrarse con publicidades en redes sociales"
                                        " o YouTube donde alguien, en un auto de lujo o frente a una mansión, "
                                        "te promete que 'vas a ser millonario en 6 meses si comprás su curso de trading'."
                                        " Pero… ¿qué tan real es eso?",
                                        **c_styles.TEXT_STYLE["body"]),
                                #subseccion
                                rx.heading("¿Dónde está el engaño?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                #lista de donde esta el engaño
                                
                                    rx.text(rx.text.strong("​❌ Promesas falsas:")," Te venden la idea de que con solo hacer "
                                                 "su curso vas a dejar tu trabajo, vivir de las inversiones y "
                                                 "ganar miles de dólares por mes.",
                                                 rx.text.strong("⚠️ Spoiler: El mercado no funciona así. Aprender a invertir lleva tiempo, "
                                                 "práctica y conocimiento real, no fórmulas mágicas."),
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text(rx.text.strong("​❌ Falsa autoridad:")," Muchos de estos “gurús” no tienen experiencia "
                                                 "real operando en los mercados. Solo ganan dinero vendiendo cursos… no invirtiendo.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text(rx.text.strong("​❌ Precios altísimos y urgencia falsa:")," Te cobran $200, $500 o hasta $1000 "
                                                 "dólares por información que podés aprender gratis o por muy poco en fuentes confiables."
                                                 " Además, usan frases como 'últimos cupos', 'sube el precio mañana', o 'el secreto "
                                                 "que los bancos no quieren que sepas' para apurarte a comprar.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    rx.text(rx.text.strong("​❌ Masterminds o grupos VIP:")," Una vez que compraste, te meten en grupos cerrados"
                                                 " donde te siguen vendiendo más cosas, como membresías, señales de compra/venta o “estrategias secretas”.",
                                                 **c_styles.TEXT_STYLE["body"]),
                                    
                                    
                                #subseccion
                                rx.heading("Entonces… ¿todos los cursos son una estafa?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("No. Hay educadores serios que enseñan de forma clara, honesta y con fundamentos.",
                                        **c_styles.TEXT_STYLE["body"]),
                                rx.text("Busca cursos Que el contenido sea realista y educativo, no emocional ni manipulador,"
                                        " Que te enseñen a gestionar el riesgo, no solo a “ganar dinero”, "
                                        "Que te den herramientas para que vos mismo puedas aprender y analizar, por ultimo,"
                                        " Que el precio sea acorde y no dependan de que reclutes más gente.",
                                        **c_styles.TEXT_STYLE["body"],
                                         margin_bottom=Size.DEFAULT.value)
                            ),
                        ),
                         
                         rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                         
                         #conclusion
                        rx.heading("Conclusión del Módulo 9:", **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.DEFAULT.value),
                        rx.list.ordered(
                            rx.list.item(rx.text.strong("Resumen:")," Vimos que el mercado no es una estafa, pero sí está "
                                         "lleno de personas y plataformas que buscan engañar a inversores sin experiencia."
                                         " Aprendimos a detectar brokers inseguros, estafas comunes como las pirámides y Ponzi, "
                                         "y cursos falsos que prometen riqueza fácil.",
                                     margin_bottom=Size.DEFAULT.value),
                            rx.list.item(rx.text.strong("Aplicación Práctica:")," Antes de invertir o capacitarte, verificá que todo "
                                         "sea legal, regulado y transparente. Evitá promesas de dinero rápido y buscá siempre información "
                                         "confiable. La mejor defensa contra las estafas es tu educación financiera.",
                                     margin_bottom=Size.DEFAULT.value),
                            rx.list.item(rx.text.strong("Próximos Pasos:")," En el próximo y último módulo vas a conocer en qué plataformas "
                                         "podés invertir y empezar a generar ganancias con el trading. Aprenderás sobre los principales brokers,"
                                         " exchanges y los distintos tipos de wallets."),
                            list_style_type="disc",
                            color="white",
                            margin_bottom=Size.DEFAULT.value
                        ), 
                        
                        
                        
                        
                        
                        
                        
                        
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
        back_button("/module_8"),
        next_button("/module_10"),
        footer(),
        **c_styles.COURSE_STYLES
    )

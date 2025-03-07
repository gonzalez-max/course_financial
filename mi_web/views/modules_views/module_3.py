import reflex as rx 
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.components.modules_components.module3_components.imagenes.image_tipes_trading import image_tipes_trading
from mi_web.components.modules_components.module3_components.imagenes.image_f_versus_t import image_f_versus_t
from mi_web.components.modules_components.module3_components.imagenes.image_velas_japonesas import image_velas_japonesas
from mi_web.components.modules_components.module3_components.imagenes.image_fuerza_velas import image_fueza_velas
from mi_web.components.modules_components.module3_components.imagenes.image_gestion_riesgo import image_gestion_riesgo
from mi_web.components.modules_components.module3_components.imagenes.image_psicologia_trading import image_psicologia_trading
from mi_web.components.modules_components.module3_components.module3_table1 import module3_table1
from mi_web.views.links.next_button import next_button
from mi_web.views.links.back_button import back_button





def module_3() -> rx.Component:
    return rx.box(
      navbar_dropdown(),
      drawer(),
      rx.center(
        rx.vstack(
          rx.box(
            #Encabezado del modulo
            rx.heading("Módulo 3: Introducción al Trading", **styles.TEXT_STYLE["title"]),
            
            #seccion 1: ¿que es el trading?
            rx.heading("1. ¿Qué es el trading? ", **styles.TEXT_STYLE["subtitle"]), 
            rx.text("El " ,rx.text.strong("trading"), " es la compra y venta de activos financieros "
                    "(acciones, divisas, criptomonedas, materias primas, etc.) con el objetivo de obtener "
                    "ganancias a partir de los movimientos del mercado. A diferencia de la inversión tradicional, "
                    "el trading se enfoca en el corto y mediano plazo.", **styles.TEXT_STYLE["body"],
                    margin_bottom=Size.DEFAULT.value),
            
            rx.heading("Características del trading:", **styles.TEXT_STYLE["subseccion"]),
            
            #lista de caracteristicas
            rx.list.ordered(
                rx.list.item("Se basa en la especulación de precios.",margin_bottom=Size.DEFAULT.value),
                rx.list.item("Puede realizarse en diferentes mercados financieros.",margin_bottom=Size.DEFAULT.value),
                rx.list.item("Requiere análisis (técnico y/o fundamental) para tomar decisiones.",margin_bottom=Size.DEFAULT.value),
                rx.list.item("Tiene distintos niveles de riesgo y estrategias según el plazo.",margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),

            rx.heading("Tipos de trading más comunes:",**styles.TEXT_STYLE["subseccion"]),
            
            #lista de tipos de trading
            rx.list.ordered(
                rx.list.item(rx.text.strong("Scalping:")," Operaciones en segundos o minutos. Buscan pequeñas ganancias rápidas."
                             ,margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong("Day Trading")," Compra y venta en el mismo día. No se dejan operaciones abiertas de un "
                             "día para otro.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong("Swing Trading:")," Operaciones que duran días o semanas, siguiendo tendencias del mercado."
                             ,margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong("Position Trading:")," Similar a la inversión, manteniendo activos por meses o incluso años.",margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),
            #imagen tipos de trading
            rx.hstack(
            image_tipes_trading(),
            margin_bottom=Size.DEFAULT.value,),
            
            rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
            
            #seccion 2 Tipos de análisis 
            rx.heading("2. Tipos de análisis en Trading", **styles.TEXT_STYLE["subtitle"]),
            rx.text("En el mundo del trading existen dos enfoques principales para analizar los mercados "
                    "financieros: el ",rx.text.strong("análisis fundamental")," y ",rx.text.strong("el análisis técnico."),
                    " Ambos tienen sus ventajas y desventajas, pero en este curso nos enfocaremos principalmente en el "
                    "análisis técnico.", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
            #imagen fundamental vs tecnico
            rx.hstack(
            image_f_versus_t(),
            margin_bottom=Size.DEFAULT.value),
            
            #subseccion analisis fundamental
            rx.heading("Análisis Fundamental", **styles.TEXT_STYLE["subseccion"]),
            rx.text("El",rx.text.strong(" análisis fundamental")," estudia el valor real de un activo basado en factores económicos,"
                    " financieros y de mercado. Se usa principalmente en inversiones a largo plazo.", **styles.TEXT_STYLE["body"]),
            
            #aspectos clave 
            rx.heading("Aspectos clave:",**styles.TEXT_STYLE["subseccion"]),
            #lista de aspectos
            rx.list.ordered(
                rx.list.item(" Datos económicos (PIB, inflación, tasas de interés)."
                             ,margin_bottom=Size.DEFAULT.value),
                rx.list.item(" Reportes financieros de empresas (ingresos, ganancias, deuda).",margin_bottom=Size.DEFAULT.value),
                rx.list.item(" Noticias y eventos globales que afectan los mercados.",margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),
            
            #ejemplo
            rx.text(rx.text.strong(" Ejemplo:")," Un inversor en acciones analiza los reportes de ganancias de una empresa para "
                    "determinar si es una buena inversión.", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),

            #desventaja
            rx.text(rx.text.strong(" Desventaja:")," Requiere un conocimiento profundo de economía y los efectos de las noticias "
                    "pueden tardar en reflejarse en el precio.", **styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),

            #subseccion analisis tecnico
            rx.heading("Análisis Técnico (Enfoque de este curso)", **styles.TEXT_STYLE["subseccion"]),
            rx.text("El ",rx.text.strong("análisis técnico")," Se basa en el estudio de los gráficos de precios y patrones de "
                    "comportamiento del mercado. Su premisa es que “el precio lo descuenta todo” y que la historia tiende a repetirse.",
                    **styles.TEXT_STYLE["body"]),
            
            #Aspectos clave
            rx.heading("Aspectos clave:", **styles.TEXT_STYLE["subseccion"]),
            #lista de aspectos clave
            rx.list.ordered(
                rx.list.item(rx.text.strong(" Acción del precio:")," Cómo se mueve el precio en el tiempo."
                             ,margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Soportes y resistencias:")," Zonas donde el precio tiende a frenarse."
                             ,margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Tendencias:")," Identificación de mercados alcistas, bajistas o laterales."
                             ,margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Patrones gráficos y de velas japonesas:")," Figuras que indican posibles movimientos "
                             "futuros.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Indicadores técnicos:")," Herramientas como medias móviles, RSI y MACD que ayudan en "
                             "la toma de decisiones.",margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),
            #ejemplo 
            rx.text(rx.text.strong("Ejemplo:"), " Un trader observa un patrón de velas Doji en una resistencia fuerte y "
                    "decide vender porque indica posible reversión de tendencia.", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
            #ventaja
            rx.text(rx.text.strong("Ventaja:")," Se basa en datos visuales y permite tomar decisiones rápidas para operar en el corto "
                    "y mediano plazo.", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),

            rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
            
            #seccion 3 velas doji
            rx.heading("3. Introducción a las Velas Japonesas", **styles.TEXT_STYLE["subtitle"]),
            rx.text(rx.text.strong("Las velas japonesas")," son una de las herramientas más utilizadas en el análisis técnico. Representan "
                    "la evolución del precio en un período determinado y ayudan a interpretar el sentimiento del mercado.", 
                    **styles.TEXT_STYLE["body"]),
            
            #estructura de las velas
            rx.heading("Estructura de una vela japonesa", **styles.TEXT_STYLE["subseccion"]),
            rx.text("Cada vela está compuesta por:",**styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
            rx.text(rx.text.strong("1. Cuerpo:")," Diferencia entre el precio de apertura y cierre.", **styles.TEXT_STYLE["body"], 
                    margin_bottom=Size.DEFAULT.value),
            rx.text(rx.text.strong("2. Mecha o sombra:")," Representa los precios máximo y mínimo alcanzados.", **styles.TEXT_STYLE["body"], 
                    margin_bottom=Size.DEFAULT.value),
            rx.text(rx.text.strong("3. Color:"), **styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),            
            # lista de colores
            rx.list.ordered(
                rx.list.item(rx.text.strong("🟢 Verde:")," Indica que el precio cerró por encima del precio de apertura (alcista)."
                             ,margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong("🔴 Roja:")," Indica que el precio cerró por debajo del precio de apertura (bajista)."
                             ,margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),

            #velas japonesas imagen
            rx.hstack(
            image_velas_japonesas(),
            margin_bottom=Size.DEFAULT.value,
            ),

            #tipos de velas japonesas
            rx.heading("Tipos de velas más comunes", **styles.TEXT_STYLE["subseccion"]),
            #lista de tipos de velas
            rx.list.ordered(
                rx.list.item(rx.text.strong(" Vela alcista:")," Cuerpo verde, con o sin sombras."
                             " Indica fuerza compradora.", margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Vela bajista:")," Cuerpo rojo, con o sin sombras."
                             " Indica presión vendedora.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Doji:"),"Representa indecisión en el mercado porque "
                             "el precio de apertura y cierre son muy similares, con sombras en ambos lados o sin sombras. "
                             "Cuerpo casi inexistente, reflejando indecisión en el mercado.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Gravestone Doji:")," : Tiene una sombra superior larga y"
                             " casi sin cuerpo ni sombra inferior. Esto significa que los compradores "
                             "intentaron subir el precio, pero los vendedores tomaron el control y lo "
                             "devolvieron al nivel de apertura.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Martillo y martillo (Hammer) invertido:")," Posible cambio de tendencia "
                             "si aparecen en zonas clave.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong(" Estrella fugaz (shooting star) y hombre colgado:")," Herramientas como medias móviles, "
                             "RSI y MACD que ayudan en la toma de decisiones.",margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),
            #imagen de tipos de velas
            rx.hstack(
            image_fueza_velas(),
            margin_bottom=Size.DEFAULT.value,
            ),
            #aviso importante
            rx.heading("⚠️¡¡importante!!⚠️",**styles.TEXT_STYLE["subseccion"]),
            rx.text("Las Velas Japonesas ayudan a entender la accion del precio en cualquier mercado, si bien, "
                    "son escenciales para identificar patrones y tendencias.",
                    rx.text.strong(" deben combinarse con otros indicadores para confirmar señales."),**styles.TEXT_STYLE["body"]),
            
            rx.text("En las próximas secciones exploraremos cómo usarlas de forma práctica y segura.",**styles.TEXT_STYLE["body"],
                    margin_bottom=Size.DEFAULT.value),
            
            rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
            
            #seccion 4 Gestion del riesgo 
            rx.heading("4. Gestión del Riesgo " , **styles.TEXT_STYLE["subtitle"]),
            rx.text(rx.text.strong("El manejo del riesgo")," en el mercado es esencial y debe considerarse un negocio, no una apuesta. Muchos operadores caen "
                    "en la trampa de intentar ",rx.text.strong("PREDECIR")," el mercado, lo que puede llevar a pérdidas significativas. ",
                    **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
            
            #imagen gestion del riesgo
            rx.hstack(
            image_gestion_riesgo(),
            margin_bottom=Size.DEFAULT.value,),
            
            rx.text("Es fundamental centrarse en el ",rx.text.strong("análisis técnico"), " y ",
                    rx.text.strong("desarrollar una mentalidad empresarial"),". El tamaño de las órdenes "
                    "debe determinarse cuidadosamente para preservar el capital y evitar que el dinero pase de manos "
                    "inexpertas a operadores más experimentados. Aprender a gestionar el capital y controlar el "
                    "riesgo es clave para el éxito en el trading.",**styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
            
            # Medidas simples para el manejo del riesgo
            rx.heading("Medidas Simples para el Manejo del Riesgo",**styles.TEXT_STYLE["subseccion"]),
            rx.text("Para gestionar adecuadamente el riesgo en el mercado, sigue estas medidas:", **styles.TEXT_STYLE["body"]),
            
            #lista de medidas 
            rx.list.ordered(
                rx.list.item("1. Define cuánto capital estás dispuesto a arriesgar en cada operación.", 
                             margin_bottom=Size.DEFAULT.value),
                rx.list.item("2. Establece un límite de pérdida personal, como un máximo del 10% de tu capital total.",
                             margin_bottom=Size.DEFAULT.value),
                rx.list.item("3. Si acumulas más de 10 pérdidas consecutivas, DETENTE y reevalúa tu estrategia.",
                             margin_bottom=Size.DEFAULT.value),
                rx.list.item("4. Si las pérdidas potenciales de tus operaciones abiertas representan un 10% o más de tu capital, EVITA abrir"
                             " nuevas operaciones.",margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),
            
            #Errores Comunes en el Manejo del Riesgo
            rx.heading("Errores Comunes en el Manejo del Riesgo", **styles.TEXT_STYLE["subseccion"]),
            rx.text(rx.text.strong("Uno de los errores más frecuentes")," es aumentar el tamaño de una nueva orden después de una pérdida previa,"
                    " lo que puede llevar a pérdidas masivas. Para evitarlo, sigue una estrategia que limite el riesgo de tu capital en cada "
                    "operación. Mantén la objetividad y evita que las emociones influyan en tus decisiones. Siempre usa un ",
                    rx.text.strong("stop-loss"),"y arriesga solo una pequeña parte de tu capital en cada operación.", 
                    **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
            
            #herramientas de gestion del riesgo
            rx.heading("Herramientas de gestión de riesgo", **styles.TEXT_STYLE["subseccion"]),
            rx.text(rx.text.strong("Stop-Loss:")," Es una orden que cierra tu operación automáticamente para limitar pérdidas. "
                    "Ejemplo: Compras a $100, stop-loss en $95, pierdes $5 si se ejecuta. Es útil para principiantes, pero cuidado: en "
                    "mercados manipulados, noticias falsas pueden barrer los stop-loss y sacarte antes de que el precio suba. Algunos traders "
                    "lo evitan.",rx.text.strong("Mas adelante durante el curso lo veremos mas a detalle."),**styles.TEXT_STYLE["body"], 
                    margin_bottom=Size.DEFAULT.value),
            
            rx.text(rx.text.strong("Relación Riesgo/Beneficio:")," Imaginá que compras algo porque creés que subirá de precio. Decidís arriesgar "
                    "$50 si las cosas van mal, pero solo entrás si podés ganar al menos $100. Eso es una relación riesgo/beneficio de 1 a 2. La "
                    "idea es buscar operaciones donde valga la pena el riesgo.",**styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
            
            rx.text(rx.text.strong("Tamaño de posición:")," Tenés $50.000 y querés arriesgar $500 por operación. Si una acción cuesta $100 y "
                    "pensás perder $5 por acción si baja, comprás 100 acciones ($10.000). Así, tu riesgo queda controlado aunque salgas "
                    "manualmente.",**styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
            
            rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),

            #seccion 5 psicologia
            rx.heading("5. Psicología Del Trading",**styles.TEXT_STYLE["subtitle"]),
            rx.text("El éxito en el trading no solo depende del análisis técnico, sino también de ",rx.text.strong("la mentalidad del inversor."),
                    " La flexibilidad mental es crucial, y asumir la responsabilidad de cada decisión es el primer paso hacia "
                    "una mentalidad ganadora. Evita culpar a factores externos y céntrate en mejorar tus propias estrategias.",
                    **styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
            
            #imagen psicologia del trading
            rx.heading(
            image_psicologia_trading(),
            margin_bottom=Size.DEFAULT.value),
            
            rx.heading("El Proceso Neurológico", **styles.TEXT_STYLE["subseccion"]),
            rx.text("Es importante desarrollar creencias realistas sobre el mercado:", 
                    **styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
            
                #mini lista
            rx.list.ordered(
                rx.list.item("El mercado ",rx.text.strong("es incierto")," y no puede predecirse con certeza.", 
                             margin_bottom=Size.DEFAULT.value),
                rx.list.item("Una estrategia basada en ",rx.text.strong("análisis técnico y gestión de capital"),
                             "aumenta las probabilidades de éxito.",margin_bottom=Size.DEFAULT.value),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
              ),
            
            rx.heading("Mentalidad del Inversor", **styles.TEXT_STYLE["subseccion"]),
            rx.text("Adaptar tu mentalidad es clave para operar con éxito. La disciplina y la paciencia son esenciales "
                    "para que, a largo plazo, las operaciones ganadoras superen a las perdedoras. Cambiar creencias erróneas "
                    "y desarrollar confianza en tu sistema de trading marcará la diferencia entre el éxito y el fracaso.",
                    **styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
            
            rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
            
            #seccion adicional tips a tener en cuenta
            rx.heading("Tips a tener en cuenta", **styles.TEXT_STYLE["subtitle"]),
            rx.hstack(
            module3_table1(),
            margin_bottom=Size.DEFAULT.value),
            
            rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
            
            #resumen y conclusion
            rx.heading("Conclusión del Módulo 3", **styles.TEXT_STYLE["subtitle"]),
            
            #lista de resumen u conlcusion
            rx.list.ordered(
              rx.list.item(rx.text.strong(" Resumen:")," En este módulo aprendimos qué es el trading, sus principales "
                           "características y enfoques. Diferenciamos entre análisis fundamental y análisis técnico, "
                           "profundizando en este último. También exploramos las velas japonesas y cómo nos ayudan a "
                           "interpretar el mercado.", margin_bottom=Size.DEFAULT.value),
              rx.list.item(rx.text.strong(" Aplicación Práctica:")," Reflexioná sobre qué tipo de trading se adapta "
                           "mejor a tu estilo y objetivos. Analizá gráficos con velas japonesas y empezá a identificar "
                           "patrones básicos para mejorar tu lectura del mercado.",margin_bottom=Size.DEFAULT.value),
              rx.list.item(rx.text.strong(" Próximos Pasos:")," En el siguiente módulo, profundizaremos en el análisis "
                           "técnico, explorando patrones gráficos y estrategias clave para identificar oportunidades "
                           "de compra y venta con mayor precisión.",margin_bottom=Size.DEFAULT.value),
              list_style_type="disc",
              color="white",
              margin_bottom=Size.DEFAULT.value,
              ),
      
      
      
      
      
      
      
      
      
      
      
      
     
     
     
     
     
      #_______________________________________________________________________________________________#
        ),
      max_width="600px",
      width="100%",
      margin_y=Size.SMALL.value,
      align_items="center",
    ),
  ),
        next_button("/module_4"),
        back_button("/module_2"),
    
        footer(),
        background_color="black"
    ),  
  
import reflex as rx 
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.components.module3_components.imagenes.image_tipes_trading import image_tipes_trading
from mi_web.components.module3_components.imagenes.image_f_versus_t import image_f_versus_t


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
            rx.text("Las velas japonesas son una de las herramientas más utilizadas en el análisis técnico. Representan la evolución "
                    "del precio en un período determinado y ayudan a interpretar el sentimiento del mercado.", 
                    **styles.TEXT_STYLE["body"]),
            
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      #_______________________________________________________________________________________________#
        ),
      max_width="600px",
      width="100%",
      margin_y=Size.SMALL.value,
      align_items="center",
    ),
  ),
    footer(),
    background_color="black"
    ),  
  
import reflex as rx 
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.components.module1_components.saving_bar import saving_bar
from mi_web.components.module1_components.table1_module1 import table1_module1
from mi_web.components.module1_components.table2_module1 import table2_module1


def module_1() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        drawer(),
        rx.center( 
            rx.vstack(
                rx.box(
                    #Encabezado del módulo
                    rx.heading("Módulo 1: Fundamentos de Finanzas Personales y Mercado Financiero", **styles.TEXT_STYLE["title"]),
                    
                    #Sección 1: ¿Qué son las finanzas?
                    rx.heading("1. ¿Qué son las finanzas?", **styles.TEXT_STYLE["subtitle"]),
                    rx.text(
                        "Las finanzas corresponden a un área de la economía que estudia la obtención y administración de dinero "
                        "y de capital, es decir, los recursos financieros.\n"
                        "Estudia tanto la obtención de recursos (financiación), como la inversión y el ahorro de los mismos.",
                        **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value, 
                    ),
                   
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                    
                    #Sección 2: Conceptos Contables
                    rx.heading("2. Conceptos Contables", **styles.TEXT_STYLE["subtitle"]),

                    #Lista de conceptos contables
                    rx.list.ordered(
                        rx.list.item("Cuentas patrimoniales"),
                        rx.list.item("Activo, pasivo y patrimonio neto"),
                        rx.list.item("Cuentas de resultados"),
                        rx.list.item("Ingresos, gastos y resultado"),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value,
                    ),

                    #Cuentas patrimoniales
                    rx.heading("Cuentas patrimoniales", **styles.TEXT_STYLE["subseccion"]),

                    #Tabla con explicaciones de los conceptos financieros
                rx.vstack(
                    table1_module1(),
                    margin_bottom=Size.DEFAULT.value),
                
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                # Seccion 3 El Ahorro
                rx.heading("3. El ahorro", **styles.TEXT_STYLE["subtitle"]),
                rx.text("Este hábito no solo te ayudará a construir un fondo de emergencia, sino que también te permitirá"
                "invertir en oportunidades futuras. Con el tiempo, ese 10% acumulado puede brindarte estabilidad financiera " 
                "y mayor libertad para tomar decisiones sin presiones económicas.", **styles.TEXT_STYLE["body"],
                margin_bottom=Size.DEFAULT.value),
                rx.text(rx.text.strong("Por ejemplo"),", si cobrás $100.000 por mes, destinar el 10% significaría ahorrar $10.000 de entrada. "
                "Si configurás una transferencia automática el mismo día que te depositan el sueldo, te asegurás de no "
                "gastarlo sin darte cuenta. También podés usar una app que redondee cada compra al peso superior y mande la "
                "diferencia a una cuenta de ahorros. A la larga, estos pequeños aportes suman más de lo que imaginás,"
                " y casi sin esfuerzo.",**styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                #ejemplo grafico de ahorro
                rx.vstack(
                    saving_bar(),
                    margin_bottom=Size.DEFAULT.value),
                #Analisis del grafico y conclusion
                rx.heading("Análisis del Gráfico",**styles.TEXT_STYLE["subseccion"]),
                rx.text("El gráfico muestra cómo un ahorro constante del 10% del ingreso mensual"
                        " ($10.000) se acumula a lo largo del año. Al final del período, el ahorro "
                        "total alcanza los $120.000, demostrando el impacto positivo de la constancia en el ahorro.",
                        **styles.TEXT_STYLE["body"]),
                rx.heading("Conclusión",**styles.TEXT_STYLE["subseccion"]),
                rx.text("Adoptar este hábito no solo permite construir un fondo de emergencia, sino que también"
                        " abre oportunidades de inversión y estabilidad financiera a largo plazo",**styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
                
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                #seccion 4 Identificacion de Gastos
                rx.heading("4. Identificacion de Gastos", **styles.TEXT_STYLE["subtitle"]),
                rx.text("Para una correcta administración financiera, es clave identificar y clasificar los diferentes" 
                        "tipos de gastos. Esto permite entender mejor el flujo de dinero y tomar decisiones más "
                        "inteligentes sobre el presupuesto.", **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
                #subseccion 
                rx.heading("Gastos Fijos y Supervivencia", **styles.TEXT_STYLE["subseccion"]),
                rx.text("Son aquellos necesarios para mantener un nivel de vida estable y no suelen cambiar mes a mes."
                        " Deben ser prioridad en cualquier planificación financiera.", **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
                #ejemplo 
                rx.hstack(
                rx.heading("Ejemplos: ", **styles.TEXT_STYLE["subseccion"]),
                rx.list.ordered(
                        rx.list.item("Alquiler o hipoteca"),
                        rx.list.item("Servicios basicos (Agua, luz, gas, internet)"),
                        rx.list.item("Alimentacion"),
                        rx.list.item("Transporte esencial"),
                        list_style_type="disc",
                        color="white"
                    ),margin_bottom=Size.DEFAULT.value),
                #subseccion
                rx.heading("Gastos Variables", **styles.TEXT_STYLE["subseccion"]),
                rx.text("Son gastos que pueden fluctuar dependiendo del mes y del estilo de vida."
                        " Se pueden ajustar según las necesidades y prioridades.", **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
                #ejemplo
                rx.hstack(
                rx.heading("Ejemplos: ", **styles.TEXT_STYLE["subseccion"]),
                rx.list.ordered(
                        rx.list.item("Combustible"),
                        rx.list.item("Mantenimiento de vehiculo"),
                        rx.list.item("Compras no escenciales"),
                        rx.list.item("Viajes"),
                        list_style_type="disc",
                        color="white"
                    ),margin_bottom=Size.DEFAULT.value),
                #subseccion
                rx.heading("Gastos Extraordinarios", **styles.TEXT_STYLE["subseccion"]),
                rx.text("Son aquellos imprevistos que pueden generar un impacto en la economía personal."
                        " Para estos, es recomendable contar con un ", rx.text.strong("fondo de emergencia")," que permita cubrirlos,"
                        " sin afectar el presupuesto mensual.", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                #ejemplo
                rx.hstack(
                rx.heading("Ejemplos: ", **styles.TEXT_STYLE["subseccion"]),
                rx.list.ordered(
                        rx.list.item("Reparaciones del Hogar o Vehiculo"),
                        rx.list.item("Emergencias Medicas"),
                        rx.list.item("Reemplazo de Electrodomesticos"),
                        rx.list.item("Multas o Deudas Inesperadas"),
                        list_style_type="disc",
                        color="white"
                    ),margin_bottom=Size.DEFAULT.value),
                rx.text(rx.text.strong("importante:")," Llevar un registro detallado de los gastos ayuda a "
                        "identificar patrones y encontrar oportunidades de ahorro. Aplicaciones de finanzas "
                        "personales o simples hojas de cálculo pueden ser herramientas útiles para este propósito.", **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
                
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                #seccion 5 Conceptos Financieros Clave
                rx.heading("Conceptos Financieros Clave", **styles.TEXT_STYLE["subtitle"]),
                rx.text("Para comprender mejor la gestión financiera y la toma de decisiones económicas,"
                        " es fundamental conocer estos conceptos clave:", **styles.TEXT_STYLE["body"]),
                #tabla conceptos financieros
                rx.vstack(
                    table2_module1(),
                    margin_bottom=Size.DEFAULT.value),
                
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                #conclusion
                rx.heading("Conclusión del Módulo 1:", **styles.TEXT_STYLE["subtitle"]),
                rx.list.ordered(
                        rx.list.item(rx.text.strong("Resumen:")," Hemos explorado qué son las finanzas,"
                                     " los conceptos contables básicos, la importancia del ahorro, "
                                     "la identificación de gastos y conceptos financieros clave."),
                        rx.list.item(rx.text.strong("Aplicación Práctica:")," Te invitamos a revisar tus propios gastos "
                                     "y a empezar a llevar un registro detallado. Calculá tu rentabilidad personal y "
                                     "pensá en estrategias para optimizar tu presupuesto."),
                        rx.list.item(rx.text.strong("Próximos Pasos:")," En el próximo módulo veremos los perfiles de inversores, intrumentos de inversion"
                                     " y sus caracteristicas."),
                        list_style_type="disc",
                        color="white"
                    ),
                ),
                #_____________________________________________________________________________________#
                max_width="600px",
                width="100%",
                margin_y=Size.SMALL.value,
                align_items="center",
            )
        ),
        footer(),
        background_color="black"
    )

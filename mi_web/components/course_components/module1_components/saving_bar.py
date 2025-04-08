import reflex as rx

# Datos representando ahorros mensuales
data = [{"name": f"Mes {i}", "Ahorro $": 10000 * i} for i in range(1, 13)]

def saving_bar():
    return rx.recharts.bar_chart(
        # Barra con animación
        rx.recharts.bar(
            data_key="Ahorro $",
            stroke=rx.color("pink", 10),
            fill=rx.color("blue", 11),
            name="Ahorro Mensual", 
            is_animation_active=True,
            animation_begin=150,
            animation_duration=1800,
            animation_easing="ease"
        ),
        # Eje X (meses)
        rx.recharts.x_axis(
            data_key="name",
            stroke=rx.color("mauve", 1)
        ),
        # Eje Y (valores)
        rx.recharts.y_axis(
            stroke=rx.color("mauve", 1),
            name="Ahorro ($)"
        ),
        # Grilla de fondo
        rx.recharts.cartesian_grid(
            stroke=rx.color("mauve", 2),
            stroke_dasharray="3 3"
        ),
        # Tooltip para interactividad
        rx.recharts.graphing_tooltip(),
        # Leyenda
        rx.recharts.legend(
            layout="horizontal",
            vertical_align="top",
            wrapper_style={"padding_bottom": "10px"}
        ),
        # Configuración general
        data=data,
        width="100%",
        max_width="600px",
        height=300,
    )
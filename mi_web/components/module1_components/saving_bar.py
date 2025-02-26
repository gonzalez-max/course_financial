import reflex as rx

data = [{"name": f"Mes {i}", "uv": 10000 * i} for i in range(1, 13)]

def saving_bar():
    return rx.recharts.bar_chart(
        rx.recharts.bar(
            data_key="uv",
            stroke=rx.color("pink", 12),
            fill=rx.color("pink", 11),
            is_animation_active=True,
            animation_begin=150,
            animation_duration=1800 ,
            animation_easing= "ease"
        ),
        rx.recharts.x_axis(data_key="name",stroke=rx.color("mauve",1)),
        rx.recharts.y_axis(stroke=rx.color("yellow",1)),
        rx.recharts.cartesian_grid(stroke=rx.color("yellow",1),stroke_dasharray="3 3"),
        data=data,
        width="100%",
        height=300,
    )
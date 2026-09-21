from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "assets" / "downloads"
OUTPUT.mkdir(parents=True, exist_ok=True)

FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
pdfmetrics.registerFont(TTFont("GreySans", FONT_REGULAR))
pdfmetrics.registerFont(TTFont("GreySans-Bold", FONT_BOLD))

PURPLE = colors.HexColor("#66447A")
LIGHT_PURPLE = colors.HexColor("#EEE7F1")
INK = colors.HexColor("#28232D")
MUTED = colors.HexColor("#635C68")
GRID = colors.HexColor("#BDB4C2")


COPY = {
    "en": {
        "filename": "grey-wellness-7-day-sleep-diary.pdf",
        "eyebrow": "GREY WELLNESS  |  SLEEP RESOURCE",
        "title": "My 7-Day Sleep Diary",
        "intro": "Complete this diary in the morning. Estimate what you remember instead of watching the clock during the night. Your estimates do not have to be perfect to be useful.",
        "total": "Total sleep time: the sleep window minus time falling asleep and time awake during the night.",
        "efficiency": "Sleep efficiency: the percentage of your sleep window that you spent asleep.",
        "headers": ["Date", "Got into bed", "Attempted sleep", "Falling asleep\n(min)", "Awake at night\n(min)", "Final awakening", "Got out of bed", "Naps\n(min)", "Total sleep\n(min)", "Efficiency\n(%)", "Factors"],
        "factors": "Examples: stress or worry, caffeine, alcohol, pain, medication, screens, noise, light, temperature, or a schedule change.",
        "note": "This diary provides general education. It does not diagnose or treat a sleep problem and is not a substitute for individualized care.",
    },
    "es": {
        "filename": "grey-wellness-diario-de-sueno-7-dias.pdf",
        "eyebrow": "GREY WELLNESS  |  RECURSO PARA EL SUEÑO",
        "title": "Mi Diario de Sueño de 7 Días",
        "intro": "Completa este diario por la mañana. Calcula lo que recuerdes en vez de mirar el reloj durante la noche. Tus estimaciones no tienen que ser perfectas para ser útiles.",
        "total": "Tiempo total de sueño: la ventana de sueño menos el tiempo para dormirte y el tiempo despiertx durante la noche.",
        "efficiency": "Eficiencia del sueño: el porcentaje de tu ventana de sueño que pasaste dormidx.",
        "headers": ["Fecha", "Te acostaste", "Intentaste dormir", "Para dormirte\n(min)", "Despiertx de noche\n(min)", "Despertar final", "Saliste de la cama", "Siestas\n(min)", "Sueño total\n(min)", "Eficiencia\n(%)", "Factores"],
        "factors": "Ejemplos: estrés o preocupación, cafeína, alcohol, dolor, medicamentos, pantallas, ruido, luz, temperatura o un cambio de horario.",
        "note": "Este diario ofrece educación general. No diagnostica ni trata un problema del sueño y no reemplaza una atención individualizada.",
    },
}


def build_pdf(language: str):
    text = COPY[language]
    path = OUTPUT / text["filename"]
    doc = SimpleDocTemplate(
        str(path),
        pagesize=landscape(letter),
        rightMargin=0.34 * inch,
        leftMargin=0.34 * inch,
        topMargin=0.30 * inch,
        bottomMargin=0.28 * inch,
        title=text["title"],
        author="Grey Wellness",
    )
    body = ParagraphStyle("body", fontName="GreySans", fontSize=8.2, leading=10.2, textColor=MUTED, alignment=TA_LEFT)
    small = ParagraphStyle("small", fontName="GreySans", fontSize=7.2, leading=8.6, textColor=MUTED)
    eyebrow = ParagraphStyle("eyebrow", fontName="GreySans-Bold", fontSize=7.8, leading=9, textColor=PURPLE, spaceAfter=3)
    title = ParagraphStyle("title", fontName="GreySans-Bold", fontSize=20, leading=22, textColor=INK, spaceAfter=6)
    header = ParagraphStyle("header", fontName="GreySans-Bold", fontSize=6.8, leading=7.8, textColor=INK, alignment=TA_LEFT)

    story = [
        Paragraph(text["eyebrow"], eyebrow),
        Paragraph(text["title"], title),
        Paragraph(text["intro"], body),
        Spacer(1, 5),
        Table(
            [[Paragraph(f"<b>{text['total'].split(':')[0]}:</b>{text['total'].split(':', 1)[1]}", small), Paragraph(f"<b>{text['efficiency'].split(':')[0]}:</b>{text['efficiency'].split(':', 1)[1]}", small)]],
            colWidths=[5.0 * inch, 5.0 * inch],
            style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), LIGHT_PURPLE), ("BOX", (0, 0), (-1, -1), 0.6, GRID), ("INNERGRID", (0, 0), (-1, -1), 0.4, GRID), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7), ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5)]),
        ),
        Spacer(1, 8),
    ]

    table_data = [[Paragraph(value.replace("\n", "<br/>"), header) for value in text["headers"]]]
    table_data.extend([[""] * len(text["headers"]) for _ in range(7)])
    widths = [0.45, 0.66, 0.76, 0.62, 0.68, 0.72, 0.72, 0.46, 0.62, 0.58, 2.40]
    diary_table = Table(table_data, colWidths=[value * inch for value in widths], rowHeights=[0.43 * inch] + [0.49 * inch] * 7, repeatRows=1)
    diary_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), LIGHT_PURPLE),
        ("TEXTCOLOR", (0, 0), (-1, 0), INK),
        ("BOX", (0, 0), (-1, -1), 0.8, GRID),
        ("INNERGRID", (0, 0), (-1, -1), 0.45, GRID),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.extend([
        diary_table,
        Spacer(1, 7),
        Paragraph(text["factors"], small),
        Spacer(1, 4),
        Paragraph(text["note"], small),
    ])
    doc.build(story)
    return path


for locale in ("en", "es"):
    print(build_pdf(locale))

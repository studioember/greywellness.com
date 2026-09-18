"""Build the branded, two-week SHIP question-and-answer printable diaries."""
from pathlib import Path
import shutil
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle

ROOT = Path(__file__).resolve().parents[1]
pdfmetrics.registerFont(TTFont('Brand', '/System/Library/Fonts/Supplemental/Arial.ttf'))
pdfmetrics.registerFont(TTFont('BrandBold', '/System/Library/Fonts/Supplemental/Arial Bold.ttf'))
PURPLE = colors.HexColor('#69365B')
PALE = colors.HexColor('#F3EDF1')
COPY = {
'en': {
 'file':'grey-wellness-14-day-sleep-diary.pdf', 'title':'Two Week Sleep Diary', 'week':'Week', 'name':'Name', 'date':"Today's date", 'day':'Day',
 'instruction':'Please complete each morning. Write your answers in the column for that morning. Circle a.m. or p.m. for clock times.',
 'source':'Adapted from the Stanford Sleep Health and Insomnia Program Sleep Diary.',
 'questions':[
 'Did you take any over-the-counter, prescription medicine or alcohol to help you sleep?',
 'What time did you get into bed?',
 'What time did you try to go to sleep?',
 'How long did it take you to fall asleep?',
 'How many times did you wake up, not counting your final awakening?',
 'In total, how long did these awakenings last?',
 'Did you wake up earlier than you planned to wake up? If so, by how much?',
 'What time was your final awakening?',
 'What time did you get out of bed for the day?',
 'In total, how long did you sleep?',
 'How would you rate the quality of your sleep?<br/>(1 = very poor ... 5 = very good)',
 'How rested or refreshed did you feel when you woke up for the day?<br/>(1 = not at all rested ... 4 = well rested)',
 'In total, how long did you nap or doze yesterday?',
 'Comments, if applicable'],
 'med':'Medication / alcohol:<br/>_______________<br/>Dose: __________<br/>Taken at: ________',
 'time':'____ : ____<br/>a.m. / p.m.', 'duration':'_____ hour(s)<br/>_____ minutes', 'early':'Yes / No<br/>_____ hour(s)<br/>_____ minutes',
},
'es': {
 'file':'grey-wellness-diario-de-sueno-14-dias.pdf', 'title':'Diario de sueño de dos semanas', 'week':'Semana', 'name':'Nombre', 'date':'Fecha de hoy', 'day':'Día',
 'instruction':'Completa el diario cada mañana, en la columna correspondiente. Al registrar una hora, marca a. m. o p. m.',
 'source':'Adaptado del Sleep Diary del Stanford Sleep Health and Insomnia Program.',
 'questions':[
 '¿Tomaste algún medicamento de venta libre, recetado o alcohol para ayudarte a dormir?',
 '¿A qué hora te acostaste?',
 '¿A qué hora intentaste dormir?',
 '¿Cuánto tardaste en dormirte?',
 '¿Cuántas veces despertaste, sin contar el despertar final?',
 '¿Cuánto duraron en total esos despertares?',
 '¿Despertaste antes de lo planeado? Si fue así, ¿cuánto antes?',
 '¿A qué hora fue tu despertar final?',
 '¿A qué hora saliste de la cama para comenzar el día?',
 '¿Cuánto dormiste en total?',
 '¿Cómo calificarías la calidad de tu sueño?<br/>(1 = muy mala ... 5 = muy buena)',
 '¿Qué tan descansadx te sentiste al despertar para comenzar el día?<br/>(1 = nada descansadx ... 4 = bien descansadx)',
 '¿Cuánto tiempo dormiste siesta o dormitaste ayer en total?',
 'Comentarios, si corresponde'],
 'med':'Medicamento / alcohol:<br/>_______________<br/>Dosis: __________<br/>Hora: __________',
 'time':'____ : ____<br/>a. m. / p. m.', 'duration':'_____ hora(s)<br/>_____ minutos', 'early':'Sí / No<br/>_____ hora(s)<br/>_____ minutos',
}}


GUIDE = {
'en': {
 'title': 'How to complete your sleep diary',
 'intro': 'Complete one column each morning for the previous night. Write the date of that morning at the top. Use your best estimates; you do not need to check the clock during the night. Complete days 1–7 on page 1 and days 8–14 on page 2.',
 'left': [
 ('1. Medication or alcohol', 'List what you took to help you sleep, the dose or amount, and the time you took it. Write “none” if you did not take anything.'),
 ('2–3. Bedtime and trying to sleep', 'Row 2 is when you got into bed. Row 3 is when you began trying to sleep. These may differ if you read or relaxed in bed first. Circle a.m. or p.m.'),
 ('4. SOL — time to fall asleep', 'Sleep onset latency (SOL) is the time between starting to try to sleep and first falling asleep. Example: you tried to sleep at 11:00 p.m. and fell asleep around 11:30 p.m. Your SOL is 0 hours, 30 minutes.'),
 ('5. Number of awakenings', 'Count how many times you woke after first falling asleep. Do not count your final awakening. Write 0 if there were none.'),
 ('6. WASO — awake during the night', 'Wake after sleep onset (WASO) is the total time awake after first falling asleep and before your final awakening. Add the awakenings together. Example: 10 minutes + 20 minutes + 15 minutes = 0 hours, 45 minutes. Do not include SOL or time awake after your final awakening.'),
 ('7. Waking earlier than planned', 'Circle yes or no. If yes, record how much earlier you woke than you had planned. Example: waking at 5:30 a.m. instead of 6:30 a.m. is 1 hour, 0 minutes early.')],
 'right': [
 ('8–9. Final awakening and leaving bed', 'Row 8 is the last time you woke before starting your day. Row 9 is when you actually got out of bed for the day. Record both, even if the times are the same.'),
 ('10. Total sleep time', 'Estimate how much you actually slept that night, excluding time awake. One way to check: take the time from trying to sleep (row 3) to final awakening (row 8), then subtract SOL (row 4) and WASO (row 6). Record naps separately in row 13.'),
 ('Example of total sleep time', 'Trying to sleep at 11:00 p.m. and waking finally at 7:00 a.m. gives an 8-hour window. Subtract 30 minutes of SOL and 45 minutes of WASO: total sleep time is 6 hours, 45 minutes.'),
 ('11–12. Sleep quality and restfulness', 'For row 11, choose a number from 1 (very poor) to 5 (very good). For row 12, choose 1 (not at all rested) to 4 (well rested). These are your impressions; there is no right answer.'),
 ('13. Naps and dozing', 'Add all the time you napped or dozed during the previous day. Write 0 hours, 0 minutes if you did not nap.'),
 ('14. Comments', 'Note anything you would like to discuss, such as a schedule change or something unusual about that night. If you cannot remember an answer, leave it blank rather than writing 0.')],
 'footer': 'Use hours and minutes for durations: 90 minutes = 1 hour, 30 minutes. Bring the completed diary to your appointment.'
},
'es': {
 'title': 'Cómo completar tu diario de sueño',
 'intro': 'Completa una columna cada mañana sobre la noche anterior. Escribe arriba la fecha de esa mañana. Haz tu mejor cálculo; no necesitas mirar el reloj durante la noche. Registra los días 1–7 en la página 1 y los días 8–14 en la página 2.',
 'left': [
 ('1. Medicamentos o alcohol', 'Anota qué tomaste para ayudarte a dormir, la dosis o cantidad y la hora. Escribe “ninguno” si no tomaste nada.'),
 ('2–3. Acostarte e intentar dormir', 'La fila 2 corresponde a la hora en que te metiste en la cama. La fila 3 es cuando empezaste a intentar dormir. Pueden ser distintas si primero leíste o descansaste en la cama. Marca a. m. o p. m.'),
 ('4. SOL — tiempo para dormirte', 'La latencia de inicio del sueño (SOL, por sus siglas en inglés) es el tiempo desde que empiezas a intentar dormir hasta que te duermes. Ejemplo: intentaste dormir a las 11:00 p. m. y te dormiste cerca de las 11:30 p. m. Tu SOL es 0 horas, 30 minutos.'),
 ('5. Número de despertares', 'Cuenta cuántas veces despertaste después de haberte dormido. No incluyas el despertar final. Escribe 0 si no hubo despertares.'),
 ('6. WASO — tiempo despiertx en la noche', 'WASO es el tiempo total que estuviste despiertx después de dormirte por primera vez y antes del despertar final. Suma esos despertares: 10 + 20 + 15 minutos = 0 horas, 45 minutos. No incluyas el tiempo para dormirte (SOL) ni el tiempo despiertx después del despertar final.'),
 ('7. Despertar antes de lo planeado', 'Marca sí o no. Si respondes sí, anota cuánto antes despertaste. Por ejemplo, despertar a las 5:30 a. m. en vez de las 6:30 a. m. equivale a 1 hora, 0 minutos antes.')],
 'right': [
 ('8–9. Despertar final y salir de la cama', 'En la fila 8 anota la última vez que despertaste antes de comenzar el día. En la fila 9, la hora en que saliste de la cama para levantarte. Completa ambas, aunque coincidan.'),
 ('10. Tiempo total de sueño', 'Calcula cuánto dormiste esa noche, sin incluir el tiempo despiertx. Para comprobarlo, toma el tiempo entre intentar dormir (fila 3) y el despertar final (fila 8), y resta SOL (fila 4) y WASO (fila 6). Las siestas van aparte, en la fila 13.'),
 ('Ejemplo de tiempo total de sueño', 'Si intentaste dormir a las 11:00 p. m. y tu despertar final fue a las 7:00 a. m., pasaron 8 horas. Resta 30 minutos de SOL y 45 minutos de WASO: dormiste 6 horas, 45 minutos.'),
 ('11–12. Calidad del sueño y descanso', 'En la fila 11 elige un número del 1 (muy mala) al 5 (muy buena). En la fila 12, del 1 (nada descansadx) al 4 (bien descansadx). Describe cómo te sentiste; no hay una respuesta correcta.'),
 ('13. Siestas y momentos de sueño', 'Suma el tiempo que dormiste siesta o dormitaste durante el día anterior. Si no hubo siestas, escribe 0 horas, 0 minutos.'),
 ('14. Comentarios', 'Anota lo que quieras conversar en consulta, como un cambio de horario o algo inusual esa noche. Si no recuerdas una respuesta, déjala en blanco en vez de escribir 0.')],
 'footer': 'Usa horas y minutos para las duraciones: 90 minutos = 1 hora, 30 minutos. Lleva el diario completo a tu consulta.'
}}

def draw_guide(c, lang, logo):
 g=GUIDE[lang]
 c.setFillColor(PURPLE);c.rect(0,606,792,6,fill=1,stroke=0)
 c.drawImage(ImageReader(logo),24,555,width=190,height=190*logo.height/logo.width,mask='auto')
 c.setFont('BrandBold',18);c.drawRightString(768,571,g['title'])
 c.setFont('Brand',9);c.drawRightString(768,552,'3 / 3')
 body=ParagraphStyle('guide',fontName='Brand',fontSize=9,leading=12,textColor=colors.HexColor('#302B30'))
 title=ParagraphStyle('guideheading',parent=body,fontName='BrandBold',fontSize=10,leading=13,textColor=PURPLE)
 def put(text,x,y,width,style):
  para=Paragraph(text,style);_,h=para.wrap(width,1000);para.drawOn(c,x,y-h);return y-h
 top=put(g['intro'],24,534,744,body)-17
 for x,col in [(24,'left'),(408,'right')]:
  y=top
  for heading,text in g[col]:
   y=put(heading,x,y,360,title)-3
   y=put(text,x,y,360,body)-12
  assert y>60, (lang,col,y)
 put(g['footer'],24,49,744,body)
 c.setFont('BrandBold',8);c.setFillColor(PURPLE);c.drawRightString(768,16,'greywellness.com')
 c.showPage()

def build(lang):
 t=COPY[lang]
 out=ROOT/'output/pdf'/t['file'];out.parent.mkdir(parents=True,exist_ok=True)
 c=canvas.Canvas(str(out),pagesize=landscape(letter));c.setTitle(t['title']);c.setAuthor('Grey Wellness')
 logo=Image.open(ROOT/'assets/img/grey-wellness-horizontal-purple.png');logo=logo.crop(logo.getbbox())
 question=ParagraphStyle('question',fontName='Brand',fontSize=8,leading=9.5,textColor=colors.HexColor('#302B30'))
 answer=ParagraphStyle('answer',parent=question,fontSize=7,leading=10)
 head=ParagraphStyle('head',parent=question,fontName='BrandBold',alignment=1,textColor=PURPLE)
 heights=[30,53,27,27,27,27,27,37,27,27,27,30,39,27,32]
 for week in (1,2):
  c.setFillColor(PURPLE);c.rect(0,606,792,6,fill=1,stroke=0)
  c.drawImage(ImageReader(logo),24,555,width=190,height=190*logo.height/logo.width,mask='auto')
  c.setFont('BrandBold',19);c.drawRightString(768,571,t['title'])
  c.setFont('Brand',9);c.drawRightString(768,553,f"{t['week']} {week} / 2")
  c.setFillColor(colors.HexColor('#302B30'));c.drawString(24,537,f"{t['name']}: _________________________________________")
  c.setFont('Brand',8);c.drawString(24,522,t['instruction'])
  rows=[[Paragraph(t['date'],head)]+[Paragraph(f"{t['day']} {(week-1)*7+i+1}<br/>___ / ___ / ___",head) for i in range(7)]]
  for i,q in enumerate(t['questions']):
   value = t['med'] if i==0 else t['time'] if i in (1,2,7,8) else t['duration'] if i in (3,5,9,12) else t['early'] if i==6 else '________' if i in (4,10,11) else ''
   rows.append([Paragraph(f'<b>{i+1}.</b> {q}',question)]+[Paragraph(value,answer) for _ in range(7)])
  table=Table(rows,colWidths=[205]+[77]*7,rowHeights=heights)
  table.setStyle(TableStyle([
   ('GRID',(0,0),(-1,-1),.45,colors.HexColor('#B6A9B2')),
   ('BACKGROUND',(0,0),(-1,0),PALE),('BACKGROUND',(0,1),(0,-1),colors.HexColor('#FAF7F9')),
   ('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),5),('RIGHTPADDING',(0,0),(-1,-1),5),
   ('TOPPADDING',(0,0),(-1,-1),3),('BOTTOMPADDING',(0,0),(-1,-1),3)]))
  table.wrapOn(c,744,500);table.drawOn(c,24,509-sum(heights))
  c.setFont('Brand',7);c.drawString(24,23,t['source']);c.setFillColor(PURPLE);c.setFont('BrandBold',8);c.drawRightString(768,23,'greywellness.com')
  c.showPage()
 draw_guide(c,lang,logo)
 c.save();shutil.copyfile(out,ROOT/'assets/downloads'/t['file']);print(out)

if __name__=='__main__':
 for lang in COPY: build(lang)

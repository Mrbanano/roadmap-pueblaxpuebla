/* Datos compartidos: home (/) y detalle (/detalle/). Las casillas se guardan en localStorage con la misma llave. */
/* Fecha FIJA del foro. Para cambiarla, editar solo esta línea. */
const EVENT_DATE='2026-11-18';
const EVENT=new Date(EVENT_DATE+'T08:00:00-06:00');
const KEY='ppp-roadmap';
const LINKS=[
 ['Flyer OFICIAL (PDF)','https://drive.google.com/file/d/1Jzk7uDCnUsn6OHInKQK4Dz1gtNMWLFRy/view',1],
 ['Cartas de colaboración','https://drive.google.com/drive/folders/1YfIpxtd6gXX94Mox0wsaDJZMGWHKpuGN'],
 ['Cartas de invitación (ponentes)','https://drive.google.com/drive/folders/1Mb_r01usGljvQMvj9JSCDnoLhsXA4jF3'],
 ['Levantamiento de requerimientos','https://drive.google.com/drive/folders/1tm0_IOnsGm1H9nEi2JCRQ3LoBFALfHMf']
];
const D=[
 {id:'done',title:'Ya listo',num:'✓',mini:'Completado',done:true,groups:[
  {h:'Materiales',items:[
   {t:'Flyer oficial (versión Color, tabloide)',done:1},
   {t:'Cartas de colaboración: los 12 organismos (CLAUZ, Plásticos, Reuniones, Agroalimentario, Chignahuapan-Zacatlán, CCE, CANACINTRA, COPARMEX, CANIRAC, CMIC, CITEX y CNET)',done:1},
   {t:'Cartas de invitación a ponentes (7 cartas)',done:1},
   {t:'Metodología, parte 1 (distribución por sector)',done:1,note:'Falta unificar y revisar'}]}]},
 {id:'op',title:'Etapa operativa',num:'1',mini:'Plataforma, metodología, hotel y ponentes',groups:[
  {h:'Hotel y fecha',items:[
   {t:'Confirmar con el Hotel Quinta Real la reserva del 18 nov',date:'Esta semana · 23–27 oct'},
   {t:'Unificar la fecha 18 nov en todos los documentos',tag:'new',date:'Propuesta · 29 oct',note:'Flyer, cartas, plataforma y metodología deben decir 18 de noviembre'},
   {t:'Pedir cotización/confirmación por escrito: salón, desayuno, audio, proyector, estacionamiento',tag:'new',date:'Propuesta · 30 oct'},
   {t:'Definir montaje: presidium, registro, mesas por sector, señalética',tag:'new',date:'Propuesta · 6 nov'}]},
  {h:'Metodología y plataforma',items:[
   {t:'Unificar y revisar la metodología (partes 1 y siguientes)',date:'Propuesta · 29 oct'},
   {t:'Integrar la metodología en la plataforma del Observatorio',date:'Propuesta · 3 nov'},
   {t:'Desplegar la plataforma (registro, cupos por sector, app para organismos)',tag:'blk',date:'Propuesta · 30 oct'},
   {t:'Prueba de punta a punta: registro, confirmación, lista por sector',tag:'new',date:'Propuesta · 4 nov'},
   {t:'Instrumento del levantamiento listo (brechas tecnológicas, estado de derecho, macroeconomía)',tag:'new',date:'Propuesta · 9 nov'}]},
  {h:'Ponentes y programa',items:[
   {t:'Resolver viáticos de ponentes (qué se cubre y quién aprueba)',tag:'blk',date:'Propuesta · 28 oct'},
   {t:'Programa final con horarios, moderador y orden de intervenciones',tag:'new',date:'Propuesta · 6 nov'},
   {t:'Presidium: lista de invitados y orden de asientos',tag:'new',date:'Propuesta · 11 nov'},
   {t:'Coordinar con SEDETRA: protocolo, mensajes y logística institucional',tag:'new',date:'Propuesta · 6 nov'}]}]},
 {id:'conv',title:'Etapa de convocatoria',num:'2',mini:'Cartas, confirmaciones y asistencia',groups:[
  {h:'Colaboradores (organismos)',items:[
   {t:'Enviar cartas de colaboración (12 listas)',date:'Propuesta · 26 oct',tag:'blk'},
   {t:'Hacer las cartas a los demás organismos: CCE, CANACINTRA, COPARMEX, CANIRAC, CMIC, CITEX, CNET',done:1},
   {t:'Seguimiento y confirmación de cada organismo',date:'Hasta 4 nov'},
   {t:'Registrar lo que cada organismo aporta: contactos, difusión, empresas convocadas',tag:'new',date:'Hasta 6 nov'}]},
  {h:'Ponentes',items:[
   {t:'Enviar cartas de ponentes (7)',date:'Propuesta · 26 oct',tag:'blk'},
   {t:'Confirmación de cada ponente (asistencia, tema, requerimientos técnicos)',date:'Hasta 2 nov'},
   {t:'Plan B si algún ponente no confirma',tag:'new',date:'Propuesta · 4 nov'}]},
  {h:'Asistencia y estrategia',items:[
   {t:'Revisar asistencia: registros por sector contra cupo (mínimo 99 de 120)',date:'Primera revisión · 30 oct'},
   {t:'Sobreconvocar los sectores frágiles (5 lugares o menos)',tag:'new',date:'Propuesta · 2 nov'},
   {t:'Deadline para evaluar nueva estrategia de convocatoria',tag:'dl',date:'Propuesta · lunes 2 nov'},
   {t:'Difusión con el flyer oficial: redes, WhatsApp de cámaras y clústeres, prensa',tag:'new',date:'Desde 26 oct'},
   {t:'Lista de espera por sector',tag:'new',date:'Propuesta · 6 nov'},
   {t:'Cierre de registros',tag:'new',date:'Propuesta · 12 nov'}]},
  {h:'Invitados clave',items:[
   {t:'Invitar a Startupero',tag:'new',date:'Propuesta · 27 oct'},
   {t:'Invitar a Gaco como empresario textil',tag:'new',date:'Propuesta · 27 oct'}]}]},
 {id:'ev',title:'Etapa del evento',num:'3',mini:'Semana previa, día del foro y cierre',groups:[
  {h:'Semana previa',items:[
   {t:'Headcount final al hotel (desayuno y montaje)',tag:'new',date:'Propuesta · 13 nov'},
   {t:'Mensaje de confirmación y recordatorio a asistentes, con ubicación y hora de llegada',tag:'new',date:'Propuesta · 16 nov'},
   {t:'Gafetes, lista impresa de registro, QR de acceso',tag:'new',date:'Propuesta · 16 nov'},
   {t:'Ensayo técnico y de programa con el hotel',tag:'new',date:'17 nov'},
   {t:'Logística de ponentes: traslados, hospedaje y recepción',tag:'new',date:'Propuesta · 16 nov'}]},
  {h:'Día del foro · 18 nov',items:[
   {t:'Llegada del equipo y montaje',tag:'new',date:'06:00'},
   {t:'Registro y recepción de asistentes',tag:'new',date:'07:30'},
   {t:'Programa y levantamiento de necesidades',date:'08:00–11:45'},
   {t:'Foto, video y registro del evento',tag:'new'}]},
  {h:'Después',items:[
   {t:'Agradecimientos a ponentes, organismos y asistentes',tag:'new',date:'19–20 nov'},
   {t:'Procesar el levantamiento y cargar la data al Observatorio',tag:'new',date:'Propuesta · 27 nov'},
   {t:'Compartir a cada organismo su data sectorial (lo que se ofreció en la carta)',tag:'new',date:'Propuesta · 4 dic'},
   {t:'Reporte final y reconocimiento público a colaboradores',tag:'new',date:'Propuesta · 11 dic'}]}]}
];
const tagTxt={blk:'Bloquea',dl:'Deadline',new:'Falta definir'};
let st=JSON.parse(localStorage.getItem(KEY)||'{}');
function save(){localStorage.setItem(KEY,JSON.stringify(st));}
/* asigna llave y estado a cada tarea */
function hydrate(){
 let tot=0,dn=0;
 D.forEach(s=>{s.tot=0;s.dn=0;s.groups.forEach(g=>g.items.forEach((it,i)=>{
  it.k=s.id+'|'+g.h+'|'+i;const d=st[it.k]!==undefined?st[it.k]:!!it.done;it.d=d;s.tot++;tot++;if(d){s.dn++;dn++;}
 }));});
 return {tot,dn};
}
/* Días naturales que faltan para el foro, según la fecha de hoy en Ciudad de México. Negativo si ya pasó. */
function daysUntilEvent(){
 const hoy=new Date().toLocaleDateString('en-CA',{timeZone:'America/Mexico_City'});
 const a=Date.UTC(...hoy.split('-').map((n,i)=>i==1?n-1:+n));
 const b=Date.UTC(...EVENT_DATE.split('-').map((n,i)=>i==1?n-1:+n));
 return Math.round((b-a)/86400000);
}
/* Pinta el contador: número y leyenda ("días", "día", "¡Es hoy!", "ya pasó"). */
function paintCountdown(numEl,labelEl){
 const n=daysUntilEvent();
 numEl.textContent=n>0?n:(n===0?'¡Hoy!':'0');
 if(labelEl)labelEl.textContent=n>1?'días para el foro':n===1?'día para el foro':n===0?'es el foro':'el foro ya pasó';
}
function daysLeft(){return Math.max(0,daysUntilEvent());}

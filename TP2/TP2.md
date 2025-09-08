# TRABAJO PRÁCTICO N°2

## Universidad Nacional de Córdoba  
**Carrera:** Ingeniería en Computación  
**Cátedra:** Comunicaciones de Datos  
**Docentes:** Santiago M. Henn — Facundo Oliva Cuneo  
**Fecha de entrega:** 08/09/2025  

---

## Integrantes (Grupo *Latency Killers*)

- **Dante Augsburger**  
  📧 *dante.augsburger@mi.unc.edu.ar*  
- **Martino Fioramonti**  
  📧 *martino.fioramonti@mi.unc.edu.ar*  
- **Tadeo Antonino**  
  📧 *tadeo.antonino@mi.unc.edu.ar*  
- **Ignacio Quintana**  
  📧 *ignacio.agustin.quintana@mi.unc.edu.ar*  

---

## Consigna 1 — Fenómeno físico #1

### a) ¿Qué fenómeno muestra la figura?  
La figura representa la **propagación de una onda electromagnética** desde un barco hacia un satélite. Este fenómeno permite transmitir información a través del espacio sin necesidad de cables, utilizando ondas de radio que viajan por el aire o el vacío.  

**Características principales:**
- **Atenuación por distancia:** A medida que la onda se aleja del transmisor, su intensidad disminuye. Esto se debe a la dispersión de energía en el espacio y a la absorción por el medio (atmósfera, humedad, etc.). 
- **Interacción con el entorno:** Aunque en la figura se muestra una trayectoria directa, en la realidad pueden intervenir fenómenos como:  
  - **Reflexión:** Las ondas pueden rebotar en superficies como el mar, generando trayectorias múltiples.

  - **Refracción:** Cambios en la densidad del aire (por temperatura o humedad) pueden desviar la trayectoria.

  - **Difracción:** En frecuencias bajas, las ondas pueden rodear obstáculos o curvarse ligeramente por el horizonte.

  - **Multipath:** Cuando la señal llega por varios caminos (directo y reflejado), puede causar interferencias o errores de sincronización.
- **Propagación por línea de vista:** La comunicación entre el barco y el satélite requiere que no haya obstáculos entre ambos. Las ondas electromagnéticas, especialmente en frecuencias altas (como microondas), se propagan en línea recta y son sensibles a obstrucciones.

---

### b) ¿A qué transmisiones afecta más? ¿Cuáles son más resilientes?
El fenómeno de propagación electromagnética —incluyendo atenuación, reflexión, refracción, difracción y multipath— afecta de manera diferente según el tipo de transmisión y la frecuencia utilizada.
- **Más afectados:**  
  - Comunicaciones inalámbricas de largo alcance en **HF/VHF/UHF**, donde la propagación depende mucho del entorno.  
  - En **bandas altas (GHz)**, como Wi-Fi o satélites, que necesitan línea de vista ya que son muy sensibles a la atenuación, obstáculos físicos y condiciones atmosféricas. Ejemplos: Wi-Fi (2.4 GHz / 5 GHz), enlaces satelitales, 4G/5G.
  - Situaciones con **multipath** (rebotes en edificios o en el mar) que generan interferencias entre copias de la misma señal.  

- **Más resilientes:**  
  - La **fibra óptica**, que transmite señales mediante pulsos de luz dentro de un cable de vidrio o plástico. Inmune a interferencias electromagnéticas, atenuación atmosférica y fenómenos de propagación. Es Ideal para enlaces de alta velocidad y larga distancia.
  - El **cable coaxial**, usados en redes LAN y televisión por cable ofrecen buena protección contra el ruido externo gracias a su blindaje o trenzado. Aunque tienen limitaciones de distancia, son muy estables en entornos controlados.
  - Los sistemas satelitales modernos con **corrección de errores y modulaciones adaptativas**, que compensan pérdidas.  

---

### c) ¿Por qué no se debe encender el celular en un avión? ¿Se relaciona con este fenómeno?
Sí, está relacionado:  
- El celular emite ondas de radio. En un avión, al no encontrar torres cercanas, **aumenta su potencia de transmisión**, llenando la cabina de señales que podrían interferir.  
- Esa interferencia puede afectar sistemas de comunicación y navegación, sobre todo en fases críticas (despegue y aterrizaje).  
- Además, dentro de un avión metálico, la señal rebota (multipath) y se vuelve menos predecible.  
- Por eso se exige el **modo avión**, que corta estas transmisiones.  

Actualmente, algunas aerolíneas permiten usar Wi-Fi o telefonía, pero a través de **sistemas internos del avión** que canalizan la comunicación de forma controlada hacia satélites, evitando interferencias.

---




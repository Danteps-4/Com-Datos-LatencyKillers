# Repaso de fundamentos esenciales e introducción a Packet Tracer

**Dante Augsburger**  
**Martino Fioramonti**
**Tadeo Antonino**

**Latency Killers**

**Universidad Nacional de Córdoba**  
**Comunicaciones de datos**
**Santiago M. Henn**  
**Facundo Oliva Cuneo**  
**28/08/2025**

---

### Información de los autores

- **_dante.augsburger@mi.unc.edu.ar_**
- **_martino.fioramonti@mi.unc.edu.ar_**
- **tadeo.antonino@mi.unc.edu.ar\_**

---

## Resumen

Se repasan los fundamentos esenciales de las comunicaciones (ondas electromagnéticas, modulación/demodulación, señales analógicas y digitales) y se aplican en distintos ejercicios prácticos. Además, se utiliza el simulador Packet Tracer para configurar una red simple.

**Palabras clave**: _Ondas electromagnéticas, modulación digital, señales discretas, BER, Packet Tracer_

---

## Introducción

Se estudian conceptos como ondas electromagnéticas, señales continuas y discretas, y las técnicas de modulación y demodulación que permiten transmitir información a través de distintos medios.
Se aborda la representación de la información digital, la transmisión mediante interfaces simples como UART, y las implicancias del uso de diferentes esquemas de modulación digital, evaluando su desempeño en términos de confiabilidad y tasa de error de bit.
Finalmente, se realiza una práctica en el simulador Packet Tracer para configurar una red inalámbrica básica, interconectar dispositivos y analizar el alcance y las características de la señal. Esto permite vincular la teoría con escenarios concretos de redes de datos y comprender mejor la relación entre la capa física y el transporte de información.

---

# Marco teórico / Modelo / Metodología

## Ondas electromagnéticas, modulación/demodulación, señales de tiempo continuo y discreto

### Actividad 1

Se puede observar del grafico que la onda completa un ciclo cada 60mm = 0,06m. Es decir que la longitud de onda es:

$λ=0,06m$

La frecuencia considerando que viaja a la velocidad de la luz($c=3.10^8 m/s$):

$f= \frac{c}{λ} = \frac{3.10^8}{0,06} = 5 GHz$

Según la ITU(Unión internacional de telecomunicaciones), esta onda está en:

> La region de microondas que va de 300MHz a 300GHz

> La banda SHF (Ultra alta frecuencia) que va de 3GHz a 30GHz

Algunos dispositivos que operan en esta banda son:

- Redes WiFi(2,4GHz y 5GHz)
- Sistemas de radar
- Comunicación satelital

La línea de trazos roja en la figura de la onda representa la atenuación de la señal electromagnética a medida que se propaga en el espacio, La intensidad disminuye con la distancia debido a pérdidas en el medio.

Poniendo como ejemplo las redes WiFi, sí se ve afectada por la atenuacion de la señal a medida que se propaga en el espacio. El WiFi a 5GHz tiene un alcance menor que a 2,4GHz porque se atenua más rápido. En la vida cotidiana es común notar que el WiFi 5GHz tiene buena velocidad cerca del router, pero a medida que te vas alejando pierde cobertura.

Como afecta a diferentes sistemas:

- Telefonía celular: Sí se ve afectada por la atenuacion y fenomenos como el fading(variación de la atenuación de la señal en función de variables como el tiempo, la posición geográfica y la radiofrecuencia)
- Cable coaxial: Mucho menos afectado, porque la señal viaja confinada en un medio físico.
- Fibra óptica: No, porque la transmisión se realiza con pulsos de luz confinados en el núcleo de la fibra.

---

## Señales digitales

### Actividad 2

Se quiere representar una transimisión serie, los bits se transmiten bit a bit a través de un único canal de comunicación. Es síncronica ya que se observa una señal de reloj compartida que coordina al transmisor y al receptor. La transmisión de bits se da en una sola dirección en ese instante.

No, no es el mejor paradigma si busco transimitir datos de forma bidireccional. En cuanto a la rapidez sí, porque es síncrono y no necesita bits de inicio/parada como una comunicacion asíncrona. Y en cuanto a la comunicación bidireccional sería mejor implementar dos canales separados para poder transimitir y recibir datos simultáneamente.

Tomando nuestro nombre de grupo: Latency Killers

- La cuarta letra es: "e"

- Identificando la letra "e" en codigo ASCII: 101

- Conviertiendo 101 a binario: 01100101

![Grafico](grafico.png)

Dada la pendiente en los niveles de tensión que se observan en el gráfico dados en el TP, la forma correcta de medir
es **en el centro de cada intervalo de bit**.

- Si se midiera en los bordes (donde ocurre la transición), podría haber dudas por ruido o por la propia pendiente.
- En cambio, en el punto medio de cada celda temporal el nivel ya está estabilizado en 0 o 1, lo cual garantiza una lectura confiable.

---

### Actividad 3

La técnica de modulación que se observa en el gráfico dado es **ASK (Amplitude Shift Keying)**,
también conocida como **modulación por desplazamiento de amplitud**.  
En este esquema, la amplitud de la portadora cambia en función de si el bit transmitido es 0 o 1.

La siguiente figura muestra cómo se vería la señal digital modulada en **ASK** para la secuencia binaria dada.  
Se observa que, en los intervalos donde el bit es “1”, aparece una portadora sinusoidal con amplitud constante,
mientras que en los intervalos donde el bit es “0” la portadora se apaga y la señal permanece en reposo.

![Grafico](image.png)

Otras técnicas de modulación basadas en los mismos principios son:

- **FSK (Frequency Shift Keying)**: varía la frecuencia de la portadora según el bit.
- **PSK (Phase Shift Keying)**: varía la fase de la portadora según el bit.
- **QAM (Quadrature Amplitude Modulation)**: combina variaciones de amplitud y fase para transmitir más bits por símbolo.

El **Bit Error Rate (BER)** es la tasa de error de bits, definida como la razón entre el número de bits
recibidos erróneamente y el número total de bits transmitidos.  
Es una medida de la confiabilidad del sistema de comunicación.

En términos de BER:

- **ASK** es la más sensible al ruido, ya que las variaciones de amplitud son muy vulnerables a interferencias.
- **FSK** mejora el desempeño, porque la frecuencia es más fácil de discriminar que la amplitud en entornos ruidosos.
- **PSK** suele tener aún mejor BER en condiciones de ruido moderado.
- **QAM**, al transmitir más información por símbolo, puede aumentar la eficiencia espectral, pero también se vuelve más sensible al ruido a medida que crece el número de niveles.

En general, **PSK y FSK** ofrecen mejores prestaciones que ASK en términos de BER para canales ruidosos.

---

## Resultados

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, mauris sit amet aliquet vestibulum, enim ante consectetur enim, vel sollicitudin odio risus vel libero. Integer eget ipsum sed eros luctus laoreet vel vel leo. Fusce ut dapibus nisl. Aliquam erat volutpat. Donec in elit non justo convallis vestibulum.

---

## Discusión y conclusiones

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, mauris sit amet aliquet vestibulum, enim ante consectetur enim, vel sollicitudin odio risus vel libero. Integer eget ipsum sed eros luctus laoreet vel vel leo. Fusce ut dapibus nisl. Aliquam erat volutpat. Donec in elit non justo convallis vestibulum.
